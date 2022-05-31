const params = new URLSearchParams(window.location.search);
console.log(document.referrer);

BB.tree = {
    Nodes:      [],
    Crafter:    [],
    Resource:   [],
    Output:    []
}
BB.stateNumber = 0;

//
//  Task 1: Build Plank Contraption
//
BB.States.Task1 = new CState("Task1");

BB.States.Task1.Enter = function(){
    
    //Enable the task to be submitted
    $('#task1Submit').prop("disabled", false)

    //Enable Unit Test for Task 1
    $('#unitTestTask1').css('display', 'block')

    //Clear Debugger for Task 1
    ClearDebugger();
    
}
BB.States.Task1.Execute = function(){
    //Run Unit Test
    BB.States.Task1.complete = BB.States.Task1.RunUnitTest();

    //Alert User on Unit Test Results
        //Test to see if all Task are Complete
    if(AllTaskComplete()){
        $('#allTaskCompleteModal').modal('show');
    }
    else if(BB.States.Task1.complete){
        $('#passedUnitTestModal').modal('show');
    }
    else{
        $('#failedUnitTestModal').modal('show');
    }

    //Test to see if all Task are Complete
    if(AllTaskComplete()){
        $('#allTaskCompleteModal').modal('show');
    }
}
BB.States.Task1.Exit = function(){
    //Disable Task 1 Content
    $('#task1Submit').prop("disabled", true)

    //Enable Unit Test for Task 1
    $('#unitTestTask1').css('display', 'none');

    //Enable Debugger for Task 1
    

}
BB.States.Task1.complete = false;
BB.States.Task1.TestConditions = {
    resourceNodes: ['logs'],
    craftableNodes: ['planks'],
    outputNodes:    ['planks'],
    capacity:[
        {name: 'planks',
        amount: 8}
    ],
    connections:{'logs': 'planks',
                 'planks': 'output',
                 'output': 'planks'},
    customNode: 'plank_contraption',
    Results: {
        NodeTypes: {
            Resource:{
                missing: false,
                incorrect: false,
            },
            Crafter: {
                missing: false,
                incorrect: false,
            },
            Output: {
                missing: false,
                incorrect: false,
            }
        },
        Capacity: {
            high: false,
            low: false,
            missing: false
        }
    }
}
BB.States.Task1.UnitTestStatus = {
    resourceNodes: false,
    craftableNodes: false,
    outputNodes: false,
    connectivity: false,
    capacity: false,
    custom: false
}
BB.States.Task1.RunUnitTest = function(){
    console.log("running task 1 unit test");
    //Debugging
    // BB.tree = BB.treePlanksCorrect; //Correct Planks Test
    // BB.tree = BB.treePlanksNoOutpout;  //Missing Output Planks node in MFP
    //  BB.tree = BB.treePlanksWrongOutput; //Wrong output node
    // BB.tree = BB.treePlanksWrongCapacity;
    // BB.tree = BB.treePlanksInfiniteCapacity;


    var status = BB.States.Task1.UnitTestStatus;
    //Proper Nodes in Model
    status.resourceNodes   = DoCorrectResourceNodesExist(BB.States.Task1.TestConditions);
    if(status.resourceNodes){
        setUnitTestNodesResourceColor(1,'green');
    }
    else{
        setUnitTestNodesResourceColor(1,'red');
    }
    status.craftableNodes = DoCorrectCraftableNodesExist(BB.States.Task1.TestConditions);
    if(status.craftableNodes){
        setUnitTestNodesCraftableColor(1, 'green');
    }
    else{
        setUnitTestNodesCraftableColor(1, 'red');
    }
    status.outputNodes    = DoCorrectOutputNodesExist(BB.States.Task1.TestConditions);
    if(status.outputNodes){
        setUnitTestNodesOutputColor(1, 'green');
    }
    else{
        setUnitTestNodesOutputColor(1, 'red');
    }
    
    if(status.resourceNodes && status.craftableNodes && status.outputNodes){
        setUnitTestNodesColor(1,'green');
    }
    else{
        setUnitTestNodesColor(1, 'red');

        //Enable Debugger Output for Node Types
        $('#debuggerNodeTypes').css('display', 'block');
    }

    //Model Connected Correctly
    status.connectivity = isModelConnectedCorrectly(BB.States.Task1.TestConditions);
    if(status.connectivity){
        setUnitTestConnectedColor(1,'green');
    }
    else{
        setUnitTestConnectedColor(1,'red');
    }

    //Proper Capcity
    status.capacity = ItemCapcityCorrect(BB.States.Task1.TestConditions);
    if(status.capacity){
        setUnitTestCapacityColor(1, 'green');
    }
    else{
        setUnitTestCapacityColor(1, 'red');
    }
    

    //Custom Node Exist
    status.custom = DoesCustomNodeExist(BB.States.Task1.TestConditions);
    if(status.custom){
        setUnitTestCustonColor(1,'green');
    }
    else{
        setUnitTestCustonColor(1,'red');
    }

    BB.States.Task1.complete =  status.resourceNodes && 
                                status.craftableNodes && 
                                status.outputNodes && 
                                status.connectivity && 
                                status.capacity && 
                                status.custom;

    return BB.States.Task1.complete;
}

//
//  Task 2: Build Stick Contraption
//
BB.States.Task2 = new CState("Task2");

BB.States.Task2.Enter = function(){
    //Enable the task to be submitted
    $('#task2Submit').prop("disabled", false)

    //Enable Unit Test for Task 1
    $('#unitTestTask2').css('display', 'block');

    //Enable Debugger for Task 1
    ClearDebugger();
}
BB.States.Task2.Execute = function(){
    //Run Unit Test
    BB.States.Task2.complete = BB.States.Task2.RunUnitTest();

    //Alert User on Unit Test Results
        //Test to see if all Task are Complete
    if(AllTaskComplete()){
        $('#allTaskCompleteModal').modal('show');
    }
    else if(BB.States.Task2.complete){
        $('#passedUnitTestModal').modal('show');
    }
    else{
        $('#failedUnitTestModal').modal('show');
    }
    
    
}
BB.States.Task2.Exit = function(){
    //Disable Task 2 Content
    $('#task2Submit').prop("disabled", true)

    //Enable Unit Test for Task 2
    $('#unitTestTask2').css('display', 'none');

    //Enable Debugger for Task 2
    
}
BB.States.Task2.complete = false;
BB.States.Task2.UnitTestStatus = {
    resourceNodes: false,
    craftableNodes: false,
    outputNodes: false,
    connectivity: false,
    capacity: false,
    custom: false
}
BB.States.Task2.RunUnitTest = function(){
    console.log("running task 2 unit test");

    var status = BB.States.Task2.UnitTestStatus;
    //Proper Nodes in Model
    status.resourceNodes   = DoCorrectResourceNodesExist(BB.States.Task2.TestConditions);
    if(status.resourceNodes){
        setUnitTestNodesResourceColor(2,'green');
    }
    else{
        setUnitTestNodesResourceColor(2,'red');
    }
    status.craftableNodes = DoCorrectCraftableNodesExist();
    if(status.craftableNodes){
        setUnitTestNodesCraftableColor(2, 'green');
    }
    else{
        setUnitTestNodesCraftableColor(2, 'red');
    }
    status.outputNodes    = DoCorrectOutputNodesExist();
    if(status.outputNodes){
        setUnitTestNodesOutputColor(2, 'green');
    }
    else{
        setUnitTestNodesOutputColor(2, 'red');
    }
    
    if(status.resourceNodes && status.craftableNodes && status.outputNodes){
        setUnitTestNodesColor(2,'green');
    }
    else{
        setUnitTestNodesColor(2, 'red');
        
        //Enable Debugger Output for Node Types
        $('#debuggerNodeTypes').css('display', 'block');

    }

    //Model Connected Correctly
    status.connectivity = isModelConnectedCorrectly();
    if(status.connectivity){
        setUnitTestConnectedColor(2,'green');
    }
    else{
        setUnitTestConnectedColor(2,'red');
    }

    //Proper Capcity
    status.capacity = ItemCapcityCorrect();
    if(status.capacity){
        setUnitTestCapacityColor(2, 'green');
    }
    else{
        setUnitTestCapacityColor(2, 'red');
    }
    

    //Custom Node Exist
    status.custom = DoesCustomNodeExist();
    if(status.custom){
        setUnitTestCustonColor(2,'green');
    }
    else{
        setUnitTestCustonColor(2,'red');
    }

    BB.States.Task2.complete =  status.resourceNodes && 
                                status.craftableNodes && 
                                status.outputNodes && 
                                status.connectivity && 
                                status.capacity && 
                                status.custom;

    return BB.States.Task2.complete;
}


//
//  Global Functions
//
var AllTaskComplete = function(){
    return  BB.States.Task1.complete &&
            BB.States.Task2.complete;
}

var ParseTree = function(){

    //Clear Tree
    BB.tree.Nodes.length    = 0;
    BB.tree.Resource.length = 0;
    BB.tree.Crafter.length  = 0;
    BB.tree.Output.length   = 0;

    //Get Nodes in Editor
    var nodes = BB.editor.nodes;

    //Loop through Editor nodes to build tree
    nodes.forEach(el => {
        //Get Node information
        var node =  {   node: el,
                        id: el.id,
                        name: el.data.resource.name,
                        capacity: el.data.perHour,
                        type: el.name,
                        inputs: [],
                        outputs: []
                    }
            //Get input Node IDs
            if(el.data.inputTree){
                el.data.inputTree.forEach(n => node.inputs.push(n.nodeId));
            }

            //Get output Node IDs
            if(el.outputs){
                el.outputs.forEach(n => {
                    node.outputs.push(n.node.id);
                });
            }
            

        //Save node into array
        BB.tree.Nodes[node.id] = node;

        if(el.name === "Crafter"){
            BB.tree.Crafter.push(node);  
        }
        else if(el.name === "Resource"){
            BB.tree.Resource.push(node);
        }
        else if(el.name === "Output")
        {
            BB.tree.Output.push(node);
        }
    });

}
//
//  Debugger
//
var ClearDebugger = function(){
    $('#debuggerNodeTypes').css('display', 'none');
    $('#debuggerOutputNode').css('display', 'none');
    $('#debuggerCraftableNode').css('display', 'none');
    $('#debuggerResourceNode').css('display', 'none');
    
    $('#debuggerConnectivity').css('display', 'none');
    $('#debuggerMissingConncections').css('display', 'none');

    $('#debuggerCapacity').css('display', 'none');
    $('#debuggerCapacityInputMissing').css('display', 'none');
    $('#debuggerCapacityTooHigh').css('display', 'none');
    $('#debuggerCapacityTooLow').css('display', 'none');
    
    
    $('#debuggerCustomNode').css('display', 'none');
    $('#debuggerMissingCustomNode').css('display', 'none');
}


//
//  Unit Test
//

//Proper Nodes in Model
var DoCorrectOutputNodesExist = function(test){
    var outputNodeMissing = true;
    var incorrectOutputNode = true;

    //Debugging
    //BB.tree = BB.treePlanksCorrect; //Correct Planks Test
    //BB.tree = BB.treePlanksNoOutpout;  //Missing Output Planks node in MFP
    //BB.tree = BB.treePlanksWrongOutput; //Wrong output node

    
    if(test.outputNodes){   //Are there output nodes in test?
        incorrectOutputNode = true;
        
        test.outputNodes.forEach(testNode => {  //loop through each test condition
            let match = false;  //default to no match
            
            if(BB.tree.Output.length > 0){  //Does MFP have output nodes?
                BB.tree.Output.filter(mfpNode => {return mfpNode != undefined}).forEach(mfpNode =>{ //loop through all output nodes in mfp
                    if(!match){ //If you haven't found a match, keep testing
                        match = mfpNode.name.toUpperCase() === testNode.toUpperCase();
                        incorrectOutputNode = !match;
                    }
                })
            }
            else{ //No output nodes in MFP, missing output node error
                incorrectOutputNode = false;
                outputNodeMissing = true;
                return false;

            }
           
            if(!match) { // No match was found on this loop, exit loop and return false 
                incorrectOutputNode = true;
                outputNodeMissing = false;
                return false;
            }
            else{   //Match was found, output node is not missing
                outputNodeMissing = false;
            }

        });
    }
    else{   //no output nodes needed, test pass
        
        outputNodeMissing = false;
        incorrectOutputNode = false;
    }

    //Is Output Node is Missing?
    if(outputNodeMissing){
        $('#debuggerMissingOutputNode').css('display', 'block');
    }
    else{
        $('#debuggerMissingOutputNode').css('display', 'none');
    }


    //Correct Output Node?
    if(incorrectOutputNode){
        $('#debuggerIncorrectOutputNode').css('display', 'block');
    }
    else{
        $('#debuggerIncorrectOutputNode').css('display', 'none');
    }

    //Enable Debugger Results for Output Node
    if(outputNodeMissing || incorrectOutputNode){
        $('#debuggerOutputNode').css('display', 'block');
    }
    else{
        $('#debuggerOutputNode').css('display', 'none');
    }
    

    return !outputNodeMissing && !incorrectOutputNode;
};
var DoCorrectCraftableNodesExist = function(test){
    var nodeMissing = true;
    var incorrectNode = true;

    //BB.tree = BB.treePlanksCorrect; //Correct Planks Test

    if(test.craftableNodes){   //Are there output nodes in test?
        incorrectNode = true;
        
        test.craftableNodes.forEach(testNode => {  //loop through each test condition
            let match = false;  //default to no match
            
            if(BB.tree.Crafter.length > 0){  //Does MFP have output nodes?
                BB.tree.Crafter.filter(mfpNode => {return mfpNode != undefined}).forEach(mfpNode =>{ //loop through all output nodes in mfp
                    if(!match){ //If you haven't found a match, keep testing
                        match = mfpNode.name.toUpperCase() === testNode.toUpperCase();
                        incorrectNode = !match;
                    }
                })
            }
            else{ //No output nodes in MFP, missing output node error
                incorrectNode = false;
                nodeMissing = true;
                return false;

            }
           
            if(!match) { // No match was found on this loop, exit loop and return false 
                incorrectNode = true;
                nodeMissing = false;
                return false;
            }
            else{   //Match was found, output node is not missing
                nodeMissing = false;
            }

        });
    }
    else{   //no output nodes needed, test pass
        
        nodeMissing = false;
        incorrectNode = false;
    }

    //Is Output Node is Missing?
    if(nodeMissing){
        $('#debuggerMissingCraftableNode').css('display', 'block');
    }
    else{
        $('#debuggerMissingCraftableNode').css('display', 'none');
    }

    //Correct Output Node?
    if(incorrectNode){
        $('#debuggerIncorrectCraftableNode').css('display', 'block');
    }
    else{
        $('#debuggerIncorrectCraftableNode').css('display', 'none');
    }

    //Enable Debugger Results for Output Node
    if(nodeMissing || incorrectNode){
        $('#debuggerCraftableNode').css('display', 'block');
    }
    else{
        $('#debuggerCraftableNode').css('display', 'none');
    }
    

    return !nodeMissing && !incorrectNode;
};
var DoCorrectResourceNodesExist = function(test){
    var nodeMissing = false;
    var incorrectNode = false;

    //BB.tree = BB.treePlanksCorrect; //Correct Planks Test

    if(test.resourceNodes){   //Are there output nodes in test?
        incorrectNode = true;
        
        test.resourceNodes.forEach(testNode => {  //loop through each test condition
            let match = false;  //default to no match
            
            if(BB.tree.Resource.length > 0){  //Does MFP have output nodes?
                BB.tree.Resource.filter(mfpNode => {return mfpNode != undefined}).forEach(mfpNode =>{ //loop through all output nodes in mfp
                    if(!match){ //If you haven't found a match, keep testing
                        match = mfpNode.name.toUpperCase() === testNode.toUpperCase();
                        incorrectNode = !match;
                    }
                })
            }
            else{ //No output nodes in MFP, missing output node error
                incorrectNode = false;
                nodeMissing = true;
                return false;

            }
           
            if(!match) { // No match was found on this loop, exit loop and return false 
                incorrectNode = true;
                nodeMissing = false;
                return false;
            }
            else{   //Match was found, output node is not missing
                nodeMissing = false;
            }

        });
    }
    else{   //no output nodes needed, test pass
        
        nodeMissing = false;
        incorrectNode = false;
    }

    //Is Output Node is Missing?
    if(nodeMissing){
        $('#debuggerMissingResourceNode').css('display', 'block');
    }
    else{
        $('#debuggerMissingResourceNode').css('display', 'none');
    }

    //Correct Output Node?
    if(incorrectNode){
        $('#debuggerIncorrectResourceNode').css('display', 'block');
    }
    else{
        $('#debuggerIncorrectResourceNode').css('display', 'none');
    }

    //Enable Debugger Results for Output Node
    if(nodeMissing || incorrectNode){
        $('#debuggerResourceNode').css('display', 'block');
    }
    else{
        $('#debuggerResourceNode').css('display', 'none');
    }
    

    return !nodeMissing && !incorrectNode;
};

//Model Connected Correctly
var isModelConnectedCorrectly = function(test){
    return true;
};

//Proper Capcity
var ItemCapcityCorrect = function(test){

    var inputMissing = false;
    var inputTooHigh = false;
    var inputTooLow  = false;


    if(test.capacity){   //Are there output nodes in test?
        inputMissing = true;
        
        test.capacity.forEach(testNode => {  //loop through each test condition
            let match = false;  //default to no match
            
            if(BB.tree.Nodes.length > 0){  //Does MFP have nodes?
                BB.tree.Nodes.filter(mfpNode => {return mfpNode != undefined}).forEach(mfpNode =>{ //loop through all output nodes in mfp
                    
                    if(!match){ //If you haven't found a match, keep testing
                        match = mfpNode.name.toUpperCase() === testNode.name.toUpperCase();
                        if(match){ // Match found, run unit test
                            if(mfpNode.capacity && !isNaN(mfpNode.capacity) && isFinite(mfpNode.capacity)){//Is capcity NaN or Infinite?
                                if(mfpNode.capacity > testNode.amount){ //Capacity too high
                                    inputTooHigh = true;
                                }
                                else if(mfpNode.capacity < testNode.amount){ //Capacity too low
                                    inputTooLow = true;
                                }
                                else{   //Capacity Correct
                                    inputTooHigh = false;
                                    inputTooLow  = false;
                                }
                            }
                            else{   // Capacity is missing
                                inputMissing = true;
                                return false;
                            }
                            
                        }
                        //No matching nodes, input is missing
                        inputMissing = !match;
                    }
                })
            }
            else{ //No nodes in MFP, missing output node error
                inputMissing   = true;
                inputTooHigh    = false;
                inputTooLow     = false;
                return false;

            }
           
            if(!match) { // No match was found on this loop, exit loop and return false 
                inputMissing   = true;
                inputTooHigh    = false;
                inputTooLow     = false;
                return false;
            }
            // else{   //Match was found, node is not missing
            //     inputMissing = false;
            // }

        });
    }
    else{   //no output nodes needed, test pass
        
        inputMissing    = false;
        inputTooHigh    = false;
        inputTooLow     = false;
    }


    //Is Output Node is Missing?
    if(inputMissing){
        $('#debuggerCapacityInputMissing').css('display', 'block');
    }
    else{
        $('#debuggerCapacityInputMissing').css('display', 'none');
    }

    //Correct Output Node?
    if(inputTooHigh){
        $('#debuggerCapacityTooHigh').css('display', 'block');
    }
    else{
        $('#debuggerCapacityTooHigh').css('display', 'none');
    }

    if(inputTooLow){
        $('#debuggerCapacityTooLow').css('display', 'block');
    }
    else{
        $('#debuggerCapacityTooLow').css('display', 'none');
    }

    //Enable Debugger Results for Output Node
    if(inputMissing || inputTooHigh || inputTooLow){
        $('#debuggerCapacity').css('display', 'block');
    }
    else{
        $('#debuggerCapacity').css('display', 'none');
    }
    
    test.Results.Capacity.high = inputTooHigh;
    test.Results.Capacity.low  = inputTooLow;
    test.Results.Capacity.missing = inputMissing;

    return !inputTooHigh && !inputTooLow && !inputMissing;
};

//Custom Node Exist
var DoesCustomNodeExist = function(test){
    return true;
};

// ***************************************** */
//
//          TASK BUTTON EVENTS
//
//****************************************** */

//  TASK 1 EVENT
//
$('#task1Claim').on('click', function () {
    //Enable Task 1
    BB.FSM.Transition('Task1');
  })
$('#task1Submit').on('click', function () {
    //Run Unit Test for Task
    BB.FSM.Update();
})

//  TASK 2 EVENT
//
$('#task2Claim').on('click', function () {
    //Enable Task 1
    BB.FSM.Transition('Task2');
  })
$('#task2Submit').on('click', function () {
    //Run Unit Test for Task
    BB.FSM.Update();
})

//  TASK 3 EVENT
//
$('#task3Claim').on('click', function () {
    //Enable Task 1
    BB.FSM.Transition('Task3');
  })
$('#task3Submit').on('click', function () {
    //Run Unit Test for Task
    BB.FSM.Update();
})

//  TASK 4 EVENT
//
$('#task4Claim').on('click', function () {
    //Enable Task 1
    BB.FSM.Transition('Task4');
  })
$('#task4Submit').on('click', function () {
    //Run Unit Test for Task
    BB.FSM.Update();
})

// ***************************************** */
//
//          UNIT TEST BUTTON EVENTS
//
//****************************************** */
$('#exeTask1UnitTest').on('click', function () {
    //Run Task 1 Unit Test
    BB.States.Task1.RunUnitTest();
  });
$('#exeTask2UnitTest').on('click', function () {
    //Run Task 2 Unit Test
    BB.States.Task2.RunUnitTest();
})
$('#exeTask3UnitTest').on('click', function () {
    //Run Task 3 Unit Test
    BB.States.Task3.RunUnitTest();
})
$('#exeTask4UnitTest').on('click', function () {
    //Run Task 4 Unit Test
    BB.States.Task4.RunUnitTest();
})


BB.Load();