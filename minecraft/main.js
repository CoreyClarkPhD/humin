(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/coreyclark/Sites/Git/HuMIn/GitLab/minecraft-web-app/src/main.ts */"zUnb");


/***/ }),

/***/ "14A6":
/*!********************************************************************************!*\
  !*** ./src/app/rete-modules/shared/rate-component/rate-component.component.ts ***!
  \********************************************************************************/
/*! exports provided: RateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateComponent", function() { return RateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class RateComponent {
    constructor() {
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onInputChange() {
        this.perHour = parseFloat(this.perHourString);
        this.onChange.emit(this.perHour);
    }
    setRate(rate) {
        this.perHour = rate;
        let str = this.perHour == Infinity ? "-" : this.perHour.toString();
        if (str.indexOf('.') !== -1) {
            str = str.slice(0, str.indexOf('.') + 3);
        }
        this.perHourString = str;
    }
}
RateComponent.ɵfac = function RateComponent_Factory(t) { return new (t || RateComponent)(); };
RateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RateComponent, selectors: [["rate-component"]], inputs: { readonly: "readonly", placeholder: "placeholder", text: "text" }, outputs: { onChange: "onChange" }, decls: 4, vars: 4, consts: [[1, "rate-container"], ["type", "text", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');", 3, "ngModel", "readonly", "placeholder", "ngModelChange", "change"]], template: function RateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RateComponent_Template_input_ngModelChange_1_listener($event) { return ctx.perHourString = $event; })("change", function RateComponent_Template_input_change_1_listener() { return ctx.onInputChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.perHourString)("readonly", ctx.readonly)("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".rate-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.rate-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-left: 10px;\n  white-space: nowrap;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL3NoYXJlZC9yYXRlLWNvbXBvbmVudC9yYXRlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL3JldGUtbW9kdWxlcy9zaGFyZWQvcmF0ZS1jb21wb25lbnQvcmF0ZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYXRlLWNvbnRhaW5lclxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBwXG4gICAgICAgIG1hcmdpbjogYXV0b1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwXG4gICAgICAgIGZsb2F0OiBsZWZ0XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rate-component',
                templateUrl: './rate.component.html',
                styleUrls: ['./rate.component.sass']
            }]
    }], function () { return []; }, { readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "2ir8":
/*!******************************************************!*\
  !*** ./src/app/rete-modules/shared/custom-output.ts ***!
  \******************************************************/
/*! exports provided: CustomOutput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomOutput", function() { return CustomOutput; });
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rete */ "9dUG");

class CustomOutput extends rete__WEBPACK_IMPORTED_MODULE_0__["Output"] {
    constructor(key, title, socket, multiConns) {
        super(key, title, socket, multiConns);
        this.data = {};
    }
}


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
/* harmony import */ var _shared_node_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/node-tree */ "icfx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class NodeService {
    constructor() {
        this.nodeTree = new _shared_node_tree__WEBPACK_IMPORTED_MODULE_0__["NodeTree"];
    }
    parseFromEditor(json) {
        this.nodeTree.parseFromJson(json);
    }
    getCriticalPath() {
        return this.nodeTree.getCriticalPath();
    }
    getAllOutputs() {
        return this.nodeTree.getOutputs();
    }
    getNodeTreeItem(id) {
        return this.nodeTree.getNode(id);
    }
    calculateCustomNodeFromOutputs(nodeOutputs) {
        let connectedNodes = [];
        // Create the custom node data to generate
        let customNodeData = { id: -1, name: 'NOT-INSTANTIATED', inputs: [], outputs: {} };
        //TODO: Only transverse nodes that are not connected to each other
        // For all of the valid output nodes in the graph
        nodeOutputs.forEach(outputNode => {
            // Create a stack for transversal
            if (outputNode.getInputTree() != null) {
                connectedNodes.push(outputNode.node.id);
                let connectionStack = [];
                outputNode.getInputTree().forEach(connection => {
                    connectionStack.push(connection);
                });
                // Loop through the entire connection tree
                let outputData = { inputRate: {}, createdAmount: -1 };
                while (connectionStack.length > 0) {
                    let currentConnection = connectionStack.pop();
                    connectedNodes.push(currentConnection.nodeId);
                    if (!currentConnection) {
                        continue;
                    }
                    // If this is the first time seeing a node, that is the output amount
                    if (outputData.createdAmount === -1) {
                        outputData.createdAmount = currentConnection.amount;
                    }
                    if (currentConnection.tree.length > 0) {
                        // For each value, propogate the previous rate if available and the input value amount and crafting translation cost
                        currentConnection.tree.forEach((inputValue, inputIndex) => {
                            let propogateOutput = outputData.inputRate[currentConnection.itemId];
                            outputData.inputRate[inputValue.itemId] = inputValue.amount * currentConnection.transitionCost[inputIndex] * (propogateOutput == undefined ? 1 : propogateOutput);
                            connectionStack.push(inputValue);
                        });
                        // Delete the value if it is not a resource node
                        delete outputData.inputRate[currentConnection.itemId];
                    }
                }
                // If the output has some inputs connected to it
                if (outputData.createdAmount > -1) {
                    // Get the output item index
                    let outputIndex = outputNode.node.data.resource['id'];
                    // Save the output data and all its inputs
                    customNodeData.outputs[outputIndex] = outputData;
                    for (let inputId in outputData.inputRate) {
                        if (!customNodeData.inputs.includes(parseInt(inputId))) {
                            customNodeData.inputs.push(parseInt(inputId));
                        }
                    }
                }
            }
        });
        return [connectedNodes, customNodeData];
    }
}
NodeService.ɵfac = function NodeService_Factory(t) { return new (t || NodeService)(); };
NodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NodeService, factory: NodeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NodeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "7bOH":
/*!***********************************************************!*\
  !*** ./src/app/output/graph-view/graph-view.component.ts ***!
  \***********************************************************/
/*! exports provided: GraphViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphViewComponent", function() { return GraphViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/output-manager.service */ "IIXy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _graph_item_graph_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graph-item/graph-item.component */ "c4YL");





function GraphViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-graph-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", node_r1);
} }
class GraphViewComponent {
    constructor(outputManager) {
        this.outputManager = outputManager;
        this.markedNodes = [];
        setInterval(() => {
            this.markedNodes = this.outputManager.getMarkedNodes();
        }, 500);
    }
    ngOnInit() {
    }
}
GraphViewComponent.ɵfac = function GraphViewComponent_Factory(t) { return new (t || GraphViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__["OutputManagerService"])); };
GraphViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraphViewComponent, selectors: [["app-graph-view"]], decls: 2, vars: 1, consts: [[1, "graph-container"], [4, "ngFor", "ngForOf"], [3, "node"]], template: function GraphViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GraphViewComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.markedNodes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _graph_item_graph_item_component__WEBPACK_IMPORTED_MODULE_3__["GraphItemComponent"]], styles: [".graph-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0cHV0L2dyYXBoLXZpZXcvZ3JhcGgtdmlldy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL291dHB1dC9ncmFwaC12aWV3L2dyYXBoLXZpZXcuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JhcGgtY29udGFpbmVyXG4gICAgd2lkdGg6IDEwMCVcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICBvdmVyZmxvdzogaGlkZGVuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-graph-view',
                templateUrl: './graph-view.component.html',
                styleUrls: ['./graph-view.component.sass']
            }]
    }], function () { return [{ type: _services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__["OutputManagerService"] }]; }, null); })();


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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_fake_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/fake-node.service */ "o2BI");
/* harmony import */ var _shared_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/highlight-text.pipe */ "UYxj");
/* harmony import */ var _shared_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/item-image-component/item-image.component */ "Hvuu");
/* harmony import */ var _services_fake_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/fake-item.service */ "BoCh");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/item.service */ "x7rl");
/* harmony import */ var _nodes_controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nodes/controls/resource-control/resource-control */ "AnjU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./grid/grid.component */ "OP9P");
/* harmony import */ var rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rete-angular-render-plugin */ "JLln");
/* harmony import */ var _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nodes/base-node/base-node.component */ "jDfs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node-browser/node-browser.component */ "nu8m");
/* harmony import */ var _services_node_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/node.service */ "5bZ5");
/* harmony import */ var _shared_rate_component_rate_component_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/rate-component/rate-component.component */ "14A6");

















class CustomReteModule {
}
CustomReteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CustomReteModule });
CustomReteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function CustomReteModule_Factory(t) { return new (t || CustomReteModule)(); }, providers: [{ provide: _services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"], useClass: _services_fake_item_service__WEBPACK_IMPORTED_MODULE_4__["FakeItemService"] }, { provide: _services_node_service__WEBPACK_IMPORTED_MODULE_14__["NodeService"], useClass: _services_fake_node_service__WEBPACK_IMPORTED_MODULE_1__["FakeNodeService"] }], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_10__["ReteModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CustomReteModule, { declarations: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"],
        _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_11__["BaseNodeComponent"],
        _nodes_controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_6__["ResourceComponent"],
        _shared_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_3__["ItemImageComponent"],
        _node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_13__["NodeBrowserComponent"],
        _shared_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_2__["HighlightSearchPipe"],
        _shared_rate_component_rate_component_component__WEBPACK_IMPORTED_MODULE_15__["RateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_10__["ReteModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModule"]], exports: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"], _node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_13__["NodeBrowserComponent"], _shared_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_2__["HighlightSearchPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CustomReteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
        args: [{
                declarations: [
                    _grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"],
                    _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_11__["BaseNodeComponent"],
                    _nodes_controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_6__["ResourceComponent"],
                    _shared_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_3__["ItemImageComponent"],
                    _node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_13__["NodeBrowserComponent"],
                    _shared_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_2__["HighlightSearchPipe"],
                    _shared_rate_component_rate_component_component__WEBPACK_IMPORTED_MODULE_15__["RateComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_10__["ReteModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModule"],
                ],
                providers: [{ provide: _services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"], useClass: _services_fake_item_service__WEBPACK_IMPORTED_MODULE_4__["FakeItemService"] }, { provide: _services_node_service__WEBPACK_IMPORTED_MODULE_14__["NodeService"], useClass: _services_fake_node_service__WEBPACK_IMPORTED_MODULE_1__["FakeNodeService"] }],
                exports: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"], _node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_13__["NodeBrowserComponent"], _shared_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_2__["HighlightSearchPipe"]],
                entryComponents: [_nodes_controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_6__["ResourceComponent"],
                    _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_11__["BaseNodeComponent"]
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
/* harmony import */ var _shared_rate_component_rate_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/rate-component/rate-component.component */ "14A6");
/* harmony import */ var _shared_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/item.model */ "cxpe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rete */ "9dUG");
/* harmony import */ var _shared_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/item-image-component/item-image.component */ "Hvuu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ResourceComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "rate-component", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function ResourceComponent_div_2_Template_rate_component_onChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.onRateChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", ctx_r0.readonly)("placeholder", "Per-Hour Rate")("text", "/ hour");
} }
class ResourceComponent {
    ngOnInit() {
        this.mounted();
    }
    onRateChange(value) {
        this.changeRate(value);
    }
    setRate(value) {
        this.rateComponent.setRate(value);
    }
}
ResourceComponent.ɵfac = function ResourceComponent_Factory(t) { return new (t || ResourceComponent)(); };
ResourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResourceComponent, selectors: [["ng-component"]], viewQuery: function ResourceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_shared_rate_component_rate_component_component__WEBPACK_IMPORTED_MODULE_0__["RateComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.rateComponent = _t.first);
    } }, decls: 3, vars: 2, consts: [[1, "resource-control"], [1, "center", 3, "selectedItem"], [4, "ngIf"], [3, "readonly", "placeholder", "text", "onChange"]], template: function ResourceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "item-image", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ResourceComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedItem", ctx.selectedItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.disableRate);
    } }, directives: [_shared_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_4__["ItemImageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_rate_component_rate_component_component__WEBPACK_IMPORTED_MODULE_0__["RateComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JldGUtbW9kdWxlcy9ub2Rlcy9jb250cm9scy9yZXNvdXJjZS1jb250cm9sL3Jlc291cmNlLWNvbnRyb2wuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ResourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                templateUrl: "./resource-control.html",
                styleUrls: ["./resource-control.sass",]
            }]
    }], null, { rateComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_shared_rate_component_rate_component_component__WEBPACK_IMPORTED_MODULE_0__["RateComponent"]]
        }] }); })();
class ResourceControl extends rete__WEBPACK_IMPORTED_MODULE_3__["Control"] {
    constructor(emitter, key, disableRate = false) {
        super(key);
        this.emitter = emitter;
        this.key = key;
        this.disableRate = disableRate;
        this.component = ResourceComponent;
        this.props = {
            selectedItem: _shared_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"],
            readonly: false,
            disableRate: this.disableRate,
            changeRate: v => this.onChangeRate(v),
            mounted: () => {
                this.setInitialItem();
            },
            rateComponent: _shared_rate_component_rate_component_component__WEBPACK_IMPORTED_MODULE_0__["RateComponent"],
        };
    }
    onChangeRate(rate) {
        this.putData('perHour', rate);
        this.emitter.trigger('process');
    }
    setRate(rate) {
        this.props.rateComponent.setRate(rate);
    }
    setInitialItem() {
        let item = this.getData('resource');
        this.props.selectedItem = item;
        this.putData(this.key, item);
        this.putData('amount', item.craftable ? item.recipe.createdAmount : 1);
        this.putData('perHour', this.props.perHour);
        this.getNode().meta['changed'] = true;
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
        node.meta.type = 'resource';
        node.data.name = 'Resource';
        return node;
    }
    worker(node, inputs, outputs) {
        // Update the nodes structure
        var node_ref = this.editor.nodes.find(n => n.id === node.id);
        if (node_ref.meta.changed === true) {
            this.updateNodeStructure(node_ref);
            node_ref.meta.changed = false;
        }
        let datagram = new _shared_connection_model__WEBPACK_IMPORTED_MODULE_0__["Connection"](node.id, node.data.resource.id, node.data.amount, node.data.perHour);
        outputs['resource'] = datagram;
    }
    updateNodeStructure(node) {
        node.getConnections().forEach(element => {
            this.editor.removeConnection(element);
        });
        node.outputs.clear();
        var item = node.data.resource;
        var output = new rete__WEBPACK_IMPORTED_MODULE_1__["Output"]("resource", item.name, this.socketController.GetSocketForId(item.id));
        node.addOutput(output);
        this.editor.trigger('nodeselected');
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
    }
    builder(node) {
        var control = new _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_2__["ResourceControl"](this.editor, 'resource');
        control.props.readonly = true;
        node.addControl(control);
        node.meta.type = 'crafter';
        node.data.name = 'Crafter';
        return node;
    }
    worker(node, inputs, outputs) {
        var node_ref = this.editor.nodes.find(n => n.id === node.id);
        // Update the node structure
        if (node_ref.meta.changed === true) {
            this.updateNodeStructure(node_ref);
            node_ref.meta.changed = false;
        }
        let perHourBottleneck = Infinity;
        let craftedItem = node.data.resource;
        let recipe = craftedItem.recipe;
        // Perpare datagram for calculations
        node.data.inputTree = [];
        let datagram = new _shared_connection_model__WEBPACK_IMPORTED_MODULE_0__["Connection"](node.id, craftedItem.id, recipe.createdAmount, perHourBottleneck);
        recipe.ingredients.forEach(ingredient => {
            let input = inputs[ingredient.id];
            if (input && input[0]) {
                let inputData = input[0];
                let itemBottleneck = inputData.amount / ingredient.amount;
                itemBottleneck *= inputData.perHour;
                if (itemBottleneck < perHourBottleneck) {
                    perHourBottleneck = itemBottleneck;
                }
                // Add the input to the tree
                datagram.transitionCost.push(1 / ingredient.amount);
                datagram.tree.push(inputData);
                node.data.inputTree.push(inputData);
            }
        });
        // Find the outputs per hour bottleneck
        datagram.perHour = perHourBottleneck;
        node.data['perHour'] = perHourBottleneck;
        // Update the control with the rate
        let control = node_ref.controls.get('resource');
        control.setRate(perHourBottleneck);
        // var datagram = new Connection(node.data.resource, node.data.amount, node.data.perHour, node.data.criticalPath);
        outputs['resource'] = datagram;
    }
    updateNodeStructure(node) {
        node.getConnections().forEach(element => {
            this.editor.removeConnection(element);
        });
        node.outputs.clear();
        var item = node.data.resource;
        var output = new rete__WEBPACK_IMPORTED_MODULE_1__["Output"]("resource", item.name + " x " + item.recipe.createdAmount, this.socketController.GetSocketForId(item.id));
        node.addOutput(output);
        node.inputs.clear();
        item.recipe.ingredients.forEach(ingredient => {
            var item = this.itemService.GetItemFromId(ingredient.id);
            var input = new rete__WEBPACK_IMPORTED_MODULE_1__["Input"]("" + item.id, item.name + " x " + ingredient.amount, this.socketController.GetSocketForId(item.id));
            node.addInput(input);
        });
        this.editor.trigger('nodeselected');
    }
}


/***/ }),

/***/ "E5D1":
/*!*************************************************************!*\
  !*** ./src/app/output/output-item/output-item.component.ts ***!
  \*************************************************************/
/*! exports provided: OutputItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputItemComponent", function() { return OutputItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/output-manager.service */ "IIXy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function OutputItemComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r3.resource.name, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", data_r3["perHour"]);
} }
function OutputItemComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r4.resource.name, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", data_r4["perHour"]);
} }
function OutputItemComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OutputItemComponent_div_12_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggleDropdown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class OutputItemComponent {
    constructor(outputManagerService) {
        this.outputManagerService = outputManagerService;
        this.dropdownPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.outputManagerService.bindOnNodeUpdate(this.node.id, val => {
            this.node = val;
        });
        this.childNodes = this.getChildren();
    }
    getName() {
        return this.node.data['name'];
    }
    getId() {
        return this.node.id;
    }
    showDropdown() {
        let shouldShow = false;
        if (this.node.data['inputTree']) {
            if (this.node.data['inputTree'].length > 0) {
                shouldShow = true;
            }
        }
        return shouldShow;
    }
    toggleDropdown() {
        this.dropdownPressed.emit(this.node);
    }
    getType() {
        return this.node.meta['type'];
    }
    getChildren() {
        let children = [];
        let tree = this.node.data['inputTree'];
        if (tree) {
            tree.forEach(connection => {
                children.push(this.outputManagerService.getNodeById(connection.nodeId));
            });
        }
        return children;
    }
    getChildrenData() {
        let data = [];
        this.getChildren().forEach(value => {
            data.push(value.data);
        });
        return data;
    }
    getInputData() {
        let data = [];
        if (this.node.meta['type'] != "output") {
            data = this.getChildrenData();
        }
        return data;
    }
    getOutputData() {
        let data = [];
        // if (this.node.meta['type'] != "resource") {
        data.push(this.node.data);
        // }
        return data;
    }
}
OutputItemComponent.ɵfac = function OutputItemComponent_Factory(t) { return new (t || OutputItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__["OutputManagerService"])); };
OutputItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutputItemComponent, selectors: [["app-output-item"]], inputs: { node: "node" }, outputs: { dropdownPressed: "dropdownPressed" }, decls: 13, vars: 7, consts: [[1, "output-container", 3, "ngClass"], [1, "title-container", 3, "ngClass"], [1, "id-container"], [1, "title"], [1, "data-container"], [1, "data-input-container"], ["class", "node-rates", 4, "ngFor", "ngForOf"], [1, "data-output-container"], ["class", "dropdown-container", 3, "click", 4, "ngIf"], [1, "node-rates"], ["type", "text", "readonly", "true", 3, "ngModel"], [1, "dropdown-container", 3, "click"], [1, "dropdown-icon"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-compact-down"], ["fill-rule", "evenodd", "d", "M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"]], template: function OutputItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OutputItemComponent_div_9_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OutputItemComponent_div_11_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OutputItemComponent_div_12_Template, 5, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getType());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getType());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getId());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getName(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getInputData());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getOutputData());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDropdown());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.output-container[_ngcontent-%COMP%] {\n  max-width: 440px;\n  min-height: 40px;\n  border-color: #707070;\n  border-radius: 10px;\n  border-width: 2px;\n  border-style: solid;\n  margin-bottom: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  max-width: calc( 440px / 2);\n  height: 30px;\n  margin: -2px;\n  display: flex;\n  border-radius: 10px 0px 10px 0px;\n  border-color: #707070;\n  border-width: 2px;\n  border-style: solid;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container.resource[_ngcontent-%COMP%] {\n  background-color: #66F23F;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container.crafter[_ngcontent-%COMP%] {\n  background-color: #DBB62E;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container.output[_ngcontent-%COMP%] {\n  background-color: #2ED0DB;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container.custom[_ngcontent-%COMP%] {\n  background-color: #C4B5F6;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: -4px;\n  font-size: 20px;\n  -webkit-text-emphasis: bold;\n          text-emphasis: bold;\n  text-align: center;\n}\n\n.output-container[_ngcontent-%COMP%]   .id-container[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  margin: -2px;\n  border-radius: 10px 0px 5px 0px;\n  background-color: #EEEEEE;\n  border-color: #707070;\n  border-width: 2px;\n  border-style: solid;\n}\n\n.output-container[_ngcontent-%COMP%]   .id-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: auto;\n  text-align: center;\n  font-size: 11px;\n}\n\n.output-container[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%] {\n  min-height: 50px;\n  display: flexbox;\n}\n\n.output-container[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]   .data-input-container[_ngcontent-%COMP%] {\n  width: 50%;\n  float: left;\n}\n\n.output-container[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]   .data-output-container[_ngcontent-%COMP%] {\n  width: 50%;\n  float: right;\n}\n\n.output-container[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50%;\n  background-color: #CCCCCC;\n  border: 2px solid #707070;\n  border-radius: 5px;\n  text-align: center;\n}\n\n.output-container[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]   .node-rates[_ngcontent-%COMP%] {\n  width: 75%;\n  margin: 5px auto;\n}\n\n.output-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%] {\n  width: auto;\n  height: 10px;\n  margin: -2px;\n  border-radius: 0px 0px 10px 10px;\n  background-color: #707070;\n  border-color: #2A2A2A;\n  border-width: 2px;\n  border-style: solid;\n}\n\n.output-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 6px;\n  margin: auto;\n  background-color: #8E8E8E;\n}\n\n.output-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-top: -60%;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0cHV0L291dHB1dC1pdGVtL291dHB1dC1pdGVtLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksNERBQUE7QUFaSjs7QUFjQTtFQUNJLGdCQWpCcUI7RUFrQnJCLGdCQWpCMEI7RUFtQjFCLHFCQWhCa0I7RUFpQmxCLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWJKOztBQWdCSTtFQUNJLDJCQTdCYTtFQThCYixZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQWRSOztBQWdCUTtFQUNJLHlCQWpDZTtBQW1CM0I7O0FBZ0JRO0VBQ0kseUJBbkNlO0FBcUIzQjs7QUFnQlE7RUFDSSx5QkFyQ2E7QUF1QnpCOztBQWdCUTtFQUNJLHlCQXZDYTtBQXlCekI7O0FBZ0JRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQWRaOztBQWdCSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFkUjs7QUFnQlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFkWjs7QUFnQkk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBZFI7O0FBZ0JRO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFkWjs7QUFnQlE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQWRaOztBQWdCUTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWRaOztBQWdCUTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQWRaOztBQWdCSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFkUjs7QUFnQlE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQWRaOztBQWVZO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFiaEIiLCJmaWxlIjoic3JjL2FwcC9vdXRwdXQvb3V0cHV0LWl0ZW0vb3V0cHV0LWl0ZW0uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkb3V0cHV0LWNvbnRhaW5lci13aWR0aDogNDQwcHhcbiRvdXRwdXQtY29udGFpbmVyLW1pbi1oZWlnaHQ6IDQwcHhcbiRvdXRwdXQtdGl0bGUtd2lkdGg6IGNhbGMoICN7JG91dHB1dC1jb250YWluZXItd2lkdGh9IC8gMilcblxuJG91dHB1dC1ib3JkZXItY29sb3I6ICM3MDcwNzBcbiRvdXRwdXQtYm9yZGVyLXJhZGl1czogMTBweFxuJG91dHB1dC1ib3JkZXItd2lkdGg6IDJweFxuXG4kcmVzb3VyY2UtY29sb3ItaGlnaGxpZ2h0OiAjNjZGMjNGXG4kY3JhZnRpbmctY29sb3ItaGlnaGxpZ2h0OiAjREJCNjJFXG4kb3V0cHV0LWNvbG9yLWhpZ2hsaWdodDogIzJFRDBEQlxuJGN1c3RvbS1jb2xvci1oaWdobGlnaHQ6ICNDNEI1RjZcbiAgICBcbipcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWZcbiAgICBcbi5vdXRwdXQtY29udGFpbmVyXG4gICAgbWF4LXdpZHRoOiAkb3V0cHV0LWNvbnRhaW5lci13aWR0aFxuICAgIG1pbi1oZWlnaHQ6ICRvdXRwdXQtY29udGFpbmVyLW1pbi1oZWlnaHRcblxuICAgIGJvcmRlci1jb2xvcjogJG91dHB1dC1ib3JkZXItY29sb3JcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4XG4gICAgYm9yZGVyLXdpZHRoOiAycHhcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkXG5cbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHhcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcblxuXG4gICAgLnRpdGxlLWNvbnRhaW5lclxuICAgICAgICBtYXgtd2lkdGg6ICRvdXRwdXQtdGl0bGUtd2lkdGhcbiAgICAgICAgaGVpZ2h0OiAzMHB4XG4gICAgICAgIG1hcmdpbjogLSRvdXRwdXQtYm9yZGVyLXdpZHRoXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMTBweCAwcHhcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNzA3MDcwXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWRcblxuICAgICAgICAmLnJlc291cmNlXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVzb3VyY2UtY29sb3ItaGlnaGxpZ2h0XG5cbiAgICAgICAgJi5jcmFmdGVyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3JhZnRpbmctY29sb3ItaGlnaGxpZ2h0XG5cbiAgICAgICAgJi5vdXRwdXRcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvdXRwdXQtY29sb3ItaGlnaGxpZ2h0XG5cbiAgICAgICAgJi5jdXN0b21cbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjdXN0b20tY29sb3ItaGlnaGxpZ2h0XG5cbiAgICAgICAgLnRpdGxlXG4gICAgICAgICAgICBtYXJnaW46IGF1dG9cbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC00cHhcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweFxuICAgICAgICAgICAgdGV4dC1lbXBoYXNpczogYm9sZFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG5cbiAgICAuaWQtY29udGFpbmVyXG4gICAgICAgIHdpZHRoOiAyNXB4XG4gICAgICAgIGhlaWdodDogMjVweFxuICAgICAgICBtYXJnaW46IC0kb3V0cHV0LWJvcmRlci13aWR0aFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCA1cHggMHB4XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUVcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNzA3MDcwXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWRcblxuICAgICAgICBwXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICAgICAgICBwYWRkaW5nOiBhdXRvXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweFxuXG4gICAgLmRhdGEtY29udGFpbmVyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHhcbiAgICAgICAgZGlzcGxheTogZmxleGJveFxuXG4gICAgICAgIC5kYXRhLWlucHV0LWNvbnRhaW5lclxuICAgICAgICAgICAgd2lkdGg6IDUwJVxuICAgICAgICAgICAgZmxvYXQ6IGxlZnRcblxuICAgICAgICAuZGF0YS1vdXRwdXQtY29udGFpbmVyXG4gICAgICAgICAgICB3aWR0aDogNTAlXG4gICAgICAgICAgICBmbG9hdDogcmlnaHRcblxuICAgICAgICBpbnB1dFxuICAgICAgICAgICAgd2lkdGg6IDUwJVxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQ1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzcwNzA3MFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcblxuICAgICAgICAubm9kZS1yYXRlc1xuICAgICAgICAgICAgd2lkdGg6IDc1JVxuICAgICAgICAgICAgbWFyZ2luOiA1cHggYXV0b1xuXG4gICAgLmRyb3Bkb3duLWNvbnRhaW5lclxuICAgICAgICB3aWR0aDogYXV0b1xuICAgICAgICBoZWlnaHQ6IDEwcHhcbiAgICAgICAgbWFyZ2luOiAtJG91dHB1dC1ib3JkZXItd2lkdGhcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHhcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MFxuICAgICAgICBib3JkZXItY29sb3I6ICMyQTJBMkFcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHhcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZFxuXG4gICAgICAgIC5kcm9wZG93bi1pY29uXG4gICAgICAgICAgICB3aWR0aDogMjBweFxuICAgICAgICAgICAgaGVpZ2h0OiA2cHhcbiAgICAgICAgICAgIG1hcmdpbjogYXV0b1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhFOEU4RVxuICAgICAgICAgICAgc3ZnXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTYwJVxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-output-item',
                templateUrl: './output-item.component.html',
                styleUrls: ['./output-item.component.sass']
            }]
    }], function () { return [{ type: _services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__["OutputManagerService"] }]; }, { node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dropdownPressed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
ItemImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemImageComponent, selectors: [["item-image"]], inputs: { selectedItem: "selectedItem" }, decls: 2, vars: 1, consts: [[1, "center", "pixelated"], ["src", "assets/images/transparent_32x32.png", 1, "item", 3, "ngStyle"]], template: function ItemImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.background);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".item[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 16px;\n  display: block;\n  background-image: url('inventory_sprites.png');\n  background-size: 1024px 2240px;\n  user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-drag: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  pointer-events: none;\n}\n\n.pixelated[_ngcontent-%COMP%] {\n  image-rendering: pixelated;\n}\n\n.center[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL3NoYXJlZC9pdGVtLWltYWdlLWNvbXBvbmVudC9pdGVtLWltYWdlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsOENBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFHQTtFQUNJLDBCQUFBO0FBQUo7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcmV0ZS1tb2R1bGVzL3NoYXJlZC9pdGVtLWltYWdlLWNvbXBvbmVudC9pdGVtLWltYWdlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vcmV0ZV92YXJpYWJsZXMnXG5cbi5pdGVtXG4gICAgd2lkdGg6ICRzcHJpdGUtc2NhbGUqMzJweFxuICAgIGhlaWdodDogJHNwcml0ZS1zY2FsZSozMnB4XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG9cbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4XG4gICAgZGlzcGxheTogYmxvY2tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaW52ZW50b3J5X3Nwcml0ZXMucG5nJylcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICRzcHJpdGUtc2NhbGUqNTEycHggJHNwcml0ZS1zY2FsZSoxMTIwcHhcbiAgICB1c2VyLWRyYWc6IG5vbmVcbiAgICB1c2VyLXNlbGVjdDogbm9uZVxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmVcbiAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZVxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmVcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmVcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZVxuXG4ucGl4ZWxhdGVkXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWRcblxuLmNlbnRlclxuICAgIG1hcmdpbjogYXV0b1xuICAgIHBhZGRpbmc6IDJweCJdfQ== */"] });
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

/***/ "IIXy":
/*!***********************************************************!*\
  !*** ./src/app/output/services/output-manager.service.ts ***!
  \***********************************************************/
/*! exports provided: OutputManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputManagerService", function() { return OutputManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OutputManagerService {
    constructor() {
        this.markedNodes = [];
        this.onNodeUpdate = {};
    }
    bindOnNodeUpdate(nodeId, func) {
        if (this.onNodeUpdate[nodeId]) {
            this.onNodeUpdate[nodeId].push(func);
        }
        else {
            this.onNodeUpdate[nodeId] = [func];
        }
    }
    setEditor(editor) {
        this.editor = editor;
    }
    update(nodes) {
        nodes.forEach(node => {
            if (this.onNodeUpdate[node.id]) {
                this.onNodeUpdate[node.id].forEach(callback => {
                    callback(node);
                });
            }
        });
    }
    getNodeById(nodeId) {
        return this.editor.nodes.find(value => value.id == nodeId);
    }
    getMarkedNodes() {
        return this.markedNodes;
    }
    getNumberMarkedNodes() {
        return Object.keys(this.markedNodes).length;
    }
    markNode(nodeId) {
        let node = this.getNodeById(nodeId);
        this.markedNodes.push(node);
    }
    unmarkNode(nodeId) {
        let tempNodes = [];
        this.markedNodes.forEach(value => {
            if (value.id != nodeId) {
                tempNodes.push(value);
            }
        });
        this.markedNodes = tempNodes;
    }
}
OutputManagerService.ɵfac = function OutputManagerService_Factory(t) { return new (t || OutputManagerService)(); };
OutputManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OutputManagerService, factory: OutputManagerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputManagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _nodes_output_node_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../nodes/output-node.component */ "c5kL");
/* harmony import */ var _nodes_crafter_node_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../nodes/crafter-node.component */ "DfuO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rete */ "9dUG");
/* harmony import */ var rete_connection_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rete-connection-plugin */ "G+JA");
/* harmony import */ var _nodes_resource_node_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../nodes/resource-node.component */ "B5f4");
/* harmony import */ var rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rete-angular-render-plugin */ "JLln");
/* harmony import */ var rete_context_menu_plugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rete-context-menu-plugin */ "G2QI");
/* harmony import */ var _nodes_sockets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../nodes/sockets */ "nj5+");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../services/item.service */ "x7rl");
/* harmony import */ var _services_node_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/node.service */ "5bZ5");
/* harmony import */ var _output_services_output_manager_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../output/services/output-manager.service */ "IIXy");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");


















const _c0 = ["nodeEditor"];
function GridComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "TOOLBAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["btn-outline-danger", "disabled"]; };
class GridComponent {
    constructor(socketController, itemService, nodeService, outputManager) {
        this.socketController = socketController;
        this.itemService = itemService;
        this.nodeService = nodeService;
        this.outputManager = outputManager;
        this.isSideBarCollapse = true;
        this.editor = null;
        this.completePath = false;
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const container = this.el.nativeElement;
            this.components = {};
            this.components['Resource'] = new _nodes_resource_node_component__WEBPACK_IMPORTED_MODULE_8__["ResourceNode"](this.socketController);
            this.components['Crafter'] = new _nodes_crafter_node_component__WEBPACK_IMPORTED_MODULE_4__["CrafterNode"](this.socketController, this.itemService);
            this.components['Output'] = new _nodes_output_node_component__WEBPACK_IMPORTED_MODULE_3__["OutputNode"](this.socketController);
            this.components['Custom'] = new _nodes_custom_node_component__WEBPACK_IMPORTED_MODULE_1__["CustomNode"](this.socketController, this.itemService, this.nodeService);
            this.editor = new rete__WEBPACK_IMPORTED_MODULE_6__["NodeEditor"]('minecraft-web-app@0.1.0', container);
            this.editor.use(rete_connection_plugin__WEBPACK_IMPORTED_MODULE_7__["default"]);
            this.editor.use(rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_9__["AngularRenderPlugin"], { component: _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_2__["BaseNodeComponent"] });
            this.editor.use(rete_context_menu_plugin__WEBPACK_IMPORTED_MODULE_10__["default"], {
                searchBar: false,
                delay: 100,
                nodeItems: (node) => {
                    if (node.meta.hasOutputFocus) {
                        return {
                            'Unfocus': () => {
                                this.outputManager.unmarkNode(node.id);
                                node.meta.hasOutputFocus = false;
                            },
                        };
                    }
                    return {
                        'Focus': () => {
                            this.outputManager.markNode(node.id);
                            node.meta.hasOutputFocus = true;
                        },
                    };
                }
            });
            this.outputManager.setEditor(this.editor);
            this.engine = new rete__WEBPACK_IMPORTED_MODULE_6__["Engine"]('minecraft-web-app@0.1.0');
            for (const componentKey in this.components) {
                let component = this.components[componentKey];
                this.editor.register(component);
                this.engine.register(component);
            }
            this.createNode("Resource", 23, 50, 125);
            this.createNode("Crafter", 5, 450, 125);
            this.createNode("Output", 5, 850, 125);
            this.editor.on(['nodecreated'], (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.engine.abort();
                yield this.engine.process(this.editor.toJSON());
            })));
            this.editor.on(['process', 'connectioncreated', 'connectionremoved'], () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.editor.selected.clear();
                this.editor.nodes.map(n => n.update());
                yield this.engine.abort();
                yield this.engine.process(this.editor.toJSON());
                this.nodeService.parseFromEditor(this.editor.toJSON());
                this.updateCriticalPath();
                this.outputManager.update(this.editor.nodes);
            }));
            this.editor.on('noderemoved', (node) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.editor.selected.clear();
                this.editor.nodes.map(n => n.update());
                yield this.engine.abort();
                yield this.engine.process(this.editor.toJSON());
                this.nodeService.parseFromEditor(this.editor.toJSON());
                this.updateCriticalPath();
                this.outputManager.unmarkNode(node.id);
                this.outputManager.update(this.editor.nodes);
            }));
            this.editor.on('click', () => {
                this.editor.selected.clear();
                this.editor.nodes.map(n => n.update());
            });
            this.engine.on('error', (message) => {
                console.log(message);
            });
            // Removes the context menu on the grid
            // this.editor.events['showcontextmenu'].push(({ e, node }) => {
            //   return Boolean(node);
            // });
            this.editor.view.resize();
            this.editor.trigger('process');
        });
    }
    updateCriticalPath() {
        let criticalPath = this.nodeService.getCriticalPath();
        this.completePath = true;
        this.editor.nodes.forEach(value => {
            value.meta.criticalPath = false;
        });
        criticalPath.forEach(value => {
            let node_ref = this.editor.nodes.find(n => n.id === value);
            node_ref.meta.criticalPath = true;
            this.completePath = true;
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
        let nodeOutputs = this.nodeService.getAllOutputs();
        let result = this.nodeService.calculateCustomNodeFromOutputs(nodeOutputs);
        let connectedNodes = result[0];
        let customNodeData = result[1];
        let name = "Custom Node";
        customNodeData.name = name;
        let customNode = this.nodeService.SaveCustomNode(0, 0, customNodeData);
        // Removes the nodes and replaces it with a custom version of the node
        let location = [0, 0];
        let removedNodes = 0;
        connectedNodes.forEach(nodeToRemove => {
            let node = this.editor.nodes.find(node => nodeToRemove === node.id);
            location[0] += node.position[0];
            location[1] += node.position[1];
            removedNodes++;
            this.editor.removeNode(node);
        });
        location[0] /= removedNodes;
        location[1] /= removedNodes;
        this.createNode("Custom", customNode, location[0], location[1], false);
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
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nodes_sockets__WEBPACK_IMPORTED_MODULE_11__["SocketController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_12__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_node_service__WEBPACK_IMPORTED_MODULE_13__["NodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_output_services_output_manager_service__WEBPACK_IMPORTED_MODULE_14__["OutputManagerService"])); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], viewQuery: function GridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, decls: 19, vars: 5, consts: [[1, "grid-wrapper", "module-margin", 3, "dragover", "drop"], ["id", "grid-toolbar-container", 3, "mouseenter", "mouseleave"], [1, "grid-toolbar"], [1, "popout-window", "collapse", 3, "ngbCollapse"], ["id", "scale-container", 3, "mouseup"], [1, "btn", "btn-info"], ["id", "collapse-container"], [1, "btn", "btn-info", 3, "ngClass", "mouseup"], ["class", "toolbar-label", 4, "ngIf"], [1, "node-editor"], ["nodeEditor", ""], ["id", "delete-container", 3, "mouseup"], [1, "btn", 3, "ngClass"], [1, "toolbar-label"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dragover", function GridComponent_Template_div_dragover_0_listener($event) { return ctx.dragOver($event); })("drop", function GridComponent_Template_div_drop_0_listener($event) { return ctx.onDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function GridComponent_Template_div_mouseenter_1_listener() { return ctx.isSideBarCollapse = false; })("mouseleave", function GridComponent_Template_div_mouseleave_1_listener() { return ctx.isSideBarCollapse = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseup", function GridComponent_Template_div_mouseup_4_listener() { return ctx.scaleToFit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Scale To Fit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseup", function GridComponent_Template_label_mouseup_9_listener() { return ctx.collapseToNode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Collapse To Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, GridComponent_div_12_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseup", function GridComponent_Template_div_mouseup_15_listener() { return ctx.deleteNode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbCollapse", ctx.isSideBarCollapse);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.canCollapse());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isSideBarCollapse);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.anyNodeSelected() ? "btn-danger" : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbCollapse"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"]], styles: [".grid-wrapper[_ngcontent-%COMP%] {\n  height: 60%;\n  border: 2px solid black;\n  position: relative;\n}\n\n#delete-container[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n#delete-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 150px;\n  height: 50px;\n  margin-bottom: 0px;\n}\n\n#delete-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: auto;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n#grid-toolbar-container[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n  position: fixed;\n  height: calc(60% - 14px);\n  width: 35px;\n  z-index: 1;\n  background-color: #5555;\n  border-radius: 0px 10px 10px 0px;\n}\n\n#grid-toolbar-container[_ngcontent-%COMP%]:hover {\n  background-color: #555b;\n  width: auto;\n}\n\n#grid-toolbar-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 2px;\n}\n\n.grid-toolbar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.toolbar-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 5px;\n  transform: rotate(90deg) translatex(50%);\n  transform-origin: 100% 0;\n  z-index: 2;\n  font-size: 14px;\n  background-color: #ddd;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 150px;\n  height: 50px;\n  margin-bottom: 0px;\n}\n\nlabel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: auto;\n  display: inline-block;\n  vertical-align: middle;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  margin-bottom: 0px;\n}\n\nlabel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: auto;\n  display: inline-block;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL2dyaWQvZ3JpZC5jb21wb25lbnQuc2FzcyIsInNyYy9fZ2xvYmFscy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFHSTtFQUNJLHFCQUFBO0VBQ0EsWUNKYztFREtkLFlDSmU7RURLZixrQkFBQTtBQURSOztBQUdRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBRFo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FBQUo7O0FBRUk7RUFDSSx1QkFBQTtFQUNBLFdBQUE7QUFBUjs7QUFDSTtFQUNJLFdBQUE7QUFDUjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUdKOztBQURBO0VBQ0kscUJBQUE7RUFDQSxZQzlDa0I7RUQrQ2xCLFlDOUNtQjtFRCtDbkIsa0JBQUE7QUFJSjs7QUFGSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUlSOztBQUZBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFISTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUtSIiwiZmlsZSI6InNyYy9hcHAvcmV0ZS1tb2R1bGVzL2dyaWQvZ3JpZC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2dsb2JhbHMnXG5AaW1wb3J0ICcuLi9yZXRlX3ZhcmlhYmxlcydcbiAgICBcbi5ncmlkLXdyYXBwZXJcbiAgICBoZWlnaHQ6ICRncmlkLWhlaWdodFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG5cbiNkZWxldGUtY29udGFpbmVyXG4gICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgcmlnaHQ6IDEwcHhcbiAgICBib3R0b206IDEwcHhcblxuICAgIGxhYmVsXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICAgICAgICB3aWR0aDogJGRlbGV0ZV9idXR0b25fd2lkdGhcbiAgICAgICAgaGVpZ2h0OiAkZGVsZXRlX2J1dHRvbl9oZWlnaHRcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4XG4gICAgICAgIFxuICAgICAgICBwXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHhcbiAgICAgICAgICAgIG1hcmdpbjogYXV0b1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG5cbiNncmlkLXRvb2xiYXItY29udGFpbmVyXG4gICAgbWFyZ2luOiA1cHggMHB4XG4gICAgcG9zaXRpb246IGZpeGVkXG4gICAgaGVpZ2h0OiBjYWxjKCN7JGdyaWQtaGVpZ2h0fSAtIDE0cHgpXG4gICAgd2lkdGg6IDM1cHhcbiAgICB6LWluZGV4OiAxXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTVcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweFxuXG4gICAgJjpob3ZlclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1YlxuICAgICAgICB3aWR0aDogYXV0b1xuICAgICpcbiAgICAgICAgbWFyZ2luOiAycHhcblxuLmdyaWQtdG9vbGJhclxuICAgIHdpZHRoOiAxMDAlXG4gICAgaGVpZ2h0OiAxMDAlXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG5cbi50b29sYmFyLWxhYmVsXG4gICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgdG9wOiA1MCVcbiAgICByaWdodDogNXB4XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZXgoNTAlKVxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMFxuICAgIHotaW5kZXg6IDJcbiAgICBmb250LXNpemU6IDE0cHhcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkXG5cbmxhYmVsXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgd2lkdGg6ICRkZWxldGVfYnV0dG9uX3dpZHRoXG4gICAgaGVpZ2h0OiAkZGVsZXRlX2J1dHRvbl9oZWlnaHRcbiAgICBtYXJnaW4tYm90dG9tOiAwcHhcbiAgICBcbiAgICBwXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweFxuICAgICAgICBtYXJnaW46IGF1dG9cbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcblxubGFiZWxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgICB3aWR0aDogYXV0b1xuICAgIG1hcmdpbi1ib3R0b206IDBweFxuICAgIFxuICAgIHBcbiAgICAgICAgZm9udC1zaXplOiAyMHB4XG4gICAgICAgIG1hcmdpbjogYXV0b1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxuXG4iLCIkbW9kdWxlLW1hcmdpbi1sZWZ0OiAxMHB4XG4kbW9kdWxlLW1hcmdpbi10b3A6IDEwcHhcblxuJGdyaWQtd2lkdGg6IDc1JVxuJGdyaWQtaGVpZ2h0OiA2MCVcblxuJG5vZGUtYnJvd3Nlci1oZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGdyaWQtaGVpZ2h0fSAtIDMqI3skbW9kdWxlLW1hcmdpbi10b3B9KVxuXG4kb3V0cHV0LXdpZHRoOiBjYWxjKDEwMCUgLSAjeyRncmlkLXdpZHRofSlcbiRvdXRwdXQtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyKiN7JG1vZHVsZS1tYXJnaW4tdG9wfSlcblxuJGRlbGV0ZS1idXR0b24td2lkdGg6IDE1MHB4XG4kZGVsZXRlLWJ1dHRvbi1oZWlnaHQ6IDUwcHhcblxuLy8gQ29udmV5YW5jZSBTdHlsaW5nXG4kcmVzb3VyY2UtY29sb3I6ICM2N0YxM0YiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'app-grid',
                templateUrl: './grid.component.html',
                styleUrls: ['./grid.component.sass']
            }]
    }], function () { return [{ type: _nodes_sockets__WEBPACK_IMPORTED_MODULE_11__["SocketController"] }, { type: _services_item_service__WEBPACK_IMPORTED_MODULE_12__["ItemService"] }, { type: _services_node_service__WEBPACK_IMPORTED_MODULE_13__["NodeService"] }, { type: _output_services_output_manager_service__WEBPACK_IMPORTED_MODULE_14__["OutputManagerService"] }]; }, { el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
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
    } }, directives: [_rete_modules_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], _rete_modules_node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_2__["NodeBrowserComponent"], _output_output_container_output_container_component__WEBPACK_IMPORTED_MODULE_3__["OutputContainerComponent"]], styles: ["#fullsite[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#workspace[_ngcontent-%COMP%] {\n  width: 75%;\n  height: 100%;\n  flex-shrink: 2;\n  flex-direction: column;\n  display: inline-block;\n}\n\n#resultspace[_ngcontent-%COMP%] {\n  width: calc(100% - 75%);\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic3JjL19nbG9iYWxzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0FBREo7O0FBR0E7RUFDSSxVQ0hTO0VESVQsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBRUE7RUFDSSx1QkNMVztFRE1YLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL19nbG9iYWxzJ1xuXG4jZnVsbHNpdGVcbiAgICBkaXNwbGF5OiBmbGV4XG5cbiN3b3Jrc3BhY2VcbiAgICB3aWR0aDogJGdyaWQtd2lkdGhcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICBmbGV4LXNocmluazogMlxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcblxuI3Jlc3VsdHNwYWNlXG4gICAgd2lkdGg6ICRvdXRwdXQtd2lkdGhcbiAgICBoZWlnaHQ6IDEwMCUiLCIkbW9kdWxlLW1hcmdpbi1sZWZ0OiAxMHB4XG4kbW9kdWxlLW1hcmdpbi10b3A6IDEwcHhcblxuJGdyaWQtd2lkdGg6IDc1JVxuJGdyaWQtaGVpZ2h0OiA2MCVcblxuJG5vZGUtYnJvd3Nlci1oZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGdyaWQtaGVpZ2h0fSAtIDMqI3skbW9kdWxlLW1hcmdpbi10b3B9KVxuXG4kb3V0cHV0LXdpZHRoOiBjYWxjKDEwMCUgLSAjeyRncmlkLXdpZHRofSlcbiRvdXRwdXQtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyKiN7JG1vZHVsZS1tYXJnaW4tdG9wfSlcblxuJGRlbGV0ZS1idXR0b24td2lkdGg6IDE1MHB4XG4kZGVsZXRlLWJ1dHRvbi1oZWlnaHQ6IDUwcHhcblxuLy8gQ29udmV5YW5jZSBTdHlsaW5nXG4kcmVzb3VyY2UtY29sb3I6ICM2N0YxM0YiXX0= */"] });
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
/* harmony import */ var _shared_custom_output__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/custom-output */ "2ir8");
/* harmony import */ var _shared_connection_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/connection.model */ "fqIU");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rete */ "9dUG");
/* harmony import */ var _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/resource-control/resource-control */ "AnjU");




class CustomNode extends rete__WEBPACK_IMPORTED_MODULE_2__["Component"] {
    constructor(socketController, itemService, nodeService) {
        super('Custom');
        this.socketController = socketController;
        this.itemService = itemService;
        this.nodeService = nodeService;
    }
    builder(node) {
        // Visual for custom node
        node.data.resource = this.itemService.GetItemFromId(103);
        // Add a ResourceControl to the node
        var control = new _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_3__["ResourceControl"](this.editor, 'resource', true);
        control.props.selectedItem = node.data.resource;
        control.props.readonly = true;
        node.addControl(control);
        this.updateNodeStructure(node);
        node.meta.type = 'custom';
        return node;
    }
    worker(node, inputs, outputs) {
        // Define the datagrams to output
        let datagramOutputs = {};
        let customData = node.data.customization;
        var node_ref = this.editor.nodes.find(value => { return value.id == node.id; });
        // For each output calculate the critical path based on their inputs
        for (let outputId in customData.outputs) {
            let missingInput = false;
            let perHour = Infinity;
            let output = customData.outputs[outputId];
            // Create the initial datagram for the output
            datagramOutputs[outputId] = new _shared_connection_model__WEBPACK_IMPORTED_MODULE_1__["Connection"](node.id, parseInt(outputId), output.createdAmount, perHour);
            // For each of the inputs, calculate the per hour rate
            for (let inputId in output.inputRate) {
                let input = inputs[inputId][0];
                if (input && !missingInput) {
                    let possiblePerHour = output.inputRate[inputId] * input.perHour * input.amount;
                    if (possiblePerHour < perHour) {
                        perHour = possiblePerHour;
                    }
                }
                else {
                    perHour = Infinity;
                    missingInput = true;
                }
                // Add the input to the datagram tree
                if (input) {
                    datagramOutputs[outputId].transitionCost.push(output.inputRate[inputId]);
                    datagramOutputs[outputId].tree.push(input);
                }
            }
            // Update the datagram with the smallest per hour rate for this output
            datagramOutputs[outputId].perHour = perHour;
            let outputControl = node_ref.outputs.get(outputId);
            outputControl.data.rate = perHour;
        }
        // Find the smallest critical path time for the global critical path
        let smallestPerHour = { index: 0, perHour: Infinity };
        for (let outputIndex in datagramOutputs) {
            let datagram = datagramOutputs[outputIndex];
            if (smallestPerHour.perHour > datagram.perHour) {
                smallestPerHour.index = outputIndex;
                smallestPerHour.perHour = datagram.perHour;
            }
            // Add the datagrams to the output indexes
            outputs[outputIndex] = datagramOutputs[outputIndex];
        }
    }
    updateNodeStructure(node) {
        let customization = this.nodeService.GetCustomNode(node.data['custom']);
        if (!customization) {
            throw new Error("Failed to get Custom Node Data for ID: " + node.data['custom']);
        }
        node.data.name = customization.name;
        node.data['customization'] = customization;
        var custom = node.data.customization;
        custom.inputs.forEach(id => {
            var item = this.itemService.GetItemFromId(id);
            var input = new rete__WEBPACK_IMPORTED_MODULE_2__["Input"]("" + item.id, item.name, this.socketController.GetSocketForId(item.id));
            node.addInput(input);
        });
        for (let outputIndex in custom.outputs) {
            let item = this.itemService.GetItemFromId(parseInt(outputIndex));
            var output = new _shared_custom_output__WEBPACK_IMPORTED_MODULE_0__["CustomOutput"]("" + item.id, item.name, this.socketController.GetSocketForId(item.id));
            output.data.rate = Infinity;
            node.addOutput(output);
        }
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








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_rete_modules_nodes_sockets__WEBPACK_IMPORTED_MODULE_1__["SocketController"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _rete_modules_custom_rete_module__WEBPACK_IMPORTED_MODULE_5__["CustomReteModule"],
            _output_output_module__WEBPACK_IMPORTED_MODULE_0__["OutputModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _rete_modules_custom_rete_module__WEBPACK_IMPORTED_MODULE_5__["CustomReteModule"],
        _output_output_module__WEBPACK_IMPORTED_MODULE_0__["OutputModule"]] }); })();
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _output_container_output_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./output-container/output-container.component */ "n/8p");
/* harmony import */ var _services_output_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/output-manager.service */ "IIXy");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");
/* harmony import */ var _output_item_output_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./output-item/output-item.component */ "E5D1");
/* harmony import */ var _graph_view_graph_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./graph-view/graph-view.component */ "7bOH");
/* harmony import */ var _graph_item_graph_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./graph-item/graph-item.component */ "c4YL");










class OutputModule {
}
OutputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OutputModule });
OutputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OutputModule_Factory(t) { return new (t || OutputModule)(); }, providers: [_services_output_manager_service__WEBPACK_IMPORTED_MODULE_4__["OutputManagerService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OutputModule, { declarations: [_output_container_output_container_component__WEBPACK_IMPORTED_MODULE_3__["OutputContainerComponent"], _output_item_output_item_component__WEBPACK_IMPORTED_MODULE_6__["OutputItemComponent"], _graph_view_graph_view_component__WEBPACK_IMPORTED_MODULE_7__["GraphViewComponent"], _graph_item_graph_item_component__WEBPACK_IMPORTED_MODULE_8__["GraphItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]], exports: [_output_container_output_container_component__WEBPACK_IMPORTED_MODULE_3__["OutputContainerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OutputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_output_container_output_container_component__WEBPACK_IMPORTED_MODULE_3__["OutputContainerComponent"], _output_item_output_item_component__WEBPACK_IMPORTED_MODULE_6__["OutputItemComponent"], _graph_view_graph_view_component__WEBPACK_IMPORTED_MODULE_7__["GraphViewComponent"], _graph_item_graph_item_component__WEBPACK_IMPORTED_MODULE_8__["GraphItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]
                ],
                exports: [_output_container_output_container_component__WEBPACK_IMPORTED_MODULE_3__["OutputContainerComponent"],
                ],
                providers: [_services_output_manager_service__WEBPACK_IMPORTED_MODULE_4__["OutputManagerService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "c4YL":
/*!***********************************************************!*\
  !*** ./src/app/output/graph-item/graph-item.component.ts ***!
  \***********************************************************/
/*! exports provided: GraphItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphItemComponent", function() { return GraphItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/output-manager.service */ "IIXy");
/* harmony import */ var src_app_rete_modules_services_node_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/rete-modules/services/node.service */ "5bZ5");
/* harmony import */ var src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rete-modules/services/item.service */ "x7rl");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");






class LineChartData {
    constructor(name, perHourRate, steps, stepSize) {
        this.name = "data";
        this.name = name;
        this.series = [];
        for (let step = 0; step < steps; step++) {
            if (perHourRate == 0 || perHourRate == Infinity) {
                continue;
            }
            this.series.push({ "name": String(step * stepSize), "value": step * stepSize * perHourRate });
        }
    }
}
class GraphItemComponent {
    constructor(outputManagerService, nodeService, itemService) {
        this.outputManagerService = outputManagerService;
        this.nodeService = nodeService;
        this.itemService = itemService;
        // Line Chart Data
        this.lineView = [330, 250];
        this.timeline = true;
        this.primaryData = [];
        // Bar Chart Data
        this.secondaryData = [];
        this.barView = [100, 100];
        // Pie Chart Data
        this.tertiaryData = [];
        this.pieView = [100, 100];
        this.showPieLabels = false;
        // Universal data
        // public colorScheme: any = {};
        this.gradient = true;
        // Temporary
        this.legend = false;
        this.showLabels = true;
        this.animations = true;
        this.xAxis = true;
        this.yAxis = true;
        this.showYAxisLabel = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Year';
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
        this.barView[0] = this.lineView[0] / 2;
        this.pieView[0] = this.lineView[0] / 2;
    }
    ngOnInit() {
        this.outputManagerService.bindOnNodeUpdate(this.node.id, val => {
            this.node = val;
            this.updateData();
        });
        this.updateData();
    }
    updateData() {
        this.primaryData = [];
        this.secondaryData = [];
        this.tertiaryData = [];
        let nodeData = this.node.data;
        let nodePerHour = nodeData['perHour'];
        let outputData = new LineChartData(nodeData['resource']['name'], nodePerHour, 6, 10);
        this.primaryData.push(outputData);
        let result = this.nodeService.calculateCustomNodeFromOutputs([this.nodeService.getNodeTreeItem(this.node.id)]);
        let nodeIds = result[0];
        let calcuatedInputData = result[1];
        let highestRate = 0;
        let inputRates = {};
        //TODO: This does not work for custom nodes. Need to separate graphs based on outputs
        for (let outputId in calcuatedInputData.outputs) {
            let output = calcuatedInputData.outputs[outputId];
            calcuatedInputData.inputs.forEach(inputId => {
                let inputRate = calcuatedInputData.outputs[outputId].createdAmount * calcuatedInputData.outputs[outputId].inputRate[inputId];
                nodeIds.forEach(value => {
                    let node = this.outputManagerService.getNodeById(value);
                    if (node.data['resource']['id'] == inputId) {
                        inputRate *= node.data['perHour'];
                    }
                });
                if (inputRate > highestRate) {
                    highestRate = inputRate;
                }
                inputRate -= nodePerHour;
                inputRates[inputId] = inputRate;
            });
        }
        for (let inputId in inputRates) {
            let inputRate = inputRates[inputId];
            let inputItem = this.itemService.GetItemFromId(parseInt(inputId));
            // If we are generating excess resources. Add to the primaryData table
            if (inputRate > 0) {
                let outputData = new LineChartData(inputItem.name, inputRate, 6, 10);
                this.primaryData.push(outputData);
            }
            inputRate /= highestRate;
            if (Math.abs(inputRate - 1) > .00001) {
                this.secondaryData.push({ "name": inputItem.name, "value": 1 - inputRate });
            }
            if (Math.abs(inputRate - 0) > .00001) {
                this.tertiaryData.push({ "name": inputItem.name, "value": inputRate });
            }
        }
        if (nodePerHour != Infinity) {
            this.tertiaryData.push({ "name": nodeData['resource']['name'], "value": nodePerHour / highestRate });
        }
    }
}
GraphItemComponent.ɵfac = function GraphItemComponent_Factory(t) { return new (t || GraphItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__["OutputManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_rete_modules_services_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"])); };
GraphItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraphItemComponent, selectors: [["app-graph-item"]], inputs: { node: "node" }, decls: 8, vars: 12, consts: [[1, "line-chart-container"], ["timeline", "timeline", "xAxis", "true", "yAxis", "true", "showXAxisLabel", "true", "showYAxisLabel", "true", "xAxisLabel", "Time", "yAxisLabel", "Amount", 3, "view", "scheme", "results"], [1, "extra-graphs-container"], [1, "bar-chart-container"], ["yAxis", "true", 3, "view", "scheme", "results", "gradient", "resultsChange"], [1, "pie-char-container"], [3, "view", "scheme", "results", "gradient", "labels"]], template: function GraphItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-charts-line-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-charts-bar-vertical", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resultsChange", function GraphItemComponent_Template_ngx_charts_bar_vertical_resultsChange_5_listener($event) { return ctx.secondaryData = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngx-charts-pie-chart", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.lineView)("scheme", ctx.colorScheme)("results", ctx.primaryData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.barView)("scheme", ctx.colorScheme)("results", ctx.secondaryData)("gradient", ctx.gradient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.pieView)("scheme", ctx.colorScheme)("results", ctx.tertiaryData)("gradient", ctx.gradient)("labels", ctx.showPieLabels);
    } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["LineChartComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["BarVerticalComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["PieChartComponent"]], styles: [".line-chart-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  overflow: hidden;\n  background-color: #999999;\n}\n\n.extra-graphs-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.extra-graphs-container[_ngcontent-%COMP%]   .bar-chart-container[_ngcontent-%COMP%] {\n  width: 50%;\n  float: left;\n}\n\n.extra-graphs-container[_ngcontent-%COMP%]   .pie-chart-container[_ngcontent-%COMP%] {\n  width: 50%;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0cHV0L2dyYXBoLWl0ZW0vZ3JhcGgtaXRlbS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUFJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFFUjs7QUFBSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBRVIiLCJmaWxlIjoic3JjL2FwcC9vdXRwdXQvZ3JhcGgtaXRlbS9ncmFwaC1pdGVtLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmUtY2hhcnQtY29udGFpbmVyXG4gICAgd2lkdGg6IDEwMCVcbiAgICBoZWlnaHQ6IDE1MHB4XG4gICAgb3ZlcmZsb3c6IGhpZGRlblxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTlcblxuLmV4dHJhLWdyYXBocy1jb250YWluZXJcbiAgICBkaXNwbGF5OiBmbGV4XG5cbiAgICAuYmFyLWNoYXJ0LWNvbnRhaW5lclxuICAgICAgICB3aWR0aDogNTAlXG4gICAgICAgIGZsb2F0OiBsZWZ0XG5cbiAgICAucGllLWNoYXJ0LWNvbnRhaW5lclxuICAgICAgICB3aWR0aDogNTAlXG4gICAgICAgIGZsb2F0OiByaWdodCJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-graph-item',
                templateUrl: './graph-item.component.html',
                styleUrls: ['./graph-item.component.sass']
            }]
    }], function () { return [{ type: _services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__["OutputManagerService"] }, { type: src_app_rete_modules_services_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"] }, { type: src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] }]; }, { node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
        node.meta.type = 'output';
        node.data.name = 'Output';
        return node;
    }
    worker(node, inputs, outputs) {
        var node_ref = this.editor.nodes.find(n => n.id === node.id);
        if (node_ref.meta.changed === true) {
            node_ref.getConnections().forEach(element => {
                this.editor.removeConnection(element);
            });
            node_ref.inputs.clear();
            var item = node.data.resource;
            var input = new rete__WEBPACK_IMPORTED_MODULE_0__["Input"]("resource", item.name, this.socketController.GetSocketForId(item.id));
            node_ref.addInput(input);
            this.editor.trigger('nodeselected');
            node_ref.meta.changed = false;
        }
        var perHourBottleneck = Infinity;
        if (inputs && inputs['resource'] && inputs['resource'][0]) {
            perHourBottleneck = inputs['resource'][0].perHour * inputs['resource'][0].amount;
            // Store the completed input tree
            node.data.inputTree = [];
            node.data.inputTree.push(inputs['resource'][0]);
        }
        else {
            node.data.inputTree = null;
        }
        node.data.perHour = perHourBottleneck;
        let control = node_ref.controls.get('resource');
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
    constructor(nodeId, itemId, amount, perHour) {
        this.nodeId = nodeId;
        this.itemId = itemId;
        this.amount = amount;
        this.perHour = perHour;
        this.transitionCost = [];
        this.tree = [];
    }
    getAllConnectionNodeIds() {
        let nodeIds = [];
        let treeStack = [];
        treeStack.push(this);
        while (treeStack.length > 0) {
            let currentConnection = treeStack.pop();
            if (currentConnection) {
                nodeIds.push(currentConnection.nodeId);
                currentConnection.tree.forEach(value => {
                    if (!nodeIds.includes(value.nodeId)) {
                        treeStack.push(value);
                    }
                });
            }
        }
        return nodeIds;
    }
}


/***/ }),

/***/ "icfx":
/*!**************************************************!*\
  !*** ./src/app/rete-modules/shared/node-tree.ts ***!
  \**************************************************/
/*! exports provided: TreeItem, NodeTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeItem", function() { return TreeItem; });
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
    getInputTree() {
        return this.getNodeData()['inputTree'];
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
        nodes.forEach(value => {
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
    getNode(id) {
        // Shallow copy the outputNodes to the node stack to search
        let nodeStack = [...this.outputNodes];
        while (nodeStack.length > 0) {
            let nodeItem = nodeStack.pop();
            if (nodeItem.node.id == id) {
                return nodeItem;
            }
            nodeItem.inputs.forEach(value => {
                nodeStack.push(value);
            });
        }
    }
    calculateCriticalPath() {
        this.criticalPath = [];
        let sortedOutputNodes = this.outputNodes.sort((a, b) => {
            // Sort the focused node to the front
            if (a.getNodeData()['hasOutputFocus']) {
                return -1;
            }
            else {
                return a.getNodeData()['perHour'] - b.getNodeData()['perHour'];
            }
        });
        // Starting at the output nodes
        sortedOutputNodes.forEach(value => {
            // Check to see if the node is currently connected to a critical path
            if (!this.isConnectedToCriticalPath(value)) {
                this.criticalPath.push(value.node.id);
                // Search through the tree
                let connectionStack = [];
                value.getInputTree().forEach((value) => {
                    connectionStack.push(value);
                });
                while (connectionStack.length > 0) {
                    let currentConnection = connectionStack.pop();
                    if (!currentConnection) {
                        continue;
                    }
                    this.criticalPath.push(currentConnection.nodeId);
                    let smallestPerHour = Infinity;
                    let smallestConnection = null;
                    let duplicateConnections = [];
                    // Find the smallest per hour connection with duplicates
                    currentConnection.tree.forEach((inputConnection, index) => {
                        let inputConnectionPerHour = currentConnection.transitionCost[index] * inputConnection.amount * inputConnection.perHour;
                        if (smallestPerHour === Infinity) {
                            smallestPerHour = inputConnectionPerHour;
                            smallestConnection = inputConnection;
                        }
                        else if (smallestPerHour === inputConnectionPerHour) {
                            duplicateConnections.push(inputConnection);
                        }
                        else if (smallestPerHour > inputConnectionPerHour) {
                            smallestPerHour = inputConnectionPerHour;
                            smallestConnection = inputConnection;
                            duplicateConnections = [];
                        }
                    });
                    // If no connection was found this is the end of the path
                    if (smallestConnection === null) {
                        break;
                    }
                    // Add the found connections to the stack to seach
                    duplicateConnections.push(smallestConnection);
                    duplicateConnections.forEach(value => {
                        connectionStack.push(value);
                    });
                }
            }
        });
    }
    isConnectedToCriticalPath(node) {
        let nodeConnections = node.getInputTree();
        if (nodeConnections) {
            let allConnectionNodeIds = [];
            nodeConnections.forEach(connection => {
                let connections = connection.getAllConnectionNodeIds();
                connections.forEach(value => {
                    allConnectionNodeIds.push(value);
                });
            });
            // Used to get the intersection of [criticalPath] x [allConnecitonNodeIds]
            return this.criticalPath.filter(value => allConnectionNodeIds.includes(value)).length > 0;
        }
        else {
            // If there is not connection, there will not be a critical path so skip
            return true;
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
        this.outputNodes.forEach(value => {
            let stack = [];
            stack.push(value);
            while (stack.length > 0) {
                let popped = stack.pop();
                if (popped.node['id'] == node['id']) {
                    item = popped;
                    return;
                }
                popped.inputs.forEach(value => {
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





function BaseNodeComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaseNodeComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const output_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", output_r4.data.rate);
} }
function BaseNodeComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaseNodeComponent_div_8_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rete-socket", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const output_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isCustom());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](output_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("io", output_r4)("socket", output_r4.socket);
} }
function BaseNodeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 18);
} if (rf & 2) {
    const control_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rete-control", control_r7);
} }
function BaseNodeComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](input_r8.name);
} }
function BaseNodeComponent_div_11_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23);
} if (rf & 2) {
    const input_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rete-control", input_r8.control);
} }
function BaseNodeComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rete-socket", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BaseNodeComponent_div_11_div_2_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BaseNodeComponent_div_11_div_3_Template, 1, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("io", input_r8)("socket", input_r8.socket);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !input_r8.showControl());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", input_r8.showControl());
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
    onCriticalPathClass() {
        return this.node.meta.criticalPath ? "critical-path" : "";
    }
    isCustomClass() {
        return this.node.data.customization == null ? "" : "custom";
    }
    isCustom() {
        return this.node.data.customization != null;
    }
    isOutputFocused() {
        return this.node.meta.hasOutputFocus;
    }
}
BaseNodeComponent.ɵfac = function BaseNodeComponent_Factory(t) { return new (t || BaseNodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["NodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
BaseNodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseNodeComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["NodeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 13, consts: [[1, "node", 3, "ngClass"], [1, "title-container"], [1, "title"], ["class", "star-container", 4, "ngIf"], [1, "content"], [1, "outputs"], ["class", "output", 4, "ngFor", "ngForOf"], ["class", "control", 3, "rete-control", 4, "ngFor", "ngForOf"], [1, "inputs"], ["class", "input", 4, "ngFor", "ngForOf"], [1, "star-container"], [1, "glyphicon", "glyphicon-star"], [1, "output"], ["class", "output-rate-container", 4, "ngIf"], [1, "output-title"], ["rete-socket", "", 3, "io", "socket"], [1, "output-rate-container"], ["type", "text", "readonly", "true", 1, "output-rate", 3, "value"], [1, "control", 3, "rete-control"], [1, "input"], ["class", "input-title", 4, "ngIf"], ["class", "input-control", 3, "rete-control", 4, "ngIf"], [1, "input-title"], [1, "input-control", 3, "rete-control"]], template: function BaseNodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "kebab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BaseNodeComponent_div_5_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BaseNodeComponent_div_8_Template, 5, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BaseNodeComponent_div_9_Template, 1, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BaseNodeComponent_div_11_Template, 4, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](8, _c0, ctx.onCriticalPathClass(), ctx.selected(), ctx.isCustomClass(), ctx.node.name)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.node.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOutputFocused());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.outputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inputs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["SocketComponent"], rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["ɵc"], rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["ɵb"]], pipes: [rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["ɵd"]], styles: [".node[_ngcontent-%COMP%] {\n  background: #40E06D;\n  border: 2px solid #1C943E;\n  border-radius: 10px;\n  curson: pointer;\n  min-width: 200px;\n  height: auto;\n  padding-bottom: 6px;\n  box-sizing: content-box;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.node[_ngcontent-%COMP%]:hover {\n  background: #52e37a;\n}\n.node.selected[_ngcontent-%COMP%] {\n  background: #63FF90;\n  border-color: #40E06D;\n}\n.node.critical-path[_ngcontent-%COMP%] {\n  background: #E04141;\n  border-color: #940D0D;\n}\n.node.custom[_ngcontent-%COMP%] {\n  min-width: 400px;\n}\n.node.custom[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 20% 50% 30%;\n}\n.node.custom[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: 1;\n}\n.node.custom[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n}\n.node.custom[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .outputs[_ngcontent-%COMP%] {\n  grid-column: 3;\n  grid-row: 1;\n}\n.node.custom[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .outputs[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.node.custom[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .outputs[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .output-rate-container[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-right: 10px;\n  float: left;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: calc( 100% - 35px);\n  color: black;\n  font-family: sans-serif;\n  font-size: 18px;\n  padding: 8px;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .star-container[_ngcontent-%COMP%] {\n  height: auto;\n  margin-top: 5px;\n  margin-right: 5px;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .star-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 35px;\n  color: #F5A300;\n}\n.node[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.node[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.node[_ngcontent-%COMP%]   .input-title[_ngcontent-%COMP%], .node[_ngcontent-%COMP%]   .output-title[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  display: inline-block;\n  font-family: sans-serif;\n  font: 14px;\n  margin: 6px;\n  line-height: 24px;\n}\n.node[_ngcontent-%COMP%]   .input-title[hidden][_ngcontent-%COMP%], .node[_ngcontent-%COMP%]   .output-title[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n.node[_ngcontent-%COMP%]   .input-control[_ngcontent-%COMP%] {\n  z-index: 1;\n  width: calc( 100% - 36px);\n  vertical-align: middle;\n  display: inline-block;\n}\n.node[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%] {\n  padding: 6px 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL25vZGVzL2Jhc2Utbm9kZS9iYXNlLW5vZGUuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3JldGUtbW9kdWxlcy9fcmV0ZV92YXJpYWJsZXMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG1CQ0RTO0VERVQseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkNDUztFREFULFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFESjtBQUdJO0VBQ0ksbUJBQUE7QUFEUjtBQUVJO0VBQ0ksbUJDZGM7RURlZCxxQkNacUI7QURZN0I7QUFDSTtFQUNJLG1CQ2hCbUI7RURpQm5CLHFCQ2QwQjtBRGVsQztBQUFJO0VBQ0ksZ0JDYlk7QURlcEI7QUFEUTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtBQUdaO0FBRFk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQUdoQjtBQUZZO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUFJaEI7QUFIWTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FBS2hCO0FBSmdCO0VBQ0ksV0FBQTtBQU1wQjtBQUxvQjtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFPeEI7QUFMSTtFQUNJLGFBQUE7QUFPUjtBQU5RO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVFaO0FBUFE7RUFDSSxZQUFBO0VBQ0EsZUN6Q2dCO0VEMENoQixpQkMxQ2dCO0FEbUQ1QjtBQVJZO0VBQ0ksZUM3Q1U7RUQ4Q1YsY0M1Q1c7QURzRDNCO0FBUkk7RUFDSSxpQkFBQTtBQVVSO0FBVEk7RUFDSSxnQkFBQTtBQVdSO0FBVkk7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0NqRFE7RURrRFIsaUJDbkRNO0FEK0RkO0FBWFE7RUFDSSxhQUFBO0FBYVo7QUFYSTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFhUjtBQVpJO0VBQ0ksaUJBQUE7QUFjUiIsImZpbGUiOiJzcmMvYXBwL3JldGUtbW9kdWxlcy9ub2Rlcy9iYXNlLW5vZGUvYmFzZS1ub2RlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAuLi8uLi9yZXRlX3ZhcmlhYmxlc1xuXG4ubm9kZVxuICAgIGJhY2tncm91bmQ6ICRub2RlLWNvbG9yXG4gICAgYm9yZGVyOiAycHggc29saWQgJG5vZGUtYm9yZGVyLWNvbG9yXG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxuICAgIGN1cnNvbjogcG9pbnRlclxuICAgIG1pbi13aWR0aDogJG5vZGUtd2lkdGhcbiAgICBoZWlnaHQ6IGF1dG9cbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3hcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICB1c2VyLXNlbGVjdDogbm9uZVxuXG4gICAgJjpob3ZlclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRub2RlLWNvbG9yLCA0JSlcbiAgICAmLnNlbGVjdGVkXG4gICAgICAgIGJhY2tncm91bmQ6ICRub2RlLWNvbG9yLXNlbGVjdGVkXG4gICAgICAgIGJvcmRlci1jb2xvcjogJG5vZGUtYm9yZGVyLWNvbG9yLXNlbGVjdGVkXG4gICAgJi5jcml0aWNhbC1wYXRoXG4gICAgICAgIGJhY2tncm91bmQ6ICRub2RlLWNvbG9yLWNyaXRpY2FsLXBhdGhcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkbm9kZS1ib3JkZXItY29sb3ItY3JpdGljYWwtcGF0aFxuICAgICYuY3VzdG9tXG4gICAgICAgIG1pbi13aWR0aDogJGN1c3RvbS1ub2RlLXdpZHRoXG4gICAgICAgIC5jb250ZW50XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA1MCUgMzAlXG4gICAgICAgICAgICAvLyBncmlkLWF1dG8tcm93czogMTAwJVxuICAgICAgICAgICAgLmNvbnRyb2xcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMiBcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMVxuICAgICAgICAgICAgLmlucHV0c1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDFcbiAgICAgICAgICAgIC5vdXRwdXRzXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDNcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMVxuICAgICAgICAgICAgICAgIC5vdXRwdXRcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICAgICAgICAgICAgLm91dHB1dC1yYXRlLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0XG5cbiAgICAudGl0bGUtY29udGFpbmVyXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgLnRpdGxlXG4gICAgICAgICAgICB3aWR0aDogY2FsYyggMTAwJSAtICN7JG91dHB1dC1mb2N1cy1nbHlwaC1zaXplfSlcbiAgICAgICAgICAgIGNvbG9yOiBibGFja1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWZcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweFxuICAgICAgICAgICAgcGFkZGluZzogOHB4XG4gICAgICAgIC5zdGFyLWNvbnRhaW5lclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAkb3V0cHV0LWZvY3VzLWdseXBoLW1hcmdpblxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkb3V0cHV0LWZvY3VzLWdseXBoLW1hcmdpblxuICAgICAgICAgICAgc3BhblxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJG91dHB1dC1mb2N1cy1nbHlwaC1zaXplXG4gICAgICAgICAgICAgICAgY29sb3I6ICRvdXRwdXQtZm9jdXMtZ2x5cGgtY29sb3JcblxuICAgIC5vdXRwdXRcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHRcbiAgICAuaW5wdXRcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdFxuICAgIC5pbnB1dC10aXRsZSwub3V0cHV0LXRpdGxlXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmXG4gICAgICAgIGZvbnQ6IDE0cHhcbiAgICAgICAgbWFyZ2luOiAkc29ja2V0LW1hcmdpblxuICAgICAgICBsaW5lLWhlaWdodDogJHNvY2tldC1zaXplXG4gICAgICAgICZbaGlkZGVuXVxuICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuXG4gICAgLmlucHV0LWNvbnRyb2xcbiAgICAgICAgei1pbmRleDogMVxuICAgICAgICB3aWR0aDogY2FsYyggMTAwJSAtICN7JHNvY2tldC1zaXplICsgMiokc29ja2V0LW1hcmdpbn0pXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgLmNvbnRyb2xcbiAgICAgICAgcGFkZGluZzogJHNvY2tldC1tYXJnaW4gJHNvY2tldC1zaXplLzIgKyAkc29ja2V0LW1hcmdpbiIsIkB1c2UgXCJzYXNzOm1hcFwiXG4gICAgXG4kbm9kZS1jb2xvcjogIzQwRTA2RFxuJG5vZGUtY29sb3Itc2VsZWN0ZWQ6ICM2M0ZGOTBcbiRub2RlLWNvbG9yLWNyaXRpY2FsLXBhdGg6ICNFMDQxNDFcbiRub2RlLWJvcmRlci1jb2xvcjogIzFDOTQzRVxuJG5vZGUtYm9yZGVyLWNvbG9yLXNlbGVjdGVkOiAjNDBFMDZEXG4kbm9kZS1ib3JkZXItY29sb3ItY3JpdGljYWwtcGF0aDogIzk0MEQwRFxuJG5vZGUtd2lkdGg6IDIwMHB4XG5cbiRjdXN0b20tbm9kZS13aWR0aDogNDAwcHhcblxuJG91dHB1dC1mb2N1cy1nbHlwaC1zaXplOiAzNXB4XG4kb3V0cHV0LWZvY3VzLWdseXBoLW1hcmdpbjogNXB4XG4kb3V0cHV0LWZvY3VzLWdseXBoLWNvbG9yOiAjRjVBMzAwXG5cbiRub2RlLWJyb3dzZXItcmVzb3VyY2UtY29sb3I6ICM0MEUwNkRcbiRub2RlLWJyb3dzZXItY3JhZnRlZC1jb2xvcjogI0YyQzYxMVxuXG4kc29ja2V0LXNpemU6IDI0cHhcbiRzb2NrZXQtbWFyZ2luOiA2cHhcbiRzb2NrZXQtY29sb3I6ICNFMDk1MkJcbiRzb2NrZXQtYm9yZGVyLWNvbG9yOiAjOTQ2NTIzXG5cbiRzcHJpdGUtc2NhbGU6IDJcblxuJHNvY2tldC1pdGVtLW1hcDogKCBcIlN0b25lXCI6ICM4ODgsIFwiR3Jhc3NcIjogIzE4MSwgXCJEaXJ0XCI6ICM2ODM2MTksIFwiQ29iYmxlc3RvbmVcIjogIzQ0NCwgXCJQbGFua3NcIjogI2I5OTA1YiwgXCJMb2dzXCI6ICM3NDQwMTAsIFwiMlwiOiAjODg4LCBcIjNcIjogIzg4OCwpXG5cbkBmdW5jdGlvbiBnZXQtaXRlbS1jb2xvcigkaXRlbSkgXG4gICAgQHJldHVybiBtYXAtZ2V0KCRzb2NrZXQtaXRlbS1tYXAsICRpdGVtKVxuXG5AZnVuY3Rpb24gZ2V0LWl0ZW0tYm9yZGVyKCRpdGVtKVxuICAgICRjb2xvcjogZ2V0LWl0ZW0tY29sb3IoJGl0ZW0pXG4gICAgQGlmIGxpZ2h0bmVzcygkY29sb3IpID4gNDAlXG4gICAgICAgIEByZXR1cm4gZGFya2VuKCRjb2xvciwgMjUlKVxuICAgIEBlbHNlIFxuICAgICAgICBAcmV0dXJuIGxpZ2h0ZW4oJGNvbG9yLCAyNSUpIl19 */"] });
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
/* harmony import */ var _services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/output-manager.service */ "IIXy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _graph_view_graph_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graph-view/graph-view.component */ "7bOH");
/* harmony import */ var _output_item_output_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../output-item/output-item.component */ "E5D1");






function OutputContainerComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-output-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dropdownPressed", function OutputContainerComponent_div_13_div_1_Template_app_output_item_dropdownPressed_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.dropdownCallback($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", node_r3);
} }
function OutputContainerComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OutputContainerComponent_div_13_div_1_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.markedNodes);
} }
function OutputContainerComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-output-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dropdownPressed", function OutputContainerComponent_div_14_div_1_Template_app_output_item_dropdownPressed_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.dropdownCallback($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", child_r7);
} }
function OutputContainerComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OutputContainerComponent_div_14_div_1_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.getSelectedChildren());
} }
class OutputContainerComponent {
    constructor(outputManager) {
        this.outputManager = outputManager;
        this.hasSelectedNode = false;
        // Handle the tabs at the top
        this.isFocusSelected = true;
        this.nodeStack = [];
        setInterval(() => {
            this.markedNodes = this.outputManager.getMarkedNodes();
        }, 500);
    }
    onFocusClicked() {
        this.isFocusSelected = true;
    }
    onGraphClicked() {
        this.isFocusSelected = false;
    }
    ngOnInit() {
    }
    dropdownCallback(node) {
        this.selectedNode = node;
        this.nodeStack.push(this.selectedNode);
        this.hasSelectedNode = true;
    }
    popNode() {
        if (this.nodeStack.length > 1) {
            this.nodeStack.pop();
            this.selectedNode = this.nodeStack.pop();
        }
        else {
            this.hasSelectedNode = false;
            this.nodeStack = [];
        }
    }
    getSelectedChildren() {
        let children = [];
        if (this.selectedNode) {
            let tree = this.selectedNode.data['inputTree'];
            if (tree) {
                for (let id in tree) {
                    let treeValue = tree[id];
                    children.push(this.outputManager.getNodeById(treeValue.nodeId));
                }
            }
        }
        return children;
    }
}
OutputContainerComponent.ɵfac = function OutputContainerComponent_Factory(t) { return new (t || OutputContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__["OutputManagerService"])); };
OutputContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutputContainerComponent, selectors: [["app-output-container"]], decls: 17, vars: 5, consts: [[1, "output-wrapper", "module-margin"], [1, "tab-bar"], ["data-toggle", "collapse", "data-target", "#focusedNodes,#graphs", 1, "button", "tab-button", "btn", 3, "ngClass", "click"], [1, "output-data-wrapper", "scrollable"], ["id", "focusedNodes", 1, "collapse", "show"], [1, "subtab-bar", 3, "ngClass"], [1, "button", "toolbar-button", 3, "click"], [1, "material-icons", "mb-36", "no-select"], [1, "spacer-10"], [4, "ngIf"], ["id", "graphs", 1, "collapse"], [4, "ngFor", "ngForOf"], [3, "node", "dropdownPressed"]], template: function OutputContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OutputContainerComponent_Template_button_click_2_listener() { return ctx.onFocusClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Focused");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OutputContainerComponent_Template_button_click_4_listener() { return ctx.onGraphClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Graphs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OutputContainerComponent_Template_button_click_9_listener() { return ctx.popNode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OutputContainerComponent_div_13_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OutputContainerComponent_div_14_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-graph-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isFocusSelected ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.isFocusSelected ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.hasSelectedNode ? "hidden" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasSelectedNode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasSelectedNode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _graph_view_graph_view_component__WEBPACK_IMPORTED_MODULE_3__["GraphViewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _output_item_output_item_component__WEBPACK_IMPORTED_MODULE_4__["OutputItemComponent"]], styles: [".scrollable[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n.tab-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  background-color: #404040;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  border: 2px solid #707070;\n  border-radius: 5px;\n  margin: calc( 5px - 2px) calc( 5px - 2px) 5px 5px;\n}\n\n.tab-button[_ngcontent-%COMP%] {\n  width: calc( 50% - 10px );\n  height: 40px;\n  font-style: bold;\n  font-size: 20px;\n  text-align: center;\n}\n\n.subtab-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  display: inline-block;\n  background-color: #CCCCCC;\n}\n\n.toolbar-button[_ngcontent-%COMP%] {\n  width: 40px;\n  min-height: 40px;\n  position: relative;\n}\n\n.toolbar-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #67F13F;\n}\n\n.output-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  height: calc(100% - 20px);\n  margin: 10px;\n  border: 2px solid black;\n}\n\n.output-data-warpper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n#focusedNodes[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n#graphs[_ngcontent-%COMP%] {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0cHV0L291dHB1dC1jb250YWluZXIvb3V0cHV0LWNvbnRhaW5lci5jb21wb25lbnQuc2FzcyIsInNyYy9fZ2xvYmFscy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQUE7QUFESjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFJUjs7QUFGQTtFQUNJLGFBQUE7QUFLSjs7QUFIQTtFQUNJLHlCQzlCYTtBRG9DakI7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQU9KOztBQUxBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFRSjs7QUFOQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUFTSjs7QUFQQTtFQUNJLFlBQUE7QUFVSjs7QUFSQTtFQUNJLFlBQUE7QUFXSiIsImZpbGUiOiJzcmMvYXBwL291dHB1dC9vdXRwdXQtY29udGFpbmVyL291dHB1dC1jb250YWluZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IC4uLy4uLy4uL2dsb2JhbHNcblxuLnNjcm9sbGFibGVcbiAgICBvdmVyZmxvdy15OiBhdXRvXG4gICAgXG4udGFiLWJhclxuICAgIHdpZHRoOiAxMDAlXG4gICAgaGVpZ2h0OiA1MHB4XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MFxuXG4uYnV0dG9uXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRlxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3MDcwNzBcbiAgICBib3JkZXItcmFkaXVzOiA1cHggXG4gICAgbWFyZ2luOiBjYWxjKCA1cHggLSAycHgpIGNhbGMoIDVweCAtIDJweCkgNXB4IDVweFxuICAgIFxuLnRhYi1idXR0b25cbiAgICB3aWR0aDogY2FsYyggNTAlIC0gMTBweCApXG4gICAgaGVpZ2h0OiA0MHB4XG4gICAgZm9udC1zdHlsZTogYm9sZFxuICAgIGZvbnQtc2l6ZTogMjBweFxuICAgIHRleHQtYWxpZ246IGNlbnRlclxuXG4uc3VidGFiLWJhclxuICAgIHdpZHRoOiAxMDAlXG4gICAgaGVpZ2h0OiA1MHB4XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQ1xuXG4udG9vbGJhci1idXR0b25cbiAgICB3aWR0aDogNDBweFxuICAgIG1pbi1oZWlnaHQ6IDQwcHhcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcblxuICAgIHNwYW5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICAgIHRvcDogNTAlXG4gICAgICAgIGxlZnQ6IDUwJVxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcblxuLmhpZGRlblxuICAgIGRpc3BsYXk6IG5vbmVcblxuLmFjdGl2ZVxuICAgIGJhY2tncm91bmQtY29sb3I6ICRyZXNvdXJjZS1jb2xvclxuICAgIFxuLm91dHB1dC13cmFwcGVyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgZGlzcGxheTogYmxvY2tcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpXG4gICAgbWFyZ2luOiAxMHB4XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2tcblxuLm91dHB1dC1kYXRhLXdhcnBwZXJcbiAgICB3aWR0aDogMTAwJVxuICAgIGhlaWdodDogMTAwJVxuXG4uYm90dG9tXG4gICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgYm90dG9tOiAwXG4gICAgbGVmdDogMFxuXG4jZm9jdXNlZE5vZGVzXG4gICAgaGVpZ2h0OiBhdXRvXG5cbiNncmFwaHNcbiAgICBoZWlnaHQ6IGF1dG8iLCIkbW9kdWxlLW1hcmdpbi1sZWZ0OiAxMHB4XG4kbW9kdWxlLW1hcmdpbi10b3A6IDEwcHhcblxuJGdyaWQtd2lkdGg6IDc1JVxuJGdyaWQtaGVpZ2h0OiA2MCVcblxuJG5vZGUtYnJvd3Nlci1oZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGdyaWQtaGVpZ2h0fSAtIDMqI3skbW9kdWxlLW1hcmdpbi10b3B9KVxuXG4kb3V0cHV0LXdpZHRoOiBjYWxjKDEwMCUgLSAjeyRncmlkLXdpZHRofSlcbiRvdXRwdXQtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyKiN7JG1vZHVsZS1tYXJnaW4tdG9wfSlcblxuJGRlbGV0ZS1idXR0b24td2lkdGg6IDE1MHB4XG4kZGVsZXRlLWJ1dHRvbi1oZWlnaHQ6IDUwcHhcblxuLy8gQ29udmV5YW5jZSBTdHlsaW5nXG4kcmVzb3VyY2UtY29sb3I6ICM2N0YxM0YiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-output-container',
                templateUrl: './output-container.component.html',
                styleUrls: ['./output-container.component.sass']
            }]
    }], function () { return [{ type: _services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__["OutputManagerService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rete-modules/services/item.service */ "x7rl");
/* harmony import */ var src_app_rete_modules_services_node_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/rete-modules/services/node.service */ "5bZ5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/item-image-component/item-image.component */ "Hvuu");
/* harmony import */ var rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rete-angular-render-plugin */ "JLln");
/* harmony import */ var _shared_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/highlight-text.pipe */ "UYxj");









const _c0 = function (a0) { return [a0]; };
function NodeBrowserComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragstart", function NodeBrowserComponent_div_15_Template_div_dragstart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const nodeItem_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onDrag($event, nodeItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "kebab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "item-image", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nodeItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, nodeItem_r1.isCraftable() ? "crafted" : "resource")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, nodeItem_r1.name, ctx_r0.searchString), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedItem", nodeItem_r1.visibleItem());
} }
class NodeBrowserItem {
    constructor(name, type, data) {
        this.name = name;
        this.type = type;
        this.data = data;
        this.htmlName = this.name;
    }
    isCraftable() {
        return this.type == "item" && this.data.craftable;
    }
    visibleItem() {
        if (this.type == "item") {
            return this.data;
        }
        else {
            return this.data.item;
        }
    }
    getId() {
        if (this.type == "item") {
            return this.data.id;
        }
        else {
            return this.data.id;
        }
    }
}
;
class NodeBrowserComponent {
    constructor(itemService, nodeService) {
        this.itemService = itemService;
        this.nodeService = nodeService;
        this.filter = 0;
        this.searchString = "";
        this.nodeList = this.convertItemsToNodeBrowser(itemService.GetAllItems());
        setInterval(() => {
            this.updateBrowser();
        }, 500);
    }
    ngOnInit() {
    }
    onDrag(event, node) {
        let nodeType = "";
        if (this.filter == 0) {
            nodeType = node.isCraftable() ? "Crafter" : "Resource";
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
        else if (this.filter == 4) {
            nodeType = "Custom";
        }
        event.dataTransfer.setData("nodeType", nodeType);
        event.dataTransfer.setData("nodeId", node.getId());
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
    onCustomClicked() {
        this.filter = 4;
        this.filterItems();
    }
    onSearchChange() {
        this.searchString = this.searchString.toLowerCase();
        this.filterItems();
    }
    filterItems() {
        if (this.filter == 0 || this.filter == 3) {
            this.nodeList = this.convertItemsToNodeBrowser(this.itemService.GetAllItems());
        }
        if (this.filter == 1) {
            this.nodeList = this.convertItemsToNodeBrowser(this.itemService.GetAllNonCraftableItems());
        }
        if (this.filter == 2) {
            this.nodeList = this.convertItemsToNodeBrowser(this.itemService.GetAllCraftableItems());
        }
        if (this.filter == 4) {
            this.nodeList = this.convertNodesToNodeBrowser(this.nodeService.GetAllCustomNodes());
        }
        this.nodeList = this.nodeList.filter(value => {
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
    convertItemsToNodeBrowser(itemList) {
        let nodes = [];
        itemList.forEach((value) => {
            nodes.push(new NodeBrowserItem(value.name, "item", value));
        });
        return nodes;
    }
    convertNodesToNodeBrowser(nodeList) {
        let nodes = [];
        nodeList.forEach(value => {
            let data = {};
            data['id'] = value.id;
            data['item'] = this.itemService.GetItemFromId(103);
            nodes.push(new NodeBrowserItem(value.name, "node", data));
        });
        return nodes;
    }
    updateBrowser() {
        if (this.filter == 4) {
            this.filterItems();
        }
    }
}
NodeBrowserComponent.ɵfac = function NodeBrowserComponent_Factory(t) { return new (t || NodeBrowserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_rete_modules_services_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"])); };
NodeBrowserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NodeBrowserComponent, selectors: [["app-node-browser"]], decls: 16, vars: 7, consts: [[1, "node-browser-wrapper", "module-margin"], [1, "node-browser-button-header"], ["type", "button", 1, "btn", 3, "ngClass", "click"], [1, "right", "fill"], ["type", "search", "placeholder", "search", 3, "ngModel", "ngModelChange", "input"], [1, "node-browser-grid"], ["class", "node-browser-node", "draggable", "true", 3, "ngClass", "dragstart", 4, "ngFor", "ngForOf"], ["draggable", "true", 1, "node-browser-node", 3, "ngClass", "dragstart"], [1, "node-title", 3, "innerHTML"], [3, "selectedItem"]], template: function NodeBrowserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NodeBrowserComponent_Template_button_click_2_listener() { return ctx.onAllClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NodeBrowserComponent_Template_button_click_4_listener() { return ctx.onResourcesClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Resources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NodeBrowserComponent_Template_button_click_6_listener() { return ctx.onCraftableClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Craftable ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NodeBrowserComponent_Template_button_click_8_listener() { return ctx.onOutputClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Output ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NodeBrowserComponent_Template_button_click_10_listener() { return ctx.onCustomClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Custom Nodes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NodeBrowserComponent_Template_input_ngModelChange_13_listener($event) { return ctx.searchString = $event; })("input", function NodeBrowserComponent_Template_input_input_13_listener() { return ctx.onSearchChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NodeBrowserComponent_div_15_Template, 6, 10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.filter == 0 ? "btn-primary" : "btn-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.filter == 1 ? "btn-primary" : "btn-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.filter == 2 ? "btn-primary" : "btn-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.filter == 3 ? "btn-primary" : "btn-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.filter == 4 ? "btn-primary" : "btn-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nodeList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_5__["ItemImageComponent"]], pipes: [rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_6__["ɵd"], _shared_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_7__["HighlightSearchPipe"]], styles: [".node-browser-wrapper[_ngcontent-%COMP%] {\n  height: calc(100% - 60% - 3*10px);\n  min-height: 150px;\n  border: 2px solid black;\n  display: flex;\n  flex-direction: column;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n  margin-left: 10px;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.node-browser-grid[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  display: inline-grid;\n  grid-template-columns: repeat(10, 10%);\n  grid-auto-rows: minmax(125px, 50%);\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.node-browser-node[_ngcontent-%COMP%] {\n  margin: 8px;\n  padding: 10px;\n  border-radius: 10px;\n  display: block;\n}\n\n.node-browser-node.resource[_ngcontent-%COMP%] {\n  background-color: #40E06D;\n}\n\n.node-browser-node.crafted[_ngcontent-%COMP%] {\n  background-color: #F2C611;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL25vZGUtYnJvd3Nlci9ub2RlLWJyb3dzZXIuY29tcG9uZW50LnNhc3MiLCJzcmMvX2dsb2JhbHMuc2FzcyIsInNyYy9hcHAvcmV0ZS1tb2R1bGVzL19yZXRlX3ZhcmlhYmxlcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksaUNDRWtCO0VERGxCLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFGSjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBR0k7RUFDSSxrQkFBQTtBQURSOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDSTtFQUNJLHlCRXBCc0I7QUZxQjlCOztBQUNJO0VBQ0kseUJFdEJxQjtBRnVCN0IiLCJmaWxlIjoic3JjL2FwcC9yZXRlLW1vZHVsZXMvbm9kZS1icm93c2VyL25vZGUtYnJvd3Nlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2dsb2JhbHMnXG5AaW1wb3J0ICcuLi9yZXRlX3ZhcmlhYmxlcydcbiAgICBcbi5ub2RlLWJyb3dzZXItd3JhcHBlclxuICAgIGhlaWdodDogJG5vZGUtYnJvd3Nlci1oZWlnaHRcbiAgICBtaW4taGVpZ2h0OiAxNTBweFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICBcbi5ub2RlLWJyb3dzZXItYnV0dG9uLWhlYWRlclxuICAgIHdpZHRoOiAxMDAlXG4gICAgbWFyZ2luLXRvcDogMTBweFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4XG5cbiAgICAqXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweFxuXG4ubm9kZS1icm93c2VyLWdyaWRcbiAgICB3aWR0aDogMTAwJVxuICAgIGhlaWdodDogMTAwJVxuICAgIG1hcmdpbi10b3A6IDEwcHhcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWRcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCggMTAsIDEwJSlcbiAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDEyNXB4LCA1MCUpXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuXG5cbi5ub2RlLWJyb3dzZXItbm9kZVxuICAgIG1hcmdpbjogOHB4XG4gICAgcGFkZGluZzogMTBweFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcbiAgICBkaXNwbGF5OiBibG9ja1xuXG4gICAgJi5yZXNvdXJjZVxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbm9kZS1icm93c2VyLXJlc291cmNlLWNvbG9yXG5cbiAgICAmLmNyYWZ0ZWRcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5vZGUtYnJvd3Nlci1jcmFmdGVkLWNvbG9yXG5cbiIsIiRtb2R1bGUtbWFyZ2luLWxlZnQ6IDEwcHhcbiRtb2R1bGUtbWFyZ2luLXRvcDogMTBweFxuXG4kZ3JpZC13aWR0aDogNzUlXG4kZ3JpZC1oZWlnaHQ6IDYwJVxuXG4kbm9kZS1icm93c2VyLWhlaWdodDogY2FsYygxMDAlIC0gI3skZ3JpZC1oZWlnaHR9IC0gMyojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG5cbiRvdXRwdXQtd2lkdGg6IGNhbGMoMTAwJSAtICN7JGdyaWQtd2lkdGh9KVxuJG91dHB1dC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDIqI3skbW9kdWxlLW1hcmdpbi10b3B9KVxuXG4kZGVsZXRlLWJ1dHRvbi13aWR0aDogMTUwcHhcbiRkZWxldGUtYnV0dG9uLWhlaWdodDogNTBweFxuXG4vLyBDb252ZXlhbmNlIFN0eWxpbmdcbiRyZXNvdXJjZS1jb2xvcjogIzY3RjEzRiIsIkB1c2UgXCJzYXNzOm1hcFwiXG4gICAgXG4kbm9kZS1jb2xvcjogIzQwRTA2RFxuJG5vZGUtY29sb3Itc2VsZWN0ZWQ6ICM2M0ZGOTBcbiRub2RlLWNvbG9yLWNyaXRpY2FsLXBhdGg6ICNFMDQxNDFcbiRub2RlLWJvcmRlci1jb2xvcjogIzFDOTQzRVxuJG5vZGUtYm9yZGVyLWNvbG9yLXNlbGVjdGVkOiAjNDBFMDZEXG4kbm9kZS1ib3JkZXItY29sb3ItY3JpdGljYWwtcGF0aDogIzk0MEQwRFxuJG5vZGUtd2lkdGg6IDIwMHB4XG5cbiRjdXN0b20tbm9kZS13aWR0aDogNDAwcHhcblxuJG91dHB1dC1mb2N1cy1nbHlwaC1zaXplOiAzNXB4XG4kb3V0cHV0LWZvY3VzLWdseXBoLW1hcmdpbjogNXB4XG4kb3V0cHV0LWZvY3VzLWdseXBoLWNvbG9yOiAjRjVBMzAwXG5cbiRub2RlLWJyb3dzZXItcmVzb3VyY2UtY29sb3I6ICM0MEUwNkRcbiRub2RlLWJyb3dzZXItY3JhZnRlZC1jb2xvcjogI0YyQzYxMVxuXG4kc29ja2V0LXNpemU6IDI0cHhcbiRzb2NrZXQtbWFyZ2luOiA2cHhcbiRzb2NrZXQtY29sb3I6ICNFMDk1MkJcbiRzb2NrZXQtYm9yZGVyLWNvbG9yOiAjOTQ2NTIzXG5cbiRzcHJpdGUtc2NhbGU6IDJcblxuJHNvY2tldC1pdGVtLW1hcDogKCBcIlN0b25lXCI6ICM4ODgsIFwiR3Jhc3NcIjogIzE4MSwgXCJEaXJ0XCI6ICM2ODM2MTksIFwiQ29iYmxlc3RvbmVcIjogIzQ0NCwgXCJQbGFua3NcIjogI2I5OTA1YiwgXCJMb2dzXCI6ICM3NDQwMTAsIFwiMlwiOiAjODg4LCBcIjNcIjogIzg4OCwpXG5cbkBmdW5jdGlvbiBnZXQtaXRlbS1jb2xvcigkaXRlbSkgXG4gICAgQHJldHVybiBtYXAtZ2V0KCRzb2NrZXQtaXRlbS1tYXAsICRpdGVtKVxuXG5AZnVuY3Rpb24gZ2V0LWl0ZW0tYm9yZGVyKCRpdGVtKVxuICAgICRjb2xvcjogZ2V0LWl0ZW0tY29sb3IoJGl0ZW0pXG4gICAgQGlmIGxpZ2h0bmVzcygkY29sb3IpID4gNDAlXG4gICAgICAgIEByZXR1cm4gZGFya2VuKCRjb2xvciwgMjUlKVxuICAgIEBlbHNlIFxuICAgICAgICBAcmV0dXJuIGxpZ2h0ZW4oJGNvbG9yLCAyNSUpIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NodeBrowserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-node-browser',
                templateUrl: './node-browser.component.html',
                styleUrls: ['./node-browser.component.sass']
            }]
    }], function () { return [{ type: src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"] }, { type: src_app_rete_modules_services_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"] }]; }, null); })();


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
            id: 2,
            name: "Bookshelves",
            inputs: [338, 334, 23],
            outputs: {
                92: {
                    inputRate: { 338: .11, 334: .33, 23: .66 },
                    createdAmount: 1
                }
            },
        }
    ]
};
class FakeNodeService extends _node_service__WEBPACK_IMPORTED_MODULE_0__["NodeService"] {
    constructor() {
        super();
        this.lastValidIndex = 0;
        fakeDatabase.nodes.forEach((value) => {
            if (value.id > this.lastValidIndex) {
                this.lastValidIndex = value.id;
            }
        });
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
        this.lastValidIndex++;
        data.id = this.lastValidIndex;
        fakeDatabase.nodes.push(data);
        return this.lastValidIndex;
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