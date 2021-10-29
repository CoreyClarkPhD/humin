var Chat  = Chat ? Chat : {};

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

//  scrolls message area to bottom
function showLatestMessage(element) {
    //$('.responsive-html5-chat').find('.messages').scrollTop($('.responsive-html5-chat .messages')[0].scrollHeight);
    $('.responsive-html5-chat').find('.messages').animate({scrollTop: $('.responsive-html5-chat .messages')[0].scrollHeight},1 * 1000);
}

//
//
//      Chat functions
//
//

//  Adds chat box to element, call on initialization
//
function responsiveChat(element) {
    $(element).html('<form class="chat"><span id="spanner"></span><div class="messages"></div><div id="chatinput" class="chatinputbox"><input id="textinput" type="text" placeholder="Your message"><input type="submit" value="Send"></div></form>');

    function showLatestMessage(element) {
      //$('.responsive-html5-chat').find('.messages').scrollTop($('.responsive-html5-chat .messages')[0].scrollHeight);
      $('.responsive-html5-chat').find('.messages').animate({scrollTop: $('.responsive-html5-chat .messages')[0].scrollHeight},1000);
    }
    showLatestMessage(element);

    $(element + ' input[type="text"]').keypress(function (event) {
    //$('textinput').keypress(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            $(element + ' input[type="submit"]').click();
        }
    });
    $(element + ' input[type="submit"]').click(function (event) {
    //$('chatwindow').click(function (event) {
        event.preventDefault();
        var message = $(element + ' input[type="text"]').val();
        if ($(element + ' input[type="text"]').val()) {
            var currentDate = getCurrentTime();

            $(element + ' div.messages').append(
                '<div class="message"><div class="myMessage"><p>' +
                message +
                "</p><date>" +
                currentDate +
                "</date></div></div>"
            );
            setTimeout(function () {
                //$(element + ' > span').addClass("spinner");
                $('#spanner').addClass("spinner");
            }, 100);
            setTimeout(function () {
                //$(element + ' > span').removeClass("spinner");
                $('#spanner').removeClass("spinner");
            }, 1500);
        }
        $(element + ' input[type="text"]').val("");
        showLatestMessage(element);
    });
}


/* // Message sending inputs:

    // element =  element class to append too (.chat)
    // sender = name to be displayed
    //origin  = "me", makes it local, anything else makes it from another person
    //date = date string for message
    //message/htmlmessage = string or html code to place in message,
    //time = amount of seconds to show dots
    //callback =  function to callback when html code has loaded (needed to setup anysort of events on html)
*/

    // Send stirng data, with delay for dots
function responsiveChatPush(element, sender, origin, date, message, time, callback) {

    $(element + ' .messages').append('<div id="dots" class="dotWrapper"><div class="dots"></div></div>');
    showLatestMessage(element);
    setTimeout(function(){
        $('#dots').remove();
        var originClass;
        if (origin == 'me') {
            originClass = 'myMessage';
        } else {
            originClass = 'fromThem';
        }
        $(element + ' .messages').append('<div class="message"><div class="' + originClass + '"><p>' + message + '</p><date><b>' + sender + '</b> ' + date + '</date></div></div>');
        showLatestMessage(element);
        if(callback){callback();}
    }, time * 1000);
}

    //Send html code for message, with dealy for dots
function responsiveChatHTMLPush(element, sender, origin, date, htmlmessage, time, callback) {
    $(element + ' .messages').append('<div id="dots" class="dotWrapper"><div class="dots"></div></div>');
    showLatestMessage(element);
    setTimeout(function(){
        $('#dots').remove();
        var originClass;
        if (origin == 'me') {
            originClass = 'myMessage';
        } else {
            originClass = 'fromThem';
        }
        $(element + ' .messages').append('<div class="message"><div class="' + originClass + '">' + htmlmessage + '<date><b>' + sender + '</b> ' + date + '</date></div></div>');
        if(callback){callback();}
    }, time * 1000);
    
    showLatestMessage(element);
}

    // Send stirng data, no delay for dots    
function responsiveChatNoDotsPush(element, sender, origin, date, message) {
    var originClass;
    if (origin == 'me') {
        originClass = 'myMessage';
    } else {
        originClass = 'fromThem';
    }
    //showLatestMessage(element);
    $(element + ' .messages').append('<div class="message"><div class="' + originClass + '"><p>' + message + '</p><date><b>' + sender + '</b> ' + date + '</date></div></div>');
    
}

    // Send html code, no delay for dots 
function responsiveChatNoDotsHTMLPush(element, sender, origin, date, htmlmessage, callback) {
    showLatestMessage(element);
    var originClass;
    if (origin == 'me') {
        originClass = 'myMessage';
    } else {
        originClass = 'fromThem';
    }
    $(element + ' .messages').append('<div class="message"><div class="' + originClass + '">' + htmlmessage + '<date><b>' + sender + '</b> ' + date + '</date></div></div>');
    if(callback){callback();}
    showLatestMessage(element);

}

//Simplified user interface, wraps calls above
Chat.ShowLatestMessage = function(){
    showLatestMessage('.chat');
}
Chat.Send = {
    Message: function(name, message){
        responsiveChatNoDotsPush('.chat', name, 'me', getCurrentTime(), message);
    },
    HTML: function(name, htmlmessage, callback){
        responsiveChatNoDotsHTMLPush('.chat', name, 'me', getCurrentTime(), htmlmessage, callback);
    }
}
Chat.Recv = {
    Message: function(name, message, delay, callback){
        responsiveChatPush('.chat', name, 'you', getCurrentTime(), message, delay, callback)
    },
    MessageNoDelay: function(name,message ){
        responsiveChatNoDotsPush('.chat', name, "you", getCurrentTime(), message)
    },
    HTML: function(name, htmlmessage, delay, callback ){
        responsiveChatHTMLPush('.chat', name, 'you', getCurrentTime(), htmlmessage, delay, callback);
    },
    HTMLNoDelay: function(name, htmlmessage, callback){
        responsiveChatNoDotsHTMLPush('.chat', name, 'you', getCurrentTime(), htmlmessage, callback);
    }
}

Chat.FSM = new CFiniteStateMachine(Chat);

//States will be created in assignment specific code.
Chat.States = {};

Chat.Load = function(){
    /* Activating chatbox on element */
    responsiveChat('.responsive-html5-chat');

    
}




/*
Original Chat HTML design by: 

Name    : Responsive HTML5 Chat

Responsive HTML5 Chat helps you to create useful chatbox on your website easly. 
You can change skin and sizes. You can read the installation and support documentation 
before you begin. If you do not find the answer, do not hesitate to send a message to me.

Owner   : Vatanay Ozbeyli
Web     : www.vatanay.com
Support : hi@vatanay.com

*/