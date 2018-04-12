# The Proof Testament  

 https://prooftestament.com/
 
 ![alt text](./src/assets/images/logoName.png)

### Overview

The Proof Testament is a web app used for solving formal mathematical logic proofs. Created by a team of 8 students at Pepperdine University the app is used in multiple classrooms to allow students and teachers to easily solve mathematical proofs using formal methods, and teach students how the field of computational logic works.  

### Technology

Frontend: Angular(5) / Bootstrap / Scss

Backend: NodeJS / ExpressJS / AngularFire v2.0

Database: Firebase 

Hosting: Firebase Hosting

Parsing: MathJAX / Antlr

Editor: QuillJS 

### Download and Setup

1. Create a clone of the source repository in terminal or command line using "git clone https://github.com/Frank-The-Tank/The-Proof-Testament.git"

2. Navigate to the project folder in terminal or command line and run "npm install". If this doesn't work install yarn by running "npm install -g yarn" and then run "yarn". This is a custom package manager similar to npm.

### Starting the Server

1. To start the server simply use terminal/command line and run the command "ng serve" within the project folder.

2. To see the web app running navigate to "localhost:4200" in your browser.

3. When you are finished with your current session make sure to end the NodeJS server session using CTRL-C in terminal/command line.

### Starting the PDF Server

1. Install the separate dependancies for `pdfServer/package.json`.

2. Navigate to the "pdfServer" folder, and run the command `node server.js`.

3. The server will be running on localhost:4201.

### Additional Help
If you are receiving the error "Error: Could not find module '@angular-devkit/core'" run npm install @angular-devkit/core --save-dev. This is a fix until the angularCLI developers release a patch.

### Awknowledgements
This project uses a heavily modified version of the popular QuillJS library (https://github.com/quilljs/quill)
