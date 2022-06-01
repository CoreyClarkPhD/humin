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
    $('#task1Submit').show();
    $('#task1Submit').prop("disabled", false);

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
        BB.editor.clear();
    }
    else if(BB.States.Task1.complete){
        //Show completed modeal
        $('#passedUnitTestModal').modal('show');
        
        //Clear Editor for next task
        BB.editor.clear();
    }
    else{
        $('#failedUnitTestModal').modal('show');
    }

}
BB.States.Task1.Exit = function(){
    //Disable Task 1 Content
    $('#task1Submit').prop("disabled", true);
    $('#task1Submit').hide();

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
    connections:[
        {   src: 'logs',
            dest: 'planks'
        },
        {   src: 'planks',
            dest: 'planks'
        },
    ],
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
        },
        Connected:{
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
    // BB.tree = BB.treePlanksNoOutput;  //Missing Output Planks node in MFP
    //  BB.tree = BB.treePlanksWrongOutput; //Wrong output node
    // BB.tree = BB.treePlanksWrongCapacity;
    // BB.tree = BB.treePlanksInfiniteCapacity;
    // BB.tree = BB.treeMissingConnection;
    // BB.tree = BB.treeDiamondPixAxeCorrect;

    //Build Node Tree
    ParseTree();
    
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
    // status.custom = DoesCustomNodeExist(BB.States.Task1.TestConditions);
    // if(status.custom){
    //     setUnitTestCustonColor(1,'green');
    // }
    // else{
    //     setUnitTestCustonColor(1,'red');
    // }

    BB.States.Task1.complete =  status.resourceNodes && 
                                status.craftableNodes && 
                                status.outputNodes && 
                                status.connectivity && 
                                //status.custom &&
                                status.capacity;

    return BB.States.Task1.complete;
}

//
//  Task 2: Build Stick Contraption
//
BB.States.Task2 = new CState("Task2");

BB.States.Task2.Enter = function(){
    //Enable the task to be submitted
    $('#task2Submit').prop("disabled", false)
    $('#task2Submit').show();

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
        BB.editor.clear();
    }
    else if(BB.States.Task2.complete){
        //Show complteted modal
        $('#passedUnitTestModal').modal('show');

        //Clear Editor for next task
        BB.editor.clear();
    }
    else{
        $('#failedUnitTestModal').modal('show');
    }
    
    
}
BB.States.Task2.Exit = function(){
    //Disable Task 2 Content
    $('#task2Submit').prop("disabled", true)
    $('#task2Submit').hide();

    //Enable Unit Test for Task 2
    $('#unitTestTask2').css('display', 'none');

    //Enable Debugger for Task 2
    
}
BB.States.Task2.complete = false;
BB.States.Task2.TestConditions = {
    resourceNodes: ['logs'],
    craftableNodes: ['planks', 'sticks'],
    outputNodes:    ['sticks'],
    capacity:[
        {name: 'sticks',
        amount: 32}
    ],
    connections:[
        {   src: 'logs',
            dest: 'planks'
        },
        {   src: 'planks',
            dest: 'sticks'
        },
        {   src: 'sticks',
            dest: 'sticks'
        },
    ],
    customNode: 'stick_contraption',
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
        },
        Connected:{
            missing: false
        }
    }
}
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
    
    //Build Node Tree
    ParseTree();
    
    var status = BB.States.Task2.UnitTestStatus;
    //Proper Nodes in Model
    status.resourceNodes   = DoCorrectResourceNodesExist(BB.States.Task2.TestConditions);
    if(status.resourceNodes){
        setUnitTestNodesResourceColor(2,'green');
    }
    else{
        setUnitTestNodesResourceColor(2,'red');
    }
    status.craftableNodes = DoCorrectCraftableNodesExist(BB.States.Task2.TestConditions);
    if(status.craftableNodes){
        setUnitTestNodesCraftableColor(2, 'green');
    }
    else{
        setUnitTestNodesCraftableColor(2, 'red');
    }
    status.outputNodes    = DoCorrectOutputNodesExist(BB.States.Task2.TestConditions);
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
    status.connectivity = isModelConnectedCorrectly(BB.States.Task2.TestConditions);
    if(status.connectivity){
        setUnitTestConnectedColor(2,'green');
    }
    else{
        setUnitTestConnectedColor(2,'red');
    }

    //Proper Capcity
    status.capacity = ItemCapcityCorrect(BB.States.Task2.TestConditions);
    if(status.capacity){
        setUnitTestCapacityColor(2, 'green');
    }
    else{
        setUnitTestCapacityColor(2, 'red');
    }
    

    //Custom Node Exist
    // status.custom = DoesCustomNodeExist(BB.States.Task2.TestConditions);
    // if(status.custom){
    //     setUnitTestCustonColor(2,'green');
    // }
    // else{
    //     setUnitTestCustonColor(2,'red');
    // }

    BB.States.Task2.complete =  status.resourceNodes && 
                                status.craftableNodes && 
                                status.outputNodes && 
                                status.connectivity && 
                                //status.custom &&
                                status.capacity; 
                                

    return BB.States.Task2.complete;
}

//
//  Task 3: Build Diamond Axe Contraption
//
BB.States.Task3 = new CState("Task3");

BB.States.Task3.Enter = function(){
    //Enable the task to be submitted
    $('#task3Submit').prop("disabled", false)
    $('#task3Submit').show();

    //Enable Unit Test for Task 1
    $('#unitTestTask3').css('display', 'block');

    //Enable Debugger for Task 1
    ClearDebugger();
}
BB.States.Task3.Execute = function(){
    //Run Unit Test
    BB.States.Task3.complete = BB.States.Task3.RunUnitTest();

    //Alert User on Unit Test Results
        //Test to see if all Task are Complete
    if(AllTaskComplete()){
        $('#allTaskCompleteModal').modal('show');
        BB.editor.clear();
    }
    else if(BB.States.Task3.complete){
        //Show complteted modal
        $('#passedUnitTestModal').modal('show');

        //Clear Editor for next task
        BB.editor.clear();
    }
    else{
        $('#failedUnitTestModal').modal('show');
    }
    
    
}
BB.States.Task3.Exit = function(){
    //Disable Task 3 Content
    $('#task3Submit').prop("disabled", true)
    $('#task3Submit').hide();

    //Enable Unit Test for Task 3
    $('#unitTestTask3').css('display', 'none');

    //Enable Debugger for Task 3
    
}
BB.States.Task3.complete = false;
BB.States.Task3.TestConditions = {
    resourceNodes: ['logs','diamond'],
    craftableNodes: ['planks', 'sticks', 'diamond axe'],
    outputNodes:    ['diamond axe'],
    capacity:[
        {name: 'diamond axe',
        amount: 2}
    ],
    connections:[
        {   src: 'logs',
            dest: 'planks'
        },
        {   src: 'planks',
            dest: 'stick'
        },
        {   src: 'diamond',
            dest: 'diamond axe'
        },
        {   src: 'stick',
            dest: 'diamond axe'
        },
        {   src: 'diamond axe',
            dest: 'diamond axe'
        },
    ],
    customNode: 'axe_contraption',
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
        },
        Connected:{
            missing: false
        }
    }
}
BB.States.Task3.UnitTestStatus = {
    resourceNodes: false,
    craftableNodes: false,
    outputNodes: false,
    connectivity: false,
    capacity: false,
    custom: false
}
BB.States.Task3.RunUnitTest = function(){
    console.log("running task 3 unit test");
    //Debugging
    // BB.tree = BB.treeDiamondPixAxeCorrect;

    //Build Node Tree
    ParseTree();
    
    var status = BB.States.Task3.UnitTestStatus;
    //Proper Nodes in Model
    status.resourceNodes   = DoCorrectResourceNodesExist(BB.States.Task3.TestConditions);
    if(status.resourceNodes){
        setUnitTestNodesResourceColor(3,'green');
    }
    else{
        setUnitTestNodesResourceColor(3,'red');
    }
    status.craftableNodes = DoCorrectCraftableNodesExist(BB.States.Task3.TestConditions);
    if(status.craftableNodes){
        setUnitTestNodesCraftableColor(3, 'green');
    }
    else{
        setUnitTestNodesCraftableColor(3, 'red');
    }
    status.outputNodes    = DoCorrectOutputNodesExist(BB.States.Task3.TestConditions);
    if(status.outputNodes){
        setUnitTestNodesOutputColor(3, 'green');
    }
    else{
        setUnitTestNodesOutputColor(3, 'red');
    }
    
    if(status.resourceNodes && status.craftableNodes && status.outputNodes){
        setUnitTestNodesColor(3,'green');
    }
    else{
        setUnitTestNodesColor(3, 'red');
        
        //Enable Debugger Output for Node Types
        $('#debuggerNodeTypes').css('display', 'block');

    }

    //Model Connected Correctly
    status.connectivity = isModelConnectedCorrectly(BB.States.Task3.TestConditions);
    if(status.connectivity){
        setUnitTestConnectedColor(3,'green');
    }
    else{
        setUnitTestConnectedColor(3,'red');
    }

    //Proper Capcity
    status.capacity = ItemCapcityCorrect(BB.States.Task3.TestConditions);
    if(status.capacity){
        setUnitTestCapacityColor(3, 'green');
    }
    else{
        setUnitTestCapacityColor(3, 'red');
    }
    

    //Custom Node Exist
    // status.custom = DoesCustomNodeExist(BB.States.Task2.TestConditions);
    // if(status.custom){
    //     setUnitTestCustonColor(2,'green');
    // }
    // else{
    //     setUnitTestCustonColor(2,'red');
    // }

    BB.States.Task3.complete =  status.resourceNodes && 
                                status.craftableNodes && 
                                status.outputNodes && 
                                status.connectivity && 
                                //status.custom &&
                                status.capacity; 
                                

    return BB.States.Task3.complete;
}

//
//  Task 4: Build Chest Contraption
//
BB.States.Task4 = new CState("Task4");

BB.States.Task4.Enter = function(){
    //Enable the task to be submitted
    $('#task4Submit').prop("disabled", false)
    $('#task4Submit').show();

    //Enable Unit Test for Task 1
    $('#unitTestTask4').css('display', 'block');

    //Enable Debugger for Task 1
    ClearDebugger();
}
BB.States.Task4.Execute = function(){
    //Run Unit Test
    BB.States.Task4.complete = BB.States.Task4.RunUnitTest();

    //Alert User on Unit Test Results
        //Test to see if all Task are Complete
    if(AllTaskComplete()){
        $('#allTaskCompleteModal').modal('show');
        BB.editor.clear();
    }
    else if(BB.States.Task4.complete){
        //Show complteted modal
        $('#passedUnitTestModal').modal('show');

        //Clear Editor for next task
        BB.editor.clear();
    }
    else{
        $('#failedUnitTestModal').modal('show');
    }
    
    
}
BB.States.Task4.Exit = function(){
    //Disable Task 4 Content
    $('#task4Submit').prop("disabled", true)
    $('#task4Submit').hide();

    //Enable Unit Test for Task 4
    $('#unitTestTask4').css('display', 'none');

    //Enable Debugger for Task 4
    
}
BB.States.Task4.complete = false;
BB.States.Task4.TestConditions = {
    resourceNodes: ['logs'],
    craftableNodes: ['planks', 'chest'],
    outputNodes:    ['chest'],
    capacity:[
        {name: 'chest',
        amount: 10}
    ],
    connections:[
        {   src: 'logs',
            dest: 'planks'
        },
        {   src: 'planks',
            dest: 'chest'
        },
        {   src: 'chest',
            dest: 'chest'
        }
    ],
    customNode: 'chest_contraption',
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
        },
        Connected:{
            missing: false
        }
    }
}
BB.States.Task4.UnitTestStatus = {
    resourceNodes: false,
    craftableNodes: false,
    outputNodes: false,
    connectivity: false,
    capacity: false,
    custom: false
}
BB.States.Task4.RunUnitTest = function(){
    console.log("running task 4 unit test");
    //Debugging
    // BB.tree = BB.treeChestCorrect;
    
    //Build Node Tree
    ParseTree();
    
    var status = BB.States.Task4.UnitTestStatus;
    //Proper Nodes in Model
    status.resourceNodes   = DoCorrectResourceNodesExist(BB.States.Task4.TestConditions);
    if(status.resourceNodes){
        setUnitTestNodesResourceColor(4,'green');
    }
    else{
        setUnitTestNodesResourceColor(4,'red');
    }
    status.craftableNodes = DoCorrectCraftableNodesExist(BB.States.Task4.TestConditions);
    if(status.craftableNodes){
        setUnitTestNodesCraftableColor(4, 'green');
    }
    else{
        setUnitTestNodesCraftableColor(4, 'red');
    }
    status.outputNodes    = DoCorrectOutputNodesExist(BB.States.Task4.TestConditions);
    if(status.outputNodes){
        setUnitTestNodesOutputColor(4, 'green');
    }
    else{
        setUnitTestNodesOutputColor(4, 'red');
    }
    
    if(status.resourceNodes && status.craftableNodes && status.outputNodes){
        setUnitTestNodesColor(4,'green');
    }
    else{
        setUnitTestNodesColor(4, 'red');
        
        //Enable Debugger Output for Node Types
        $('#debuggerNodeTypes').css('display', 'block');

    }

    //Model Connected Correctly
    status.connectivity = isModelConnectedCorrectly(BB.States.Task4.TestConditions);
    if(status.connectivity){
        setUnitTestConnectedColor(4,'green');
    }
    else{
        setUnitTestConnectedColor(4,'red');
    }

    //Proper Capcity
    status.capacity = ItemCapcityCorrect(BB.States.Task4.TestConditions);
    if(status.capacity){
        setUnitTestCapacityColor(4, 'green');
    }
    else{
        setUnitTestCapacityColor(4, 'red');
    }
    

    //Custom Node Exist
    // status.custom = DoesCustomNodeExist(BB.States.Task2.TestConditions);
    // if(status.custom){
    //     setUnitTestCustonColor(2,'green');
    // }
    // else{
    //     setUnitTestCustonColor(2,'red');
    // }

    BB.States.Task4.complete =  status.resourceNodes && 
                                status.craftableNodes && 
                                status.outputNodes && 
                                status.connectivity && 
                                //status.custom &&
                                status.capacity; 
                                

    return BB.States.Task4.complete;
}

//
//  Global Functions
//
var AllTaskComplete = function(){
    return  BB.States.Task1.complete &&
            BB.States.Task2.complete &&
            BB.States.Task3.complete &&
            BB.States.Task4.complete;
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
            // //Get input Node IDs
            // if(el.data.inputTree){
            //     el.data.inputTree.forEach(n => node.inputs.push(n.nodeId));
            // }

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

    BB.tree.Nodes.forEach(n => {
        mfpNode = BB.engine.data.nodes[n.id.toString()];

        //Loop through inputs
        if(Object.keys(mfpNode.inputs).length > 0){
            Object.keys(mfpNode.inputs).forEach(i => {
                mfpNode.inputs[i].connections.forEach( con => {
                    n.inputs.push(con.node);
                })
            })
        }
        

        //Loop through outputs
        if(Object.keys(mfpNode.outputs).length > 0){
            mfpNode.outputs.resource.connections.forEach( con => {
                    n.outputs.push(con.node);
            })
        }
        
    })

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
    var missingConnections = false;

    if(test.connections){   //Are there output nodes in test?
        var totalMatches = 0;
        test.connections.filter(conn => {return conn != undefined}).forEach(con => {  //loop through each test condition
            // console.log(JSON.stringify(con));
            let srcMatch = false;  //default to no match
            BB.tree.Nodes.filter(mfpNode => {return mfpNode != undefined}).forEach(mfpNode =>{ 
                // console.log("   " + mfpNode.name);
                if(!srcMatch){ //Only test if the node hasnt been found in list yet, skip otherwise b/c test is complete for con
                    // console.log("       " + mfpNode.name + ', ' + con.src.toString());
                    if(mfpNode.name.toUpperCase() === con.src.toUpperCase()){ //Find a match between node types
                    
                        if(mfpNode.outputs.length > 0){// Test to make sure output connections exist
                            let destMatch = false;
                            mfpNode.outputs.forEach(out => { //Loop through all outputs
                                // console.log("           " + BB.tree.Nodes[out].name + ', ' + con.dest.toString());
                                if(!destMatch){
                                    if(BB.tree.Nodes[out].name.toUpperCase() === con.dest.toUpperCase()){  // Does output match dest?
                                        destMatch = true;
                                        // console.log("               " + con.src + " to " + con.dest);
                                        totalMatches++;
                                    }
                                }
                                
                            })
                            if(!destMatch){ //Looped through all outputs without a match
                                missingConnections = true;
                            }
                        }
                        else{ //No connection, fail test
                           // missingConnections = true;
                        }
                        
                    }
                }
                
            });

        });
    }

    if(totalMatches != Object.keys(test.connections).length){ //Not all connections were found
        missingConnections = true;
    }

    //Correct Connections?
    if(missingConnections){
        $('#debuggerConnectivity').css('display', 'block');
        $('#debuggerMissingConncections').css('display', 'block');
    }
    else{
        $('#debuggerConnectivity').css('display', 'none');
        $('#debuggerMissingConncections').css('display', 'none');
    }


    test.Results.Connected.missing = missingConnections;
    return !missingConnections; //If missing connection, then NOT connected correctly
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