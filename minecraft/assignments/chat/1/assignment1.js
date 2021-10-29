
Chat.Load();
Chat.stateNumber = 0;


Chat.States.Intro = new CState("Intro");

Chat.States.Intro.Enter = function(){
    Chat.stateNumber++;
    
    Chat.Recv.MessageNoDelay('Goodway', 'Hey!  Last night Tiny Town got hit by a really big storm!  They are asking all the towns in the area if we can help with supplies');
    Chat.Recv.MessageNoDelay('Goodway', 'They need us to get: <br>10 Beds, <br>20 Chest <br>100 Planks');
    Chat.Recv.MessageNoDelay('Goodway', 'We will have 1 hour of factory time to produce this order, Can you help me figure out what we are going to need... I have Ryder, our purchasing officer here in my office, he has some questions, maybe you can use the Minecraft'+ 
                                                                'Factory Planner (MFP) to help figure out the answers so we can figure out what is possible.  Here is a link in case you need it: <a href="https://humingamelab.com/minecraft/?id=jZpqv7DLKnygxd7a6XMFOs7gxKjkQR13aXg43CaM" target="_blank"  >MFP</a>');
    Chat.Recv.HTMLNoDelay('Goodway','<form name="ChestResourceForm' + Chat.stateNumber + '">'+ 
                                                    '<p>What Resources do we need for Chest?</p>'+ 
                                                     '  <input type="radio" id="chest_anvil" name="chest_resource" value="Anvils">'+ 
                                                     '  <label for="chest_anvil">Anvil</label><br>'+ 
                                                     '  <input type="radio" id="chest_log" name="chest_resource" value="Logs">'+ 
                                                      ' <label for="chest_log">Logs</label><br>'+ 
                                                     '  <input type="radio" id="chest_stick" name="chest_resource" value="Sticks">'+ 
                                                     '  <label for="chest_stick">Sticks</label><br>'+ 
                                                        '  <input type="radio" id="chest_plank" name="chest_resource" value="Planks">'+ 
                                                     '  <label for="chest_plank">Planks</label>'+ 
                                                '</form>', function(){
                                                    Chat.States.Intro.chest_resource_radio = document["ChestResourceForm" + Chat.stateNumber].chest_resource;
                                                    for(var i = 0; i < Chat.States.Intro.chest_resource_radio.length; i++) {
                                                        Chat.States.Intro.chest_resource_radio[i].onclick = Chat.States.Intro.Execute;
                                                    }
                                                });
}
Chat.States.Intro.Execute = function(){
    if(this.value == "Logs") {
        Chat.Recv.Message(  'Goodway', 
                            'Logs, yeah... that is exactly what we need', 
                            2, 
                            function(){Chat.FSM.Transition('LogAmount');}
                         );
    }
    else{
        Chat.Recv.Message(  'Goodway',
                            'Hmmm, Ryder said he can\'t find any recipes in our system that use ' + this.value + ' for chest, can you look again?',
                            2
                         );
        //Chat.ShowLatestMessage();
    }
}
Chat.States.Intro.Exit = function(){
    // Remove event listeners
    for(var i = 0; i < Chat.States.Intro.chest_resource_radio.length; i++) {
        Chat.States.Intro.chest_resource_radio[i].onclick = null;
    }
}

Chat.States.LogAmount = new CState('LogAmount');
Chat.States.LogAmount.Enter = function(){
    Chat.stateNumber++;
    Chat.Recv.Message(  'Goodway', 
                        'Ryder wants to know how many logs per hour are needed to get our factory producing 20 Chest / hr?', 
                        2,
                        function(){
                            //Chat.ShowLatestMessage();
                            Chat.Recv.HTMLNoDelay(  'Goodway',
                                                    '<form name="LogAmountForm' + Chat.stateNumber +'">'+ 
                                                        '<p>How many Log/hr are needed?</p>'+ 
                                                         '  <input type="radio" id="logs_10" name="log_amount" value="10">'+ 
                                                         '  <label for="logs_10">10</label><br>'+ 
                                                         '  <input type="radio" id="logs_20" name="log_amount" value="20">'+ 
                                                          ' <label for="logs_20">20</label><br>'+ 
                                                         '  <input type="radio" id="logs_30" name="log_amount" value="30">'+ 
                                                         '  <label for="logs_30">30</label><br>'+ 
                                                            '  <input type="radio" id="logs_40" name="log_amount" value="40">'+ 
                                                         '  <label for="logs_40">40</label>'+ 
                                                    '</form>', 
                                                    function(){
                                                        Chat.States.LogAmount.log_amount_radio = document['LogAmountForm' + Chat.stateNumber].log_amount;
                                                        for(var i = 0; i < Chat.States.LogAmount.log_amount_radio.length; i++) {
                                                            Chat.States.LogAmount.log_amount_radio[i].onclick = Chat.States.LogAmount.Execute;
                                                        }
                                                        //Chat.ShowLatestMessage();
                                                    }
                            );
                        }
    );
}
Chat.States.LogAmount.Execute = function(){
    if(this.value == "40") {
        
        Chat.Recv.Message(  'Goodway',
                            '40, that is right at what Ryder was thinking too... Really appreciate your help verifying our information.',
                            2, 
                            function(){Chat.FSM.Transition("Intro");}
                         );
        //     responsiveChatPush('.chat', 'Goodway', 'you', getCurrentTime(), 'It looks like you are getting the hang of using the new MFP system,' +
        //                                                                     ' our data is really outdated and it shows multiple recipes for planks, can you take alook at the following'+
        //                                                                     ' Plank recipes and let us know which one is correct, so we can update our record?',2, function(){
        //                                                                         //showLatestMessage('.chat');
        //                                                                         responsiveChatNoDotsHTMLPush('.chat', 'Goodway', 'you', getCurrentTime(), 
        //                                                                             '<form name="PlankRecipeForm">'+ 
        //                                                                                 '<p>Waht is the correct recipe?</p>'+ 
        //                                                                                  '  <input type="radio" id="plank_recipe_1" name="plank_recipe" value="log_planks">'+ 
        //                                                                                  '  <label for="plank_recipe_1">Logs -> Planks</label><br>'+ 
        //                                                                                  '  <input type="radio" id="plank_recipe_2" name="plank_recipe" value="sticks_planks">'+ 
        //                                                                                   ' <label for="plank_recipe_2">Sticks -> Planks</label><br>'+ 
        //                                                                                  '  <input type="radio" id="plank_recipe_3" name="plank_recipe" value="logs_sticks_planks">'+ 
        //                                                                                  '  <label for="plank_recipe_3">Logs ->  Sticks -> Planks</label><br>'+ 
        //                                                                             '</form>');
        //                                                                             AddPlankRecipeRadioCallbacks();
        //                                                                             //showLatestMessage('.chat');
        //     });
        // });
        
    }
    else{
        Chat.Recv.Message(  'Goodway', 
                            'Hmmm, Ryder is getting a different estimate than ' + this.value + ' for logs/hr, can you look again?',
                            2);
    }
}
Chat.States.LogAmount.Exit = function(){
    //remove callbacks
    for(var i = 0; i < Chat.States.LogAmount.log_amount_radio.length; i++) {
        Chat.States.LogAmount.log_amount_radio[i].onclick = null;
    }
}

Chat.FSM.Transition("Intro");



    function AddLogAmountRadioCallbacks(){
        var log_amount_radio = document.LogAmountForm.log_amount;
        var prev = null;
        for(var i = 0; i < log_amount_radio.length; i++) {
            log_amount_radio[i].onclick = function () {
                if(this.value == "40") {
                    for(var i = 0; i < log_amount_radio.length; i++) {
                        log_amount_radio[i].onclick = null;
                    }
                    responsiveChatPush('.chat', 'Goodway', 'you', getCurrentTime(), '40, that is right at what Ryder was thinking too... Really appreciate your help verifying our information.',2, function(){
                        responsiveChatPush('.chat', 'Goodway', 'you', getCurrentTime(), 'It looks like you are getting the hang of using the new MFP system,' +
                                                                                        ' our data is really outdated and it shows multiple recipes for planks, can you take alook at the following'+
                                                                                        ' Plank recipes and let us know which one is correct, so we can update our record?',2, function(){
                                                                                            //showLatestMessage('.chat');
                                                                                            responsiveChatNoDotsHTMLPush('.chat', 'Goodway', 'you', getCurrentTime(), 
                                                                                                '<form name="PlankRecipeForm">'+ 
                                                                                                    '<p>Waht is the correct recipe?</p>'+ 
                                                                                                     '  <input type="radio" id="plank_recipe_1" name="plank_recipe" value="log_planks">'+ 
                                                                                                     '  <label for="plank_recipe_1">Logs -> Planks</label><br>'+ 
                                                                                                     '  <input type="radio" id="plank_recipe_2" name="plank_recipe" value="sticks_planks">'+ 
                                                                                                      ' <label for="plank_recipe_2">Sticks -> Planks</label><br>'+ 
                                                                                                     '  <input type="radio" id="plank_recipe_3" name="plank_recipe" value="logs_sticks_planks">'+ 
                                                                                                     '  <label for="plank_recipe_3">Logs ->  Sticks -> Planks</label><br>'+ 
                                                                                                '</form>');
                                                                                                AddPlankRecipeRadioCallbacks();
                                                                                                //showLatestMessage('.chat');
                        });
                    });
                    
                    
                }
                else{
                    responsiveChatPush('.chat', 'Goodway', 'you', getCurrentTime(), 'Hmmm, Ryder is getting a different estimate than ' + this.value + ' for logs/hr, can you look again?');
                    //showLatestMessage('.chat');
                }
                
            };
        }
    }


    function AddPlankRecipeRadioCallbacks(){
        var plank_recipe_radio = document.PlankRecipeForm.plank_recipe;
        var prev = null;
        for(var i = 0; i < plank_recipe_radio.length; i++) {
            plank_recipe_radio[i].onclick = function () {
                if(this.value == "log_planks") {
                    for(var i = 0; i < plank_recipe_radio.length; i++) {
                        plank_recipe_radio[i].onclick = null;
                    }
                    responsiveChatPush('.chat', 'Goodway', 'you', getCurrentTime(), 'That makes sense, our system stores all recipes as ratios.... ' +
                                                                                        'Do you have any suggestions on how we could take the plank recipe and store as ratio? ',2, function(){
                                                                                            responsiveChatNoDotsHTMLPush('.chat', 'Goodway', 'you', getCurrentTime(), 
                                                                                            '<form name="PlankRatioForm">'+ 
                                                                                                '<p>Plank Recipe Ratio</p>'+ 
                                                                                                 '  <input type="text" id="plank_ratio" name="plank_ratio" >'+ 
                                                                                                //  '  <label for="plank_ratio">Ratio</label><br>'+ 
                                                                                                '   <input id="plank_ratio_submit" type="submit" value="Submit" style="width:100%;" ></input><br>'+
                                                                                            '</form>');
                                                                                            AddPlankRatioCallbacks();
                                                                                            //showLatestMessage('.chat');

                                                                                        });
                    
                }
                else{
                    responsiveChatPush('.chat', 'Goodway', 'you', getCurrentTime(), 'Hmmm, are you sure we need sticks? Can you look again?');
                    //showLatestMessage('.chat');
                }
                
            };
        }
    }

    function AddPlankRatioCallbacks(){
        var plank_ratio_textbox_submit = document.PlankRatioForm.plank_ratio_submit;
        // var prev = null;
        // for(var i = 0; i < plank_recipe_radio.length; i++) {
            plank_ratio_textbox_submit.onclick = function (event) {
                event.stopPropagation();
                event.preventDefault();
                responsiveChatPush('.chat', 'Goodway', 'you', getCurrentTime(), 'Thanks!  I will write that down and see if that format will work with our system.',2, function(){
                    responsiveChatPush('.chat', 'Goodway', 'you', getCurrentTime(), 'I think we have everything we need at the moment, if we can get the budget approved we will move forward and have' + 
                                                                                    ' you start constructing Beds, Chest and Planks for Tiny Town, I will keep you posted!', 2);
                    //showLatestMessage('.chat');
                    plank_ratio_textbox_submit.onclick = null;
                });
                
            };
        
    }
    


/* DEMO */
// if (parent == top) {
//   $("a.article").show();
// }
