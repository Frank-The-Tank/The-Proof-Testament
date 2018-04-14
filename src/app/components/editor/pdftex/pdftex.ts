// import * as promise from './promise2';

import { will } from './will';

var PDFTeX = function() {
  var worker = new Worker('assets/pdftex-worker.js');
  var self = this;
  var initialized = false;

  self.on_stdout = function(msg) {
    console.log(msg);
  }

  self.on_stderr = function(msg) {
    console.log(msg);
  }

  worker.onmessage = function(ev) {
    var data = JSON.parse(ev.data);
    var msg_id;

    if(!('command' in data))
      console.log("missing command!", data);
    switch(data['command']) {
      case 'ready':
        onready.done(true);
        break;
      case 'stdout':
      case 'stderr':
        self['on_'+data['command']](data['contents']);
        break;
      default:
        msg_id = data['msg_id'];
        if(('msg_id' in data) && (msg_id in promises)) {
          console.log(data['result']);

          promises[msg_id].done(data['result']);
        }
        else
          console.warn('Unknown worker message '+msg_id+'!');
    }
  }

  var onready = new will.Will();

  var promises = [];
  var chunkSize = undefined;

  var sendCommand = function(cmd) {
    var w = new will.Will();

    var msg_id = promises.push(w) - 1;

    onready.then(function() {
      cmd['msg_id'] = msg_id;
      worker.postMessage(JSON.stringify(cmd));
    });

    return w;
  };

  var determineChunkSize = function() {
    var size = 1024;
    var max = undefined; 
    var min = undefined;
    var delta = size;
    var success = true;
    var buf;

    while(Math.abs(delta) > 100) {
      if(success) {
        min = size;
        if(typeof(max) === 'undefined')
          delta = size;
        else
          delta = (max-size)/2;
      }
      else {
        max = size;
        if(typeof(min) === 'undefined')
          delta = -1*size/2;
        else
          delta = -1*(size-min)/2;
      }
      size += delta;

      success = true;
      try {
        buf = String.fromCharCode.apply(null, new Uint8Array(size));
        sendCommand({
          command: 'test',
          data: buf,
        });
      }
      catch(e) {
        success = false;
      }
    }

    return size;
  };

  var createCommand = function(command) {
    self[command] = function() {
      var args = [].concat.apply([], arguments);

      return sendCommand({
        'command':  command,
        'arguments': args,
      });
    }
  }

  createCommand('FS_createDataFile'); // parentPath, filename, data, canRead, canWrite
  createCommand('FS_readFile'); // filename
  createCommand('FS_unlink'); // filename
  createCommand('FS_createFolder'); // parent, name, canRead, canWrite
  createCommand('FS_createPath'); // parent, name, canRead, canWrite
  createCommand('FS_createLazyFile'); // parent, name, canRead, canWrite
  createCommand('FS_createLazyFilesFromList'); // parent, list, parent_url, canRead, canWrite
  createCommand('set_TOTAL_MEMORY'); // size

  var curry = function(obj, fn, args) {
    return function() {
      return obj[fn].apply(obj, args);
    }
  }

  self.compile = function(source_code) {
    var w = new will.Will();

    self.compileRaw(source_code).then(function(binary_pdf) {
      if(binary_pdf === false) {
        return w.done(false);
      }

      var pdf_dataurl = 'data:application/pdf;charset=binary;base64,' + window.btoa(binary_pdf);

      // var base64PDF = window.btoa(binary_pdf);

      return w.done(pdf_dataurl);
    });

    return w;
  }

  self.testOutput = function() {
    console.log("HERE")

    return;
  }

  self.compileRaw = function(source_code) {
    if(typeof(chunkSize) === "undefined") {
      chunkSize = determineChunkSize();
    }

    var commands;

    if(initialized) {
      commands = [
        curry(self, 'FS_unlink', ['/input.tex']),
      ];
    } else {
      commands = [
        curry(self, 'FS_createDataFile', ['/', 'input.tex', source_code, true, true]),
        curry(self, 'FS_createLazyFilesFromList', ['/', 'texlive.lst', './texlive', true, true]),
      ];
    }

    var sendCompile = function() {
      initialized = true;
      return sendCommand({
        'command': 'run',
        'arguments': ['-interaction=nonstopmode', '-output-format', 'pdf', 'input.tex'],
      });
    };

    var getPDF = function() {
      console.log(arguments);
      return self.FS_readFile('/input.pdf');
    }

    return will.chain(commands, []).then(sendCompile).then(getPDF);
  };
};

const instance = new PDFTeX()

export {instance as PDFTeX }