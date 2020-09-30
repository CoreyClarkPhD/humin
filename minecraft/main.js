(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/coreyclark/Sites/Git/HuMIn/GitLab/minecraft-web-app/src/main.ts */"zUnb");


/***/ }),

/***/ "8vqi":
/*!****************************************************!*\
  !*** ./src/app/rete-modules/custom-rete.module.ts ***!
  \****************************************************/
/*! exports provided: CustomReteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomReteModule", function() { return CustomReteModule; });
/* harmony import */ var _services_fake_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/fake-item.service */ "BoCh");
/* harmony import */ var src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rete-modules/services/item.service */ "x7rl");
/* harmony import */ var _nodes_controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nodes/controls/resource-control/resource-control */ "AnjU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid/grid.component */ "OP9P");
/* harmony import */ var rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rete-angular-render-plugin */ "JLln");
/* harmony import */ var _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nodes/base-node/base-node.component */ "jDfs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");











class CustomReteModule {
}
CustomReteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CustomReteModule });
CustomReteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function CustomReteModule_Factory(t) { return new (t || CustomReteModule)(); }, providers: [{ provide: src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"], useClass: _services_fake_item_service__WEBPACK_IMPORTED_MODULE_0__["FakeItemService"] }], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_6__["ReteModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CustomReteModule, { declarations: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"], _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_7__["BaseNodeComponent"], _nodes_controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_2__["ResourceComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_6__["ReteModule"]], exports: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CustomReteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"], _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_7__["BaseNodeComponent"], _nodes_controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_2__["ResourceComponent"]],
                imports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_6__["ReteModule"]
                ],
                providers: [{ provide: src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"], useClass: _services_fake_item_service__WEBPACK_IMPORTED_MODULE_0__["FakeItemService"] }],
                exports: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"]],
                entryComponents: [_nodes_controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_2__["ResourceComponent"], _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_7__["BaseNodeComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "AnjU":
/*!**********************************************************************************!*\
  !*** ./src/app/rete-modules/nodes/controls/resource-control/resource-control.ts ***!
  \**********************************************************************************/
/*! exports provided: ResourceComponent, ResourceControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceComponent", function() { return ResourceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceControl", function() { return ResourceControl; });
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/item.service */ "x7rl");
/* harmony import */ var _shared_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/item.model */ "cxpe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rete */ "9dUG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function ResourceComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", value_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", value_r1.id, " - ", value_r1.name, "");
} }
class ResourceComponent {
    constructor(itemService) {
        this.itemService = itemService;
        this.background = new Object();
    }
    ngOnInit() {
        if (this.craftable === _services_item_service__WEBPACK_IMPORTED_MODULE_0__["ItemFilter"].ANY) {
            this.items = this.itemService.GetAllItems();
        }
        else if (this.craftable === _services_item_service__WEBPACK_IMPORTED_MODULE_0__["ItemFilter"].CRAFTABLE) {
            this.items = this.itemService.GetAllCraftableItems();
        }
        else if (this.craftable === _services_item_service__WEBPACK_IMPORTED_MODULE_0__["ItemFilter"].NON_CRAFTABLE) {
            this.items = this.itemService.GetAllNonCraftableItems();
        }
        this.selectedItem = this.items[0];
        this.updateVisual();
        this.mounted(this.selectedItem, 1);
    }
    onChange() {
        this.changeItem(this.selectedItem);
        this.updateVisual();
    }
    onChangeRate() {
        let num = parseFloat(this.perHourString);
        this.perHour = num;
        this.changeRate(this.perHour);
    }
    updateVisual() {
        this.background['background-position-x'] = -64 * this.selectedItem.index[0] + "px";
        this.background['background-position-y'] = -64 * this.selectedItem.index[1] + "px";
    }
}
ResourceComponent.ɵfac = function ResourceComponent_Factory(t) { return new (t || ResourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_0__["ItemService"])); };
ResourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResourceComponent, selectors: [["ng-component"]], inputs: { selectedItem: "selectedItem", craftable: "craftable", perHour: "perHour", perHourString: "perHourString", readonly: "readonly", mounted: "mounted", changeItem: "changeItem", changeRate: "changeRate", click: "click", mouseDown: "mouseDown", mouseUp: "mouseUp" }, decls: 9, vars: 5, consts: [[1, "resource-control"], [1, "center"], ["src", "assets/images/transparent_32x32.png", 1, "item", 3, "ngStyle", "dragstart"], [3, "mousedown", "mouseup"], [3, "ngModel", "ngModelChange", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');", "placeholder", "1", 3, "ngModel", "readonly", "ngModelChange", "change", "dblclick", "mousedown", "mouseup"], [3, "ngValue"]], template: function ResourceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dragstart", function ResourceComponent_Template_img_dragstart_2_listener() { return false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ResourceComponent_Template_div_mousedown_3_listener() { return ctx.mouseDown(); })("mouseup", function ResourceComponent_Template_div_mouseup_3_listener() { return ctx.mouseUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ResourceComponent_Template_select_ngModelChange_4_listener($event) { return ctx.selectedItem = $event; })("change", function ResourceComponent_Template_select_change_4_listener() { return ctx.onChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ResourceComponent_option_5_Template, 2, 3, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ResourceComponent_Template_input_ngModelChange_7_listener($event) { return ctx.perHourString = $event; })("change", function ResourceComponent_Template_input_change_7_listener() { return ctx.onChangeRate(); })("dblclick", function ResourceComponent_Template_input_dblclick_7_listener($event) { return $event.stopPropagation(); })("mousedown", function ResourceComponent_Template_input_mousedown_7_listener() { return ctx.mouseDown(); })("mouseup", function ResourceComponent_Template_input_mouseup_7_listener() { return ctx.mouseUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " / hour ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.background);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.perHourString)("readonly", ctx.readonly);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: [".resource-control[_ngcontent-%COMP%] {\n  object-fit: cover;\n  max-width: 150px;\n}\n.resource-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n.item[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 16px;\n  display: block;\n  background-image: url('inventory_sprites.png');\n  background-size: 1024px 2240px;\n  image-rendering: smooth;\n  user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-drag: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n.center[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 2px;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  height: 100px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL25vZGVzL2NvbnRyb2xzL3Jlc291cmNlLWNvbnRyb2wvcmVzb3VyY2UtY29udHJvbC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQURKO0FBRUk7RUFDSSxjQUFBO0FBQVI7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDhDQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBRUo7QUFTQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBTkoiLCJmaWxlIjoic3JjL2FwcC9yZXRlLW1vZHVsZXMvbm9kZXMvY29udHJvbHMvcmVzb3VyY2UtY29udHJvbC9yZXNvdXJjZS1jb250cm9sLnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IC4uLy4uLy4uL3ZhcmlhYmxlc1xuXG4ucmVzb3VyY2UtY29udHJvbFxuICAgIG9iamVjdC1maXQ6IGNvdmVyXG4gICAgbWF4LXdpZHRoOiAxNTBweFxuICAgIGlucHV0XG4gICAgICAgIG1heC13aWR0aDogNTAlXG5cbi5pdGVtXG4gICAgd2lkdGg6ICRzcHJpdGUtc2NhbGUqMzJweFxuICAgIGhlaWdodDogJHNwcml0ZS1zY2FsZSozMnB4XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG9cbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4XG4gICAgZGlzcGxheTogYmxvY2tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hc3NldHMvaW1hZ2VzL2ludmVudG9yeV9zcHJpdGVzLnBuZycpXG4gICAgYmFja2dyb3VuZC1zaXplOiAkc3ByaXRlLXNjYWxlKjUxMnB4ICRzcHJpdGUtc2NhbGUqMTEyMHB4XG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBzbW9vdGhcbiAgICB1c2VyLWRyYWc6IG5vbmVcbiAgICB1c2VyLXNlbGVjdDogbm9uZVxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmVcbiAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZVxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmVcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmVcblxuLmNlbnRlclxuICAgIG1hcmdpbjogYXV0b1xuICAgIHBhZGRpbmc6IDJweFxuICAgIFxuLy8gaW5wdXQgXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMzBweFxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXG4vLyAgICAgYmFkZGluZzogMnB4IDZweFxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTlcbi8vICAgICBmb250LXNpemU6IDExMCVcbi8vICAgICB3aWR0aDogMTQwcHhcbi8vICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XG5cbi5kcm9wZG93bi1tZW51XG4gICAgaGVpZ2h0OiAxMDBweFxuICAgIG92ZXJmbG93OiBhdXRvIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ResourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                templateUrl: "./resource-control.html",
                styleUrls: ["./resource-control.sass",]
            }]
    }], function () { return [{ type: _services_item_service__WEBPACK_IMPORTED_MODULE_0__["ItemService"] }]; }, { selectedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], craftable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], perHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], perHourString: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mounted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], changeItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], changeRate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
class ResourceControl extends rete__WEBPACK_IMPORTED_MODULE_3__["Control"] {
    constructor(emitter, key, craftable) {
        super(key);
        this.emitter = emitter;
        this.key = key;
        this.component = ResourceComponent;
        this.props = {
            selectedItem: _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"],
            craftable: craftable,
            readonly: false,
            perHour: 1,
            perHourString: "1",
            changeItem: v => this.onChangeItem(v),
            changeRate: v => this.onChangeRate(v),
            mounted: (item, rate) => {
                this.setItemValue(item);
                this.setRate(rate);
            },
            click: () => this.onClick(),
            mouseDown: () => this.onMouseDown(),
            mouseUp: () => this.onMouseUp(),
        };
    }
    onChangeItem(item) {
        this.setItemValue(item);
        this.emitter.trigger('process');
    }
    setItemValue(item) {
        this.props.selectedItem = item;
        this.putData(this.key, this.props.selectedItem);
        this.putData('amount', (item.hasOwnProperty('createdAmount') ? item.createdAmount : 1));
        this.putData('changed', true);
    }
    onChangeRate(rate) {
        this.setRate(rate);
        this.emitter.trigger('process');
    }
    setRate(rate) {
        this.props.perHour = rate;
        let str = rate == Infinity ? "-" : rate.toString();
        if (str.indexOf('.') !== -1) {
            str = str.slice(0, str.indexOf('.') + 3);
        }
        this.props.perHourString = str;
        this.putData('perHour', rate);
    }
    onClick() {
        this.emitter.selected.clear();
        this.emitter.nodes.map(n => n.update());
    }
    onMouseDown() {
        this.emitter.selected.clear();
        this.emitter.nodes.map(n => n.update());
    }
    onMouseUp() {
        this.emitter.selected.clear();
        this.emitter.nodes.map(n => n.update());
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B5f4":
/*!***************************************************************!*\
  !*** ./src/app/rete-modules/nodes/resource-node.component.ts ***!
  \***************************************************************/
/*! exports provided: ResourceNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceNode", function() { return ResourceNode; });
/* harmony import */ var _shared_connection_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/connection.model */ "fqIU");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/item.service */ "x7rl");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rete */ "9dUG");
/* harmony import */ var _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/resource-control/resource-control */ "AnjU");




class ResourceNode extends rete__WEBPACK_IMPORTED_MODULE_2__["Component"] {
    constructor(socketController) {
        super('Resource');
        this.socketController = socketController;
    }
    builder(node) {
        var control = new _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_3__["ResourceControl"](this.editor, 'resource', _services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemFilter"].NON_CRAFTABLE);
        node.addControl(control);
        node.data['type'] = 'output';
        return node;
    }
    worker(node, inputs, outputs) {
        var node_ref = this.editor.nodes.find(n => n.id === node.id);
        if (node.data.changed === true) {
            node_ref.getConnections().forEach(element => {
                this.editor.removeConnection(element);
            });
            node_ref.outputs.clear();
            var item = node.data.resource;
            var output = new rete__WEBPACK_IMPORTED_MODULE_2__["Output"]("resource", item.name, this.socketController.GetSocketForId(item.id));
            node_ref.addOutput(output);
            this.editor.trigger('nodeselected');
            node.data.changed = false;
        }
        let datagram = new _shared_connection_model__WEBPACK_IMPORTED_MODULE_0__["Connection"](node.data.resource, node.data.amount, node.data.perHour);
        outputs['resource'] = datagram;
    }
}


/***/ }),

/***/ "BoCh":
/*!************************************************************!*\
  !*** ./src/app/rete-modules/services/fake-item.service.ts ***!
  \************************************************************/
/*! exports provided: FakeItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeItemService", function() { return FakeItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rete-modules/services/item.service */ "x7rl");



var fakeDatabase = {
    "items": [
        {
            "id": 1,
            "name": "Stone",
            "index": [0, 0],
            "craftable": false,
        },
        {
            "id": 2,
            "name": "Grass",
            "index": [1, 0],
            "craftable": false,
        },
        {
            "id": 3,
            "name": "Dirt",
            "index": [2, 0],
            "craftable": false,
        },
        {
            "id": 4,
            "name": "Cobblestone",
            "index": [3, 0],
            "craftable": false,
        },
        {
            "id": 5,
            "name": "Planks",
            "index": [4, 0],
            "craftable": true,
            "createdAmount": 4,
            "recipe": [
                {
                    "id": 23,
                    "amount": 1
                },
            ],
        },
        {
            "id": 23,
            "name": "Logs",
            "index": [6, 1],
            "craftable": false,
        },
        {
            "id": 92,
            "name": "Bookshelf",
            "index": [11, 5],
            "craftable": true,
            "createdAmount": 1,
            "recipe": [
                {
                    "id": 340,
                    "amount": 3
                },
                {
                    "id": 5,
                    "amount": 6
                }
            ],
        },
        {
            "id": 103,
            "name": "Crafting Bench",
            "index": [6, 6],
            "craftable": true,
            "createdAmount": 1,
            "recipe": [
                {
                    "id": 5,
                    "amount": 4
                },
            ],
        },
        {
            "id": 334,
            "name": "Leather",
            "index": [14, 18],
            "craftable": false,
        },
        {
            "id": 338,
            "name": "Sugar Cane",
            "index": [2, 19],
            "craftable": false,
        },
        {
            "id": 339,
            "name": "Paper",
            "index": [3, 19],
            "craftable": true,
            "createdAmount": 3,
            "recipe": [
                {
                    "id": 338,
                    "amount": 3
                },
            ],
        },
        {
            "id": 340,
            "name": "Book",
            "index": [4, 19],
            "craftable": true,
            "createdAmount": 1,
            "recipe": [
                {
                    "id": 334,
                    "amount": 1
                },
                {
                    "id": 339,
                    "amount": 3
                }
            ],
        },
    ]
};
class FakeItemService extends src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"] {
    constructor() {
        super();
    }
    GetAllItems() {
        return fakeDatabase["items"];
    }
    GetItemFromId(id) {
        return fakeDatabase["items"].find((value) => {
            if (value.id === id) {
                return value;
            }
            ;
        });
    }
    GetAllCraftableItems() {
        return fakeDatabase["items"].filter(value => {
            return value.craftable;
        });
    }
    GetAllNonCraftableItems() {
        return fakeDatabase["items"].filter(value => {
            return !value.craftable;
        });
    }
}
FakeItemService.ɵfac = function FakeItemService_Factory(t) { return new (t || FakeItemService)(); };
FakeItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FakeItemService, factory: FakeItemService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeItemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "DfuO":
/*!**************************************************************!*\
  !*** ./src/app/rete-modules/nodes/crafter-node.component.ts ***!
  \**************************************************************/
/*! exports provided: CrafterNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrafterNode", function() { return CrafterNode; });
/* harmony import */ var _shared_connection_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/connection.model */ "fqIU");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/item.service */ "x7rl");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rete */ "9dUG");
/* harmony import */ var _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/resource-control/resource-control */ "AnjU");




class CrafterNode extends rete__WEBPACK_IMPORTED_MODULE_2__["Component"] {
    constructor(socketController, itemService) {
        super('Crafter');
        this.socketController = socketController;
        this.itemService = itemService;
    }
    builder(node) {
        var control = new _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_3__["ResourceControl"](this.editor, 'resource', _services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemFilter"].CRAFTABLE);
        node.addControl(control);
        return node;
    }
    worker(node, inputs, outputs) {
        var node_ref = this.editor.nodes.find(n => n.id === node.id);
        if (node.data.changed === true) {
            node_ref.getConnections().forEach(element => {
                this.editor.removeConnection(element);
            });
            node_ref.outputs.clear();
            var item = node.data.resource;
            var output = new rete__WEBPACK_IMPORTED_MODULE_2__["Output"]("resource", item.name + " x " + item.createdAmount, this.socketController.GetSocketForId(item.id));
            node_ref.addOutput(output);
            node_ref.inputs.clear();
            item.recipe.forEach(element => {
                var item = this.itemService.GetItemFromId(element.id);
                var input = new rete__WEBPACK_IMPORTED_MODULE_2__["Input"]("" + item.id, item.name + " x " + element.amount, this.socketController.GetSocketForId(item.id));
                node_ref.addInput(input);
            });
            this.editor.trigger('nodeselected');
            // this.editor.trigger('nodecreated');
            node.data.changed = false;
        }
        var perHourBottleneck = Infinity;
        var craftedItem = node.data.resource;
        for (var recipeIndex in craftedItem.recipe) {
            let item = craftedItem.recipe[recipeIndex];
            let input = inputs[item.id];
            // Input found
            if (input && input[0]) {
                let itemBottleneck = input[0].amount / item.amount;
                itemBottleneck *= input[0].perHour;
                if (itemBottleneck < perHourBottleneck) {
                    perHourBottleneck = itemBottleneck;
                }
            }
        }
        let control = node_ref.controls.get('resource');
        control.props.readonly = true;
        control.setRate(perHourBottleneck);
        var datagram = new _shared_connection_model__WEBPACK_IMPORTED_MODULE_0__["Connection"](node.data.resource, node.data.amount, node.data.perHour);
        outputs['resource'] = datagram;
    }
}


/***/ }),

/***/ "OP9P":
/*!*****************************************************!*\
  !*** ./src/app/rete-modules/grid/grid.component.ts ***!
  \*****************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _shared_node_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/node-tree */ "icfx");
/* harmony import */ var _nodes_output_node_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../nodes/output-node.component */ "c5kL");
/* harmony import */ var _nodes_crafter_node_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../nodes/crafter-node.component */ "DfuO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rete */ "9dUG");
/* harmony import */ var rete_connection_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rete-connection-plugin */ "G+JA");
/* harmony import */ var _nodes_resource_node_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../nodes/resource-node.component */ "B5f4");
/* harmony import */ var rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rete-angular-render-plugin */ "JLln");
/* harmony import */ var _nodes_sockets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../nodes/sockets */ "nj5+");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../services/item.service */ "x7rl");












const _c0 = ["nodeEditor"];
class GridComponent {
    constructor(socketController, itemService) {
        this.socketController = socketController;
        this.itemService = itemService;
        this.editor = null;
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const container = this.el.nativeElement;
            const components = [new _nodes_resource_node_component__WEBPACK_IMPORTED_MODULE_7__["ResourceNode"](this.socketController), new _nodes_crafter_node_component__WEBPACK_IMPORTED_MODULE_3__["CrafterNode"](this.socketController, this.itemService), new _nodes_output_node_component__WEBPACK_IMPORTED_MODULE_2__["OutputNode"](this.socketController)];
            this.editor = new rete__WEBPACK_IMPORTED_MODULE_5__["NodeEditor"]('minecraft-web-app@0.1.0', container);
            this.editor.use(rete_connection_plugin__WEBPACK_IMPORTED_MODULE_6__["default"]);
            this.editor.use(rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_8__["AngularRenderPlugin"]);
            this.engine = new rete__WEBPACK_IMPORTED_MODULE_5__["Engine"]('minecraft-web-app@0.1.0');
            this.nodeTree = new _shared_node_tree__WEBPACK_IMPORTED_MODULE_1__["NodeTree"]();
            components.map(c => {
                this.editor.register(c);
                this.engine.register(c);
            });
            const testNode1 = yield components[0].createNode();
            const testNode2 = yield components[0].createNode();
            const testNode3 = yield components[0].createNode();
            const testNode4 = yield components[0].createNode();
            const crafterNode1 = yield components[1].createNode();
            const crafterNode2 = yield components[1].createNode();
            const crafterNode3 = yield components[1].createNode();
            const crafterNode4 = yield components[1].createNode();
            const outputNode = yield components[2].createNode();
            testNode1.position = [0, 100];
            testNode2.position = [0, 400];
            testNode3.position = [0, 700];
            testNode4.position = [0, 1000];
            crafterNode1.position = [300, 100];
            crafterNode2.position = [300, 400];
            crafterNode3.position = [300, 700];
            crafterNode4.position = [300, 1000];
            outputNode.position = [600, 100];
            this.editor.addNode(testNode1);
            this.editor.addNode(testNode2);
            this.editor.addNode(testNode3);
            this.editor.addNode(testNode4);
            this.editor.addNode(crafterNode1);
            this.editor.addNode(crafterNode2);
            this.editor.addNode(crafterNode3);
            this.editor.addNode(crafterNode4);
            this.editor.addNode(outputNode);
            this.editor.on(['process', 'nodecreated', 'noderemoved', 'connectioncreated', 'connectionremoved'], (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.engine.abort();
                yield this.engine.process(this.editor.toJSON());
            })));
            this.editor.on(['process', 'connectioncreated'], () => {
                this.nodeTree.parseFromJson(this.editor.toJSON());
                console.log(this.nodeTree.getCriticalPath());
            });
            this.editor.on('click', () => {
                this.editor.selected.clear();
                this.editor.nodes.map(n => n.update());
            });
            this.engine.on('error', (message) => {
                console.log(message);
            });
            this.editor.view.resize();
            this.editor.trigger('process');
        });
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nodes_sockets__WEBPACK_IMPORTED_MODULE_9__["SocketController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_10__["ItemService"])); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], viewQuery: function GridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, decls: 3, vars: 0, consts: [[1, "grid-wrapper"], [1, "node-editor"], ["nodeEditor", ""]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, styles: [".grid-wrapper[_ngcontent-%COMP%] {\n  width: 75%;\n  height: 75%;\n  border: 2px solid black;\n}\n\n.socket.number[_ngcontent-%COMP%] {\n  background: #96b38a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL2dyaWQvZ3JpZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yZXRlLW1vZHVsZXMvZ3JpZC9ncmlkLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtd3JhcHBlclxuICAgIHdpZHRoOiA3NSVcbiAgICBoZWlnaHQ6NzUlXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2tcblxuXG4uc29ja2V0Lm51bWJlclxuICAgIGJhY2tncm91bmQ6ICM5NmIzOGFcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'app-grid',
                templateUrl: './grid.component.html',
                styleUrls: ['./grid.component.sass']
            }]
    }], function () { return [{ type: _nodes_sockets__WEBPACK_IMPORTED_MODULE_9__["SocketController"] }, { type: _services_item_service__WEBPACK_IMPORTED_MODULE_10__["ItemService"] }]; }, { el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['nodeEditor', { static: true }]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rete_modules_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rete-modules/grid/grid.component */ "OP9P");



class AppComponent {
    constructor() {
        this.title = 'Supplemental Application';
    }
    onClick(event) {
        console.log("Clicked: " + event);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-grid");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_rete_modules_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _rete_modules_nodes_sockets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rete-modules/nodes/sockets */ "nj5+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _rete_modules_custom_rete_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rete-modules/custom-rete.module */ "8vqi");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_rete_modules_nodes_sockets__WEBPACK_IMPORTED_MODULE_0__["SocketController"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _rete_modules_custom_rete_module__WEBPACK_IMPORTED_MODULE_4__["CustomReteModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _rete_modules_custom_rete_module__WEBPACK_IMPORTED_MODULE_4__["CustomReteModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _rete_modules_custom_rete_module__WEBPACK_IMPORTED_MODULE_4__["CustomReteModule"]
                ],
                providers: [_rete_modules_nodes_sockets__WEBPACK_IMPORTED_MODULE_0__["SocketController"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "c5kL":
/*!*************************************************************!*\
  !*** ./src/app/rete-modules/nodes/output-node.component.ts ***!
  \*************************************************************/
/*! exports provided: OutputNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputNode", function() { return OutputNode; });
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/item.service */ "x7rl");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rete */ "9dUG");
/* harmony import */ var _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/resource-control/resource-control */ "AnjU");



class OutputNode extends rete__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(socketController) {
        super('Output');
        this.socketController = socketController;
    }
    builder(node) {
        var control = new _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_2__["ResourceControl"](this.editor, 'resource', _services_item_service__WEBPACK_IMPORTED_MODULE_0__["ItemFilter"].ANY);
        control.props.readonly = true;
        node.addControl(control);
        return node;
    }
    worker(node, inputs, outputs) {
        var node_ref = this.editor.nodes.find(n => n.id === node.id);
        if (node.data.changed === true) {
            node_ref.getConnections().forEach(element => {
                this.editor.removeConnection(element);
            });
            node_ref.inputs.clear();
            var item = node.data.resource;
            var input = new rete__WEBPACK_IMPORTED_MODULE_1__["Input"]("resource", item.name, this.socketController.GetSocketForId(item.id));
            node_ref.addInput(input);
            this.editor.trigger('nodeselected');
            node.data.changed = false;
        }
        var perHourBottleneck = Infinity;
        if (inputs && inputs['resource'] && inputs['resource'][0]) {
            perHourBottleneck = inputs['resource'][0].perHour;
        }
        let control = node_ref.controls.get('resource');
        control.props.readonly = true;
        control.setRate(perHourBottleneck);
    }
}


/***/ }),

/***/ "cxpe":
/*!***************************************************!*\
  !*** ./src/app/rete-modules/shared/item.model.ts ***!
  \***************************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
class Item {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}


/***/ }),

/***/ "fqIU":
/*!*********************************************************!*\
  !*** ./src/app/rete-modules/shared/connection.model.ts ***!
  \*********************************************************/
/*! exports provided: Connection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
class Connection {
    constructor(item, amount, perHour) {
        this.item = item;
        this.amount = amount;
        this.perHour = perHour;
    }
}


/***/ }),

/***/ "icfx":
/*!**************************************************!*\
  !*** ./src/app/rete-modules/shared/node-tree.ts ***!
  \**************************************************/
/*! exports provided: NodeTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeTree", function() { return NodeTree; });
class TreeItem {
    constructor(node) {
        this.node = node;
        this.inputs = [];
        this.outputs = [];
    }
    getNodeId() {
        return this.node['id'];
    }
    getNodeName() {
        return this.node['name'];
    }
    getNodeData() {
        return this.node['data'];
    }
}
class NodeTree {
    constructor() {
        this.outputNodes = [];
        this.criticalPath = [];
        this.allConnectedNodes = [];
    }
    parseFromJson(json) {
        this.outputNodes = [];
        this.allConnectedNodes = json['nodes'];
        let nodes = [];
        // Start with finding all of the output nodes
        for (const nodeIndex in json['nodes']) {
            const node = json['nodes'][nodeIndex];
            if (node['name'] === "Output") {
                nodes.push(node);
            }
        }
        nodes.forEach((value, index, array) => {
            this.outputNodes.push(this.findOrCreate(value));
        });
        let searchStack = [];
        this.outputNodes.forEach((treeNode, index, array) => {
            searchStack.push(treeNode);
        });
        while (searchStack.length > 0) {
            const currentNode = searchStack.pop();
            for (const inputIndex in currentNode.node.inputs) {
                const input = currentNode.node.inputs[inputIndex];
                if (input['connections'] && input['connections'].length > 0) {
                    let newNode = this.allConnectedNodes[input['connections'][0]['node']];
                    searchStack.push(this.addNode(newNode, currentNode));
                }
            }
        }
        this.calculateCriticalPath();
    }
    getCriticalPath() {
        return this.criticalPath;
    }
    calculateCriticalPath() {
        this.criticalPath = [];
        let currentNode = null;
        this.outputNodes.forEach((value, index, array) => {
            if (currentNode == null) {
                currentNode = value;
            }
            else if (currentNode.getNodeData()['perHour'] > value.getNodeData()['perHour']) {
                currentNode = value;
            }
        });
        if (currentNode === null) {
            return;
        }
        let nextNode = currentNode;
        this.criticalPath.push(nextNode.node);
        while (nextNode.getNodeName() !== 'Resource') {
            currentNode = null;
            nextNode.inputs.forEach((value, index, array) => {
                if (currentNode === null) {
                    currentNode = value;
                }
                else if (currentNode.getNodeData()['perHour'] > value.getNodeData()['perHour']) {
                    currentNode = value;
                }
            });
            if (currentNode === null) {
                return;
            }
            this.criticalPath.push(currentNode.node);
            nextNode = currentNode;
        }
    }
    addNode(node, parent) {
        let child = this.findOrCreate(node);
        child.outputs.push(parent);
        parent.inputs.push(child);
        return child;
    }
    findOrCreate(node) {
        let item = null;
        this.outputNodes.forEach((value, index, array) => {
            let stack = [];
            stack.push(value);
            while (stack.length > 0) {
                let popped = stack.pop();
                if (popped.node['id'] == node['id']) {
                    item = popped;
                    return;
                }
                popped.inputs.forEach((value, index, array) => {
                    stack.push(value);
                });
            }
        });
        if (item !== null) {
            return item;
        }
        return new TreeItem(node);
    }
}


/***/ }),

/***/ "jDfs":
/*!*********************************************************************!*\
  !*** ./src/app/rete-modules/nodes/base-node/base-node.component.ts ***!
  \*********************************************************************/
/*! exports provided: BaseNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseNodeComponent", function() { return BaseNodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rete-angular-render-plugin */ "JLln");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function BaseNodeComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rete-socket", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const output_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](output_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("io", output_r3)("socket", output_r3.socket);
} }
function BaseNodeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
} if (rf & 2) {
    const control_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rete-control", control_r4);
} }
function BaseNodeComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", input_r5.name, ">");
} }
function BaseNodeComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
} if (rf & 2) {
    const input_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rete-control", input_r5.control);
} }
function BaseNodeComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rete-socket", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BaseNodeComponent_div_8_div_2_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BaseNodeComponent_div_8_div_3_Template, 1, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("io", input_r5)("socket", input_r5.socket);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !input_r5.showControl());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", input_r5.showControl());
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
class BaseNodeComponent extends rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["NodeComponent"] {
    constructor(service, cdr) {
        super(service, cdr);
        this.service = service;
        this.cdr = cdr;
    }
}
BaseNodeComponent.ɵfac = function BaseNodeComponent_Factory(t) { return new (t || BaseNodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["NodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
BaseNodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseNodeComponent, selectors: [["app-base-node"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["NodeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 10, consts: [[1, "base-node", 3, "ngClass"], [1, "node-title"], ["class", "output", 4, "ngFor", "ngForOf"], ["class", "control", 3, "rete-control", 4, "ngFor", "ngForOf"], ["class", "input", 4, "ngFor", "ngForOf"], [1, "output"], [1, "output-title"], ["rete-socket", "", 3, "io", "socket"], [1, "control", 3, "rete-control"], [1, "input"], ["class", "input-title", 4, "ngIf"], ["class", "input-control", 3, "rete-control", 4, "ngIf"], [1, "input-title"], [1, "input-control", 3, "rete-control"]], template: function BaseNodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "base-node works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "kebab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BaseNodeComponent_div_6_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BaseNodeComponent_div_7_Template, 1, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BaseNodeComponent_div_8_Template, 4, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx.selected(), ctx.node.name)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.node.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.outputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inputs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["SocketComponent"], rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["ɵc"], rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["ɵd"]], styles: [".node[_ngcontent-%COMP%] {\n  background: #fd0000;\n  border: 2px solid #000000;\n  border-radius: 10px;\n  curson: pointer;\n  min-width: 180px;\n  height: auto;\n  padding-bottom: 6px;\n  box-sizing: content-box;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.node[_ngcontent-%COMP%]:hover {\n  background: #ff1212;\n}\n.node[_ngcontent-%COMP%]:selected {\n  background: #fd8f00;\n  border-color: #999999;\n}\n.node[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: white;\n  font-family: sans-serif;\n  font-size: 18px;\n  padding: 8px;\n}\n.node[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.node[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.node[_ngcontent-%COMP%]   .input-title[_ngcontent-%COMP%], .node[_ngcontent-%COMP%]   .output-title[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  color: white;\n  display: inline-block;\n  font-family: sans-serif;\n  font: 14px;\n  margin: 6px;\n  line-height: 24px;\n}\n.node[_ngcontent-%COMP%]   .input-title[hidden][_ngcontent-%COMP%], .node[_ngcontent-%COMP%]   .output-title[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n.node[_ngcontent-%COMP%]   .input-control[_ngcontent-%COMP%] {\n  z-index: 1;\n  width: calc( 100% - 36px);\n  vertical-align: middle;\n  display: inline-block;\n}\n.node[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%] {\n  padding: 6px 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL25vZGVzL2Jhc2Utbm9kZS9iYXNlLW5vZGUuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3JldGUtbW9kdWxlcy92YXJpYWJsZXMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG1CQ0hTO0VESVQseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkNIUztFRElULFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFESjtBQUVJO0VBQ0ksbUJBQUE7QUFBUjtBQUNJO0VBQ0ksbUJDZmM7RURnQmQscUJDZHFCO0FEZTdCO0FBQUk7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUVSO0FBREk7RUFDSSxpQkFBQTtBQUdSO0FBRkk7RUFDSSxnQkFBQTtBQUlSO0FBSEk7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdDMUJRO0VEMkJSLGlCQzVCTTtBRGlDZDtBQUpRO0VBQ0ksYUFBQTtBQU1aO0FBTEk7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBT1I7QUFOSTtFQUNJLGlCQUFBO0FBUVIiLCJmaWxlIjoic3JjL2FwcC9yZXRlLW1vZHVsZXMvbm9kZXMvYmFzZS1ub2RlL2Jhc2Utbm9kZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgLi4vLi4vdmFyaWFibGVzXG5cbi5ub2RlXG4gICAgYmFja2dyb3VuZDogJG5vZGUtY29sb3JcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkbm9kZS1ib3JkZXItY29sb3JcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4XG4gICAgY3Vyc29uOiBwb2ludGVyXG4gICAgbWluLXdpZHRoOiAkbm9kZS13aWR0aFxuICAgIGhlaWdodDogYXV0b1xuICAgIHBhZGRpbmctYm90dG9tOiA2cHhcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgIHVzZXItc2VsZWN0OiBub25lXG4gICAgJjpob3ZlclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRub2RlLWNvbG9yLCA0JSlcbiAgICAmOnNlbGVjdGVkXG4gICAgICAgIGJhY2tncm91bmQ6ICRub2RlLWNvbG9yLXNlbGVjdGVkXG4gICAgICAgIGJvcmRlci1jb2xvcjogJG5vZGUtYm9yZGVyLWNvbG9yLXNlbGVjdGVkXG4gICAgLnRpdGxlXG4gICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZlxuICAgICAgICBmb250LXNpemU6IDE4cHhcbiAgICAgICAgcGFkZGluZzogOHB4XG4gICAgLm91dHB1dFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodFxuICAgIC5pbnB1dFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0XG4gICAgLmlucHV0LXRpdGxlLC5vdXRwdXQtdGl0bGVcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxuICAgICAgICBjb2xvcjogd2hpdGVcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmXG4gICAgICAgIGZvbnQ6IDE0cHhcbiAgICAgICAgbWFyZ2luOiAkc29ja2V0LW1hcmdpblxuICAgICAgICBsaW5lLWhlaWdodDogJHNvY2tldC1zaXplXG4gICAgICAgICZbaGlkZGVuXVxuICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuICAgIC5pbnB1dC1jb250cm9sXG4gICAgICAgIHotaW5kZXg6IDFcbiAgICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAjeyRzb2NrZXQtc2l6ZSArIDIqJHNvY2tldC1tYXJnaW59KVxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICAgIC5jb250cm9sXG4gICAgICAgIHBhZGRpbmc6ICRzb2NrZXQtbWFyZ2luICRzb2NrZXQtc2l6ZS8yICsgJHNvY2tldC1tYXJnaW4iLCIkbm9kZS1jb2xvcjogI2ZkMDAwMFxuJG5vZGUtY29sb3Itc2VsZWN0ZWQ6ICNmZDhmMDBcbiRub2RlLWJvcmRlci1jb2xvcjogIzAwMDAwMFxuJG5vZGUtYm9yZGVyLWNvbG9yLXNlbGVjdGVkOiAjOTk5OTk5XG4kbm9kZS13aWR0aDogMTgwcHhcblxuJHNvY2tldC1zaXplOiAyNHB4XG4kc29ja2V0LW1hcmdpbjogNnB4XG4kc29ja2V0LWNvbG9yOiAjMDBmZjAwXG5cbiRzcHJpdGUtc2NhbGU6IDIiXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseNodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-base-node',
                templateUrl: './base-node.component.html',
                styleUrls: ['./base-node.component.sass'],
                providers: [rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["NodeService"]],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["NodeService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "nj5+":
/*!***********************************************!*\
  !*** ./src/app/rete-modules/nodes/sockets.ts ***!
  \***********************************************/
/*! exports provided: SocketController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketController", function() { return SocketController; });
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rete */ "9dUG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/rete-modules/services/item.service */ "x7rl");




class SocketController {
    constructor(itemService) {
        this.itemService = itemService;
        this.sockets = new Map();
    }
    GetSocketForId(id) {
        if (this.sockets.has(id)) {
            return this.sockets.get(id);
        }
        else {
            this.sockets.set(id, new rete__WEBPACK_IMPORTED_MODULE_0__["Socket"](this.itemService.GetItemFromId(id).name));
            return this.sockets.get(id);
        }
    }
}
SocketController.ɵfac = function SocketController_Factory(t) { return new (t || SocketController)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"])); };
SocketController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SocketController, factory: SocketController.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SocketController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"] }]; }, null); })();


/***/ }),

/***/ "x7rl":
/*!*******************************************************!*\
  !*** ./src/app/rete-modules/services/item.service.ts ***!
  \*******************************************************/
/*! exports provided: ItemFilter, ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemFilter", function() { return ItemFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var ItemFilter;
(function (ItemFilter) {
    ItemFilter[ItemFilter["CRAFTABLE"] = 0] = "CRAFTABLE";
    ItemFilter[ItemFilter["NON_CRAFTABLE"] = 1] = "NON_CRAFTABLE";
    ItemFilter[ItemFilter["ANY"] = 2] = "ANY";
})(ItemFilter || (ItemFilter = {}));
;
class ItemService {
    constructor() {
    }
}
ItemService.ɵfac = function ItemService_Factory(t) { return new (t || ItemService)(); };
ItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemService, factory: ItemService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map