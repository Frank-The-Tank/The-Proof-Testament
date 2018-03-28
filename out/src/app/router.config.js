"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_component_1 = require("./components/home/home.component");
const about_component_1 = require("./components/about/about.component");
const docs_component_1 = require("./components/docs/docs.component");
exports.routerConfig = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'docs',
        component: docs_component_1.DocsComponent
    },
    {
        path: 'documentation',
        component: docs_component_1.DocsComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
//# sourceMappingURL=router.config.js.map