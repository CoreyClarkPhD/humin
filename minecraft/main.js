(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/coreyclark/Sites/Git/HuMIn/GitLab/minecraft-web-app/src/main.ts */"zUnb");


/***/ }),

/***/ "5bZ5":
/*!*******************************************************!*\
  !*** ./src/app/rete-modules/services/node.service.ts ***!
  \*******************************************************/
/*! exports provided: NodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeService", function() { return NodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NodeService {
    constructor() {
    }
}
NodeService.ɵfac = function NodeService_Factory(t) { return new (t || NodeService)(); };
NodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NodeService, factory: NodeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NodeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _services_fake_node_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/fake-node.service */ "o2BI");
/* harmony import */ var _shared_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/highlight-text.pipe */ "UYxj");
/* harmony import */ var _shared_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/item-image-component/item-image.component */ "Hvuu");
/* harmony import */ var _services_fake_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/fake-item.service */ "BoCh");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/item.service */ "x7rl");
/* harmony import */ var _nodes_controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nodes/controls/resource-control/resource-control */ "AnjU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grid/grid.component */ "OP9P");
/* harmony import */ var rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rete-angular-render-plugin */ "JLln");
/* harmony import */ var _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nodes/base-node/base-node.component */ "jDfs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node-browser/node-browser.component */ "nu8m");
/* harmony import */ var _services_node_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/node.service */ "5bZ5");















class CustomReteModule {
}
CustomReteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CustomReteModule });
CustomReteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function CustomReteModule_Factory(t) { return new (t || CustomReteModule)(); }, providers: [{ provide: _services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"], useClass: _services_fake_item_service__WEBPACK_IMPORTED_MODULE_3__["FakeItemService"] }, { provide: _services_node_service__WEBPACK_IMPORTED_MODULE_13__["NodeService"], useClass: _services_fake_node_service__WEBPACK_IMPORTED_MODULE_0__["FakeNodeService"] }], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_9__["ReteModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CustomReteModule, { declarations: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__["GridComponent"],
        _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_10__["BaseNodeComponent"],
        _nodes_controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_5__["ResourceComponent"],
        _shared_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_2__["ItemImageComponent"],
        _node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_12__["NodeBrowserComponent"],
        _shared_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_1__["HighlightSearchPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_9__["ReteModule"]], exports: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__["GridComponent"], _node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_12__["NodeBrowserComponent"], _shared_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_1__["HighlightSearchPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](CustomReteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
        args: [{
                declarations: [
                    _grid_grid_component__WEBPACK_IMPORTED_MODULE_8__["GridComponent"],
                    _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_10__["BaseNodeComponent"],
                    _nodes_controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_5__["ResourceComponent"],
                    _shared_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_2__["ItemImageComponent"],
                    _node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_12__["NodeBrowserComponent"],
                    _shared_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_1__["HighlightSearchPipe"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_9__["ReteModule"],
                ],
                providers: [{ provide: _services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"], useClass: _services_fake_item_service__WEBPACK_IMPORTED_MODULE_3__["FakeItemService"] }, { provide: _services_node_service__WEBPACK_IMPORTED_MODULE_13__["NodeService"], useClass: _services_fake_node_service__WEBPACK_IMPORTED_MODULE_0__["FakeNodeService"] }],
                exports: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__["GridComponent"], _node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_12__["NodeBrowserComponent"], _shared_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_1__["HighlightSearchPipe"]],
                entryComponents: [_nodes_controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_5__["ResourceComponent"],
                    _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_10__["BaseNodeComponent"]
                ]
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
/* harmony import */ var _shared_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/item-image-component/item-image.component */ "Hvuu");
/* harmony import */ var _shared_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/item.model */ "cxpe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rete */ "9dUG");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/item.service */ "x7rl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class ResourceComponent {
    constructor(itemService) {
        this.itemService = itemService;
        this.background = {};
    }
    ngOnInit() {
        this.mounted();
    }
    onChangeRate() {
        let num = parseFloat(this.perHourString);
        this.perHour = num;
        this.changeRate(this.perHour);
    }
}
ResourceComponent.ɵfac = function ResourceComponent_Factory(t) { return new (t || ResourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"])); };
ResourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResourceComponent, selectors: [["ng-component"]], viewQuery: function ResourceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_shared_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_0__["ItemImageComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.itemImage = _t.first);
    } }, inputs: { readonly: "readonly", mounted: "mounted", changeItem: "changeItem", changeRate: "changeRate", click: "click", mouseDown: "mouseDown", mouseUp: "mouseUp" }, decls: 5, vars: 3, consts: [[1, "resource-control"], [3, "selectedItem"], ["type", "text", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');", "placeholder", "1", 3, "ngModel", "readonly", "ngModelChange", "change", "dblclick", "mousedown", "mouseup"]], template: function ResourceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "item-image", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ResourceComponent_Template_input_ngModelChange_3_listener($event) { return ctx.perHourString = $event; })("change", function ResourceComponent_Template_input_change_3_listener() { return ctx.onChangeRate(); })("dblclick", function ResourceComponent_Template_input_dblclick_3_listener($event) { return $event.stopPropagation(); })("mousedown", function ResourceComponent_Template_input_mousedown_3_listener() { return ctx.mouseDown(); })("mouseup", function ResourceComponent_Template_input_mouseup_3_listener() { return ctx.mouseUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " / hour ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedItem", ctx.selectedItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.perHourString)("readonly", ctx.readonly);
    } }, directives: [_shared_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_0__["ItemImageComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".resource-control[_ngcontent-%COMP%] {\n  object-fit: cover;\n  max-width: 150px;\n}\n.resource-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  height: 100px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL25vZGVzL2NvbnRyb2xzL3Jlc291cmNlLWNvbnRyb2wvcmVzb3VyY2UtY29udHJvbC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQURKO0FBRUk7RUFDSSxjQUFBO0FBQVI7QUFFQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yZXRlLW1vZHVsZXMvbm9kZXMvY29udHJvbHMvcmVzb3VyY2UtY29udHJvbC9yZXNvdXJjZS1jb250cm9sLnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IC4uLy4uLy4uL3JldGVfdmFyaWFibGVzXG5cbi5yZXNvdXJjZS1jb250cm9sXG4gICAgb2JqZWN0LWZpdDogY292ZXJcbiAgICBtYXgtd2lkdGg6IDE1MHB4XG4gICAgaW5wdXRcbiAgICAgICAgbWF4LXdpZHRoOiA1MCVcblxuLmRyb3Bkb3duLW1lbnVcbiAgICBoZWlnaHQ6IDEwMHB4XG4gICAgb3ZlcmZsb3c6IGF1dG8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ResourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                templateUrl: "./resource-control.html",
                styleUrls: ["./resource-control.sass",]
            }]
    }], function () { return [{ type: _services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] }]; }, { readonly: [{
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
        }], itemImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_shared_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_0__["ItemImageComponent"]]
        }] }); })();
class ResourceControl extends rete__WEBPACK_IMPORTED_MODULE_3__["Control"] {
    constructor(emitter, key) {
        super(key);
        this.emitter = emitter;
        this.key = key;
        this.component = ResourceComponent;
        this.props = {
            selectedItem: _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"],
            readonly: false,
            perHour: 1,
            perHourString: "1",
            changeRate: v => this.onChangeRate(v),
            mounted: () => {
                this.setInitialItem();
            },
            click: () => this.onClick(),
            mouseDown: () => this.onMouseDown(),
            mouseUp: () => this.onMouseUp(),
        };
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
    setInitialItem() {
        let item = this.getData('resource');
        this.props.selectedItem = item;
        this.putData(this.key, item);
        this.putData('changed', true);
        this.putData('amount', item.craftable ? item.recipe.createdAmount : 1);
        this.putData('perHour', this.props.perHour);
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
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rete */ "9dUG");
/* harmony import */ var _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/resource-control/resource-control */ "AnjU");



class ResourceNode extends rete__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(socketController) {
        super('Resource');
        this.socketController = socketController;
    }
    builder(node) {
        var control = new _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_2__["ResourceControl"](this.editor, 'resource');
        node.addControl(control);
        node.data['type'] = 'output';
        node.data['criticalPath'] = false;
        node.data.name = "Resource";
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
            var output = new rete__WEBPACK_IMPORTED_MODULE_1__["Output"]("resource", item.name, this.socketController.GetSocketForId(item.id));
            node_ref.addOutput(output);
            this.editor.trigger('nodeselected');
            node.data.changed = false;
        }
        // console.log("Sending data");
        // console.log(node);
        let datagram = new _shared_connection_model__WEBPACK_IMPORTED_MODULE_0__["Connection"](node.data.resource, node.data.amount, node.data.perHour, node.data.criticalPath);
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
    items: [
        {
            id: 1,
            name: "Stone",
            index: [0, 0],
            craftable: false,
        },
        {
            id: 2,
            name: "Grass",
            index: [1, 0],
            craftable: false,
        },
        {
            id: 3,
            name: "Dirt",
            index: [2, 0],
            craftable: false,
        },
        {
            id: 4,
            name: "Cobblestone",
            index: [3, 0],
            craftable: false,
        },
        {
            id: 5,
            name: "Planks",
            index: [4, 0],
            craftable: true,
            recipe: {
                createdAmount: 4,
                ingredients: [
                    {
                        id: 23,
                        amount: 1
                    }
                ],
            },
        },
        {
            id: 23,
            name: "Logs",
            index: [6, 1],
            craftable: false,
        },
        {
            id: 92,
            name: "Bookshelf",
            index: [11, 5],
            craftable: true,
            recipe: {
                createdAmount: 1,
                ingredients: [
                    {
                        id: 340,
                        amount: 3
                    },
                    {
                        id: 5,
                        amount: 6
                    }
                ],
            },
        },
        {
            id: 103,
            name: "Crafting Bench",
            index: [6, 6],
            craftable: true,
            recipe: {
                createdAmount: 1,
                ingredients: [
                    {
                        id: 5,
                        amount: 4
                    },
                ],
            },
        },
        {
            id: 334,
            name: "Leather",
            index: [14, 18],
            craftable: false,
        },
        {
            id: 338,
            name: "Sugar Cane",
            index: [2, 19],
            craftable: false,
        },
        {
            id: 339,
            name: "Paper",
            index: [3, 19],
            craftable: true,
            recipe: {
                createdAmount: 3,
                ingredients: [
                    {
                        id: 338,
                        amount: 3
                    },
                ],
            },
        },
        {
            id: 340,
            name: "Book",
            index: [4, 19],
            craftable: true,
            recipe: {
                createdAmount: 1,
                ingredients: [
                    {
                        id: 334,
                        amount: 1
                    },
                    {
                        id: 339,
                        amount: 3
                    }
                ],
            },
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
            if (value.id == id) {
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
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rete */ "9dUG");
/* harmony import */ var _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/resource-control/resource-control */ "AnjU");



class CrafterNode extends rete__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(socketController, itemService) {
        super('Crafter');
        this.socketController = socketController;
        this.itemService = itemService;
        this.data['criticalPath'] = false;
    }
    builder(node) {
        var control = new _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_2__["ResourceControl"](this.editor, 'resource');
        node.addControl(control);
        node.data.name = "Crafter";
        node.data.criticalPath = false;
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
            var output = new rete__WEBPACK_IMPORTED_MODULE_1__["Output"]("resource", item.name + " x " + item.recipe.createdAmount, this.socketController.GetSocketForId(item.id));
            node_ref.addOutput(output);
            node_ref.inputs.clear();
            item.recipe.ingredients.forEach(ingredient => {
                var item = this.itemService.GetItemFromId(ingredient.id);
                var input = new rete__WEBPACK_IMPORTED_MODULE_1__["Input"]("" + item.id, item.name + " x " + ingredient.amount, this.socketController.GetSocketForId(item.id));
                node_ref.addInput(input);
            });
            this.editor.trigger('nodeselected');
            node.data.changed = false;
        }
        var perHourBottleneck = Infinity;
        var craftedItem = node.data.resource;
        let recipe = craftedItem.recipe;
        recipe.ingredients.forEach(ingredient => {
            let input = inputs[ingredient.id];
            if (input && input[0]) {
                let itemBottleneck = input[0].amount / ingredient.amount;
                itemBottleneck *= input[0].perHour;
                if (itemBottleneck < perHourBottleneck) {
                    perHourBottleneck = itemBottleneck;
                }
            }
        });
        let control = node_ref.controls.get('resource');
        control.props.readonly = true;
        control.setRate(perHourBottleneck);
        var datagram = new _shared_connection_model__WEBPACK_IMPORTED_MODULE_0__["Connection"](node.data.resource, node.data.amount, node.data.perHour, node.data.criticalPath);
        outputs['resource'] = datagram;
        // for (var recipeIndex in craftedItem.recipe) {
        //   let recipe: Recipe = craftedItem.recipe[recipeIndex];
        //   let input = inputs[recipe.id];
        //   // Input found
        //   if (input && input[0]) {
        //     let itemBottleneck = input[0].amount / recipe.amount;
        //     itemBottleneck *= input[0].perHour;
        //     if (itemBottleneck < perHourBottleneck) {
        //       perHourBottleneck = itemBottleneck;
        //     }
        //   }
        // }
    }
}


/***/ }),

/***/ "Hvuu":
/*!**********************************************************************************!*\
  !*** ./src/app/rete-modules/shared/item-image-component/item-image.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ItemImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemImageComponent", function() { return ItemImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



// Item component that displays and updates the item visible in the image.
// Takes a Item as an input and will update the visual when updateVisual is called
class ItemImageComponent {
    constructor() {
        this.background = {};
    }
    ngOnInit() {
        this.updateVisual(this.selectedItem);
    }
    updateVisual(item) {
        this.background['background-position-x'] = -64 * item.index[0] + "px";
        this.background['background-position-y'] = -64 * item.index[1] + "px";
    }
}
ItemImageComponent.ɵfac = function ItemImageComponent_Factory(t) { return new (t || ItemImageComponent)(); };
ItemImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemImageComponent, selectors: [["item-image"]], inputs: { selectedItem: "selectedItem" }, decls: 2, vars: 1, consts: [[1, "center", "pixelated"], ["src", "assets/images/transparent_32x32.png", 1, "item", 3, "ngStyle", "dragstart"]], template: function ItemImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragstart", function ItemImageComponent_Template_img_dragstart_1_listener() { return false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.background);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".item[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 16px;\n  display: block;\n  background-image: url('inventory_sprites.png');\n  background-size: 1024px 2240px;\n  user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-drag: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n\n.pixelated[_ngcontent-%COMP%] {\n  image-rendering: pixelated;\n}\n\n.center[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL3NoYXJlZC9pdGVtLWltYWdlLWNvbXBvbmVudC9pdGVtLWltYWdlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsOENBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBREo7O0FBR0E7RUFDSSwwQkFBQTtBQUFKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3JldGUtbW9kdWxlcy9zaGFyZWQvaXRlbS1pbWFnZS1jb21wb25lbnQvaXRlbS1pbWFnZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3JldGVfdmFyaWFibGVzJ1xuXG4uaXRlbVxuICAgIHdpZHRoOiAkc3ByaXRlLXNjYWxlKjMycHhcbiAgICBoZWlnaHQ6ICRzcHJpdGUtc2NhbGUqMzJweFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweFxuICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ludmVudG9yeV9zcHJpdGVzLnBuZycpXG4gICAgYmFja2dyb3VuZC1zaXplOiAkc3ByaXRlLXNjYWxlKjUxMnB4ICRzcHJpdGUtc2NhbGUqMTEyMHB4XG4gICAgdXNlci1kcmFnOiBub25lXG4gICAgdXNlci1zZWxlY3Q6IG5vbmVcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lXG4gICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmVcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lXG5cbi5waXhlbGF0ZWRcbiAgICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZFxuXG4uY2VudGVyXG4gICAgbWFyZ2luOiBhdXRvXG4gICAgcGFkZGluZzogMnB4Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'item-image',
                templateUrl: 'item-image.component.html',
                styleUrls: ['item-image.component.sass']
            }]
    }], function () { return []; }, { selectedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _nodes_custom_node_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../nodes/custom-node.component */ "TRM9");
/* harmony import */ var _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../nodes/base-node/base-node.component */ "jDfs");
/* harmony import */ var _shared_node_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/node-tree */ "icfx");
/* harmony import */ var _nodes_output_node_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../nodes/output-node.component */ "c5kL");
/* harmony import */ var _nodes_crafter_node_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../nodes/crafter-node.component */ "DfuO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rete */ "9dUG");
/* harmony import */ var rete_connection_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rete-connection-plugin */ "G+JA");
/* harmony import */ var _nodes_resource_node_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../nodes/resource-node.component */ "B5f4");
/* harmony import */ var rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rete-angular-render-plugin */ "JLln");
/* harmony import */ var _nodes_sockets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../nodes/sockets */ "nj5+");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../services/item.service */ "x7rl");
/* harmony import */ var _services_node_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/node.service */ "5bZ5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
















const _c0 = ["nodeEditor"];
const _c1 = function () { return ["btn-outline-danger", "disabled"]; };
class GridComponent {
    constructor(socketController, itemService, nodeService) {
        this.socketController = socketController;
        this.itemService = itemService;
        this.nodeService = nodeService;
        this.editor = null;
        this.completePath = false;
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const container = this.el.nativeElement;
            this.components = {};
            this.components['Resource'] = new _nodes_resource_node_component__WEBPACK_IMPORTED_MODULE_9__["ResourceNode"](this.socketController);
            this.components['Crafter'] = new _nodes_crafter_node_component__WEBPACK_IMPORTED_MODULE_5__["CrafterNode"](this.socketController, this.itemService);
            this.components['Output'] = new _nodes_output_node_component__WEBPACK_IMPORTED_MODULE_4__["OutputNode"](this.socketController);
            this.components['Custom'] = new _nodes_custom_node_component__WEBPACK_IMPORTED_MODULE_1__["CustomNode"](this.socketController, this.itemService, this.nodeService);
            this.editor = new rete__WEBPACK_IMPORTED_MODULE_7__["NodeEditor"]('minecraft-web-app@0.1.0', container);
            this.editor.use(rete_connection_plugin__WEBPACK_IMPORTED_MODULE_8__["default"]);
            this.editor.use(rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_10__["AngularRenderPlugin"], { component: _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_2__["BaseNodeComponent"] });
            this.engine = new rete__WEBPACK_IMPORTED_MODULE_7__["Engine"]('minecraft-web-app@0.1.0');
            this.nodeTree = new _shared_node_tree__WEBPACK_IMPORTED_MODULE_3__["NodeTree"]();
            for (const componentKey in this.components) {
                let component = this.components[componentKey];
                this.editor.register(component);
                this.engine.register(component);
            }
            this.createNode("Resource", 1, 0, -125);
            this.createNode("Crafter", 5, 400, -125);
            this.createNode("Output", 340, 800, -125);
            this.createNode("Custom", 1, 0, 200);
            this.createNode("Custom", 2, 600, 200);
            this.editor.on(['nodecreated'], (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.engine.abort();
                yield this.engine.process(this.editor.toJSON());
            })));
            this.editor.on(['process', 'connectioncreated', 'connectionremoved', 'noderemoved'], () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.engine.abort();
                yield this.engine.process(this.editor.toJSON());
                // console.log("Updating critical path")
                this.nodeTree.parseFromJson(this.editor.toJSON());
                this.updateCriticalPath();
                // console.log("Critical path updated")
                // await this.engine.abort();
                // await this.engine.process(this.editor.toJSON());
            }));
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
    updateCriticalPath() {
        let criticalPath = this.nodeTree.getCriticalPath();
        this.completePath = criticalPath.length > 0;
        this.editor.nodes.forEach(value => {
            value.data.criticalPath = false;
        });
        criticalPath.forEach((value, index, array) => {
            let node_ref = this.editor.nodes.find(n => n.id === value.id);
            node_ref.data.criticalPath = true;
        });
    }
    dragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
    }
    onDrop(event) {
        event.preventDefault();
        const type = event.dataTransfer.getData("nodeType");
        const id = event.dataTransfer.getData("nodeId");
        this.createNode(type, id, event.clientX, event.clientY, true);
    }
    deleteNode() {
        this.editor.selected.list.forEach(value => {
            this.editor.removeNode(value);
        });
        this.editor.selected.list = [];
    }
    anyNodeSelected() {
        return this.editor != null && this.editor.selected.list.length > 0;
    }
    scaleToFit() {
        let editorBounds = [this.editor.view.area.container.clientWidth, this.editor.view.area.container.clientHeight];
        let firstPass = true;
        let topLeftBounds = [0, 0]; // Towards the negative
        let bottomRightBounds = [0, 0]; // Towards the positive
        this.editor.nodes.forEach(value => {
            if (firstPass || topLeftBounds[0] > value.position[0]) {
                topLeftBounds[0] = value.position[0];
            }
            if (firstPass || topLeftBounds[1] > value.position[1]) {
                topLeftBounds[1] = value.position[1];
            }
            if (firstPass || bottomRightBounds[0] < value.position[0] + 200) {
                bottomRightBounds[0] = value.position[0] + 200;
            }
            if (firstPass || bottomRightBounds[1] < value.position[1] + 250) {
                bottomRightBounds[1] = value.position[1] + 250;
            }
            ;
            firstPass = false;
        });
        let nodeBounds = [bottomRightBounds[0] - topLeftBounds[0] + 50, bottomRightBounds[1] - topLeftBounds[1] + 50];
        let nodeCenter = [topLeftBounds[0] + nodeBounds[0] * .5, topLeftBounds[1] + nodeBounds[1] * .5];
        let transform = { k: 1, x: 0, y: 0 };
        // Calculate the scale
        let sizeDifference = [editorBounds[0] / nodeBounds[0], editorBounds[1] / nodeBounds[1]];
        let widthLonger = sizeDifference[0] < sizeDifference[1];
        if (widthLonger) {
            transform.k = sizeDifference[0];
        }
        else {
            transform.k = sizeDifference[1];
        }
        let editorCenter = [editorBounds[0] * .5, editorBounds[1] * .5];
        let centerDifference = [(nodeCenter[0] - 25) * transform.k - editorCenter[0], (nodeCenter[1] - 25) * transform.k - editorCenter[1]];
        transform.x = -centerDifference[0];
        transform.y = -centerDifference[1];
        this.editor.view.area.transform = transform;
        this.editor.view.area.update();
    }
    canCollapse() {
        return this.completePath ? "" : "disabled";
    }
    collapseToNode() {
        let nodeOutputs = this.nodeTree.getOutputs();
        // Build up a structure of output node ids and the resources that contribute to them
        let outputResource = {};
        nodeOutputs.forEach((value, index) => {
            let searchNodes = [value];
            let outputNode = value;
            while (searchNodes.length > 0) {
                let currentNode = searchNodes.pop();
                currentNode.inputs.forEach(value => {
                    if (value.node.name == "Resource") {
                        if (!outputResource[outputNode.node.id]) {
                            outputResource[outputNode.node.id] = {};
                        }
                        outputResource[outputNode.node.id][value.node.id] = Infinity;
                    }
                    else {
                        searchNodes.push(value);
                    }
                });
            }
        });
        // For all of the output nodes that need to have rates calculated
        for (const outputIndex in outputResource) {
            let outputResources = outputResource[outputIndex];
            // For each resource node associated with that output
            for (const resourceIndex in outputResources) {
                let node = this.editor.nodes.find(n => n.id === parseInt(resourceIndex));
                // Set default input rate to 1
                outputResources[resourceIndex] = 1;
                console.log(node);
            }
        }
    }
    createNode(nodeType, nodeId, x, y, fromMouse = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.components.hasOwnProperty(nodeType)) {
                let component;
                if (nodeType == "Custom") {
                    component = yield this.components[nodeType].createNode({ custom: nodeId });
                }
                else {
                    component = yield this.components[nodeType].createNode({ resource: this.itemService.GetItemFromId(nodeId) });
                }
                let position = [0, 0];
                if (fromMouse) {
                    let transform = this.editor.view.area.transform;
                    position = [(x - transform.x - 75) / transform.k, (y - transform.y - 125) / transform.k];
                }
                else {
                    position = [x, y];
                }
                component.position = position;
                this.editor.addNode(component);
            }
        });
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nodes_sockets__WEBPACK_IMPORTED_MODULE_11__["SocketController"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_12__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_node_service__WEBPACK_IMPORTED_MODULE_13__["NodeService"])); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], viewQuery: function GridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, decls: 15, vars: 3, consts: [[1, "grid-wrapper", "module-margin", 3, "dragover", "drop"], [1, "node-editor"], ["nodeEditor", ""], ["id", "delete-container", 3, "mouseup"], [1, "btn", 3, "ngClass"], ["id", "scale-container", 3, "mouseup"], [1, "btn", "btn-info"], ["id", "collapse-container"], [1, "btn", "btn-info", 3, "ngClass", "mouseup"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dragover", function GridComponent_Template_div_dragover_0_listener($event) { return ctx.dragOver($event); })("drop", function GridComponent_Template_div_drop_0_listener($event) { return ctx.onDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseup", function GridComponent_Template_div_mouseup_3_listener() { return ctx.deleteNode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseup", function GridComponent_Template_div_mouseup_7_listener() { return ctx.scaleToFit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Scale To Fit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseup", function GridComponent_Template_label_mouseup_12_listener() { return ctx.collapseToNode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Collapse To Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.anyNodeSelected() ? "btn-danger" : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.canCollapse());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"]], styles: [".grid-wrapper[_ngcontent-%COMP%] {\n  height: 60%;\n  border: 2px solid black;\n  position: relative;\n}\n\n#delete-container[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n#delete-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 150px;\n  height: 50px;\n  margin-bottom: 0px;\n}\n\n#delete-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: auto;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n#scale-container[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n#scale-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 150px;\n  height: 50px;\n  margin-bottom: 0px;\n}\n\n#scale-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: auto;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n#collapse-container[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 10px;\n}\n\n#collapse-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  margin-bottom: 0px;\n}\n\n#collapse-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: auto;\n  display: inline-block;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL2dyaWQvZ3JpZC5jb21wb25lbnQuc2FzcyIsInNyYy9fZ2xvYmFscy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFHSTtFQUNJLHFCQUFBO0VBQ0EsWUNKYztFREtkLFlDSmU7RURLZixrQkFBQTtBQURSOztBQUdRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBRFo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQUo7O0FBRUk7RUFDSSxxQkFBQTtFQUNBLFlDckJjO0VEc0JkLFlDckJlO0VEc0JmLGtCQUFBO0FBQVI7O0FBRVE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFBWjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDSjs7QUFDSTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ1I7O0FBQ1E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3JldGUtbW9kdWxlcy9ncmlkL2dyaWQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9nbG9iYWxzJ1xuQGltcG9ydCAnLi4vcmV0ZV92YXJpYWJsZXMnXG4gICAgXG4uZ3JpZC13cmFwcGVyXG4gICAgaGVpZ2h0OiAkZ3JpZC1oZWlnaHRcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFja1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuXG4jZGVsZXRlLWNvbnRhaW5lclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIHJpZ2h0OiAxMHB4XG4gICAgYm90dG9tOiAxMHB4XG5cbiAgICBsYWJlbFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgICAgICAgd2lkdGg6ICRkZWxldGVfYnV0dG9uX3dpZHRoXG4gICAgICAgIGhlaWdodDogJGRlbGV0ZV9idXR0b25faGVpZ2h0XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweFxuICAgICAgICBcbiAgICAgICAgcFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4XG4gICAgICAgICAgICBtYXJnaW46IGF1dG9cbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxuXG4jc2NhbGUtY29udGFpbmVyXG4gICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgcmlnaHQ6IDEwcHhcbiAgICB0b3A6IDEwcHhcblxuICAgIGxhYmVsXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICAgICAgICB3aWR0aDogJGRlbGV0ZV9idXR0b25fd2lkdGhcbiAgICAgICAgaGVpZ2h0OiAkZGVsZXRlX2J1dHRvbl9oZWlnaHRcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4XG4gICAgICAgIFxuICAgICAgICBwXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHhcbiAgICAgICAgICAgIG1hcmdpbjogYXV0b1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG5cbiNjb2xsYXBzZS1jb250YWluZXJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICBsZWZ0OiAxMHB4XG4gICAgdG9wOiAxMHB4XG5cbiAgICBsYWJlbFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgICAgICAgd2lkdGg6IGF1dG9cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4XG4gICAgICAgIFxuICAgICAgICBwXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHhcbiAgICAgICAgICAgIG1hcmdpbjogYXV0b1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG5cbiIsIiRtb2R1bGUtbWFyZ2luLWxlZnQ6IDEwcHhcbiRtb2R1bGUtbWFyZ2luLXRvcDogMTBweFxuXG4kZ3JpZC13aWR0aDogNzUlXG4kZ3JpZC1oZWlnaHQ6IDYwJVxuXG4kbm9kZS1icm93c2VyLWhlaWdodDogY2FsYygxMDAlIC0gI3skZ3JpZC1oZWlnaHR9IC0gMyojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG5cbiRvdXRwdXQtd2lkdGg6IGNhbGMoMTAwJSAtICN7JGdyaWQtd2lkdGh9KVxuJG91dHB1dC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDIqI3skbW9kdWxlLW1hcmdpbi10b3B9KVxuXG4kZGVsZXRlLWJ1dHRvbi13aWR0aDogMTUwcHhcbiRkZWxldGUtYnV0dG9uLWhlaWdodDogNTBweCJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
        args: [{
                selector: 'app-grid',
                templateUrl: './grid.component.html',
                styleUrls: ['./grid.component.sass']
            }]
    }], function () { return [{ type: _nodes_sockets__WEBPACK_IMPORTED_MODULE_11__["SocketController"] }, { type: _services_item_service__WEBPACK_IMPORTED_MODULE_12__["ItemService"] }, { type: _services_node_service__WEBPACK_IMPORTED_MODULE_13__["NodeService"] }]; }, { el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
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
/* harmony import */ var _rete_modules_node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rete-modules/node-browser/node-browser.component */ "nu8m");
/* harmony import */ var _output_output_container_output_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./output/output-container/output-container.component */ "n/8p");





class AppComponent {
    constructor() {
        this.title = 'Supplemental Application';
    }
    onClick(event) {
        console.log("Clicked: " + event);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [["id", "fullsite", 1, "fill-width", "fill-height"], ["id", "workspace"], ["id", "resultspace"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-node-browser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-output-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_rete_modules_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], _rete_modules_node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_2__["NodeBrowserComponent"], _output_output_container_output_container_component__WEBPACK_IMPORTED_MODULE_3__["OutputContainerComponent"]], styles: ["#fullsite[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#workspace[_ngcontent-%COMP%] {\n  width: 75%;\n  height: 100%;\n  flex-shrink: 2;\n  flex-direction: column;\n  display: inline-block;\n}\n\n#resultspace[_ngcontent-%COMP%] {\n  width: calc(100% - 75%);\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic3JjL19nbG9iYWxzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0FBREo7O0FBR0E7RUFDSSxVQ0hTO0VESVQsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBRUE7RUFDSSx1QkNMVztFRE1YLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL19nbG9iYWxzJ1xuXG4jZnVsbHNpdGVcbiAgICBkaXNwbGF5OiBmbGV4XG5cbiN3b3Jrc3BhY2VcbiAgICB3aWR0aDogJGdyaWQtd2lkdGhcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICBmbGV4LXNocmluazogMlxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcblxuI3Jlc3VsdHNwYWNlXG4gICAgd2lkdGg6ICRvdXRwdXQtd2lkdGhcbiAgICBoZWlnaHQ6IDEwMCUiLCIkbW9kdWxlLW1hcmdpbi1sZWZ0OiAxMHB4XG4kbW9kdWxlLW1hcmdpbi10b3A6IDEwcHhcblxuJGdyaWQtd2lkdGg6IDc1JVxuJGdyaWQtaGVpZ2h0OiA2MCVcblxuJG5vZGUtYnJvd3Nlci1oZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGdyaWQtaGVpZ2h0fSAtIDMqI3skbW9kdWxlLW1hcmdpbi10b3B9KVxuXG4kb3V0cHV0LXdpZHRoOiBjYWxjKDEwMCUgLSAjeyRncmlkLXdpZHRofSlcbiRvdXRwdXQtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyKiN7JG1vZHVsZS1tYXJnaW4tdG9wfSlcblxuJGRlbGV0ZS1idXR0b24td2lkdGg6IDE1MHB4XG4kZGVsZXRlLWJ1dHRvbi1oZWlnaHQ6IDUwcHgiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


/***/ }),

/***/ "TRM9":
/*!*************************************************************!*\
  !*** ./src/app/rete-modules/nodes/custom-node.component.ts ***!
  \*************************************************************/
/*! exports provided: CustomNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomNode", function() { return CustomNode; });
/* harmony import */ var _shared_connection_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/connection.model */ "fqIU");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rete */ "9dUG");
/* harmony import */ var _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/resource-control/resource-control */ "AnjU");



class CustomNode extends rete__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(socketController, itemService, nodeService) {
        super('Custom');
        this.socketController = socketController;
        this.itemService = itemService;
        this.nodeService = nodeService;
    }
    builder(node) {
        // Visual for custom node
        node.data.resource = this.itemService.GetItemFromId(103);
        var control = new _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_2__["ResourceControl"](this.editor, 'resource');
        control.props.selectedItem = node.data.resource;
        control.props.readonly = true;
        node.addControl(control);
        let customization = this.nodeService.GetCustomNode(node.data['custom']);
        if (!customization) {
            throw new Error("Failed to get Custom Node Data for ID: " + node.data['custom']);
        }
        node.data.name = customization.name;
        node.data['customization'] = customization;
        var custom = node.data.customization;
        custom.inputs.forEach(id => {
            var item = this.itemService.GetItemFromId(id);
            var input = new rete__WEBPACK_IMPORTED_MODULE_1__["Input"]("" + item.id, item.name, this.socketController.GetSocketForId(item.id));
            node.addInput(input);
        });
        for (let outputIndex in custom.outputs) {
            let item = this.itemService.GetItemFromId(parseInt(outputIndex));
            var output = new rete__WEBPACK_IMPORTED_MODULE_1__["Output"]("" + item.id, item.name, this.socketController.GetSocketForId(item.id));
            node.addOutput(output);
        }
        return node;
    }
    worker(node, inputs, outputs) {
        let datagramOutputs = {};
        let customData = node.data.customization;
        // For each output calculate the critical path based on their inputs
        for (let outputId in customData.outputs) {
            let missingInput = false;
            let perHour = Infinity;
            let inputRates = customData.outputs[outputId];
            for (let inputId in inputRates) {
                let inputData = inputs[inputId][0];
                if (inputData && !missingInput) {
                    let possiblePerHour = inputRates[inputId] * inputData.perHour * inputData.amount;
                    if (possiblePerHour < perHour) {
                        perHour = possiblePerHour;
                    }
                }
                else {
                    perHour = Infinity;
                    missingInput = true;
                }
            }
            let item = this.itemService.GetItemFromId(parseInt(outputId));
            let datagram = new _shared_connection_model__WEBPACK_IMPORTED_MODULE_0__["Connection"](item, 1, perHour, node.data.criticalPath);
            datagramOutputs[outputId] = datagram;
        }
        // Find the smallest critical path time for the global critical path
        let smallestPerHour = { index: 0, perHour: Infinity };
        for (let outputIndex in datagramOutputs) {
            let datagram = datagramOutputs[outputIndex];
            if (smallestPerHour.perHour > datagram.perHour) {
                smallestPerHour.index = outputIndex;
                smallestPerHour.perHour = datagram.perHour;
            }
            outputs[outputIndex] = datagramOutputs[outputIndex];
        }
        var node_ref = this.editor.nodes.find(value => { return value.id == node.id; });
        let control = node_ref.controls.get('resource');
        control.setRate(smallestPerHour.perHour);
    }
}


/***/ }),

/***/ "UYxj":
/*!************************************************************!*\
  !*** ./src/app/rete-modules/shared/highlight-text.pipe.ts ***!
  \************************************************************/
/*! exports provided: HighlightSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightSearchPipe", function() { return HighlightSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
// Reference
// https://stackoverflow.com/a/44962110


class HighlightSearchPipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        var re = new RegExp(args, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
        return value.replace(re, "<mark class='highlight'>$&</mark>");
    }
}
HighlightSearchPipe.ɵfac = function HighlightSearchPipe_Factory(t) { return new (t || HighlightSearchPipe)(); };
HighlightSearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "highlight", type: HighlightSearchPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightSearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'highlight'
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
/* harmony import */ var _output_output_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./output/output.module */ "bSka");
/* harmony import */ var _rete_modules_nodes_sockets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rete-modules/nodes/sockets */ "nj5+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _rete_modules_custom_rete_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rete-modules/custom-rete.module */ "8vqi");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_rete_modules_nodes_sockets__WEBPACK_IMPORTED_MODULE_1__["SocketController"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _rete_modules_custom_rete_module__WEBPACK_IMPORTED_MODULE_5__["CustomReteModule"],
            _output_output_module__WEBPACK_IMPORTED_MODULE_0__["OutputModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _rete_modules_custom_rete_module__WEBPACK_IMPORTED_MODULE_5__["CustomReteModule"],
        _output_output_module__WEBPACK_IMPORTED_MODULE_0__["OutputModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _rete_modules_custom_rete_module__WEBPACK_IMPORTED_MODULE_5__["CustomReteModule"],
                    _output_output_module__WEBPACK_IMPORTED_MODULE_0__["OutputModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
                ],
                providers: [_rete_modules_nodes_sockets__WEBPACK_IMPORTED_MODULE_1__["SocketController"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bSka":
/*!*****************************************!*\
  !*** ./src/app/output/output.module.ts ***!
  \*****************************************/
/*! exports provided: OutputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputModule", function() { return OutputModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _output_container_output_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./output-container/output-container.component */ "n/8p");




class OutputModule {
}
OutputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OutputModule });
OutputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OutputModule_Factory(t) { return new (t || OutputModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OutputModule, { declarations: [_output_container_output_container_component__WEBPACK_IMPORTED_MODULE_2__["OutputContainerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_output_container_output_container_component__WEBPACK_IMPORTED_MODULE_2__["OutputContainerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_output_container_output_container_component__WEBPACK_IMPORTED_MODULE_2__["OutputContainerComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [_output_container_output_container_component__WEBPACK_IMPORTED_MODULE_2__["OutputContainerComponent"],
                ],
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
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rete */ "9dUG");
/* harmony import */ var _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls/resource-control/resource-control */ "AnjU");


class OutputNode extends rete__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(socketController) {
        super('Output');
        this.socketController = socketController;
    }
    builder(node) {
        var control = new _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_1__["ResourceControl"](this.editor, 'resource');
        control.props.readonly = true;
        node.addControl(control);
        node.data.name = "Output";
        node.data.criticalPath = false;
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
            var input = new rete__WEBPACK_IMPORTED_MODULE_0__["Input"]("resource", item.name, this.socketController.GetSocketForId(item.id));
            node_ref.addInput(input);
            this.editor.trigger('nodeselected');
            node.data.changed = false;
        }
        var perHourBottleneck = Infinity;
        if (inputs && inputs['resource'] && inputs['resource'][0]) {
            // console.log(inputs['resource'][0]);
            // if (inputs['resource'][0].criticalPath == node.data.criticalPath) {
            perHourBottleneck = inputs['resource'][0].perHour * inputs['resource'][0].amount;
            // }
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
    constructor(item, amount, perHour, onCriticalPath) {
        this.item = item;
        this.amount = amount;
        this.perHour = perHour;
        this.onCriticalPath = onCriticalPath;
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
    getNodeResourceId() {
        return this.getNodeData()['resource'].id;
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
    getOutputs() {
        return this.outputNodes;
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
        if (currentNode.inputs.length === 0 || currentNode.getNodeData()['perHour'] === Infinity) {
            return;
        }
        let nextNode = currentNode;
        this.criticalPath.push(nextNode.node);
        while (nextNode.getNodeName() !== 'Resource') {
            currentNode = null;
            let duplicates = [];
            // Custom critical path nodes
            if (nextNode.getNodeName() == "Custom") {
                let smallestOutputIndex = null;
                let duplicateOutputIndexes = [];
                // Get the critical outputs
                for (let outputIndex in nextNode.outputs) {
                    let output = nextNode.outputs[outputIndex];
                    if (smallestOutputIndex == null) {
                        smallestOutputIndex = outputIndex;
                    }
                    else if (nextNode.outputs[smallestOutputIndex].getNodeData()['perHour'] == output.getNodeData()['perHour']) {
                        console.log(nextNode.outputs[outputIndex].getNodeData()['perHour'] + " == " + output.getNodeData()['perHour']);
                        duplicateOutputIndexes.push(outputIndex);
                    }
                    else if (nextNode.outputs[smallestOutputIndex].getNodeData()['perHour'] > output.getNodeData()['perHour']) {
                        smallestOutputIndex = outputIndex;
                        duplicateOutputIndexes = [];
                    }
                }
                // Find the smallest input from the critical outputs
                let smallestInputIndex = null;
                let smallestInputValue = Infinity;
                let duplicateInputIndexs = [];
                let ingredients = nextNode.getNodeData()['customization'].outputs;
                duplicateOutputIndexes.push(smallestOutputIndex);
                duplicateOutputIndexes.forEach(outputIndex => {
                    let output = nextNode.outputs[outputIndex];
                    let ingredientList = ingredients[output.getNodeResourceId()];
                    for (let ingredientIndex in ingredientList) {
                        let tempNode = nextNode.inputs.find(inputNode => inputNode.getNodeResourceId() == ingredientIndex);
                        let inputPerHour = ingredientList[ingredientIndex] * tempNode.getNodeData()['perHour'];
                        if (smallestInputIndex == null) {
                            smallestInputIndex = ingredientIndex;
                            smallestInputValue = inputPerHour;
                        }
                        else if (smallestInputValue == inputPerHour) {
                            duplicateInputIndexs.push(ingredientIndex);
                        }
                        else if (smallestInputValue > inputPerHour) {
                            smallestInputIndex = ingredientIndex;
                            smallestInputValue = inputPerHour;
                            duplicateInputIndexs = [];
                        }
                    }
                });
                duplicateInputIndexs.push(smallestInputIndex);
                duplicateInputIndexs.forEach(value => {
                    // Find the node with the input id specified
                    let tempNode = nextNode.inputs.find(inputNode => inputNode.getNodeResourceId() == value);
                    if (currentNode == null) {
                        currentNode = tempNode;
                    }
                    else {
                        duplicates.push(tempNode);
                    }
                });
            }
            else {
                nextNode.inputs.forEach((value, index, array) => {
                    if (currentNode === null) {
                        currentNode = value;
                    }
                    else if (currentNode.getNodeData()['perHour'] == value.getNodeData()['perHour']) {
                        duplicates.push(value);
                    }
                    else if (currentNode.getNodeData()['perHour'] > value.getNodeData()['perHour']) {
                        currentNode = value;
                        duplicates = [];
                    }
                });
            }
            if (currentNode === null) {
                return;
            }
            // Add all nodes that are on the critical path
            duplicates.push(currentNode);
            duplicates.forEach(value => {
                this.criticalPath.push(value.node);
            });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rete-socket", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const output_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](output_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("io", output_r3)("socket", output_r3.socket);
} }
function BaseNodeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
} if (rf & 2) {
    const control_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rete-control", control_r4);
} }
function BaseNodeComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](input_r5.name);
} }
function BaseNodeComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} if (rf & 2) {
    const input_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rete-control", input_r5.control);
} }
function BaseNodeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rete-socket", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BaseNodeComponent_div_9_div_2_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BaseNodeComponent_div_9_div_3_Template, 1, 1, "div", 14);
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
const _c0 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
class BaseNodeComponent extends rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["NodeComponent"] {
    constructor(service, cdr) {
        super(service, cdr);
        this.service = service;
        this.cdr = cdr;
    }
    setItem(item) {
        this.node.data.resource = item;
    }
    onCriticalPath() {
        return this.node.data.criticalPath ? "critical-path" : "";
    }
    isCustom() {
        return this.node.data.customization == null ? "" : "custom";
    }
}
BaseNodeComponent.ɵfac = function BaseNodeComponent_Factory(t) { return new (t || BaseNodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["NodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
BaseNodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseNodeComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["NodeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 12, consts: [[1, "node", 3, "ngClass"], [1, "title"], [1, "content"], [1, "outputs"], ["class", "output", 4, "ngFor", "ngForOf"], ["class", "control", 3, "rete-control", 4, "ngFor", "ngForOf"], [1, "inputs"], ["class", "input", 4, "ngFor", "ngForOf"], [1, "output"], [1, "output-title"], ["rete-socket", "", 3, "io", "socket"], [1, "control", 3, "rete-control"], [1, "input"], ["class", "input-title", 4, "ngIf"], ["class", "input-control", 3, "rete-control", 4, "ngIf"], [1, "input-title"], [1, "input-control", 3, "rete-control"]], template: function BaseNodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "kebab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BaseNodeComponent_div_6_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BaseNodeComponent_div_7_Template, 1, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BaseNodeComponent_div_9_Template, 4, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](7, _c0, ctx.onCriticalPath(), ctx.selected(), ctx.isCustom(), ctx.node.name)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.node.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.outputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inputs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["SocketComponent"], rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["ɵc"], rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["ɵd"]], styles: [".node[_ngcontent-%COMP%] {\n  background: #40E06D;\n  border: 2px solid #1C943E;\n  border-radius: 10px;\n  curson: pointer;\n  min-width: 200px;\n  height: auto;\n  padding-bottom: 6px;\n  box-sizing: content-box;\n  position: relative;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.node[_ngcontent-%COMP%]:hover {\n  background: #52e37a;\n}\n.node.selected[_ngcontent-%COMP%] {\n  background: #63FF90;\n  border-color: #40E06D;\n}\n.node.critical-path[_ngcontent-%COMP%] {\n  background: #E04141;\n  border-color: #940D0D;\n}\n.node.custom[_ngcontent-%COMP%] {\n  min-width: 400px;\n}\n.node.custom[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 33.33%);\n}\n.node.custom[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: 1;\n}\n.node.custom[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n}\n.node.custom[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .outputs[_ngcontent-%COMP%] {\n  grid-column: 3;\n  grid-row: 1;\n}\n.node[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: black;\n  font-family: sans-serif;\n  font-size: 18px;\n  padding: 8px;\n}\n.node[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.node[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.node[_ngcontent-%COMP%]   .input-title[_ngcontent-%COMP%], .node[_ngcontent-%COMP%]   .output-title[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  display: inline-block;\n  font-family: sans-serif;\n  font: 14px;\n  margin: 6px;\n  line-height: 24px;\n}\n.node[_ngcontent-%COMP%]   .input-title[hidden][_ngcontent-%COMP%], .node[_ngcontent-%COMP%]   .output-title[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n.node[_ngcontent-%COMP%]   .input-control[_ngcontent-%COMP%] {\n  z-index: 1;\n  width: calc( 100% - 36px);\n  vertical-align: middle;\n  display: inline-block;\n}\n.node[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%] {\n  padding: 6px 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL25vZGVzL2Jhc2Utbm9kZS9iYXNlLW5vZGUuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3JldGUtbW9kdWxlcy9fcmV0ZV92YXJpYWJsZXMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG1CQ0RTO0VERVQseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkNDUztFREFULFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBREo7QUFFSTtFQUNJLG1CQUFBO0FBQVI7QUFDSTtFQUNJLG1CQ2JjO0VEY2QscUJDWHFCO0FEWTdCO0FBQUk7RUFDSSxtQkNmbUI7RURnQm5CLHFCQ2IwQjtBRGVsQztBQURJO0VBQ0ksZ0JDWlk7QURlcEI7QUFGUTtFQUNJLGFBQUE7RUFDQSx3Q0FBQTtBQUlaO0FBRlk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQUloQjtBQUhZO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUFLaEI7QUFKWTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FBTWhCO0FBSkk7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQU1SO0FBTEk7RUFDSSxpQkFBQTtBQU9SO0FBTkk7RUFDSSxnQkFBQTtBQVFSO0FBUEk7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0NuQ1E7RURvQ1IsaUJDckNNO0FEOENkO0FBUlE7RUFDSSxhQUFBO0FBVVo7QUFUSTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFXUjtBQVZJO0VBQ0ksaUJBQUE7QUFZUiIsImZpbGUiOiJzcmMvYXBwL3JldGUtbW9kdWxlcy9ub2Rlcy9iYXNlLW5vZGUvYmFzZS1ub2RlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAuLi8uLi9yZXRlX3ZhcmlhYmxlc1xuXG4ubm9kZVxuICAgIGJhY2tncm91bmQ6ICRub2RlLWNvbG9yXG4gICAgYm9yZGVyOiAycHggc29saWQgJG5vZGUtYm9yZGVyLWNvbG9yXG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxuICAgIGN1cnNvbjogcG9pbnRlclxuICAgIG1pbi13aWR0aDogJG5vZGUtd2lkdGhcbiAgICBoZWlnaHQ6IGF1dG9cbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3hcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICB1c2VyLXNlbGVjdDogbm9uZVxuICAgICY6aG92ZXJcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRlbigkbm9kZS1jb2xvciwgNCUpXG4gICAgJi5zZWxlY3RlZFxuICAgICAgICBiYWNrZ3JvdW5kOiAkbm9kZS1jb2xvci1zZWxlY3RlZFxuICAgICAgICBib3JkZXItY29sb3I6ICRub2RlLWJvcmRlci1jb2xvci1zZWxlY3RlZFxuICAgICYuY3JpdGljYWwtcGF0aFxuICAgICAgICBiYWNrZ3JvdW5kOiAkbm9kZS1jb2xvci1jcml0aWNhbC1wYXRoXG4gICAgICAgIGJvcmRlci1jb2xvcjogJG5vZGUtYm9yZGVyLWNvbG9yLWNyaXRpY2FsLXBhdGhcbiAgICAmLmN1c3RvbVxuICAgICAgICBtaW4td2lkdGg6ICRjdXN0b20tbm9kZS13aWR0aFxuICAgICAgICAuY29udGVudFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzMuMzMlKVxuICAgICAgICAgICAgLy8gZ3JpZC1hdXRvLXJvd3M6IDEwMCVcbiAgICAgICAgICAgIC5jb250cm9sXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDFcbiAgICAgICAgICAgIC5pbnB1dHNcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMVxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiAxXG4gICAgICAgICAgICAub3V0cHV0c1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDFcblxuICAgIC50aXRsZVxuICAgICAgICBjb2xvcjogYmxhY2tcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWZcbiAgICAgICAgZm9udC1zaXplOiAxOHB4XG4gICAgICAgIHBhZGRpbmc6IDhweFxuICAgIC5vdXRwdXRcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHRcbiAgICAuaW5wdXRcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdFxuICAgIC5pbnB1dC10aXRsZSwub3V0cHV0LXRpdGxlXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmXG4gICAgICAgIGZvbnQ6IDE0cHhcbiAgICAgICAgbWFyZ2luOiAkc29ja2V0LW1hcmdpblxuICAgICAgICBsaW5lLWhlaWdodDogJHNvY2tldC1zaXplXG4gICAgICAgICZbaGlkZGVuXVxuICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuICAgIC5pbnB1dC1jb250cm9sXG4gICAgICAgIHotaW5kZXg6IDFcbiAgICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAjeyRzb2NrZXQtc2l6ZSArIDIqJHNvY2tldC1tYXJnaW59KVxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICAgIC5jb250cm9sXG4gICAgICAgIHBhZGRpbmc6ICRzb2NrZXQtbWFyZ2luICRzb2NrZXQtc2l6ZS8yICsgJHNvY2tldC1tYXJnaW4iLCJAdXNlIFwic2FzczptYXBcIlxuICAgIFxuJG5vZGUtY29sb3I6ICM0MEUwNkRcbiRub2RlLWNvbG9yLXNlbGVjdGVkOiAjNjNGRjkwXG4kbm9kZS1jb2xvci1jcml0aWNhbC1wYXRoOiAjRTA0MTQxXG4kbm9kZS1ib3JkZXItY29sb3I6ICMxQzk0M0VcbiRub2RlLWJvcmRlci1jb2xvci1zZWxlY3RlZDogIzQwRTA2RFxuJG5vZGUtYm9yZGVyLWNvbG9yLWNyaXRpY2FsLXBhdGg6ICM5NDBEMERcbiRub2RlLXdpZHRoOiAyMDBweFxuXG4kY3VzdG9tLW5vZGUtd2lkdGg6IDQwMHB4XG5cbiRub2RlLWJyb3dzZXItcmVzb3VyY2UtY29sb3I6ICM0MEUwNkRcbiRub2RlLWJyb3dzZXItY3JhZnRlZC1jb2xvcjogI0YyQzYxMVxuXG4kc29ja2V0LXNpemU6IDI0cHhcbiRzb2NrZXQtbWFyZ2luOiA2cHhcbiRzb2NrZXQtY29sb3I6ICNFMDk1MkJcbiRzb2NrZXQtYm9yZGVyLWNvbG9yOiAjOTQ2NTIzXG5cbiRzcHJpdGUtc2NhbGU6IDJcblxuJHNvY2tldC1pdGVtLW1hcDogKCBcIlN0b25lXCI6ICM4ODgsIFwiR3Jhc3NcIjogIzE4MSwgXCJEaXJ0XCI6ICM2ODM2MTksIFwiQ29iYmxlc3RvbmVcIjogIzQ0NCwgXCJQbGFua3NcIjogI2I5OTA1YiwgXCJMb2dzXCI6ICM3NDQwMTAsIFwiMlwiOiAjODg4LCBcIjNcIjogIzg4OCwpXG5cbkBmdW5jdGlvbiBnZXQtaXRlbS1jb2xvcigkaXRlbSkgXG4gICAgQHJldHVybiBtYXAtZ2V0KCRzb2NrZXQtaXRlbS1tYXAsICRpdGVtKVxuXG5AZnVuY3Rpb24gZ2V0LWl0ZW0tYm9yZGVyKCRpdGVtKVxuICAgICRjb2xvcjogZ2V0LWl0ZW0tY29sb3IoJGl0ZW0pXG4gICAgQGlmIGxpZ2h0bmVzcygkY29sb3IpID4gNDAlXG4gICAgICAgIEByZXR1cm4gZGFya2VuKCRjb2xvciwgMjUlKVxuICAgIEBlbHNlIFxuICAgICAgICBAcmV0dXJuIGxpZ2h0ZW4oJGNvbG9yLCAyNSUpIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseNodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './base-node.component.html',
                styleUrls: ['./base-node.component.sass'],
                providers: [rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["NodeService"]],
            }]
    }], function () { return [{ type: rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["NodeService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "n/8p":
/*!***********************************************************************!*\
  !*** ./src/app/output/output-container/output-container.component.ts ***!
  \***********************************************************************/
/*! exports provided: OutputContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputContainerComponent", function() { return OutputContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OutputContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
OutputContainerComponent.ɵfac = function OutputContainerComponent_Factory(t) { return new (t || OutputContainerComponent)(); };
OutputContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutputContainerComponent, selectors: [["app-output-container"]], decls: 3, vars: 0, consts: [[1, "output-wrapper", "module-margin"]], template: function OutputContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Output");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".output-wrapper[_ngcontent-%COMP%] {\n  height: calc(100% - 20px);\n  margin: 10px;\n  padding: 10px;\n  border: 2px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0cHV0L291dHB1dC1jb250YWluZXIvb3V0cHV0LWNvbnRhaW5lci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvb3V0cHV0L291dHB1dC1jb250YWluZXIvb3V0cHV0LWNvbnRhaW5lci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRwdXQtd3JhcHBlclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjBweClcbiAgICBtYXJnaW46IDEwcHhcbiAgICBwYWRkaW5nOiAxMHB4XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2siXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-output-container',
                templateUrl: './output-container.component.html',
                styleUrls: ['./output-container.component.sass']
            }]
    }], function () { return []; }, null); })();


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

/***/ "nu8m":
/*!*********************************************************************!*\
  !*** ./src/app/rete-modules/node-browser/node-browser.component.ts ***!
  \*********************************************************************/
/*! exports provided: NodeBrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeBrowserComponent", function() { return NodeBrowserComponent; });
/* harmony import */ var _shared_item_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/item.model */ "cxpe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/rete-modules/services/item.service */ "x7rl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/item-image-component/item-image.component */ "Hvuu");
/* harmony import */ var rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rete-angular-render-plugin */ "JLln");
/* harmony import */ var _shared_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/highlight-text.pipe */ "UYxj");









const _c0 = function (a0) { return [a0]; };
function NodeBrowserComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragstart", function NodeBrowserComponent_div_13_Template_div_dragstart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const selectedItem_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onDrag($event, selectedItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "kebab");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "item-image", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selectedItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, selectedItem_r1.craftable ? "crafted" : "resource")));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 5, selectedItem_r1.name, ctx_r0.searchString), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedItem", selectedItem_r1);
} }
class TempNode {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }
}
;
class NodeBrowserItem extends _shared_item_model__WEBPACK_IMPORTED_MODULE_0__["Item"] {
}
;
class NodeBrowserComponent {
    // @ViewChildren('browseritems') itemsList: QueryList<ItemImageComponent>;
    // private items: ItemImageComponent[];
    constructor(itemService) {
        this.itemService = itemService;
        this.filter = 0;
        this.searchString = "";
        this.nodeList = [];
        this.itemList = itemService.GetAllItems();
        this.itemList.forEach(value => {
            value.htmlName = value.name;
        });
    }
    ngOnInit() {
    }
    onDrag(event, item) {
        let nodeType = "";
        if (this.filter == 0) {
            nodeType = item.craftable ? "Crafter" : "Resource";
        }
        else if (this.filter == 1) {
            nodeType = "Resource";
        }
        else if (this.filter == 2) {
            nodeType = "Crafter";
        }
        else if (this.filter == 3) {
            nodeType = "Output";
        }
        event.dataTransfer.setData("nodeType", nodeType);
        event.dataTransfer.setData("nodeId", item.id);
        event.dataTransfer.effectAllowed = "copy";
    }
    onAllClicked() {
        this.filter = 0;
        this.filterItems();
    }
    onResourcesClicked() {
        this.filter = 1;
        this.filterItems();
    }
    onCraftableClicked() {
        this.filter = 2;
        this.filterItems();
    }
    onOutputClicked() {
        this.filter = 3;
        this.filterItems();
    }
    onSearchChange() {
        this.searchString = this.searchString.toLowerCase();
        this.filterItems();
    }
    filterItems() {
        if (this.filter == 0 || this.filter == 3) {
            this.itemList = this.itemService.GetAllItems();
        }
        if (this.filter == 1) {
            this.itemList = this.itemService.GetAllNonCraftableItems();
        }
        if (this.filter == 2) {
            this.itemList = this.itemService.GetAllCraftableItems();
        }
        this.itemList = this.itemList.filter(value => {
            let index = value.name.toLowerCase().indexOf(this.searchString);
            if (index >= 0) {
                value.htmlName = value.name.substring(0, index)
                    + "<mark>"
                    + value.name.substring(index, index + this.searchString.length)
                    + "</mark>"
                    + value.name.substring(index + this.searchString.length, value.name.length);
            }
            else {
                value.htmlName = value.name;
            }
            return index >= 0;
        });
    }
}
NodeBrowserComponent.ɵfac = function NodeBrowserComponent_Factory(t) { return new (t || NodeBrowserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"])); };
NodeBrowserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NodeBrowserComponent, selectors: [["app-node-browser"]], decls: 14, vars: 6, consts: [[1, "node-browser-wrapper", "module-margin"], [1, "node-browser-button-header"], ["type", "button", 1, "btn", 3, "ngClass", "click"], [1, "right", "fill"], ["type", "search", "placeholder", "search", 3, "ngModel", "ngModelChange", "input"], [1, "node-browser-grid"], ["class", "node-browser-node", "draggable", "true", 3, "ngClass", "dragstart", 4, "ngFor", "ngForOf"], ["draggable", "true", 1, "node-browser-node", 3, "ngClass", "dragstart"], [1, "node-title", 3, "innerHTML"], ["draggable", "true", 3, "selectedItem"]], template: function NodeBrowserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NodeBrowserComponent_Template_button_click_2_listener() { return ctx.onAllClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NodeBrowserComponent_Template_button_click_4_listener() { return ctx.onResourcesClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Resources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NodeBrowserComponent_Template_button_click_6_listener() { return ctx.onCraftableClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Craftable ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NodeBrowserComponent_Template_button_click_8_listener() { return ctx.onOutputClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Output ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NodeBrowserComponent_Template_input_ngModelChange_11_listener($event) { return ctx.searchString = $event; })("input", function NodeBrowserComponent_Template_input_input_11_listener() { return ctx.onSearchChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NodeBrowserComponent_div_13_Template, 6, 10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.filter == 0 ? "btn-primary" : "btn-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.filter == 1 ? "btn-primary" : "btn-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.filter == 2 ? "btn-primary" : "btn-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.filter == 3 ? "btn-primary" : "btn-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchString);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.itemList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_5__["ItemImageComponent"]], pipes: [rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_6__["ɵd"], _shared_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_7__["HighlightSearchPipe"]], styles: [".node-browser-wrapper[_ngcontent-%COMP%] {\n  height: calc(100% - 60% - 3*10px);\n  min-height: 150px;\n  border: 2px solid black;\n  display: flex;\n  flex-direction: column;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n  margin-left: 10px;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.node-browser-grid[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  display: inline-grid;\n  grid-template-columns: repeat(10, 10%);\n  grid-auto-rows: minmax(125px, 50%);\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.node-browser-node[_ngcontent-%COMP%] {\n  margin: 8px;\n  padding: 10px;\n  border-radius: 10px;\n  display: block;\n}\n\n.node-browser-node.resource[_ngcontent-%COMP%] {\n  background-color: #40E06D;\n}\n\n.node-browser-node.crafted[_ngcontent-%COMP%] {\n  background-color: #F2C611;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL25vZGUtYnJvd3Nlci9ub2RlLWJyb3dzZXIuY29tcG9uZW50LnNhc3MiLCJzcmMvX2dsb2JhbHMuc2FzcyIsInNyYy9hcHAvcmV0ZS1tb2R1bGVzL19yZXRlX3ZhcmlhYmxlcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksaUNDRWtCO0VERGxCLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFGSjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBR0k7RUFDSSxrQkFBQTtBQURSOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDSTtFQUNJLHlCRXhCc0I7QUZ5QjlCOztBQUNJO0VBQ0kseUJFMUJxQjtBRjJCN0IiLCJmaWxlIjoic3JjL2FwcC9yZXRlLW1vZHVsZXMvbm9kZS1icm93c2VyL25vZGUtYnJvd3Nlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2dsb2JhbHMnXG5AaW1wb3J0ICcuLi9yZXRlX3ZhcmlhYmxlcydcbiAgICBcbi5ub2RlLWJyb3dzZXItd3JhcHBlclxuICAgIGhlaWdodDogJG5vZGUtYnJvd3Nlci1oZWlnaHRcbiAgICBtaW4taGVpZ2h0OiAxNTBweFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICBcbi5ub2RlLWJyb3dzZXItYnV0dG9uLWhlYWRlclxuICAgIHdpZHRoOiAxMDAlXG4gICAgbWFyZ2luLXRvcDogMTBweFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4XG5cbiAgICAqXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweFxuXG4ubm9kZS1icm93c2VyLWdyaWRcbiAgICB3aWR0aDogMTAwJVxuICAgIGhlaWdodDogMTAwJVxuICAgIG1hcmdpbi10b3A6IDEwcHhcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWRcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCggMTAsIDEwJSlcbiAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDEyNXB4LCA1MCUpXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuXG5cbi5ub2RlLWJyb3dzZXItbm9kZVxuICAgIG1hcmdpbjogOHB4XG4gICAgcGFkZGluZzogMTBweFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcbiAgICBkaXNwbGF5OiBibG9ja1xuXG4gICAgJi5yZXNvdXJjZVxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbm9kZS1icm93c2VyLXJlc291cmNlLWNvbG9yXG5cbiAgICAmLmNyYWZ0ZWRcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5vZGUtYnJvd3Nlci1jcmFmdGVkLWNvbG9yXG5cbiIsIiRtb2R1bGUtbWFyZ2luLWxlZnQ6IDEwcHhcbiRtb2R1bGUtbWFyZ2luLXRvcDogMTBweFxuXG4kZ3JpZC13aWR0aDogNzUlXG4kZ3JpZC1oZWlnaHQ6IDYwJVxuXG4kbm9kZS1icm93c2VyLWhlaWdodDogY2FsYygxMDAlIC0gI3skZ3JpZC1oZWlnaHR9IC0gMyojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG5cbiRvdXRwdXQtd2lkdGg6IGNhbGMoMTAwJSAtICN7JGdyaWQtd2lkdGh9KVxuJG91dHB1dC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDIqI3skbW9kdWxlLW1hcmdpbi10b3B9KVxuXG4kZGVsZXRlLWJ1dHRvbi13aWR0aDogMTUwcHhcbiRkZWxldGUtYnV0dG9uLWhlaWdodDogNTBweCIsIkB1c2UgXCJzYXNzOm1hcFwiXG4gICAgXG4kbm9kZS1jb2xvcjogIzQwRTA2RFxuJG5vZGUtY29sb3Itc2VsZWN0ZWQ6ICM2M0ZGOTBcbiRub2RlLWNvbG9yLWNyaXRpY2FsLXBhdGg6ICNFMDQxNDFcbiRub2RlLWJvcmRlci1jb2xvcjogIzFDOTQzRVxuJG5vZGUtYm9yZGVyLWNvbG9yLXNlbGVjdGVkOiAjNDBFMDZEXG4kbm9kZS1ib3JkZXItY29sb3ItY3JpdGljYWwtcGF0aDogIzk0MEQwRFxuJG5vZGUtd2lkdGg6IDIwMHB4XG5cbiRjdXN0b20tbm9kZS13aWR0aDogNDAwcHhcblxuJG5vZGUtYnJvd3Nlci1yZXNvdXJjZS1jb2xvcjogIzQwRTA2RFxuJG5vZGUtYnJvd3Nlci1jcmFmdGVkLWNvbG9yOiAjRjJDNjExXG5cbiRzb2NrZXQtc2l6ZTogMjRweFxuJHNvY2tldC1tYXJnaW46IDZweFxuJHNvY2tldC1jb2xvcjogI0UwOTUyQlxuJHNvY2tldC1ib3JkZXItY29sb3I6ICM5NDY1MjNcblxuJHNwcml0ZS1zY2FsZTogMlxuXG4kc29ja2V0LWl0ZW0tbWFwOiAoIFwiU3RvbmVcIjogIzg4OCwgXCJHcmFzc1wiOiAjMTgxLCBcIkRpcnRcIjogIzY4MzYxOSwgXCJDb2JibGVzdG9uZVwiOiAjNDQ0LCBcIlBsYW5rc1wiOiAjYjk5MDViLCBcIkxvZ3NcIjogIzc0NDAxMCwgXCIyXCI6ICM4ODgsIFwiM1wiOiAjODg4LClcblxuQGZ1bmN0aW9uIGdldC1pdGVtLWNvbG9yKCRpdGVtKSBcbiAgICBAcmV0dXJuIG1hcC1nZXQoJHNvY2tldC1pdGVtLW1hcCwgJGl0ZW0pXG5cbkBmdW5jdGlvbiBnZXQtaXRlbS1ib3JkZXIoJGl0ZW0pXG4gICAgJGNvbG9yOiBnZXQtaXRlbS1jb2xvcigkaXRlbSlcbiAgICBAaWYgbGlnaHRuZXNzKCRjb2xvcikgPiA0MCVcbiAgICAgICAgQHJldHVybiBkYXJrZW4oJGNvbG9yLCAyNSUpXG4gICAgQGVsc2UgXG4gICAgICAgIEByZXR1cm4gbGlnaHRlbigkY29sb3IsIDI1JSkiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NodeBrowserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-node-browser',
                templateUrl: './node-browser.component.html',
                styleUrls: ['./node-browser.component.sass']
            }]
    }], function () { return [{ type: src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"] }]; }, null); })();


/***/ }),

/***/ "o2BI":
/*!************************************************************!*\
  !*** ./src/app/rete-modules/services/fake-node.service.ts ***!
  \************************************************************/
/*! exports provided: FakeNodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeNodeService", function() { return FakeNodeService; });
/* harmony import */ var _node_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.service */ "5bZ5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



var fakeDatabase = {
    nodes: [
        {
            id: 1,
            name: "Fake Node",
            inputs: [1, 2, 3],
            outputs: {
                5: { 1: .3, 2: .8, 3: 1.2 },
                339: { 2: .2 }
            },
        },
        {
            id: 2,
            name: "Bookshelves",
            inputs: [338, 334, 23],
            outputs: {
                92: { 338: .11, 334: .33, 23: .66 }
            },
        }
    ]
};
class FakeNodeService extends _node_service__WEBPACK_IMPORTED_MODULE_0__["NodeService"] {
    constructor() {
        super();
    }
    GetAllCustomNodes() {
        return fakeDatabase['nodes'];
    }
    GetCustomNode(id) {
        return fakeDatabase.nodes.find(value => {
            if (value.id == id) {
                return value;
            }
        });
    }
    SaveCustomNode(classroom, group, data) {
    }
}
FakeNodeService.ɵfac = function FakeNodeService_Factory(t) { return new (t || FakeNodeService)(); };
FakeNodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FakeNodeService, factory: FakeNodeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FakeNodeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "x7rl":
/*!*******************************************************!*\
  !*** ./src/app/rete-modules/services/item.service.ts ***!
  \*******************************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


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