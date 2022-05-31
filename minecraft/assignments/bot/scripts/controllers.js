const params = new URLSearchParams(window.location.search);
console.log(document.referrer);


BB.stateNumber = 0;

//
//  Task 1: Build Plank Contraption
//
BB.States.Task1 = new CState("Task1");

BB.States.Task1.Enter = function(){
    
    //Enable the task to be submitted
    $('#task1Submit').removeClass('disabled')

    //Enable Unit Test for Task 1
    $('#unitTestTask1').removeClass('hide')

    //Enable Debugger for Task 1
    
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
    $('#task1Submit').addClass('disabled')

    //Enable Unit Test for Task 1
    $('#unitTestTask1').addClass('hide')

    //Enable Debugger for Task 1
    

}
BB.States.Task1.complete = false;
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
    
    var status = BB.States.Task1.UnitTestStatus;
    //Proper Nodes in Model
    status.resourceNodes   = DoCorrectResourceNodesExist();
    if(status.resourceNodes){
        setUnitTestNodesResourceColor(1,'green');
    }
    else{
        setUnitTestNodesResourceColor(1,'red');
    }
    status.craftableNodes = DoCorrectCraftableNodesExist();
    if(status.craftableNodes){
        setUnitTestNodesCraftableColor(1, 'green');
    }
    else{
        setUnitTestNodesCraftableColor(1, 'red');
    }
    status.outputNodes    = DoCorrectOutputNodesExist();
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
    }

    //Model Connected Correctly
    status.connectivity = isModelConnectedCorrectly();
    if(status.connectivity){
        setUnitTestConnectedColor(1,'green');
    }
    else{
        setUnitTestConnectedColor(1,'red');
    }

    //Proper Capcity
    status.capacity = ItemCapcityCorrect();
    if(status.capacity){
        setUnitTestCapacityColor(1, 'green');
    }
    else{
        setUnitTestCapacityColor(1, 'red');
    }
    

    //Custom Node Exist
    status.custom = DoesCustomNodeExist();
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
    $('#task2Submit').removeClass('disabled')

    //Enable Unit Test for Task 1
    $('#unitTestTask2').removeClass('hide')

    //Enable Debugger for Task 1
    
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
    $('#task2Submit').addClass('disabled')

    //Enable Unit Test for Task 2
    $('#unitTestTask2').addClass('hide')

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
    status.resourceNodes   = DoCorrectResourceNodesExist();
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

//
//  Unit Test
//

//Proper Nodes in Model
var DoCorrectResourceNodesExist = function(){
    return true;
};
var DoCorrectCraftableNodesExist = function(){
    return true;
};
var DoCorrectOutputNodesExist = function(){
    return true;
};

//Model Connected Correctly
var isModelConnectedCorrectly = function(){
    return true;
};

//Proper Capcity
var ItemCapcityCorrect = function(){
    return true;
};

//Custom Node Exist
var DoesCustomNodeExist = function(){
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