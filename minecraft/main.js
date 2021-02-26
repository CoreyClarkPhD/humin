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
RateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RateComponent, selectors: [["rate-component"]], inputs: { readonly: "readonly", placeholder: "placeholder", text: "text" }, outputs: { onChange: "onChange" }, decls: 4, vars: 4, consts: [[1, "rate-container"], ["type", "text", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');", 1, "styled-input", 3, "ngModel", "readonly", "placeholder", "ngModelChange", "change"], [1, "helper-text"]], template: function RateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RateComponent_Template_input_ngModelChange_1_listener($event) { return ctx.perHourString = $event; })("change", function RateComponent_Template_input_change_1_listener() { return ctx.onInputChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.perHourString)("readonly", ctx.readonly)("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".rate-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n.rate-container[_ngcontent-%COMP%]   .helper-text[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 12px;\n  text-align: center;\n  color: #707070;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL3NoYXJlZC9yYXRlLWNvbXBvbmVudC9yYXRlLmNvbXBvbmVudC5zYXNzIiwic3JjL19nbG9iYWxzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREo7QUFHSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQ3dCTztBRHpCZiIsImZpbGUiOiJzcmMvYXBwL3JldGUtbW9kdWxlcy9zaGFyZWQvcmF0ZS1jb21wb25lbnQvcmF0ZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL19nbG9iYWxzJ1xuICAgIFxuLnJhdGUtY29udGFpbmVyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgd2lkdGg6IDEwMCVcbiAgICBoZWlnaHQ6IDEwMCVcblxuICAgIC5oZWxwZXItdGV4dFxuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICBmb250LXNpemU6IDEycHhcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZGVmYXVsdFxuIiwiLy8gIyMjIyMjIyMjIyBHbG9iYWwgTGF5b3V0IFNldHRpbmdzICMjIyMjIyMjIyNcbiRncmlkLXdpZHRoOiA3NSVcbiRncmlkLWhlaWdodDogNjAlXG5cbi8vIFNwYWNpbmdzIGJldHdlZW4gbW9kdWxlc1xuJG1vZHVsZS1tYXJnaW4tbGVmdDogMTBweFxuJG1vZHVsZS1tYXJnaW4tdG9wOiAkbW9kdWxlLW1hcmdpbi1sZWZ0XG5cbiRvdXRwdXQtd2lkdGg6IGNhbGMoMTAwJSAtICN7JGdyaWQtd2lkdGh9KVxuJG91dHB1dC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDIqI3skbW9kdWxlLW1hcmdpbi10b3B9KVxuICAgIFxuJGJ1dHRvbi1oZWlnaHQ6IDQwcHhcblxuLy8gRGVsZXRlIHNwZWNpZmljIGJ1dHRvbiBzZXR0aW5nc1xuJGRlbGV0ZS1idXR0b24td2lkdGg6IDE1MHB4XG4kZGVsZXRlLWJ1dHRvbi1oZWlnaHQ6IDUwcHhcblxuLy8gSW52ZW50b3J5IFdpZGdldCBoZWlnaHRcbiRyZXNvdXJjZS1jaGlsZHJlbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDMqI3skbW9kdWxlLW1hcmdpbi10b3B9KVxuXG4kYm9yZGVyLXRoaWNrbmVzczogMnB4XG5cblxuLy8gIyMjIyMjIyMjIyBDb2xvciBEZWZpbml0aW9ucyAjIyMjIyMjIyMjXG4kY3VzdG9tLXNlbGVjdGVkOiNGMEVDRkRcbiRjdXN0b20taGlnaGxpZ2h0OiNDNEI1RjZcbiRvdXRwdXQtc2VsZWN0ZWQ6ICNDQUYzRjZcbiRvdXRwdXQtaGlnaGxpZ2h0OiMyRUQwREJcbiRjcmFmdGluZy1zZWxlY3RlZDojRjZFRENBXG4kY3JhZnRpbmctaGlnaGxpZ2h0OiNEQkI2MkVcbiRyZXNvdXJjZS1zZWxlY3RlZDojRDhGQ0NFXG4kcmVzb3VyY2UtaGlnaGxpZ2h0OiM2NkYyM0ZcbiRtaW5lY3JhZnQtc2VsZWN0ZWQ6ICNhY2I2YzNcbiRtaW5lY3JhZnQtaGlnaGxpZ2h0OiAjQThBQUIzXG5cbiRjb2xvci1kZWZhdWx0OiM3MDcwNzBcbiRjb2xvci1kZWZhdWx0LWRhcms6IzJBMkEyQVxuJGNvbG9yLWRlZmF1bHQtaGlnaGxpZ2h0OiNDQ0NDQ0NcblxuLy8gUGluc3RyaXBlIERlZmluaXRpb25zXG4kY3JpdGljYWwtcGF0aC1zZWxlY3RlZDojRkZEQUQwXG4kY3JpdGljYWwtcGF0aC1oaWdobGlnaHQ6I0ZGNkY0NVxuJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0LWFscGhhOiByZ2JhKCAkY3JpdGljYWwtcGF0aC1oaWdobGlnaHQsIC41KVxuXG5cbi8vICMjIyMjIyMjIyMgU3ByaXRlIFJlbmRlcmluZyBTZXR0aW5nc1xuJHNwcml0ZS1zaXplOiAzMnB4XG4kc3ByaXRlLXNjYWxlOiAyLjJcblxuLy8gSW4gbnVtYmVyIG9mIHNwcml0ZXNcbiRzcHJpdGUtc2hlZXQtaG9yaXpvbnRhbC1kaW1lbnNpb25zOiAxNlxuJHNwcml0ZS1zaGVldC12ZXJ0aWNhbC1kaW1lbnNpb25zOiAzNVxuXG4kc3ByaXRlLXdpZHRoOiBjYWxjKCN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zY2FsZX0pXG4kc3ByaXRlLXNoZWV0LXdpZHRoOiBjYWxjKCAjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2hlZXQtaG9yaXpvbnRhbC1kaW1lbnNpb25zICogJHNwcml0ZS1zY2FsZX0pXG4kc3ByaXRlLXNoZWV0LWhlaWdodDogY2FsYyggI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNoZWV0LXZlcnRpY2FsLWRpbWVuc2lvbnMgKiAkc3ByaXRlLXNjYWxlfSlcblxuLy8gU3ByaXRlIGltYWdlIGRpc3BsYXkgc2V0dGluZ3NcbiRzcHJpdGUtYm9yZGVyLXBhZGRpbmc6IDVweCJdfQ== */"] });
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

/***/ "3OuN":
/*!*****************************************************!*\
  !*** ./src/app/rete-modules/shared/custom.model.ts ***!
  \*****************************************************/
/*! exports provided: ShareLevel, CustomNodeMetadata, CustomNodeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareLevel", function() { return ShareLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomNodeMetadata", function() { return CustomNodeMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomNodeData", function() { return CustomNodeData; });
var ShareLevel;
(function (ShareLevel) {
    ShareLevel[ShareLevel["Personal"] = 0] = "Personal";
    ShareLevel[ShareLevel["Group"] = 1] = "Group";
    ShareLevel[ShareLevel["Classroom"] = 2] = "Classroom";
})(ShareLevel || (ShareLevel = {}));
class CustomNodeMetadata {
}
class CustomNodeData {
    constructor(inputs, name = "NOT-INSTANCIATED", shareLevel = ShareLevel.Personal) {
        this.meta = { name: name, shareLevel: shareLevel, icon: 1 };
        this.inputs = inputs;
        this.outputs = [];
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
/* harmony import */ var _shared_custom_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/custom.model */ "3OuN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




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
        let customNodeData = new _shared_custom_model__WEBPACK_IMPORTED_MODULE_1__["CustomNodeData"]([]);
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
NodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NodeService, factory: NodeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NodeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
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
/* harmony import */ var _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../inventory/inventory.module */ "cLqD");
/* harmony import */ var _grid_custom_node_modal_custom_node_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid/custom-node-modal/custom-node-modal.component */ "oDxO");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../general/general.module */ "hxwH");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_fake_node_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/fake-node.service */ "o2BI");
/* harmony import */ var _services_fake_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/fake-item.service */ "BoCh");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/item.service */ "x7rl");
/* harmony import */ var _nodes_controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nodes/controls/resource-control/resource-control */ "AnjU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./grid/grid.component */ "OP9P");
/* harmony import */ var rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rete-angular-render-plugin */ "JLln");
/* harmony import */ var _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nodes/base-node/base-node.component */ "jDfs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node-browser/node-browser.component */ "nu8m");
/* harmony import */ var _services_node_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/node.service */ "5bZ5");
/* harmony import */ var _shared_rate_component_rate_component_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/rate-component/rate-component.component */ "14A6");
/* harmony import */ var _node_browser_node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./node-browser/node-browser-item/node-browser-item.component */ "BSiW");



















class CustomReteModule {
}
CustomReteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: CustomReteModule });
CustomReteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function CustomReteModule_Factory(t) { return new (t || CustomReteModule)(); }, providers: [{ provide: _services_item_service__WEBPACK_IMPORTED_MODULE_6__["ItemService"], useClass: _services_fake_item_service__WEBPACK_IMPORTED_MODULE_5__["FakeItemService"] }, { provide: _services_node_service__WEBPACK_IMPORTED_MODULE_15__["NodeService"], useClass: _services_fake_node_service__WEBPACK_IMPORTED_MODULE_4__["FakeNodeService"] }], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_11__["ReteModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_2__["GeneralModule"],
            _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_0__["InventoryModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CustomReteModule, { declarations: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_10__["GridComponent"],
        _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_12__["BaseNodeComponent"],
        _nodes_controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_7__["ResourceComponent"],
        _node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_14__["NodeBrowserComponent"],
        _shared_rate_component_rate_component_component__WEBPACK_IMPORTED_MODULE_16__["RateComponent"],
        _grid_custom_node_modal_custom_node_modal_component__WEBPACK_IMPORTED_MODULE_1__["CustomNodeModal"],
        _node_browser_node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_17__["NodeBrowserItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_11__["ReteModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_2__["GeneralModule"],
        _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_0__["InventoryModule"]], exports: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_10__["GridComponent"], _node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_14__["NodeBrowserComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](CustomReteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"],
        args: [{
                declarations: [
                    _grid_grid_component__WEBPACK_IMPORTED_MODULE_10__["GridComponent"],
                    _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_12__["BaseNodeComponent"],
                    _nodes_controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_7__["ResourceComponent"],
                    _node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_14__["NodeBrowserComponent"],
                    _shared_rate_component_rate_component_component__WEBPACK_IMPORTED_MODULE_16__["RateComponent"],
                    _grid_custom_node_modal_custom_node_modal_component__WEBPACK_IMPORTED_MODULE_1__["CustomNodeModal"],
                    _node_browser_node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_17__["NodeBrowserItemComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                    rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_11__["ReteModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_2__["GeneralModule"],
                    _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_0__["InventoryModule"],
                ],
                providers: [{ provide: _services_item_service__WEBPACK_IMPORTED_MODULE_6__["ItemService"], useClass: _services_fake_item_service__WEBPACK_IMPORTED_MODULE_5__["FakeItemService"] }, { provide: _services_node_service__WEBPACK_IMPORTED_MODULE_15__["NodeService"], useClass: _services_fake_node_service__WEBPACK_IMPORTED_MODULE_4__["FakeNodeService"] }],
                exports: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_10__["GridComponent"], _node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_14__["NodeBrowserComponent"]],
                entryComponents: [_nodes_controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_7__["ResourceComponent"],
                    _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_12__["BaseNodeComponent"]
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
/* harmony import */ var _general_model_item_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../general/model/item.model */ "UKeZ");
/* harmony import */ var _shared_rate_component_rate_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/rate-component/rate-component.component */ "14A6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rete */ "9dUG");
/* harmony import */ var _general_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../general/item-image-component/item-image.component */ "FjGt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ResourceComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "rate-component", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function ResourceComponent_div_3_Template_rate_component_onChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.onRateChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_shared_rate_component_rate_component_component__WEBPACK_IMPORTED_MODULE_1__["RateComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.rateComponent = _t.first);
    } }, decls: 4, vars: 3, consts: [[1, "resource-control"], [1, "image-container"], [1, "center", 3, "selectedItem", "criticalPath"], [4, "ngIf"], [1, "rate-container"], [3, "readonly", "placeholder", "text", "onChange"]], template: function ResourceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "item-image", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ResourceComponent_div_3_Template, 3, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedItem", ctx.selectedItem)("criticalPath", ctx.criticalPath);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.disableRate);
    } }, directives: [_general_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_4__["ItemImageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_rate_component_rate_component_component__WEBPACK_IMPORTED_MODULE_1__["RateComponent"]], styles: [".image-container[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.rate-container[_ngcontent-%COMP%] {\n  width: 75%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL25vZGVzL2NvbnRyb2xzL3Jlc291cmNlLWNvbnRyb2wvcmVzb3VyY2UtY29udHJvbC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUJBQUE7QUFESjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9yZXRlLW1vZHVsZXMvbm9kZXMvY29udHJvbHMvcmVzb3VyY2UtY29udHJvbC9yZXNvdXJjZS1jb250cm9sLnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9fZ2xvYmFscydcbiAgICBcbi5pbWFnZS1jb250YWluZXJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4XG5cbi5yYXRlLWNvbnRhaW5lclxuICAgIHdpZHRoOiA3NSVcbiAgICBtYXJnaW46IGF1dG8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ResourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                templateUrl: "./resource-control.html",
                styleUrls: ["./resource-control.sass",]
            }]
    }], null, { rateComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_shared_rate_component_rate_component_component__WEBPACK_IMPORTED_MODULE_1__["RateComponent"]]
        }] }); })();
class ResourceControl extends rete__WEBPACK_IMPORTED_MODULE_3__["Control"] {
    constructor(emitter, key, disableRate = false) {
        super(key);
        this.emitter = emitter;
        this.key = key;
        this.disableRate = disableRate;
        this.component = ResourceComponent;
        this.props = {
            selectedItem: _general_model_item_model__WEBPACK_IMPORTED_MODULE_0__["Item"],
            readonly: false,
            disableRate: this.disableRate,
            changeRate: v => this.onChangeRate(v),
            mounted: () => {
                this.setInitialItem();
            },
            rateComponent: _shared_rate_component_rate_component_component__WEBPACK_IMPORTED_MODULE_1__["RateComponent"],
            criticalPath: false,
        };
    }
    onChangeRate(rate) {
        this.props.rateComponent.setRate(rate);
        this.putData('perHour', rate);
        this.emitter.trigger('process');
    }
    // Used when you want to just set the visual
    setRate(rate) {
        this.props.rateComponent.setRate(rate);
    }
    setInitialItem() {
        let item = this.getData(this.key);
        this.props.selectedItem = item;
        this.putData(this.key, item);
        this.putData('amount', (item && item.craftable) ? item.recipe.createdAmount : 1);
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

/***/ "B20Z":
/*!************************************************************************!*\
  !*** ./src/app/inventory/services/fake-minecraft-inventory.service.ts ***!
  \************************************************************************/
/*! exports provided: FakeMinecraftInventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeMinecraftInventoryService", function() { return FakeMinecraftInventoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minecraft-inventory.service */ "v5B+");



let fake_db = {
    current_inventory: [
        {
            slot: 16,
            id: 1,
            quantity: 1,
            metadata: {}
        },
        {
            slot: 2,
            id: 5,
            quantity: 2,
            metadata: {}
        },
        {
            slot: 5,
            id: 5,
            quantity: 5,
            metadata: {}
        },
        {
            slot: 7,
            id: 5,
            quantity: 7,
            metadata: {}
        },
        {
            slot: 8,
            id: 5,
            quantity: 8,
            metadata: {}
        },
        {
            slot: 9,
            id: 5,
            quantity: 22,
            metadata: {}
        },
        {
            slot: 13,
            id: 5,
            quantity: 22,
            metadata: {}
        },
        {
            slot: 17,
            id: 5,
            quantity: 22,
            metadata: {}
        },
        {
            slot: 18,
            id: 5,
            quantity: 22,
            metadata: {}
        },
        {
            slot: 25,
            id: 5,
            quantity: 22,
            metadata: {}
        },
        {
            slot: 27,
            id: 5,
            quantity: 22,
            metadata: {}
        },
        {
            slot: 28,
            id: 5,
            quantity: 22,
            metadata: {}
        },
        {
            slot: 30,
            id: 5,
            quantity: 22,
            metadata: {}
        },
        {
            slot: 35,
            id: 5,
            quantity: 22,
            metadata: {}
        }
    ],
    time_series: [
        {
            time: 1613018055147,
            items: [
                {
                    id: 1,
                    quantity: 15
                },
                {
                    id: 5,
                    quantity: 5
                }
            ]
        },
        {
            time: 1613018115147,
            items: [
                {
                    id: 1,
                    quantity: 23
                },
                {
                    id: 5,
                    quantity: 20
                }
            ]
        },
        {
            time: 1613018175147,
            items: [
                {
                    id: 1,
                    quantity: 84
                },
                {
                    id: 5,
                    quantity: 40
                }
            ]
        },
        {
            time: 1613018235147,
            items: [
                {
                    id: 1,
                    quantity: 160
                },
                {
                    id: 5,
                    quantity: 35
                }
            ]
        },
    ],
};
class FakeMinecraftInventoryService extends _minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_1__["MinecraftInventoryService"] {
    constructor() {
        super();
        this.mostRecentTimeMs = 1613018235147;
        this.itemOneQuantity = 84;
        this.itemTwoQuantity = 40;
        setInterval(() => {
            this.FakeTimeSeriesUpdate();
        }, 5000);
    }
    GetAllInventoryItems() {
        return fake_db.current_inventory;
    }
    GetInventoryItemAverage(id) {
        return this.GetAverageFromTimeSeries(id);
    }
    GetTimeSeries() {
        return fake_db.time_series;
    }
    FakeTimeSeriesUpdate() {
        this.mostRecentTimeMs += 5000;
        this.itemOneQuantity += (Math.random() - .5) * 20;
        this.itemTwoQuantity += (Math.random() - .5) * 20;
        this.itemOneQuantity = this.itemOneQuantity > 0 ? this.itemOneQuantity : 0;
        this.itemTwoQuantity = this.itemTwoQuantity > 0 ? this.itemTwoQuantity : 0;
        fake_db.time_series.push({ time: this.mostRecentTimeMs, items: [{ id: 1, quantity: this.itemOneQuantity }, { id: 5, quantity: this.itemTwoQuantity }] });
        this.InventoryUpdateCallbacks();
    }
}
FakeMinecraftInventoryService.ɵfac = function FakeMinecraftInventoryService_Factory(t) { return new (t || FakeMinecraftInventoryService)(); };
FakeMinecraftInventoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FakeMinecraftInventoryService, factory: FakeMinecraftInventoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeMinecraftInventoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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

/***/ "BSiW":
/*!********************************************************************************************!*\
  !*** ./src/app/rete-modules/node-browser/node-browser-item/node-browser-item.component.ts ***!
  \********************************************************************************************/
/*! exports provided: NodeBrowserFilter, NodeBrowserItem, NodeBrowserItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeBrowserFilter", function() { return NodeBrowserFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeBrowserItem", function() { return NodeBrowserItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeBrowserItemComponent", function() { return NodeBrowserItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _general_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../general/item-image-component/item-image.component */ "FjGt");
/* harmony import */ var rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rete-angular-render-plugin */ "JLln");





function NodeBrowserItemComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NodeBrowserItemComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NodeBrowserItemComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
var NodeBrowserFilter;
(function (NodeBrowserFilter) {
    NodeBrowserFilter[NodeBrowserFilter["ALL"] = 0] = "ALL";
    NodeBrowserFilter[NodeBrowserFilter["RESOURCE"] = 1] = "RESOURCE";
    NodeBrowserFilter[NodeBrowserFilter["CRAFTER"] = 2] = "CRAFTER";
    NodeBrowserFilter[NodeBrowserFilter["OUTPUT"] = 3] = "OUTPUT";
    NodeBrowserFilter[NodeBrowserFilter["CUSTOM"] = 4] = "CUSTOM";
})(NodeBrowserFilter || (NodeBrowserFilter = {}));
class CustomItemData {
}
class NodeBrowserItem {
    constructor(name, type, data) {
        this.name = name;
        this.type = type;
        this.data = data;
        this.htmlName = this.name;
    }
}
;
class NodeBrowserItemComponent {
    constructor() { }
    ngOnInit() {
    }
    onDrag(event) {
        let nodeType = "";
        if (this.filter == 0) {
            nodeType = this.getType();
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
        event.dataTransfer.setData("nodeId", this.getId());
        event.dataTransfer.effectAllowed = "copy";
    }
    getType() {
        if (this.filter != NodeBrowserFilter.OUTPUT) {
            if (this.nodeItem.type == "item") {
                let item = this.nodeItem.data;
                return item.craftable ? "Crafter" : "Resource";
            }
            else {
                return "Custom";
            }
        }
        if (this.filter == NodeBrowserFilter.OUTPUT) {
            if (this.nodeItem.type == "item") {
                return "Output";
            }
            else {
                return "Custom";
            }
        }
    }
    getItem() {
        if (this.nodeItem.type == "item") {
            return this.nodeItem.data;
        }
        else {
            let customData = this.nodeItem.data;
            return customData.item;
        }
    }
    getId() {
        return this.nodeItem.data.id;
    }
}
NodeBrowserItemComponent.ɵfac = function NodeBrowserItemComponent_Factory(t) { return new (t || NodeBrowserItemComponent)(); };
NodeBrowserItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NodeBrowserItemComponent, selectors: [["node-browser-item"]], inputs: { nodeItem: "nodeItem", filter: "filter" }, decls: 9, vars: 10, consts: [["draggable", "true", 1, "node-item", 3, "ngClass", "dragstart"], [1, "background-image"], ["class", "resource-image", 4, "ngIf"], ["class", "crafting-image", 4, "ngIf"], ["class", "output-image", 4, "ngIf"], [1, "node-item-title", 3, "innerHTML"], [1, "node-item-body"], [3, "selectedItem"], [1, "resource-image"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-bricks"], ["fill-rule", "evenodd", "d", "M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5v-3zM3 4v2h4.5V4H3zm5.5 0v2H13V4H8.5zM3 10v2h4.5v-2H3zm5.5 0v2H13v-2H8.5zM1 1v2h3.5V1H1zm4.5 0v2H15V1H5.5zM1 7v2h3.5V7H1zm4.5 0v2h5V7h-5zm6 0v2H15V7h-3.5zM1 13v2h3.5v-2H1zm4.5 0v2h5v-2h-5zm6 0v2H15v-2h-3.5z"], [1, "crafting-image"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-hammer"], ["d", "M9.812 1.952a.5.5 0 0 1-.312.89c-1.671 0-2.852.596-3.616 1.185L4.857 5.073V6.21a.5.5 0 0 1-.146.354L3.425 7.853a.5.5 0 0 1-.708 0L.146 5.274a.5.5 0 0 1 0-.706l1.286-1.29a.5.5 0 0 1 .354-.146H2.84C4.505 1.228 6.216.862 7.557 1.04a5.009 5.009 0 0 1 2.077.782l.178.129z"], ["fill-rule", "evenodd", "d", "M6.012 3.5a.5.5 0 0 1 .359.165l9.146 8.646A.5.5 0 0 1 15.5 13L14 14.5a.5.5 0 0 1-.756-.056L4.598 5.297a.5.5 0 0 1 .048-.65l1-1a.5.5 0 0 1 .366-.147z"], [1, "output-image"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-minecart"], ["fill-rule", "evenodd", "d", "M4 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82l1.313 7h11.17l1.313-7H1.102z"]], template: function NodeBrowserItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragstart", function NodeBrowserItemComponent_Template_div_dragstart_0_listener($event) { return ctx.onDrag($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "kebab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NodeBrowserItemComponent_div_3_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NodeBrowserItemComponent_div_4_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NodeBrowserItemComponent_div_5_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "item-image", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.getType())));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getType() == "Resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getType() == "Crafter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getType() == "Output");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.nodeItem.htmlName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedItem", ctx.getItem());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _general_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_2__["ItemImageComponent"]], pipes: [rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_3__["ɵd"]], styles: [".node-item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #ff0;\n  border: 2px solid #707070;\n  border-radius: 5px;\n  position: relative;\n  cursor: pointer;\n}\n.node-item[_ngcontent-%COMP%]   .background-image[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 10px;\n  right: 0;\n  z-index: 0;\n}\n.node-item[_ngcontent-%COMP%]   .background-image[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #CCCCCC;\n  margin: 10%;\n  width: 80%;\n  height: 80%;\n}\n.node-item[_ngcontent-%COMP%]   .node-item-title[_ngcontent-%COMP%] {\n  height: 35px;\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  width: calc(100% + 4px);\n  border: 2px solid #707070;\n  border-radius: 5px 5px 0px 0px;\n  text-align: center;\n  padding-top: 4px;\n}\n.node-item.resource[_ngcontent-%COMP%] {\n  background-color: #D8FCCE;\n}\n.node-item.resource[_ngcontent-%COMP%]   .node-item-title[_ngcontent-%COMP%] {\n  background-color: #66F23F;\n}\n.node-item.crafter[_ngcontent-%COMP%] {\n  background-color: #F6EDCA;\n}\n.node-item.crafter[_ngcontent-%COMP%]   .node-item-title[_ngcontent-%COMP%] {\n  background-color: #DBB62E;\n}\n.node-item.output[_ngcontent-%COMP%] {\n  background-color: #CAF3F6;\n}\n.node-item.output[_ngcontent-%COMP%]   .node-item-title[_ngcontent-%COMP%] {\n  background-color: #2ED0DB;\n}\n.node-item.custom[_ngcontent-%COMP%] {\n  background-color: #F0ECFD;\n}\n.node-item.custom[_ngcontent-%COMP%]   .node-item-title[_ngcontent-%COMP%] {\n  background-color: #C4B5F6;\n}\n.node-item[_ngcontent-%COMP%]   .node-item-body[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL25vZGUtYnJvd3Nlci9ub2RlLWJyb3dzZXItaXRlbS9ub2RlLWJyb3dzZXItaXRlbS5jb21wb25lbnQuc2FzcyIsInNyYy9fZ2xvYmFscy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7QUFGSjtBQUlJO0VBQ1Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUZaO0FBSVk7RUFDSSxjQ2dCUztFRGZULFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUZoQjtBQUlJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUVBLHlCQUFBO0VBQ0EsOEJBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0FBSlI7QUFNSTtFQUNJLHlCQ1ZXO0FETW5CO0FBS1E7RUFDSSx5QkNYUTtBRFFwQjtBQUtJO0VBQ0kseUJDakJXO0FEY25CO0FBSVE7RUFDSSx5QkNsQlE7QURnQnBCO0FBSUk7RUFDSSx5QkN4QlU7QURzQmxCO0FBR1E7RUFDSSx5QkN6Qk07QUR3QmxCO0FBR0k7RUFDSSx5QkMvQlM7QUQ4QmpCO0FBRVE7RUFDSSx5QkNoQ007QURnQ2xCO0FBR0k7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0FBRFIiLCJmaWxlIjoic3JjL2FwcC9yZXRlLW1vZHVsZXMvbm9kZS1icm93c2VyL25vZGUtYnJvd3Nlci1pdGVtL25vZGUtYnJvd3Nlci1pdGVtLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vX2dsb2JhbHMnXG5cbi5ub2RlLWl0ZW1cbiAgICB3aWR0aDogMTAwJVxuICAgIGhlaWdodDogMTAwJVxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjBcbiAgICBib3JkZXI6ICRib3JkZXItdGhpY2tuZXNzIHNvbGlkICRjb2xvci1kZWZhdWx0XG4gICAgYm9yZGVyLXJhZGl1czogNXB4XG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG5cbiAgICBjdXJzb3I6IHBvaW50ZXJcblxuICAgIC5iYWNrZ3JvdW5kLWltYWdlXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCVcbiAgICAgICAgICAgIHRvcDogMTBweFxuICAgICAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgICAgIHotaW5kZXg6IDBcblxuICAgICAgICAgICAgc3ZnXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1kZWZhdWx0LWhpZ2hsaWdodFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAlXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJVxuICAgICAgICAgICAgICAgIGhlaWdodDogODAlXG5cbiAgICAubm9kZS1pdGVtLXRpdGxlXG4gICAgICAgIGhlaWdodDogMzVweFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgICAgdG9wOiAtJGJvcmRlci10aGlja25lc3NcbiAgICAgICAgcmlnaHQ6IC0kYm9yZGVyLXRoaWNrbmVzc1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgI3syICogJGJvcmRlci10aGlja25lc3N9KVxuXG4gICAgICAgIGJvcmRlcjogJGJvcmRlci10aGlja25lc3Mgc29saWQgJGNvbG9yLWRlZmF1bHRcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4XG5cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHhcblxuICAgICYucmVzb3VyY2VcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlc291cmNlLXNlbGVjdGVkXG4gICAgICAgIC5ub2RlLWl0ZW0tdGl0bGVcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZXNvdXJjZS1oaWdobGlnaHRcblxuICAgICYuY3JhZnRlclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3JhZnRpbmctc2VsZWN0ZWRcbiAgICAgICAgLm5vZGUtaXRlbS10aXRsZVxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNyYWZ0aW5nLWhpZ2hsaWdodFxuXG4gICAgJi5vdXRwdXRcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG91dHB1dC1zZWxlY3RlZFxuICAgICAgICAubm9kZS1pdGVtLXRpdGxlXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3V0cHV0LWhpZ2hsaWdodFxuXG4gICAgJi5jdXN0b21cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGN1c3RvbS1zZWxlY3RlZFxuICAgICAgICAubm9kZS1pdGVtLXRpdGxlXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3VzdG9tLWhpZ2hsaWdodFxuXG5cbiAgICAubm9kZS1pdGVtLWJvZHlcbiAgICAgICAgbWFyZ2luLXRvcDogMzVweFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZVxuIiwiLy8gIyMjIyMjIyMjIyBHbG9iYWwgTGF5b3V0IFNldHRpbmdzICMjIyMjIyMjIyNcbiRncmlkLXdpZHRoOiA3NSVcbiRncmlkLWhlaWdodDogNjAlXG5cbi8vIFNwYWNpbmdzIGJldHdlZW4gbW9kdWxlc1xuJG1vZHVsZS1tYXJnaW4tbGVmdDogMTBweFxuJG1vZHVsZS1tYXJnaW4tdG9wOiAkbW9kdWxlLW1hcmdpbi1sZWZ0XG5cbiRvdXRwdXQtd2lkdGg6IGNhbGMoMTAwJSAtICN7JGdyaWQtd2lkdGh9KVxuJG91dHB1dC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDIqI3skbW9kdWxlLW1hcmdpbi10b3B9KVxuICAgIFxuJGJ1dHRvbi1oZWlnaHQ6IDQwcHhcblxuLy8gRGVsZXRlIHNwZWNpZmljIGJ1dHRvbiBzZXR0aW5nc1xuJGRlbGV0ZS1idXR0b24td2lkdGg6IDE1MHB4XG4kZGVsZXRlLWJ1dHRvbi1oZWlnaHQ6IDUwcHhcblxuLy8gSW52ZW50b3J5IFdpZGdldCBoZWlnaHRcbiRyZXNvdXJjZS1jaGlsZHJlbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDMqI3skbW9kdWxlLW1hcmdpbi10b3B9KVxuXG4kYm9yZGVyLXRoaWNrbmVzczogMnB4XG5cblxuLy8gIyMjIyMjIyMjIyBDb2xvciBEZWZpbml0aW9ucyAjIyMjIyMjIyMjXG4kY3VzdG9tLXNlbGVjdGVkOiNGMEVDRkRcbiRjdXN0b20taGlnaGxpZ2h0OiNDNEI1RjZcbiRvdXRwdXQtc2VsZWN0ZWQ6ICNDQUYzRjZcbiRvdXRwdXQtaGlnaGxpZ2h0OiMyRUQwREJcbiRjcmFmdGluZy1zZWxlY3RlZDojRjZFRENBXG4kY3JhZnRpbmctaGlnaGxpZ2h0OiNEQkI2MkVcbiRyZXNvdXJjZS1zZWxlY3RlZDojRDhGQ0NFXG4kcmVzb3VyY2UtaGlnaGxpZ2h0OiM2NkYyM0ZcbiRtaW5lY3JhZnQtc2VsZWN0ZWQ6ICNhY2I2YzNcbiRtaW5lY3JhZnQtaGlnaGxpZ2h0OiAjQThBQUIzXG5cbiRjb2xvci1kZWZhdWx0OiM3MDcwNzBcbiRjb2xvci1kZWZhdWx0LWRhcms6IzJBMkEyQVxuJGNvbG9yLWRlZmF1bHQtaGlnaGxpZ2h0OiNDQ0NDQ0NcblxuLy8gUGluc3RyaXBlIERlZmluaXRpb25zXG4kY3JpdGljYWwtcGF0aC1zZWxlY3RlZDojRkZEQUQwXG4kY3JpdGljYWwtcGF0aC1oaWdobGlnaHQ6I0ZGNkY0NVxuJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0LWFscGhhOiByZ2JhKCAkY3JpdGljYWwtcGF0aC1oaWdobGlnaHQsIC41KVxuXG5cbi8vICMjIyMjIyMjIyMgU3ByaXRlIFJlbmRlcmluZyBTZXR0aW5nc1xuJHNwcml0ZS1zaXplOiAzMnB4XG4kc3ByaXRlLXNjYWxlOiAyLjJcblxuLy8gSW4gbnVtYmVyIG9mIHNwcml0ZXNcbiRzcHJpdGUtc2hlZXQtaG9yaXpvbnRhbC1kaW1lbnNpb25zOiAxNlxuJHNwcml0ZS1zaGVldC12ZXJ0aWNhbC1kaW1lbnNpb25zOiAzNVxuXG4kc3ByaXRlLXdpZHRoOiBjYWxjKCN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zY2FsZX0pXG4kc3ByaXRlLXNoZWV0LXdpZHRoOiBjYWxjKCAjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2hlZXQtaG9yaXpvbnRhbC1kaW1lbnNpb25zICogJHNwcml0ZS1zY2FsZX0pXG4kc3ByaXRlLXNoZWV0LWhlaWdodDogY2FsYyggI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNoZWV0LXZlcnRpY2FsLWRpbWVuc2lvbnMgKiAkc3ByaXRlLXNjYWxlfSlcblxuLy8gU3ByaXRlIGltYWdlIGRpc3BsYXkgc2V0dGluZ3NcbiRzcHJpdGUtYm9yZGVyLXBhZGRpbmc6IDVweCJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NodeBrowserItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'node-browser-item',
                templateUrl: './node-browser-item.component.html',
                styleUrls: ['./node-browser-item.component.sass']
            }]
    }], function () { return []; }, { nodeItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/rete-modules/services/item.service */ "x7rl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function OutputItemComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r3.name, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, data_r3.rate, "1.2-2"));
} }
function OutputItemComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OutputItemComponent_div_11_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const data_r4 = ctx.$implicit; return data_r4.rate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r4.name, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, data_r4.rate, "1.2-2"));
} }
function OutputItemComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OutputItemComponent_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.toggleDropdown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
class RelativeNodeData {
    constructor(id, name, rate) {
        this.id = id;
        this.name = name;
        this.rate = rate;
    }
}
class OutputItemComponent {
    constructor(outputManagerService, itemService) {
        this.outputManagerService = outputManagerService;
        this.itemService = itemService;
        this.dropdownPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputs = [];
        this.outputs = [];
    }
    ngOnInit() {
        this.outputManagerService.bindOnNodeUpdate(this.node.id, val => {
            this.node = val;
            console.log("Node Updated");
            this.updateInputs();
            this.updateOutputs();
        });
        this.updateInputs();
        this.updateOutputs();
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
    isCriticalPath() {
        return this.node.meta.criticalPath ? 'critical-path' : "";
    }
    updateInputs() {
        this.inputs = [];
        if (this.node.meta['type'] == 'output') {
            return;
        }
        let nodeTree = this.node.data['inputTree'];
        if (nodeTree) {
            nodeTree.forEach(nodeInput => {
                this.inputs.push(new RelativeNodeData(nodeInput.itemId, this.itemService.GetItemFromId(nodeInput.itemId).name, nodeInput.amount * nodeInput.perHour));
            });
        }
    }
    updateOutputs() {
        this.outputs = [];
        if (this.node.meta['type'] == "custom") {
            let customData = this.node.data['customization'];
            for (let outputIndex in customData.outputs) {
                let outputData = customData.outputs[outputIndex];
                let smallestRate = Infinity;
                for (let inputIndex in outputData.inputRate) {
                    let inputRate = outputData.inputRate[inputIndex];
                    let relativeInputData = this.inputs.find(value => {
                        return value.id == parseInt(inputIndex);
                    });
                    if (relativeInputData) {
                        if (inputRate * relativeInputData.rate < smallestRate) {
                            smallestRate = inputRate * relativeInputData.rate;
                        }
                    }
                }
                let outputId = parseInt(outputIndex);
                this.outputs.push(new RelativeNodeData(outputId, this.itemService.GetItemFromId(outputId).name, smallestRate));
            }
        }
        else {
            let item = this.node.data['resource'];
            this.outputs.push(new RelativeNodeData(item.id, item.name, Number(this.node.data['perHour']) * Number(this.node.data['amount'])));
        }
    }
}
OutputItemComponent.ɵfac = function OutputItemComponent_Factory(t) { return new (t || OutputItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__["OutputManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"])); };
OutputItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutputItemComponent, selectors: [["app-output-item"]], inputs: { node: "node" }, outputs: { dropdownPressed: "dropdownPressed" }, decls: 14, vars: 10, consts: [[1, "output-container", 3, "ngClass"], [1, "title-container", 3, "ngClass"], [1, "id-container"], [1, "title"], [1, "data-container"], [1, "data-input-container"], ["class", "node-rates", 4, "ngFor", "ngForOf"], [1, "data-output-container"], [1, "clear"], ["class", "dropdown-container", 3, "click", 4, "ngIf"], [1, "node-rates"], [1, "node-rate-text"], ["type", "text", "readonly", "true", 3, "ngModel"], ["type", "text", "readonly", "true", 3, "ngModel", "ngModelChange"], [1, "dropdown-container", 3, "click"], [1, "dropdown-icon"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-compact-down"], ["fill-rule", "evenodd", "d", "M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"]], template: function OutputItemComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OutputItemComponent_div_9_Template, 5, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OutputItemComponent_div_11_Template, 5, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OutputItemComponent_div_13_Template, 4, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getType());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx.getType(), ctx.isCriticalPath()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getId());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getName(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.outputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDropdown());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.output-container[_ngcontent-%COMP%] {\n  max-width: 440px;\n  min-height: 40px;\n  border-color: #707070;\n  border-radius: 10px;\n  border-width: 2px;\n  border-style: solid;\n  margin: 10px;\n  overflow: hidden;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  max-width: calc( 440px / 2);\n  height: 40px;\n  margin: -2px;\n  display: flex;\n  border-radius: 10px 0px 10px 0px;\n  border-color: #707070;\n  border-width: 2px;\n  border-style: solid;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 0px 10px;\n  border-radius: 5px;\n  text-align: center;\n  font-size: 20px;\n  -webkit-text-emphasis: bold;\n          text-emphasis: bold;\n  text-align: center;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container.resource[_ngcontent-%COMP%] {\n  background-color: #66F23F;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container.resource[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  background-color: #66F23F;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container.crafter[_ngcontent-%COMP%] {\n  background-color: #DBB62E;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container.crafter[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  background-color: #DBB62E;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container.output[_ngcontent-%COMP%] {\n  background-color: #2ED0DB;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container.output[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  background-color: #2ED0DB;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container.custom[_ngcontent-%COMP%] {\n  background-color: #C4B5F6;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container.custom[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  background-color: #C4B5F6;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container.minecraft[_ngcontent-%COMP%] {\n  background-color: #A8AAB3;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container.minecraft[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  background-color: #A8AAB3;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container.critical-path[_ngcontent-%COMP%] {\n  background-image: repeating-linear-gradient(-45deg, transparent 0 10px, #FF6F45 10px calc( 2 * 10px));\n}\n\n.output-container[_ngcontent-%COMP%]   .id-container[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  margin: -2px;\n  border-radius: 10px 0px 5px 0px;\n  background-color: #EEEEEE;\n  border-color: #707070;\n  border-width: 2px;\n  border-style: solid;\n}\n\n.output-container[_ngcontent-%COMP%]   .id-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: auto;\n  text-align: center;\n  font-size: 11px;\n}\n\n.output-container[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%] {\n  height: auto;\n  display: flexbox;\n}\n\n.output-container[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]   .data-input-container[_ngcontent-%COMP%] {\n  width: 50%;\n  float: left;\n}\n\n.output-container[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]   .data-output-container[_ngcontent-%COMP%] {\n  width: 50%;\n  float: right;\n}\n\n.output-container[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]   .node-rate-text[_ngcontent-%COMP%] {\n  width: 40%;\n  float: left;\n}\n\n.output-container[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50%;\n  background-color: #CCCCCC;\n  border: 2px solid #707070;\n  border-radius: 5px;\n  text-align: center;\n}\n\n.output-container[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]   .node-rates[_ngcontent-%COMP%] {\n  height: auto;\n  width: 75%;\n  margin: 5px auto;\n}\n\n.output-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%] {\n  width: auto;\n  height: 14px;\n  margin: -2px;\n  border-radius: 0px 0px 10px 10px;\n  background-color: #707070;\n  border-color: #2A2A2A;\n  border-width: 2px;\n  border-style: solid;\n  cursor: pointer;\n}\n\n.output-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 10px;\n  margin: auto;\n  background-color: #8E8E8E;\n}\n\n.output-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-top: -110%;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0cHV0L291dHB1dC1pdGVtL291dHB1dC1pdGVtLmNvbXBvbmVudC5zYXNzIiwic3JjL19nbG9iYWxzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDSSw0REFBQTtBQVZKOztBQVlBO0VBQ0ksZ0JBWnFCO0VBYXJCLGdCQVowQjtFQWMxQixxQkFYa0I7RUFZbEIsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUVBLGdCQUFBO0FBWko7O0FBZUk7RUFDSSwyQkF4QmE7RUF5QmIsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFiUjs7QUFlUTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSxlQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FBZFo7O0FBZ0JRO0VBQ0kseUJDbEJRO0FESXBCOztBQWVZO0VBQ0kseUJDcEJJO0FET3BCOztBQWVRO0VBQ0kseUJDekJRO0FEWXBCOztBQWNZO0VBQ0kseUJDM0JJO0FEZXBCOztBQWNRO0VBQ0kseUJDaENNO0FEb0JsQjs7QUFhWTtFQUNJLHlCQ2xDRTtBRHVCbEI7O0FBYVE7RUFDSSx5QkN2Q007QUQ0QmxCOztBQVlZO0VBQ0kseUJDekNFO0FEK0JsQjs7QUFZUTtFQUNJLHlCQ3BDVTtBRDBCdEI7O0FBV1k7RUFDSSx5QkN0Q007QUQ2QnRCOztBQVdRO0VBQ0kscUdBQUE7QUFUWjs7QUFXSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFUUjs7QUFXUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVRaOztBQVdJO0VBRUksWUFBQTtFQUNBLGdCQUFBO0FBVlI7O0FBWVE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQVZaOztBQVlRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFWWjs7QUFZUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBVlo7O0FBWVE7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFWWjs7QUFZUTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFWWjs7QUFZSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0FBWFI7O0FBYVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQVhaOztBQVlZO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBVmhCIiwiZmlsZSI6InNyYy9hcHAvb3V0cHV0L291dHB1dC1pdGVtL291dHB1dC1pdGVtLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vX2dsb2JhbHMnXG5AaW1wb3J0ICcuLi8uLi9yZXRlLW1vZHVsZXMvX3JldGVfdmFyaWFibGVzJ1xuICAgIFxuJG91dHB1dC1jb250YWluZXItd2lkdGg6IDQ0MHB4XG4kb3V0cHV0LWNvbnRhaW5lci1taW4taGVpZ2h0OiA0MHB4XG4kb3V0cHV0LXRpdGxlLXdpZHRoOiBjYWxjKCAjeyRvdXRwdXQtY29udGFpbmVyLXdpZHRofSAvIDIpXG5cbiRvdXRwdXQtYm9yZGVyLWNvbG9yOiAjNzA3MDcwXG4kb3V0cHV0LWJvcmRlci1yYWRpdXM6IDEwcHhcbiRvdXRwdXQtYm9yZGVyLXdpZHRoOiAycHhcbiAgICBcbipcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWZcbiAgICBcbi5vdXRwdXQtY29udGFpbmVyXG4gICAgbWF4LXdpZHRoOiAkb3V0cHV0LWNvbnRhaW5lci13aWR0aFxuICAgIG1pbi1oZWlnaHQ6ICRvdXRwdXQtY29udGFpbmVyLW1pbi1oZWlnaHRcblxuICAgIGJvcmRlci1jb2xvcjogJG91dHB1dC1ib3JkZXItY29sb3JcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4XG4gICAgYm9yZGVyLXdpZHRoOiAycHhcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkXG5cbiAgICBtYXJnaW46IDEwcHhcblxuICAgIG92ZXJmbG93OiBoaWRkZW5cblxuXG4gICAgLnRpdGxlLWNvbnRhaW5lclxuICAgICAgICBtYXgtd2lkdGg6ICRvdXRwdXQtdGl0bGUtd2lkdGhcbiAgICAgICAgaGVpZ2h0OiA0MHB4XG4gICAgICAgIG1hcmdpbjogLSRvdXRwdXQtYm9yZGVyLXdpZHRoXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMTBweCAwcHhcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNzA3MDcwXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWRcblxuICAgICAgICAudGl0bGVcbiAgICAgICAgICAgIG1hcmdpbjogYXV0b1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHhcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG5cbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweFxuICAgICAgICAgICAgdGV4dC1lbXBoYXNpczogYm9sZFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG5cbiAgICAgICAgJi5yZXNvdXJjZVxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlc291cmNlLWhpZ2hsaWdodFxuICAgICAgICAgICAgLnRpdGxlXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlc291cmNlLWhpZ2hsaWdodFxuXG4gICAgICAgICYuY3JhZnRlclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNyYWZ0aW5nLWhpZ2hsaWdodFxuICAgICAgICAgICAgLnRpdGxlXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNyYWZ0aW5nLWhpZ2hsaWdodFxuXG4gICAgICAgICYub3V0cHV0XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3V0cHV0LWhpZ2hsaWdodFxuICAgICAgICAgICAgLnRpdGxlXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG91dHB1dC1oaWdobGlnaHRcblxuICAgICAgICAmLmN1c3RvbVxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGN1c3RvbS1oaWdobGlnaHRcbiAgICAgICAgICAgIC50aXRsZVxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjdXN0b20taGlnaGxpZ2h0XG5cbiAgICAgICAgJi5taW5lY3JhZnRcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtaW5lY3JhZnQtaGlnaGxpZ2h0XG4gICAgICAgICAgICAudGl0bGVcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWluZWNyYWZ0LWhpZ2hsaWdodFxuXG4gICAgICAgICYuY3JpdGljYWwtcGF0aFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHRyYW5zcGFyZW50IDAgJHBpbnN0cmlwZS13aWR0aCwgICRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodCAkcGluc3RyaXBlLXdpZHRoIGNhbGMoIDIgKiAjeyRwaW5zdHJpcGUtd2lkdGh9KSlcblxuICAgIC5pZC1jb250YWluZXJcbiAgICAgICAgd2lkdGg6IDI1cHhcbiAgICAgICAgaGVpZ2h0OiAyNXB4XG4gICAgICAgIG1hcmdpbjogLSRvdXRwdXQtYm9yZGVyLXdpZHRoXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDVweCAwcHhcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRVxuICAgICAgICBib3JkZXItY29sb3I6ICM3MDcwNzBcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHhcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZFxuXG4gICAgICAgIHBcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCVcbiAgICAgICAgICAgIHBhZGRpbmc6IGF1dG9cbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4XG5cbiAgICAuZGF0YS1jb250YWluZXJcbiAgICAgICAgLy8gbWluLWhlaWdodDogNTBweFxuICAgICAgICBoZWlnaHQ6IGF1dG9cbiAgICAgICAgZGlzcGxheTogZmxleGJveFxuXG4gICAgICAgIC5kYXRhLWlucHV0LWNvbnRhaW5lclxuICAgICAgICAgICAgd2lkdGg6IDUwJVxuICAgICAgICAgICAgZmxvYXQ6IGxlZnRcblxuICAgICAgICAuZGF0YS1vdXRwdXQtY29udGFpbmVyXG4gICAgICAgICAgICB3aWR0aDogNTAlXG4gICAgICAgICAgICBmbG9hdDogcmlnaHRcblxuICAgICAgICAubm9kZS1yYXRlLXRleHRcbiAgICAgICAgICAgIHdpZHRoOiA0MCVcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0XG5cbiAgICAgICAgaW5wdXRcbiAgICAgICAgICAgIHdpZHRoOiA1MCVcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDQ0NcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM3MDcwNzBcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG5cbiAgICAgICAgLm5vZGUtcmF0ZXNcbiAgICAgICAgICAgIGhlaWdodDogYXV0b1xuICAgICAgICAgICAgd2lkdGg6IDc1JVxuICAgICAgICAgICAgbWFyZ2luOiA1cHggYXV0b1xuXG4gICAgLmRyb3Bkb3duLWNvbnRhaW5lclxuICAgICAgICB3aWR0aDogYXV0b1xuICAgICAgICBoZWlnaHQ6IDE0cHhcbiAgICAgICAgbWFyZ2luOiAtJG91dHB1dC1ib3JkZXItd2lkdGhcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHhcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MFxuICAgICAgICBib3JkZXItY29sb3I6ICMyQTJBMkFcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHhcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZFxuXG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxuXG4gICAgICAgIC5kcm9wZG93bi1pY29uXG4gICAgICAgICAgICB3aWR0aDogMjBweFxuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4XG4gICAgICAgICAgICBtYXJnaW46IGF1dG9cbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4RThFOEVcbiAgICAgICAgICAgIHN2Z1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTExMCVcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuXG5cbiIsIi8vICMjIyMjIyMjIyMgR2xvYmFsIExheW91dCBTZXR0aW5ncyAjIyMjIyMjIyMjXG4kZ3JpZC13aWR0aDogNzUlXG4kZ3JpZC1oZWlnaHQ6IDYwJVxuXG4vLyBTcGFjaW5ncyBiZXR3ZWVuIG1vZHVsZXNcbiRtb2R1bGUtbWFyZ2luLWxlZnQ6IDEwcHhcbiRtb2R1bGUtbWFyZ2luLXRvcDogJG1vZHVsZS1tYXJnaW4tbGVmdFxuXG4kb3V0cHV0LXdpZHRoOiBjYWxjKDEwMCUgLSAjeyRncmlkLXdpZHRofSlcbiRvdXRwdXQtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyKiN7JG1vZHVsZS1tYXJnaW4tdG9wfSlcbiAgICBcbiRidXR0b24taGVpZ2h0OiA0MHB4XG5cbi8vIERlbGV0ZSBzcGVjaWZpYyBidXR0b24gc2V0dGluZ3NcbiRkZWxldGUtYnV0dG9uLXdpZHRoOiAxNTBweFxuJGRlbGV0ZS1idXR0b24taGVpZ2h0OiA1MHB4XG5cbi8vIEludmVudG9yeSBXaWRnZXQgaGVpZ2h0XG4kcmVzb3VyY2UtY2hpbGRyZW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAzKiN7JG1vZHVsZS1tYXJnaW4tdG9wfSlcblxuJGJvcmRlci10aGlja25lc3M6IDJweFxuXG5cbi8vICMjIyMjIyMjIyMgQ29sb3IgRGVmaW5pdGlvbnMgIyMjIyMjIyMjI1xuJGN1c3RvbS1zZWxlY3RlZDojRjBFQ0ZEXG4kY3VzdG9tLWhpZ2hsaWdodDojQzRCNUY2XG4kb3V0cHV0LXNlbGVjdGVkOiAjQ0FGM0Y2XG4kb3V0cHV0LWhpZ2hsaWdodDojMkVEMERCXG4kY3JhZnRpbmctc2VsZWN0ZWQ6I0Y2RURDQVxuJGNyYWZ0aW5nLWhpZ2hsaWdodDojREJCNjJFXG4kcmVzb3VyY2Utc2VsZWN0ZWQ6I0Q4RkNDRVxuJHJlc291cmNlLWhpZ2hsaWdodDojNjZGMjNGXG4kbWluZWNyYWZ0LXNlbGVjdGVkOiAjYWNiNmMzXG4kbWluZWNyYWZ0LWhpZ2hsaWdodDogI0E4QUFCM1xuXG4kY29sb3ItZGVmYXVsdDojNzA3MDcwXG4kY29sb3ItZGVmYXVsdC1kYXJrOiMyQTJBMkFcbiRjb2xvci1kZWZhdWx0LWhpZ2hsaWdodDojQ0NDQ0NDXG5cbi8vIFBpbnN0cmlwZSBEZWZpbml0aW9uc1xuJGNyaXRpY2FsLXBhdGgtc2VsZWN0ZWQ6I0ZGREFEMFxuJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0OiNGRjZGNDVcbiRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodC1hbHBoYTogcmdiYSggJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0LCAuNSlcblxuXG4vLyAjIyMjIyMjIyMjIFNwcml0ZSBSZW5kZXJpbmcgU2V0dGluZ3NcbiRzcHJpdGUtc2l6ZTogMzJweFxuJHNwcml0ZS1zY2FsZTogMi4yXG5cbi8vIEluIG51bWJlciBvZiBzcHJpdGVzXG4kc3ByaXRlLXNoZWV0LWhvcml6b250YWwtZGltZW5zaW9uczogMTZcbiRzcHJpdGUtc2hlZXQtdmVydGljYWwtZGltZW5zaW9uczogMzVcblxuJHNwcml0ZS13aWR0aDogY2FsYygjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2NhbGV9KVxuJHNwcml0ZS1zaGVldC13aWR0aDogY2FsYyggI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNoZWV0LWhvcml6b250YWwtZGltZW5zaW9ucyAqICRzcHJpdGUtc2NhbGV9KVxuJHNwcml0ZS1zaGVldC1oZWlnaHQ6IGNhbGMoICN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zaGVldC12ZXJ0aWNhbC1kaW1lbnNpb25zICogJHNwcml0ZS1zY2FsZX0pXG5cbi8vIFNwcml0ZSBpbWFnZSBkaXNwbGF5IHNldHRpbmdzXG4kc3ByaXRlLWJvcmRlci1wYWRkaW5nOiA1cHgiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-output-item',
                templateUrl: './output-item.component.html',
                styleUrls: ['./output-item.component.sass']
            }]
    }], function () { return [{ type: _services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__["OutputManagerService"] }, { type: src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"] }]; }, { node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dropdownPressed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "FjGt":
/*!**********************************************************************!*\
  !*** ./src/app/general/item-image-component/item-image.component.ts ***!
  \**********************************************************************/
/*! exports provided: ItemImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemImageComponent", function() { return ItemImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



let spriteSize = 32;
let spriteScale = 2.2;
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
        // Reactive sprite coordinate calculation https://stackoverflow.com/a/23419418
        let spritePixelCoords = { x: item.index[0] * spriteSize, y: item.index[1] * spriteSize };
        this.background['background-position-x'] = spritePixelCoords.x / (512 - spriteSize) * 100 + "%";
        this.background['background-position-y'] = spritePixelCoords.y / (1120 - spriteSize) * 100 + "%";
    }
}
ItemImageComponent.ɵfac = function ItemImageComponent_Factory(t) { return new (t || ItemImageComponent)(); };
ItemImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemImageComponent, selectors: [["item-image"]], inputs: { selectedItem: "selectedItem", criticalPath: "criticalPath" }, decls: 3, vars: 2, consts: [[1, "image-container", 3, "ngClass"], [1, "pixelated"], ["src", "assets/images/transparent_32x32.png", 1, "image", 3, "ngStyle"]], template: function ItemImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.criticalPath ? "criticalPath" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.background);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".image-container[_ngcontent-%COMP%] {\n  width: min(100%, calc(70.4px));\n  margin: auto;\n  position: relative;\n  padding: 2px;\n  border-radius: 100%;\n}\n.image-container.criticalPath[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 10px rgba(255, 111, 69, 0.5);\n  background-color: rgba(255, 111, 69, 0.5);\n}\n.image-container[_ngcontent-%COMP%]   .pixelated[_ngcontent-%COMP%] {\n  image-rendering: pixelated;\n}\n@-moz-document url-prefix() {}\n.image-container[_ngcontent-%COMP%]   .pixelated[_ngcontent-%COMP%] {\n  image-rendering: crisp-edges;\n}\n.image-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: min(100%, calc(70.4px));\n  height: min(100%, calc(70.4px));\n  margin: auto;\n  display: block;\n  background-image: url('inventory_sprites.png');\n  background-size: 1600% 3500%;\n  user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-drag: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhbC9pdGVtLWltYWdlLWNvbXBvbmVudC9pdGVtLWltYWdlLmNvbXBvbmVudC5zYXNzIiwic3JjL19nbG9iYWxzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUZKO0FBSUk7RUFDSSxnREFBQTtFQUNBLHlDQzhCd0I7QURoQ2hDO0FBS0k7RUFDSSwwQkFBQTtBQUhSO0FBS0ksNkJBQUE7QUFDQTtFQUNJLDRCQUFBO0FBSFI7QUFLSTtFQUNJLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDhDQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FBSFIiLCJmaWxlIjoic3JjL2FwcC9nZW5lcmFsL2l0ZW0taW1hZ2UtY29tcG9uZW50L2l0ZW0taW1hZ2UuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9yZXRlLW1vZHVsZXMvX3JldGVfdmFyaWFibGVzJ1xuQGltcG9ydCAnLi4vLi4vLi4vX2dsb2JhbHMnXG5cbi5pbWFnZS1jb250YWluZXJcbiAgICB3aWR0aDogbWluKCAxMDAlLCAjeyRzcHJpdGUtd2lkdGh9KVxuICAgIG1hcmdpbjogYXV0b1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgIHBhZGRpbmc6IDJweFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCVcblxuICAgICYuY3JpdGljYWxQYXRoXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAkY3JpdGljYWwtcGF0aC1oaWdobGlnaHQtYWxwaGFcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0LWFscGhhXG5cblxuICAgIC5waXhlbGF0ZWRcbiAgICAgICAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWRcblxuICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKVxuICAgIC5waXhlbGF0ZWRcbiAgICAgICAgaW1hZ2UtcmVuZGVyaW5nOiBjcmlzcC1lZGdlc1xuICAgICAgICBcbiAgICAuaW1hZ2VcbiAgICAgICAgd2lkdGg6IG1pbiggMTAwJSwgI3skc3ByaXRlLXdpZHRofSlcbiAgICAgICAgaGVpZ2h0OiBtaW4oIDEwMCUsICN7JHNwcml0ZS13aWR0aH0pXG4gICAgICAgIG1hcmdpbjogYXV0b1xuICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaW52ZW50b3J5X3Nwcml0ZXMucG5nJylcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNjAwJSAzNTAwJVxuICAgICAgICB1c2VyLWRyYWc6IG5vbmVcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmVcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZVxuICAgICAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZVxuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZVxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZVxuXG4iLCIvLyAjIyMjIyMjIyMjIEdsb2JhbCBMYXlvdXQgU2V0dGluZ3MgIyMjIyMjIyMjI1xuJGdyaWQtd2lkdGg6IDc1JVxuJGdyaWQtaGVpZ2h0OiA2MCVcblxuLy8gU3BhY2luZ3MgYmV0d2VlbiBtb2R1bGVzXG4kbW9kdWxlLW1hcmdpbi1sZWZ0OiAxMHB4XG4kbW9kdWxlLW1hcmdpbi10b3A6ICRtb2R1bGUtbWFyZ2luLWxlZnRcblxuJG91dHB1dC13aWR0aDogY2FsYygxMDAlIC0gI3skZ3JpZC13aWR0aH0pXG4kb3V0cHV0LWhlaWdodDogY2FsYygxMDAlIC0gMiojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG4gICAgXG4kYnV0dG9uLWhlaWdodDogNDBweFxuXG4vLyBEZWxldGUgc3BlY2lmaWMgYnV0dG9uIHNldHRpbmdzXG4kZGVsZXRlLWJ1dHRvbi13aWR0aDogMTUwcHhcbiRkZWxldGUtYnV0dG9uLWhlaWdodDogNTBweFxuXG4vLyBJbnZlbnRvcnkgV2lkZ2V0IGhlaWdodFxuJHJlc291cmNlLWNoaWxkcmVuLWhlaWdodDogY2FsYygxMDAlIC0gMyojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG5cbiRib3JkZXItdGhpY2tuZXNzOiAycHhcblxuXG4vLyAjIyMjIyMjIyMjIENvbG9yIERlZmluaXRpb25zICMjIyMjIyMjIyNcbiRjdXN0b20tc2VsZWN0ZWQ6I0YwRUNGRFxuJGN1c3RvbS1oaWdobGlnaHQ6I0M0QjVGNlxuJG91dHB1dC1zZWxlY3RlZDogI0NBRjNGNlxuJG91dHB1dC1oaWdobGlnaHQ6IzJFRDBEQlxuJGNyYWZ0aW5nLXNlbGVjdGVkOiNGNkVEQ0FcbiRjcmFmdGluZy1oaWdobGlnaHQ6I0RCQjYyRVxuJHJlc291cmNlLXNlbGVjdGVkOiNEOEZDQ0VcbiRyZXNvdXJjZS1oaWdobGlnaHQ6IzY2RjIzRlxuJG1pbmVjcmFmdC1zZWxlY3RlZDogI2FjYjZjM1xuJG1pbmVjcmFmdC1oaWdobGlnaHQ6ICNBOEFBQjNcblxuJGNvbG9yLWRlZmF1bHQ6IzcwNzA3MFxuJGNvbG9yLWRlZmF1bHQtZGFyazojMkEyQTJBXG4kY29sb3ItZGVmYXVsdC1oaWdobGlnaHQ6I0NDQ0NDQ1xuXG4vLyBQaW5zdHJpcGUgRGVmaW5pdGlvbnNcbiRjcml0aWNhbC1wYXRoLXNlbGVjdGVkOiNGRkRBRDBcbiRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodDojRkY2RjQ1XG4kY3JpdGljYWwtcGF0aC1oaWdobGlnaHQtYWxwaGE6IHJnYmEoICRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodCwgLjUpXG5cblxuLy8gIyMjIyMjIyMjIyBTcHJpdGUgUmVuZGVyaW5nIFNldHRpbmdzXG4kc3ByaXRlLXNpemU6IDMycHhcbiRzcHJpdGUtc2NhbGU6IDIuMlxuXG4vLyBJbiBudW1iZXIgb2Ygc3ByaXRlc1xuJHNwcml0ZS1zaGVldC1ob3Jpem9udGFsLWRpbWVuc2lvbnM6IDE2XG4kc3ByaXRlLXNoZWV0LXZlcnRpY2FsLWRpbWVuc2lvbnM6IDM1XG5cbiRzcHJpdGUtd2lkdGg6IGNhbGMoI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNjYWxlfSlcbiRzcHJpdGUtc2hlZXQtd2lkdGg6IGNhbGMoICN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zaGVldC1ob3Jpem9udGFsLWRpbWVuc2lvbnMgKiAkc3ByaXRlLXNjYWxlfSlcbiRzcHJpdGUtc2hlZXQtaGVpZ2h0OiBjYWxjKCAjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2hlZXQtdmVydGljYWwtZGltZW5zaW9ucyAqICRzcHJpdGUtc2NhbGV9KVxuXG4vLyBTcHJpdGUgaW1hZ2UgZGlzcGxheSBzZXR0aW5nc1xuJHNwcml0ZS1ib3JkZXItcGFkZGluZzogNXB4Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'item-image',
                templateUrl: 'item-image.component.html',
                styleUrls: ['item-image.component.sass']
            }]
    }], function () { return []; }, { selectedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], criticalPath: [{
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

/***/ "MouV":
/*!**************************************************************!*\
  !*** ./src/app/general/icon-button/icon-button.component.ts ***!
  \**************************************************************/
/*! exports provided: IconButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButtonComponent", function() { return IconButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function IconButtonComponent__svg_path_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 3);
} if (rf & 2) {
    const stroke_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", stroke_r1);
} }
class IconButtonComponent {
    constructor() {
        this.icon = "bi-alarm-fill";
        this.strokes = ["M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"];
        this.size = "2.5em";
        this.disabled = false;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onClicked(event) {
        if (!this.disabled) {
            this.onClick.emit(event);
        }
    }
}
IconButtonComponent.ɵfac = function IconButtonComponent_Factory(t) { return new (t || IconButtonComponent)(); };
IconButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconButtonComponent, selectors: [["app-icon-button"]], inputs: { icon: "icon", strokes: "strokes", size: "size", disabled: "disabled" }, outputs: { onClick: "onClick", onHover: "onHover" }, decls: 3, vars: 5, consts: [[1, "button-container", 3, "ngClass", "click", "onmouseover"], ["viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", 3, "ngClass"], ["fill-rule", "evenodd", 4, "ngFor", "ngForOf"], ["fill-rule", "evenodd"]], template: function IconButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IconButtonComponent_Template_div_click_0_listener($event) { return ctx.onClicked($event); })("onmouseover", function IconButtonComponent_Template_div_onmouseover_0_listener($event) { return ctx.onHover.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IconButtonComponent__svg_path_2_Template, 1, 1, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.disabled ? "disabled" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx.size)("height", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.strokes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".button-container[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border: 2px solid #707070;\n  border-radius: 5px;\n  background-color: #FFFFFF;\n  display: flex;\n}\n.button-container[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.button-container.disabled[_ngcontent-%COMP%] {\n  background-color: #ababab;\n}\n.button-container.disabled[_ngcontent-%COMP%]:hover {\n  cursor: not-allowed;\n}\n.button-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.path-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhbC9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5jb21wb25lbnQuc2FzcyIsInNyYy9fZ2xvYmFscy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUNRWTtFRFBaLFdDT1k7RURMWix5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFFQSxhQUFBO0FBSEo7QUFLSTtFQUNJLGVBQUE7QUFIUjtBQUtJO0VBQ0kseUJBQUE7QUFIUjtBQUtRO0VBQ0ksbUJBQUE7QUFIWjtBQUtJO0VBQ0ksWUFBQTtBQUhSO0FBS0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvZ2VuZXJhbC9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL19nbG9iYWxzJ1xuICAgIFxuLmJ1dHRvbi1jb250YWluZXJcbiAgICBoZWlnaHQ6ICRidXR0b24taGVpZ2h0XG4gICAgd2lkdGg6ICRidXR0b24taGVpZ2h0XG5cbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNzA3MDcwXG4gICAgYm9yZGVyLXJhZGl1czogNXB4XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRlxuXG4gICAgZGlzcGxheTogZmxleFxuXG4gICAgJjpob3ZlclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcblxuICAgICYuZGlzYWJsZWRcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCAjZmZmZmZmLCAzMyUpXG5cbiAgICAgICAgJjpob3ZlclxuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZFxuXG4gICAgc3ZnXG4gICAgICAgIG1hcmdpbjogYXV0b1xuXG4ucGF0aC1jb250YWluZXJcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICB3aWR0aDogMTAwJSIsIi8vICMjIyMjIyMjIyMgR2xvYmFsIExheW91dCBTZXR0aW5ncyAjIyMjIyMjIyMjXG4kZ3JpZC13aWR0aDogNzUlXG4kZ3JpZC1oZWlnaHQ6IDYwJVxuXG4vLyBTcGFjaW5ncyBiZXR3ZWVuIG1vZHVsZXNcbiRtb2R1bGUtbWFyZ2luLWxlZnQ6IDEwcHhcbiRtb2R1bGUtbWFyZ2luLXRvcDogJG1vZHVsZS1tYXJnaW4tbGVmdFxuXG4kb3V0cHV0LXdpZHRoOiBjYWxjKDEwMCUgLSAjeyRncmlkLXdpZHRofSlcbiRvdXRwdXQtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyKiN7JG1vZHVsZS1tYXJnaW4tdG9wfSlcbiAgICBcbiRidXR0b24taGVpZ2h0OiA0MHB4XG5cbi8vIERlbGV0ZSBzcGVjaWZpYyBidXR0b24gc2V0dGluZ3NcbiRkZWxldGUtYnV0dG9uLXdpZHRoOiAxNTBweFxuJGRlbGV0ZS1idXR0b24taGVpZ2h0OiA1MHB4XG5cbi8vIEludmVudG9yeSBXaWRnZXQgaGVpZ2h0XG4kcmVzb3VyY2UtY2hpbGRyZW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAzKiN7JG1vZHVsZS1tYXJnaW4tdG9wfSlcblxuJGJvcmRlci10aGlja25lc3M6IDJweFxuXG5cbi8vICMjIyMjIyMjIyMgQ29sb3IgRGVmaW5pdGlvbnMgIyMjIyMjIyMjI1xuJGN1c3RvbS1zZWxlY3RlZDojRjBFQ0ZEXG4kY3VzdG9tLWhpZ2hsaWdodDojQzRCNUY2XG4kb3V0cHV0LXNlbGVjdGVkOiAjQ0FGM0Y2XG4kb3V0cHV0LWhpZ2hsaWdodDojMkVEMERCXG4kY3JhZnRpbmctc2VsZWN0ZWQ6I0Y2RURDQVxuJGNyYWZ0aW5nLWhpZ2hsaWdodDojREJCNjJFXG4kcmVzb3VyY2Utc2VsZWN0ZWQ6I0Q4RkNDRVxuJHJlc291cmNlLWhpZ2hsaWdodDojNjZGMjNGXG4kbWluZWNyYWZ0LXNlbGVjdGVkOiAjYWNiNmMzXG4kbWluZWNyYWZ0LWhpZ2hsaWdodDogI0E4QUFCM1xuXG4kY29sb3ItZGVmYXVsdDojNzA3MDcwXG4kY29sb3ItZGVmYXVsdC1kYXJrOiMyQTJBMkFcbiRjb2xvci1kZWZhdWx0LWhpZ2hsaWdodDojQ0NDQ0NDXG5cbi8vIFBpbnN0cmlwZSBEZWZpbml0aW9uc1xuJGNyaXRpY2FsLXBhdGgtc2VsZWN0ZWQ6I0ZGREFEMFxuJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0OiNGRjZGNDVcbiRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodC1hbHBoYTogcmdiYSggJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0LCAuNSlcblxuXG4vLyAjIyMjIyMjIyMjIFNwcml0ZSBSZW5kZXJpbmcgU2V0dGluZ3NcbiRzcHJpdGUtc2l6ZTogMzJweFxuJHNwcml0ZS1zY2FsZTogMi4yXG5cbi8vIEluIG51bWJlciBvZiBzcHJpdGVzXG4kc3ByaXRlLXNoZWV0LWhvcml6b250YWwtZGltZW5zaW9uczogMTZcbiRzcHJpdGUtc2hlZXQtdmVydGljYWwtZGltZW5zaW9uczogMzVcblxuJHNwcml0ZS13aWR0aDogY2FsYygjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2NhbGV9KVxuJHNwcml0ZS1zaGVldC13aWR0aDogY2FsYyggI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNoZWV0LWhvcml6b250YWwtZGltZW5zaW9ucyAqICRzcHJpdGUtc2NhbGV9KVxuJHNwcml0ZS1zaGVldC1oZWlnaHQ6IGNhbGMoICN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zaGVldC12ZXJ0aWNhbC1kaW1lbnNpb25zICogJHNwcml0ZS1zY2FsZX0pXG5cbi8vIFNwcml0ZSBpbWFnZSBkaXNwbGF5IHNldHRpbmdzXG4kc3ByaXRlLWJvcmRlci1wYWRkaW5nOiA1cHgiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-icon-button',
                templateUrl: './icon-button.component.html',
                styleUrls: ['./icon-button.component.sass']
            }]
    }], function () { return []; }, { icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], strokes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
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
/* harmony import */ var _nodes_minecraft_node_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../nodes/minecraft-node.component */ "hFWT");
/* harmony import */ var _custom_node_modal_custom_node_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-node-modal/custom-node-modal.component */ "oDxO");
/* harmony import */ var _nodes_custom_node_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../nodes/custom-node.component */ "TRM9");
/* harmony import */ var _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../nodes/base-node/base-node.component */ "jDfs");
/* harmony import */ var _nodes_output_node_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../nodes/output-node.component */ "c5kL");
/* harmony import */ var _nodes_crafter_node_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../nodes/crafter-node.component */ "DfuO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rete */ "9dUG");
/* harmony import */ var rete_connection_plugin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rete-connection-plugin */ "G+JA");
/* harmony import */ var _nodes_resource_node_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../nodes/resource-node.component */ "B5f4");
/* harmony import */ var rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rete-angular-render-plugin */ "JLln");
/* harmony import */ var rete_context_menu_plugin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rete-context-menu-plugin */ "G2QI");
/* harmony import */ var _nodes_sockets__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../nodes/sockets */ "nj5+");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../services/item.service */ "x7rl");
/* harmony import */ var _services_node_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/node.service */ "5bZ5");
/* harmony import */ var src_app_inventory_services_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/inventory/services/minecraft-inventory.service */ "v5B+");
/* harmony import */ var _output_services_output_manager_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../output/services/output-manager.service */ "IIXy");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _general_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../general/icon-button/icon-button.component */ "MouV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "ofXK");






















const _c0 = ["nodeEditor"];
const _c1 = "M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z";
const _c2 = "M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z";
const _c3 = function () { return [_c1, _c2]; };
const _c4 = "M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z";
const _c5 = "M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z";
const _c6 = function () { return [_c4, _c5]; };
const _c7 = "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z";
const _c8 = function () { return [_c7]; };
const _c9 = function () { return ["btn-outline-danger", "disabled"]; };
class GridComponent {
    constructor(socketController, itemService, nodeService, minecraftInventoryService, outputManager, modalService) {
        this.socketController = socketController;
        this.itemService = itemService;
        this.nodeService = nodeService;
        this.minecraftInventoryService = minecraftInventoryService;
        this.outputManager = outputManager;
        this.modalService = modalService;
        this.isSideBarCollapse = true;
        this.editor = null;
        this.completePath = false;
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const container = this.el.nativeElement;
            this.components = {};
            this.components['Resource'] = new _nodes_resource_node_component__WEBPACK_IMPORTED_MODULE_10__["ResourceNode"](this.socketController);
            this.components['Minecraft'] = new _nodes_minecraft_node_component__WEBPACK_IMPORTED_MODULE_1__["MinecraftNode"](this.socketController, this.minecraftInventoryService);
            this.components['Crafter'] = new _nodes_crafter_node_component__WEBPACK_IMPORTED_MODULE_6__["CrafterNode"](this.socketController, this.itemService);
            this.components['Output'] = new _nodes_output_node_component__WEBPACK_IMPORTED_MODULE_5__["OutputNode"](this.socketController);
            this.components['Custom'] = new _nodes_custom_node_component__WEBPACK_IMPORTED_MODULE_3__["CustomNode"](this.socketController, this.itemService, this.nodeService);
            this.editor = new rete__WEBPACK_IMPORTED_MODULE_8__["NodeEditor"]('minecraft-web-app@0.1.0', container);
            this.editor.use(rete_connection_plugin__WEBPACK_IMPORTED_MODULE_9__["default"]);
            this.editor.use(rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_11__["AngularRenderPlugin"], { component: _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_4__["BaseNodeComponent"] });
            this.editor.use(rete_context_menu_plugin__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
            this.engine = new rete__WEBPACK_IMPORTED_MODULE_8__["Engine"]('minecraft-web-app@0.1.0');
            for (const componentKey in this.components) {
                let component = this.components[componentKey];
                this.editor.register(component);
                this.engine.register(component);
            }
            this.createNode("Resource", 23, 50, 125);
            this.createNode("Crafter", 5, 450, 125);
            this.createNode("Output", 5, 850, 125);
            this.createNode("Custom", 2, 50, 425);
            this.createNode("Custom", 3, 550, 425);
            this.createNode("Minecraft", 5, 50, 0);
            this.createNode("Minecraft", 1, 450, 0);
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
        this.completePath = false;
        this.editor.nodes.forEach(value => {
            value.meta.criticalPath = false;
            let control = value.controls.get('resource');
            control.props.criticalPath = false;
        });
        criticalPath.forEach(value => {
            let node_ref = this.editor.nodes.find(n => n.id === value);
            node_ref.meta.criticalPath = true;
            let control = node_ref.controls.get('resource');
            control.props.criticalPath = true;
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
    startCollapseSequence() {
        let modelRef = this.modalService.open(_custom_node_modal_custom_node_modal_component__WEBPACK_IMPORTED_MODULE_2__["CustomNodeModal"]);
        modelRef.result.then((nodeCreationData) => {
            this.collapseToNode(nodeCreationData);
        });
        let modal = modelRef.componentInstance;
        modal.setItmeIds([1, 2, 3, 4, 5, 92, 23, 103]);
    }
    collapseToNode(nodeCreationData) {
        let nodeOutputs = this.nodeService.getAllOutputs();
        let result = this.nodeService.calculateCustomNodeFromOutputs(nodeOutputs);
        let connectedNodes = result[0];
        let customNodeData = result[1];
        customNodeData.meta = nodeCreationData;
        let customNode = this.nodeService.SaveCustomNode(customNodeData);
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
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nodes_sockets__WEBPACK_IMPORTED_MODULE_13__["SocketController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_14__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_node_service__WEBPACK_IMPORTED_MODULE_15__["NodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_inventory_services_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_16__["MinecraftInventoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_output_services_output_manager_service__WEBPACK_IMPORTED_MODULE_17__["OutputManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModal"])); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], viewQuery: function GridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, decls: 19, vars: 12, consts: [[1, "grid-wrapper", "module-margin", 3, "dragover", "drop"], ["id", "grid-toolbar-container"], [1, "gird-toolbar-buttons"], [1, "toolbar-button", 3, "icon", "strokes", "disabled", "onClick"], [1, "toolbar-button", 3, "icon", "strokes", "onClick"], ["id", "expandToolbar", "data-toggle", "collapse", "data-target", "#grid-toolbar-popout", 1, "toolbar-button", 3, "icon", "strokes"], ["id", "grid-toolbar-popout", 1, "popout-window", "collapse"], [1, "node-editor"], ["nodeEditor", ""], ["id", "delete-container", 3, "mouseup"], [1, "btn", 3, "ngClass"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dragover", function GridComponent_Template_div_dragover_0_listener($event) { return ctx.dragOver($event); })("drop", function GridComponent_Template_div_drop_0_listener($event) { return ctx.onDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "app-icon-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function GridComponent_Template_app_icon_button_onClick_3_listener() { return ctx.startCollapseSequence(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "app-icon-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function GridComponent_Template_app_icon_button_onClick_4_listener() { return ctx.scaleToFit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-icon-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Collapse To Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Show Workspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mouseup", function GridComponent_Template_div_mouseup_15_listener() { return ctx.deleteNode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "bi-aspect-ratio")("strokes", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](8, _c3))("disabled", !ctx.completePath);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "bi-aspect-ratio")("strokes", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "bi-three-dots")("strokes", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](10, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.anyNodeSelected() ? "btn-danger" : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](11, _c9));
    } }, directives: [_general_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_19__["IconButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgClass"]], styles: [".grid-wrapper[_ngcontent-%COMP%] {\n  height: 60%;\n  border: 2px solid black;\n  position: relative;\n}\n\n#delete-container[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n#delete-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 150px;\n  height: 50px;\n  margin-bottom: 0px;\n}\n\n#delete-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: auto;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.gird-toolbar-buttons[_ngcontent-%COMP%] {\n  width: 40px;\n  background-color: #2A2A2A;\n  margin: 5px;\n}\n\n#grid-toolbar-container[_ngcontent-%COMP%] {\n  position: fixed;\n  height: calc(60% - 4px);\n  width: auto;\n  min-width: 50px;\n  z-index: 1;\n  background-color: #2A2A2A;\n  display: flex;\n}\n\n#grid-toolbar-container[_ngcontent-%COMP%]   .collapsing[_ngcontent-%COMP%] {\n  background-color: #CCCCCC;\n}\n\n#grid-toolbar-popout[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #CCCCCC;\n}\n\n#grid-toolbar-popout[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n#grid-toolbar-popout[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font: \"Segoe UI\";\n  font-weight: bold;\n  display: inline-block;\n  vertical-align: middle;\n  color: #404040;\n}\n\n#expandToolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 5px;\n  bottom: 5px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL2dyaWQvZ3JpZC5jb21wb25lbnQuc2FzcyIsInNyYy9fZ2xvYmFscy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksV0NGVTtFREdWLHVCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFHSTtFQUNJLHFCQUFBO0VBQ0EsWUNEYztFREVkLFlDRGU7RURFZixrQkFBQTtBQURSOztBQUdRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBRFo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EseUJDU2dCO0VEUmhCLFdBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBRUEsYUFBQTtBQUFKOztBQUVJO0VBQ0kseUJBQUE7QUFBUjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDSTtFQUNJLFdBQUE7QUFDUjs7QUFDUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFDWjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFFSjs7QUFBQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9yZXRlLW1vZHVsZXMvZ3JpZC9ncmlkLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vZ2xvYmFscydcbkBpbXBvcnQgJy4uL3JldGVfdmFyaWFibGVzJ1xuICAgIFxuLmdyaWQtd3JhcHBlclxuICAgIGhlaWdodDogJGdyaWQtaGVpZ2h0XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcblxuI2RlbGV0ZS1jb250YWluZXJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICByaWdodDogMTBweFxuICAgIGJvdHRvbTogMTBweFxuXG4gICAgbGFiZWxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgICAgIHdpZHRoOiAkZGVsZXRlX2J1dHRvbl93aWR0aFxuICAgICAgICBoZWlnaHQ6ICRkZWxldGVfYnV0dG9uX2hlaWdodFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHhcbiAgICAgICAgXG4gICAgICAgIHBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweFxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcblxuLmdpcmQtdG9vbGJhci1idXR0b25zXG4gICAgd2lkdGg6IDQwcHhcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZGVmYXVsdC1kYXJrXG4gICAgbWFyZ2luOiA1cHhcblxuI2dyaWQtdG9vbGJhci1jb250YWluZXJcbiAgICBwb3NpdGlvbjogZml4ZWRcbiAgICBoZWlnaHQ6IGNhbGMoI3skZ3JpZC1oZWlnaHR9IC0gNHB4KVxuICAgIHdpZHRoOiBhdXRvXG4gICAgbWluLXdpZHRoOiA1MHB4XG4gICAgei1pbmRleDogMVxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kZWZhdWx0LWRhcmtcblxuICAgIGRpc3BsYXk6IGZsZXhcblxuICAgIC5jb2xsYXBzaW5nXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDQ0NcbiAgICBcbiNncmlkLXRvb2xiYXItcG9wb3V0XG4gICAgd2lkdGg6IDEwMCVcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDQ0NDXG5cbiAgICBkaXZcbiAgICAgICAgbWFyZ2luOiA1cHhcblxuICAgICAgICBwXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHhcbiAgICAgICAgICAgIGZvbnQ6ICdTZWdvZSBVSSdcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbiAgICAgICAgICAgIGNvbG9yOiAjNDA0MDQwXG5cbiNleHBhbmRUb29sYmFyXG4gICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgbGVmdDogNXB4XG4gICAgYm90dG9tOiA1cHhcblxubGFiZWxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgICB3aWR0aDogYXV0b1xuICAgIG1hcmdpbi1ib3R0b206IDBweFxuXG4iLCIvLyAjIyMjIyMjIyMjIEdsb2JhbCBMYXlvdXQgU2V0dGluZ3MgIyMjIyMjIyMjI1xuJGdyaWQtd2lkdGg6IDc1JVxuJGdyaWQtaGVpZ2h0OiA2MCVcblxuLy8gU3BhY2luZ3MgYmV0d2VlbiBtb2R1bGVzXG4kbW9kdWxlLW1hcmdpbi1sZWZ0OiAxMHB4XG4kbW9kdWxlLW1hcmdpbi10b3A6ICRtb2R1bGUtbWFyZ2luLWxlZnRcblxuJG91dHB1dC13aWR0aDogY2FsYygxMDAlIC0gI3skZ3JpZC13aWR0aH0pXG4kb3V0cHV0LWhlaWdodDogY2FsYygxMDAlIC0gMiojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG4gICAgXG4kYnV0dG9uLWhlaWdodDogNDBweFxuXG4vLyBEZWxldGUgc3BlY2lmaWMgYnV0dG9uIHNldHRpbmdzXG4kZGVsZXRlLWJ1dHRvbi13aWR0aDogMTUwcHhcbiRkZWxldGUtYnV0dG9uLWhlaWdodDogNTBweFxuXG4vLyBJbnZlbnRvcnkgV2lkZ2V0IGhlaWdodFxuJHJlc291cmNlLWNoaWxkcmVuLWhlaWdodDogY2FsYygxMDAlIC0gMyojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG5cbiRib3JkZXItdGhpY2tuZXNzOiAycHhcblxuXG4vLyAjIyMjIyMjIyMjIENvbG9yIERlZmluaXRpb25zICMjIyMjIyMjIyNcbiRjdXN0b20tc2VsZWN0ZWQ6I0YwRUNGRFxuJGN1c3RvbS1oaWdobGlnaHQ6I0M0QjVGNlxuJG91dHB1dC1zZWxlY3RlZDogI0NBRjNGNlxuJG91dHB1dC1oaWdobGlnaHQ6IzJFRDBEQlxuJGNyYWZ0aW5nLXNlbGVjdGVkOiNGNkVEQ0FcbiRjcmFmdGluZy1oaWdobGlnaHQ6I0RCQjYyRVxuJHJlc291cmNlLXNlbGVjdGVkOiNEOEZDQ0VcbiRyZXNvdXJjZS1oaWdobGlnaHQ6IzY2RjIzRlxuJG1pbmVjcmFmdC1zZWxlY3RlZDogI2FjYjZjM1xuJG1pbmVjcmFmdC1oaWdobGlnaHQ6ICNBOEFBQjNcblxuJGNvbG9yLWRlZmF1bHQ6IzcwNzA3MFxuJGNvbG9yLWRlZmF1bHQtZGFyazojMkEyQTJBXG4kY29sb3ItZGVmYXVsdC1oaWdobGlnaHQ6I0NDQ0NDQ1xuXG4vLyBQaW5zdHJpcGUgRGVmaW5pdGlvbnNcbiRjcml0aWNhbC1wYXRoLXNlbGVjdGVkOiNGRkRBRDBcbiRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodDojRkY2RjQ1XG4kY3JpdGljYWwtcGF0aC1oaWdobGlnaHQtYWxwaGE6IHJnYmEoICRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodCwgLjUpXG5cblxuLy8gIyMjIyMjIyMjIyBTcHJpdGUgUmVuZGVyaW5nIFNldHRpbmdzXG4kc3ByaXRlLXNpemU6IDMycHhcbiRzcHJpdGUtc2NhbGU6IDIuMlxuXG4vLyBJbiBudW1iZXIgb2Ygc3ByaXRlc1xuJHNwcml0ZS1zaGVldC1ob3Jpem9udGFsLWRpbWVuc2lvbnM6IDE2XG4kc3ByaXRlLXNoZWV0LXZlcnRpY2FsLWRpbWVuc2lvbnM6IDM1XG5cbiRzcHJpdGUtd2lkdGg6IGNhbGMoI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNjYWxlfSlcbiRzcHJpdGUtc2hlZXQtd2lkdGg6IGNhbGMoICN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zaGVldC1ob3Jpem9udGFsLWRpbWVuc2lvbnMgKiAkc3ByaXRlLXNjYWxlfSlcbiRzcHJpdGUtc2hlZXQtaGVpZ2h0OiBjYWxjKCAjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2hlZXQtdmVydGljYWwtZGltZW5zaW9ucyAqICRzcHJpdGUtc2NhbGV9KVxuXG4vLyBTcHJpdGUgaW1hZ2UgZGlzcGxheSBzZXR0aW5nc1xuJHNwcml0ZS1ib3JkZXItcGFkZGluZzogNXB4Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
        args: [{
                selector: 'app-grid',
                templateUrl: './grid.component.html',
                styleUrls: ['./grid.component.sass']
            }]
    }], function () { return [{ type: _nodes_sockets__WEBPACK_IMPORTED_MODULE_13__["SocketController"] }, { type: _services_item_service__WEBPACK_IMPORTED_MODULE_14__["ItemService"] }, { type: _services_node_service__WEBPACK_IMPORTED_MODULE_15__["NodeService"] }, { type: src_app_inventory_services_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_16__["MinecraftInventoryService"] }, { type: _output_services_output_manager_service__WEBPACK_IMPORTED_MODULE_17__["OutputManagerService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModal"] }]; }, { el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
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
/* harmony import */ var _inventory_inventory_display_inventory_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory/inventory-display/inventory-display.component */ "nXju");
/* harmony import */ var _output_output_container_output_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./output/output-container/output-container.component */ "n/8p");






class AppComponent {
    constructor() {
        this.title = 'Supplemental Application';
    }
    onClick(event) {
        console.log("Clicked: " + event);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 0, consts: [["id", "fullsite", 1, "fill-width", "fill-height"], ["id", "workspace"], ["id", "resource-workspace"], ["id", "node-browser-workspace", 1, "left"], ["id", "minecraft-inventory-workspace", 1, "right"], ["id", "resultspace"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-node-browser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-inventory-display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-output-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_rete_modules_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], _rete_modules_node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_2__["NodeBrowserComponent"], _inventory_inventory_display_inventory_display_component__WEBPACK_IMPORTED_MODULE_3__["InventoryDisplayComponent"], _output_output_container_output_container_component__WEBPACK_IMPORTED_MODULE_4__["OutputContainerComponent"]], styles: ["#fullsite[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#workspace[_ngcontent-%COMP%] {\n  width: 75%;\n  height: 100%;\n  flex-shrink: 2;\n  flex-direction: column;\n  display: block;\n}\n\n#resource-workspace[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc( 100% - 60%);\n}\n\n#node-browser-workspace[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n}\n\n#minecraft-inventory-workspace[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: auto;\n}\n\n#resultspace[_ngcontent-%COMP%] {\n  width: calc(100% - 75%);\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic3JjL19nbG9iYWxzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0FBREo7O0FBR0E7RUFDSSxVQ0xTO0VETVQsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUdKOztBQURBO0VBQ0ksdUJDakJXO0VEa0JYLFlBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL19nbG9iYWxzJ1xuXG4jZnVsbHNpdGVcbiAgICBkaXNwbGF5OiBmbGV4XG5cbiN3b3Jrc3BhY2VcbiAgICB3aWR0aDogJGdyaWQtd2lkdGhcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICBmbGV4LXNocmluazogMlxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICBkaXNwbGF5OiBibG9ja1xuXG4jcmVzb3VyY2Utd29ya3NwYWNlXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgaGVpZ2h0OiBjYWxjKCAxMDAlIC0gI3skZ3JpZC1oZWlnaHR9KVxuXG4jbm9kZS1icm93c2VyLXdvcmtzcGFjZVxuICAgIHdpZHRoOiA1MCVcbiAgICBoZWlnaHQ6IDEwMCVcblxuI21pbmVjcmFmdC1pbnZlbnRvcnktd29ya3NwYWNlXG4gICAgd2lkdGg6IDUwJVxuICAgIG1hcmdpbjogYXV0b1xuXG4jcmVzdWx0c3BhY2VcbiAgICB3aWR0aDogJG91dHB1dC13aWR0aFxuICAgIGhlaWdodDogMTAwJSIsIi8vICMjIyMjIyMjIyMgR2xvYmFsIExheW91dCBTZXR0aW5ncyAjIyMjIyMjIyMjXG4kZ3JpZC13aWR0aDogNzUlXG4kZ3JpZC1oZWlnaHQ6IDYwJVxuXG4vLyBTcGFjaW5ncyBiZXR3ZWVuIG1vZHVsZXNcbiRtb2R1bGUtbWFyZ2luLWxlZnQ6IDEwcHhcbiRtb2R1bGUtbWFyZ2luLXRvcDogJG1vZHVsZS1tYXJnaW4tbGVmdFxuXG4kb3V0cHV0LXdpZHRoOiBjYWxjKDEwMCUgLSAjeyRncmlkLXdpZHRofSlcbiRvdXRwdXQtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyKiN7JG1vZHVsZS1tYXJnaW4tdG9wfSlcbiAgICBcbiRidXR0b24taGVpZ2h0OiA0MHB4XG5cbi8vIERlbGV0ZSBzcGVjaWZpYyBidXR0b24gc2V0dGluZ3NcbiRkZWxldGUtYnV0dG9uLXdpZHRoOiAxNTBweFxuJGRlbGV0ZS1idXR0b24taGVpZ2h0OiA1MHB4XG5cbi8vIEludmVudG9yeSBXaWRnZXQgaGVpZ2h0XG4kcmVzb3VyY2UtY2hpbGRyZW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAzKiN7JG1vZHVsZS1tYXJnaW4tdG9wfSlcblxuJGJvcmRlci10aGlja25lc3M6IDJweFxuXG5cbi8vICMjIyMjIyMjIyMgQ29sb3IgRGVmaW5pdGlvbnMgIyMjIyMjIyMjI1xuJGN1c3RvbS1zZWxlY3RlZDojRjBFQ0ZEXG4kY3VzdG9tLWhpZ2hsaWdodDojQzRCNUY2XG4kb3V0cHV0LXNlbGVjdGVkOiAjQ0FGM0Y2XG4kb3V0cHV0LWhpZ2hsaWdodDojMkVEMERCXG4kY3JhZnRpbmctc2VsZWN0ZWQ6I0Y2RURDQVxuJGNyYWZ0aW5nLWhpZ2hsaWdodDojREJCNjJFXG4kcmVzb3VyY2Utc2VsZWN0ZWQ6I0Q4RkNDRVxuJHJlc291cmNlLWhpZ2hsaWdodDojNjZGMjNGXG4kbWluZWNyYWZ0LXNlbGVjdGVkOiAjYWNiNmMzXG4kbWluZWNyYWZ0LWhpZ2hsaWdodDogI0E4QUFCM1xuXG4kY29sb3ItZGVmYXVsdDojNzA3MDcwXG4kY29sb3ItZGVmYXVsdC1kYXJrOiMyQTJBMkFcbiRjb2xvci1kZWZhdWx0LWhpZ2hsaWdodDojQ0NDQ0NDXG5cbi8vIFBpbnN0cmlwZSBEZWZpbml0aW9uc1xuJGNyaXRpY2FsLXBhdGgtc2VsZWN0ZWQ6I0ZGREFEMFxuJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0OiNGRjZGNDVcbiRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodC1hbHBoYTogcmdiYSggJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0LCAuNSlcblxuXG4vLyAjIyMjIyMjIyMjIFNwcml0ZSBSZW5kZXJpbmcgU2V0dGluZ3NcbiRzcHJpdGUtc2l6ZTogMzJweFxuJHNwcml0ZS1zY2FsZTogMi4yXG5cbi8vIEluIG51bWJlciBvZiBzcHJpdGVzXG4kc3ByaXRlLXNoZWV0LWhvcml6b250YWwtZGltZW5zaW9uczogMTZcbiRzcHJpdGUtc2hlZXQtdmVydGljYWwtZGltZW5zaW9uczogMzVcblxuJHNwcml0ZS13aWR0aDogY2FsYygjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2NhbGV9KVxuJHNwcml0ZS1zaGVldC13aWR0aDogY2FsYyggI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNoZWV0LWhvcml6b250YWwtZGltZW5zaW9ucyAqICRzcHJpdGUtc2NhbGV9KVxuJHNwcml0ZS1zaGVldC1oZWlnaHQ6IGNhbGMoICN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zaGVldC12ZXJ0aWNhbC1kaW1lbnNpb25zICogJHNwcml0ZS1zY2FsZX0pXG5cbi8vIFNwcml0ZSBpbWFnZSBkaXNwbGF5IHNldHRpbmdzXG4kc3ByaXRlLWJvcmRlci1wYWRkaW5nOiA1cHgiXX0= */"] });
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
        this.updateNodeStructure(node);
        node.meta.type = 'custom';
        return node;
    }
    worker(node, inputs, outputs) {
        // Define the datagrams to output
        let datagramOutputs = {};
        node.data.inputTree = [];
        let customData = node.data.customization;
        let customIcon = this.itemService.GetItemFromId(customData.meta.icon);
        var node_ref = this.editor.nodes.find(value => { return value.id == node.id; });
        var control = node_ref.controls.get("resource");
        control.props.selectedItem = customIcon;
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
                    // Look to see if the connection is already added as an input
                    let connectionPresent = node.data.inputTree.find(value => {
                        return value.itemId == input.itemId;
                    });
                    // Update the inputTree
                    if (!connectionPresent) {
                        node.data.inputTree.push(input);
                    }
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
        node.data.name = customization.meta.name;
        node.data['customization'] = customization;
        // Add a ResourceControl to the node, temporaraly set icon to crafting table
        var control = new _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_3__["ResourceControl"](this.editor, 'resource', true);
        control.props.readonly = true;
        node.addControl(control);
        // Add the starting data to the control
        control.putData('resource', this.itemService.GetItemFromId(customization.meta.icon));
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

/***/ "UKeZ":
/*!*********************************************!*\
  !*** ./src/app/general/model/item.model.ts ***!
  \*********************************************/
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

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory/inventory.module */ "cLqD");
/* harmony import */ var _output_output_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./output/output.module */ "bSka");
/* harmony import */ var _rete_modules_nodes_sockets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rete-modules/nodes/sockets */ "nj5+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _rete_modules_custom_rete_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rete-modules/custom-rete.module */ "8vqi");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_rete_modules_nodes_sockets__WEBPACK_IMPORTED_MODULE_2__["SocketController"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _rete_modules_custom_rete_module__WEBPACK_IMPORTED_MODULE_7__["CustomReteModule"],
            _output_output_module__WEBPACK_IMPORTED_MODULE_1__["OutputModule"],
            _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_0__["InventoryModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _rete_modules_custom_rete_module__WEBPACK_IMPORTED_MODULE_7__["CustomReteModule"],
        _output_output_module__WEBPACK_IMPORTED_MODULE_1__["OutputModule"],
        _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_0__["InventoryModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _rete_modules_custom_rete_module__WEBPACK_IMPORTED_MODULE_7__["CustomReteModule"],
                    _output_output_module__WEBPACK_IMPORTED_MODULE_1__["OutputModule"],
                    _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_0__["InventoryModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                ],
                providers: [_rete_modules_nodes_sockets__WEBPACK_IMPORTED_MODULE_2__["SocketController"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
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
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../general/general.module */ "hxwH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _output_container_output_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./output-container/output-container.component */ "n/8p");
/* harmony import */ var _services_output_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/output-manager.service */ "IIXy");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");
/* harmony import */ var _output_item_output_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./output-item/output-item.component */ "E5D1");
/* harmony import */ var _graph_view_graph_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./graph-view/graph-view.component */ "7bOH");
/* harmony import */ var _graph_item_graph_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./graph-item/graph-item.component */ "c4YL");











class OutputModule {
}
OutputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: OutputModule });
OutputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function OutputModule_Factory(t) { return new (t || OutputModule)(); }, providers: [_services_output_manager_service__WEBPACK_IMPORTED_MODULE_5__["OutputManagerService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_0__["GeneralModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OutputModule, { declarations: [_output_container_output_container_component__WEBPACK_IMPORTED_MODULE_4__["OutputContainerComponent"], _output_item_output_item_component__WEBPACK_IMPORTED_MODULE_7__["OutputItemComponent"], _graph_view_graph_view_component__WEBPACK_IMPORTED_MODULE_8__["GraphViewComponent"], _graph_item_graph_item_component__WEBPACK_IMPORTED_MODULE_9__["GraphItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_0__["GeneralModule"]], exports: [_output_container_output_container_component__WEBPACK_IMPORTED_MODULE_4__["OutputContainerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](OutputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_output_container_output_container_component__WEBPACK_IMPORTED_MODULE_4__["OutputContainerComponent"], _output_item_output_item_component__WEBPACK_IMPORTED_MODULE_7__["OutputItemComponent"], _graph_view_graph_view_component__WEBPACK_IMPORTED_MODULE_8__["GraphViewComponent"], _graph_item_graph_item_component__WEBPACK_IMPORTED_MODULE_9__["GraphItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_0__["GeneralModule"],
                ],
                exports: [_output_container_output_container_component__WEBPACK_IMPORTED_MODULE_4__["OutputContainerComponent"],
                ],
                providers: [_services_output_manager_service__WEBPACK_IMPORTED_MODULE_5__["OutputManagerService"]]
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
        let localNode = this.nodeService.getNodeTreeItem(this.node.id);
        let result = this.nodeService.calculateCustomNodeFromOutputs(localNode ? [localNode] : []);
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
        node.data.amount = 1;
        let control = node_ref.controls.get('resource');
        control.setRate(perHourBottleneck);
    }
}


/***/ }),

/***/ "cLqD":
/*!***********************************************!*\
  !*** ./src/app/inventory/inventory.module.ts ***!
  \***********************************************/
/*! exports provided: InventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryModule", function() { return InventoryModule; });
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../general/general.module */ "hxwH");
/* harmony import */ var _services_fake_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/fake-minecraft-inventory.service */ "B20Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/minecraft-inventory.service */ "v5B+");
/* harmony import */ var _inventory_display_inventory_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inventory-display/inventory-display.component */ "nXju");







class InventoryModule {
}
InventoryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InventoryModule });
InventoryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function InventoryModule_Factory(t) { return new (t || InventoryModule)(); }, providers: [{ provide: _services_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_4__["MinecraftInventoryService"], useClass: _services_fake_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_1__["FakeMinecraftInventoryService"] }], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_0__["GeneralModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InventoryModule, { declarations: [_inventory_display_inventory_display_component__WEBPACK_IMPORTED_MODULE_5__["InventoryDisplayComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_0__["GeneralModule"]], exports: [_inventory_display_inventory_display_component__WEBPACK_IMPORTED_MODULE_5__["InventoryDisplayComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](InventoryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_inventory_display_inventory_display_component__WEBPACK_IMPORTED_MODULE_5__["InventoryDisplayComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_0__["GeneralModule"]
                ],
                providers: [{ provide: _services_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_4__["MinecraftInventoryService"], useClass: _services_fake_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_1__["FakeMinecraftInventoryService"] }],
                exports: [_inventory_display_inventory_display_component__WEBPACK_IMPORTED_MODULE_5__["InventoryDisplayComponent"]],
            }]
    }], null, null); })();


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

/***/ "hFWT":
/*!****************************************************************!*\
  !*** ./src/app/rete-modules/nodes/minecraft-node.component.ts ***!
  \****************************************************************/
/*! exports provided: MinecraftNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinecraftNode", function() { return MinecraftNode; });
/* harmony import */ var _shared_connection_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/connection.model */ "fqIU");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rete */ "9dUG");
/* harmony import */ var _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/resource-control/resource-control */ "AnjU");



class MinecraftNode extends rete__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(socketController, minecraftInventoryService) {
        super('Minecraft');
        this.socketController = socketController;
        this.minecraftInventoryService = minecraftInventoryService;
        this.minecraftInventoryService.GetInventoryItemAverage(1);
        this.minecraftInventoryService.GetInventoryItemAverage(6);
    }
    builder(node) {
        var control = new _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_2__["ResourceControl"](this.editor, 'resource');
        control.props.readonly = true;
        control.props.selectedItem = node.data.resource;
        node.addControl(control);
        node.meta.type = 'minecraft';
        node.data.name = 'Minecraft';
        this.minecraftInventoryService.AssignInventoryUpdateCallback(this, node.id, node.data.resource.id, this.updateAverage);
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
    updateAverage(nodeNumber, avg) {
        let node_ref = this.editor.nodes.find(n => n.id === nodeNumber);
        if (node_ref) {
            let resourceContol = node_ref.controls.get('resource');
            resourceContol.onChangeRate(avg);
        }
    }
    updateNodeStructure(node) {
        node.getConnections().forEach(element => {
            this.editor.removeConnection(element);
        });
        node.outputs.clear();
        var item = node.data.resource;
        var output = new rete__WEBPACK_IMPORTED_MODULE_1__["Output"]("resource", item.name, this.socketController.GetSocketForId(item.id));
        node.addOutput(output);
        let control = node.controls.get('resource');
        control.onChangeRate(this.minecraftInventoryService.GetInventoryItemAverage(node.data.resource['id']));
        this.editor.trigger('nodeselected');
    }
}


/***/ }),

/***/ "hxwH":
/*!*******************************************!*\
  !*** ./src/app/general/general.module.ts ***!
  \*******************************************/
/*! exports provided: GeneralModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralModule", function() { return GeneralModule; });
/* harmony import */ var _pipe_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipe/highlight-text.pipe */ "mhUs");
/* harmony import */ var _item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-image-component/item-image.component */ "FjGt");
/* harmony import */ var _icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon-button/icon-button.component */ "MouV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






class GeneralModule {
}
GeneralModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: GeneralModule });
GeneralModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function GeneralModule_Factory(t) { return new (t || GeneralModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GeneralModule, { declarations: [_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__["IconButtonComponent"],
        _item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_1__["ItemImageComponent"],
        _pipe_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_0__["HighlightSearchPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]], exports: [_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__["IconButtonComponent"], _item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_1__["ItemImageComponent"], _pipe_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_0__["HighlightSearchPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](GeneralModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__["IconButtonComponent"],
                    _item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_1__["ItemImageComponent"],
                    _pipe_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_0__["HighlightSearchPipe"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
                ],
                exports: [_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__["IconButtonComponent"], _item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_1__["ItemImageComponent"], _pipe_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_0__["HighlightSearchPipe"]]
            }]
    }], null, null); })();


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
        return null;
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





function BaseNodeComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 23);
} }
function BaseNodeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaseNodeComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaseNodeComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaseNodeComponent_div_15_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const output_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, output_r7.data.rate, "1.2-2"));
} }
function BaseNodeComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BaseNodeComponent_div_15_div_4_Template, 3, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rete-socket", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const output_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](output_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isCustom());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("io", output_r7)("socket", output_r7.socket);
} }
function BaseNodeComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 41);
} if (rf & 2) {
    const control_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rete-control", control_r10);
} }
function BaseNodeComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](input_r11.name);
} }
function BaseNodeComponent_div_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 46);
} if (rf & 2) {
    const input_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rete-control", input_r11.control);
} }
function BaseNodeComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rete-socket", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BaseNodeComponent_div_19_div_2_Template, 2, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BaseNodeComponent_div_19_div_3_Template, 1, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("io", input_r11)("socket", input_r11.socket);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !input_r11.showControl());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", input_r11.showControl());
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
    getType() {
        return this.node.meta.type;
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
BaseNodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseNodeComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["NodeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 27, vars: 18, consts: [[1, "node", 3, "ngClass"], [1, "title-container"], [1, "shared"], [1, "title", "text-node-title"], [1, "star-container"], ["class", "glyphicon glyphicon-star", 4, "ngIf"], [1, "body-container"], [1, "background-image"], ["class", "resource-image", 4, "ngIf"], ["class", "crafting-image", 4, "ngIf"], ["class", "output-image", 4, "ngIf"], [1, "content"], [1, "outputs"], ["class", "output", 4, "ngFor", "ngForOf"], [1, "clear"], ["class", "controls", 3, "rete-control", 4, "ngFor", "ngForOf"], [1, "inputs"], ["class", "input", 4, "ngFor", "ngForOf"], [1, "node-footer"], [1, "node-type"], [1, "node-type-text", "text-node-type", "caps"], [1, "node-id"], [1, "node-id-text", "text-node-id"], [1, "glyphicon", "glyphicon-star"], [1, "resource-image"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-bricks"], ["fill-rule", "evenodd", "d", "M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5v-3zM3 4v2h4.5V4H3zm5.5 0v2H13V4H8.5zM3 10v2h4.5v-2H3zm5.5 0v2H13v-2H8.5zM1 1v2h3.5V1H1zm4.5 0v2H15V1H5.5zM1 7v2h3.5V7H1zm4.5 0v2h5V7h-5zm6 0v2H15V7h-3.5zM1 13v2h3.5v-2H1zm4.5 0v2h5v-2h-5zm6 0v2H15v-2h-3.5z"], [1, "crafting-image"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-hammer"], ["d", "M9.812 1.952a.5.5 0 0 1-.312.89c-1.671 0-2.852.596-3.616 1.185L4.857 5.073V6.21a.5.5 0 0 1-.146.354L3.425 7.853a.5.5 0 0 1-.708 0L.146 5.274a.5.5 0 0 1 0-.706l1.286-1.29a.5.5 0 0 1 .354-.146H2.84C4.505 1.228 6.216.862 7.557 1.04a5.009 5.009 0 0 1 2.077.782l.178.129z"], ["fill-rule", "evenodd", "d", "M6.012 3.5a.5.5 0 0 1 .359.165l9.146 8.646A.5.5 0 0 1 15.5 13L14 14.5a.5.5 0 0 1-.756-.056L4.598 5.297a.5.5 0 0 1 .048-.65l1-1a.5.5 0 0 1 .366-.147z"], [1, "output-image"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-minecart"], ["fill-rule", "evenodd", "d", "M4 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82l1.313 7h11.17l1.313-7H1.102z"], [1, "output"], [1, "socket-info"], [1, "output-title", "text-socket"], ["class", "output-rate-container", 4, "ngIf"], ["rete-socket", "", 3, "io", "socket"], [1, "output-rate-container"], ["type", "text", "readonly", "true", 1, "output-rate", "styled-input", 3, "value"], [1, "controls", 3, "rete-control"], [1, "input"], ["class", "input-title text-socket", 4, "ngIf"], ["class", "input-control", 3, "rete-control", 4, "ngIf"], [1, "input-title", "text-socket"], [1, "input-control", 3, "rete-control"]], template: function BaseNodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "kebab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BaseNodeComponent_span_7_Template, 1, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BaseNodeComponent_div_10_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BaseNodeComponent_div_11_Template, 4, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BaseNodeComponent_div_12_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BaseNodeComponent_div_15_Template, 6, 4, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BaseNodeComponent_div_17_Template, 1, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BaseNodeComponent_div_19_Template, 4, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](13, _c0, ctx.onCriticalPathClass(), ctx.selected(), ctx.isCustomClass(), ctx.node.name)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.node.data.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOutputFocused());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getType() == "resource" || ctx.getType() == "minecraft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getType() == "crafter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getType() == "output");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.outputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.node.meta.type, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.node.id, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["SocketComponent"], rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["ɵc"], rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["ɵb"]], pipes: [rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["ɵd"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: [".node[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 200px;\n  height: max(calc(250px - 40px), 100%);\n  border: 2px solid #707070;\n  border-radius: 0px 0px 5px 5px;\n  background-color: #fff;\n  padding-bottom: 15px;\n  box-sizing: content-box;\n  -webkit-user-select: none;\n          user-select: none;\n  curson: pointer;\n}\n.node.resource[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%], .node.resource[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .node.resource[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%] {\n  background: #66F23F;\n}\n.node.resource[_ngcontent-%COMP%]:hover {\n  background: #D8FCCE;\n}\n.node.resource.slected[_ngcontent-%COMP%] {\n  background: #D8FCCE;\n}\n.node.minecraft[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%], .node.minecraft[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .node.minecraft[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%] {\n  background: #A8AAB3;\n}\n.node.minecraft[_ngcontent-%COMP%]:hover {\n  background: #acb6c3;\n}\n.node.minecraft.slected[_ngcontent-%COMP%] {\n  background: #acb6c3;\n}\n.node.crafter[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%], .node.crafter[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .node.crafter[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%] {\n  background: #DBB62E;\n}\n.node.crafter[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .node.crafter[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .node.crafter[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  background: #DBB62E;\n}\n.node.crafter[_ngcontent-%COMP%]:hover {\n  background: #F6EDCA;\n}\n.node.crafter.selected[_ngcontent-%COMP%] {\n  background: #F6EDCA;\n}\n.node.output[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%], .node.output[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .node.output[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%] {\n  background: #2ED0DB;\n}\n.node.output[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .node.output[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .node.output[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  background: #2ED0DB;\n}\n.node.output[_ngcontent-%COMP%]:hover {\n  background: #CAF3F6;\n}\n.node.output.selected[_ngcontent-%COMP%] {\n  background: #CAF3F6;\n}\n.node.custom[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%], .node.custom[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .node.custom[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%] {\n  background: #C4B5F6;\n}\n.node.custom[_ngcontent-%COMP%]:hover {\n  background: #F0ECFD;\n}\n.node.custom.selected[_ngcontent-%COMP%] {\n  background: #F0ECFD;\n}\n.node.critical-path[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  background-image: repeating-linear-gradient(-45deg, transparent 0 10px, #FF6F45 10px calc( 2 * 10px));\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -40px;\n  right: -2px;\n  width: calc(100% + 2*2px);\n  height: 40px;\n  display: flex;\n  border: 2px #707070 solid;\n  border-radius: 2.5px 2.5px 0px 0px;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .resource[_ngcontent-%COMP%] {\n  background: #66F23F;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .crafter[_ngcontent-%COMP%] {\n  background: #DBB62E;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%] {\n  background: #2ED0DB;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%] {\n  background: #C4B5F6;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .shared[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 60%;\n  color: #2A2A2A;\n  margin: 5px auto;\n  border-radius: 5px;\n  text-align: center;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .star-container[_ngcontent-%COMP%] {\n  width: 20%;\n  height: auto;\n  margin-top: 5px;\n  margin-right: 5px;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .star-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #F5A300;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .background-image[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  right: 0;\n  z-index: 0;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .background-image[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #CCCCCC;\n  margin: 10%;\n  width: 80%;\n  height: 80%;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%] {\n  width: 100%;\n  float: right;\n  text-align: right;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .socket-info[_ngcontent-%COMP%] {\n  width: calc( 100% - 24px);\n  float: left;\n  padding-top: 6px;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .socket-info[_ngcontent-%COMP%]   .output-title[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-top: 2.5px;\n  float: right;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input-title[_ngcontent-%COMP%], .node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .output-title[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  display: inline-block;\n  font-family: sans-serif;\n  font: 14px;\n  margin: 6px;\n  line-height: 24px;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input-title[hidden][_ngcontent-%COMP%], .node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .output-title[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input-control[_ngcontent-%COMP%] {\n  z-index: 1;\n  width: calc( 100% - 36px);\n  vertical-align: middle;\n  display: inline-block;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-top: 10%;\n}\n.node[_ngcontent-%COMP%]   .node-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  height: 15px;\n  text-transform: capitalize;\n}\n.node[_ngcontent-%COMP%]   .node-footer[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  left: 25%;\n  border: 2px #707070 solid;\n  border-radius: 2px 2px 0px 0px;\n  border-bottom: 0px;\n}\n.node[_ngcontent-%COMP%]   .node-footer[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%]   .node-type-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.node[_ngcontent-%COMP%]   .node-footer[_ngcontent-%COMP%]   .node-id[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  width: 15px;\n  height: 15px;\n  border: 2px #707070 solid;\n  border-radius: 2px 0px 3px 0px;\n  border-right: 0px;\n  border-bottom: 0px;\n  background-color: #CCCCCC;\n}\n.node[_ngcontent-%COMP%]   .node-footer[_ngcontent-%COMP%]   .node-id[_ngcontent-%COMP%]   .node-id-text[_ngcontent-%COMP%] {\n  margin-top: -3px;\n  text-align: center;\n}\n.node.custom[_ngcontent-%COMP%] {\n  width: 425px;\n  height: max(calc(175px - 40px), 100%);\n}\n.node.custom[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.node.custom[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 40% 20% 40%;\n}\n.node.custom[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .clear[_ngcontent-%COMP%] {\n  clear: none;\n}\n.node.custom[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .outputs[_ngcontent-%COMP%] {\n  grid-row: 1;\n  grid-column: 3;\n  width: 100%;\n  float: right;\n  display: inline-block;\n}\n.node.custom[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .outputs[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.node.custom[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .outputs[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .output-title[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.node.custom[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .outputs[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .output-rate-container[_ngcontent-%COMP%] {\n  width: 45%;\n  float: right;\n}\n.node.custom[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  grid-row: 1;\n  grid-column: 2;\n  float: right;\n}\n.node.custom[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%] {\n  grid-row: 1;\n  grid-column: 1;\n  width: 100%;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL25vZGVzL2Jhc2Utbm9kZS9iYXNlLW5vZGUuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3JldGUtbW9kdWxlcy9fcmV0ZV92YXJpYWJsZXMuc2FzcyIsInNyYy9fZ2xvYmFscy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkNDUztFREFULHFDQ0dVO0VERFYseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBRUEsb0JDQ2lCO0VEQ2pCLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUFMSjtBQVFRO0VBQ0ksbUJFV1E7QUZqQnBCO0FBT1E7RUFDSSxtQkVRTztBRmJuQjtBQU1RO0VBQ0ksbUJFTU87QUZWbkI7QUFPUTtFQUNJLG1CRUtVO0FGVnRCO0FBTVE7RUFDSSxtQkVFUztBRk5yQjtBQUtRO0VBQ0ksbUJBQUE7QUFIWjtBQU1RO0VBR0ksbUJFVFE7QUZHcEI7QUFJWTtFQUNJLG1CRVJJO0FGTXBCO0FBSVE7RUFDSSxtQkVaTztBRlVuQjtBQUdRO0VBQ0ksbUJFZE87QUZhbkI7QUFHUTtFQUdJLG1CRXBCTTtBRmlCbEI7QUFDWTtFQUNJLG1CRW5CRTtBRm9CbEI7QUFDUTtFQUNJLG1CRXZCTTtBRndCbEI7QUFBUTtFQUNJLG1CRXpCTTtBRjJCbEI7QUFDUTtFQUNJLG1CRTlCTTtBRitCbEI7QUFBUTtFQUNJLG1CRWpDSztBRm1DakI7QUFEUTtFQUNJLG1CRW5DSztBRnNDakI7QUFBUTtFQUNJLHFHQUFBO0FBRVo7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkMxRFc7RUQyRFgsWUMvRFk7RURnRVosYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUFDUjtBQUNRO0VBQ0ksbUJFOUNRO0FGK0NwQjtBQUFRO0VBQ0ksbUJFbERRO0FGb0RwQjtBQURRO0VBQ0ksbUJFdERNO0FGeURsQjtBQUZRO0VBQ0ksbUJFMURNO0FGOERsQjtBQUZRO0VBQ0ksVUFBQTtBQUlaO0FBRlE7RUFDSSxVQUFBO0VBQ0EsY0V0RFE7RUZ1RFIsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSVo7QUFIUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUNqRmdCO0VEa0ZoQixpQkNsRmdCO0FEdUY1QjtBQUpZO0VBQ0ksZUNyRlU7RURzRlYsY0NwRlc7QUQwRjNCO0FBSEk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBS1I7QUFIUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFLWjtBQUhZO0VBQ0ksY0VqRlM7RUZrRlQsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBS2hCO0FBSFE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUtaO0FBSFk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBS2hCO0FBSmdCO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JDcEhKO0FEMEhoQjtBQUxvQjtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFPeEI7QUFKWTtFQUNJLFdBQUE7QUFNaEI7QUFMZ0I7RUFDSSxnQkFBQTtBQU9wQjtBQU5nQjtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxXQ3BJSjtFRHFJSSxpQkN0SU47QUQ4SWQ7QUFQb0I7RUFDSSxhQUFBO0FBU3hCO0FBUGdCO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQVNwQjtBQVBZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVNoQjtBQU5JO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlDaEthO0VEaUtiLDBCQUFBO0FBUVI7QUFOUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBUVo7QUFOWTtFQUNJLGtCQUFBO0FBUWhCO0FBTlE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEseUJFakthO0FGd0t6QjtBQUxZO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQU9oQjtBQUpJO0VBQ0ksWUN2TVk7RUR3TVoscUNDck1hO0FEMk1yQjtBQUpRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFNWjtBQUpZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQU1oQjtBQUpnQjtFQUNJLFdBQUE7QUFNcEI7QUFKZ0I7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFNcEI7QUFMb0I7RUFDSSxZQUFBO0FBT3hCO0FBTndCO0VBQ0ksWUFBQTtBQVE1QjtBQVB3QjtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBUzVCO0FBUGdCO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBU3BCO0FBUGdCO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVNwQiIsImZpbGUiOiJzcmMvYXBwL3JldGUtbW9kdWxlcy9ub2Rlcy9iYXNlLW5vZGUvYmFzZS1ub2RlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAuLi8uLi9yZXRlX3ZhcmlhYmxlc1xuQGltcG9ydCAuLi8uLi8uLi8uLi9fZ2xvYmFsc1xuXG4ubm9kZVxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgIG1pbi13aWR0aDogJG5vZGUtd2lkdGhcbiAgICBoZWlnaHQ6ICRub2RlLWhlaWdodFxuXG4gICAgYm9yZGVyOiAkbm9kZS1ib3JkZXItd2lkdGggc29saWQgIzcwNzA3MFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZcblxuICAgIHBhZGRpbmctYm90dG9tOiAkbm9kZS1mb290ZXItaGVpZ2h0XG5cbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveFxuICAgIHVzZXItc2VsZWN0OiBub25lXG4gICAgY3Vyc29uOiBwb2ludGVyXG5cbiAgICAmLnJlc291cmNlXG4gICAgICAgIC50aXRsZS1jb250YWluZXIsIC50aXRsZSwgLm5vZGUtdHlwZVxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHJlc291cmNlLWhpZ2hsaWdodFxuICAgICAgICAmOmhvdmVyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcmVzb3VyY2Utc2VsZWN0ZWRcbiAgICAgICAgJi5zbGVjdGVkXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcmVzb3VyY2Utc2VsZWN0ZWRcblxuICAgICYubWluZWNyYWZ0XG4gICAgICAgIC50aXRsZS1jb250YWluZXIsIC50aXRsZSwgLm5vZGUtdHlwZVxuICAgICAgICAgICAgYmFja2dyb3VuZDogJG1pbmVjcmFmdC1oaWdobGlnaHRcbiAgICAgICAgJjpob3ZlclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJG1pbmVjcmFmdC1zZWxlY3RlZFxuICAgICAgICAmLnNsZWN0ZWRcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRtaW5lY3JhZnQtc2VsZWN0ZWRcblxuICAgICYuY3JhZnRlclxuICAgICAgICAudGl0bGUtY29udGFpbmVyLCAudGl0bGUsIC5ub2RlLXR5cGVcbiAgICAgICAgICAgIC50aXRsZVxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjcmFmdGluZy1oaWdobGlnaHRcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjcmFmdGluZy1oaWdobGlnaHRcbiAgICAgICAgJjpob3ZlclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGNyYWZ0aW5nLXNlbGVjdGVkXG4gICAgICAgICYuc2VsZWN0ZWRcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjcmFmdGluZy1zZWxlY3RlZFxuICAgICYub3V0cHV0XG4gICAgICAgIC50aXRsZS1jb250YWluZXIsIC50aXRsZSwgLm5vZGUtdHlwZVxuICAgICAgICAgICAgLnRpdGxlXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJG91dHB1dC1oaWdobGlnaHRcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRvdXRwdXQtaGlnaGxpZ2h0XG4gICAgICAgICY6aG92ZXJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRvdXRwdXQtc2VsZWN0ZWRcbiAgICAgICAgJi5zZWxlY3RlZFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJG91dHB1dC1zZWxlY3RlZFxuXG4gICAgJi5jdXN0b21cbiAgICAgICAgLnRpdGxlLWNvbnRhaW5lciwgLnRpdGxlLCAubm9kZS10eXBlXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY3VzdG9tLWhpZ2hsaWdodFxuICAgICAgICAmOmhvdmVyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY3VzdG9tLXNlbGVjdGVkXG4gICAgICAgICYuc2VsZWN0ZWRcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjdXN0b20tc2VsZWN0ZWRcblxuICAgICYuY3JpdGljYWwtcGF0aFxuICAgICAgICAudGl0bGUtY29udGFpbmVyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KC00NWRlZywgdHJhbnNwYXJlbnQgMCAkcGluc3RyaXBlLXdpZHRoLCAgJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0ICRwaW5zdHJpcGUtd2lkdGggY2FsYyggMiAqICN7JHBpbnN0cmlwZS13aWR0aH0pKVxuXG5cbiAgICAudGl0bGUtY29udGFpbmVyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgICB0b3A6IC0kbm9kZS10aXRsZS1oZWlnaHRcbiAgICAgICAgcmlnaHQ6IC0kbm9kZS1ib3JkZXItd2lkdGhcbiAgICAgICAgd2lkdGg6ICRub2RlLXRpdGxlLXdpZHRoXG4gICAgICAgIGhlaWdodDogJG5vZGUtdGl0bGUtaGVpZ2h0XG4gICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgYm9yZGVyOiAkbm9kZS1ib3JkZXItd2lkdGggJGNvbG9yLWRlZmF1bHQgc29saWRcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMi41cHggMi41cHggMHB4IDBweFxuXG4gICAgICAgIC5yZXNvdXJjZVxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHJlc291cmNlLWhpZ2hsaWdodFxuICAgICAgICAuY3JhZnRlclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGNyYWZ0aW5nLWhpZ2hsaWdodFxuICAgICAgICAub3V0cHV0XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkb3V0cHV0LWhpZ2hsaWdodFxuICAgICAgICAuY3VzdG9tXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY3VzdG9tLWhpZ2hsaWdodFxuXG4gICAgICAgIC5zaGFyZWRcbiAgICAgICAgICAgIHdpZHRoOiAyMCVcblxuICAgICAgICAudGl0bGVcbiAgICAgICAgICAgIHdpZHRoOiA2MCVcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItZGVmYXVsdC1kYXJrXG4gICAgICAgICAgICBtYXJnaW46IDVweCBhdXRvXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHhcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICAuc3Rhci1jb250YWluZXJcbiAgICAgICAgICAgIHdpZHRoOiAyMCVcbiAgICAgICAgICAgIGhlaWdodDogYXV0b1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogJG91dHB1dC1mb2N1cy1nbHlwaC1tYXJnaW5cbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogJG91dHB1dC1mb2N1cy1nbHlwaC1tYXJnaW5cbiAgICAgICAgICAgIHNwYW5cbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRvdXRwdXQtZm9jdXMtZ2x5cGgtc2l6ZVxuICAgICAgICAgICAgICAgIGNvbG9yOiAkb3V0cHV0LWZvY3VzLWdseXBoLWNvbG9yXG5cblxuICAgIC5ib2R5LWNvbnRhaW5lclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgaGVpZ2h0OiAxMDAlXG5cbiAgICAgICAgLmJhY2tncm91bmQtaW1hZ2VcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICAgIGhlaWdodDogMTAwJVxuICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgICAgICByaWdodDogMFxuICAgICAgICAgICAgei1pbmRleDogMFxuXG4gICAgICAgICAgICBzdmdcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWRlZmF1bHQtaGlnaGxpZ2h0XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCVcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCVcblxuICAgICAgICAuY29udGVudFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICAgICAgICB6LWluZGV4OiAxMDBcblxuICAgICAgICAgICAgLm91dHB1dFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHRcbiAgICAgICAgICAgICAgICAuc29ja2V0LWluZm9cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAjeyRzb2NrZXQtc2l6ZX0pXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAkc29ja2V0LW1hcmdpblxuICAgICAgICAgICAgICAgICAgICAub3V0cHV0LXRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMi41cHhcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodFxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgLmlucHV0c1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICAgICAgLmlucHV0XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnRcbiAgICAgICAgICAgICAgICAuaW5wdXQtdGl0bGUsLm91dHB1dC10aXRsZVxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZlxuICAgICAgICAgICAgICAgICAgICBmb250OiAxNHB4XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJHNvY2tldC1tYXJnaW5cbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICRzb2NrZXQtc2l6ZVxuICAgICAgICAgICAgICAgICAgICAmW2hpZGRlbl1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcblxuICAgICAgICAgICAgICAgIC5pbnB1dC1jb250cm9sXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDFcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAjeyRzb2NrZXQtc2l6ZSArIDIqJHNvY2tldC1tYXJnaW59KVxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuXG4gICAgICAgICAgICAuY29udHJvbHNcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJVxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMCVcblxuXG4gICAgLm5vZGUtZm9vdGVyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgICBib3R0b206IDBweFxuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICBoZWlnaHQ6ICRub2RlLWZvb3Rlci1oZWlnaHRcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemVcblxuICAgICAgICAubm9kZS10eXBlXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgICAgICAgIHdpZHRoOiA1MCVcbiAgICAgICAgICAgIGhlaWdodDogMTAwJVxuICAgICAgICAgICAgbGVmdDogMjUlXG4gICAgICAgICAgICBib3JkZXI6IDJweCAkY29sb3ItZGVmYXVsdCBzb2xpZFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwcHggMHB4XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwcHhcblxuICAgICAgICAgICAgLm5vZGUtdHlwZS10ZXh0XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG5cbiAgICAgICAgLm5vZGUtaWRcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgICAgICAgcmlnaHQ6IDBweFxuICAgICAgICAgICAgd2lkdGg6IDE1cHhcbiAgICAgICAgICAgIGhlaWdodDogMTVweFxuICAgICAgICAgICAgYm9yZGVyOiAycHggJGNvbG9yLWRlZmF1bHQgc29saWRcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweCAwcHggM3B4IDBweFxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwcHhcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDBweFxuXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZGVmYXVsdC1oaWdobGlnaHRcblxuICAgICAgICAgICAgLm5vZGUtaWQtdGV4dFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zcHhcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcblxuICAgIC8vIEN1c3RvbSBub2RlIHN0eWxpbmdcbiAgICAmLmN1c3RvbVxuICAgICAgICB3aWR0aDogJG5vZGUtY3VzdG9tLXdpZHRoXG4gICAgICAgIGhlaWdodDogJG5vZGUtY3VzdG9tLWhlaWdodFxuXG4gICAgICAgIC5ib2R5LWNvbnRhaW5lclxuICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICAgIGhlaWdodDogMTAwJVxuXG4gICAgICAgICAgICAuY29udGVudFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJVxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWRcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSAyMCUgNDAlXG5cbiAgICAgICAgICAgICAgICAuY2xlYXJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXI6IG5vbmVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5vdXRwdXRzXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtcm93OiAxXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgICAgICAgICAgICAgICAgICAgLm91dHB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvXG4gICAgICAgICAgICAgICAgICAgICAgICAub3V0cHV0LXRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvXG4gICAgICAgICAgICAgICAgICAgICAgICAub3V0cHV0LXJhdGUtY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1JVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodFxuXG4gICAgICAgICAgICAgICAgLmNvbnRyb2xzXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtcm93OiAxXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodFxuXG4gICAgICAgICAgICAgICAgLmlucHV0c1xuICAgICAgICAgICAgICAgICAgICBncmlkLXJvdzogMVxuICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMVxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdFxuXG5cbiAgICAgICAgICAgICAgICBcbiIsIkB1c2UgXCJzYXNzOm1hcFwiXG5cbi8vIENyaXRpY2FsIFBhdGggUGluc3RyaXBlIHdpZHRoICAgIFxuJHBpbnN0cmlwZS13aWR0aDogMTBweFxuXG4vLyAjIyMjIyMjIyMjIE5vZGUgU2V0dGluZ3MgIyMjIyMjIyMjI1xuJG5vZGUtd2lkdGg6IDIwMHB4XG4kbm9kZS1jdXN0b20td2lkdGg6IDQyNXB4XG4kbm9kZS10aXRsZS1oZWlnaHQ6IDQwcHhcbiRub2RlLWhlaWdodDogbWF4KCBjYWxjKDI1MHB4IC0gI3skbm9kZS10aXRsZS1oZWlnaHR9KSwgMTAwJSApXG4kbm9kZS1jdXN0b20taGVpZ2h0OiBtYXgoIGNhbGMoMTc1cHggLSAjeyRub2RlLXRpdGxlLWhlaWdodH0pLCAxMDAlIClcbiRub2RlLWJvcmRlci13aWR0aDogMnB4XG4kbm9kZS10aXRsZS13aWR0aDogY2FsYygxMDAlICsgMiojeyRub2RlLWJvcmRlci13aWR0aH0pXG4kbm9kZS1mb290ZXItaGVpZ2h0OiAxNXB4XG5cbiRvdXRwdXQtZm9jdXMtZ2x5cGgtc2l6ZTogMjVweFxuJG91dHB1dC1mb2N1cy1nbHlwaC1tYXJnaW46IDVweFxuJG91dHB1dC1mb2N1cy1nbHlwaC1jb2xvcjogI0Y1QTMwMFxuXG4kc29ja2V0LXNpemU6IDI0cHhcbiRzb2NrZXQtbWFyZ2luOiA2cHhcbiRzb2NrZXQtY29sb3I6ICNFMDk1MkJcbiRzb2NrZXQtYm9yZGVyLWNvbG9yOiAjOTQ2NTIzXG5cbiRzb2NrZXQtaXRlbS1tYXA6ICggXCJTdG9uZVwiOiAjODg4LCBcIkdyYXNzXCI6ICMxODEsIFwiRGlydFwiOiAjNjgzNjE5LCBcIkNvYmJsZXN0b25lXCI6ICM0NDQsIFwiUGxhbmtzXCI6ICNiOTkwNWIsIFwiTG9nc1wiOiAjNzQ0MDEwLCBcIjJcIjogIzg4OCwgXCIzXCI6ICM4ODgsKVxuXG5AZnVuY3Rpb24gZ2V0LWl0ZW0tY29sb3IoJGl0ZW0pIFxuICAgIEByZXR1cm4gbWFwLWdldCgkc29ja2V0LWl0ZW0tbWFwLCAkaXRlbSlcblxuQGZ1bmN0aW9uIGdldC1pdGVtLWJvcmRlcigkaXRlbSlcbiAgICAkY29sb3I6IGdldC1pdGVtLWNvbG9yKCRpdGVtKVxuICAgIEBpZiBsaWdodG5lc3MoJGNvbG9yKSA+IDQwJVxuICAgICAgICBAcmV0dXJuIGRhcmtlbigkY29sb3IsIDI1JSlcbiAgICBAZWxzZSBcbiAgICAgICAgQHJldHVybiBsaWdodGVuKCRjb2xvciwgMjUlKSIsIi8vICMjIyMjIyMjIyMgR2xvYmFsIExheW91dCBTZXR0aW5ncyAjIyMjIyMjIyMjXG4kZ3JpZC13aWR0aDogNzUlXG4kZ3JpZC1oZWlnaHQ6IDYwJVxuXG4vLyBTcGFjaW5ncyBiZXR3ZWVuIG1vZHVsZXNcbiRtb2R1bGUtbWFyZ2luLWxlZnQ6IDEwcHhcbiRtb2R1bGUtbWFyZ2luLXRvcDogJG1vZHVsZS1tYXJnaW4tbGVmdFxuXG4kb3V0cHV0LXdpZHRoOiBjYWxjKDEwMCUgLSAjeyRncmlkLXdpZHRofSlcbiRvdXRwdXQtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyKiN7JG1vZHVsZS1tYXJnaW4tdG9wfSlcbiAgICBcbiRidXR0b24taGVpZ2h0OiA0MHB4XG5cbi8vIERlbGV0ZSBzcGVjaWZpYyBidXR0b24gc2V0dGluZ3NcbiRkZWxldGUtYnV0dG9uLXdpZHRoOiAxNTBweFxuJGRlbGV0ZS1idXR0b24taGVpZ2h0OiA1MHB4XG5cbi8vIEludmVudG9yeSBXaWRnZXQgaGVpZ2h0XG4kcmVzb3VyY2UtY2hpbGRyZW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAzKiN7JG1vZHVsZS1tYXJnaW4tdG9wfSlcblxuJGJvcmRlci10aGlja25lc3M6IDJweFxuXG5cbi8vICMjIyMjIyMjIyMgQ29sb3IgRGVmaW5pdGlvbnMgIyMjIyMjIyMjI1xuJGN1c3RvbS1zZWxlY3RlZDojRjBFQ0ZEXG4kY3VzdG9tLWhpZ2hsaWdodDojQzRCNUY2XG4kb3V0cHV0LXNlbGVjdGVkOiAjQ0FGM0Y2XG4kb3V0cHV0LWhpZ2hsaWdodDojMkVEMERCXG4kY3JhZnRpbmctc2VsZWN0ZWQ6I0Y2RURDQVxuJGNyYWZ0aW5nLWhpZ2hsaWdodDojREJCNjJFXG4kcmVzb3VyY2Utc2VsZWN0ZWQ6I0Q4RkNDRVxuJHJlc291cmNlLWhpZ2hsaWdodDojNjZGMjNGXG4kbWluZWNyYWZ0LXNlbGVjdGVkOiAjYWNiNmMzXG4kbWluZWNyYWZ0LWhpZ2hsaWdodDogI0E4QUFCM1xuXG4kY29sb3ItZGVmYXVsdDojNzA3MDcwXG4kY29sb3ItZGVmYXVsdC1kYXJrOiMyQTJBMkFcbiRjb2xvci1kZWZhdWx0LWhpZ2hsaWdodDojQ0NDQ0NDXG5cbi8vIFBpbnN0cmlwZSBEZWZpbml0aW9uc1xuJGNyaXRpY2FsLXBhdGgtc2VsZWN0ZWQ6I0ZGREFEMFxuJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0OiNGRjZGNDVcbiRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodC1hbHBoYTogcmdiYSggJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0LCAuNSlcblxuXG4vLyAjIyMjIyMjIyMjIFNwcml0ZSBSZW5kZXJpbmcgU2V0dGluZ3NcbiRzcHJpdGUtc2l6ZTogMzJweFxuJHNwcml0ZS1zY2FsZTogMi4yXG5cbi8vIEluIG51bWJlciBvZiBzcHJpdGVzXG4kc3ByaXRlLXNoZWV0LWhvcml6b250YWwtZGltZW5zaW9uczogMTZcbiRzcHJpdGUtc2hlZXQtdmVydGljYWwtZGltZW5zaW9uczogMzVcblxuJHNwcml0ZS13aWR0aDogY2FsYygjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2NhbGV9KVxuJHNwcml0ZS1zaGVldC13aWR0aDogY2FsYyggI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNoZWV0LWhvcml6b250YWwtZGltZW5zaW9ucyAqICRzcHJpdGUtc2NhbGV9KVxuJHNwcml0ZS1zaGVldC1oZWlnaHQ6IGNhbGMoICN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zaGVldC12ZXJ0aWNhbC1kaW1lbnNpb25zICogJHNwcml0ZS1zY2FsZX0pXG5cbi8vIFNwcml0ZSBpbWFnZSBkaXNwbGF5IHNldHRpbmdzXG4kc3ByaXRlLWJvcmRlci1wYWRkaW5nOiA1cHgiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseNodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './base-node.component.html',
                styleUrls: ['./base-node.component.sass'],
                providers: [rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["NodeService"]],
            }]
    }], function () { return [{ type: rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["NodeService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "mhUs":
/*!*****************************************************!*\
  !*** ./src/app/general/pipe/highlight-text.pipe.ts ***!
  \*****************************************************/
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
/* harmony import */ var _general_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../general/icon-button/icon-button.component */ "MouV");
/* harmony import */ var _graph_view_graph_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graph-view/graph-view.component */ "7bOH");
/* harmony import */ var _output_item_output_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../output-item/output-item.component */ "E5D1");







function OutputContainerComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-output-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dropdownPressed", function OutputContainerComponent_div_10_div_1_Template_app_output_item_dropdownPressed_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.dropdownCallback($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", node_r3);
} }
function OutputContainerComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OutputContainerComponent_div_10_div_1_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.markedNodes);
} }
function OutputContainerComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-output-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dropdownPressed", function OutputContainerComponent_div_11_div_1_Template_app_output_item_dropdownPressed_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.dropdownCallback($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", child_r7);
} }
function OutputContainerComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OutputContainerComponent_div_11_div_1_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.getSelectedChildren());
} }
const _c0 = "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z";
const _c1 = function () { return [_c0]; };
const _c2 = "M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z";
const _c3 = function () { return [_c2]; };
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
        if (this.selectedNode) {
            this.nodeStack.push(this.selectedNode);
        }
        this.selectedNode = node;
        this.hasSelectedNode = true;
    }
    popNode() {
        if (this.nodeStack.length > 0) {
            this.selectedNode = this.nodeStack.pop();
        }
        else {
            this.topNode();
        }
    }
    topNode() {
        this.selectedNode = null;
        this.hasSelectedNode = false;
        this.nodeStack = [];
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
OutputContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutputContainerComponent, selectors: [["app-output-container"]], decls: 14, vars: 10, consts: [[1, "output-wrapper", "module-margin"], [1, "tab-bar"], ["data-toggle", "collapse", "data-target", "#focusedNodes,#graphs", 1, "button", "tab-button", "btn", 3, "ngClass", "click"], [1, "output-data-wrapper", "scrollable"], ["id", "focusedNodes", 1, "collapse", "show"], [1, "subtab-bar", 3, "ngClass"], [1, "back-button", 3, "icon", "strokes", "onClick"], [1, "up-button", 3, "icon", "strokes", "onClick"], [1, "spacer-10"], [4, "ngIf"], ["id", "graphs", 1, "collapse"], [4, "ngFor", "ngForOf"], [3, "node", "dropdownPressed"]], template: function OutputContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OutputContainerComponent_Template_button_click_2_listener() { return ctx.onFocusClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Focused");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-icon-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function OutputContainerComponent_Template_app_icon_button_onClick_7_listener() { return ctx.popNode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-icon-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function OutputContainerComponent_Template_app_icon_button_onClick_8_listener() { return ctx.topNode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OutputContainerComponent_div_10_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OutputContainerComponent_div_11_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-graph-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isFocusSelected ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.hasSelectedNode ? "hidden" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "bi-arrow-left")("strokes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "bi-arrow-up")("strokes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasSelectedNode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasSelectedNode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _general_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__["IconButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _graph_view_graph_view_component__WEBPACK_IMPORTED_MODULE_4__["GraphViewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _output_item_output_item_component__WEBPACK_IMPORTED_MODULE_5__["OutputItemComponent"]], styles: [".scrollable[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n.tab-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  background-color: #2A2A2A;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  border: 2px solid #707070;\n  border-radius: 5px;\n  margin: calc( 5px - 2px) calc( 5px - 2px) 5px 5px;\n}\n\n.tab-button[_ngcontent-%COMP%] {\n  width: calc( 50% - 10px );\n  height: 40px;\n  font-style: bold;\n  font-size: 20px;\n  text-align: center;\n}\n\n.subtab-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  display: inline-flex;\n  background-color: #CCCCCC;\n  padding: 5px;\n}\n\n.subtab-bar[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.subtab-bar[_ngcontent-%COMP%]   .up-button[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #66F23F;\n}\n\n.output-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  height: calc(100% - 20px);\n  margin: 10px;\n  border: 2px solid black;\n}\n\n.output-data-warpper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n#focusedNodes[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n#graphs[_ngcontent-%COMP%] {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0cHV0L291dHB1dC1jb250YWluZXIvb3V0cHV0LWNvbnRhaW5lci5jb21wb25lbnQuc2FzcyIsInNyYy9fZ2xvYmFscy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQUE7QUFESjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJDNEJnQjtBRDVCcEI7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFHSjs7QUFESTtFQUNJLGlCQUFBO0FBR1I7O0FBREk7RUFDSSxZQUFBO0FBR1I7O0FBREE7RUFDSSxhQUFBO0FBSUo7O0FBRkE7RUFDSSx5QkNUZ0I7QURjcEI7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFPSjs7QUFMQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUFRSjs7QUFOQTtFQUNJLFlBQUE7QUFTSjs7QUFQQTtFQUNJLFlBQUE7QUFVSiIsImZpbGUiOiJzcmMvYXBwL291dHB1dC9vdXRwdXQtY29udGFpbmVyL291dHB1dC1jb250YWluZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IC4uLy4uLy4uL2dsb2JhbHNcblxuLnNjcm9sbGFibGVcbiAgICBvdmVyZmxvdy15OiBhdXRvXG4gICAgXG4udGFiLWJhclxuICAgIHdpZHRoOiAxMDAlXG4gICAgaGVpZ2h0OiA1MHB4XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRlZmF1bHQtZGFya1xuXG4uYnV0dG9uXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRlxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvci1kZWZhdWx0XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IFxuICAgIG1hcmdpbjogY2FsYyggNXB4IC0gMnB4KSBjYWxjKCA1cHggLSAycHgpIDVweCA1cHhcbiAgICBcbi50YWItYnV0dG9uXG4gICAgd2lkdGg6IGNhbGMoIDUwJSAtIDEwcHggKVxuICAgIGhlaWdodDogNDBweFxuICAgIGZvbnQtc3R5bGU6IGJvbGRcbiAgICBmb250LXNpemU6IDIwcHhcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcblxuLnN1YnRhYi1iYXJcbiAgICB3aWR0aDogMTAwJVxuICAgIGhlaWdodDogNTBweFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQ1xuICAgIHBhZGRpbmc6IDVweFxuXG4gICAgLmJhY2stYnV0dG9uXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4XG5cbiAgICAudXAtYnV0dG9uXG4gICAgICAgIGZsb2F0OiByaWdodFxuXG4uaGlkZGVuXG4gICAgZGlzcGxheTogbm9uZVxuXG4uYWN0aXZlXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJlc291cmNlLWhpZ2hsaWdodFxuICAgIFxuLm91dHB1dC13cmFwcGVyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgZGlzcGxheTogYmxvY2tcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpXG4gICAgbWFyZ2luOiAxMHB4XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2tcblxuLm91dHB1dC1kYXRhLXdhcnBwZXJcbiAgICB3aWR0aDogMTAwJVxuICAgIGhlaWdodDogMTAwJVxuXG4uYm90dG9tXG4gICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgYm90dG9tOiAwXG4gICAgbGVmdDogMFxuXG4jZm9jdXNlZE5vZGVzXG4gICAgaGVpZ2h0OiBhdXRvXG5cbiNncmFwaHNcbiAgICBoZWlnaHQ6IGF1dG8iLCIvLyAjIyMjIyMjIyMjIEdsb2JhbCBMYXlvdXQgU2V0dGluZ3MgIyMjIyMjIyMjI1xuJGdyaWQtd2lkdGg6IDc1JVxuJGdyaWQtaGVpZ2h0OiA2MCVcblxuLy8gU3BhY2luZ3MgYmV0d2VlbiBtb2R1bGVzXG4kbW9kdWxlLW1hcmdpbi1sZWZ0OiAxMHB4XG4kbW9kdWxlLW1hcmdpbi10b3A6ICRtb2R1bGUtbWFyZ2luLWxlZnRcblxuJG91dHB1dC13aWR0aDogY2FsYygxMDAlIC0gI3skZ3JpZC13aWR0aH0pXG4kb3V0cHV0LWhlaWdodDogY2FsYygxMDAlIC0gMiojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG4gICAgXG4kYnV0dG9uLWhlaWdodDogNDBweFxuXG4vLyBEZWxldGUgc3BlY2lmaWMgYnV0dG9uIHNldHRpbmdzXG4kZGVsZXRlLWJ1dHRvbi13aWR0aDogMTUwcHhcbiRkZWxldGUtYnV0dG9uLWhlaWdodDogNTBweFxuXG4vLyBJbnZlbnRvcnkgV2lkZ2V0IGhlaWdodFxuJHJlc291cmNlLWNoaWxkcmVuLWhlaWdodDogY2FsYygxMDAlIC0gMyojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG5cbiRib3JkZXItdGhpY2tuZXNzOiAycHhcblxuXG4vLyAjIyMjIyMjIyMjIENvbG9yIERlZmluaXRpb25zICMjIyMjIyMjIyNcbiRjdXN0b20tc2VsZWN0ZWQ6I0YwRUNGRFxuJGN1c3RvbS1oaWdobGlnaHQ6I0M0QjVGNlxuJG91dHB1dC1zZWxlY3RlZDogI0NBRjNGNlxuJG91dHB1dC1oaWdobGlnaHQ6IzJFRDBEQlxuJGNyYWZ0aW5nLXNlbGVjdGVkOiNGNkVEQ0FcbiRjcmFmdGluZy1oaWdobGlnaHQ6I0RCQjYyRVxuJHJlc291cmNlLXNlbGVjdGVkOiNEOEZDQ0VcbiRyZXNvdXJjZS1oaWdobGlnaHQ6IzY2RjIzRlxuJG1pbmVjcmFmdC1zZWxlY3RlZDogI2FjYjZjM1xuJG1pbmVjcmFmdC1oaWdobGlnaHQ6ICNBOEFBQjNcblxuJGNvbG9yLWRlZmF1bHQ6IzcwNzA3MFxuJGNvbG9yLWRlZmF1bHQtZGFyazojMkEyQTJBXG4kY29sb3ItZGVmYXVsdC1oaWdobGlnaHQ6I0NDQ0NDQ1xuXG4vLyBQaW5zdHJpcGUgRGVmaW5pdGlvbnNcbiRjcml0aWNhbC1wYXRoLXNlbGVjdGVkOiNGRkRBRDBcbiRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodDojRkY2RjQ1XG4kY3JpdGljYWwtcGF0aC1oaWdobGlnaHQtYWxwaGE6IHJnYmEoICRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodCwgLjUpXG5cblxuLy8gIyMjIyMjIyMjIyBTcHJpdGUgUmVuZGVyaW5nIFNldHRpbmdzXG4kc3ByaXRlLXNpemU6IDMycHhcbiRzcHJpdGUtc2NhbGU6IDIuMlxuXG4vLyBJbiBudW1iZXIgb2Ygc3ByaXRlc1xuJHNwcml0ZS1zaGVldC1ob3Jpem9udGFsLWRpbWVuc2lvbnM6IDE2XG4kc3ByaXRlLXNoZWV0LXZlcnRpY2FsLWRpbWVuc2lvbnM6IDM1XG5cbiRzcHJpdGUtd2lkdGg6IGNhbGMoI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNjYWxlfSlcbiRzcHJpdGUtc2hlZXQtd2lkdGg6IGNhbGMoICN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zaGVldC1ob3Jpem9udGFsLWRpbWVuc2lvbnMgKiAkc3ByaXRlLXNjYWxlfSlcbiRzcHJpdGUtc2hlZXQtaGVpZ2h0OiBjYWxjKCAjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2hlZXQtdmVydGljYWwtZGltZW5zaW9ucyAqICRzcHJpdGUtc2NhbGV9KVxuXG4vLyBTcHJpdGUgaW1hZ2UgZGlzcGxheSBzZXR0aW5nc1xuJHNwcml0ZS1ib3JkZXItcGFkZGluZzogNXB4Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-output-container',
                templateUrl: './output-container.component.html',
                styleUrls: ['./output-container.component.sass']
            }]
    }], function () { return [{ type: _services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__["OutputManagerService"] }]; }, null); })();


/***/ }),

/***/ "nXju":
/*!****************************************************************************!*\
  !*** ./src/app/inventory/inventory-display/inventory-display.component.ts ***!
  \****************************************************************************/
/*! exports provided: InventoryDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryDisplayComponent", function() { return InventoryDisplayComponent; });
/* harmony import */ var _general_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../general/item-image-component/item-image.component */ "FjGt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/minecraft-inventory.service */ "v5B+");
/* harmony import */ var src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rete-modules/services/item.service */ "x7rl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function InventoryDisplayComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragstart", function InventoryDisplayComponent_div_3_Template_div_dragstart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.OnDrag($event, item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "item-image", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.GetGridStyle(item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedItem", ctx_r0.GetItem(item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.quantity);
} }
class InventoryDisplayComponent {
    constructor(minecraftInventory, itemService) {
        this.minecraftInventory = minecraftInventory;
        this.itemService = itemService;
        this.minecraftItems = minecraftInventory.GetAllInventoryItems();
        setInterval(() => {
            this.minecraftItems = minecraftInventory.GetAllInventoryItems();
        }, 1000);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        console.log(this.minecraftItemViews);
    }
    GetItem(item) {
        return this.itemService.GetItemFromId(item.id);
    }
    // Note: Minecraft items are base 0, javascript grids are base 1 for starting index
    //  that is the reason +1 is added to everything
    GetGridStyle(item) {
        // Item is in the hotbar
        let gridLocation = {};
        if (item.slot <= 8) {
            gridLocation['grid-row'] = 'hotbar';
            gridLocation['grid-column'] = item.slot + 1;
            return gridLocation;
        }
        // Inventory slots start at 9 after the hot bar. Adjusting to 0-27
        let inventorySlot = item.slot - 9;
        gridLocation['grid-row'] = Math.floor(inventorySlot / 9) + 1;
        gridLocation['grid-column'] = (inventorySlot % 9) + 1;
        return gridLocation;
    }
    OnDrag(event, item) {
        console.log(event);
        console.log(item);
        event.dataTransfer.setData("nodeType", "Minecraft");
        event.dataTransfer.setData("nodeId", item.id);
        event.dataTransfer.effectAllowed = "copy";
    }
}
InventoryDisplayComponent.ɵfac = function InventoryDisplayComponent_Factory(t) { return new (t || InventoryDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_2__["MinecraftInventoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"])); };
InventoryDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InventoryDisplayComponent, selectors: [["app-inventory-display"]], viewQuery: function InventoryDisplayComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_general_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_0__["ItemImageComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.minecraftItemViews = _t);
    } }, decls: 4, vars: 1, consts: [[1, "inventory-wrapper"], ["src", "/assets/images/minecraft_inventory_window.png", 1, "inventory-visual"], [1, "inventory-offset"], ["class", "minecraft-item", "draggable", "true", 3, "ngStyle", "dragstart", 4, "ngFor", "ngForOf"], ["draggable", "true", 1, "minecraft-item", 3, "ngStyle", "dragstart"], [3, "selectedItem"], [1, "text-node-title", "inventory-count"]], template: function InventoryDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, InventoryDisplayComponent_div_3_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.minecraftItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _general_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_0__["ItemImageComponent"]], styles: [".inventory-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: calc(100% - 10px );\n  height: calc(100% - 3*10px);\n  margin: 10px;\n  padding: 4%;\n}\n.inventory-wrapper[_ngcontent-%COMP%]   .inventory-visual[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  bottom: -10px;\n  left: 0px;\n}\n.inventory-wrapper[_ngcontent-%COMP%]   .inventory-offset[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-rows: [top-start] 1fr [top-end mid-start] 1fr [mid-end bot-start] 1fr [bot-end] 0.2fr [hotbar-start] 1fr [hotbar-end];\n  grid-template-columns: repeat(9, 1fr);\n  grid-gap: 5px;\n}\n.inventory-wrapper[_ngcontent-%COMP%]   .inventory-offset[_ngcontent-%COMP%]   .minecraft-item[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 2px;\n  position: relative;\n  cursor: pointer;\n}\n.inventory-wrapper[_ngcontent-%COMP%]   .inventory-offset[_ngcontent-%COMP%]   .minecraft-item[_ngcontent-%COMP%]   .inventory-count[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2px;\n  right: 2px;\n  font-size: 24px;\n  font-weight: bolder;\n  color: #fff;\n  -webkit-text-stroke: 2px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2ludmVudG9yeS1kaXNwbGF5L2ludmVudG9yeS1kaXNwbGF5LmNvbXBvbmVudC5zYXNzIiwic3JjL19nbG9iYWxzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJDWXVCO0VEWHZCLFlBQUE7RUFDQSxXQUFBO0FBRko7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFGUjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBRUEsbUlBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7QUFIUjtBQU1RO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7QUFMWjtBQU9ZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQUxoQiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9pbnZlbnRvcnktZGlzcGxheS9pbnZlbnRvcnktZGlzcGxheS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2dsb2JhbHMnXG4gICAgXG4gICAgXG4uaW52ZW50b3J5LXdyYXBwZXJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gI3skbW9kdWxlX21hcmdpbl9sZWZ0fSApXG4gICAgaGVpZ2h0OiAkcmVzb3VyY2UtY2hpbGRyZW4taGVpZ2h0XG4gICAgbWFyZ2luOiAxMHB4XG4gICAgcGFkZGluZzogNCVcblxuICAgIC5pbnZlbnRvcnktdmlzdWFsXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICBoZWlnaHQ6IDEwMCVcbiAgICAgICAgdG9wOiAwcHhcbiAgICAgICAgYm90dG9tOiAtMTBweFxuICAgICAgICBsZWZ0OiAwcHhcblxuICAgIC5pbnZlbnRvcnktb2Zmc2V0XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgICAgICBkaXNwbGF5OiBncmlkXG5cbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBbdG9wLXN0YXJ0XSAxZnIgWyB0b3AtZW5kIG1pZC1zdGFydF0gMWZyIFttaWQtZW5kIGJvdC1zdGFydF0gMWZyIFtib3QtZW5kXSAuMmZyIFtob3RiYXItc3RhcnRdIDFmciBbaG90YmFyLWVuZF1cbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOSwgMWZyKVxuICAgICAgICBncmlkLWdhcDogNXB4XG5cblxuICAgICAgICAubWluZWNyYWZ0LWl0ZW1cbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICBwYWRkaW5nOiAycHhcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcblxuICAgICAgICAgICAgLmludmVudG9yeS1jb3VudFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTJweFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAycHhcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHhcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggYmxhY2tcbiAgICAgICAgICAgICAgICBcbiAgICAiLCIvLyAjIyMjIyMjIyMjIEdsb2JhbCBMYXlvdXQgU2V0dGluZ3MgIyMjIyMjIyMjI1xuJGdyaWQtd2lkdGg6IDc1JVxuJGdyaWQtaGVpZ2h0OiA2MCVcblxuLy8gU3BhY2luZ3MgYmV0d2VlbiBtb2R1bGVzXG4kbW9kdWxlLW1hcmdpbi1sZWZ0OiAxMHB4XG4kbW9kdWxlLW1hcmdpbi10b3A6ICRtb2R1bGUtbWFyZ2luLWxlZnRcblxuJG91dHB1dC13aWR0aDogY2FsYygxMDAlIC0gI3skZ3JpZC13aWR0aH0pXG4kb3V0cHV0LWhlaWdodDogY2FsYygxMDAlIC0gMiojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG4gICAgXG4kYnV0dG9uLWhlaWdodDogNDBweFxuXG4vLyBEZWxldGUgc3BlY2lmaWMgYnV0dG9uIHNldHRpbmdzXG4kZGVsZXRlLWJ1dHRvbi13aWR0aDogMTUwcHhcbiRkZWxldGUtYnV0dG9uLWhlaWdodDogNTBweFxuXG4vLyBJbnZlbnRvcnkgV2lkZ2V0IGhlaWdodFxuJHJlc291cmNlLWNoaWxkcmVuLWhlaWdodDogY2FsYygxMDAlIC0gMyojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG5cbiRib3JkZXItdGhpY2tuZXNzOiAycHhcblxuXG4vLyAjIyMjIyMjIyMjIENvbG9yIERlZmluaXRpb25zICMjIyMjIyMjIyNcbiRjdXN0b20tc2VsZWN0ZWQ6I0YwRUNGRFxuJGN1c3RvbS1oaWdobGlnaHQ6I0M0QjVGNlxuJG91dHB1dC1zZWxlY3RlZDogI0NBRjNGNlxuJG91dHB1dC1oaWdobGlnaHQ6IzJFRDBEQlxuJGNyYWZ0aW5nLXNlbGVjdGVkOiNGNkVEQ0FcbiRjcmFmdGluZy1oaWdobGlnaHQ6I0RCQjYyRVxuJHJlc291cmNlLXNlbGVjdGVkOiNEOEZDQ0VcbiRyZXNvdXJjZS1oaWdobGlnaHQ6IzY2RjIzRlxuJG1pbmVjcmFmdC1zZWxlY3RlZDogI2FjYjZjM1xuJG1pbmVjcmFmdC1oaWdobGlnaHQ6ICNBOEFBQjNcblxuJGNvbG9yLWRlZmF1bHQ6IzcwNzA3MFxuJGNvbG9yLWRlZmF1bHQtZGFyazojMkEyQTJBXG4kY29sb3ItZGVmYXVsdC1oaWdobGlnaHQ6I0NDQ0NDQ1xuXG4vLyBQaW5zdHJpcGUgRGVmaW5pdGlvbnNcbiRjcml0aWNhbC1wYXRoLXNlbGVjdGVkOiNGRkRBRDBcbiRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodDojRkY2RjQ1XG4kY3JpdGljYWwtcGF0aC1oaWdobGlnaHQtYWxwaGE6IHJnYmEoICRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodCwgLjUpXG5cblxuLy8gIyMjIyMjIyMjIyBTcHJpdGUgUmVuZGVyaW5nIFNldHRpbmdzXG4kc3ByaXRlLXNpemU6IDMycHhcbiRzcHJpdGUtc2NhbGU6IDIuMlxuXG4vLyBJbiBudW1iZXIgb2Ygc3ByaXRlc1xuJHNwcml0ZS1zaGVldC1ob3Jpem9udGFsLWRpbWVuc2lvbnM6IDE2XG4kc3ByaXRlLXNoZWV0LXZlcnRpY2FsLWRpbWVuc2lvbnM6IDM1XG5cbiRzcHJpdGUtd2lkdGg6IGNhbGMoI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNjYWxlfSlcbiRzcHJpdGUtc2hlZXQtd2lkdGg6IGNhbGMoICN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zaGVldC1ob3Jpem9udGFsLWRpbWVuc2lvbnMgKiAkc3ByaXRlLXNjYWxlfSlcbiRzcHJpdGUtc2hlZXQtaGVpZ2h0OiBjYWxjKCAjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2hlZXQtdmVydGljYWwtZGltZW5zaW9ucyAqICRzcHJpdGUtc2NhbGV9KVxuXG4vLyBTcHJpdGUgaW1hZ2UgZGlzcGxheSBzZXR0aW5nc1xuJHNwcml0ZS1ib3JkZXItcGFkZGluZzogNXB4Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InventoryDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-inventory-display',
                templateUrl: './inventory-display.component.html',
                styleUrls: ['./inventory-display.component.sass']
            }]
    }], function () { return [{ type: _services_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_2__["MinecraftInventoryService"] }, { type: src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] }]; }, { minecraftItemViews: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: [_general_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_0__["ItemImageComponent"]]
        }] }); })();


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
/* harmony import */ var _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-browser-item/node-browser-item.component */ "BSiW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/rete-modules/services/item.service */ "x7rl");
/* harmony import */ var src_app_rete_modules_services_node_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rete-modules/services/node.service */ "5bZ5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function NodeBrowserComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "node-browser-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nodeItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nodeItem", nodeItem_r1)("filter", ctx_r0.filter);
} }
class NodeBrowserComponent {
    constructor(itemService, nodeService) {
        this.itemService = itemService;
        this.nodeService = nodeService;
        this.filter = _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__["NodeBrowserFilter"].ALL;
        this.searchString = "";
        this.nodeList = this.convertItemsToNodeBrowser(itemService.GetAllItems());
        setInterval(() => {
            this.updateBrowser();
        }, 500);
    }
    ngOnInit() {
    }
    onAllClicked() {
        this.filter = _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__["NodeBrowserFilter"].ALL;
        this.filterItems();
    }
    onResourcesClicked() {
        this.filter = _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__["NodeBrowserFilter"].RESOURCE;
        this.filterItems();
    }
    onCraftableClicked() {
        this.filter = _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__["NodeBrowserFilter"].CRAFTER;
        this.filterItems();
    }
    onOutputClicked() {
        this.filter = _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__["NodeBrowserFilter"].OUTPUT;
        this.filterItems();
    }
    onCustomClicked() {
        this.filter = _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__["NodeBrowserFilter"].CUSTOM;
        this.filterItems();
    }
    onSearchChange() {
        this.searchString = this.searchString.toLowerCase();
        this.filterItems();
    }
    filterItems() {
        this.nodeList = [];
        if (this.filter == _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__["NodeBrowserFilter"].ALL) {
            this.nodeList = this.convertItemsToNodeBrowser(this.itemService.GetAllItems());
            this.convertNodesToNodeBrowser(this.nodeService.GetAllCustomNodes()).forEach(value => {
                this.nodeList.push(value);
            });
        }
        if (this.filter == _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__["NodeBrowserFilter"].RESOURCE) {
            this.nodeList = this.convertItemsToNodeBrowser(this.itemService.GetAllNonCraftableItems());
        }
        if (this.filter == _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__["NodeBrowserFilter"].CRAFTER) {
            this.nodeList = this.convertItemsToNodeBrowser(this.itemService.GetAllCraftableItems());
        }
        if (this.filter == _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__["NodeBrowserFilter"].OUTPUT) {
            this.nodeList = this.convertItemsToNodeBrowser(this.itemService.GetAllItems());
        }
        if (this.filter == _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__["NodeBrowserFilter"].CUSTOM) {
            this.nodeList = this.convertNodesToNodeBrowser(this.nodeService.GetAllCustomNodes());
        }
        this.nodeList = this.nodeList.filter(value => {
            if (this.searchString) {
                let index = value.name.toLowerCase().indexOf(this.searchString);
                if (index >= 0) {
                    value.htmlName = value.name.substring(0, index)
                        + "<mark>"
                        + value.name.substring(index, index + this.searchString.length)
                        + "</mark>"
                        + value.name.substring(index + this.searchString.length, value.name.length);
                }
                return index >= 0;
            }
            else {
                value.htmlName = value.name;
                return true;
            }
        });
    }
    convertItemsToNodeBrowser(itemList) {
        let nodes = [];
        itemList.forEach((value) => {
            nodes.push(new _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__["NodeBrowserItem"](value.name, "item", value));
        });
        return nodes;
    }
    convertNodesToNodeBrowser(nodeList) {
        let nodes = [];
        nodeList.forEach(value => {
            let data = {};
            data['id'] = value.id;
            data['item'] = this.itemService.GetItemFromId(value.meta.icon);
            nodes.push(new _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__["NodeBrowserItem"](value.meta.name, "Custom", data));
        });
        return nodes;
    }
    updateBrowser() {
        if (this.filter == 4) {
            this.filterItems();
        }
    }
}
NodeBrowserComponent.ɵfac = function NodeBrowserComponent_Factory(t) { return new (t || NodeBrowserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rete_modules_services_node_service__WEBPACK_IMPORTED_MODULE_3__["NodeService"])); };
NodeBrowserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NodeBrowserComponent, selectors: [["app-node-browser"]], decls: 16, vars: 7, consts: [[1, "node-browser-wrapper", "module-margin"], [1, "node-browser-button-header"], ["type", "button", 1, "button", "all", "btn", 3, "ngClass", "click"], ["type", "button", 1, "button", "resource", "btn", 3, "ngClass", "click"], ["type", "button", 1, "button", "crafting", "btn", 3, "ngClass", "click"], ["type", "button", 1, "button", "output", "btn", 3, "ngClass", "click"], ["type", "button", 1, "button", "custom", "btn", 3, "ngClass", "click"], [1, "right", "fill"], ["type", "search", "placeholder", "search", 1, "search-bar", 3, "ngModel", "ngModelChange", "input"], [1, "node-browser-grid"], [4, "ngFor", "ngForOf"], [3, "nodeItem", "filter"]], template: function NodeBrowserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NodeBrowserComponent_Template_button_click_2_listener() { return ctx.onAllClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NodeBrowserComponent_Template_button_click_4_listener() { return ctx.onResourcesClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Resources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NodeBrowserComponent_Template_button_click_6_listener() { return ctx.onCraftableClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Craftable ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NodeBrowserComponent_Template_button_click_8_listener() { return ctx.onOutputClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Output ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NodeBrowserComponent_Template_button_click_10_listener() { return ctx.onCustomClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Custom Nodes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NodeBrowserComponent_Template_input_ngModelChange_13_listener($event) { return ctx.searchString = $event; })("input", function NodeBrowserComponent_Template_input_input_13_listener() { return ctx.onSearchChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NodeBrowserComponent_div_15_Template, 2, 2, "div", 10);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.filter == 4 ? "btn-primary" : "btn-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchString);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.nodeList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__["NodeBrowserItemComponent"]], styles: [".node-browser-wrapper[_ngcontent-%COMP%] {\n  height: calc(100% - 3*10px);\n  min-height: 150px;\n  border: 2px solid black;\n  display: flex;\n  flex-direction: column;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px;\n  background-color: #2A2A2A;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: #2A2A2A;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.all[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #707070;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.all[_ngcontent-%COMP%]:active {\n  border-color: #707070;\n  background-color: #2da60b;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.all[_ngcontent-%COMP%]:active:focus {\n  box-shadow: 0 0 0 0.2rem #D8FCCE;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.all[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem #D8FCCE;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.resource[_ngcontent-%COMP%] {\n  background-color: #66F23F;\n  border-color: #707070;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.resource[_ngcontent-%COMP%]:active {\n  border-color: #707070;\n  background-color: #2da60b;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.resource[_ngcontent-%COMP%]:active:focus {\n  box-shadow: 0 0 0 0.2rem #D8FCCE;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.resource[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem #D8FCCE;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.crafting[_ngcontent-%COMP%] {\n  background-color: #DBB62E;\n  border-color: #707070;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.crafting[_ngcontent-%COMP%]:active {\n  border-color: #707070;\n  background-color: #756114;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.crafting[_ngcontent-%COMP%]:active:focus {\n  box-shadow: 0 0 0 0.2rem #F6EDCA;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.crafting[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem #F6EDCA;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.output[_ngcontent-%COMP%] {\n  background-color: #2ED0DB;\n  border-color: #707070;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.output[_ngcontent-%COMP%]:active {\n  border-color: #707070;\n  background-color: #146f75;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.output[_ngcontent-%COMP%]:active:focus {\n  box-shadow: 0 0 0 0.2rem #CAF3F6;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.output[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem #CAF3F6;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.custom[_ngcontent-%COMP%] {\n  background-color: #C4B5F6;\n  border-color: #707070;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.custom[_ngcontent-%COMP%]:active {\n  border-color: #707070;\n  background-color: #6943e8;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.custom[_ngcontent-%COMP%]:active:focus {\n  box-shadow: 0 0 0 0.2rem #F0ECFD;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.custom[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem #F0ECFD;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  border: solid 2px #707070;\n  border-radius: 20px;\n  padding: 4px 7px;\n  text-align: right;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.node-browser-grid[_ngcontent-%COMP%] {\n  width: calc(100% - 10px);\n  height: 100%;\n  margin: 10px;\n  display: inline-grid;\n  grid-template-columns: repeat(5, 6.8vw);\n  grid-auto-rows: 6.8vw;\n  column-gap: 5px;\n  row-gap: 5px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL25vZGUtYnJvd3Nlci9ub2RlLWJyb3dzZXIuY29tcG9uZW50LnNhc3MiLCJzcmMvX2dsb2JhbHMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLDJCQ2N1QjtFRGJ2QixpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBRko7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQ3NCZ0I7QUR4QnBCOztBQUlJO0VBQ0ksaUJBQUE7RUFDQSxjQ2tCWTtBRHBCcEI7O0FBSVE7RUFDSSxzQkFBQTtFQUNBLHFCQ2FHO0FEZmY7O0FBR1k7RUFDSSxxQkNXRDtFRFZDLHlCQUFBO0FBRGhCOztBQUVnQjtFQUNJLGdDQUFBO0FBQXBCOztBQUNZO0VBQ0ksZ0NBQUE7QUFDaEI7O0FBQ1E7RUFDSSx5QkNEUTtFREVSLHFCQ0VHO0FERGY7O0FBQVk7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0FBRWhCOztBQURnQjtFQUNJLGdDQUFBO0FBR3BCOztBQUZZO0VBQ0ksZ0NBQUE7QUFJaEI7O0FBRlE7RUFDSSx5QkNkUTtFRGVSLHFCQ1RHO0FEYWY7O0FBSFk7RUFDSSxxQkNYRDtFRFlDLHlCQUFBO0FBS2hCOztBQUpnQjtFQUNJLGdDQUFBO0FBTXBCOztBQUxZO0VBQ0ksZ0NBQUE7QUFPaEI7O0FBTFE7RUFDSSx5QkMzQk07RUQ0Qk4scUJDcEJHO0FEMkJmOztBQU5ZO0VBQ0kscUJDdEJEO0VEdUJDLHlCQUFBO0FBUWhCOztBQVBnQjtFQUNJLGdDQUFBO0FBU3BCOztBQVJZO0VBQ0ksZ0NBQUE7QUFVaEI7O0FBUlE7RUFDSSx5QkN4Q007RUR5Q04scUJDL0JHO0FEeUNmOztBQVRZO0VBQ0kscUJDakNEO0VEa0NDLHlCQUFBO0FBV2hCOztBQVZnQjtFQUNJLGdDQUFBO0FBWXBCOztBQVhZO0VBQ0ksZ0NBQUE7QUFhaEI7O0FBWEk7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWFSOztBQVhRO0VBQ0ksYUFBQTtBQWFaOztBQVhBO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLG9CQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQVlKIiwiZmlsZSI6InNyYy9hcHAvcmV0ZS1tb2R1bGVzL25vZGUtYnJvd3Nlci9ub2RlLWJyb3dzZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9nbG9iYWxzJ1xuQGltcG9ydCAnLi4vcmV0ZV92YXJpYWJsZXMnXG4gICAgXG4ubm9kZS1icm93c2VyLXdyYXBwZXJcbiAgICBoZWlnaHQ6ICRyZXNvdXJjZS1jaGlsZHJlbi1oZWlnaHRcbiAgICBtaW4taGVpZ2h0OiAxNTBweFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICBcbi5ub2RlLWJyb3dzZXItYnV0dG9uLWhlYWRlclxuICAgIHdpZHRoOiAxMDAlXG4gICAgcGFkZGluZzogNXB4XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZGVmYXVsdC1kYXJrXG5cbiAgICAuYnV0dG9uXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZGVmYXVsdC1kYXJrXG4gICAgICAgIFxuICAgICAgICAmLmFsbFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItZGVmYXVsdFxuICAgICAgICAgICAgJjphY3RpdmVcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1kZWZhdWx0XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRyZXNvdXJjZS1oaWdobGlnaHQsIDI1JSlcbiAgICAgICAgICAgICAgICAmOmZvY3VzXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAkcmVzb3VyY2Utc2VsZWN0ZWRcbiAgICAgICAgICAgICY6Zm9jdXNcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gJHJlc291cmNlLXNlbGVjdGVkXG5cbiAgICAgICAgJi5yZXNvdXJjZVxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlc291cmNlLWhpZ2hsaWdodFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItZGVmYXVsdFxuICAgICAgICAgICAgJjphY3RpdmVcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1kZWZhdWx0XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRyZXNvdXJjZS1oaWdobGlnaHQsIDI1JSlcbiAgICAgICAgICAgICAgICAmOmZvY3VzXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAkcmVzb3VyY2Utc2VsZWN0ZWRcbiAgICAgICAgICAgICY6Zm9jdXNcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gJHJlc291cmNlLXNlbGVjdGVkXG5cbiAgICAgICAgJi5jcmFmdGluZ1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNyYWZ0aW5nLWhpZ2hsaWdodFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItZGVmYXVsdFxuICAgICAgICAgICAgJjphY3RpdmVcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1kZWZhdWx0XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjcmFmdGluZy1oaWdobGlnaHQsIDI1JSlcbiAgICAgICAgICAgICAgICAmOmZvY3VzXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAkY3JhZnRpbmctc2VsZWN0ZWRcbiAgICAgICAgICAgICY6Zm9jdXNcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gJGNyYWZ0aW5nLXNlbGVjdGVkXG5cbiAgICAgICAgJi5vdXRwdXRcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvdXRwdXQtaGlnaGxpZ2h0XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1kZWZhdWx0XG4gICAgICAgICAgICAmOmFjdGl2ZVxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWRlZmF1bHRcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJG91dHB1dC1oaWdobGlnaHQsIDI1JSlcbiAgICAgICAgICAgICAgICAmOmZvY3VzXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAkb3V0cHV0LXNlbGVjdGVkXG4gICAgICAgICAgICAmOmZvY3VzXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICRvdXRwdXQtc2VsZWN0ZWRcblxuICAgICAgICAmLmN1c3RvbVxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGN1c3RvbS1oaWdobGlnaHRcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWRlZmF1bHRcbiAgICAgICAgICAgICY6YWN0aXZlXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItZGVmYXVsdFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY3VzdG9tLWhpZ2hsaWdodCwgMjUlKVxuICAgICAgICAgICAgICAgICY6Zm9jdXNcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICRjdXN0b20tc2VsZWN0ZWRcbiAgICAgICAgICAgICY6Zm9jdXNcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gJGN1c3RvbS1zZWxlY3RlZFxuXG4gICAgLnNlYXJjaC1iYXJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggJGNvbG9yLWRlZmF1bHRcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweFxuICAgICAgICBwYWRkaW5nOiA0cHggN3B4XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0XG5cbiAgICAgICAgJjpmb2N1c1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZVxuXG4ubm9kZS1icm93c2VyLWdyaWRcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweClcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICBtYXJnaW46IDEwcHhcbiAgICBcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCA1LCA2Ljh2dylcbiAgICBncmlkLWF1dG8tcm93czogNi44dndcbiAgICBjb2x1bW4tZ2FwOiA1cHhcbiAgICByb3ctZ2FwOiA1cHhcblxuICAgIG92ZXJmbG93LXk6IHNjcm9sbFxuICAgIG92ZXJmbG93LXg6IGhpZGRlblxuXG4iLCIvLyAjIyMjIyMjIyMjIEdsb2JhbCBMYXlvdXQgU2V0dGluZ3MgIyMjIyMjIyMjI1xuJGdyaWQtd2lkdGg6IDc1JVxuJGdyaWQtaGVpZ2h0OiA2MCVcblxuLy8gU3BhY2luZ3MgYmV0d2VlbiBtb2R1bGVzXG4kbW9kdWxlLW1hcmdpbi1sZWZ0OiAxMHB4XG4kbW9kdWxlLW1hcmdpbi10b3A6ICRtb2R1bGUtbWFyZ2luLWxlZnRcblxuJG91dHB1dC13aWR0aDogY2FsYygxMDAlIC0gI3skZ3JpZC13aWR0aH0pXG4kb3V0cHV0LWhlaWdodDogY2FsYygxMDAlIC0gMiojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG4gICAgXG4kYnV0dG9uLWhlaWdodDogNDBweFxuXG4vLyBEZWxldGUgc3BlY2lmaWMgYnV0dG9uIHNldHRpbmdzXG4kZGVsZXRlLWJ1dHRvbi13aWR0aDogMTUwcHhcbiRkZWxldGUtYnV0dG9uLWhlaWdodDogNTBweFxuXG4vLyBJbnZlbnRvcnkgV2lkZ2V0IGhlaWdodFxuJHJlc291cmNlLWNoaWxkcmVuLWhlaWdodDogY2FsYygxMDAlIC0gMyojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG5cbiRib3JkZXItdGhpY2tuZXNzOiAycHhcblxuXG4vLyAjIyMjIyMjIyMjIENvbG9yIERlZmluaXRpb25zICMjIyMjIyMjIyNcbiRjdXN0b20tc2VsZWN0ZWQ6I0YwRUNGRFxuJGN1c3RvbS1oaWdobGlnaHQ6I0M0QjVGNlxuJG91dHB1dC1zZWxlY3RlZDogI0NBRjNGNlxuJG91dHB1dC1oaWdobGlnaHQ6IzJFRDBEQlxuJGNyYWZ0aW5nLXNlbGVjdGVkOiNGNkVEQ0FcbiRjcmFmdGluZy1oaWdobGlnaHQ6I0RCQjYyRVxuJHJlc291cmNlLXNlbGVjdGVkOiNEOEZDQ0VcbiRyZXNvdXJjZS1oaWdobGlnaHQ6IzY2RjIzRlxuJG1pbmVjcmFmdC1zZWxlY3RlZDogI2FjYjZjM1xuJG1pbmVjcmFmdC1oaWdobGlnaHQ6ICNBOEFBQjNcblxuJGNvbG9yLWRlZmF1bHQ6IzcwNzA3MFxuJGNvbG9yLWRlZmF1bHQtZGFyazojMkEyQTJBXG4kY29sb3ItZGVmYXVsdC1oaWdobGlnaHQ6I0NDQ0NDQ1xuXG4vLyBQaW5zdHJpcGUgRGVmaW5pdGlvbnNcbiRjcml0aWNhbC1wYXRoLXNlbGVjdGVkOiNGRkRBRDBcbiRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodDojRkY2RjQ1XG4kY3JpdGljYWwtcGF0aC1oaWdobGlnaHQtYWxwaGE6IHJnYmEoICRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodCwgLjUpXG5cblxuLy8gIyMjIyMjIyMjIyBTcHJpdGUgUmVuZGVyaW5nIFNldHRpbmdzXG4kc3ByaXRlLXNpemU6IDMycHhcbiRzcHJpdGUtc2NhbGU6IDIuMlxuXG4vLyBJbiBudW1iZXIgb2Ygc3ByaXRlc1xuJHNwcml0ZS1zaGVldC1ob3Jpem9udGFsLWRpbWVuc2lvbnM6IDE2XG4kc3ByaXRlLXNoZWV0LXZlcnRpY2FsLWRpbWVuc2lvbnM6IDM1XG5cbiRzcHJpdGUtd2lkdGg6IGNhbGMoI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNjYWxlfSlcbiRzcHJpdGUtc2hlZXQtd2lkdGg6IGNhbGMoICN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zaGVldC1ob3Jpem9udGFsLWRpbWVuc2lvbnMgKiAkc3ByaXRlLXNjYWxlfSlcbiRzcHJpdGUtc2hlZXQtaGVpZ2h0OiBjYWxjKCAjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2hlZXQtdmVydGljYWwtZGltZW5zaW9ucyAqICRzcHJpdGUtc2NhbGV9KVxuXG4vLyBTcHJpdGUgaW1hZ2UgZGlzcGxheSBzZXR0aW5nc1xuJHNwcml0ZS1ib3JkZXItcGFkZGluZzogNXB4Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NodeBrowserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-node-browser',
                templateUrl: './node-browser.component.html',
                styleUrls: ['./node-browser.component.sass']
            }]
    }], function () { return [{ type: src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"] }, { type: src_app_rete_modules_services_node_service__WEBPACK_IMPORTED_MODULE_3__["NodeService"] }]; }, null); })();


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
/* harmony import */ var _shared_custom_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/custom.model */ "3OuN");
/* harmony import */ var _node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node.service */ "5bZ5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




var fakeDatabase = {
    nodes: [
        {
            id: 2,
            meta: {
                name: "Bookshelves",
                shareLevel: _shared_custom_model__WEBPACK_IMPORTED_MODULE_0__["ShareLevel"].Personal,
                icon: 92,
            },
            inputs: [338, 334, 23],
            outputs: {
                92: {
                    inputRate: { 338: .11, 334: .33, 23: .66 },
                    createdAmount: 1
                }
            },
        },
        {
            id: 3,
            meta: {
                name: "Test",
                shareLevel: _shared_custom_model__WEBPACK_IMPORTED_MODULE_0__["ShareLevel"].Classroom,
                icon: 103,
            },
            inputs: [338, 334, 23],
            outputs: {
                92: {
                    inputRate: { 338: .11, 334: .33, 23: .66 },
                    createdAmount: 1
                },
                23: {
                    inputRate: { 23: 1.0 },
                    createdAmount: 1
                }
            },
        }
    ]
};
class FakeNodeService extends _node_service__WEBPACK_IMPORTED_MODULE_1__["NodeService"] {
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
    SaveCustomNode(data) {
        this.lastValidIndex++;
        data.id = this.lastValidIndex;
        fakeDatabase.nodes.push(data);
        return this.lastValidIndex;
    }
}
FakeNodeService.ɵfac = function FakeNodeService_Factory(t) { return new (t || FakeNodeService)(); };
FakeNodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FakeNodeService, factory: FakeNodeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FakeNodeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oDxO":
/*!************************************************************************************!*\
  !*** ./src/app/rete-modules/grid/custom-node-modal/custom-node-modal.component.ts ***!
  \************************************************************************************/
/*! exports provided: CustomNodeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomNodeModal", function() { return CustomNodeModal; });
/* harmony import */ var _shared_custom_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/custom.model */ "3OuN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/rete-modules/services/item.service */ "x7rl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _general_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../general/item-image-component/item-image.component */ "FjGt");









function CustomNodeModal_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "item-image", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomNodeModal_div_12_div_2_Template_input_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.nodeImageRadialClicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r3 = ctx.$implicit;
    const row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", "nodeImageRadio" + row_r1 + col_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedItem", ctx_r2.getItem(row_r1, col_r3))("criticalPath", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "nodeImageRadio" + row_r1 + col_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", row_r1 + "," + col_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("checked", row_r1 == 0 && col_r3 == 0 ? "" : null);
} }
function CustomNodeModal_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CustomNodeModal_div_12_div_2_Template, 5, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.columns);
} }
let STATIC_COLUMN_NUMBER = 4;
class CustomNodeModal {
    constructor(activeModal, itemService) {
        this.activeModal = activeModal;
        this.itemService = itemService;
        this.rows = [];
        this.columns = [1, 2, 3, 4];
        this.nodeNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.nodeImageValue = '0,0';
        this.nodeShareControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Personal');
        this.items = [];
        this.columns = [];
        for (let col = 0; col < STATIC_COLUMN_NUMBER; ++col) {
            this.columns.push(col);
        }
    }
    setItmeIds(itemIds) {
        if (itemIds.length % STATIC_COLUMN_NUMBER !== 0) {
            throw RangeError("Item ids list must be divisible by " + STATIC_COLUMN_NUMBER);
        }
        this.rows = [];
        let totalRows = Math.ceil(itemIds.length / STATIC_COLUMN_NUMBER);
        for (let row = 0; row < totalRows; ++row) {
            this.rows.push(row);
            for (let col = 0; col < STATIC_COLUMN_NUMBER; ++col) {
                let index = row * STATIC_COLUMN_NUMBER + col;
                if (index >= itemIds.length) {
                    break;
                }
                else {
                    this.items.push(this.itemService.GetItemFromId(itemIds[index]));
                }
            }
        }
    }
    getItem(row, col) {
        return this.items[row * STATIC_COLUMN_NUMBER + col];
    }
    submitCustomNode() {
        let customNodeMetadata = new _shared_custom_model__WEBPACK_IMPORTED_MODULE_0__["CustomNodeMetadata"]();
        customNodeMetadata.name = this.nodeNameControl.value;
        if (customNodeMetadata.name.length == 0) {
            customNodeMetadata.name = "Custom Node";
        }
        // Get the x,y of the selected item
        let xy = this.nodeImageValue.split(',');
        let x = parseInt(xy[0]);
        let y = parseInt(xy[1]);
        customNodeMetadata.icon = this.items[x * STATIC_COLUMN_NUMBER + y].id;
        switch (this.nodeShareControl.value) {
            case "Personal":
                customNodeMetadata.shareLevel = _shared_custom_model__WEBPACK_IMPORTED_MODULE_0__["ShareLevel"].Personal;
                break;
            case "Group":
                customNodeMetadata.shareLevel = _shared_custom_model__WEBPACK_IMPORTED_MODULE_0__["ShareLevel"].Group;
                break;
            case "Classroom":
                customNodeMetadata.shareLevel = _shared_custom_model__WEBPACK_IMPORTED_MODULE_0__["ShareLevel"].Classroom;
                break;
        }
        console.log(customNodeMetadata);
        this.activeModal.close(customNodeMetadata);
    }
    nodeImageRadialClicked(event) {
        this.nodeImageValue = (event.originalTarget || event.srcTarget || event.target).value;
    }
}
CustomNodeModal.ɵfac = function CustomNodeModal_Factory(t) { return new (t || CustomNodeModal)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"])); };
CustomNodeModal.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomNodeModal, selectors: [["custom-node-modal"]], decls: 26, vars: 3, consts: [[1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "nodeNameEntry"], ["id", "nodeNameEntry", "placeholder", "Custom Node", "type", "text", 1, "form-control", "form-control-lg", 3, "formControl"], [4, "ngFor", "ngForOf"], ["for", "shareLevel"], ["id", "shareLevel", 1, "form-control", 3, "formControl"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], [1, "form-row"], [1, "form-check"], [1, "form-check-label", 3, "for"], [3, "selectedItem", "criticalPath"], ["type", "radio", "name", "nodeImageRadios", 1, "form-check-input", 3, "id", "value", "click"]], template: function CustomNodeModal_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Create Custom Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomNodeModal_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Node Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CustomNodeModal_div_12_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Share:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Classroom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomNodeModal_Template_button_click_24_listener() { return ctx.submitCustomNode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.nodeNameControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.nodeShareControl);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _general_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_6__["ItemImageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JldGUtbW9kdWxlcy9ncmlkL2N1c3RvbS1ub2RlLW1vZGFsL2N1c3RvbS1ub2RlLW1vZGFsLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomNodeModal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'custom-node-modal',
                templateUrl: './custom-node-modal.component.html',
                styleUrls: ['./custom-node-modal.component.sass']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }, { type: src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] }]; }, null); })();


/***/ }),

/***/ "v5B+":
/*!*******************************************************************!*\
  !*** ./src/app/inventory/services/minecraft-inventory.service.ts ***!
  \*******************************************************************/
/*! exports provided: ItemAndQuantity, TimeSeriesItem, MinecraftInventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemAndQuantity", function() { return ItemAndQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSeriesItem", function() { return TimeSeriesItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinecraftInventoryService", function() { return MinecraftInventoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


let MILLISECONDS_TO_HOURS = 1 / 3600000;
class ItemAndQuantity {
}
class TimeSeriesItem {
}
class ItemCallback {
    constructor(thisRef, nodeId, callback) {
        this.thisRef = thisRef;
        this.nodeId = nodeId;
        this.callback = callback;
    }
}
class MinecraftInventoryService {
    constructor() {
        this.inventoryCallbacks = {};
    }
    InventoryUpdateCallbacks() {
        for (let itemIdLabel in this.inventoryCallbacks) {
            let itemId = parseInt(itemIdLabel);
            let average = this.GetAverageFromTimeSeries(itemId);
            this.inventoryCallbacks[itemIdLabel].forEach(callback => {
                // Call the callback passing this ref to be used
                callback.callback.call(callback.thisRef, callback.nodeId, average);
            });
        }
    }
    AssignInventoryUpdateCallback(thisRef, nodeId, itemId, callback) {
        let item = { thisRef, nodeId, callback };
        // Add callback to item id list
        if (this.inventoryCallbacks[itemId]) {
            this.inventoryCallbacks[itemId].push(item);
        }
        else {
            this.inventoryCallbacks[itemId] = [item];
        }
    }
    GetAverageFromTimeSeries(itemId) {
        let timeSeries = this.GetTimeSeries();
        let totalTimeDisplacementMs = 0;
        let totalItemCount = 0;
        let lastTimePoint = 0;
        let lastItemCount = 0;
        timeSeries.forEach((timeSeriesItem, index) => {
            // Find the item in the time series
            let item = timeSeriesItem.items.find(itemAndQuantity => {
                return itemAndQuantity.id == itemId;
            });
            if (item) {
                // Skip adding the first time series item
                if (index > 0) {
                    totalTimeDisplacementMs += timeSeriesItem.time - lastTimePoint;
                    totalItemCount += item.quantity - lastItemCount;
                }
                lastTimePoint = timeSeriesItem.time;
                lastItemCount = item.quantity;
            }
        });
        let timeDisplacementHours = totalTimeDisplacementMs * MILLISECONDS_TO_HOURS;
        let hourAverage = totalItemCount / timeDisplacementHours;
        return isFinite(hourAverage) ? hourAverage : 0;
    }
}
MinecraftInventoryService.ɵfac = function MinecraftInventoryService_Factory(t) { return new (t || MinecraftInventoryService)(); };
MinecraftInventoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MinecraftInventoryService, factory: MinecraftInventoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MinecraftInventoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
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