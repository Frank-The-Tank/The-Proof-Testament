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
      description: "Coming from the flat land of Texas, Giorgio now lives in SoCal. He joined Pepperdine not knowing what convo was nor that the school was religiously affiliated. But it all worked out and he now studies to finish his Computer Science and Mathematics major. He one day wishes to work at Google, Amazon, or Apple.",
      projects: ['The Proof Testament: <a href="https://github.com/Frank-The-Tank/The-Proof-Testament" target="_blank">GitHub</a>'],
      linkedIn: '#',
      gitHub: 'https://github.com/giorgio19',
      facebook: '#',
      twitter: '#',
      pic: "../../../assets/images/giorgio.jpg"
    },
    {
      name: "Micah Benn",
      title: "Back-End Software Developer",
      description: "My name is Micah Benn, and I've been a self-taught iOS and web developer since 13 years old. I now mainly work with Objective-C, Swift, Python, Java, and HTML/CSS.  After finding out about the iOS SDK, I began creating iOS apps. YouTube, StackOverflow, and GitHub were how I learned. A couple months after I began learning, I released my first app, Map with Camera. Since then, I have been enjoying expanding my skill set. In July 2013, I released Flöcle, a time-based matching game that would be eventually featured by Apple in their ''20 Under 20'' promotion in Asia.",
      projects: ['The Proof Testament: <a href="https://github.com/Frank-The-Tank/The-Proof-Testament" target="_blank">GitHub</a>', 'Portfolio Page: <a href="http://micahbenn.com/" target="_blank">Portfolio</a>'],
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
      projects: ['The Proof Testament: <a href="https://github.com/Frank-The-Tank/The-Proof-Testament" target="_blank">GitHub</a>'],
      linkedIn: 'https://www.linkedin.com/in/drake-ramsdall-07a007149/',
      gitHub: 'https://github.com/deerake',
      facebook: '#',
      twitter: '#',
      pic: "../../../assets/images/drake.jpg"
    },
    {
      name: "Damir Kaliyev",
      title: "Front-End Software Developer",
      description: "A Kazakhstan native, Damir Kaliyev is an avid computer programmer. His interests in Computer Science include web programming, video game development, and data science. He will be attending Bentley University in Boston, Massachusetts in Fall 2018 to complete his Master’s Degree in Business Analytics. In five years, Damir envisions himself as a strategic consultant in a non-profit organization.",
      projects: ['The Proof Testament: <a href="https://github.com/Frank-The-Tank/The-Proof-Testament" target="_blank">GitHub</a>', 'Hydrogen: <a href="https://github.com/nteract/hydrogen/" target="_blank">Github</a>'],
      linkedIn: 'https://www.linkedin.com/in/damir-kaliyev-604368b9/',
      gitHub: 'https://github.com/carenekl',
      facebook: '#',
      twitter: '#',
      pic: "../../../assets/images/damir.jpg"
    },
    {
      name: "Zack Rhodes",
      title: "Database Development and Management",
      description: "Zack Rhodes is an aspiring Computer Science student born in Seattle, Washington. He competed and excelled in Division-I water polo at Pepperdine University and he is a member of the United States National Water Polo team. Throughout his time at Pepperdine, the most compelling topics he found in the Computer Science curriculum were Formal Methods, Computer Networks, and Computer Systems.",
      projects: ['The Proof Testament: <a href="https://github.com/Frank-The-Tank/The-Proof-Testament" target="_blank">GitHub</a>'],
      linkedIn: 'https://www.linkedin.com/in/zackery-rhodes-32884a149/',
      gitHub: 'https://github.com/ruskimagic',
      facebook: 'https://www.facebook.com/zack.rhodes.35',
      twitter: '#',
      pic: "../../../assets/images/zach.jpg"
    },
    {
      name: "James Maynard",
      title: "Front-End Software Developer",
      description: 'James Maynard grew up in Naperville, Illinois and came to Pepperdine University with the original intent of pursuing a degree in Dentistry. After realizing that being a dentist is way less fun and interesting than being a computer programmer, he made the decision to switch his major to Computer Science and Mathematics. James has hopes of pursuing a career in chip design or some other aspect of Computer Hardware in the future.',
      projects: ['The Proof Testament: <a href="https://github.com/Frank-The-Tank/The-Proof-Testament" target="_blank">GitHub</a>'],
      linkedIn: 'https://www.linkedin.com/in/james-maynard-ba9837120/',
      gitHub: 'https://github.com/JamesMaynard26',
      facebook: '#',
      twitter: '#',
      pic: "../../../assets/images/james.jpg"
    },
    {
      name: "Josh Myers",
      title: "Front-End Software Developer",
      description: "Josh Myers grew up in Moorpark, CA and discovered his passion for Computer Science throughout his time at Pepperdine. He has thoroughly enjoyed his exposure to mobile app development during his experience debugging and updating software in The Daily Shopper app. Josh’s involvement in The Proof Testament project has convicted him to continue his pursuits to absorb knowledge and hone his skills with the goal of becoming an experienced software developer.",
      projects: ['The Proof Testament: <a href="https://github.com/Frank-The-Tank/The-Proof-Testament" target="_blank">GitHub</a>', 'The Daily Shopper: <a href="http://www.dailyshopperapp.com/" target="_blank">App Store</a>'],
      linkedIn: 'https://www.linkedin.com/in/joshua-myers-a98b83122/',
      gitHub: 'https://github.com/jamyers2',
      facebook: '#',
      twitter: '#',
      pic: "../../../assets/images/josh.jpg"
    }
  ];

  constructor() { }

  ngOnInit() {
  }



}
