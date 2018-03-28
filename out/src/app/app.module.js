"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const app_component_1 = require("./app.component");
const angularfire2_1 = require("angularfire2");
const database_1 = require("angularfire2/database");
const auth_1 = require("angularfire2/auth");
const footer_component_1 = require("./components/footer/footer.component");
const environment_1 = require("./../environments/environment");
const bible_component_1 = require("./components/bible/bible.component");
const bible_service_1 = require("./components/bible/bible.service");
const scrollable_directive_1 = require("./directives/scrollable.directive");
const navbar_component_1 = require("./components/navbar/navbar.component");
const bible_filter_pipe_1 = require("./pipes/bible-filter.pipe");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
const theorems_list_component_1 = require("./components/theorems-list/theorems-list.component");
const editor_component_1 = require("./components/editor/editor.component");
const router_1 = require("@angular/router");
const router_config_1 = require("./router.config");
const about_component_1 = require("./components/about/about.component");
const home_component_1 = require("./components/home/home.component");
const about_user_component_1 = require("./components/about-user/about-user.component");
const docs_component_1 = require("./components/docs/docs.component");
const ngx_quill_1 = require("ngx-quill");
const autocomplete_box_component_1 = require("./components/autocomplete-box/autocomplete-box.component");
const symbol_picker_component_1 = require("./components/symbol-picker/symbol-picker.component");
const symbol_picker_service_1 = require("./components/symbol-picker/symbol-picker.service");
const editor_form_component_1 = require("./components/editor-form/editor-form.component");
const editor_service_1 = require("./components/editor/editor.service");
const antlr_component_1 = require("./components/antlr/antlr.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            bible_component_1.BibleComponent,
            footer_component_1.FooterComponent,
            scrollable_directive_1.ScrollableDirective,
            navbar_component_1.NavbarComponent,
            bible_filter_pipe_1.BibleFilterPipe,
            theorems_list_component_1.TheoremsListComponent,
            editor_component_1.EditorComponent,
            about_component_1.AboutComponent,
            home_component_1.HomeComponent,
            about_user_component_1.AboutUserComponent,
            autocomplete_box_component_1.AutocompleteBoxComponent,
            symbol_picker_component_1.SymbolPickerComponent,
            editor_form_component_1.EditorFormComponent,
            docs_component_1.DocsComponent,
            antlr_component_1.AntlrComponent
        ],
        entryComponents: [
            editor_component_1.EditorComponent,
            autocomplete_box_component_1.AutocompleteBoxComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            angularfire2_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
            database_1.AngularFireDatabaseModule,
            auth_1.AngularFireAuthModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            forms_1.ReactiveFormsModule,
            ngx_quill_1.QuillModule,
            router_1.RouterModule.forRoot(router_config_1.routerConfig)
        ],
        providers: [bible_service_1.BibleService, symbol_picker_service_1.SymbolPickerService, editor_service_1.EditorService],
        bootstrap: [app_component_1.AppComponent, bible_component_1.BibleComponent, footer_component_1.FooterComponent, navbar_component_1.NavbarComponent,
            editor_component_1.EditorComponent, home_component_1.HomeComponent, about_component_1.AboutComponent, about_user_component_1.AboutUserComponent, docs_component_1.DocsComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map