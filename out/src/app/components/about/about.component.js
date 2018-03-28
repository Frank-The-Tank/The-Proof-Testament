"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let AboutComponent = class AboutComponent {
    constructor() {
        this.contributors = [
            {
                name: "Frank Garcia",
                description: "dope guy",
                pic: "../../../assets/images/frank.jpg"
            },
            {
                name: "Giorgio Catania",
                description: "cool guy",
                pic: "../../../assets/images/giorgio.jpg"
            },
            {
                name: "Micah Benn",
                description: "neat guy",
                pic: "../../../assets/images/micah.jpeg"
            },
            {
                name: "Drake Ramsdall",
                description: "sick guy",
                pic: "../../../assets/images/drake.jpg"
            },
            {
                name: "Damir Kaliyev",
                description: "nice guy",
                pic: "../../../assets/images/damir.jpg"
            },
            {
                name: "Zach Rhodes",
                description: "big guy",
                pic: "../../../assets/images/zach.jpg"
            },
            {
                name: "James Maynard",
                description: 'This is James. James is a proud Naperville native. James will rave for hours about Chicago deep dish pies. James has a wide variety of catchphrases, including “dope”, “fasho”, and “I’m the man.” James’ idol is Ross Rhea ("Goon" or bust).',
                pic: "../../../assets/images/james.jpg"
            },
            {
                name: "Josh Myers",
                description: "Hailing from Moorpark, CA, Josh finds enjoyment in eating, playing basketball, and chocolate chip cookies (yes, it's a hobby). One of his fondest memories at Pepperdine should not be disclosed on the public domain, but it involves himself, James Maynard, Korean BBQ, and an exam 4 hours later.",
                pic: "../../../assets/images/josh.jpg"
            }
        ];
    }
    ngOnInit() {
    }
};
AboutComponent = __decorate([
    core_1.Component({
        selector: 'app-about',
        templateUrl: './about.component.html',
        styleUrls: ['./about.component.scss']
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map