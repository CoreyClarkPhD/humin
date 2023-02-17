'use strict';

var Module = {
    onRuntimeInitialized: function () {
        console.log("----------------------------------------------------------------------");
        console.log(Module.testFunc());
        console.log("----------------------------------------------------------------------");
        global.SimModule = Module;
    }
};

function printNum() {
    console.log("----------------------------------------------------------------------");
    console.log("4")
    console.log("----------------------------------------------------------------------");
}

let global = Function('return this');
global.printNum = printNum;
