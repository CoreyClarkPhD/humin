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
    setPlaceholder(placeholder) {
        this.placeholder = placeholder;
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".rate-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n.rate-container[_ngcontent-%COMP%]   .helper-text[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 12px;\n  text-align: center;\n  color: #707070;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL3NoYXJlZC9yYXRlLWNvbXBvbmVudC9yYXRlLmNvbXBvbmVudC5zYXNzIiwic3JjL19nbG9iYWxzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREo7QUFHSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQ3VCTztBRHhCZiIsImZpbGUiOiJzcmMvYXBwL3JldGUtbW9kdWxlcy9zaGFyZWQvcmF0ZS1jb21wb25lbnQvcmF0ZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL19nbG9iYWxzJ1xuICAgIFxuLnJhdGUtY29udGFpbmVyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgd2lkdGg6IDEwMCVcbiAgICBoZWlnaHQ6IDEwMCVcblxuICAgIC5oZWxwZXItdGV4dFxuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICBmb250LXNpemU6IDEycHhcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZGVmYXVsdFxuIiwiLy8gIyMjIyMjIyMjIyBHbG9iYWwgTGF5b3V0IFNldHRpbmdzICMjIyMjIyMjIyNcbiRncmlkLXdpZHRoOiA3NSVcbiRncmlkLWhlaWdodDogNjAlXG5cbi8vIFNwYWNpbmdzIGJldHdlZW4gbW9kdWxlc1xuJG1vZHVsZS1tYXJnaW4tbGVmdDogMTBweFxuJG1vZHVsZS1tYXJnaW4tdG9wOiAkbW9kdWxlLW1hcmdpbi1sZWZ0XG5cbiRvdXRwdXQtd2lkdGg6IGNhbGMoMTAwJSAtICN7JGdyaWQtd2lkdGh9KVxuJG91dHB1dC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDIqI3skbW9kdWxlLW1hcmdpbi10b3B9KVxuICAgIFxuJGJ1dHRvbi1oZWlnaHQ6IDUwcHhcblxuLy8gRGVsZXRlIHNwZWNpZmljIGJ1dHRvbiBzZXR0aW5nc1xuJGRlbGV0ZS1idXR0b24td2lkdGg6IDE1MHB4XG4kZGVsZXRlLWJ1dHRvbi1oZWlnaHQ6IDUwcHhcblxuLy8gSW52ZW50b3J5IFdpZGdldCBoZWlnaHRcbiRyZXNvdXJjZS1jaGlsZHJlbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDMqI3skbW9kdWxlLW1hcmdpbi10b3B9KVxuXG4kYm9yZGVyLXRoaWNrbmVzczogNXB4XG5cbi8vICMjIyMjIyMjIyMgQ29sb3IgRGVmaW5pdGlvbnMgIyMjIyMjIyMjI1xuJGN1c3RvbS1zZWxlY3RlZDojRjBFQ0ZEXG4kY3VzdG9tLWhpZ2hsaWdodDojQzRCNUY2XG4kb3V0cHV0LXNlbGVjdGVkOiAjQ0FGM0Y2XG4kb3V0cHV0LWhpZ2hsaWdodDojMkVEMERCXG4kY3JhZnRpbmctc2VsZWN0ZWQ6I0Y2RURDQVxuJGNyYWZ0aW5nLWhpZ2hsaWdodDojREJCNjJFXG4kcmVzb3VyY2Utc2VsZWN0ZWQ6I0Q4RkNDRVxuJHJlc291cmNlLWhpZ2hsaWdodDojNjZGMjNGXG4kbWluZWNyYWZ0LXNlbGVjdGVkOiAjYWNiNmMzXG4kbWluZWNyYWZ0LWhpZ2hsaWdodDogI0E4QUFCM1xuXG4kY29sb3ItZGVmYXVsdDojNzA3MDcwXG4kY29sb3ItZGVmYXVsdC1kYXJrOiMyQTJBMkFcbiRjb2xvci1kZWZhdWx0LWhpZ2hsaWdodDojQ0NDQ0NDXG5cbi8vIFBpbnN0cmlwZSBEZWZpbml0aW9uc1xuJGNyaXRpY2FsLXBhdGgtc2VsZWN0ZWQ6I0ZGREFEMFxuJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0OiNGRjZGNDVcbiRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodC1hbHBoYTogcmdiYSggJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0LCAuNSlcblxuXG4vLyAjIyMjIyMjIyMjIFNwcml0ZSBSZW5kZXJpbmcgU2V0dGluZ3NcbiRzcHJpdGUtc2l6ZTogMzJweFxuJHNwcml0ZS1zY2FsZTogMi4yXG5cbi8vIEluIG51bWJlciBvZiBzcHJpdGVzXG4kc3ByaXRlLXNoZWV0LWhvcml6b250YWwtZGltZW5zaW9uczogMTZcbiRzcHJpdGUtc2hlZXQtdmVydGljYWwtZGltZW5zaW9uczogMzVcblxuJHNwcml0ZS13aWR0aDogY2FsYygjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2NhbGV9KVxuJHNwcml0ZS1zaGVldC13aWR0aDogY2FsYyggI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNoZWV0LWhvcml6b250YWwtZGltZW5zaW9ucyAqICRzcHJpdGUtc2NhbGV9KVxuJHNwcml0ZS1zaGVldC1oZWlnaHQ6IGNhbGMoICN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zaGVldC12ZXJ0aWNhbC1kaW1lbnNpb25zICogJHNwcml0ZS1zY2FsZX0pXG5cbi8vIFNwcml0ZSBpbWFnZSBkaXNwbGF5IHNldHRpbmdzXG4kc3ByaXRlLWJvcmRlci1wYWRkaW5nOiA1cHgiXX0= */"] });
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
    constructor(inputs, name = "NOT-CREATED", shareLevel = ShareLevel.Personal) {
        this.meta = { name: name, shareLevel: shareLevel, icon: 1 };
        this.inputs = inputs;
        this.outputs = {};
    }
}


/***/ }),

/***/ "5UJb":
/*!**********************************************!*\
  !*** ./src/app/general/model/color.model.ts ***!
  \**********************************************/
/*! exports provided: Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
class Color {
    constructor(r, g, b) {
        this.r = 255;
        this.g = 255;
        this.b = 255;
        this.r = r;
        this.g = g;
        this.b = b;
    }
    static FromHex(hex) {
        let r = hex.substr(1, 2);
        let g = hex.substr(3, 2);
        let b = hex.substr(5, 2);
        return new Color(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16));
    }
    toHex() {
        return "#" + this.r.toString(16).padStart(2, '0') + this.g.toString(16).padStart(2, '0') + this.b.toString(16).padStart(2, '0');
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-graph-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", node_r2);
} }
function GraphViewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No marked output nodes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GraphViewComponent {
    constructor(outputManager) {
        this.outputManager = outputManager;
        this.markedNodes = [];
        setInterval(() => {
            let nodes = this.outputManager.getMarkedNodes();
            this.markedNodes = nodes.filter(value => {
                return value.meta['type'] == "output";
            });
        }, 500);
    }
    ngOnInit() {
    }
}
GraphViewComponent.ɵfac = function GraphViewComponent_Factory(t) { return new (t || GraphViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__["OutputManagerService"])); };
GraphViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraphViewComponent, selectors: [["app-graph-view"]], decls: 3, vars: 2, consts: [[1, "graph-container"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "node"], [1, "no-node-container"], [1, "no-node-warning"]], template: function GraphViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GraphViewComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GraphViewComponent_div_2_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.markedNodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.markedNodes.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _graph_item_graph_item_component__WEBPACK_IMPORTED_MODULE_3__["GraphItemComponent"]], styles: [".graph-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.graph-container[_ngcontent-%COMP%]   .no-node-container[_ngcontent-%COMP%] {\n  width: 75%;\n  height: auto;\n  margin: auto;\n  margin-top: 50%;\n}\n.graph-container[_ngcontent-%COMP%]   .no-node-container[_ngcontent-%COMP%]   .no-node-warning[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0cHV0L2dyYXBoLXZpZXcvZ3JhcGgtdmlldy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ1I7QUFDUTtFQUNJLGtCQUFBO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9vdXRwdXQvZ3JhcGgtdmlldy9ncmFwaC12aWV3LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYXBoLWNvbnRhaW5lclxuICAgIHdpZHRoOiAxMDAlXG4gICAgaGVpZ2h0OiAxMDAlXG4gICAgZGlzcGxheTogYmxvY2tcblxuICAgIC5uby1ub2RlLWNvbnRhaW5lclxuICAgICAgICB3aWR0aDogNzUlXG4gICAgICAgIGhlaWdodDogYXV0b1xuICAgICAgICBtYXJnaW46IGF1dG9cbiAgICAgICAgbWFyZ2luLXRvcDogNTAlXG5cbiAgICAgICAgLm5vLW5vZGUtd2FybmluZ1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyIl19 */"] });
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
/* harmony import */ var _services_http_node_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/http-node.service */ "t7mk");
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
/* harmony import */ var _node_browser_node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node-browser/node-browser-item/node-browser-item.component */ "BSiW");


















class CustomReteModule {
}
CustomReteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CustomReteModule });
CustomReteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function CustomReteModule_Factory(t) { return new (t || CustomReteModule)(); }, providers: [{ provide: _services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"] }, { provide: _services_node_service__WEBPACK_IMPORTED_MODULE_14__["NodeService"], useClass: _services_http_node_service__WEBPACK_IMPORTED_MODULE_4__["HttpNodeService"] }], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_10__["ReteModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_2__["GeneralModule"],
            _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_0__["InventoryModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CustomReteModule, { declarations: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"],
        _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_11__["BaseNodeComponent"],
        _nodes_controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_6__["ResourceComponent"],
        _node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_13__["NodeBrowserComponent"],
        _shared_rate_component_rate_component_component__WEBPACK_IMPORTED_MODULE_15__["RateComponent"],
        _grid_custom_node_modal_custom_node_modal_component__WEBPACK_IMPORTED_MODULE_1__["CustomNodeModal"],
        _node_browser_node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_16__["NodeBrowserItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_10__["ReteModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_2__["GeneralModule"],
        _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_0__["InventoryModule"]], exports: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"], _node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_13__["NodeBrowserComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CustomReteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
        args: [{
                declarations: [
                    _grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"],
                    _nodes_base_node_base_node_component__WEBPACK_IMPORTED_MODULE_11__["BaseNodeComponent"],
                    _nodes_controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_6__["ResourceComponent"],
                    _node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_13__["NodeBrowserComponent"],
                    _shared_rate_component_rate_component_component__WEBPACK_IMPORTED_MODULE_15__["RateComponent"],
                    _grid_custom_node_modal_custom_node_modal_component__WEBPACK_IMPORTED_MODULE_1__["CustomNodeModal"],
                    _node_browser_node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_16__["NodeBrowserItemComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_10__["ReteModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_2__["GeneralModule"],
                    _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_0__["InventoryModule"],
                ],
                providers: [{ provide: _services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"] }, { provide: _services_node_service__WEBPACK_IMPORTED_MODULE_14__["NodeService"], useClass: _services_http_node_service__WEBPACK_IMPORTED_MODULE_4__["HttpNodeService"] }],
                exports: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"], _node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_13__["NodeBrowserComponent"]],
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
    ngAfterViewInit() {
        this.delayedRateSet();
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
        this.unitializedSetRate = false;
        this.unitializedSetRateValue = 0;
        this.component = ResourceComponent;
        this.props = {
            selectedItem: _general_model_item_model__WEBPACK_IMPORTED_MODULE_0__["Item"],
            readonly: false,
            disableRate: this.disableRate,
            changeRate: v => this.onChangeRate(v),
            mounted: () => {
                this.setInitialItem();
            },
            delayedRateSet: () => {
                this.delayedRateSet();
            },
            rateComponent: _shared_rate_component_rate_component_component__WEBPACK_IMPORTED_MODULE_1__["RateComponent"],
            criticalPath: false,
        };
    }
    onChangeRate(rate) {
        this.setRate(rate);
        this.emitter.trigger('process');
    }
    getRate() {
        let value = this.getData('perHour');
        if (value == undefined) {
            value = NaN;
        }
        return value;
    }
    // Used when you want to just set the visual
    setRate(rate) {
        if (!this.props.disableRate) {
            // Handles setting rate on uninitialized rate component
            //  Saves the value and sets in initialized
            if (typeof this.props.rateComponent === 'function') {
                this.unitializedSetRate = true;
                this.unitializedSetRateValue = rate;
                return;
            }
            this.props.rateComponent.setRate(rate);
        }
        this.putData('perHour', rate);
    }
    setPlaceholder(placeholder) {
        if (!this.props.disableRate) {
            this.props.rateComponent.setPlaceholder(placeholder);
        }
    }
    delayedRateSet() {
        if (this.unitializedSetRate) {
            this.setRate(this.unitializedSetRateValue);
            this.unitializedSetRate = false;
        }
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
/*! exports provided: environment, environment_vars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment_vars", function() { return environment_vars; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
const environment_vars = {
    // api_root: "http://127.0.0.1:3000",
    // api_root: "https://vz991lfr58.execute-api.us-east-1.amazonaws.com/Prod",
    api_root: "https://zk2qx4ml4b.execute-api.us-east-1.amazonaws.com/Prod",
    authentication: 'SmQ0aUNXdWh3ZgpNOFhLTnZpQlYwCmxzZzZWRE1tQVMKSWdwUnRjcEhvWgpubU1Qb3hEMWhP',
    // TODO: Make this set from URL params
    sessionId: 'user1-id'
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
        this.updateNodeStructure(node);
        return node;
    }
    worker(node, inputs, outputs) {
        let datagram = new _shared_connection_model__WEBPACK_IMPORTED_MODULE_0__["Connection"](node.id, node.data.resource.id, node.data.amount, node.data.perHour);
        outputs['resource'] = datagram;
    }
    updateNodeStructure(node) {
        var item = node.data.resource;
        var output = new rete__WEBPACK_IMPORTED_MODULE_1__["Output"]("resource", item.name, this.socketController.GetSocketForId(item.id), false);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NodeBrowserItemComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NodeBrowserItemComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NodeBrowserItemComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 21);
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
NodeBrowserItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NodeBrowserItemComponent, selectors: [["node-browser-item"]], inputs: { nodeItem: "nodeItem", filter: "filter" }, decls: 10, vars: 11, consts: [["draggable", "true", 1, "node-item", 3, "ngClass", "dragstart"], [1, "background-image"], ["class", "resource-image", 4, "ngIf"], ["class", "crafting-image", 4, "ngIf"], ["class", "output-image", 4, "ngIf"], ["class", "custom-image", 4, "ngIf"], [1, "node-item-title", "pixelated", "minecraft-background", 3, "innerHTML"], [1, "node-item-body"], [3, "selectedItem"], [1, "resource-image"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-bricks"], ["fill-rule", "evenodd", "d", "M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5v-3zM3 4v2h4.5V4H3zm5.5 0v2H13V4H8.5zM3 10v2h4.5v-2H3zm5.5 0v2H13v-2H8.5zM1 1v2h3.5V1H1zm4.5 0v2H15V1H5.5zM1 7v2h3.5V7H1zm4.5 0v2h5V7h-5zm6 0v2H15V7h-3.5zM1 13v2h3.5v-2H1zm4.5 0v2h5v-2h-5zm6 0v2H15v-2h-3.5z"], [1, "crafting-image"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-hammer"], ["d", "M9.812 1.952a.5.5 0 0 1-.312.89c-1.671 0-2.852.596-3.616 1.185L4.857 5.073V6.21a.5.5 0 0 1-.146.354L3.425 7.853a.5.5 0 0 1-.708 0L.146 5.274a.5.5 0 0 1 0-.706l1.286-1.29a.5.5 0 0 1 .354-.146H2.84C4.505 1.228 6.216.862 7.557 1.04a5.009 5.009 0 0 1 2.077.782l.178.129z"], ["fill-rule", "evenodd", "d", "M6.012 3.5a.5.5 0 0 1 .359.165l9.146 8.646A.5.5 0 0 1 15.5 13L14 14.5a.5.5 0 0 1-.756-.056L4.598 5.297a.5.5 0 0 1 .048-.65l1-1a.5.5 0 0 1 .366-.147z"], [1, "output-image"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-minecart"], ["fill-rule", "evenodd", "d", "M4 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82l1.313 7h11.17l1.313-7H1.102z"], [1, "custom-image"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-archive"], ["d", "M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"]], template: function NodeBrowserItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragstart", function NodeBrowserItemComponent_Template_div_dragstart_0_listener($event) { return ctx.onDrag($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "kebab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NodeBrowserItemComponent_div_3_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NodeBrowserItemComponent_div_4_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NodeBrowserItemComponent_div_5_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NodeBrowserItemComponent_div_6_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "item-image", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.getType())));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getType() == "Resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getType() == "Crafter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getType() == "Output");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getType() == "Custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.nodeItem.htmlName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedItem", ctx.getItem());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _general_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_2__["ItemImageComponent"]], pipes: [rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_3__["ɵd"]], styles: [".node-item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #ff0;\n  border: 5px outset #707070;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.node-item[_ngcontent-%COMP%]   .background-image[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 10px;\n  right: 0;\n  z-index: 0;\n}\n.node-item[_ngcontent-%COMP%]   .background-image[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #CCCCCC;\n  margin: 10%;\n  width: 80%;\n  height: 80%;\n}\n.node-item[_ngcontent-%COMP%]   .node-item-title[_ngcontent-%COMP%] {\n  height: 35px;\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  width: calc(100% + 10px);\n  border: 5px outset #707070;\n  border-bottom: 0px;\n  text-align: center;\n  padding-top: 4px;\n}\n.node-item.resource[_ngcontent-%COMP%] {\n  background-color: #D8FCCE;\n  border-color: #66F23F;\n}\n.node-item.resource[_ngcontent-%COMP%]   .node-item-title[_ngcontent-%COMP%] {\n  background-color: #66F23F;\n  border-color: #66F23F;\n}\n.node-item.crafter[_ngcontent-%COMP%] {\n  background-color: #F6EDCA;\n  border-color: #DBB62E;\n}\n.node-item.crafter[_ngcontent-%COMP%]   .node-item-title[_ngcontent-%COMP%] {\n  background-color: #DBB62E;\n  border-color: #DBB62E;\n}\n.node-item.output[_ngcontent-%COMP%] {\n  background-color: #CAF3F6;\n  border-color: #2ED0DB;\n}\n.node-item.output[_ngcontent-%COMP%]   .node-item-title[_ngcontent-%COMP%] {\n  background-color: #2ED0DB;\n  border-color: #2ED0DB;\n}\n.node-item.custom[_ngcontent-%COMP%] {\n  background-color: #F0ECFD;\n  border-color: #C4B5F6;\n}\n.node-item.custom[_ngcontent-%COMP%]   .node-item-title[_ngcontent-%COMP%] {\n  background-color: #C4B5F6;\n  border-color: #C4B5F6;\n}\n.node-item[_ngcontent-%COMP%]   .node-item-body[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL25vZGUtYnJvd3Nlci9ub2RlLWJyb3dzZXItaXRlbS9ub2RlLWJyb3dzZXItaXRlbS5jb21wb25lbnQuc2FzcyIsInNyYy9fZ2xvYmFscy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7QUFGSjtBQUlJO0VBQ1Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUZaO0FBSVk7RUFDSSxjQ2VTO0VEZFQsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRmhCO0FBSUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBRUEsMEJBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFKUjtBQU1JO0VBQ0kseUJDWFc7RURZWCxxQkNYWTtBRE9wQjtBQUtRO0VBQ0kseUJDYlE7RURjUixxQkNkUTtBRFdwQjtBQUtJO0VBQ0kseUJDcEJXO0VEcUJYLHFCQ3BCWTtBRGlCcEI7QUFJUTtFQUNJLHlCQ3RCUTtFRHVCUixxQkN2QlE7QURxQnBCO0FBSUk7RUFDSSx5QkM3QlU7RUQ4QlYscUJDN0JVO0FEMkJsQjtBQUdRO0VBQ0kseUJDL0JNO0VEZ0NOLHFCQ2hDTTtBRCtCbEI7QUFHSTtFQUNJLHlCQ3RDUztFRHVDVCxxQkN0Q1U7QURxQ2xCO0FBRVE7RUFDSSx5QkN4Q007RUR5Q04scUJDekNNO0FEeUNsQjtBQUdJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtBQURSIiwiZmlsZSI6InNyYy9hcHAvcmV0ZS1tb2R1bGVzL25vZGUtYnJvd3Nlci9ub2RlLWJyb3dzZXItaXRlbS9ub2RlLWJyb3dzZXItaXRlbS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL19nbG9iYWxzJ1xuXG4ubm9kZS1pdGVtXG4gICAgd2lkdGg6IDEwMCVcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwXG4gICAgYm9yZGVyOiAkYm9yZGVyLXRoaWNrbmVzcyBvdXRzZXQgJGNvbG9yLWRlZmF1bHRcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICBvdmVyZmxvdzogaGlkZGVuXG5cbiAgICBjdXJzb3I6IHBvaW50ZXJcblxuICAgIC5iYWNrZ3JvdW5kLWltYWdlXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCVcbiAgICAgICAgICAgIHRvcDogMTBweFxuICAgICAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgICAgIHotaW5kZXg6IDBcblxuICAgICAgICAgICAgc3ZnXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1kZWZhdWx0LWhpZ2hsaWdodFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAlXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJVxuICAgICAgICAgICAgICAgIGhlaWdodDogODAlXG5cbiAgICAubm9kZS1pdGVtLXRpdGxlXG4gICAgICAgIGhlaWdodDogMzVweFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgICAgdG9wOiAtJGJvcmRlci10aGlja25lc3NcbiAgICAgICAgcmlnaHQ6IC0kYm9yZGVyLXRoaWNrbmVzc1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgI3syICogJGJvcmRlci10aGlja25lc3N9KVxuXG4gICAgICAgIGJvcmRlcjogJGJvcmRlci10aGlja25lc3Mgb3V0c2V0ICRjb2xvci1kZWZhdWx0XG4gICAgICAgIGJvcmRlci1ib3R0b206IDBweFxuXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICBwYWRkaW5nLXRvcDogNHB4XG5cbiAgICAmLnJlc291cmNlXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZXNvdXJjZS1zZWxlY3RlZFxuICAgICAgICBib3JkZXItY29sb3I6ICRyZXNvdXJjZS1oaWdobGlnaHRcbiAgICAgICAgLm5vZGUtaXRlbS10aXRsZVxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlc291cmNlLWhpZ2hsaWdodFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcmVzb3VyY2UtaGlnaGxpZ2h0XG5cbiAgICAmLmNyYWZ0ZXJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNyYWZ0aW5nLXNlbGVjdGVkXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNyYWZ0aW5nLWhpZ2hsaWdodFxuICAgICAgICAubm9kZS1pdGVtLXRpdGxlXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3JhZnRpbmctaGlnaGxpZ2h0XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRjcmFmdGluZy1oaWdobGlnaHRcblxuICAgICYub3V0cHV0XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvdXRwdXQtc2VsZWN0ZWRcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkb3V0cHV0LWhpZ2hsaWdodFxuICAgICAgICAubm9kZS1pdGVtLXRpdGxlXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3V0cHV0LWhpZ2hsaWdodFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkb3V0cHV0LWhpZ2hsaWdodFxuXG4gICAgJi5jdXN0b21cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGN1c3RvbS1zZWxlY3RlZFxuICAgICAgICBib3JkZXItY29sb3I6ICRjdXN0b20taGlnaGxpZ2h0XG4gICAgICAgIC5ub2RlLWl0ZW0tdGl0bGVcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjdXN0b20taGlnaGxpZ2h0XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRjdXN0b20taGlnaGxpZ2h0XG5cblxuICAgIC5ub2RlLWl0ZW0tYm9keVxuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lXG4iLCIvLyAjIyMjIyMjIyMjIEdsb2JhbCBMYXlvdXQgU2V0dGluZ3MgIyMjIyMjIyMjI1xuJGdyaWQtd2lkdGg6IDc1JVxuJGdyaWQtaGVpZ2h0OiA2MCVcblxuLy8gU3BhY2luZ3MgYmV0d2VlbiBtb2R1bGVzXG4kbW9kdWxlLW1hcmdpbi1sZWZ0OiAxMHB4XG4kbW9kdWxlLW1hcmdpbi10b3A6ICRtb2R1bGUtbWFyZ2luLWxlZnRcblxuJG91dHB1dC13aWR0aDogY2FsYygxMDAlIC0gI3skZ3JpZC13aWR0aH0pXG4kb3V0cHV0LWhlaWdodDogY2FsYygxMDAlIC0gMiojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG4gICAgXG4kYnV0dG9uLWhlaWdodDogNTBweFxuXG4vLyBEZWxldGUgc3BlY2lmaWMgYnV0dG9uIHNldHRpbmdzXG4kZGVsZXRlLWJ1dHRvbi13aWR0aDogMTUwcHhcbiRkZWxldGUtYnV0dG9uLWhlaWdodDogNTBweFxuXG4vLyBJbnZlbnRvcnkgV2lkZ2V0IGhlaWdodFxuJHJlc291cmNlLWNoaWxkcmVuLWhlaWdodDogY2FsYygxMDAlIC0gMyojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG5cbiRib3JkZXItdGhpY2tuZXNzOiA1cHhcblxuLy8gIyMjIyMjIyMjIyBDb2xvciBEZWZpbml0aW9ucyAjIyMjIyMjIyMjXG4kY3VzdG9tLXNlbGVjdGVkOiNGMEVDRkRcbiRjdXN0b20taGlnaGxpZ2h0OiNDNEI1RjZcbiRvdXRwdXQtc2VsZWN0ZWQ6ICNDQUYzRjZcbiRvdXRwdXQtaGlnaGxpZ2h0OiMyRUQwREJcbiRjcmFmdGluZy1zZWxlY3RlZDojRjZFRENBXG4kY3JhZnRpbmctaGlnaGxpZ2h0OiNEQkI2MkVcbiRyZXNvdXJjZS1zZWxlY3RlZDojRDhGQ0NFXG4kcmVzb3VyY2UtaGlnaGxpZ2h0OiM2NkYyM0ZcbiRtaW5lY3JhZnQtc2VsZWN0ZWQ6ICNhY2I2YzNcbiRtaW5lY3JhZnQtaGlnaGxpZ2h0OiAjQThBQUIzXG5cbiRjb2xvci1kZWZhdWx0OiM3MDcwNzBcbiRjb2xvci1kZWZhdWx0LWRhcms6IzJBMkEyQVxuJGNvbG9yLWRlZmF1bHQtaGlnaGxpZ2h0OiNDQ0NDQ0NcblxuLy8gUGluc3RyaXBlIERlZmluaXRpb25zXG4kY3JpdGljYWwtcGF0aC1zZWxlY3RlZDojRkZEQUQwXG4kY3JpdGljYWwtcGF0aC1oaWdobGlnaHQ6I0ZGNkY0NVxuJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0LWFscGhhOiByZ2JhKCAkY3JpdGljYWwtcGF0aC1oaWdobGlnaHQsIC41KVxuXG5cbi8vICMjIyMjIyMjIyMgU3ByaXRlIFJlbmRlcmluZyBTZXR0aW5nc1xuJHNwcml0ZS1zaXplOiAzMnB4XG4kc3ByaXRlLXNjYWxlOiAyLjJcblxuLy8gSW4gbnVtYmVyIG9mIHNwcml0ZXNcbiRzcHJpdGUtc2hlZXQtaG9yaXpvbnRhbC1kaW1lbnNpb25zOiAxNlxuJHNwcml0ZS1zaGVldC12ZXJ0aWNhbC1kaW1lbnNpb25zOiAzNVxuXG4kc3ByaXRlLXdpZHRoOiBjYWxjKCN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zY2FsZX0pXG4kc3ByaXRlLXNoZWV0LXdpZHRoOiBjYWxjKCAjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2hlZXQtaG9yaXpvbnRhbC1kaW1lbnNpb25zICogJHNwcml0ZS1zY2FsZX0pXG4kc3ByaXRlLXNoZWV0LWhlaWdodDogY2FsYyggI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNoZWV0LXZlcnRpY2FsLWRpbWVuc2lvbnMgKiAkc3ByaXRlLXNjYWxlfSlcblxuLy8gU3ByaXRlIGltYWdlIGRpc3BsYXkgc2V0dGluZ3NcbiRzcHJpdGUtYm9yZGVyLXBhZGRpbmc6IDVweCJdfQ== */"] });
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
        this.updateNodeStructure(node);
        return node;
    }
    worker(node, inputs, outputs) {
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
        var node_ref = this.editor.nodes.find(n => n.id === node.id);
        let control = node_ref.controls.get('resource');
        control.setRate(perHourBottleneck * recipe.createdAmount);
        outputs['resource'] = datagram;
    }
    updateNodeStructure(node) {
        var item = node.data.resource;
        var output = new rete__WEBPACK_IMPORTED_MODULE_1__["Output"]("resource", item.name + " x " + item.recipe.createdAmount, this.socketController.GetSocketForId(item.id), false);
        node.addOutput(output);
        item.recipe.ingredients.forEach(ingredient => {
            var item = this.itemService.GetItemFromId(ingredient.id);
            var input = new rete__WEBPACK_IMPORTED_MODULE_1__["Input"]("" + item.id, item.name + " x " + ingredient.amount, this.socketController.GetSocketForId(item.id), false);
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
            this.outputs.push(new RelativeNodeData(item.id, item.name, Number(this.node.data['perHour'])));
        }
    }
}
OutputItemComponent.ɵfac = function OutputItemComponent_Factory(t) { return new (t || OutputItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__["OutputManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"])); };
OutputItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutputItemComponent, selectors: [["app-output-item"]], inputs: { node: "node" }, outputs: { dropdownPressed: "dropdownPressed" }, decls: 14, vars: 10, consts: [[1, "output-container", "pixelated", "minecraft-background", 3, "ngClass"], [1, "title-container", "pixelated", "minecraft-background", 3, "ngClass"], [1, "id-container"], [1, "title"], [1, "data-container"], [1, "data-input-container"], ["class", "node-rates", 4, "ngFor", "ngForOf"], [1, "data-output-container"], [1, "clear"], ["class", "dropdown-container", 3, "click", 4, "ngIf"], [1, "node-rates"], [1, "node-rate-text"], ["type", "text", "readonly", "true", "placeholder", "N/A", 3, "ngModel"], ["type", "text", "readonly", "true", "placeholder", "N/A", 3, "ngModel", "ngModelChange"], [1, "dropdown-container", 3, "click"], [1, "dropdown-icon"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-compact-down"], ["fill-rule", "evenodd", "d", "M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"]], template: function OutputItemComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.output-container[_ngcontent-%COMP%] {\n  max-width: 440px;\n  min-height: 40px;\n  border: #707070 5px outset;\n  margin: 10px;\n  overflow: hidden;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  max-width: calc( 440px / 2);\n  height: 40px;\n  margin: -5px;\n  display: flex;\n  border: #707070 5px outset;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 0px 10px;\n  text-align: center;\n  font-size: 20px;\n  -webkit-text-emphasis: bold;\n          text-emphasis: bold;\n  text-align: center;\n}\n\n.output-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title.critical-path[_ngcontent-%COMP%] {\n  background-image: repeating-linear-gradient(-45deg, transparent 0 10px, #FF6F45 10px calc( 2 * 10px));\n}\n\n.output-container.resource[_ngcontent-%COMP%], .output-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  border-color: #66F23F;\n}\n\n.output-container.resource[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%], .output-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  border-color: #66F23F;\n  background-color: #66F23F;\n}\n\n.output-container.crafter[_ngcontent-%COMP%], .output-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  border-color: #DBB62E;\n}\n\n.output-container.crafter[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%], .output-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  border-color: #DBB62E;\n  background-color: #DBB62E;\n}\n\n.output-container.output[_ngcontent-%COMP%], .output-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  border-color: #2ED0DB;\n}\n\n.output-container.output[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%], .output-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  border-color: #2ED0DB;\n  background-color: #2ED0DB;\n}\n\n.output-container.custom[_ngcontent-%COMP%], .output-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  border-color: #C4B5F6;\n}\n\n.output-container.custom[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%], .output-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  background-color: #C4B5F6;\n}\n\n.output-container.minecraft[_ngcontent-%COMP%], .output-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  border-color: #A8AAB3;\n}\n\n.output-container.minecraft[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%], .output-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  background-color: #A8AAB3;\n}\n\n.output-container[_ngcontent-%COMP%]   .id-container[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  margin: -5px;\n  background-color: #EEEEEE;\n  border: #707070 5px outset;\n}\n\n.output-container[_ngcontent-%COMP%]   .id-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: auto;\n  text-align: center;\n  font-size: 11px;\n}\n\n.output-container[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  height: auto;\n  display: flexbox;\n}\n\n.output-container[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]   .data-input-container[_ngcontent-%COMP%] {\n  width: 50%;\n  float: left;\n}\n\n.output-container[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]   .data-output-container[_ngcontent-%COMP%] {\n  width: 50%;\n  float: right;\n}\n\n.output-container[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]   .node-rate-text[_ngcontent-%COMP%] {\n  width: 65%;\n  float: left;\n}\n\n.output-container[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 35%;\n  height: auto;\n  margin: auto;\n  background-color: #CCCCCC;\n  border: 2px outset #707070;\n  text-align: center;\n}\n\n.output-container[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]   .node-rates[_ngcontent-%COMP%] {\n  height: auto;\n  width: 90%;\n  margin: 5px auto;\n}\n\n.output-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%] {\n  width: calc( 100% - 5px * 2 );\n  height: 20px;\n  margin: auto;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  background-color: #707070;\n  border: #707070 5px outset;\n  cursor: pointer;\n}\n\n.output-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]:hover {\n  border-color: #969696;\n  background-color: #8a8a8a;\n}\n\n.output-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]:active {\n  border-style: inset;\n}\n\n.output-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 10px;\n  margin: auto;\n}\n\n.output-container[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-top: -50%;\n  width: 200%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0cHV0L291dHB1dC1pdGVtL291dHB1dC1pdGVtLmNvbXBvbmVudC5zYXNzIiwic3JjL19nbG9iYWxzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDSSw0REFBQTtBQVZKOztBQVlBO0VBQ0ksZ0JBWnFCO0VBYXJCLGdCQVowQjtFQWMxQiwwQkFBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtBQVhKOztBQWFJO0VBQ0ksMkJBbkJhO0VBb0JiLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0FBWFI7O0FBYVE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUFaWjs7QUFjWTtFQUNJLHFHQUFBO0FBWmhCOztBQWNJO0VBQ0kscUJDYlk7QURDcEI7O0FBYVE7RUFDSSxxQkNmUTtFRGdCUix5QkNoQlE7QURLcEI7O0FBYUk7RUFDSSxxQkNyQlk7QURVcEI7O0FBWVE7RUFDSSxxQkN2QlE7RUR3QlIseUJDeEJRO0FEY3BCOztBQVlJO0VBQ0kscUJDN0JVO0FEbUJsQjs7QUFXUTtFQUNJLHFCQy9CTTtFRGdDTix5QkNoQ007QUR1QmxCOztBQVdJO0VBQ0kscUJDckNVO0FENEJsQjs7QUFVUTtFQUNJLHlCQ3ZDTTtBRCtCbEI7O0FBVUk7RUFDSSxxQkNsQ2M7QUQwQnRCOztBQVNRO0VBQ0kseUJDcENVO0FENkJ0Qjs7QUFTSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFQUjs7QUFTUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVBaOztBQVNJO0VBQ0ksZUNqRVc7RURrRVgsWUFBQTtFQUNBLGdCQUFBO0FBUFI7O0FBU1E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQVBaOztBQVNRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFQWjs7QUFTUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBUFo7O0FBU1E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkNyRWE7RURzRWIsMEJBQUE7RUFDQSxrQkFBQTtBQVBaOztBQVNRO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQVBaOztBQVNJO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQ2xHVztFRG1HWCxlQ25HVztFRHFHWCx5QkN2Rk87RUR3RlAsMEJBQUE7RUFFQSxlQUFBO0FBVFI7O0FBV1E7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0FBVFo7O0FBV1E7RUFDSSxtQkFBQTtBQVRaOztBQVdRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBVFo7O0FBVVk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFSaEIiLCJmaWxlIjoic3JjL2FwcC9vdXRwdXQvb3V0cHV0LWl0ZW0vb3V0cHV0LWl0ZW0uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9fZ2xvYmFscydcbkBpbXBvcnQgJy4uLy4uL3JldGUtbW9kdWxlcy9fcmV0ZV92YXJpYWJsZXMnXG4gICAgXG4kb3V0cHV0LWNvbnRhaW5lci13aWR0aDogNDQwcHhcbiRvdXRwdXQtY29udGFpbmVyLW1pbi1oZWlnaHQ6IDQwcHhcbiRvdXRwdXQtdGl0bGUtd2lkdGg6IGNhbGMoICN7JG91dHB1dC1jb250YWluZXItd2lkdGh9IC8gMilcblxuJG91dHB1dC1ib3JkZXItY29sb3I6ICM3MDcwNzBcbiRvdXRwdXQtYm9yZGVyLXJhZGl1czogMTBweFxuJG91dHB1dC1ib3JkZXItd2lkdGg6IDJweFxuICAgIFxuKlxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZlxuICAgIFxuLm91dHB1dC1jb250YWluZXJcbiAgICBtYXgtd2lkdGg6ICRvdXRwdXQtY29udGFpbmVyLXdpZHRoXG4gICAgbWluLWhlaWdodDogJG91dHB1dC1jb250YWluZXItbWluLWhlaWdodFxuXG4gICAgYm9yZGVyOiAkY29sb3ItZGVmYXVsdCA1cHggb3V0c2V0XG5cbiAgICBtYXJnaW46IDEwcHhcbiAgICBvdmVyZmxvdzogaGlkZGVuXG5cbiAgICAudGl0bGUtY29udGFpbmVyXG4gICAgICAgIG1heC13aWR0aDogJG91dHB1dC10aXRsZS13aWR0aFxuICAgICAgICBoZWlnaHQ6IDQwcHhcbiAgICAgICAgbWFyZ2luOiAtJGJvcmRlci10aGlja25lc3NcbiAgICAgICAgZGlzcGxheTogZmxleFxuICAgICAgICBib3JkZXI6ICRjb2xvci1kZWZhdWx0ICRib3JkZXItdGhpY2tuZXNzIG91dHNldFxuXG4gICAgICAgIC50aXRsZVxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG5cbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweFxuICAgICAgICAgICAgdGV4dC1lbXBoYXNpczogYm9sZFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG5cbiAgICAgICAgICAgICYuY3JpdGljYWwtcGF0aFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCB0cmFuc3BhcmVudCAwICRwaW5zdHJpcGUtd2lkdGgsICAkY3JpdGljYWwtcGF0aC1oaWdobGlnaHQgJHBpbnN0cmlwZS13aWR0aCBjYWxjKCAyICogI3skcGluc3RyaXBlLXdpZHRofSkpXG5cbiAgICAmLnJlc291cmNlLCAudGl0bGUtY29udGFpbmVyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHJlc291cmNlLWhpZ2hsaWdodFxuICAgICAgICAudGl0bGUtY29udGFpbmVyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRyZXNvdXJjZS1oaWdobGlnaHRcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZXNvdXJjZS1oaWdobGlnaHRcblxuICAgICYuY3JhZnRlciwgLnRpdGxlLWNvbnRhaW5lclxuICAgICAgICBib3JkZXItY29sb3I6ICRjcmFmdGluZy1oaWdobGlnaHRcbiAgICAgICAgLnRpdGxlLWNvbnRhaW5lclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY3JhZnRpbmctaGlnaGxpZ2h0XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3JhZnRpbmctaGlnaGxpZ2h0XG5cbiAgICAmLm91dHB1dCwgLnRpdGxlLWNvbnRhaW5lclxuICAgICAgICBib3JkZXItY29sb3I6ICRvdXRwdXQtaGlnaGxpZ2h0XG4gICAgICAgIC50aXRsZS1jb250YWluZXJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJG91dHB1dC1oaWdobGlnaHRcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvdXRwdXQtaGlnaGxpZ2h0XG5cbiAgICAmLmN1c3RvbSwgLnRpdGxlLWNvbnRhaW5lclxuICAgICAgICBib3JkZXItY29sb3I6ICRjdXN0b20taGlnaGxpZ2h0XG4gICAgICAgIC50aXRsZS1jb250YWluZXJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjdXN0b20taGlnaGxpZ2h0XG5cbiAgICAmLm1pbmVjcmFmdCwgLnRpdGxlLWNvbnRhaW5lclxuICAgICAgICBib3JkZXItY29sb3I6ICRtaW5lY3JhZnQtaGlnaGxpZ2h0XG4gICAgICAgIC50aXRsZS1jb250YWluZXJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtaW5lY3JhZnQtaGlnaGxpZ2h0XG4gICAgICAgIFxuICAgIC5pZC1jb250YWluZXJcbiAgICAgICAgd2lkdGg6IDI1cHhcbiAgICAgICAgaGVpZ2h0OiAyNXB4XG4gICAgICAgIG1hcmdpbjogLSRib3JkZXItdGhpY2tuZXNzXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUVcbiAgICAgICAgYm9yZGVyOiAkY29sb3ItZGVmYXVsdCAkYm9yZGVyLXRoaWNrbmVzcyBvdXRzZXRcblxuICAgICAgICBwXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICAgICAgICBwYWRkaW5nOiBhdXRvXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweFxuXG4gICAgLmRhdGEtY29udGFpbmVyXG4gICAgICAgIG1hcmdpbi10b3A6ICRib3JkZXItdGhpY2tuZXNzXG4gICAgICAgIGhlaWdodDogYXV0b1xuICAgICAgICBkaXNwbGF5OiBmbGV4Ym94XG5cbiAgICAgICAgLmRhdGEtaW5wdXQtY29udGFpbmVyXG4gICAgICAgICAgICB3aWR0aDogNTAlXG4gICAgICAgICAgICBmbG9hdDogbGVmdFxuXG4gICAgICAgIC5kYXRhLW91dHB1dC1jb250YWluZXJcbiAgICAgICAgICAgIHdpZHRoOiA1MCVcbiAgICAgICAgICAgIGZsb2F0OiByaWdodFxuXG4gICAgICAgIC5ub2RlLXJhdGUtdGV4dFxuICAgICAgICAgICAgd2lkdGg6IDY1JVxuICAgICAgICAgICAgZmxvYXQ6IGxlZnRcblxuICAgICAgICBpbnB1dFxuICAgICAgICAgICAgd2lkdGg6IDM1JVxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvXG4gICAgICAgICAgICBtYXJnaW46IGF1dG9cbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kZWZhdWx0LWhpZ2hsaWdodFxuICAgICAgICAgICAgYm9yZGVyOiAycHggb3V0c2V0ICRjb2xvci1kZWZhdWx0XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcblxuICAgICAgICAubm9kZS1yYXRlc1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvXG4gICAgICAgICAgICB3aWR0aDogOTAlXG4gICAgICAgICAgICBtYXJnaW46IDVweCBhdXRvXG5cbiAgICAuZHJvcGRvd24tY29udGFpbmVyXG4gICAgICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gI3skYm9yZGVyLXRoaWNrbmVzc30gKiAyIClcbiAgICAgICAgaGVpZ2h0OiAyMHB4XG4gICAgICAgIG1hcmdpbjogYXV0b1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkYm9yZGVyLXRoaWNrbmVzc1xuICAgICAgICBtYXJnaW4tdG9wOiAkYm9yZGVyLXRoaWNrbmVzc1xuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kZWZhdWx0XG4gICAgICAgIGJvcmRlcjogJGNvbG9yLWRlZmF1bHQgJGJvcmRlci10aGlja25lc3Mgb3V0c2V0XG5cbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXG5cbiAgICAgICAgJjpob3ZlclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCRjb2xvci1kZWZhdWx0LCAxNSUgKVxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkY29sb3ItZGVmYXVsdCwgMTAlKVxuXG4gICAgICAgICY6YWN0aXZlXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IGluc2V0XG5cbiAgICAgICAgLmRyb3Bkb3duLWljb25cbiAgICAgICAgICAgIHdpZHRoOiA0MHB4XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHhcbiAgICAgICAgICAgIG1hcmdpbjogYXV0b1xuICAgICAgICAgICAgc3ZnXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTAlXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMCVcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcblxuXG4iLCIvLyAjIyMjIyMjIyMjIEdsb2JhbCBMYXlvdXQgU2V0dGluZ3MgIyMjIyMjIyMjI1xuJGdyaWQtd2lkdGg6IDc1JVxuJGdyaWQtaGVpZ2h0OiA2MCVcblxuLy8gU3BhY2luZ3MgYmV0d2VlbiBtb2R1bGVzXG4kbW9kdWxlLW1hcmdpbi1sZWZ0OiAxMHB4XG4kbW9kdWxlLW1hcmdpbi10b3A6ICRtb2R1bGUtbWFyZ2luLWxlZnRcblxuJG91dHB1dC13aWR0aDogY2FsYygxMDAlIC0gI3skZ3JpZC13aWR0aH0pXG4kb3V0cHV0LWhlaWdodDogY2FsYygxMDAlIC0gMiojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG4gICAgXG4kYnV0dG9uLWhlaWdodDogNTBweFxuXG4vLyBEZWxldGUgc3BlY2lmaWMgYnV0dG9uIHNldHRpbmdzXG4kZGVsZXRlLWJ1dHRvbi13aWR0aDogMTUwcHhcbiRkZWxldGUtYnV0dG9uLWhlaWdodDogNTBweFxuXG4vLyBJbnZlbnRvcnkgV2lkZ2V0IGhlaWdodFxuJHJlc291cmNlLWNoaWxkcmVuLWhlaWdodDogY2FsYygxMDAlIC0gMyojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG5cbiRib3JkZXItdGhpY2tuZXNzOiA1cHhcblxuLy8gIyMjIyMjIyMjIyBDb2xvciBEZWZpbml0aW9ucyAjIyMjIyMjIyMjXG4kY3VzdG9tLXNlbGVjdGVkOiNGMEVDRkRcbiRjdXN0b20taGlnaGxpZ2h0OiNDNEI1RjZcbiRvdXRwdXQtc2VsZWN0ZWQ6ICNDQUYzRjZcbiRvdXRwdXQtaGlnaGxpZ2h0OiMyRUQwREJcbiRjcmFmdGluZy1zZWxlY3RlZDojRjZFRENBXG4kY3JhZnRpbmctaGlnaGxpZ2h0OiNEQkI2MkVcbiRyZXNvdXJjZS1zZWxlY3RlZDojRDhGQ0NFXG4kcmVzb3VyY2UtaGlnaGxpZ2h0OiM2NkYyM0ZcbiRtaW5lY3JhZnQtc2VsZWN0ZWQ6ICNhY2I2YzNcbiRtaW5lY3JhZnQtaGlnaGxpZ2h0OiAjQThBQUIzXG5cbiRjb2xvci1kZWZhdWx0OiM3MDcwNzBcbiRjb2xvci1kZWZhdWx0LWRhcms6IzJBMkEyQVxuJGNvbG9yLWRlZmF1bHQtaGlnaGxpZ2h0OiNDQ0NDQ0NcblxuLy8gUGluc3RyaXBlIERlZmluaXRpb25zXG4kY3JpdGljYWwtcGF0aC1zZWxlY3RlZDojRkZEQUQwXG4kY3JpdGljYWwtcGF0aC1oaWdobGlnaHQ6I0ZGNkY0NVxuJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0LWFscGhhOiByZ2JhKCAkY3JpdGljYWwtcGF0aC1oaWdobGlnaHQsIC41KVxuXG5cbi8vICMjIyMjIyMjIyMgU3ByaXRlIFJlbmRlcmluZyBTZXR0aW5nc1xuJHNwcml0ZS1zaXplOiAzMnB4XG4kc3ByaXRlLXNjYWxlOiAyLjJcblxuLy8gSW4gbnVtYmVyIG9mIHNwcml0ZXNcbiRzcHJpdGUtc2hlZXQtaG9yaXpvbnRhbC1kaW1lbnNpb25zOiAxNlxuJHNwcml0ZS1zaGVldC12ZXJ0aWNhbC1kaW1lbnNpb25zOiAzNVxuXG4kc3ByaXRlLXdpZHRoOiBjYWxjKCN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zY2FsZX0pXG4kc3ByaXRlLXNoZWV0LXdpZHRoOiBjYWxjKCAjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2hlZXQtaG9yaXpvbnRhbC1kaW1lbnNpb25zICogJHNwcml0ZS1zY2FsZX0pXG4kc3ByaXRlLXNoZWV0LWhlaWdodDogY2FsYyggI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNoZWV0LXZlcnRpY2FsLWRpbWVuc2lvbnMgKiAkc3ByaXRlLXNjYWxlfSlcblxuLy8gU3ByaXRlIGltYWdlIGRpc3BsYXkgc2V0dGluZ3NcbiRzcHJpdGUtYm9yZGVyLXBhZGRpbmc6IDVweCJdfQ== */"] });
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
ItemImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemImageComponent, selectors: [["item-image"]], inputs: { selectedItem: "selectedItem", criticalPath: "criticalPath" }, decls: 3, vars: 2, consts: [[1, "image-container", 3, "ngClass"], [1, "pixelated"], ["src", "./assets/images/transparent_32x32.png", 1, "image", 3, "ngStyle"]], template: function ItemImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.criticalPath ? "criticalPath" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.background);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".image-container[_ngcontent-%COMP%] {\n  width: min(100%, calc(70.4px));\n  margin: auto;\n  position: relative;\n  padding: 2px;\n  border-radius: 100%;\n}\n.image-container.criticalPath[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 10px rgba(255, 111, 69, 0.5);\n  background-color: rgba(255, 111, 69, 0.5);\n}\n.image-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: min(100%, calc(70.4px));\n  height: min(100%, calc(70.4px));\n  margin: auto;\n  display: block;\n  background-image: url('inventory_sprites.png');\n  background-size: 1600% 3500%;\n  user-drag: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-drag: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhbC9pdGVtLWltYWdlLWNvbXBvbmVudC9pdGVtLWltYWdlLmNvbXBvbmVudC5zYXNzIiwic3JjL19nbG9iYWxzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUZKO0FBSUk7RUFDSSxnREFBQTtFQUNBLHlDQzZCd0I7QUQvQmhDO0FBSUk7RUFDSSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSw4Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQUZSIiwiZmlsZSI6InNyYy9hcHAvZ2VuZXJhbC9pdGVtLWltYWdlLWNvbXBvbmVudC9pdGVtLWltYWdlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vcmV0ZS1tb2R1bGVzL19yZXRlX3ZhcmlhYmxlcydcbkBpbXBvcnQgJy4uLy4uLy4uL19nbG9iYWxzJ1xuXG4uaW1hZ2UtY29udGFpbmVyXG4gICAgd2lkdGg6IG1pbiggMTAwJSwgI3skc3ByaXRlLXdpZHRofSlcbiAgICBtYXJnaW46IGF1dG9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICBwYWRkaW5nOiAycHhcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlXG5cbiAgICAmLmNyaXRpY2FsUGF0aFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0LWFscGhhXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodC1hbHBoYVxuICAgICAgICBcbiAgICAuaW1hZ2VcbiAgICAgICAgd2lkdGg6IG1pbiggMTAwJSwgI3skc3ByaXRlLXdpZHRofSlcbiAgICAgICAgaGVpZ2h0OiBtaW4oIDEwMCUsICN7JHNwcml0ZS13aWR0aH0pXG4gICAgICAgIG1hcmdpbjogYXV0b1xuICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoICcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ludmVudG9yeV9zcHJpdGVzLnBuZycgKVxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE2MDAlIDM1MDAlXG4gICAgICAgIHVzZXItZHJhZzogbm9uZVxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZVxuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lXG4gICAgICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lXG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmVcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lXG5cbiIsIi8vICMjIyMjIyMjIyMgR2xvYmFsIExheW91dCBTZXR0aW5ncyAjIyMjIyMjIyMjXG4kZ3JpZC13aWR0aDogNzUlXG4kZ3JpZC1oZWlnaHQ6IDYwJVxuXG4vLyBTcGFjaW5ncyBiZXR3ZWVuIG1vZHVsZXNcbiRtb2R1bGUtbWFyZ2luLWxlZnQ6IDEwcHhcbiRtb2R1bGUtbWFyZ2luLXRvcDogJG1vZHVsZS1tYXJnaW4tbGVmdFxuXG4kb3V0cHV0LXdpZHRoOiBjYWxjKDEwMCUgLSAjeyRncmlkLXdpZHRofSlcbiRvdXRwdXQtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyKiN7JG1vZHVsZS1tYXJnaW4tdG9wfSlcbiAgICBcbiRidXR0b24taGVpZ2h0OiA1MHB4XG5cbi8vIERlbGV0ZSBzcGVjaWZpYyBidXR0b24gc2V0dGluZ3NcbiRkZWxldGUtYnV0dG9uLXdpZHRoOiAxNTBweFxuJGRlbGV0ZS1idXR0b24taGVpZ2h0OiA1MHB4XG5cbi8vIEludmVudG9yeSBXaWRnZXQgaGVpZ2h0XG4kcmVzb3VyY2UtY2hpbGRyZW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAzKiN7JG1vZHVsZS1tYXJnaW4tdG9wfSlcblxuJGJvcmRlci10aGlja25lc3M6IDVweFxuXG4vLyAjIyMjIyMjIyMjIENvbG9yIERlZmluaXRpb25zICMjIyMjIyMjIyNcbiRjdXN0b20tc2VsZWN0ZWQ6I0YwRUNGRFxuJGN1c3RvbS1oaWdobGlnaHQ6I0M0QjVGNlxuJG91dHB1dC1zZWxlY3RlZDogI0NBRjNGNlxuJG91dHB1dC1oaWdobGlnaHQ6IzJFRDBEQlxuJGNyYWZ0aW5nLXNlbGVjdGVkOiNGNkVEQ0FcbiRjcmFmdGluZy1oaWdobGlnaHQ6I0RCQjYyRVxuJHJlc291cmNlLXNlbGVjdGVkOiNEOEZDQ0VcbiRyZXNvdXJjZS1oaWdobGlnaHQ6IzY2RjIzRlxuJG1pbmVjcmFmdC1zZWxlY3RlZDogI2FjYjZjM1xuJG1pbmVjcmFmdC1oaWdobGlnaHQ6ICNBOEFBQjNcblxuJGNvbG9yLWRlZmF1bHQ6IzcwNzA3MFxuJGNvbG9yLWRlZmF1bHQtZGFyazojMkEyQTJBXG4kY29sb3ItZGVmYXVsdC1oaWdobGlnaHQ6I0NDQ0NDQ1xuXG4vLyBQaW5zdHJpcGUgRGVmaW5pdGlvbnNcbiRjcml0aWNhbC1wYXRoLXNlbGVjdGVkOiNGRkRBRDBcbiRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodDojRkY2RjQ1XG4kY3JpdGljYWwtcGF0aC1oaWdobGlnaHQtYWxwaGE6IHJnYmEoICRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodCwgLjUpXG5cblxuLy8gIyMjIyMjIyMjIyBTcHJpdGUgUmVuZGVyaW5nIFNldHRpbmdzXG4kc3ByaXRlLXNpemU6IDMycHhcbiRzcHJpdGUtc2NhbGU6IDIuMlxuXG4vLyBJbiBudW1iZXIgb2Ygc3ByaXRlc1xuJHNwcml0ZS1zaGVldC1ob3Jpem9udGFsLWRpbWVuc2lvbnM6IDE2XG4kc3ByaXRlLXNoZWV0LXZlcnRpY2FsLWRpbWVuc2lvbnM6IDM1XG5cbiRzcHJpdGUtd2lkdGg6IGNhbGMoI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNjYWxlfSlcbiRzcHJpdGUtc2hlZXQtd2lkdGg6IGNhbGMoICN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zaGVldC1ob3Jpem9udGFsLWRpbWVuc2lvbnMgKiAkc3ByaXRlLXNjYWxlfSlcbiRzcHJpdGUtc2hlZXQtaGVpZ2h0OiBjYWxjKCAjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2hlZXQtdmVydGljYWwtZGltZW5zaW9ucyAqICRzcHJpdGUtc2NhbGV9KVxuXG4vLyBTcHJpdGUgaW1hZ2UgZGlzcGxheSBzZXR0aW5nc1xuJHNwcml0ZS1ib3JkZXItcGFkZGluZzogNXB4Il19 */"] });
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
IconButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconButtonComponent, selectors: [["app-icon-button"]], inputs: { icon: "icon", strokes: "strokes", size: "size", disabled: "disabled" }, outputs: { onClick: "onClick", onHover: "onHover" }, decls: 3, vars: 5, consts: [[1, "button-container", "pixelated", "minecraft-background", 3, "ngClass", "click", "onmouseover"], ["viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", 3, "ngClass"], ["fill-rule", "evenodd", 4, "ngFor", "ngForOf"], ["fill-rule", "evenodd"]], template: function IconButtonComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".button-container[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  border: 5px outset white;\n  background-color: white;\n  padding: 2px;\n  display: flex;\n}\n.button-container[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.button-container[_ngcontent-%COMP%]:active {\n  border-style: inset;\n}\n.button-container.disabled[_ngcontent-%COMP%] {\n  border-color: #8c8c8c;\n  background-color: #8c8c8c;\n}\n.button-container.disabled[_ngcontent-%COMP%]:hover {\n  cursor: not-allowed;\n}\n.button-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.path-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhbC9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5jb21wb25lbnQuc2FzcyIsInNyYy9fZ2xvYmFscy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUNRWTtFRFBaLFdDT1k7RURMWix3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7QUFISjtBQUtJO0VBQ0ksZUFBQTtBQUhSO0FBS0k7RUFDSSxtQkFBQTtBQUhSO0FBS0k7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0FBSFI7QUFLUTtFQUNJLG1CQUFBO0FBSFo7QUFLSTtFQUNJLFlBQUE7QUFIUjtBQUtBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWwvaWNvbi1idXR0b24vaWNvbi1idXR0b24uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9fZ2xvYmFscydcbiAgICBcbi5idXR0b24tY29udGFpbmVyXG4gICAgaGVpZ2h0OiAkYnV0dG9uLWhlaWdodFxuICAgIHdpZHRoOiAkYnV0dG9uLWhlaWdodFxuXG4gICAgYm9yZGVyOiA1cHggb3V0c2V0IGxpZ2h0ZW4oJGNvbG9yLWRlZmF1bHQtaGlnaGxpZ2h0LCAyNSUpXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkY29sb3ItZGVmYXVsdC1oaWdobGlnaHQsIDI1JSlcbiAgICBwYWRkaW5nOiAycHhcblxuICAgIGRpc3BsYXk6IGZsZXhcblxuICAgICY6aG92ZXJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXG5cbiAgICAmOmFjdGl2ZVxuICAgICAgICBib3JkZXItc3R5bGU6IGluc2V0XG5cbiAgICAmLmRpc2FibGVkXG4gICAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCAkY29sb3ItZGVmYXVsdC1oaWdobGlnaHQsIDI1JSlcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCAgJGNvbG9yLWRlZmF1bHQtaGlnaGxpZ2h0LCAyNSUpXG5cbiAgICAgICAgJjpob3ZlclxuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZFxuXG4gICAgc3ZnXG4gICAgICAgIG1hcmdpbjogYXV0b1xuXG4ucGF0aC1jb250YWluZXJcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICB3aWR0aDogMTAwJSIsIi8vICMjIyMjIyMjIyMgR2xvYmFsIExheW91dCBTZXR0aW5ncyAjIyMjIyMjIyMjXG4kZ3JpZC13aWR0aDogNzUlXG4kZ3JpZC1oZWlnaHQ6IDYwJVxuXG4vLyBTcGFjaW5ncyBiZXR3ZWVuIG1vZHVsZXNcbiRtb2R1bGUtbWFyZ2luLWxlZnQ6IDEwcHhcbiRtb2R1bGUtbWFyZ2luLXRvcDogJG1vZHVsZS1tYXJnaW4tbGVmdFxuXG4kb3V0cHV0LXdpZHRoOiBjYWxjKDEwMCUgLSAjeyRncmlkLXdpZHRofSlcbiRvdXRwdXQtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyKiN7JG1vZHVsZS1tYXJnaW4tdG9wfSlcbiAgICBcbiRidXR0b24taGVpZ2h0OiA1MHB4XG5cbi8vIERlbGV0ZSBzcGVjaWZpYyBidXR0b24gc2V0dGluZ3NcbiRkZWxldGUtYnV0dG9uLXdpZHRoOiAxNTBweFxuJGRlbGV0ZS1idXR0b24taGVpZ2h0OiA1MHB4XG5cbi8vIEludmVudG9yeSBXaWRnZXQgaGVpZ2h0XG4kcmVzb3VyY2UtY2hpbGRyZW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAzKiN7JG1vZHVsZS1tYXJnaW4tdG9wfSlcblxuJGJvcmRlci10aGlja25lc3M6IDVweFxuXG4vLyAjIyMjIyMjIyMjIENvbG9yIERlZmluaXRpb25zICMjIyMjIyMjIyNcbiRjdXN0b20tc2VsZWN0ZWQ6I0YwRUNGRFxuJGN1c3RvbS1oaWdobGlnaHQ6I0M0QjVGNlxuJG91dHB1dC1zZWxlY3RlZDogI0NBRjNGNlxuJG91dHB1dC1oaWdobGlnaHQ6IzJFRDBEQlxuJGNyYWZ0aW5nLXNlbGVjdGVkOiNGNkVEQ0FcbiRjcmFmdGluZy1oaWdobGlnaHQ6I0RCQjYyRVxuJHJlc291cmNlLXNlbGVjdGVkOiNEOEZDQ0VcbiRyZXNvdXJjZS1oaWdobGlnaHQ6IzY2RjIzRlxuJG1pbmVjcmFmdC1zZWxlY3RlZDogI2FjYjZjM1xuJG1pbmVjcmFmdC1oaWdobGlnaHQ6ICNBOEFBQjNcblxuJGNvbG9yLWRlZmF1bHQ6IzcwNzA3MFxuJGNvbG9yLWRlZmF1bHQtZGFyazojMkEyQTJBXG4kY29sb3ItZGVmYXVsdC1oaWdobGlnaHQ6I0NDQ0NDQ1xuXG4vLyBQaW5zdHJpcGUgRGVmaW5pdGlvbnNcbiRjcml0aWNhbC1wYXRoLXNlbGVjdGVkOiNGRkRBRDBcbiRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodDojRkY2RjQ1XG4kY3JpdGljYWwtcGF0aC1oaWdobGlnaHQtYWxwaGE6IHJnYmEoICRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodCwgLjUpXG5cblxuLy8gIyMjIyMjIyMjIyBTcHJpdGUgUmVuZGVyaW5nIFNldHRpbmdzXG4kc3ByaXRlLXNpemU6IDMycHhcbiRzcHJpdGUtc2NhbGU6IDIuMlxuXG4vLyBJbiBudW1iZXIgb2Ygc3ByaXRlc1xuJHNwcml0ZS1zaGVldC1ob3Jpem9udGFsLWRpbWVuc2lvbnM6IDE2XG4kc3ByaXRlLXNoZWV0LXZlcnRpY2FsLWRpbWVuc2lvbnM6IDM1XG5cbiRzcHJpdGUtd2lkdGg6IGNhbGMoI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNjYWxlfSlcbiRzcHJpdGUtc2hlZXQtd2lkdGg6IGNhbGMoICN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zaGVldC1ob3Jpem9udGFsLWRpbWVuc2lvbnMgKiAkc3ByaXRlLXNjYWxlfSlcbiRzcHJpdGUtc2hlZXQtaGVpZ2h0OiBjYWxjKCAjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2hlZXQtdmVydGljYWwtZGltZW5zaW9ucyAqICRzcHJpdGUtc2NhbGV9KVxuXG4vLyBTcHJpdGUgaW1hZ2UgZGlzcGxheSBzZXR0aW5nc1xuJHNwcml0ZS1ib3JkZXItcGFkZGluZzogNXB4Il19 */"] });
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
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! html2canvas */ "wOnQ");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_app_general_model_item_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/general/model/item.model */ "UKeZ");
/* harmony import */ var _nodes_sockets__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../nodes/sockets */ "nj5+");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../services/item.service */ "x7rl");
/* harmony import */ var _services_node_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/node.service */ "5bZ5");
/* harmony import */ var src_app_inventory_services_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/inventory/services/minecraft-inventory.service */ "v5B+");
/* harmony import */ var _output_services_output_manager_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../../output/services/output-manager.service */ "IIXy");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _general_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../general/icon-button/icon-button.component */ "MouV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "ofXK");
























const _c0 = ["nodeEditor"];
const _c1 = "M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z";
const _c2 = function () { return [_c1]; };
const _c3 = "M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z";
const _c4 = "M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z";
const _c5 = function () { return [_c3, _c4]; };
const _c6 = "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z";
const _c7 = "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z";
const _c8 = function () { return [_c6, _c7]; };
const _c9 = "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z";
const _c10 = function () { return [_c9]; };
const _c11 = function () { return ["danger", "pixelated", "minecraft-background"]; };
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
        this.pathParentPadding = [5, 10];
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
            BB.editor = this.editor;
            BB.engine = this.engine;
            for (const componentKey in this.components) {
                let component = this.components[componentKey];
                this.editor.register(component);
                this.engine.register(component);
            }
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
                this.nodeService.postCriticalPath_tl("testing");
                console.log("hello world");
                console.log(this.editor.toJSON());
                console.log(this.nodeService.getCriticalPath());
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
            this.editor.events['showcontextmenu'].push(({ e, node }) => {
                return Boolean(node);
            });
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
            if (!control) {
                return;
            }
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
        // Does not add item with invalid id
        if (id == src_app_general_model_item_model__WEBPACK_IMPORTED_MODULE_14__["UNKNOWN_ITEM"].id) {
            console.error("Cannot create node for unknown item");
        }
        else {
            this.createNode(type, id, event.clientX, event.clientY, true);
        }
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
        this.nodeService.SaveCustomNode(customNodeData).then(value => {
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
            this.createNode("Custom", value, location[0], location[1], false);
        });
    }
    // Reference - https://prasanthj.com/javascript/convet-div-to-image-in-angular/
    captureScreen() {
        // Solution is to change the size of the svg before I write the canvas
        this.fixSVGConnections();
        html2canvas__WEBPACK_IMPORTED_MODULE_13___default()(document.body, {
        // foreignObjectRendering: true,
        }).then(canvas => {
            canvas.toBlob(blob => {
                let link = document.createElement("a");
                link.download = "Screenshot.png";
                link.href = URL.createObjectURL(blob);
                link.click();
            });
            this.resetConnections();
        });
    }
    // fixSVGConnections must be run before resetConnections to populate the connections structure
    fixSVGConnections() {
        this.connections = document.getElementsByClassName("connection");
        for (let index = 0; index < this.connections.length; ++index) {
            let connection = this.connections.item(index);
            this.zeroOutConnectionPath(connection);
        }
    }
    // TODO: Fix connections that go from low to high
    zeroOutConnectionPath(connection) {
        let parent = connection.parentElement;
        let path = connection.children.item(0);
        let svgPath = path.getAttribute('d');
        let pathElements = svgPath.split(' ');
        let pathStart = [parseInt(pathElements[1]), parseInt(pathElements[2])];
        let pathEnd = [parseInt(pathElements[8]), parseInt(pathElements[9])];
        // Get top left point for the path with a border of 5px
        let topLeft = [Math.min(pathStart[0], pathEnd[0]) - this.pathParentPadding[0], Math.min(pathStart[1], pathEnd[1]) - this.pathParentPadding[1]];
        let bottomRight = [Math.max(pathStart[0], pathEnd[0]) + this.pathParentPadding[0], Math.max(pathStart[1], pathEnd[1]) + this.pathParentPadding[1]];
        let dimensions = [bottomRight[0] - topLeft[0], bottomRight[1] - topLeft[1]];
        // Offset the path points
        // Set the parent to the top left point
        parent.style.top = topLeft[1].toString() + "px";
        parent.style.left = topLeft[0].toString() + "px";
        // Offset the start path points 
        pathElements[1] = (pathStart[0] - topLeft[0]).toString();
        pathElements[2] = (pathStart[1] - topLeft[1]).toString();
        // Offset the end path points
        pathElements[8] = (pathEnd[0] - topLeft[0]).toString();
        pathElements[9] = (pathEnd[1] - topLeft[1]).toString();
        // Set the slope points to the axis aligned point at the end of the path
        pathElements[4] = pathElements[8];
        pathElements[5] = pathElements[2];
        pathElements[6] = pathElements[1];
        pathElements[7] = pathElements[9];
        // Actually calculate the width and the height
        connection.setAttribute("width", dimensions[0].toString());
        connection.setAttribute("height", dimensions[1].toString());
        let newPath = pathElements.join(' ');
        path.setAttribute('d', newPath);
    }
    resetConnections() {
        for (let index = 0; index < this.connections.length; ++index) {
            let connection = this.connections.item(index);
            this.resetConnectionPath(connection);
        }
        this.editor.nodes.forEach(node => {
            this.editor.view.updateConnections({ node: node });
        });
    }
    resetConnectionPath(connection) {
        let parent = connection.parentElement;
        let path = connection.children.item(0);
        let svgPath = path.getAttribute('d');
        let pathElements = svgPath.split(' ');
        let pathStart = [parseInt(pathElements[1]), parseInt(pathElements[2])];
        let pathEnd = [parseInt(pathElements[8]), parseInt(pathElements[9])];
        // Get top left point for the path with a border of 5px
        let topLeft = [Math.min(pathStart[0], pathEnd[0]) - this.pathParentPadding[0], Math.min(pathStart[1], pathEnd[1]) - this.pathParentPadding[1]];
        // Offset the path points
        // Set the parent to the top left point
        parent.style.top = "0px";
        parent.style.left = "0px";
        connection.removeAttribute('width');
        connection.removeAttribute('height');
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
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nodes_sockets__WEBPACK_IMPORTED_MODULE_15__["SocketController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_item_service__WEBPACK_IMPORTED_MODULE_16__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_node_service__WEBPACK_IMPORTED_MODULE_17__["NodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_inventory_services_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_18__["MinecraftInventoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_output_services_output_manager_service__WEBPACK_IMPORTED_MODULE_19__["OutputManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModal"])); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], viewQuery: function GridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, decls: 23, vars: 15, consts: [[1, "grid-wrapper", "module-margin", 3, "dragover", "drop"], ["id", "grid-toolbar-container", 1, "pixelated", "minecraft-background"], [1, "gird-toolbar-buttons"], [1, "toolbar-button", 3, "icon", "strokes", "disabled", "onClick"], [1, "toolbar-button", 3, "icon", "strokes", "onClick"], ["id", "screen-capture", 1, "toolbar-button", 3, "icon", "strokes", "onClick"], ["id", "expandToolbar", "data-toggle", "collapse", "data-target", "#grid-toolbar-popout", 1, "toolbar-button", 3, "icon", "strokes"], ["id", "grid-toolbar-popout", 1, "popout-window", "collapse"], [1, "node-editor"], ["nodeEditor", ""], ["id", "delete-container", 3, "mouseup"], [1, "button", 3, "ngClass"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "app-icon-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClick", function GridComponent_Template_app_icon_button_onClick_5_listener() { return ctx.captureScreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-icon-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Collapse To Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Show Workspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Download Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mouseup", function GridComponent_Template_div_mouseup_19_listener() { return ctx.deleteNode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "bi-aspect-ratio")("strokes", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](10, _c2))("disabled", !ctx.completePath);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "bi-aspect-ratio")("strokes", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](11, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "bi-download")("strokes", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](12, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "bi-three-dots")("strokes", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](13, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.anyNodeSelected() ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](14, _c11) : "disabled");
    } }, directives: [_general_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_21__["IconButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgClass"]], styles: [".grid-wrapper[_ngcontent-%COMP%] {\n  height: 60%;\n  border: 5px outset #2A2A2A;\n  position: relative;\n  background-color: #888;\n}\n\n#delete-container[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  width: 150px;\n  height: 50px;\n}\n\n#delete-container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-color: #FF6F45;\n  background-color: #FF6F45;\n}\n\n#delete-container[_ngcontent-%COMP%]   .button.disabled[_ngcontent-%COMP%] {\n  color: #c52c00;\n  border: 5px inset #e87c5c;\n  background-color: #fff0;\n}\n\n#delete-container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 4px;\n  text-align: center;\n}\n\n.gird-toolbar-buttons[_ngcontent-%COMP%] {\n  width: calc( 50px + 5px * 3);\n  background-color: #2A2A2A;\n}\n\n.gird-toolbar-buttons[_ngcontent-%COMP%]   .toolbar-button[_ngcontent-%COMP%] {\n  display: block;\n  margin: 5px;\n}\n\n#grid-toolbar-container[_ngcontent-%COMP%] {\n  position: fixed;\n  height: calc(60% - 10px);\n  width: auto;\n  min-width: 50px;\n  z-index: 1;\n  background-color: #2A2A2A;\n  display: flex;\n}\n\n#grid-toolbar-container[_ngcontent-%COMP%]   .collapsing[_ngcontent-%COMP%] {\n  background-color: #CCCCCC;\n}\n\n#grid-toolbar-popout[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #CCCCCC;\n}\n\n#grid-toolbar-popout[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 50px;\n  margin: 5px;\n}\n\n#grid-toolbar-popout[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font: \"Segoe UI\";\n  font-weight: bold;\n  display: inline-block;\n  vertical-align: middle;\n  color: #404040;\n}\n\n#expandToolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  bottom: 0px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL2dyaWQvZ3JpZC5jb21wb25lbnQuc2FzcyIsInNyYy9fZ2xvYmFscy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksV0NGVTtFREdWLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUZKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0FBRko7O0FBSUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQ29CaUI7RURuQmpCLHlCQ21CaUI7QURyQnpCOztBQUlRO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7QUFGWjs7QUFJUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFGWjs7QUFJQTtFQUNJLDRCQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFHSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FBRFI7O0FBR0E7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSx5QkNaZ0I7RURjaEIsYUFBQTtBQURKOztBQUdJO0VBQ0kseUJBQUE7QUFEUjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFFSTtFQUNJLFlDakRRO0VEa0RSLFdBQUE7QUFBUjs7QUFFUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFBWjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9yZXRlLW1vZHVsZXMvZ3JpZC9ncmlkLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vZ2xvYmFscydcbkBpbXBvcnQgJy4uL3JldGVfdmFyaWFibGVzJ1xuICAgIFxuLmdyaWQtd3JhcHBlclxuICAgIGhlaWdodDogJGdyaWQtaGVpZ2h0XG4gICAgYm9yZGVyOiA1cHggb3V0c2V0ICRjb2xvci1kZWZhdWx0LWRhcmtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4XG5cbiNkZWxldGUtY29udGFpbmVyXG4gICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgcmlnaHQ6IDEwcHhcbiAgICBib3R0b206IDEwcHhcblxuICAgIHdpZHRoOiAkZGVsZXRlX2J1dHRvbl93aWR0aFxuICAgIGhlaWdodDogJGRlbGV0ZV9idXR0b25faGVpZ2h0XG5cbiAgICAuYnV0dG9uXG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgIGhlaWdodDogMTAwJVxuICAgICAgICBib3JkZXItY29sb3I6ICRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3JpdGljYWwtcGF0aC1oaWdobGlnaHRcblxuICAgICAgICAmLmRpc2FibGVkXG4gICAgICAgICAgICBjb2xvcjogZGFya2VuKCRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodCwgMjUlKVxuICAgICAgICAgICAgYm9yZGVyOiA1cHggaW5zZXQgZGVzYXR1cmF0ZSgkY3JpdGljYWwtcGF0aC1oaWdobGlnaHQsIDI1JSlcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYwXG5cbiAgICAgICAgcFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4XG4gICAgICAgICAgICBtYXJnaW46IDRweFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG5cbi5naXJkLXRvb2xiYXItYnV0dG9uc1xuICAgIHdpZHRoOiBjYWxjKCAjeyRidXR0b25faGVpZ2h0fSArIDVweCAqIDMpXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRlZmF1bHQtZGFya1xuXG4gICAgLnRvb2xiYXItYnV0dG9uXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgICAgIG1hcmdpbjogNXB4XG5cbiNncmlkLXRvb2xiYXItY29udGFpbmVyXG4gICAgcG9zaXRpb246IGZpeGVkXG4gICAgaGVpZ2h0OiBjYWxjKCN7JGdyaWQtaGVpZ2h0fSAtIDEwcHgpXG4gICAgd2lkdGg6IGF1dG9cbiAgICBtaW4td2lkdGg6IDUwcHhcbiAgICB6LWluZGV4OiAxXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRlZmF1bHQtZGFya1xuXG4gICAgZGlzcGxheTogZmxleFxuXG4gICAgLmNvbGxhcHNpbmdcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQ1xuICAgIFxuI2dyaWQtdG9vbGJhci1wb3BvdXRcbiAgICB3aWR0aDogMTAwJVxuICAgIGhlaWdodDogMTAwJVxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDQ0NcblxuICAgIGRpdlxuICAgICAgICBoZWlnaHQ6ICRidXR0b25faGVpZ2h0XG4gICAgICAgIG1hcmdpbjogNXB4XG5cbiAgICAgICAgcFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4XG4gICAgICAgICAgICBmb250OiAnU2Vnb2UgVUknXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gICAgICAgICAgICBjb2xvcjogIzQwNDA0MFxuXG4jZXhwYW5kVG9vbGJhclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIGxlZnQ6IDBweFxuICAgIGJvdHRvbTogMHB4XG5cbmxhYmVsXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgd2lkdGg6IGF1dG9cbiAgICBtYXJnaW4tYm90dG9tOiAwcHhcblxuIiwiLy8gIyMjIyMjIyMjIyBHbG9iYWwgTGF5b3V0IFNldHRpbmdzICMjIyMjIyMjIyNcbiRncmlkLXdpZHRoOiA3NSVcbiRncmlkLWhlaWdodDogNjAlXG5cbi8vIFNwYWNpbmdzIGJldHdlZW4gbW9kdWxlc1xuJG1vZHVsZS1tYXJnaW4tbGVmdDogMTBweFxuJG1vZHVsZS1tYXJnaW4tdG9wOiAkbW9kdWxlLW1hcmdpbi1sZWZ0XG5cbiRvdXRwdXQtd2lkdGg6IGNhbGMoMTAwJSAtICN7JGdyaWQtd2lkdGh9KVxuJG91dHB1dC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDIqI3skbW9kdWxlLW1hcmdpbi10b3B9KVxuICAgIFxuJGJ1dHRvbi1oZWlnaHQ6IDUwcHhcblxuLy8gRGVsZXRlIHNwZWNpZmljIGJ1dHRvbiBzZXR0aW5nc1xuJGRlbGV0ZS1idXR0b24td2lkdGg6IDE1MHB4XG4kZGVsZXRlLWJ1dHRvbi1oZWlnaHQ6IDUwcHhcblxuLy8gSW52ZW50b3J5IFdpZGdldCBoZWlnaHRcbiRyZXNvdXJjZS1jaGlsZHJlbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDMqI3skbW9kdWxlLW1hcmdpbi10b3B9KVxuXG4kYm9yZGVyLXRoaWNrbmVzczogNXB4XG5cbi8vICMjIyMjIyMjIyMgQ29sb3IgRGVmaW5pdGlvbnMgIyMjIyMjIyMjI1xuJGN1c3RvbS1zZWxlY3RlZDojRjBFQ0ZEXG4kY3VzdG9tLWhpZ2hsaWdodDojQzRCNUY2XG4kb3V0cHV0LXNlbGVjdGVkOiAjQ0FGM0Y2XG4kb3V0cHV0LWhpZ2hsaWdodDojMkVEMERCXG4kY3JhZnRpbmctc2VsZWN0ZWQ6I0Y2RURDQVxuJGNyYWZ0aW5nLWhpZ2hsaWdodDojREJCNjJFXG4kcmVzb3VyY2Utc2VsZWN0ZWQ6I0Q4RkNDRVxuJHJlc291cmNlLWhpZ2hsaWdodDojNjZGMjNGXG4kbWluZWNyYWZ0LXNlbGVjdGVkOiAjYWNiNmMzXG4kbWluZWNyYWZ0LWhpZ2hsaWdodDogI0E4QUFCM1xuXG4kY29sb3ItZGVmYXVsdDojNzA3MDcwXG4kY29sb3ItZGVmYXVsdC1kYXJrOiMyQTJBMkFcbiRjb2xvci1kZWZhdWx0LWhpZ2hsaWdodDojQ0NDQ0NDXG5cbi8vIFBpbnN0cmlwZSBEZWZpbml0aW9uc1xuJGNyaXRpY2FsLXBhdGgtc2VsZWN0ZWQ6I0ZGREFEMFxuJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0OiNGRjZGNDVcbiRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodC1hbHBoYTogcmdiYSggJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0LCAuNSlcblxuXG4vLyAjIyMjIyMjIyMjIFNwcml0ZSBSZW5kZXJpbmcgU2V0dGluZ3NcbiRzcHJpdGUtc2l6ZTogMzJweFxuJHNwcml0ZS1zY2FsZTogMi4yXG5cbi8vIEluIG51bWJlciBvZiBzcHJpdGVzXG4kc3ByaXRlLXNoZWV0LWhvcml6b250YWwtZGltZW5zaW9uczogMTZcbiRzcHJpdGUtc2hlZXQtdmVydGljYWwtZGltZW5zaW9uczogMzVcblxuJHNwcml0ZS13aWR0aDogY2FsYygjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2NhbGV9KVxuJHNwcml0ZS1zaGVldC13aWR0aDogY2FsYyggI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNoZWV0LWhvcml6b250YWwtZGltZW5zaW9ucyAqICRzcHJpdGUtc2NhbGV9KVxuJHNwcml0ZS1zaGVldC1oZWlnaHQ6IGNhbGMoICN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zaGVldC12ZXJ0aWNhbC1kaW1lbnNpb25zICogJHNwcml0ZS1zY2FsZX0pXG5cbi8vIFNwcml0ZSBpbWFnZSBkaXNwbGF5IHNldHRpbmdzXG4kc3ByaXRlLWJvcmRlci1wYWRkaW5nOiA1cHgiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
        args: [{
                selector: 'app-grid',
                templateUrl: './grid.component.html',
                styleUrls: ['./grid.component.sass']
            }]
    }], function () { return [{ type: _nodes_sockets__WEBPACK_IMPORTED_MODULE_15__["SocketController"] }, { type: _services_item_service__WEBPACK_IMPORTED_MODULE_16__["ItemService"] }, { type: _services_node_service__WEBPACK_IMPORTED_MODULE_17__["NodeService"] }, { type: src_app_inventory_services_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_18__["MinecraftInventoryService"] }, { type: _output_services_output_manager_service__WEBPACK_IMPORTED_MODULE_19__["OutputManagerService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModal"] }]; }, { el: [{
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _general_service_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general/service/session.service */ "fnjm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _rete_modules_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rete-modules/grid/grid.component */ "OP9P");
/* harmony import */ var _rete_modules_node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rete-modules/node-browser/node-browser.component */ "nu8m");
/* harmony import */ var _inventory_inventory_display_inventory_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inventory/inventory-display/inventory-display.component */ "nXju");
/* harmony import */ var _output_output_container_output_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./output/output-container/output-container.component */ "n/8p");










function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_1_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.idString = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.idString);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.submitDisabled());
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-node-browser");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-inventory-display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-output-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(route, sessionService) {
        this.route = route;
        this.sessionService = sessionService;
        this.enteredId = false;
        this.idString = "";
        this.route.queryParams.subscribe(params => {
            if (params.id) {
                this.sessionService.setSession(params.id);
                this.enteredId = true;
            }
        });
    }
    submitDisabled() {
        return this.idString === '';
    }
    submit() {
        this.sessionService.setSession(this.idString);
        this.enteredId = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_service_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: [[1, "fill-width", "fill-height"], ["class", "manual-id-input-container", 4, "ngIf"], ["id", "fullsite", "class", "fill-width fill-height", 4, "ngIf"], [1, "manual-id-input-container"], [1, "input-group", "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "inputGroup-sizing", 1, "input-group-text"], ["type", "text", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');", "placeholder", "123456789", "aria-label", "Small", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "submit", 3, "disabled", "click"], ["id", "fullsite", 1, "fill-width", "fill-height"], ["id", "workspace"], ["id", "resource-workspace"], ["id", "node-browser-workspace", 1, "left"], ["id", "minecraft-inventory-workspace", 1, "right"], ["id", "resultspace"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 8, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 10, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.enteredId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enteredId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _rete_modules_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"], _rete_modules_node_browser_node_browser_component__WEBPACK_IMPORTED_MODULE_6__["NodeBrowserComponent"], _inventory_inventory_display_inventory_display_component__WEBPACK_IMPORTED_MODULE_7__["InventoryDisplayComponent"], _output_output_container_output_container_component__WEBPACK_IMPORTED_MODULE_8__["OutputContainerComponent"]], styles: ["#fullsite[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #ddd;\n}\n\n#workspace[_ngcontent-%COMP%] {\n  width: 75%;\n  height: 100%;\n  flex-shrink: 2;\n  flex-direction: column;\n  display: block;\n}\n\n#resource-workspace[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc( 100% - 60%);\n}\n\n#node-browser-workspace[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n}\n\n#minecraft-inventory-workspace[_ngcontent-%COMP%] {\n  width: 50%;\n  height: calc( 100% - 2*10px);\n  margin: auto;\n}\n\n#resultspace[_ngcontent-%COMP%] {\n  width: calc(100% - 75%);\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic3JjL19nbG9iYWxzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFHQTtFQUNJLFVDTlM7RURPVCxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLFVBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUFHSjs7QUFEQTtFQUNJLHVCQ25CVztFRG9CWCxZQUFBO0FBSUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9fZ2xvYmFscydcblxuI2Z1bGxzaXRlXG4gICAgZGlzcGxheTogZmxleFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRcblxuI3dvcmtzcGFjZVxuICAgIHdpZHRoOiAkZ3JpZC13aWR0aFxuICAgIGhlaWdodDogMTAwJVxuICAgIGZsZXgtc2hyaW5rOiAyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICAgIGRpc3BsYXk6IGJsb2NrXG5cbiNyZXNvdXJjZS13b3Jrc3BhY2VcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICBoZWlnaHQ6IGNhbGMoIDEwMCUgLSAjeyRncmlkLWhlaWdodH0pXG5cbiNub2RlLWJyb3dzZXItd29ya3NwYWNlXG4gICAgd2lkdGg6IDUwJVxuICAgIGhlaWdodDogMTAwJVxuXG4jbWluZWNyYWZ0LWludmVudG9yeS13b3Jrc3BhY2VcbiAgICB3aWR0aDogNTAlXG4gICAgaGVpZ2h0OiBjYWxjKCAxMDAlIC0gMioxMHB4KVxuICAgIG1hcmdpbjogYXV0b1xuXG4jcmVzdWx0c3BhY2VcbiAgICB3aWR0aDogJG91dHB1dC13aWR0aFxuICAgIGhlaWdodDogMTAwJSIsIi8vICMjIyMjIyMjIyMgR2xvYmFsIExheW91dCBTZXR0aW5ncyAjIyMjIyMjIyMjXG4kZ3JpZC13aWR0aDogNzUlXG4kZ3JpZC1oZWlnaHQ6IDYwJVxuXG4vLyBTcGFjaW5ncyBiZXR3ZWVuIG1vZHVsZXNcbiRtb2R1bGUtbWFyZ2luLWxlZnQ6IDEwcHhcbiRtb2R1bGUtbWFyZ2luLXRvcDogJG1vZHVsZS1tYXJnaW4tbGVmdFxuXG4kb3V0cHV0LXdpZHRoOiBjYWxjKDEwMCUgLSAjeyRncmlkLXdpZHRofSlcbiRvdXRwdXQtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyKiN7JG1vZHVsZS1tYXJnaW4tdG9wfSlcbiAgICBcbiRidXR0b24taGVpZ2h0OiA1MHB4XG5cbi8vIERlbGV0ZSBzcGVjaWZpYyBidXR0b24gc2V0dGluZ3NcbiRkZWxldGUtYnV0dG9uLXdpZHRoOiAxNTBweFxuJGRlbGV0ZS1idXR0b24taGVpZ2h0OiA1MHB4XG5cbi8vIEludmVudG9yeSBXaWRnZXQgaGVpZ2h0XG4kcmVzb3VyY2UtY2hpbGRyZW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAzKiN7JG1vZHVsZS1tYXJnaW4tdG9wfSlcblxuJGJvcmRlci10aGlja25lc3M6IDVweFxuXG4vLyAjIyMjIyMjIyMjIENvbG9yIERlZmluaXRpb25zICMjIyMjIyMjIyNcbiRjdXN0b20tc2VsZWN0ZWQ6I0YwRUNGRFxuJGN1c3RvbS1oaWdobGlnaHQ6I0M0QjVGNlxuJG91dHB1dC1zZWxlY3RlZDogI0NBRjNGNlxuJG91dHB1dC1oaWdobGlnaHQ6IzJFRDBEQlxuJGNyYWZ0aW5nLXNlbGVjdGVkOiNGNkVEQ0FcbiRjcmFmdGluZy1oaWdobGlnaHQ6I0RCQjYyRVxuJHJlc291cmNlLXNlbGVjdGVkOiNEOEZDQ0VcbiRyZXNvdXJjZS1oaWdobGlnaHQ6IzY2RjIzRlxuJG1pbmVjcmFmdC1zZWxlY3RlZDogI2FjYjZjM1xuJG1pbmVjcmFmdC1oaWdobGlnaHQ6ICNBOEFBQjNcblxuJGNvbG9yLWRlZmF1bHQ6IzcwNzA3MFxuJGNvbG9yLWRlZmF1bHQtZGFyazojMkEyQTJBXG4kY29sb3ItZGVmYXVsdC1oaWdobGlnaHQ6I0NDQ0NDQ1xuXG4vLyBQaW5zdHJpcGUgRGVmaW5pdGlvbnNcbiRjcml0aWNhbC1wYXRoLXNlbGVjdGVkOiNGRkRBRDBcbiRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodDojRkY2RjQ1XG4kY3JpdGljYWwtcGF0aC1oaWdobGlnaHQtYWxwaGE6IHJnYmEoICRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodCwgLjUpXG5cblxuLy8gIyMjIyMjIyMjIyBTcHJpdGUgUmVuZGVyaW5nIFNldHRpbmdzXG4kc3ByaXRlLXNpemU6IDMycHhcbiRzcHJpdGUtc2NhbGU6IDIuMlxuXG4vLyBJbiBudW1iZXIgb2Ygc3ByaXRlc1xuJHNwcml0ZS1zaGVldC1ob3Jpem9udGFsLWRpbWVuc2lvbnM6IDE2XG4kc3ByaXRlLXNoZWV0LXZlcnRpY2FsLWRpbWVuc2lvbnM6IDM1XG5cbiRzcHJpdGUtd2lkdGg6IGNhbGMoI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNjYWxlfSlcbiRzcHJpdGUtc2hlZXQtd2lkdGg6IGNhbGMoICN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zaGVldC1ob3Jpem9udGFsLWRpbWVuc2lvbnMgKiAkc3ByaXRlLXNjYWxlfSlcbiRzcHJpdGUtc2hlZXQtaGVpZ2h0OiBjYWxjKCAjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2hlZXQtdmVydGljYWwtZGltZW5zaW9ucyAqICRzcHJpdGUtc2NhbGV9KVxuXG4vLyBTcHJpdGUgaW1hZ2UgZGlzcGxheSBzZXR0aW5nc1xuJHNwcml0ZS1ib3JkZXItcGFkZGluZzogNXB4Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _general_service_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] }]; }, null); })();


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
/* harmony import */ var _shared_custom_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/custom.model */ "3OuN");
/* harmony import */ var _shared_connection_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/connection.model */ "fqIU");
/* harmony import */ var rete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rete */ "9dUG");
/* harmony import */ var _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/resource-control/resource-control */ "AnjU");





let defaultCustomData = {
    uuid: "THIS IS SET FROM THE SERVER",
    uniqueUserId: "SERVER",
    meta: {
        name: "Bookshelves",
        shareLevel: _shared_custom_model__WEBPACK_IMPORTED_MODULE_1__["ShareLevel"].Personal,
        icon: 92,
    },
    inputs: [338, 334, 23],
    outputs: {
        92: {
            inputRate: { 338: .11, 334: .33, 23: .66 },
            createdAmount: 1
        }
    },
};
class CustomNode extends rete__WEBPACK_IMPORTED_MODULE_3__["Component"] {
    constructor(socketController, itemService, nodeService) {
        super('Custom');
        this.socketController = socketController;
        this.itemService = itemService;
        this.nodeService = nodeService;
    }
    builder(node) {
        node.data['customization'] = defaultCustomData;
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
        if (!control) {
            return;
        } // If there is no control, skip for right now
        control.props.selectedItem = customIcon;
        // For each output calculate the critical path based on their inputs
        for (let outputId in customData.outputs) {
            let missingInput = false;
            let perHour = Infinity;
            let output = customData.outputs[outputId];
            // Create the initial datagram for the output
            datagramOutputs[outputId] = new _shared_connection_model__WEBPACK_IMPORTED_MODULE_2__["Connection"](node.id, parseInt(outputId), output.createdAmount, perHour);
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
        this.nodeService.GetCustomNode(node.data['custom']).then(customization => {
            if (!customization) {
                throw new Error("Failed to get Custom Node Data for ID: " + node.data['custom']);
            }
            node.data.name = customization.meta.name;
            node.data['customization'] = customization;
            // TL
            console.log(this.nodeService.getCriticalPath());
            // Add a ResourceControl to the node, temporaraly set icon to crafting table
            var control = new _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_4__["ResourceControl"](this.editor, 'resource', true);
            control.props.readonly = true;
            node.addControl(control);
            // Add the starting data to the control
            control.putData('resource', this.itemService.GetItemFromId(customization.meta.icon));
            var custom = node.data.customization;
            custom.inputs.forEach(id => {
                var item = this.itemService.GetItemFromId(id);
                var input = new rete__WEBPACK_IMPORTED_MODULE_3__["Input"]("" + item.id, item.name, this.socketController.GetSocketForId(item.id), false);
                node.addInput(input);
            });
            for (let outputIndex in custom.outputs) {
                let item = this.itemService.GetItemFromId(parseInt(outputIndex));
                var output = new _shared_custom_output__WEBPACK_IMPORTED_MODULE_0__["CustomOutput"]("" + item.id, item.name, this.socketController.GetSocketForId(item.id), false);
                output.data.rate = Infinity;
                node.addOutput(output);
            }
        });
    }
}


/***/ }),

/***/ "UKeZ":
/*!*********************************************!*\
  !*** ./src/app/general/model/item.model.ts ***!
  \*********************************************/
/*! exports provided: UNKNOWN_ITEM, Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNKNOWN_ITEM", function() { return UNKNOWN_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var _color_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.model */ "5UJb");

const UNKNOWN_ITEM = {
    id: -1,
    name: "Unknown",
    index: [14, 0],
    craftable: false,
    primaryColor: new _color_model__WEBPACK_IMPORTED_MODULE_0__["Color"](255, 0, 255),
    secondaryColor: new _color_model__WEBPACK_IMPORTED_MODULE_0__["Color"](0, 255, 255)
};
class Item {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}


/***/ }),

/***/ "ULQj":
/*!*****************************************!*\
  !*** ./src/assets/resources/items.json ***!
  \*****************************************/
/*! exports provided: version, items, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":\"1.0\",\"items\":[{\"id\":1,\"name\":\"Stone\",\"index\":[0,0],\"craftable\":false,\"primaryColor\":\"#8b8b8b\",\"secondaryColor\":\"#464646\"},{\"id\":2,\"name\":\"Grass\",\"index\":[1,0],\"craftable\":false,\"primaryColor\":\"#629554\",\"secondaryColor\":\"#3a3521\"},{\"id\":3,\"name\":\"Dirt\",\"index\":[2,0],\"craftable\":false,\"primaryColor\":\"#9f724f\",\"secondaryColor\":\"#473121\"},{\"id\":4,\"name\":\"Cobblestone\",\"index\":[3,0],\"craftable\":false,\"primaryColor\":\"#8b8b8b\",\"secondaryColor\":\"#464646\"},{\"id\":5,\"name\":\"Planks\",\"index\":[4,0],\"craftable\":true,\"recipe\":{\"createdAmount\":4,\"ingredients\":[{\"id\":23,\"amount\":1}]},\"primaryColor\":\"#987c4a\",\"secondaryColor\":\"#514129\"},{\"id\":23,\"name\":\"Logs\",\"index\":[6,1],\"craftable\":false,\"primaryColor\":\"#3a2e1c\",\"secondaryColor\":\"#8c7045\"},{\"id\":50,\"name\":\"Torches\",\"index\":[14,5],\"craftable\":true,\"recipe\":{\"createdAmount\":4,\"ingredients\":[{\"id\":263,\"amount\":1},{\"id\":280,\"amount\":1}]},\"primaryColor\":\"#ffd800\",\"secondaryColor\":\"#ffff97\"},{\"id\":54,\"name\":\"Chest\",\"index\":[2,6],\"craftable\":true,\"recipe\":{\"createdAmount\":1,\"ingredients\":[{\"id\":5,\"amount\":8}]},\"primaryColor\":\"#9d6c26\",\"secondaryColor\":\"#7a7a7a\"},{\"id\":61,\"name\":\"Furnace\",\"index\":[9,6],\"craftable\":true,\"recipe\":{\"createdAmount\":1,\"ingredients\":[{\"id\":4,\"amount\":8}]},\"primaryColor\":\"#545454\",\"secondaryColor\":\"#511616\"},{\"id\":69,\"name\":\"Lever\",\"index\":[1,7],\"craftable\":true,\"recipe\":{\"createdAmount\":1,\"ingredients\":[{\"id\":4,\"amount\":1},{\"id\":280,\"amount\":1}]},\"primaryColor\":\"#3a3732\",\"secondaryColor\":\"#626262\"},{\"id\":70,\"name\":\"Stone Pressure Plate\",\"index\":[2,7],\"craftable\":true,\"recipe\":{\"createdAmount\":1,\"ingredients\":[{\"id\":1,\"amount\":2}]},\"primaryColor\":\"7a7a7a\",\"secondaryColor\":\"#6d6d6d\"},{\"id\":72,\"name\":\"Wooden Pressure Plate\",\"index\":[4,7],\"craftable\":true,\"recipe\":{\"createdAmount\":1,\"ingredients\":[{\"id\":5,\"amount\":2}]},\"primaryColor\":\"#aa8958\",\"secondaryColor\":\"#997e4b\"},{\"id\":76,\"name\":\"Redstone Torch\",\"index\":[8,7],\"craftable\":true,\"recipe\":{\"createdAmount\":1,\"ingredients\":[{\"id\":280,\"amount\":1},{\"id\":331,\"amount\":1}]},\"primaryColor\":\"#fd0000\",\"secondaryColor\":\"#af0000\"},{\"id\":85,\"name\":\"Fence\",\"index\":[1,8],\"craftable\":true,\"recipe\":{\"createdAmount\":3,\"ingredients\":[{\"id\":280,\"amount\":2},{\"id\":5,\"amount\":4}]},\"primaryColor\":\"#765f3e\",\"secondaryColor\":\"#645330\"},{\"id\":96,\"name\":\"Trapdoor\",\"index\":[12,8],\"craftable\":true,\"recipe\":{\"createdAmount\":2,\"ingredients\":[{\"id\":5,\"amount\":6}]},\"primaryColor\":\"#886734\",\"secondaryColor\":\"#251a0b\"},{\"id\":92,\"name\":\"Bookshelf\",\"index\":[11,5],\"craftable\":true,\"recipe\":{\"createdAmount\":1,\"ingredients\":[{\"id\":340,\"amount\":3},{\"id\":5,\"amount\":6}]},\"primaryColor\":\"#28180c\",\"secondaryColor\":\"#4d3825\"},{\"id\":103,\"name\":\"Crafting Bench\",\"index\":[6,6],\"craftable\":true,\"recipe\":{\"createdAmount\":1,\"ingredients\":[{\"id\":5,\"amount\":4}]},\"primaryColor\":\"#734428\",\"secondaryColor\":\"#33291a\"},{\"id\":263,\"name\":\"Coal\",\"index\":[6,14],\"craftable\":false,\"primaryColor\":\"#141414\",\"secondaryColor\":\"#2e2e2e\"},{\"id\":264,\"name\":\"Diamond\",\"index\":[8,14],\"craftable\":false,\"primaryColor\":\"#8cf4e2\",\"secondaryColor\":\"#2ccdb1\"},{\"id\":278,\"name\":\"Diamond Pickaxe\",\"index\":[6,15],\"craftable\":true,\"recipe\":{\"createdAmount\":1,\"ingredients\":[{\"id\":264,\"amount\":3},{\"id\":280,\"amount\":2}]},\"primaryColor\":\"#27b29a\",\"secondaryColor\":\"#684e1e\"},{\"id\":279,\"name\":\"Diamond Axe\",\"index\":[7,15],\"craftable\":true,\"recipe\":{\"createdAmount\":1,\"ingredients\":[{\"id\":264,\"amount\":3},{\"id\":280,\"amount\":2}]},\"primaryColor\":\"#27b29a\",\"secondaryColor\":\"#684e1e\"},{\"id\":280,\"name\":\"Stick\",\"index\":[8,15],\"craftable\":true,\"recipe\":{\"createdAmount\":4,\"ingredients\":[{\"id\":5,\"amount\":2}]},\"primaryColor\":\"#141414\",\"secondaryColor\":\"#2e2e2e\"},{\"id\":331,\"name\":\"Redstone\",\"index\":[11,18],\"craftable\":false,\"primaryColor\":\"#ff0000\",\"secondaryColor\":\"#720000\"},{\"id\":334,\"name\":\"Leather\",\"index\":[14,18],\"craftable\":false,\"primaryColor\":\"#c65c35\",\"secondaryColor\":\"#9e492a\"},{\"id\":338,\"name\":\"Sugar Cane\",\"index\":[2,19],\"craftable\":false,\"primaryColor\":\"#c7ff87\",\"secondaryColor\":\"#82a859\"},{\"id\":339,\"name\":\"Paper\",\"index\":[3,19],\"craftable\":true,\"recipe\":{\"createdAmount\":3,\"ingredients\":[{\"id\":338,\"amount\":3}]},\"primaryColor\":\"#d6d6d6\",\"secondaryColor\":\"#eaeaea\"},{\"id\":340,\"name\":\"Book\",\"index\":[4,19],\"craftable\":true,\"recipe\":{\"createdAmount\":1,\"ingredients\":[{\"id\":334,\"amount\":1},{\"id\":339,\"amount\":3}]},\"primaryColor\":\"#654b17\",\"secondaryColor\":\"#b7b7b7\"},{\"id\":364,\"name\":\"Steak\",\"index\":[11,21],\"craftable\":false,\"primaryColor\":\"#824839\",\"secondaryColor\":\"#7a3e2d\"},{\"id\":373,\"name\":\"Potion Of Healing\",\"index\":[5,27],\"craftable\":false,\"primaryColor\":\"#fb2755\",\"secondaryColor\":\"#a61a38\"}]}");

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory/inventory.module */ "cLqD");
/* harmony import */ var _output_output_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./output/output.module */ "bSka");
/* harmony import */ var _rete_modules_nodes_sockets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rete-modules/nodes/sockets */ "nj5+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _rete_modules_custom_rete_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rete-modules/custom-rete.module */ "8vqi");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_rete_modules_nodes_sockets__WEBPACK_IMPORTED_MODULE_3__["SocketController"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _rete_modules_custom_rete_module__WEBPACK_IMPORTED_MODULE_8__["CustomReteModule"],
            _output_output_module__WEBPACK_IMPORTED_MODULE_2__["OutputModule"],
            _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_1__["InventoryModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _rete_modules_custom_rete_module__WEBPACK_IMPORTED_MODULE_8__["CustomReteModule"],
        _output_output_module__WEBPACK_IMPORTED_MODULE_2__["OutputModule"],
        _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_1__["InventoryModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _rete_modules_custom_rete_module__WEBPACK_IMPORTED_MODULE_8__["CustomReteModule"],
                    _output_output_module__WEBPACK_IMPORTED_MODULE_2__["OutputModule"],
                    _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_1__["InventoryModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                ],
                providers: [_rete_modules_nodes_sockets__WEBPACK_IMPORTED_MODULE_3__["SocketController"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
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
const plannedWidth = 1920;
class GraphItemComponent {
    constructor(outputManagerService, nodeService, itemService) {
        this.outputManagerService = outputManagerService;
        this.nodeService = nodeService;
        this.itemService = itemService;
        // Line Chart Data
        this.lineView = [400, 250];
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
        this.gradient = true;
        this.itemName = "Loading";
        this.id = 0;
        // Temporary
        this.legend = true;
        this.showLabels = true;
        this.animations = true;
        this.xAxis = true;
        this.yAxis = true;
        this.showYAxisLabel = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Year';
        this.yAxisLabel = 'Population';
        this.colorSchemeLine = {
            domain: []
        };
        this.colorSchemeBar = {
            domain: []
        };
        this.colorSchemePie = {
            domain: []
        };
    }
    onResize(event) {
        let ratio = (event.target.innerWidth / plannedWidth);
        this.barView[0] = (this.lineView[0] / 2.2) * ratio;
        this.pieView[0] = (this.lineView[0] / 2.2) * ratio;
    }
    ngOnInit() {
        let ratio = window.innerWidth / plannedWidth;
        this.barView[0] = (this.lineView[0] / 2.2) * ratio;
        this.pieView[0] = (this.lineView[0] / 2.2) * ratio;
        this.outputManagerService.bindOnNodeUpdate(this.node.id, val => {
            this.node = val;
            this.updateData();
            this.itemName = this.node.data['resource']['name'];
            this.id = this.node.id;
        });
        this.updateData();
    }
    updateData() {
        this.primaryData = [];
        this.secondaryData = [];
        this.tertiaryData = [];
        this.colorSchemeLine.domain = [];
        this.colorSchemeBar.domain = [];
        this.colorSchemePie.domain = [];
        let nodeData = this.node.data;
        let nodePerHour = nodeData['perHour'];
        let outputData = new LineChartData(nodeData['resource']['name'], nodePerHour, 6, 10);
        this.primaryData.push(outputData);
        this.colorSchemeLine.domain.push(this.itemService.GetItemPrimaryColor(nodeData['resource']['id']).toHex());
        let localNode = this.nodeService.getNodeTreeItem(this.node.id);
        let result = this.nodeService.calculateCustomNodeFromOutputs(localNode ? [localNode] : []);
        let nodeIds = result[0];
        let calcuatedInputData = result[1];
        let highestRate = 0;
        let totalRates = 0;
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
                totalRates += inputRate;
                inputRates[inputId] = inputRate;
            });
        }
        totalRates += nodePerHour;
        for (let inputId in inputRates) {
            let inputRate = inputRates[inputId];
            let inputItem = this.itemService.GetItemFromId(parseInt(inputId));
            // If we are generating excess resources. Add to the primaryData table
            if (inputRate > 0) {
                let outputData = new LineChartData(inputItem.name, inputRate, 6, 10);
                this.primaryData.push(outputData);
                this.colorSchemeLine.domain.push(this.itemService.GetItemPrimaryColor(inputItem.id).toHex());
            }
            let utilization = inputRate / highestRate;
            if (Math.abs(utilization - 1) > .00001) {
                this.secondaryData.push({ "name": inputItem.name, "value": (1 - utilization) * 100 });
                let color = this.itemService.GetItemPrimaryColor(inputItem.id);
                this.AddToLegend(inputItem.name, color);
                this.colorSchemeBar.domain.push(this.itemService.GetItemPrimaryColor(inputItem.id).toHex());
            }
            if (Math.abs(inputRate - 0) > .00001) {
                this.tertiaryData.push({ "name": inputItem.name, "value": inputRate / totalRates });
                let color = this.itemService.GetItemPrimaryColor(inputItem.id);
                this.AddToLegend(inputItem.name, color);
                this.colorSchemePie.domain.push(this.itemService.GetItemPrimaryColor(inputItem.id).toHex());
            }
        }
        // Add the output item to the output ratios
        if (nodePerHour != Infinity) {
            this.tertiaryData.push({ "name": nodeData['resource']['name'], "value": nodePerHour / totalRates });
            let color = this.itemService.GetItemPrimaryColor(nodeData['resource']['id']);
            this.AddToLegend(nodeData['resource']['name'], color);
            this.colorSchemePie.domain.push(color.toHex());
        }
    }
    AddToLegend(name, color) {
        let found = this.primaryData.find(value => {
            return value['name'] == name;
        });
        if (found) {
            return;
        }
        let legendData = new LineChartData(name, 0, 0, 0);
        this.primaryData.push(legendData);
        this.colorSchemeLine.domain.push(color.toHex());
    }
}
GraphItemComponent.ɵfac = function GraphItemComponent_Factory(t) { return new (t || GraphItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__["OutputManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_rete_modules_services_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"])); };
GraphItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraphItemComponent, selectors: [["app-graph-item"]], hostBindings: function GraphItemComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function GraphItemComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { node: "node" }, decls: 20, vars: 13, consts: [[1, "graph-container", "pixelated", "minecraft-background"], [1, "title-container"], [1, "title", "text-node-title"], [1, "id", "text-node-type"], [1, "line-chart-container"], [1, "line-chart-title"], [1, "line-chart"], ["legend", "true", "legendPosition", "bottom", "xAxis", "true", "yAxis", "true", "showXAxisLabel", "true", "showYAxisLabel", "true", "xAxisLabel", "Time", "yAxisLabel", "Amount", 3, "scheme", "results"], [1, "extra-graphs-container"], [1, "bar-chart-container"], [1, "bar-chart-title"], ["yAxis", "true", 3, "view", "scheme", "results", "gradient", "resultsChange"], [1, "pie-chart-container"], [1, "pie-chart-title"], [3, "view", "scheme", "results", "gradient", "labels"]], template: function GraphItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Resources Over Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ngx-charts-line-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Resource Allocation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngx-charts-bar-vertical", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resultsChange", function GraphItemComponent_Template_ngx_charts_bar_vertical_resultsChange_15_listener($event) { return ctx.secondaryData = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Output Ratios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "ngx-charts-pie-chart", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.itemName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorSchemeLine)("results", ctx.primaryData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.barView)("scheme", ctx.colorSchemeBar)("results", ctx.secondaryData)("gradient", ctx.gradient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.pieView)("scheme", ctx.colorSchemePie)("results", ctx.tertiaryData)("gradient", ctx.gradient)("labels", ctx.showPieLabels);
    } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["LineChartComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["BarVerticalComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["PieChartComponent"]], styles: [".graph-container[_ngcontent-%COMP%] {\n  margin: 10px;\n  height: auto;\n  border: 5px outset #2ED0DB;\n  padding: 5px;\n  background-color: #2ED0DB;\n}\n.graph-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.graph-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n.graph-container[_ngcontent-%COMP%]   .line-chart-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 300px;\n  overflow: hidden;\n  margin-bottom: 10px;\n  padding-top: 10px;\n  padding-bottom: 100px;\n  border: 5px outset #CAF3F6;\n  background-color: #CAF3F6;\n}\n.graph-container[_ngcontent-%COMP%]   .line-chart-container[_ngcontent-%COMP%]   .line-chart-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.graph-container[_ngcontent-%COMP%]   .line-chart-container[_ngcontent-%COMP%]   .line-chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-height: 200px;\n}\n.graph-container[_ngcontent-%COMP%]   .extra-graphs-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.graph-container[_ngcontent-%COMP%]   .extra-graphs-container[_ngcontent-%COMP%]   .bar-chart-container[_ngcontent-%COMP%] {\n  width: 47.5%;\n  border: 5px outset #CAF3F6;\n  background-color: #CAF3F6;\n  float: left;\n}\n.graph-container[_ngcontent-%COMP%]   .extra-graphs-container[_ngcontent-%COMP%]   .bar-chart-container[_ngcontent-%COMP%]   .bar-chart-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.graph-container[_ngcontent-%COMP%]   .extra-graphs-container[_ngcontent-%COMP%]   .pie-chart-container[_ngcontent-%COMP%] {\n  width: 47.5%;\n  float: right;\n  border: 5px outset #CAF3F6;\n  background-color: #CAF3F6;\n  margin-left: auto;\n}\n.graph-container[_ngcontent-%COMP%]   .extra-graphs-container[_ngcontent-%COMP%]   .pie-chart-container[_ngcontent-%COMP%]   .pie-chart-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0cHV0L2dyYXBoLWl0ZW0vZ3JhcGgtaXRlbS5jb21wb25lbnQuc2FzcyIsInNyYy9fZ2xvYmFscy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0lBQUE7QUFXQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBRUEsMEJBQUE7RUFDQSxZQUFBO0VBRUEseUJDUWM7QURabEI7QUFNSTtFQUNJLGtCQUFBO0FBSlI7QUFNUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFKWjtBQU1JO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFFQSwwQkFBQTtFQUNBLHlCQ2JVO0FET2xCO0FBUVE7RUFDSSxrQkFBQTtBQU5aO0FBUVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBTlo7QUFRSTtFQUNJLGFBQUE7QUFOUjtBQVFRO0VBQ0ksWUFBQTtFQUVBLDBCQUFBO0VBQ0EseUJDOUJNO0VEK0JOLFdBQUE7QUFQWjtBQVNZO0VBQ0ksa0JBQUE7QUFQaEI7QUFTUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBRUEsMEJBQUE7RUFDQSx5QkN6Q007RUQwQ04saUJBQUE7QUFSWjtBQVVZO0VBQ0ksa0JBQUE7QUFSaEIiLCJmaWxlIjoic3JjL2FwcC9vdXRwdXQvZ3JhcGgtaXRlbS9ncmFwaC1pdGVtLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEN1cnJlbnQgaXNzdWUgd2l0aCBuZ3gtY2hhcnRzIFxuICogICAgTGVnZW5kIGhlaWdodCBpcyBub3QgY2FsY3VsYXRlZCBpbiBhdXRvIGhlaWdodCB3aGVuIHVzaW5nIGxlZ2VuZD1cImJlbG93XCJcbiAqICAgIFJlc3VsdHMgaW4gaW5jb3JyZWN0IHN0eWxpbmcgd2hlbiBub3QgZGVmaW5pbmcgYSB2aWV3PVt4LHldIGZvciByZXNwb25zaXZlIGRlc2lnblxuICogXG4gKiAgICBDdXJyZW50IG9wZW4gcHVsbCByZXF1ZXN0ICMxNTIwIG9uIG5neC1jaGFydHMgZ2l0aHViLiBPY3QgMSwgMjAyMFxuICogXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vc3dpbWxhbmUvbmd4LWNoYXJ0cy9wdWxsLzE1MjBcbiAqL1xuICAgIFxuQGltcG9ydCAnLi4vLi4vLi4vX2dsb2JhbHMnXG4gICAgXG4uZ3JhcGgtY29udGFpbmVyXG4gICAgbWFyZ2luOiAxMHB4XG4gICAgaGVpZ2h0OiBhdXRvXG5cbiAgICBib3JkZXI6ICRib3JkZXItdGhpY2tuZXNzIG91dHNldCAkb3V0cHV0LWhpZ2hsaWdodFxuICAgIHBhZGRpbmc6IDVweFxuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG91dHB1dC1oaWdobGlnaHRcblxuICAgIC50aXRsZS1jb250YWluZXJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgICAgIFxuICAgICAgICAuaWRcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgICAgICAgdG9wOiA1cHhcbiAgICAgICAgICAgIHJpZ2h0OiA1cHhcblxuICAgIC5saW5lLWNoYXJ0LWNvbnRhaW5lclxuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuXG5cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHhcblxuICAgICAgICBib3JkZXI6ICRib3JkZXItdGhpY2tuZXNzIG91dHNldCAkb3V0cHV0LXNlbGVjdGVkXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvdXRwdXQtc2VsZWN0ZWRcblxuICAgICAgICAubGluZS1jaGFydC10aXRsZVxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG5cbiAgICAgICAgLmxpbmUtY2hhcnRcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCVcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4XG5cbiAgICAuZXh0cmEtZ3JhcGhzLWNvbnRhaW5lclxuICAgICAgICBkaXNwbGF5OiBmbGV4XG5cbiAgICAgICAgLmJhci1jaGFydC1jb250YWluZXJcbiAgICAgICAgICAgIHdpZHRoOiA0Ny41JVxuXG4gICAgICAgICAgICBib3JkZXI6ICRib3JkZXItdGhpY2tuZXNzIG91dHNldCAkb3V0cHV0LXNlbGVjdGVkXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3V0cHV0LXNlbGVjdGVkXG4gICAgICAgICAgICBmbG9hdDogbGVmdFxuXG4gICAgICAgICAgICAuYmFyLWNoYXJ0LXRpdGxlXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG5cbiAgICAgICAgLnBpZS1jaGFydC1jb250YWluZXJcbiAgICAgICAgICAgIHdpZHRoOiA0Ny41JVxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0XG5cbiAgICAgICAgICAgIGJvcmRlcjogJGJvcmRlci10aGlja25lc3Mgb3V0c2V0ICRvdXRwdXQtc2VsZWN0ZWRcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvdXRwdXQtc2VsZWN0ZWRcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvXG5cbiAgICAgICAgICAgIC5waWUtY2hhcnQtdGl0bGVcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIiLCIvLyAjIyMjIyMjIyMjIEdsb2JhbCBMYXlvdXQgU2V0dGluZ3MgIyMjIyMjIyMjI1xuJGdyaWQtd2lkdGg6IDc1JVxuJGdyaWQtaGVpZ2h0OiA2MCVcblxuLy8gU3BhY2luZ3MgYmV0d2VlbiBtb2R1bGVzXG4kbW9kdWxlLW1hcmdpbi1sZWZ0OiAxMHB4XG4kbW9kdWxlLW1hcmdpbi10b3A6ICRtb2R1bGUtbWFyZ2luLWxlZnRcblxuJG91dHB1dC13aWR0aDogY2FsYygxMDAlIC0gI3skZ3JpZC13aWR0aH0pXG4kb3V0cHV0LWhlaWdodDogY2FsYygxMDAlIC0gMiojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG4gICAgXG4kYnV0dG9uLWhlaWdodDogNTBweFxuXG4vLyBEZWxldGUgc3BlY2lmaWMgYnV0dG9uIHNldHRpbmdzXG4kZGVsZXRlLWJ1dHRvbi13aWR0aDogMTUwcHhcbiRkZWxldGUtYnV0dG9uLWhlaWdodDogNTBweFxuXG4vLyBJbnZlbnRvcnkgV2lkZ2V0IGhlaWdodFxuJHJlc291cmNlLWNoaWxkcmVuLWhlaWdodDogY2FsYygxMDAlIC0gMyojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG5cbiRib3JkZXItdGhpY2tuZXNzOiA1cHhcblxuLy8gIyMjIyMjIyMjIyBDb2xvciBEZWZpbml0aW9ucyAjIyMjIyMjIyMjXG4kY3VzdG9tLXNlbGVjdGVkOiNGMEVDRkRcbiRjdXN0b20taGlnaGxpZ2h0OiNDNEI1RjZcbiRvdXRwdXQtc2VsZWN0ZWQ6ICNDQUYzRjZcbiRvdXRwdXQtaGlnaGxpZ2h0OiMyRUQwREJcbiRjcmFmdGluZy1zZWxlY3RlZDojRjZFRENBXG4kY3JhZnRpbmctaGlnaGxpZ2h0OiNEQkI2MkVcbiRyZXNvdXJjZS1zZWxlY3RlZDojRDhGQ0NFXG4kcmVzb3VyY2UtaGlnaGxpZ2h0OiM2NkYyM0ZcbiRtaW5lY3JhZnQtc2VsZWN0ZWQ6ICNhY2I2YzNcbiRtaW5lY3JhZnQtaGlnaGxpZ2h0OiAjQThBQUIzXG5cbiRjb2xvci1kZWZhdWx0OiM3MDcwNzBcbiRjb2xvci1kZWZhdWx0LWRhcms6IzJBMkEyQVxuJGNvbG9yLWRlZmF1bHQtaGlnaGxpZ2h0OiNDQ0NDQ0NcblxuLy8gUGluc3RyaXBlIERlZmluaXRpb25zXG4kY3JpdGljYWwtcGF0aC1zZWxlY3RlZDojRkZEQUQwXG4kY3JpdGljYWwtcGF0aC1oaWdobGlnaHQ6I0ZGNkY0NVxuJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0LWFscGhhOiByZ2JhKCAkY3JpdGljYWwtcGF0aC1oaWdobGlnaHQsIC41KVxuXG5cbi8vICMjIyMjIyMjIyMgU3ByaXRlIFJlbmRlcmluZyBTZXR0aW5nc1xuJHNwcml0ZS1zaXplOiAzMnB4XG4kc3ByaXRlLXNjYWxlOiAyLjJcblxuLy8gSW4gbnVtYmVyIG9mIHNwcml0ZXNcbiRzcHJpdGUtc2hlZXQtaG9yaXpvbnRhbC1kaW1lbnNpb25zOiAxNlxuJHNwcml0ZS1zaGVldC12ZXJ0aWNhbC1kaW1lbnNpb25zOiAzNVxuXG4kc3ByaXRlLXdpZHRoOiBjYWxjKCN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zY2FsZX0pXG4kc3ByaXRlLXNoZWV0LXdpZHRoOiBjYWxjKCAjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2hlZXQtaG9yaXpvbnRhbC1kaW1lbnNpb25zICogJHNwcml0ZS1zY2FsZX0pXG4kc3ByaXRlLXNoZWV0LWhlaWdodDogY2FsYyggI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNoZWV0LXZlcnRpY2FsLWRpbWVuc2lvbnMgKiAkc3ByaXRlLXNjYWxlfSlcblxuLy8gU3ByaXRlIGltYWdlIGRpc3BsYXkgc2V0dGluZ3NcbiRzcHJpdGUtYm9yZGVyLXBhZGRpbmc6IDVweCJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-graph-item',
                templateUrl: './graph-item.component.html',
                styleUrls: ['./graph-item.component.sass']
            }]
    }], function () { return [{ type: _services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__["OutputManagerService"] }, { type: src_app_rete_modules_services_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"] }, { type: src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] }]; }, { node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
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
        this.updateNodeStructure(node);
        return node;
    }
    worker(node, inputs, outputs) {
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
        var node_ref = this.editor.nodes.find(n => n.id === node.id);
        let control = node_ref.controls.get('resource');
        control.setRate(perHourBottleneck);
    }
    updateNodeStructure(node) {
        // node.getConnections().forEach(element => {
        //   this.editor.removeConnection(element);
        // });
        // node.outputs.clear();
        var item = node.data.resource;
        var input = new rete__WEBPACK_IMPORTED_MODULE_0__["Input"]("resource", item.name, this.socketController.GetSocketForId(item.id), false);
        node.addInput(input);
        this.editor.trigger('nodeselected');
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
/* harmony import */ var _services_http_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/http-minecraft-inventory.service */ "rpsm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/minecraft-inventory.service */ "v5B+");
/* harmony import */ var _inventory_display_inventory_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inventory-display/inventory-display.component */ "nXju");
/* harmony import */ var _inventory_item_inventory_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventory-item/inventory-item.component */ "spm5");








class InventoryModule {
}
InventoryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InventoryModule });
InventoryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function InventoryModule_Factory(t) { return new (t || InventoryModule)(); }, providers: [{ provide: _services_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_4__["MinecraftInventoryService"], useClass: _services_http_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_1__["HttpMinecraftInventoryService"] }], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_0__["GeneralModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InventoryModule, { declarations: [_inventory_display_inventory_display_component__WEBPACK_IMPORTED_MODULE_5__["InventoryDisplayComponent"], _inventory_item_inventory_item_component__WEBPACK_IMPORTED_MODULE_6__["InventoryItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_0__["GeneralModule"]], exports: [_inventory_display_inventory_display_component__WEBPACK_IMPORTED_MODULE_5__["InventoryDisplayComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](InventoryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_inventory_display_inventory_display_component__WEBPACK_IMPORTED_MODULE_5__["InventoryDisplayComponent"], _inventory_item_inventory_item_component__WEBPACK_IMPORTED_MODULE_6__["InventoryItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_0__["GeneralModule"]
                ],
                providers: [{ provide: _services_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_4__["MinecraftInventoryService"], useClass: _services_http_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_1__["HttpMinecraftInventoryService"] }],
                exports: [_inventory_display_inventory_display_component__WEBPACK_IMPORTED_MODULE_5__["InventoryDisplayComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "fnjm":
/*!****************************************************!*\
  !*** ./src/app/general/service/session.service.ts ***!
  \****************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SessionService {
    constructor() {
        this.sessionId = "NO_SESSION";
        this.hasBeenSet = false;
    }
    setSession(newSession) {
        if (this.hasBeenSet) {
            console.error("WARNING: Session is already set");
        }
        this.sessionId = newSession;
    }
    getSession() {
        if (!this.hasBeenSet) {
            console.error("WARNING: Session has not be set");
        }
        return this.sessionId;
    }
    buildPostWithSession(bodyTag, body) {
        let postBody = {};
        postBody.sessionId = this.sessionId;
        if (bodyTag !== "") {
            postBody[bodyTag] = body;
        }
        return postBody;
    }
}
SessionService.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(); };
SessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SessionService, factory: SessionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
    }
    builder(node) {
        var control = new _controls_resource_control_resource_control__WEBPACK_IMPORTED_MODULE_2__["ResourceControl"](this.editor, 'resource');
        control.props.readonly = true;
        control.props.selectedItem = node.data.resource;
        node.addControl(control);
        node.meta.type = 'minecraft';
        node.data.name = 'Minecraft';
        this.updateNodeStructure(node);
        this.minecraftInventoryService.AssignInventoryUpdateCallback(this, node.id, node.data.resource.id, this.updateAverage);
        return node;
    }
    worker(node, input, outputs) {
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
        var item = node.data.resource;
        var output = new rete__WEBPACK_IMPORTED_MODULE_1__["Output"]("resource", item.name, this.socketController.GetSocketForId(item.id), false);
        node.addOutput(output);
        this.minecraftInventoryService.GetInventoryItemAverage(node.data.resource['id']).then(value => {
            let control = node.controls.get('resource');
            control.onChangeRate(value);
        });
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
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/session.service */ "fnjm");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");








class GeneralModule {
}
GeneralModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: GeneralModule });
GeneralModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function GeneralModule_Factory(t) { return new (t || GeneralModule)(); }, providers: [_service_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GeneralModule, { declarations: [_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__["IconButtonComponent"],
        _item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_1__["ItemImageComponent"],
        _pipe_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_0__["HighlightSearchPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]], exports: [_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__["IconButtonComponent"], _item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_1__["ItemImageComponent"], _pipe_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_0__["HighlightSearchPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](GeneralModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__["IconButtonComponent"],
                    _item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_1__["ItemImageComponent"],
                    _pipe_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_0__["HighlightSearchPipe"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                ],
                providers: [_service_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]],
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
    getNodeElementName() {
        return this.getNodeData()['resource'].name;
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
            this.outputNodes.push(new TreeItem(value));
        });
        // let searchStack: TreeItem[] = [];
        // this.outputNodes.forEach( treeNode => {
        //   searchStack.push(treeNode);
        // });
        // while (searchStack.length > 0) {
        //   const currentNode: TreeItem = searchStack.pop();
        //   for (const inputIndex in currentNode.node.inputs) {
        //     const input = currentNode.node.inputs[inputIndex];
        //     if (input['connections'] && input['connections'].length > 0) {
        //       let newNode = this.allConnectedNodes[input['connections'][0]['node']];
        //       searchStack.push(this.addNode(newNode, currentNode));
        //     }
        //   }
        // }
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
                let smallestConnectionStack = [];
                value.getInputTree().forEach((value) => {
                    smallestConnectionStack.push(value);
                });
                while (smallestConnectionStack.length > 0) {
                    let currentSmallestConnection = smallestConnectionStack.pop();
                    if (!currentSmallestConnection) {
                        continue;
                    }
                    this.criticalPath.push(currentSmallestConnection.nodeId);
                    let smallestPerHour = Infinity;
                    let smallestConnection = null;
                    let duplicateConnections = [];
                    // Find the smallest per hour connection with duplicates
                    currentSmallestConnection.tree.forEach((inputConnection, index) => {
                        let inputConnectionPerHour = currentSmallestConnection.transitionCost[index] * inputConnection.amount * inputConnection.perHour;
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
                        smallestConnectionStack.push(value);
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
        let child = new TreeItem(node);
        child.outputs.push(parent);
        parent.inputs.push(child);
        return child;
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





function BaseNodeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaseNodeComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaseNodeComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaseNodeComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaseNodeComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BaseNodeComponent_div_17_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const output_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, output_r8.data.rate, "1.2-2"));
} }
function BaseNodeComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BaseNodeComponent_div_17_div_4_Template, 3, 4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rete-socket", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const output_r8 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](output_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isCustom());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("io", output_r8)("socket", output_r8.socket);
} }
function BaseNodeComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 48);
} if (rf & 2) {
    const control_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rete-control", control_r11);
} }
function BaseNodeComponent_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](input_r12.name);
} }
function BaseNodeComponent_div_21_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 53);
} if (rf & 2) {
    const input_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rete-control", input_r12.control);
} }
function BaseNodeComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rete-socket", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BaseNodeComponent_div_21_div_2_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BaseNodeComponent_div_21_div_3_Template, 1, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("io", input_r12)("socket", input_r12.socket);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !input_r12.showControl());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", input_r12.showControl());
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
BaseNodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseNodeComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["NodeService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 29, vars: 19, consts: [[1, "node", 3, "ngClass"], [1, "title-container", "pixelated", "minecraft-background"], [1, "shared"], [1, "title", "text-node-title", "pixelated", "minecraft-background"], [1, "star-container"], ["class", "star", 4, "ngIf"], [1, "title-critical-path"], [1, "body-container"], [1, "background-image"], ["class", "resource-image", 4, "ngIf"], ["class", "crafting-image", 4, "ngIf"], ["class", "output-image", 4, "ngIf"], ["class", "custom-image", 4, "ngIf"], [1, "content"], [1, "outputs"], ["class", "output", 4, "ngFor", "ngForOf"], [1, "clear"], ["class", "controls", 3, "rete-control", 4, "ngFor", "ngForOf"], [1, "inputs"], ["class", "input", 4, "ngFor", "ngForOf"], [1, "node-footer"], [1, "node-type"], [1, "node-type-text", "text-node-type", "caps"], [1, "node-id"], [1, "node-id-text", "text-node-id"], [1, "star"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-star-fill"], ["d", "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"], [1, "resource-image"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-bricks"], ["fill-rule", "evenodd", "d", "M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5v-3zM3 4v2h4.5V4H3zm5.5 0v2H13V4H8.5zM3 10v2h4.5v-2H3zm5.5 0v2H13v-2H8.5zM1 1v2h3.5V1H1zm4.5 0v2H15V1H5.5zM1 7v2h3.5V7H1zm4.5 0v2h5V7h-5zm6 0v2H15V7h-3.5zM1 13v2h3.5v-2H1zm4.5 0v2h5v-2h-5zm6 0v2H15v-2h-3.5z"], [1, "crafting-image"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-hammer"], ["d", "M9.812 1.952a.5.5 0 0 1-.312.89c-1.671 0-2.852.596-3.616 1.185L4.857 5.073V6.21a.5.5 0 0 1-.146.354L3.425 7.853a.5.5 0 0 1-.708 0L.146 5.274a.5.5 0 0 1 0-.706l1.286-1.29a.5.5 0 0 1 .354-.146H2.84C4.505 1.228 6.216.862 7.557 1.04a5.009 5.009 0 0 1 2.077.782l.178.129z"], ["fill-rule", "evenodd", "d", "M6.012 3.5a.5.5 0 0 1 .359.165l9.146 8.646A.5.5 0 0 1 15.5 13L14 14.5a.5.5 0 0 1-.756-.056L4.598 5.297a.5.5 0 0 1 .048-.65l1-1a.5.5 0 0 1 .366-.147z"], [1, "output-image"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-minecart"], ["fill-rule", "evenodd", "d", "M4 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82l1.313 7h11.17l1.313-7H1.102z"], [1, "custom-image"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-archive"], ["d", "M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"], [1, "output"], [1, "socket-info"], [1, "output-title", "text-socket"], ["class", "output-rate-container", 4, "ngIf"], ["rete-socket", "", 3, "io", "socket"], [1, "output-rate-container"], ["type", "text", "readonly", "true", 1, "output-rate", "styled-input", 3, "value"], [1, "controls", 3, "rete-control"], [1, "input"], ["class", "input-title text-socket", 4, "ngIf"], ["class", "input-control", 3, "rete-control", 4, "ngIf"], [1, "input-title", "text-socket"], [1, "input-control", 3, "rete-control"]], template: function BaseNodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "kebab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BaseNodeComponent_div_7_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BaseNodeComponent_div_11_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BaseNodeComponent_div_12_Template, 4, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BaseNodeComponent_div_13_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BaseNodeComponent_div_14_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BaseNodeComponent_div_17_Template, 6, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BaseNodeComponent_div_19_Template, 1, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BaseNodeComponent_div_21_Template, 4, 4, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](14, _c0, ctx.onCriticalPathClass(), ctx.selected(), ctx.isCustomClass(), ctx.node.name)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.node.data.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOutputFocused());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getType() == "resource" || ctx.getType() == "minecraft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getType() == "crafter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getType() == "output");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getType() == "custom");
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["SocketComponent"], rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["ɵc"], rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["ɵb"]], pipes: [rete_angular_render_plugin__WEBPACK_IMPORTED_MODULE_1__["ɵd"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: [".node[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 200px;\n  height: max(calc(250px - 40px), 100%);\n  border: 5px outset #707070;\n  background-color: #eee;\n  padding-bottom: 20px;\n  box-sizing: content-box;\n  -webkit-user-select: none;\n          user-select: none;\n  curson: pointer;\n}\n.node.resource[_ngcontent-%COMP%] {\n  border-color: #66F23F;\n}\n.node.resource[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%], .node.resource[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .node.resource[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%] {\n  background-color: #66F23F;\n  border-color: #66F23F;\n}\n.node.resource[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%], .node.resource[_ngcontent-%COMP%]   .node-id[_ngcontent-%COMP%] {\n  border: 5px inset #66F23F;\n}\n.node.resource[_ngcontent-%COMP%]:hover {\n  background: #D8FCCE;\n}\n.node.resource.slected[_ngcontent-%COMP%] {\n  background: #D8FCCE;\n}\n.node.minecraft[_ngcontent-%COMP%] {\n  border-color: #A8AAB3;\n}\n.node.minecraft[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%], .node.minecraft[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .node.minecraft[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%] {\n  background-color: #A8AAB3;\n  border-color: #A8AAB3;\n}\n.node.minecraft[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%], .node.minecraft[_ngcontent-%COMP%]   .node-id[_ngcontent-%COMP%] {\n  border: 5px inset #A8AAB3;\n}\n.node.minecraft[_ngcontent-%COMP%]:hover {\n  background: #acb6c3;\n}\n.node.minecraft.slected[_ngcontent-%COMP%] {\n  background: #acb6c3;\n}\n.node.crafter[_ngcontent-%COMP%] {\n  border-color: #DBB62E;\n}\n.node.crafter[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%], .node.crafter[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .node.crafter[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%] {\n  background-color: #DBB62E;\n  border-color: #DBB62E;\n}\n.node.crafter[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%], .node.crafter[_ngcontent-%COMP%]   .node-id[_ngcontent-%COMP%] {\n  border: 5px inset #DBB62E;\n}\n.node.crafter[_ngcontent-%COMP%]:hover {\n  background: #F6EDCA;\n}\n.node.crafter.selected[_ngcontent-%COMP%] {\n  background: #F6EDCA;\n}\n.node.output[_ngcontent-%COMP%] {\n  border-color: #2ED0DB;\n}\n.node.output[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%], .node.output[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .node.output[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%] {\n  background-color: #2ED0DB;\n  border-color: #2ED0DB;\n}\n.node.output[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%], .node.output[_ngcontent-%COMP%]   .node-id[_ngcontent-%COMP%] {\n  border: 5px inset #2ED0DB;\n}\n.node.output[_ngcontent-%COMP%]:hover {\n  background: #CAF3F6;\n}\n.node.output.selected[_ngcontent-%COMP%] {\n  background: #CAF3F6;\n}\n.node.custom[_ngcontent-%COMP%] {\n  border-color: #C4B5F6;\n}\n.node.custom[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%], .node.custom[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .node.custom[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%] {\n  background: #C4B5F6;\n  border-color: #C4B5F6;\n}\n.node.custom[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%], .node.custom[_ngcontent-%COMP%]   .node-id[_ngcontent-%COMP%] {\n  border: 5px inset #C4B5F6;\n}\n.node.custom[_ngcontent-%COMP%]:hover {\n  background: #F0ECFD;\n}\n.node.custom.selected[_ngcontent-%COMP%] {\n  background: #F0ECFD;\n}\n.node.critical-path[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title-critical-path[_ngcontent-%COMP%] {\n  background-image: repeating-linear-gradient(-45deg, transparent 0 10px, #FF6F45 10px calc( 2 * 10px));\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -40px;\n  right: -5px;\n  width: calc(100% + 2*5px);\n  height: 40px;\n  border: 5px outset #707070;\n  border-bottom: 0px;\n  display: flex;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .resource[_ngcontent-%COMP%] {\n  background: #66F23F;\n  border-color: #66F23F;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .crafter[_ngcontent-%COMP%] {\n  background: #DBB62E;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%] {\n  background: #2ED0DB;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%] {\n  background: #C4B5F6;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .shared[_ngcontent-%COMP%] {\n  width: 20%;\n  z-index: 1;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 60%;\n  z-index: 1;\n  color: #2A2A2A;\n  margin: 5px auto;\n  border-radius: 5px;\n  text-align: center;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .star-container[_ngcontent-%COMP%] {\n  width: 20%;\n  height: auto;\n  z-index: 1;\n  margin-top: 5px;\n  margin-right: 5px;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .star-container[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .star-container[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 3px;\n  width: 25px;\n  height: 25px;\n  float: right;\n  color: #F5A300;\n}\n.node[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title-critical-path[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .background-image[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  right: 0;\n  z-index: 0;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .background-image[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #CCCCCC;\n  margin: 10%;\n  width: 80%;\n  height: 80%;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .background-image[_ngcontent-%COMP%]   .custom-image[_ngcontent-%COMP%] {\n  width: 30%;\n  margin: auto;\n  margin-top: -5px;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .background-image[_ngcontent-%COMP%]   .custom-image[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%] {\n  width: 100%;\n  float: right;\n  text-align: right;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .socket-info[_ngcontent-%COMP%] {\n  width: calc( 100% - 24px);\n  float: left;\n  padding-top: 6px;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .socket-info[_ngcontent-%COMP%]   .output-title[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-top: 2.5px;\n  float: right;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input-title[_ngcontent-%COMP%], .node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .output-title[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  display: inline-block;\n  font-family: sans-serif;\n  font: 14px;\n  margin: 6px;\n  line-height: 24px;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input-title[hidden][_ngcontent-%COMP%], .node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .output-title[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input-control[_ngcontent-%COMP%] {\n  z-index: 1;\n  width: calc( 100% - 36px);\n  vertical-align: middle;\n  display: inline-block;\n}\n.node[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-top: 10%;\n}\n.node[_ngcontent-%COMP%]   .node-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  height: 20px;\n  text-transform: capitalize;\n}\n.node[_ngcontent-%COMP%]   .node-footer[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  left: 25%;\n  border-bottom: 0px;\n}\n.node[_ngcontent-%COMP%]   .node-footer[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%]   .node-type-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.node[_ngcontent-%COMP%]   .node-footer[_ngcontent-%COMP%]   .node-id[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  width: 20px;\n  height: 20px;\n  border-right: 0px;\n  border-bottom: 0px;\n}\n.node[_ngcontent-%COMP%]   .node-footer[_ngcontent-%COMP%]   .node-id[_ngcontent-%COMP%]   .node-id-text[_ngcontent-%COMP%] {\n  margin-top: -1px;\n  text-align: center;\n}\n.node.custom[_ngcontent-%COMP%] {\n  width: 425px;\n  height: max(calc(175px - 40px), 100%);\n}\n.node.custom[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.node.custom[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 40% 20% 40%;\n}\n.node.custom[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .clear[_ngcontent-%COMP%] {\n  clear: none;\n}\n.node.custom[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .outputs[_ngcontent-%COMP%] {\n  grid-row: 1;\n  grid-column: 3;\n  width: 100%;\n  float: right;\n  display: inline-block;\n}\n.node.custom[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .outputs[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.node.custom[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .outputs[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .output-title[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.node.custom[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .outputs[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .output-rate-container[_ngcontent-%COMP%] {\n  width: 45%;\n  float: right;\n}\n.node.custom[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  grid-row: 1;\n  grid-column: 2;\n  float: right;\n}\n.node.custom[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%] {\n  grid-row: 1;\n  grid-column: 1;\n  width: 100%;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL25vZGVzL2Jhc2Utbm9kZS9iYXNlLW5vZGUuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3JldGUtbW9kdWxlcy9fcmV0ZV92YXJpYWJsZXMuc2FzcyIsInNyYy9fZ2xvYmFscy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkNDUztFREFULHFDQ0dVO0VERFYsMEJBQUE7RUFDQSxzQkNNNEI7RURKNUIsb0JDRWlCO0VEQWpCLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUFMSjtBQU9JO0VBQ0kscUJFWVk7QUZqQnBCO0FBTVE7RUFDSSx5QkVVUTtFRlRSLHFCRVNRO0FGYnBCO0FBS1E7RUFDSSx5QkFBQTtBQUhaO0FBSVE7RUFDSSxtQkVJTztBRk5uQjtBQUdRO0VBQ0ksbUJFRU87QUZIbkI7QUFHSTtFQUNJLHFCRUVjO0FGSHRCO0FBRVE7RUFDSSx5QkFBQTtFQUNBLHFCRURVO0FGQ3RCO0FBQ1E7RUFDSSx5QkFBQTtBQUNaO0FBQVE7RUFDSSxtQkVOUztBRlFyQjtBQURRO0VBQ0ksbUJFUlM7QUZXckI7QUFESTtFQUNJLHFCRWRZO0FGaUJwQjtBQUZRO0VBQ0kseUJFaEJRO0VGaUJSLHFCRWpCUTtBRnFCcEI7QUFIUTtFQUNJLHlCQUFBO0FBS1o7QUFKUTtFQUNJLG1CRXRCTztBRjRCbkI7QUFMUTtFQUNJLG1CRXhCTztBRitCbkI7QUFOSTtFQUNJLHFCRTNCVTtBRm1DbEI7QUFQUTtFQUNJLHlCRTdCTTtFRjhCTixxQkU5Qk07QUZ1Q2xCO0FBUlE7RUFDSSx5QkFBQTtBQVVaO0FBVFE7RUFDSSxtQkVuQ007QUY4Q2xCO0FBVlE7RUFDSSxtQkVyQ007QUZpRGxCO0FBVkk7RUFDSSxxQkV6Q1U7QUZxRGxCO0FBWFE7RUFDSSxtQkUzQ007RUY0Q04scUJFNUNNO0FGeURsQjtBQVpRO0VBQ0kseUJBQUE7QUFjWjtBQWJRO0VBQ0ksbUJFakRLO0FGZ0VqQjtBQWRRO0VBQ0ksbUJFbkRLO0FGbUVqQjtBQVpZO0VBQ0kscUdBQUE7QUFjaEI7QUFYSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkMxRVc7RUQyRVgsWUMvRVk7RURnRlosMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFhUjtBQVhRO0VBQ0ksbUJFL0RRO0VGZ0VSLHFCRWhFUTtBRjZFcEI7QUFaUTtFQUNJLG1CRXBFUTtBRmtGcEI7QUFiUTtFQUNJLG1CRXhFTTtBRnVGbEI7QUFkUTtFQUNJLG1CRTVFTTtBRjRGbEI7QUFkUTtFQUNJLFVBQUE7RUFDQSxVQUFBO0FBZ0JaO0FBZFE7RUFDSSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNFMUVRO0VGMkVSLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWdCWjtBQWZRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUNuR2dCO0VEb0doQixpQkNwR2dCO0FEcUg1QjtBQWhCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBa0JoQjtBQWhCZ0I7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNDN0dPO0FEK0gzQjtBQWhCUTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWtCWjtBQWZJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWlCUjtBQWZRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQWlCWjtBQWZZO0VBQ0ksY0VwSFM7RUZxSFQsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBaUJoQjtBQWZZO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQWlCaEI7QUFmZ0I7RUFDSSxTQUFBO0VBQ0EsV0FBQTtBQWlCcEI7QUFmUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBaUJaO0FBZlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBaUJoQjtBQWhCZ0I7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkM3Sko7QUQrS2hCO0FBakJvQjtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFtQnhCO0FBaEJZO0VBQ0ksV0FBQTtBQWtCaEI7QUFqQmdCO0VBQ0ksZ0JBQUE7QUFtQnBCO0FBbEJnQjtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxXQzdLSjtFRDhLSSxpQkMvS047QURtTWQ7QUFuQm9CO0VBQ0ksYUFBQTtBQXFCeEI7QUFuQmdCO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQXFCcEI7QUFuQlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBcUJoQjtBQWxCSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQzNNYTtFRDRNYiwwQkFBQTtBQW9CUjtBQWxCUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFvQlo7QUFsQlk7RUFDSSxrQkFBQTtBQW9CaEI7QUFsQlE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFvQlo7QUFsQlk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBb0JoQjtBQWpCSTtFQUNJLFlDNU9ZO0VENk9aLHFDQzFPYTtBRDZQckI7QUFqQlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQW1CWjtBQWpCWTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7QUFtQmhCO0FBakJnQjtFQUNJLFdBQUE7QUFtQnBCO0FBakJnQjtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQW1CcEI7QUFsQm9CO0VBQ0ksWUFBQTtBQW9CeEI7QUFuQndCO0VBQ0ksWUFBQTtBQXFCNUI7QUFwQndCO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFzQjVCO0FBcEJnQjtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQXNCcEI7QUFwQmdCO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQXNCcEIiLCJmaWxlIjoic3JjL2FwcC9yZXRlLW1vZHVsZXMvbm9kZXMvYmFzZS1ub2RlL2Jhc2Utbm9kZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgLi4vLi4vcmV0ZV92YXJpYWJsZXNcbkBpbXBvcnQgLi4vLi4vLi4vLi4vX2dsb2JhbHNcblxuLm5vZGVcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICBtaW4td2lkdGg6ICRub2RlLXdpZHRoXG4gICAgaGVpZ2h0OiAkbm9kZS1oZWlnaHRcblxuICAgIGJvcmRlcjogJG5vZGUtYm9yZGVyLXdpZHRoIG91dHNldCAkY29sb3ItZGVmYXVsdFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRub2RlLWRlZmF1bHQtYmFja2dyb3VuZC1jb2xvclxuXG4gICAgcGFkZGluZy1ib3R0b206ICRub2RlLWZvb3Rlci1oZWlnaHRcblxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94XG4gICAgdXNlci1zZWxlY3Q6IG5vbmVcbiAgICBjdXJzb246IHBvaW50ZXJcblxuICAgICYucmVzb3VyY2VcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkcmVzb3VyY2UtaGlnaGxpZ2h0XG4gICAgICAgIC50aXRsZS1jb250YWluZXIsIC50aXRsZSwgLm5vZGUtdHlwZVxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlc291cmNlLWhpZ2hsaWdodFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcmVzb3VyY2UtaGlnaGxpZ2h0XG4gICAgICAgIC5ub2RlLXR5cGUsIC5ub2RlLWlkXG4gICAgICAgICAgICBib3JkZXI6IDVweCBpbnNldCAkcmVzb3VyY2UtaGlnaGxpZ2h0XG4gICAgICAgICY6aG92ZXJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRyZXNvdXJjZS1zZWxlY3RlZFxuICAgICAgICAmLnNsZWN0ZWRcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRyZXNvdXJjZS1zZWxlY3RlZFxuXG4gICAgJi5taW5lY3JhZnRcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWluZWNyYWZ0LWhpZ2hsaWdodFxuICAgICAgICAudGl0bGUtY29udGFpbmVyLCAudGl0bGUsIC5ub2RlLXR5cGVcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtaW5lY3JhZnQtaGlnaGxpZ2h0XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRtaW5lY3JhZnQtaGlnaGxpZ2h0XG4gICAgICAgIC5ub2RlLXR5cGUsIC5ub2RlLWlkXG4gICAgICAgICAgICBib3JkZXI6IDVweCBpbnNldCAkbWluZWNyYWZ0LWhpZ2hsaWdodFxuICAgICAgICAmOmhvdmVyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbWluZWNyYWZ0LXNlbGVjdGVkXG4gICAgICAgICYuc2xlY3RlZFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJG1pbmVjcmFmdC1zZWxlY3RlZFxuXG4gICAgJi5jcmFmdGVyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNyYWZ0aW5nLWhpZ2hsaWdodFxuICAgICAgICAudGl0bGUtY29udGFpbmVyLCAudGl0bGUsIC5ub2RlLXR5cGVcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjcmFmdGluZy1oaWdobGlnaHRcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNyYWZ0aW5nLWhpZ2hsaWdodFxuICAgICAgICAubm9kZS10eXBlLCAubm9kZS1pZFxuICAgICAgICAgICAgYm9yZGVyOiA1cHggaW5zZXQgJGNyYWZ0aW5nLWhpZ2hsaWdodFxuICAgICAgICAmOmhvdmVyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY3JhZnRpbmctc2VsZWN0ZWRcbiAgICAgICAgJi5zZWxlY3RlZFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGNyYWZ0aW5nLXNlbGVjdGVkXG4gICAgJi5vdXRwdXRcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkb3V0cHV0LWhpZ2hsaWdodFxuICAgICAgICAudGl0bGUtY29udGFpbmVyLCAudGl0bGUsIC5ub2RlLXR5cGVcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvdXRwdXQtaGlnaGxpZ2h0XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRvdXRwdXQtaGlnaGxpZ2h0XG4gICAgICAgIC5ub2RlLXR5cGUsIC5ub2RlLWlkXG4gICAgICAgICAgICBib3JkZXI6IDVweCBpbnNldCAkb3V0cHV0LWhpZ2hsaWdodFxuICAgICAgICAmOmhvdmVyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkb3V0cHV0LXNlbGVjdGVkXG4gICAgICAgICYuc2VsZWN0ZWRcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRvdXRwdXQtc2VsZWN0ZWRcblxuICAgICYuY3VzdG9tXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGN1c3RvbS1oaWdobGlnaHRcbiAgICAgICAgLnRpdGxlLWNvbnRhaW5lciwgLnRpdGxlLCAubm9kZS10eXBlXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY3VzdG9tLWhpZ2hsaWdodFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWhpZ2hsaWdodFxuICAgICAgICAubm9kZS10eXBlLCAubm9kZS1pZFxuICAgICAgICAgICAgYm9yZGVyOiA1cHggaW5zZXQgJGN1c3RvbS1oaWdobGlnaHRcbiAgICAgICAgJjpob3ZlclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGN1c3RvbS1zZWxlY3RlZFxuICAgICAgICAmLnNlbGVjdGVkXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY3VzdG9tLXNlbGVjdGVkXG5cbiAgICAmLmNyaXRpY2FsLXBhdGhcbiAgICAgICAgLnRpdGxlLWNvbnRhaW5lclxuICAgICAgICAgICAgLnRpdGxlLWNyaXRpY2FsLXBhdGhcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KC00NWRlZywgdHJhbnNwYXJlbnQgMCAkcGluc3RyaXBlLXdpZHRoLCAgJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0ICRwaW5zdHJpcGUtd2lkdGggY2FsYyggMiAqICN7JHBpbnN0cmlwZS13aWR0aH0pKVxuXG5cbiAgICAudGl0bGUtY29udGFpbmVyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgICB0b3A6IC0kbm9kZS10aXRsZS1oZWlnaHRcbiAgICAgICAgcmlnaHQ6IC0kbm9kZS1ib3JkZXItd2lkdGhcbiAgICAgICAgd2lkdGg6ICRub2RlLXRpdGxlLXdpZHRoXG4gICAgICAgIGhlaWdodDogJG5vZGUtdGl0bGUtaGVpZ2h0XG4gICAgICAgIGJvcmRlcjogNXB4IG91dHNldCAkY29sb3ItZGVmYXVsdFxuICAgICAgICBib3JkZXItYm90dG9tOiAwcHhcbiAgICAgICAgZGlzcGxheTogZmxleFxuXG4gICAgICAgIC5yZXNvdXJjZVxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHJlc291cmNlLWhpZ2hsaWdodFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcmVzb3VyY2UtaGlnaGxpZ2h0XG4gICAgICAgIC5jcmFmdGVyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY3JhZnRpbmctaGlnaGxpZ2h0XG4gICAgICAgIC5vdXRwdXRcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRvdXRwdXQtaGlnaGxpZ2h0XG4gICAgICAgIC5jdXN0b21cbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjdXN0b20taGlnaGxpZ2h0XG5cbiAgICAgICAgLnNoYXJlZFxuICAgICAgICAgICAgd2lkdGg6IDIwJVxuICAgICAgICAgICAgei1pbmRleDogMVxuXG4gICAgICAgIC50aXRsZVxuICAgICAgICAgICAgd2lkdGg6IDYwJVxuICAgICAgICAgICAgei1pbmRleDogMVxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1kZWZhdWx0LWRhcmtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IGF1dG9cbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgIC5zdGFyLWNvbnRhaW5lclxuICAgICAgICAgICAgd2lkdGg6IDIwJVxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvXG4gICAgICAgICAgICB6LWluZGV4OiAxXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAkb3V0cHV0LWZvY3VzLWdseXBoLW1hcmdpblxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkb3V0cHV0LWZvY3VzLWdseXBoLW1hcmdpblxuICAgICAgICAgICAgLnN0YXJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJVxuXG4gICAgICAgICAgICAgICAgc3ZnXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweFxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHRcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRvdXRwdXQtZm9jdXMtZ2x5cGgtY29sb3JcblxuICAgICAgICAudGl0bGUtY3JpdGljYWwtcGF0aFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgICAgIHJpZ2h0OiAwXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlXG5cblxuICAgIC5ib2R5LWNvbnRhaW5lclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgaGVpZ2h0OiAxMDAlXG5cbiAgICAgICAgLmJhY2tncm91bmQtaW1hZ2VcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICAgIGhlaWdodDogMTAwJVxuICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgICAgICByaWdodDogMFxuICAgICAgICAgICAgei1pbmRleDogMFxuXG4gICAgICAgICAgICBzdmdcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWRlZmF1bHQtaGlnaGxpZ2h0XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCVcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCVcblxuICAgICAgICAgICAgLmN1c3RvbS1pbWFnZVxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCVcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG9cbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtIDVweFxuXG4gICAgICAgICAgICAgICAgc3ZnXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxuXG4gICAgICAgIC5jb250ZW50XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCVcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMFxuXG4gICAgICAgICAgICAub3V0cHV0XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHRcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodFxuICAgICAgICAgICAgICAgIC5zb2NrZXQtaW5mb1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyggMTAwJSAtICN7JHNvY2tldC1zaXplfSlcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnRcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6ICRzb2NrZXQtbWFyZ2luXG4gICAgICAgICAgICAgICAgICAgIC5vdXRwdXQtdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCVcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyLjVweFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0XG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAuaW5wdXRzXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICAgICAgICAuaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdFxuICAgICAgICAgICAgICAgIC5pbnB1dC10aXRsZSwub3V0cHV0LXRpdGxlXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmXG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE0cHhcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAkc29ja2V0LW1hcmdpblxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogJHNvY2tldC1zaXplXG4gICAgICAgICAgICAgICAgICAgICZbaGlkZGVuXVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuXG4gICAgICAgICAgICAgICAgLmlucHV0LWNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMVxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyggMTAwJSAtICN7JHNvY2tldC1zaXplICsgMiokc29ja2V0LW1hcmdpbn0pXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG5cbiAgICAgICAgICAgIC5jb250cm9sc1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwJVxuXG5cbiAgICAubm9kZS1mb290ZXJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICAgIGJvdHRvbTogMHB4XG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgIGhlaWdodDogJG5vZGUtZm9vdGVyLWhlaWdodFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZVxuXG4gICAgICAgIC5ub2RlLXR5cGVcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgICAgICAgd2lkdGg6IDUwJVxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICAgICAgICBsZWZ0OiAyNSVcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDBweFxuXG4gICAgICAgICAgICAubm9kZS10eXBlLXRleHRcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcblxuICAgICAgICAubm9kZS1pZFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICAgICAgICByaWdodDogMHB4XG4gICAgICAgICAgICB3aWR0aDogMjBweFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDBweFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMHB4XG5cbiAgICAgICAgICAgIC5ub2RlLWlkLXRleHRcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMXB4XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG5cbiAgICAvLyBDdXN0b20gbm9kZSBzdHlsaW5nXG4gICAgJi5jdXN0b21cbiAgICAgICAgd2lkdGg6ICRub2RlLWN1c3RvbS13aWR0aFxuICAgICAgICBoZWlnaHQ6ICRub2RlLWN1c3RvbS1oZWlnaHRcblxuICAgICAgICAuYm9keS1jb250YWluZXJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCVcblxuICAgICAgICAgICAgLmNvbnRlbnRcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCVcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgMjAlIDQwJVxuXG4gICAgICAgICAgICAgICAgLmNsZWFyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyOiBub25lXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAub3V0cHV0c1xuICAgICAgICAgICAgICAgICAgICBncmlkLXJvdzogMVxuICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogM1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHRcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgICAgICAgICAgICAgICAgIC5vdXRwdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLm91dHB1dC10aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLm91dHB1dC1yYXRlLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHRcblxuICAgICAgICAgICAgICAgIC5jb250cm9sc1xuICAgICAgICAgICAgICAgICAgICBncmlkLXJvdzogMVxuICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMlxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHRcblxuICAgICAgICAgICAgICAgIC5pbnB1dHNcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDFcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDFcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnRcblxuXG4gICAgICAgICAgICAgICAgXG4iLCJAdXNlIFwic2FzczptYXBcIlxuXG4vLyBDcml0aWNhbCBQYXRoIFBpbnN0cmlwZSB3aWR0aCAgICBcbiRwaW5zdHJpcGUtd2lkdGg6IDEwcHhcblxuLy8gIyMjIyMjIyMjIyBOb2RlIFNldHRpbmdzICMjIyMjIyMjIyNcbiRub2RlLXdpZHRoOiAyMDBweFxuJG5vZGUtY3VzdG9tLXdpZHRoOiA0MjVweFxuJG5vZGUtdGl0bGUtaGVpZ2h0OiA0MHB4XG4kbm9kZS1oZWlnaHQ6IG1heCggY2FsYygyNTBweCAtICN7JG5vZGUtdGl0bGUtaGVpZ2h0fSksIDEwMCUgKVxuJG5vZGUtY3VzdG9tLWhlaWdodDogbWF4KCBjYWxjKDE3NXB4IC0gI3skbm9kZS10aXRsZS1oZWlnaHR9KSwgMTAwJSApXG4kbm9kZS1ib3JkZXItd2lkdGg6IDVweFxuJG5vZGUtdGl0bGUtd2lkdGg6IGNhbGMoMTAwJSArIDIqI3skbm9kZS1ib3JkZXItd2lkdGh9KVxuJG5vZGUtZm9vdGVyLWhlaWdodDogMjBweFxuXG4kbm9kZS1kZWZhdWx0LWJhY2tncm91bmQtY29sb3I6ICNlZWVcblxuJG91dHB1dC1mb2N1cy1nbHlwaC1zaXplOiAyNXB4XG4kb3V0cHV0LWZvY3VzLWdseXBoLW1hcmdpbjogNXB4XG4kb3V0cHV0LWZvY3VzLWdseXBoLWNvbG9yOiAjRjVBMzAwXG5cbiRzb2NrZXQtc2l6ZTogMjRweFxuJHNvY2tldC1tYXJnaW46IDZweFxuJHNvY2tldC1jb2xvcjogI0UwOTUyQlxuJHNvY2tldC1ib3JkZXItY29sb3I6ICM5NDY1MjNcblxuJHNvY2tldC1pdGVtLW1hcDogKCBcIlN0b25lXCI6ICM4ODgsIFwiR3Jhc3NcIjogIzE4MSwgXCJEaXJ0XCI6ICM2ODM2MTksIFwiQ29iYmxlc3RvbmVcIjogIzQ0NCwgXCJQbGFua3NcIjogI2I5OTA1YiwgXCJMb2dzXCI6ICM3NDQwMTAsIFwiMlwiOiAjODg4LCBcIjNcIjogIzg4OCwpXG5cbkBmdW5jdGlvbiBnZXQtaXRlbS1jb2xvcigkaXRlbSkgXG4gICAgQHJldHVybiBtYXAtZ2V0KCRzb2NrZXQtaXRlbS1tYXAsICRpdGVtKVxuXG5AZnVuY3Rpb24gZ2V0LWl0ZW0tYm9yZGVyKCRpdGVtKVxuICAgICRjb2xvcjogZ2V0LWl0ZW0tY29sb3IoJGl0ZW0pXG4gICAgQGlmIGxpZ2h0bmVzcygkY29sb3IpID4gNDAlXG4gICAgICAgIEByZXR1cm4gZGFya2VuKCRjb2xvciwgMjUlKVxuICAgIEBlbHNlIFxuICAgICAgICBAcmV0dXJuIGxpZ2h0ZW4oJGNvbG9yLCAyNSUpIiwiLy8gIyMjIyMjIyMjIyBHbG9iYWwgTGF5b3V0IFNldHRpbmdzICMjIyMjIyMjIyNcbiRncmlkLXdpZHRoOiA3NSVcbiRncmlkLWhlaWdodDogNjAlXG5cbi8vIFNwYWNpbmdzIGJldHdlZW4gbW9kdWxlc1xuJG1vZHVsZS1tYXJnaW4tbGVmdDogMTBweFxuJG1vZHVsZS1tYXJnaW4tdG9wOiAkbW9kdWxlLW1hcmdpbi1sZWZ0XG5cbiRvdXRwdXQtd2lkdGg6IGNhbGMoMTAwJSAtICN7JGdyaWQtd2lkdGh9KVxuJG91dHB1dC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDIqI3skbW9kdWxlLW1hcmdpbi10b3B9KVxuICAgIFxuJGJ1dHRvbi1oZWlnaHQ6IDUwcHhcblxuLy8gRGVsZXRlIHNwZWNpZmljIGJ1dHRvbiBzZXR0aW5nc1xuJGRlbGV0ZS1idXR0b24td2lkdGg6IDE1MHB4XG4kZGVsZXRlLWJ1dHRvbi1oZWlnaHQ6IDUwcHhcblxuLy8gSW52ZW50b3J5IFdpZGdldCBoZWlnaHRcbiRyZXNvdXJjZS1jaGlsZHJlbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDMqI3skbW9kdWxlLW1hcmdpbi10b3B9KVxuXG4kYm9yZGVyLXRoaWNrbmVzczogNXB4XG5cbi8vICMjIyMjIyMjIyMgQ29sb3IgRGVmaW5pdGlvbnMgIyMjIyMjIyMjI1xuJGN1c3RvbS1zZWxlY3RlZDojRjBFQ0ZEXG4kY3VzdG9tLWhpZ2hsaWdodDojQzRCNUY2XG4kb3V0cHV0LXNlbGVjdGVkOiAjQ0FGM0Y2XG4kb3V0cHV0LWhpZ2hsaWdodDojMkVEMERCXG4kY3JhZnRpbmctc2VsZWN0ZWQ6I0Y2RURDQVxuJGNyYWZ0aW5nLWhpZ2hsaWdodDojREJCNjJFXG4kcmVzb3VyY2Utc2VsZWN0ZWQ6I0Q4RkNDRVxuJHJlc291cmNlLWhpZ2hsaWdodDojNjZGMjNGXG4kbWluZWNyYWZ0LXNlbGVjdGVkOiAjYWNiNmMzXG4kbWluZWNyYWZ0LWhpZ2hsaWdodDogI0E4QUFCM1xuXG4kY29sb3ItZGVmYXVsdDojNzA3MDcwXG4kY29sb3ItZGVmYXVsdC1kYXJrOiMyQTJBMkFcbiRjb2xvci1kZWZhdWx0LWhpZ2hsaWdodDojQ0NDQ0NDXG5cbi8vIFBpbnN0cmlwZSBEZWZpbml0aW9uc1xuJGNyaXRpY2FsLXBhdGgtc2VsZWN0ZWQ6I0ZGREFEMFxuJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0OiNGRjZGNDVcbiRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodC1hbHBoYTogcmdiYSggJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0LCAuNSlcblxuXG4vLyAjIyMjIyMjIyMjIFNwcml0ZSBSZW5kZXJpbmcgU2V0dGluZ3NcbiRzcHJpdGUtc2l6ZTogMzJweFxuJHNwcml0ZS1zY2FsZTogMi4yXG5cbi8vIEluIG51bWJlciBvZiBzcHJpdGVzXG4kc3ByaXRlLXNoZWV0LWhvcml6b250YWwtZGltZW5zaW9uczogMTZcbiRzcHJpdGUtc2hlZXQtdmVydGljYWwtZGltZW5zaW9uczogMzVcblxuJHNwcml0ZS13aWR0aDogY2FsYygjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2NhbGV9KVxuJHNwcml0ZS1zaGVldC13aWR0aDogY2FsYyggI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNoZWV0LWhvcml6b250YWwtZGltZW5zaW9ucyAqICRzcHJpdGUtc2NhbGV9KVxuJHNwcml0ZS1zaGVldC1oZWlnaHQ6IGNhbGMoICN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zaGVldC12ZXJ0aWNhbC1kaW1lbnNpb25zICogJHNwcml0ZS1zY2FsZX0pXG5cbi8vIFNwcml0ZSBpbWFnZSBkaXNwbGF5IHNldHRpbmdzXG4kc3ByaXRlLWJvcmRlci1wYWRkaW5nOiA1cHgiXX0= */"] });
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
/* harmony import */ var src_app_rete_modules_services_node_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/rete-modules/services/node.service */ "5bZ5");




class OutputContainerComponent {
    constructor(outputManager, nodeService) {
        this.outputManager = outputManager;
        this.nodeService = nodeService;
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
    getCriticalPath() {
        return this.nodeService.getCriticalPath();
    }
    getCriticalPathObjects() {
        let criticalPathNodes = [];
        for (let id in this.nodeService.getCriticalPath()) {
            let nodeObject = JSON.stringify(this.nodeService.getNodeTreeItem(parseInt(id)));
            // console.log("object " + nodeObjectJSON.data)
            // if(nodeObject != null)
            //   criticalPathNodes.push(nodeObject.getNodeName())
            // else
            //   criticalPathNodes.push("name not found")
            criticalPathNodes.push(nodeObject);
        }
        return criticalPathNodes;
    }
}
OutputContainerComponent.ɵfac = function OutputContainerComponent_Factory(t) { return new (t || OutputContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__["OutputManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_rete_modules_services_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"])); };
OutputContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutputContainerComponent, selectors: [["app-output-container"]], decls: 1, vars: 0, consts: [[1, "output-wrapper", "module-margin"]], template: function OutputContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.output-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100% - 20px);\n  margin: 10px;\n  border: 5px outset #2A2A2A;\n  background-color: #707070;\n}\n\n.output-wrapper[_ngcontent-%COMP%]   .tab-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flexbox;\n  flex-direction: column;\n  background-color: #2A2A2A;\n}\n\n@media (max-width: 1250px) {\n  .output-wrapper[_ngcontent-%COMP%]   .tab-bar[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n\n.output-wrapper[_ngcontent-%COMP%]   .tab-bar[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n  width: calc( 50% - 10px );\n  height: calc( 100% - 10px );\n  font-style: bold;\n  font-size: 20px;\n  text-align: center;\n}\n\n@media (max-width: 1250px) {\n  .output-wrapper[_ngcontent-%COMP%]   .tab-bar[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n    width: calc(100% - 10px);\n    height: calc(50% - 10px);\n  }\n}\n\n.output-wrapper[_ngcontent-%COMP%]   .tab-bar[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  margin: 5px;\n  background-color: #CCCCCC;\n  border-color: #CCCCCC;\n}\n\n.output-wrapper[_ngcontent-%COMP%]   .tab-bar[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:focus, .output-wrapper[_ngcontent-%COMP%]   .tab-bar[_ngcontent-%COMP%]   .button.active[_ngcontent-%COMP%] {\n  border-color: #66F23F;\n  background-color: #66F23F;\n}\n\n.output-wrapper[_ngcontent-%COMP%]   .output-data-wrapper[_ngcontent-%COMP%] {\n  height: calc( 100% - 60px);\n}\n\n@media (max-width: 1250px) {\n  .output-wrapper[_ngcontent-%COMP%]   .output-data-wrapper[_ngcontent-%COMP%] {\n    height: calc( 100% - 110px);\n  }\n}\n\n.bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n#focusedNodes[_ngcontent-%COMP%] {\n  height: 100%;\n  max-height: 100%;\n  display: flex;\n  flex-flow: column;\n}\n\n#focusedNodes[_ngcontent-%COMP%]   .subtab-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n  display: inline-flex;\n  background-color: #CCCCCC;\n  padding: 5px;\n}\n\n#focusedNodes[_ngcontent-%COMP%]   .subtab-bar[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n#focusedNodes[_ngcontent-%COMP%]   .subtab-bar[_ngcontent-%COMP%]   .up-button[_ngcontent-%COMP%] {\n  float: right;\n}\n\n#focusedNodes[_ngcontent-%COMP%]   .node-area[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n#graphs[_ngcontent-%COMP%] {\n  height: 100%;\n  max-height: 100%;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0cHV0L291dHB1dC1jb250YWluZXIvb3V0cHV0LWNvbnRhaW5lci5jb21wb25lbnQuc2FzcyIsInNyYy9fZ2xvYmFscy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksd0JBQUE7QUFISjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkNzQlc7QUR4QmY7O0FBSUk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUlBLHlCQ2NZO0FEbkJwQjs7QUFFUTtFQUpKO0lBS1EsbUJBQUE7RUFDVjtBQUNGOztBQUVRO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtFQUtBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSlo7O0FBRlk7RUFISjtJQUlRLHdCQUFBO0lBQ0Esd0JBQUE7RUFLZDtBQUNGOztBQUFRO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJDRGE7QURHekI7O0FBQVk7RUFDSSxxQkNWSTtFRFdKLHlCQ1hJO0FEYXBCOztBQUNJO0VBQ0ksMEJBQUE7QUFDUjs7QUFBUTtFQUZKO0lBR1EsMkJBQUE7RUFHVjtBQUNGOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBTUo7O0FBSkk7RUFDSSxXQUFBO0VBQ0EsWUE1REs7RUE2REwsb0JBQUE7RUFDQSx5QkM1QmlCO0VENkJqQixZQUFBO0FBTVI7O0FBSlE7RUFDSSxpQkFBQTtBQU1aOztBQUpRO0VBQ0ksWUFBQTtBQU1aOztBQUpJO0VBQ0ksWUFBQTtBQU1SOztBQUpBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFPSiIsImZpbGUiOiJzcmMvYXBwL291dHB1dC9vdXRwdXQtY29udGFpbmVyL291dHB1dC1jb250YWluZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IC4uLy4uLy4uL2dsb2JhbHNcbiAgICBcbiR0YWItaGVpZ2h0OiA2MHB4XG5cbi5oaWRkZW5cbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnRcbiAgICBcbi5vdXRwdXQtd3JhcHBlclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjBweClcbiAgICBtYXJnaW46IDEwcHhcbiAgICBib3JkZXI6IDVweCBvdXRzZXQgJGNvbG9yLWRlZmF1bHQtZGFya1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kZWZhdWx0XG5cbiAgICAudGFiLWJhclxuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICBkaXNwbGF5OiBmbGV4Ym94XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICAgICAgQG1lZGlhICggbWF4LXdpZHRoOiAxMjUwcHggKVxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvd1xuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kZWZhdWx0LWRhcmtcblxuICAgICAgICAudGFiLWJ1dHRvblxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoIDUwJSAtIDEwcHggKVxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKCAxMDAlIC0gMTBweCApXG4gICAgICAgICAgICBAbWVkaWEgKCBtYXgtd2lkdGg6IDEyNTBweCApXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDUwJSAtIDEwcHgpXG5cbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGJvbGRcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG5cbiAgICAgICAgLmJ1dHRvblxuICAgICAgICAgICAgbWFyZ2luOiA1cHhcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kZWZhdWx0LWhpZ2hsaWdodFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItZGVmYXVsdC1oaWdobGlnaHRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpmb2N1cywgJi5hY3RpdmVcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRyZXNvdXJjZS1oaWdobGlnaHRcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVzb3VyY2UtaGlnaGxpZ2h0XG5cblxuICAgIC5vdXRwdXQtZGF0YS13cmFwcGVyXG4gICAgICAgIGhlaWdodDogY2FsYyggMTAwJSAtIDYwcHgpXG4gICAgICAgIEBtZWRpYSAoIG1heC13aWR0aDogMTI1MHB4IClcbiAgICAgICAgICAgIGhlaWdodDogY2FsYyggMTAwJSAtIDExMHB4KVxuXG4uYm90dG9tXG4gICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgYm90dG9tOiAwXG4gICAgbGVmdDogMFxuXG4jZm9jdXNlZE5vZGVzXG4gICAgaGVpZ2h0OiAxMDAlXG4gICAgbWF4LWhlaWdodDogMTAwJVxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBmbGV4LWZsb3c6IGNvbHVtblxuXG4gICAgLnN1YnRhYi1iYXJcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgaGVpZ2h0OiAkdGFiLWhlaWdodFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZGVmYXVsdC1oaWdobGlnaHRcbiAgICAgICAgcGFkZGluZzogNXB4XG5cbiAgICAgICAgLmJhY2stYnV0dG9uXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweFxuXG4gICAgICAgIC51cC1idXR0b25cbiAgICAgICAgICAgIGZsb2F0OiByaWdodFxuXG4gICAgLm5vZGUtYXJlYVxuICAgICAgICBmbGV4LWdyb3c6IDFcblxuI2dyYXBoc1xuICAgIGhlaWdodDogMTAwJVxuICAgIG1heC1oZWlnaHQ6IDEwMCVcbiAgICBvdmVyZmxvdy14OiBoaWRkZW4iLCIvLyAjIyMjIyMjIyMjIEdsb2JhbCBMYXlvdXQgU2V0dGluZ3MgIyMjIyMjIyMjI1xuJGdyaWQtd2lkdGg6IDc1JVxuJGdyaWQtaGVpZ2h0OiA2MCVcblxuLy8gU3BhY2luZ3MgYmV0d2VlbiBtb2R1bGVzXG4kbW9kdWxlLW1hcmdpbi1sZWZ0OiAxMHB4XG4kbW9kdWxlLW1hcmdpbi10b3A6ICRtb2R1bGUtbWFyZ2luLWxlZnRcblxuJG91dHB1dC13aWR0aDogY2FsYygxMDAlIC0gI3skZ3JpZC13aWR0aH0pXG4kb3V0cHV0LWhlaWdodDogY2FsYygxMDAlIC0gMiojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG4gICAgXG4kYnV0dG9uLWhlaWdodDogNTBweFxuXG4vLyBEZWxldGUgc3BlY2lmaWMgYnV0dG9uIHNldHRpbmdzXG4kZGVsZXRlLWJ1dHRvbi13aWR0aDogMTUwcHhcbiRkZWxldGUtYnV0dG9uLWhlaWdodDogNTBweFxuXG4vLyBJbnZlbnRvcnkgV2lkZ2V0IGhlaWdodFxuJHJlc291cmNlLWNoaWxkcmVuLWhlaWdodDogY2FsYygxMDAlIC0gMyojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG5cbiRib3JkZXItdGhpY2tuZXNzOiA1cHhcblxuLy8gIyMjIyMjIyMjIyBDb2xvciBEZWZpbml0aW9ucyAjIyMjIyMjIyMjXG4kY3VzdG9tLXNlbGVjdGVkOiNGMEVDRkRcbiRjdXN0b20taGlnaGxpZ2h0OiNDNEI1RjZcbiRvdXRwdXQtc2VsZWN0ZWQ6ICNDQUYzRjZcbiRvdXRwdXQtaGlnaGxpZ2h0OiMyRUQwREJcbiRjcmFmdGluZy1zZWxlY3RlZDojRjZFRENBXG4kY3JhZnRpbmctaGlnaGxpZ2h0OiNEQkI2MkVcbiRyZXNvdXJjZS1zZWxlY3RlZDojRDhGQ0NFXG4kcmVzb3VyY2UtaGlnaGxpZ2h0OiM2NkYyM0ZcbiRtaW5lY3JhZnQtc2VsZWN0ZWQ6ICNhY2I2YzNcbiRtaW5lY3JhZnQtaGlnaGxpZ2h0OiAjQThBQUIzXG5cbiRjb2xvci1kZWZhdWx0OiM3MDcwNzBcbiRjb2xvci1kZWZhdWx0LWRhcms6IzJBMkEyQVxuJGNvbG9yLWRlZmF1bHQtaGlnaGxpZ2h0OiNDQ0NDQ0NcblxuLy8gUGluc3RyaXBlIERlZmluaXRpb25zXG4kY3JpdGljYWwtcGF0aC1zZWxlY3RlZDojRkZEQUQwXG4kY3JpdGljYWwtcGF0aC1oaWdobGlnaHQ6I0ZGNkY0NVxuJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0LWFscGhhOiByZ2JhKCAkY3JpdGljYWwtcGF0aC1oaWdobGlnaHQsIC41KVxuXG5cbi8vICMjIyMjIyMjIyMgU3ByaXRlIFJlbmRlcmluZyBTZXR0aW5nc1xuJHNwcml0ZS1zaXplOiAzMnB4XG4kc3ByaXRlLXNjYWxlOiAyLjJcblxuLy8gSW4gbnVtYmVyIG9mIHNwcml0ZXNcbiRzcHJpdGUtc2hlZXQtaG9yaXpvbnRhbC1kaW1lbnNpb25zOiAxNlxuJHNwcml0ZS1zaGVldC12ZXJ0aWNhbC1kaW1lbnNpb25zOiAzNVxuXG4kc3ByaXRlLXdpZHRoOiBjYWxjKCN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zY2FsZX0pXG4kc3ByaXRlLXNoZWV0LXdpZHRoOiBjYWxjKCAjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2hlZXQtaG9yaXpvbnRhbC1kaW1lbnNpb25zICogJHNwcml0ZS1zY2FsZX0pXG4kc3ByaXRlLXNoZWV0LWhlaWdodDogY2FsYyggI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNoZWV0LXZlcnRpY2FsLWRpbWVuc2lvbnMgKiAkc3ByaXRlLXNjYWxlfSlcblxuLy8gU3ByaXRlIGltYWdlIGRpc3BsYXkgc2V0dGluZ3NcbiRzcHJpdGUtYm9yZGVyLXBhZGRpbmc6IDVweCJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-output-container',
                templateUrl: './output-container.component.html',
                styleUrls: ['./output-container.component.sass']
            }]
    }], function () { return [{ type: _services_output_manager_service__WEBPACK_IMPORTED_MODULE_1__["OutputManagerService"] }, { type: src_app_rete_modules_services_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"] }]; }, null); })();


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
/* harmony import */ var _inventory_item_inventory_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inventory-item/inventory-item.component */ "spm5");







function InventoryDisplayComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-inventory-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.GetGridStyle(item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minecraftItem", item_r1);
} }
class InventoryDisplayComponent {
    constructor(minecraftInventory, itemService) {
        this.minecraftInventory = minecraftInventory;
        this.itemService = itemService;
        this.minecraftItems = [];
        this.minecraftInventory.ForceGetAllInventoryItems().then(value => {
            this.minecraftItems = value;
            console.log(this.minecraftItems);
        });
    }
    // Note: Minecraft items are base 0, javascript grids are base 1 for starting index
    //  that is the reason +1 is added to everything
    GetGridStyle(item) {
        // Item is in the hotbar
        let gridLocation = {};
        if (item.slotIndex <= 8) {
            gridLocation['grid-row'] = 'hotbar';
            gridLocation['grid-column'] = item.slotIndex + 1;
            return gridLocation;
        }
        // Inventory slots start at 9 after the hot bar. Adjusting to 0-27
        let inventorySlot = item.slotIndex - 9;
        gridLocation['grid-row'] = Math.floor(inventorySlot / 9) + 1;
        gridLocation['grid-column'] = (inventorySlot % 9) + 1;
        return gridLocation;
    }
    Refresh() {
        this.minecraftInventory.ForceGetAllInventoryItems().then(value => {
            this.minecraftItems = value;
        });
    }
}
InventoryDisplayComponent.ɵfac = function InventoryDisplayComponent_Factory(t) { return new (t || InventoryDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_2__["MinecraftInventoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"])); };
InventoryDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InventoryDisplayComponent, selectors: [["app-inventory-display"]], viewQuery: function InventoryDisplayComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_general_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_0__["ItemImageComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.minecraftItemViews = _t);
    } }, decls: 8, vars: 1, consts: [[1, "inventory-wrapper"], ["src", "./assets/images/minecraft_inventory_window.png", 1, "inventory-visual"], [1, "inventory-offset"], [3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "refresh-button-container", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-counterclockwise"], ["fill-rule", "evenodd", "d", "M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"], ["d", "M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"], [3, "ngStyle"], [3, "minecraftItem"]], template: function InventoryDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, InventoryDisplayComponent_div_3_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InventoryDisplayComponent_Template_div_click_4_listener() { return ctx.Refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.minecraftItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _inventory_item_inventory_item_component__WEBPACK_IMPORTED_MODULE_5__["InventoryItemComponent"]], styles: [".inventory-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: calc(100% - 10px );\n  height: calc(100% - 3*10px);\n  margin: 10px;\n  padding: 4%;\n}\n.inventory-wrapper[_ngcontent-%COMP%]   .inventory-visual[_ngcontent-%COMP%] {\n  position: absolute;\n  background: url(\"/assets/images/Background.png\") no-repeat;\n  background-size: 100%;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  bottom: -10px;\n  left: 0px;\n}\n.inventory-wrapper[_ngcontent-%COMP%]   .inventory-offset[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  height: 100%;\n  grid-template-rows: [top-start] 1fr [top-end mid-start] 1fr [mid-end bot-start] 1fr [bot-end] 0.2fr [hotbar-start] 1fr [hotbar-end];\n  grid-template-columns: repeat(9, 1fr);\n  grid-gap: 5px;\n}\n.inventory-wrapper[_ngcontent-%COMP%]   .refresh-button-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2.5px;\n  right: 2.5px;\n  width: 30px;\n  height: 30px;\n  background: #fff;\n  border: outset 2.5px #000;\n  border-radius: 15px;\n  cursor: pointer;\n}\n.inventory-wrapper[_ngcontent-%COMP%]   .refresh-button-container[_ngcontent-%COMP%]:hover {\n  background: #66F23F;\n}\n.inventory-wrapper[_ngcontent-%COMP%]   .refresh-button-container[_ngcontent-%COMP%]:active {\n  background: #2da60b;\n  border-style: inset;\n}\n.inventory-wrapper[_ngcontent-%COMP%]   .refresh-button-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 2.5px;\n  margin-top: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2ludmVudG9yeS1kaXNwbGF5L2ludmVudG9yeS1kaXNwbGF5LmNvbXBvbmVudC5zYXNzIiwic3JjL19nbG9iYWxzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJDYXVCO0VEWnZCLFlBQUE7RUFDQSxXQUFBO0FBREo7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsMERBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBRFI7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSxtSUFBQTtFQUNBLHFDQUFBO0VBQ0EsYUFBQTtBQUZSO0FBSUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0FBSlI7QUFNUTtFQUNJLG1CQ1pRO0FEUXBCO0FBTVE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0FBSlo7QUFNUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSloiLCJmaWxlIjoic3JjL2FwcC9pbnZlbnRvcnkvaW52ZW50b3J5LWRpc3BsYXkvaW52ZW50b3J5LWRpc3BsYXkuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9nbG9iYWxzJ1xuICAgIFxuLmludmVudG9yeS13cmFwcGVyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtICN7JG1vZHVsZV9tYXJnaW5fbGVmdH0gKVxuICAgIGhlaWdodDogJHJlc291cmNlLWNoaWxkcmVuLWhlaWdodFxuICAgIG1hcmdpbjogMTBweFxuICAgIHBhZGRpbmc6IDQlXG5cbiAgICAuaW52ZW50b3J5LXZpc3VhbFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCAnL2Fzc2V0cy9pbWFnZXMvQmFja2dyb3VuZC5wbmcnICkgbm8tcmVwZWF0XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJVxuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICBoZWlnaHQ6IDEwMCVcbiAgICAgICAgdG9wOiAwcHhcbiAgICAgICAgYm90dG9tOiAtMTBweFxuICAgICAgICBsZWZ0OiAwcHhcblxuICAgIC5pbnZlbnRvcnktb2Zmc2V0XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgICAgICBkaXNwbGF5OiBncmlkXG4gICAgICAgIGhlaWdodDogMTAwJVxuXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogW3RvcC1zdGFydF0gMWZyIFsgdG9wLWVuZCBtaWQtc3RhcnRdIDFmciBbbWlkLWVuZCBib3Qtc3RhcnRdIDFmciBbYm90LWVuZF0gLjJmciBbaG90YmFyLXN0YXJ0XSAxZnIgW2hvdGJhci1lbmRdXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksIDFmcilcbiAgICAgICAgZ3JpZC1nYXA6IDVweFxuXG4gICAgLnJlZnJlc2gtYnV0dG9uLWNvbnRhaW5lclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgICAgdG9wOiAyLjVweFxuICAgICAgICByaWdodDogMi41cHhcbiAgICAgICAgd2lkdGg6IDMwcHhcbiAgICAgICAgaGVpZ2h0OiAzMHB4XG5cbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZlxuICAgICAgICBib3JkZXI6IG91dHNldCAyLjVweCAjMDAwXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHhcblxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcblxuICAgICAgICAmOmhvdmVyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcmVzb3VyY2UtaGlnaGxpZ2h0XG5cbiAgICAgICAgJjphY3RpdmVcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkcmVzb3VyY2UtaGlnaGxpZ2h0LCAyNSUgKVxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBpbnNldFxuXG4gICAgICAgIHN2Z1xuICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICAgIGhlaWdodDogMTAwJVxuICAgICAgICAgICAgcGFkZGluZzogMi41cHhcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHhcbiAgICAgICAgICAgICAgICBcbiAgICAiLCIvLyAjIyMjIyMjIyMjIEdsb2JhbCBMYXlvdXQgU2V0dGluZ3MgIyMjIyMjIyMjI1xuJGdyaWQtd2lkdGg6IDc1JVxuJGdyaWQtaGVpZ2h0OiA2MCVcblxuLy8gU3BhY2luZ3MgYmV0d2VlbiBtb2R1bGVzXG4kbW9kdWxlLW1hcmdpbi1sZWZ0OiAxMHB4XG4kbW9kdWxlLW1hcmdpbi10b3A6ICRtb2R1bGUtbWFyZ2luLWxlZnRcblxuJG91dHB1dC13aWR0aDogY2FsYygxMDAlIC0gI3skZ3JpZC13aWR0aH0pXG4kb3V0cHV0LWhlaWdodDogY2FsYygxMDAlIC0gMiojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG4gICAgXG4kYnV0dG9uLWhlaWdodDogNTBweFxuXG4vLyBEZWxldGUgc3BlY2lmaWMgYnV0dG9uIHNldHRpbmdzXG4kZGVsZXRlLWJ1dHRvbi13aWR0aDogMTUwcHhcbiRkZWxldGUtYnV0dG9uLWhlaWdodDogNTBweFxuXG4vLyBJbnZlbnRvcnkgV2lkZ2V0IGhlaWdodFxuJHJlc291cmNlLWNoaWxkcmVuLWhlaWdodDogY2FsYygxMDAlIC0gMyojeyRtb2R1bGUtbWFyZ2luLXRvcH0pXG5cbiRib3JkZXItdGhpY2tuZXNzOiA1cHhcblxuLy8gIyMjIyMjIyMjIyBDb2xvciBEZWZpbml0aW9ucyAjIyMjIyMjIyMjXG4kY3VzdG9tLXNlbGVjdGVkOiNGMEVDRkRcbiRjdXN0b20taGlnaGxpZ2h0OiNDNEI1RjZcbiRvdXRwdXQtc2VsZWN0ZWQ6ICNDQUYzRjZcbiRvdXRwdXQtaGlnaGxpZ2h0OiMyRUQwREJcbiRjcmFmdGluZy1zZWxlY3RlZDojRjZFRENBXG4kY3JhZnRpbmctaGlnaGxpZ2h0OiNEQkI2MkVcbiRyZXNvdXJjZS1zZWxlY3RlZDojRDhGQ0NFXG4kcmVzb3VyY2UtaGlnaGxpZ2h0OiM2NkYyM0ZcbiRtaW5lY3JhZnQtc2VsZWN0ZWQ6ICNhY2I2YzNcbiRtaW5lY3JhZnQtaGlnaGxpZ2h0OiAjQThBQUIzXG5cbiRjb2xvci1kZWZhdWx0OiM3MDcwNzBcbiRjb2xvci1kZWZhdWx0LWRhcms6IzJBMkEyQVxuJGNvbG9yLWRlZmF1bHQtaGlnaGxpZ2h0OiNDQ0NDQ0NcblxuLy8gUGluc3RyaXBlIERlZmluaXRpb25zXG4kY3JpdGljYWwtcGF0aC1zZWxlY3RlZDojRkZEQUQwXG4kY3JpdGljYWwtcGF0aC1oaWdobGlnaHQ6I0ZGNkY0NVxuJGNyaXRpY2FsLXBhdGgtaGlnaGxpZ2h0LWFscGhhOiByZ2JhKCAkY3JpdGljYWwtcGF0aC1oaWdobGlnaHQsIC41KVxuXG5cbi8vICMjIyMjIyMjIyMgU3ByaXRlIFJlbmRlcmluZyBTZXR0aW5nc1xuJHNwcml0ZS1zaXplOiAzMnB4XG4kc3ByaXRlLXNjYWxlOiAyLjJcblxuLy8gSW4gbnVtYmVyIG9mIHNwcml0ZXNcbiRzcHJpdGUtc2hlZXQtaG9yaXpvbnRhbC1kaW1lbnNpb25zOiAxNlxuJHNwcml0ZS1zaGVldC12ZXJ0aWNhbC1kaW1lbnNpb25zOiAzNVxuXG4kc3ByaXRlLXdpZHRoOiBjYWxjKCN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zY2FsZX0pXG4kc3ByaXRlLXNoZWV0LXdpZHRoOiBjYWxjKCAjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2hlZXQtaG9yaXpvbnRhbC1kaW1lbnNpb25zICogJHNwcml0ZS1zY2FsZX0pXG4kc3ByaXRlLXNoZWV0LWhlaWdodDogY2FsYyggI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNoZWV0LXZlcnRpY2FsLWRpbWVuc2lvbnMgKiAkc3ByaXRlLXNjYWxlfSlcblxuLy8gU3ByaXRlIGltYWdlIGRpc3BsYXkgc2V0dGluZ3NcbiRzcHJpdGUtYm9yZGVyLXBhZGRpbmc6IDVweCJdfQ== */"] });
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
        this.nodeList = [];
        this.customNodeList = [];
        this.nodeService.GetAllCustomNodes().then(nodes => {
            this.convertNodesToNodeBrowser(nodes).forEach(value => {
                this.customNodeList.push(value);
                // Add to the global list if they should be
                if (this.filter == _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__["NodeBrowserFilter"].CUSTOM || this.filter == _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__["NodeBrowserFilter"].ALL) {
                    this.nodeList.push(value);
                }
            });
        });
    }
    ngOnInit() {
        this.filterItems();
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
            // Add the custom nodes
            this.customNodeList.forEach(value => {
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
            this.nodeList = [];
            this.customNodeList.forEach(value => {
                this.nodeList.push(value);
            });
            this.nodeService.ForceGetAllCustomNodes().then(nodes => {
                this.nodeList = [];
                this.customNodeList = [];
                // Get the Nodes
                this.convertNodesToNodeBrowser(nodes).forEach(value => {
                    // Add to the custom node list
                    this.customNodeList.push(value);
                    if (this.filter == _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__["NodeBrowserFilter"].CUSTOM || this.filter == _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__["NodeBrowserFilter"].ALL) {
                        this.nodeList.push(value);
                    }
                });
            });
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
        if (nodeList) {
            nodeList.forEach(value => {
                let data = {};
                data['id'] = value.uuid;
                data['item'] = this.itemService.GetItemFromId(value.meta.icon);
                nodes.push(new _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__["NodeBrowserItem"](value.meta.name, "Custom", data));
            });
        }
        return nodes;
    }
}
NodeBrowserComponent.ɵfac = function NodeBrowserComponent_Factory(t) { return new (t || NodeBrowserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rete_modules_services_node_service__WEBPACK_IMPORTED_MODULE_3__["NodeService"])); };
NodeBrowserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NodeBrowserComponent, selectors: [["app-node-browser"]], decls: 16, vars: 7, consts: [[1, "node-browser-wrapper", "module-margin"], [1, "node-browser-button-header"], ["type", "button", 1, "button", "all", "pixelated", "minecraft-background", 3, "ngClass", "click"], ["type", "button", 1, "button", "resource", "pixelated", "minecraft-background", 3, "ngClass", "click"], ["type", "button", 1, "button", "crafting", "pixelated", "minecraft-background", 3, "ngClass", "click"], ["type", "button", 1, "button", "output", "pixelated", "minecraft-background", 3, "ngClass", "click"], ["type", "button", 1, "button", "custom", "pixelated", "minecraft-background", 3, "ngClass", "click"], [1, "right", "fill", "search-bar-container"], ["type", "search", "placeholder", "search", 1, "search-bar", 3, "ngModel", "ngModelChange", "input"], [1, "node-browser-grid"], [4, "ngFor", "ngForOf"], [3, "nodeItem", "filter"]], template: function NodeBrowserComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.filter == 0 ? "focused" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.filter == 1 ? "focused" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.filter == 2 ? "focused" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.filter == 3 ? "focused" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.filter == 4 ? "focused" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchString);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.nodeList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _node_browser_item_node_browser_item_component__WEBPACK_IMPORTED_MODULE_0__["NodeBrowserItemComponent"]], styles: [".node-browser-wrapper[_ngcontent-%COMP%] {\n  height: calc(100% - 3*10px);\n  min-height: 150px;\n  border: 5px outset #2A2A2A;\n  display: flex;\n  flex-direction: column;\n  background-color: #707070;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px;\n  background-color: #2A2A2A;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n@media (max-width: 1650px) {\n  .node-browser-button-header[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    height: 50%;\n  }\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.all[_ngcontent-%COMP%] {\n  background-color: #CCCCCC;\n  border-color: #CCCCCC;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.all[_ngcontent-%COMP%]:active {\n  background-color: #8c8c8c;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.resource[_ngcontent-%COMP%] {\n  background-color: #66F23F;\n  border-color: #66F23F;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.resource[_ngcontent-%COMP%]:active {\n  background-color: #2da60b;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.crafting[_ngcontent-%COMP%] {\n  background-color: #DBB62E;\n  border-color: #DBB62E;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.crafting[_ngcontent-%COMP%]:active {\n  background-color: #756114;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.output[_ngcontent-%COMP%] {\n  background-color: #2ED0DB;\n  border-color: #2ED0DB;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.output[_ngcontent-%COMP%]:active {\n  background-color: #146f75;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.custom[_ngcontent-%COMP%] {\n  background-color: #C4B5F6;\n  border-color: #C4B5F6;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .button.custom[_ngcontent-%COMP%]:active {\n  background-color: #6943e8;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .search-bar-container[_ngcontent-%COMP%] {\n  width: 7.5vw;\n  margin-bottom: 5px;\n}\n\n@media (max-width: 1650px) {\n  .node-browser-button-header[_ngcontent-%COMP%]   .search-bar-container[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n  }\n}\n\n@media (max-width: 1315px) {\n  .node-browser-button-header[_ngcontent-%COMP%]   .search-bar-container[_ngcontent-%COMP%] {\n    float: right;\n    width: 50%;\n  }\n}\n\n@media (max-width: 950px) {\n  .node-browser-button-header[_ngcontent-%COMP%]   .search-bar-container[_ngcontent-%COMP%] {\n    width: 7.5vw;\n  }\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .search-bar-container[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border: inset 5px #707070;\n  padding: 4px 7px;\n  text-align: right;\n}\n\n.node-browser-button-header[_ngcontent-%COMP%]   .search-bar-container[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.node-browser-grid[_ngcontent-%COMP%] {\n  width: calc(100% - 5px);\n  height: 100%;\n  margin: 5px;\n  display: inline-grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-auto-rows: max(6.8vw, 120px);\n  column-gap: 5px;\n  row-gap: 5px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n@media (max-width: 1750px) {\n  .node-browser-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n  }\n}\n\n@media (max-width: 1450px) {\n  .node-browser-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0ZS1tb2R1bGVzL25vZGUtYnJvd3Nlci9ub2RlLWJyb3dzZXIuY29tcG9uZW50LnNhc3MiLCJzcmMvX2dsb2JhbHMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLDJCQ2N1QjtFRGJ2QixpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJDeUJXO0FEM0JmOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFFQSx5QkNvQmdCO0FEdEJwQjs7QUFJSTtFQUNJLGtCQUFBO0FBRlI7O0FBR1E7RUFGSjtJQUdRLFdBQUE7RUFBVjtBQUNGOztBQUNRO0VBQ0kseUJDYWE7RURaYixxQkNZYTtBRFh6Qjs7QUFBWTtFQUNJLHlCQUFBO0FBRWhCOztBQUFRO0VBQ0kseUJDQ1E7RURBUixxQkFBQTtBQUVaOztBQURZO0VBQ0kseUJBQUE7QUFHaEI7O0FBRFE7RUFDSSx5QkNQUTtFRFFSLHFCQ1JRO0FEV3BCOztBQUZZO0VBQ0kseUJBQUE7QUFJaEI7O0FBRlE7RUFDSSx5QkNmTTtFRGdCTixxQkNoQk07QURvQmxCOztBQUhZO0VBQ0kseUJBQUE7QUFLaEI7O0FBSFE7RUFDSSx5QkN2Qk07RUR3Qk4scUJDeEJNO0FENkJsQjs7QUFKWTtFQUNJLHlCQUFBO0FBTWhCOztBQUpJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBTVI7O0FBSlE7RUFKSjtJQUtRLFdBQUE7SUFDQSxXQUFBO0VBT1Y7QUFDRjs7QUFOUTtFQVJKO0lBU1EsWUFBQTtJQUNBLFVBQUE7RUFTVjtBQUNGOztBQVJRO0VBWko7SUFhUSxZQUFBO0VBV1Y7QUFDRjs7QUFWUTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFZWjs7QUFWWTtFQUNJLGFBQUE7QUFZaEI7O0FBVkE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsb0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGlDQUFBO0VBU0EsZUFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBZEk7RUFUSjtJQVVRLHNDQUFBO0VBaUJOO0FBQ0Y7O0FBaEJJO0VBWko7SUFhUSxrQ0FBQTtFQW1CTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmV0ZS1tb2R1bGVzL25vZGUtYnJvd3Nlci9ub2RlLWJyb3dzZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9nbG9iYWxzJ1xuQGltcG9ydCAnLi4vcmV0ZV92YXJpYWJsZXMnXG4gICAgXG4ubm9kZS1icm93c2VyLXdyYXBwZXJcbiAgICBoZWlnaHQ6ICRyZXNvdXJjZS1jaGlsZHJlbi1oZWlnaHRcbiAgICBtaW4taGVpZ2h0OiAxNTBweFxuICAgIGJvcmRlcjogNXB4IG91dHNldCAkY29sb3ItZGVmYXVsdC1kYXJrXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZGVmYXVsdFxuICAgIFxuLm5vZGUtYnJvd3Nlci1idXR0b24taGVhZGVyXG4gICAgd2lkdGg6IDEwMCVcbiAgICBwYWRkaW5nOiA1cHhcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kZWZhdWx0LWRhcmtcblxuICAgIC5idXR0b25cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4XG4gICAgICAgIEBtZWRpYSAoIG1heC13aWR0aDogMTY1MHB4IClcbiAgICAgICAgICAgIGhlaWdodDogNTAlXG4gICAgICAgICAgICBcbiAgICAgICAgJi5hbGxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kZWZhdWx0LWhpZ2hsaWdodFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItZGVmYXVsdC1oaWdobGlnaHRcbiAgICAgICAgICAgICY6YWN0aXZlXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvci1kZWZhdWx0LWhpZ2hsaWdodCwgMjUlKVxuXG4gICAgICAgICYucmVzb3VyY2VcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZXNvdXJjZS1oaWdobGlnaHRcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHJlc291cmNlLWhpZ2hsaWdodFxuICAgICAgICAgICAgJjphY3RpdmVcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHJlc291cmNlLWhpZ2hsaWdodCwgMjUlKVxuXG4gICAgICAgICYuY3JhZnRpbmdcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjcmFmdGluZy1oaWdobGlnaHRcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNyYWZ0aW5nLWhpZ2hsaWdodFxuICAgICAgICAgICAgJjphY3RpdmVcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNyYWZ0aW5nLWhpZ2hsaWdodCwgMjUlKVxuXG4gICAgICAgICYub3V0cHV0XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3V0cHV0LWhpZ2hsaWdodFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkb3V0cHV0LWhpZ2hsaWdodFxuICAgICAgICAgICAgJjphY3RpdmVcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJG91dHB1dC1oaWdobGlnaHQsIDI1JSlcblxuICAgICAgICAmLmN1c3RvbVxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGN1c3RvbS1oaWdobGlnaHRcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGN1c3RvbS1oaWdobGlnaHRcbiAgICAgICAgICAgICY6YWN0aXZlXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjdXN0b20taGlnaGxpZ2h0LCAyNSUpXG5cbiAgICAuc2VhcmNoLWJhci1jb250YWluZXJcbiAgICAgICAgd2lkdGg6IDcuNXZ3XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweFxuXG4gICAgICAgIEBtZWRpYSAoIG1heC13aWR0aDogMTY1MHB4IClcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0XG4gICAgICAgICAgICB3aWR0aDogMTAwJVxuXG4gICAgICAgIEBtZWRpYSAoIG1heC13aWR0aDogMTMxNXB4IClcbiAgICAgICAgICAgIGZsb2F0OiByaWdodFxuICAgICAgICAgICAgd2lkdGg6IDUwJVxuICAgICAgICAgICAgXG4gICAgICAgIEBtZWRpYSAoIG1heC13aWR0aDogOTUwcHggKVxuICAgICAgICAgICAgd2lkdGg6IDcuNXZ3XG5cbiAgICAgICAgLnNlYXJjaC1iYXJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICBib3JkZXI6IGluc2V0IDVweCAkY29sb3ItZGVmYXVsdFxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDdweFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHRcblxuICAgICAgICAgICAgJjpmb2N1c1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmVcblxuLm5vZGUtYnJvd3Nlci1ncmlkXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDVweClcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICBtYXJnaW46IDVweFxuICAgIFxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1heCggNi44dncsIDEyMHB4KVxuXG4gICAgQG1lZGlhICggbWF4LXdpZHRoOiAxNzUwcHggKVxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmclxuXG4gICAgQG1lZGlhICggbWF4LXdpZHRoOiAxNDUwcHggKVxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyXG5cblxuICAgIGNvbHVtbi1nYXA6IDVweFxuICAgIHJvdy1nYXA6IDVweFxuXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuXG5cbiIsIi8vICMjIyMjIyMjIyMgR2xvYmFsIExheW91dCBTZXR0aW5ncyAjIyMjIyMjIyMjXG4kZ3JpZC13aWR0aDogNzUlXG4kZ3JpZC1oZWlnaHQ6IDYwJVxuXG4vLyBTcGFjaW5ncyBiZXR3ZWVuIG1vZHVsZXNcbiRtb2R1bGUtbWFyZ2luLWxlZnQ6IDEwcHhcbiRtb2R1bGUtbWFyZ2luLXRvcDogJG1vZHVsZS1tYXJnaW4tbGVmdFxuXG4kb3V0cHV0LXdpZHRoOiBjYWxjKDEwMCUgLSAjeyRncmlkLXdpZHRofSlcbiRvdXRwdXQtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyKiN7JG1vZHVsZS1tYXJnaW4tdG9wfSlcbiAgICBcbiRidXR0b24taGVpZ2h0OiA1MHB4XG5cbi8vIERlbGV0ZSBzcGVjaWZpYyBidXR0b24gc2V0dGluZ3NcbiRkZWxldGUtYnV0dG9uLXdpZHRoOiAxNTBweFxuJGRlbGV0ZS1idXR0b24taGVpZ2h0OiA1MHB4XG5cbi8vIEludmVudG9yeSBXaWRnZXQgaGVpZ2h0XG4kcmVzb3VyY2UtY2hpbGRyZW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAzKiN7JG1vZHVsZS1tYXJnaW4tdG9wfSlcblxuJGJvcmRlci10aGlja25lc3M6IDVweFxuXG4vLyAjIyMjIyMjIyMjIENvbG9yIERlZmluaXRpb25zICMjIyMjIyMjIyNcbiRjdXN0b20tc2VsZWN0ZWQ6I0YwRUNGRFxuJGN1c3RvbS1oaWdobGlnaHQ6I0M0QjVGNlxuJG91dHB1dC1zZWxlY3RlZDogI0NBRjNGNlxuJG91dHB1dC1oaWdobGlnaHQ6IzJFRDBEQlxuJGNyYWZ0aW5nLXNlbGVjdGVkOiNGNkVEQ0FcbiRjcmFmdGluZy1oaWdobGlnaHQ6I0RCQjYyRVxuJHJlc291cmNlLXNlbGVjdGVkOiNEOEZDQ0VcbiRyZXNvdXJjZS1oaWdobGlnaHQ6IzY2RjIzRlxuJG1pbmVjcmFmdC1zZWxlY3RlZDogI2FjYjZjM1xuJG1pbmVjcmFmdC1oaWdobGlnaHQ6ICNBOEFBQjNcblxuJGNvbG9yLWRlZmF1bHQ6IzcwNzA3MFxuJGNvbG9yLWRlZmF1bHQtZGFyazojMkEyQTJBXG4kY29sb3ItZGVmYXVsdC1oaWdobGlnaHQ6I0NDQ0NDQ1xuXG4vLyBQaW5zdHJpcGUgRGVmaW5pdGlvbnNcbiRjcml0aWNhbC1wYXRoLXNlbGVjdGVkOiNGRkRBRDBcbiRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodDojRkY2RjQ1XG4kY3JpdGljYWwtcGF0aC1oaWdobGlnaHQtYWxwaGE6IHJnYmEoICRjcml0aWNhbC1wYXRoLWhpZ2hsaWdodCwgLjUpXG5cblxuLy8gIyMjIyMjIyMjIyBTcHJpdGUgUmVuZGVyaW5nIFNldHRpbmdzXG4kc3ByaXRlLXNpemU6IDMycHhcbiRzcHJpdGUtc2NhbGU6IDIuMlxuXG4vLyBJbiBudW1iZXIgb2Ygc3ByaXRlc1xuJHNwcml0ZS1zaGVldC1ob3Jpem9udGFsLWRpbWVuc2lvbnM6IDE2XG4kc3ByaXRlLXNoZWV0LXZlcnRpY2FsLWRpbWVuc2lvbnM6IDM1XG5cbiRzcHJpdGUtd2lkdGg6IGNhbGMoI3skc3ByaXRlLXNpemUgKiAkc3ByaXRlLXNjYWxlfSlcbiRzcHJpdGUtc2hlZXQtd2lkdGg6IGNhbGMoICN7JHNwcml0ZS1zaXplICogJHNwcml0ZS1zaGVldC1ob3Jpem9udGFsLWRpbWVuc2lvbnMgKiAkc3ByaXRlLXNjYWxlfSlcbiRzcHJpdGUtc2hlZXQtaGVpZ2h0OiBjYWxjKCAjeyRzcHJpdGUtc2l6ZSAqICRzcHJpdGUtc2hlZXQtdmVydGljYWwtZGltZW5zaW9ucyAqICRzcHJpdGUtc2NhbGV9KVxuXG4vLyBTcHJpdGUgaW1hZ2UgZGlzcGxheSBzZXR0aW5nc1xuJHNwcml0ZS1ib3JkZXItcGFkZGluZzogNXB4Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NodeBrowserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-node-browser',
                templateUrl: './node-browser.component.html',
                styleUrls: ['./node-browser.component.sass']
            }]
    }], function () { return [{ type: src_app_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"] }, { type: src_app_rete_modules_services_node_service__WEBPACK_IMPORTED_MODULE_3__["NodeService"] }]; }, null); })();


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
        this.columns = [0, 1, 2, 3];
        this.nodeNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.nodeImageValue = '0,0';
        this.nodeShareControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Personal');
        this.items = [];
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
        console.log(xy);
        console.log(this.items);
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

/***/ "rpsm":
/*!************************************************************************!*\
  !*** ./src/app/inventory/services/http-minecraft-inventory.service.ts ***!
  \************************************************************************/
/*! exports provided: HttpMinecraftInventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpMinecraftInventoryService", function() { return HttpMinecraftInventoryService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minecraft-inventory.service */ "v5B+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_general_service_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general/service/session.service */ "fnjm");






let getMinecraftItemRoute = "/minecraft/getInventory";
const options = {
    headers: {
        Authorization: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment_vars"].authentication
    }
};
class HttpMinecraftInventoryService extends _minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_2__["MinecraftInventoryService"] {
    constructor(httpClient, sessionService) {
        super();
        this.httpClient = httpClient;
        this.sessionService = sessionService;
        this.localDataBaseStorage = {};
        this.localDataBaseStorage = {};
    }
    GetAllInventoryItems() {
        return this.UpdateLocalStorageIfNeeded(-1, false);
    }
    ForceGetAllInventoryItems() {
        return this.UpdateLocalStorageIfNeeded(-1, true);
    }
    GetInventoryItemAverage(id) {
        return this.UpdateLocalStorageIfNeeded(id, false);
    }
    GetFromLocalStorage(id) {
        if (id === -1) {
            return Promise.resolve(this.localDataBaseStorage.current_inventory);
        }
        if (this.localDataBaseStorage.averages && this.localDataBaseStorage.averages[id]) {
            return Promise.resolve(this.localDataBaseStorage.averages[id] * _minecraft_inventory_service__WEBPACK_IMPORTED_MODULE_2__["MILLISECONDS_TO_HOURS"]);
        }
        // TODO: Temorary addition to provide rates to all inventory items
        //    return Promise.resolve(0);
        //return Promise.resolve(1 + Math.round(Math.random()*25));
        return Promise.resolve(20);
    }
    UpdateLocalStorageIfNeeded(id, forceUpdate) {
        let body = this.sessionService.buildPostWithSession("", null);
        if (forceUpdate || this.localDataBaseStorage === {}) {
            return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment_vars"].api_root + getMinecraftItemRoute, body, options).toPromise().then(any => {
                this.localDataBaseStorage = any;
                // TODO: Temorary addition for congnitive walkthrough
                if (!this.localDataBaseStorage.current_inventory) {
                    this.localDataBaseStorage = {};
                    this.localDataBaseStorage.current_inventory = [];
                    this.localDataBaseStorage.averages = {};
                }
                if (this.sessionService.getSession() !== "123") {
                    this.localDataBaseStorage.current_inventory.push({
                        "itemId": 23,
                        "slotCount": 23,
                        "slotIndex": 6
                    });
                    this.localDataBaseStorage.averages['23'] = 0.000085;
                }
                this.InventoryUpdateCallbacks();
                return this.GetFromLocalStorage(id);
            });
        }
        return this.GetFromLocalStorage(id);
    }
}
HttpMinecraftInventoryService.ɵfac = function HttpMinecraftInventoryService_Factory(t) { return new (t || HttpMinecraftInventoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_general_service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"])); };
HttpMinecraftInventoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpMinecraftInventoryService, factory: HttpMinecraftInventoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpMinecraftInventoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: src_app_general_service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }]; }, null); })();


/***/ }),

/***/ "spm5":
/*!**********************************************************************!*\
  !*** ./src/app/inventory/inventory-item/inventory-item.component.ts ***!
  \**********************************************************************/
/*! exports provided: InventoryItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryItemComponent", function() { return InventoryItemComponent; });
/* harmony import */ var _general_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../general/item-image-component/item-image.component */ "FjGt");
/* harmony import */ var _general_model_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../general/model/item.model */ "UKeZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../rete-modules/services/item.service */ "x7rl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







class InventoryItemComponent {
    constructor(itemService) {
        this.itemService = itemService;
        this.isValid = true;
    }
    ngOnInit() {
        if (this.minecraftItem.itemId == _general_model_item_model__WEBPACK_IMPORTED_MODULE_1__["UNKNOWN_ITEM"].id) {
            this.item = _general_model_item_model__WEBPACK_IMPORTED_MODULE_1__["UNKNOWN_ITEM"];
            this.isValid = false;
        }
        else {
            this.item = this.itemService.GetItemFromId(this.minecraftItem.itemId);
        }
    }
    ngAfterViewInit() {
        this.minecraftItemViews.selectedItem = this.item;
    }
    OnDrag(event) {
        event.dataTransfer.setData("nodeType", "Minecraft");
        event.dataTransfer.setData("nodeId", this.item.id);
        event.dataTransfer.effectAllowed = "copy";
    }
}
InventoryItemComponent.ɵfac = function InventoryItemComponent_Factory(t) { return new (t || InventoryItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"])); };
InventoryItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InventoryItemComponent, selectors: [["app-inventory-item"]], viewQuery: function InventoryItemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_general_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_0__["ItemImageComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.minecraftItemViews = _t);
    } }, inputs: { minecraftItem: "minecraftItem" }, decls: 4, vars: 4, consts: [[1, "minecraft-item", 3, "ngClass", "draggable", "dragstart"], [3, "selectedItem"], [1, "text-node-title", "inventory-count"]], template: function InventoryItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dragstart", function InventoryItemComponent_Template_div_dragstart_0_listener($event) { return ctx.OnDrag($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "item-image", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.isValid ? "" : "disabled")("draggable", ctx.isValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedItem", ctx.item);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.minecraftItem.slotCount);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _general_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_0__["ItemImageComponent"]], styles: [".minecraft-item[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 2px;\n  position: relative;\n  cursor: grab;\n}\n.minecraft-item.disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n.minecraft-item[_ngcontent-%COMP%]   .inventory-count[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2px;\n  right: 2px;\n  font-size: 24px;\n  font-weight: bolder;\n  color: #fff;\n  -webkit-text-stroke: 2px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2ludmVudG9yeS1pdGVtL2ludmVudG9yeS1pdGVtLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7QUFBSjtBQUVJO0VBQ0ksbUJBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQUFSIiwiZmlsZSI6InNyYy9hcHAvaW52ZW50b3J5L2ludmVudG9yeS1pdGVtL2ludmVudG9yeS1pdGVtLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pbmVjcmFmdC1pdGVtXG4gICAgd2lkdGg6IDEwMCVcbiAgICBwYWRkaW5nOiAycHhcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcblxuICAgIGN1cnNvcjogZ3JhYlxuXG4gICAgJi5kaXNhYmxlZFxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkXG5cbiAgICAuaW52ZW50b3J5LWNvdW50XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgICBib3R0b206IC0ycHhcbiAgICAgICAgcmlnaHQ6IDJweFxuICAgICAgICBmb250LXNpemU6IDI0cHhcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlclxuICAgICAgICBjb2xvcjogI2ZmZlxuICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggYmxhY2siXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](InventoryItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-inventory-item',
                templateUrl: './inventory-item.component.html',
                styleUrls: ['./inventory-item.component.sass']
            }]
    }], function () { return [{ type: _rete_modules_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] }]; }, { minecraftItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], minecraftItemViews: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"],
            args: [_general_item_image_component_item_image_component__WEBPACK_IMPORTED_MODULE_0__["ItemImageComponent"]]
        }] }); })();


/***/ }),

/***/ "t7mk":
/*!************************************************************!*\
  !*** ./src/app/rete-modules/services/http-node.service.ts ***!
  \************************************************************/
/*! exports provided: HttpNodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpNodeService", function() { return HttpNodeService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_rete_modules_services_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rete-modules/services/node.service */ "5bZ5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_general_service_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general/service/session.service */ "fnjm");






let getCustomNodeRoute = '/minecraft/getNodes';
let postCustomNodeRoute = '/minecraft/postNode';
let routeCriticalPath = '/minecraft/criticalpath';
const options = {
    headers: {
        Authorization: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment_vars"].authentication,
    }
};
class HttpNodeService extends src_app_rete_modules_services_node_service__WEBPACK_IMPORTED_MODULE_1__["NodeService"] {
    constructor(httpClient, sessionService) {
        super();
        this.httpClient = httpClient;
        this.sessionService = sessionService;
        this.localStorage = [];
    }
    GetAllCustomNodes() {
        return this.UpdateLocalStorageIfNeeded("", false);
    }
    ForceGetAllCustomNodes() {
        return this.UpdateLocalStorageIfNeeded("", true);
    }
    GetCustomNode(uuid) {
        return this.UpdateLocalStorageIfNeeded(uuid, false);
    }
    postCriticalPath_tl(uuid) {
        let body = this.getCriticalPath();
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment_vars"].api_root + routeCriticalPath, body, options).toPromise().then(any => {
            this.localStorage = any['Items'];
            return this.GetFromLocalStorage(uuid);
        });
    }
    SaveCustomNode(node) {
        let body = this.sessionService.buildPostWithSession("nodeData", node);
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment_vars"].api_root + postCustomNodeRoute, body, options).toPromise().then(any => {
            node.uuid = any['message']['uuid'];
            this.localStorage.push(node);
            return node.uuid;
        });
    }
    GetFromLocalStorage(uuid) {
        // If not looking for unique, return all
        if (uuid === "") {
            return Promise.resolve(this.localStorage);
        }
        // Return found if have it
        let found = this.localStorage.find(value => {
            return value.uuid == uuid;
        });
        if (found) {
            return Promise.resolve(found);
        }
        let body = this.sessionService.buildPostWithSession("", null);
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment_vars"].api_root + getCustomNodeRoute, body, options).toPromise().then(any => {
            this.localStorage = any['Items'];
            return this.localStorage.find(value => {
                return value.uuid = uuid;
            });
        });
    }
    UpdateLocalStorageIfNeeded(uuid, forceUpdate) {
        let body = this.sessionService.buildPostWithSession("", null);
        if (forceUpdate || this.localStorage.length == 0) {
            return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment_vars"].api_root + getCustomNodeRoute, body, options).toPromise().then(any => {
                this.localStorage = any['Items'];
                return this.GetFromLocalStorage(uuid);
            });
        }
        return this.GetFromLocalStorage(uuid);
    }
}
HttpNodeService.ɵfac = function HttpNodeService_Factory(t) { return new (t || HttpNodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_general_service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"])); };
HttpNodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HttpNodeService, factory: HttpNodeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HttpNodeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: src_app_general_service_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }]; }, null); })();


/***/ }),

/***/ "v5B+":
/*!*******************************************************************!*\
  !*** ./src/app/inventory/services/minecraft-inventory.service.ts ***!
  \*******************************************************************/
/*! exports provided: MILLISECONDS_TO_HOURS, MinecraftInventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MILLISECONDS_TO_HOURS", function() { return MILLISECONDS_TO_HOURS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinecraftInventoryService", function() { return MinecraftInventoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


let MILLISECONDS_TO_HOURS = 3600000;
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
            this.GetInventoryItemAverage(itemId).then(average => {
                this.inventoryCallbacks[itemIdLabel].forEach(callback => {
                    // Call the callback passing this ref to be used
                    callback.callback.call(callback.thisRef, callback.nodeId, average);
                });
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

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");


 // CLI imports router


const routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"] }
]; // sets up routes constant where you define your routes
// configures NgModule imports and exports
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _general_model_color_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../general/model/color.model */ "5UJb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_resources_items_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/resources/items.json */ "ULQj");
var _assets_resources_items_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/resources/items.json */ "ULQj", 1);




let loadedData = _assets_resources_items_json__WEBPACK_IMPORTED_MODULE_2__;
class ItemService {
    constructor() {
        this.localDatabase = {};
        this.localDatabase = loadedData;
        this.localDatabase['items'].forEach(item => {
            if (item.primaryColor) {
                item.primaryColor = _general_model_color_model__WEBPACK_IMPORTED_MODULE_0__["Color"].FromHex(item.primaryColor);
            }
            else {
                item.primaryColor = new _general_model_color_model__WEBPACK_IMPORTED_MODULE_0__["Color"](1, 1, 1);
            }
            if (item.secondaryColor) {
                item.secondaryColor = _general_model_color_model__WEBPACK_IMPORTED_MODULE_0__["Color"].FromHex(item.secondaryColor);
            }
            else {
                item.secondaryColor = new _general_model_color_model__WEBPACK_IMPORTED_MODULE_0__["Color"](1, 1, 1);
            }
        });
    }
    GetAllItems() {
        return this.localDatabase['items'];
    }
    GetItemFromId(id) {
        return this.localDatabase['items'].find((item) => {
            return item.id == id;
        });
    }
    GetAllCraftableItems() {
        return this.localDatabase['items'].filter((item) => {
            return item.craftable;
        });
    }
    GetAllNonCraftableItems() {
        return this.localDatabase['items'].filter((item) => {
            return !item.craftable;
        });
    }
    GetItemPrimaryColor(id) {
        return this.GetItemFromId(id).primaryColor;
    }
}
ItemService.ɵfac = function ItemService_Factory(t) { return new (t || ItemService)(); };
ItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ItemService, factory: ItemService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ItemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
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