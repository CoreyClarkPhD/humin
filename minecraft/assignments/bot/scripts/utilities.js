var BB  = BB ? BB : {};

var CFiniteStateMachine = function(cEntity){
    var owner = cEntity;
    var _CurrentState = new CState();
    var self = this;
    var nextName = "";
    var nextMessage = "";
    var _Enter = function(oMessage){
        _CurrentState.Enter(owner, oMessage);
    }
    
    var _Exit = function(oMessage){
        _CurrentState.Exit(owner, oMessage);
    }
    
    var _Execute = function(oMessage){
        _CurrentState.Execute(owner, oMessage);
    }
    
    //Control Methods
    this.AnimatedTransition = function(sName, oMessage){
        nextName = sName;
        nextMessage = oMessage;
        gtl.app.className = "app flyOut";
        gtl.app.addEventListener('webkitTransitionEnd', gtl.FSM.Animate, false);
    }
    
    this.Animate = function(sName, oMessage){
        //Remove Event Listener
        gtl.app.removeEventListener('webkitTransitionEnd', gtl.FSM.Animate, false);
        
        //Hide Current State Div
        gtl.States[gtl.FSM.GetState()].html.className = "hide";
        
        //Call Exit for Current State
        _Exit(nextMessage);
        
        //Set Next State Visible
        gtl.States[nextName].html.className = "";
        
        //Get New State to Transition Too
        _CurrentState = gtl.States[nextName];
        
        //Transition
        gtl.app.className = "app flyIn";
        
        //Call New States Setup and Exectue Methods
        _Enter(nextMessage);
        _Execute(nextMessage);
    }
    
    this.Transition = function(sName, oMessage){
        //Call Exit for Current State
        _Exit(oMessage);
        
        //Hide Current State Div
        //gtl.States[gtl.FSM.GetState()].html.className = "hide";
        
        //Get New State to Transition Too
        _CurrentState = cEntity.States[sName];
        
        //Set Next State Visible
        //gtl.States[sName].html.className = "";
        
        //Call New States Setup and Exectue Methods
        _Enter(oMessage);
       // _Execute(oMessage);
    }
    this.SetState = function(sName){
        _CurrentState = cEntity.States[sName];
        //cEntity.States[sName].html.className = "";
    }
    this.Update = function(oMessage){
        _Execute(oMessage);
    }
    this.GetState = function(){
        return _CurrentState.GetName();
    }
}

// States for FSM
var CState = function(sName){
    var _name = sName;
    var self = this;
    
    this.Enter = function(cEntity, oMessage){
        //Override this Method
    }
    
    this.Exit = function(cEntity, oMessage){
        //Override this Method
    }
    
    this.Execute = function(cEntity, oMessage){
        //Override this Method
    }
    
    this.GetName = function(){
        return _name;
    }

}

//
//  Utility helper functions
//

//  returns date string in readable format for messages
function getCurrentTime(){
    var d = new Date();
    hours = (d.getHours() % 12) || 12;
    var clock = hours + ":" + d.getMinutes() + " " + (d.getHours() < 12 ? "AM" : "PM");
    //d.getSeconds();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var currentDate =
        (("" + month).length < 2 ? "0" : "") +
        month +    
        " / " +
        (("" + day).length < 2 ? "0" : "") +
        day +
        " / " +
        d.getFullYear() +
        "&nbsp;&nbsp;" +
        clock;

        return currentDate;
}

// Change items in list to Green/Red
var setLineItemGreen = function(id){
    $('#'+ id ).removeClass('list-group-item-danger')
    $('#'+ id ).addClass('list-group-item-success')
}
var setLineItemRed = function(id){
    $('#'+ id ).removeClass('list-group-item-success')
    $('#'+ id ).addClass('list-group-item-danger')
}

//Change Panels Green/Red
var setPanelItemGreen = function(id){
    $('#'+ id ).removeClass('panel-danger')
    $('#'+ id ).addClass('panel-success')
}
var setPanelItemRed = function(id){
    $('#'+ id ).removeClass('panel-success')
    $('#'+ id ).addClass('panel-danger')
}

//
//  Unit Test Color Changes
//

var setUnitTestNodesColor = function(taskID, color){
    if(color.toUpperCase() === 'GREEN'){
        setPanelItemGreen('unitTestTask' + taskID +'NodeTypes');
    }
    else if(color.toUpperCase() === 'RED'){
        setPanelItemRed('unitTestTask' + taskID +'NodeTypes');
    }
}
var setUnitTestNodesResourceColor = function(taskID, color){
    if(color.toUpperCase() === 'GREEN'){
        setLineItemGreen('unitTestTask' + taskID +'ResourceNodes');
    }
    else if(color.toUpperCase() === 'RED'){
        setLineItemRed('unitTestTask' + taskID +'ResourceNodes');
    }
}
var setUnitTestNodesCraftableColor = function(taskID, color){
    if(color.toUpperCase() === 'GREEN'){
        setLineItemGreen('unitTestTask' + taskID +'CraftableNodes');
    }
    else if(color.toUpperCase() === 'RED'){
        setLineItemRed('unitTestTask' + taskID +'CraftableNodes');
    }
}
var setUnitTestNodesOutputColor = function(taskID, color){
    if(color.toUpperCase() === 'GREEN'){
        setLineItemGreen('unitTestTask' + taskID +'OutputNodes');
    }
    else if(color.toUpperCase() === 'RED'){
        setLineItemRed('unitTestTask' + taskID +'OutputNodes');
    }
}
var setUnitTestConnectedColor = function(taskID, color){
    if(color.toUpperCase() === 'GREEN'){
        setPanelItemGreen('unitTestTask' + taskID +'ModelConnected');
    }
    else if(color.toUpperCase() === 'RED'){
        setPanelItemRed('unitTestTask' + taskID +'ModelConnected');
    }
}
var setUnitTestCapacityColor = function(taskID, color){
    if(color.toUpperCase() === 'GREEN'){
        setPanelItemGreen('unitTestTask' + taskID +'Capcity');
    }
    else if(color.toUpperCase() === 'RED'){
        setPanelItemRed('unitTestTask' + taskID +'Capcity');
    }
}
var setUnitTestCustonColor = function(taskID, color){
    if(color.toUpperCase() === 'GREEN'){
        setPanelItemGreen('unitTestTask' + taskID +'CustomNode');
    }
    else if(color.toUpperCase() === 'RED'){
        setPanelItemRed('unitTestTask' + taskID +'CustomNode');
    }
}

BB.FSM = new CFiniteStateMachine(BB);

//States will be created in assignment specific code.
BB.States = {};

BB.Load = function(){
    
    // BB.FSM.Transition('Task1');
    // $('#botContent').toggle();
    // $('#menuTabs li:eq(2) a').tab('show')

    
}