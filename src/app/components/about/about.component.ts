import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  contributors = [
    {
      name: "Frank Garcia",
      title: "Project Lead / Full-Stack Developer",
      description: "Born in Tucson, Arizona, Frank has a passion for software development on a range of platforms including web, mobile, and desktop. He has created multiple software solutions for Pepperdine University and is pursing a career in iOS, Web, or Blockchain development post graduation.",
      projects: [
        'The Proof Testament: <a href="https://github.com/Frank-The-Tank/The-Proof-Testament" target="_blank">GitHub</a>',
        'Slopes Differential Equations: <a href="https://itunes.apple.com/us/app/slopes-differential-equations/id1136920301?mt=8" target="_blank">App Store</a>',
        'Pepperdine University NetEvent Alert System: <a href="https://community.pepperdine.edu/it/about/careers/appdeveloper.htm" target="_blank">NetEvent</a>',
        'Pep9Pad: <a href="https://github.com/StanWarford/pep9pad" target="_blank">GitHub</a>',
        'Tower Defense: <a href="https://github.com/Frank-The-Tank/TowerDefense" target="_blank">GitHub</a>'
      ],
      linkedIn: 'https://www.linkedin.com/in/frank-garcia-35b456106/',
      gitHub: 'https://github.com/Frank-The-Tank',
      facebook: 'https://www.facebook.com/frank.garcia.16',
      twitter: '#',
      pic: "../../../assets/images/frank.jpg"
    },
    {
      name: "Giorgio Catania",
      title: "Antlr/Quilljs Developer",
      description: "cool guy",
      projects: ['The Proof Testament: <a href="https://github.com/Frank-The-Tank/The-Proof-Testament" target="_blank">GitHub</a>', 'The Second Proof Testament: LINK'],
      linkedIn: '#',
      gitHub: 'https://github.com/giorgio19',
      facebook: '#',
      twitter: '#',
      pic: "../../../assets/images/giorgio.jpg"
    },
    {
      name: "Micah Benn",
      title: "Back-End Software Developer",
      description: "neat guy",
      projects: ['The Proof Testament: <a href="https://github.com/Frank-The-Tank/The-Proof-Testament" target="_blank">GitHub</a>', 'Portfolio Page: <a href="http://micahbenn.com/ " target="_blank">Portfolio</a>'],
      linkedIn: 'https://www.linkedin.com/in/micahbenn/',
      gitHub: 'https://github.com/micahbenn',
      facebook: '#',
      twitter: '#',
      pic: "../../../assets/images/micah.jpeg"
    },
    {
      name: "Drake Ramsdall",
      title: "Front-End Software Developer",
      description: "Drake was born and raised in the city of Tacoma, Washington. From a young age, he has always had a goal of creating his own video game one day. Drake hopes that, through the things that he has learned at Pepperdine University and outside of school, he will be able to accomplish that feat and create the next big game.",
      projects: ['The Proof Testament: <a href="https://github.com/Frank-The-Tank/The-Proof-Testament" target="_blank">GitHub</a>', 'The Second Proof Testament: LINK'],
      linkedIn: '#',
      gitHub: 'https://github.com/deerake',
      facebook: '#',
      twitter: '#',
      pic: "../../../assets/images/drake.jpg"
    },
    {
      name: "Damir Kaliyev",
      title: "Front-End Software Developer",
      description: "nice guy",
      projects: ['The Proof Testament: <a href="https://github.com/Frank-The-Tank/The-Proof-Testament" target="_blank">GitHub</a>', 'The Second Proof Testament: LINK'],
      linkedIn: 'https://www.linkedin.com/in/damir-kaliyev-604368b9/',
      gitHub: 'https://github.com/carenekl',
      facebook: '#',
      twitter: '#',
      pic: "../../../assets/images/damir.jpg"
    },
    {
      name: "Zack Rhodes",
      title: "Database Development and Management",
      description: "Born in Seattle, Washington and raised in the barren wasteland that is known as Palm Springs, California, Zack is an aspiring Computer Science student and hopes to become a software engineer post-graduation.",
      projects: ['The Proof Testament: <a href="https://github.com/Frank-The-Tank/The-Proof-Testament" target="_blank">GitHub</a>', 'The Second Proof Testament: LINK'],
      linkedIn: 'https://www.linkedin.com/in/zackery-rhodes-32884a149/',
      gitHub: 'https://github.com/ruskimagic',
      facebook: 'https://www.facebook.com/zack.rhodes.35',
      twitter: '',
      pic: "../../../assets/images/zach.jpg"
    },
    {
      name: "James Maynard",
      title: "Front-End Software Developer",
      description: 'This is James. James is a proud Naperville native. James will rave for hours about Chicago deep dish pies. James has a wide variety of catchphrases, including “dope”, “fasho”, and “I’m the man.” James’ idol is Ross Rhea ("Goon" or bust).',
      projects: ['The Proof Testament: <a href="https://github.com/Frank-The-Tank/The-Proof-Testament" target="_blank">GitHub</a>', 'The Second Proof Testament: LINK'],
      linkedIn: 'https://www.linkedin.com/in/james-maynard-ba9837120/',
      gitHub: 'https://github.com/JamesMaynard26',
      facebook: '#',
      twitter: '#',
      pic: "../../../assets/images/james.jpg"
    },
    {
      name: "Josh Myers",
      title: "Front-End Software Developer",
      description: "Hailing from Moorpark, CA, Josh finds enjoyment in eating, playing basketball, and chocolate chip cookies (yes, it's a hobby). One of his fondest memories at Pepperdine should not be disclosed on the public domain, but it involves himself, James Maynard, Korean BBQ, and an exam 4 hours later.",
      projects: ['The Proof Testament: <a href="https://github.com/Frank-The-Tank/The-Proof-Testament" target="_blank">GitHub</a>', 'The Daily Shopper: <a href="http://www.dailyshopperapp.com/" target="_blank">App</a>'],
      linkedIn: 'https://www.linkedin.com/in/joshua-myers-a98b83122/',
      gitHub: 'https://github.com/jamyers2',
      facebook: '#',
      twitter: '#',
      pic: "../../../assets/images/josh.jpg"
    },
    {
      name: "Dr. Stan Warford",
      title: "The biggest sport's fan",
      description: "Slick",
      projects: "",
      linkedIn: 'https://www.linkedin.com/in/stan-warford-b5a476101/',
      gitHub: 'https://github.com/StanWarford',
      facebook: '#',
      twitter: '#',
      pic: ""
    },
    {
      name: "Professor Brad Cupp",
      title: "Capstone Advisor and Teacher",
      description: "",
      projects: "",
      linkedIn: '#',
      gitHub: 'https://github.com/Cupp',
      facebook: '#',
      twitter: '#',
      pic: ""
    }
  ];

  constructor() { }

  ngOnInit() {
  }



}
