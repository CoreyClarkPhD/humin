const params = new URLSearchParams(window.location.search);
console.log(document.referrer);

Chat.Load();
Chat.stateNumber = 0;



//
//  Question 1: Intro and harvested resource for Chest
//
Chat.States.Intro = new CState("Intro");

Chat.States.Intro.Enter = function(){
    Chat.stateNumber++;
    
    Chat.Recv.MessageNoDelay('Goodway', 'Hey!  Last night Tiny Town got hit by a really big storm!  They are asking all the towns in the area if we can help with supplies');
    Chat.Recv.MessageNoDelay('Goodway', 'They need us to get: <br>10 Beds, <br>20 Chest <br>100 Planks to help with the repairs and reocvery effort.');
    Chat.Recv.MessageNoDelay('Goodway', 'We will have 1 hour of factory time to produce this order, Can you help me figure out what we are going to need... I have Ryder, our purchasing officer here in my office, he has some questions, maybe you can use the Minecraft'+ 
                                                                'Factory Planner (MFP) to help figure out the answers so we can figure out what is possible.  Here is a link in case you need it: <a href="https://humingamelab.com/minecraft/?id="' + params.get('id')+  ' target="_blank"  >MFP</a>');
    Chat.Recv.HTMLNoDelay('Goodway','<form name="ChestResourceForm' + Chat.stateNumber + '">'+ 
                                                    '<p>What Resources do we need for Chest, we want to find the initial materials we will need to harvest so we can build out chest?</p>'+ 
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

//
//  Question 2: how many logs per hour for 20 chest
//

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
                            function(){Chat.FSM.Transition("ChestResources");}
                         );
    }
    else{
        Chat.Recv.Message(  'Goodway', 
                            'Hmmm, Ryder is getting a different estimate than ' + this.value + ' for logs/hr, can you take a look at the MFP again and adjust your response above?  ' +
                                'Create the recipe for a chest in the MFP, and adjust the number of logs until we are getting 20 chest/hr.  ' +
                                'This should give us the number of logs per hour we need to harvest.  You can go back to the MFP tutorial and come back if you want a quick refresher on how it works.',
                            2);
    }
}
Chat.States.LogAmount.Exit = function(){
    //remove callbacks
    for(var i = 0; i < Chat.States.LogAmount.log_amount_radio.length; i++) {
        Chat.States.LogAmount.log_amount_radio[i].onclick = null;
    }
}

//
//  Question 3: what all materials are needed to harvest and build to create 20 chest
//

Chat.States.ChestResources = new CState("ChestResources");

Chat.States.ChestResources.Enter = function(){
    Chat.stateNumber++;
    Chat.Recv.Message(  'Goodway', 
                        'It looks like you are getting the hang of using the new MFP system,' +
                        ' our data is really outdated and it shows multiple recipes for chest, can you take alook at the following'+
                        ' Chest recipes and let us know which one is correct, so we can update our record?', 
                        2,
                        function(){
                            //Chat.ShowLatestMessage();
                            Chat.Recv.HTMLNoDelay(  'Goodway',
                                                    '<form name="ChestRecipeForm' + Chat.stateNumber +'">'+ 
                                                        '<p>Waht is the correct recipe?</p>'+ 
                                                         '  <input type="radio" id="chest_recipe_1" name="chest_recipe" value="log_planks">'+ 
                                                         '  <label for="chest_recipe_1">Logs -> Planks -> Chest</label><br>'+ 
                                                         '  <input type="radio" id="chest_recipe_2" name="chest_recipe" value="sticks_planks">'+ 
                                                          ' <label for="chest_recipe_2">Logs -> Sticks -> Chest</label><br>'+ 
                                                         '  <input type="radio" id="chest_recipe_3" name="chest_recipe" value="logs_stone">'+ 
                                                         '  <label for="chest_recipe_3">Logs ->  Stone -> Chest</label><br>'+ 
                                                    '</form>', 
                                                    function(){
                                                        Chat.States.ChestResources.chest_recipe_radio = document['ChestRecipeForm' + Chat.stateNumber].chest_recipe;
                                                        for(var i = 0; i < Chat.States.ChestResources.chest_recipe_radio.length; i++) {
                                                            Chat.States.ChestResources.chest_recipe_radio[i].onclick = Chat.States.ChestResources.Execute;
                                                        }
                                                        //Chat.ShowLatestMessage();
                                                    }
                            );
                        }
    );
}
Chat.States.ChestResources.Execute = function(){
    if(this.value == "log_planks") {
        Chat.Recv.Message(  'Goodway', 
                            'Logs and planks, yeah... that is exactly what we need.  I will remove the outdated recipes from our system.  Thanks!', 
                            2, 
                            function(){Chat.FSM.Transition('ChestRatios');}
                         );
    }
    else{
        Chat.Recv.Message(  'Goodway',
                            'Hmmm, Ryder said he can\'t find any recipes in our system that use ' + this.value + ' for chest, can you look at the recipe for Chest in the MFP again, then update your selection above?',
                            2
                         );
        //Chat.ShowLatestMessage();
    }
}
Chat.States.ChestResources.Exit = function(){
    // Remove event listeners
    for(var i = 0; i < Chat.States.ChestResources.chest_recipe_radio.length; i++) {
        Chat.States.ChestResources.chest_recipe_radio[i].onclick = null;
    }
}

//
//  Question 4: Ratio of Logs to Chest
//
Chat.States.ChestRatios = new CState("ChestRatios");

Chat.States.ChestRatios.Enter = function(){
    Chat.stateNumber++;
    Chat.Recv.Message(  'Goodway', 
                        'We just got an upgrade to our system and it allows us to store ratios between materials and items we want to make, ' +
                        ' since you have the MFP open, can you help us figure out the ratio of logs to chest and planks to chest?'+
                        ' If we fill these in now, it will speed up our ability in the future to figure out what we will need fulfill incoming orders.', 
                        2,
                        function(){
                            //Chat.ShowLatestMessage();
                            Chat.Recv.HTMLNoDelay(  'Goodway',
                                                    '<form name="ChestRatioForm' + Chat.stateNumber + ' ">'+ 
                                                        '<p>Chest Recipe Ratios</p>'+ 
                                                         ' <p>Logs to Chest</p> <input style="padding:0px; height: 20%; width: 30px; float: none;" type="text" id="logs_ratio" name="logs_ratio" > &nbsp  :  &nbsp <input style="padding:0px; height: 20%; width: 30px; float: none;"type="text" id="logsToChest_ratio" name="logsToChest_ratio" ><br/><br/>'+ 
                                                        '  <p>Planks to Chest</p><input style="padding:0px; height: 20%; width: 30px; float: none;" type="text" id="planks_ratio" name="planks_ratio" > &nbsp  :  &nbsp <input type="text" style="padding:0px; height: 20%; width: 30px; float: none;" id="planksToChest_ratio" name="planksToChest_ratio" >'+ 
                                                        //  '  <label for="plank_ratio">Ratio</label><br>'+ 
                                                        '   <input id="chest_ratio_submit" type="submit" value="Submit" style="height: 20px; width:16%;border-radius: 8px; background-color: #00E34D; color: white;" ></input><br>'+
                                                    '</form>', 
                                                    function(){
                                                        Chat.States.ChestRatios.chest_ratio_submit = document.getElementById('chest_ratio_submit');
                                                        Chat.States.ChestRatios.chest_ratio_submit.onclick = Chat.States.ChestRatios.Execute;
                                                        //Chat.ShowLatestMessage();
                                                    }
                            );
                        }
    );
}
Chat.States.ChestRatios.Execute = function(event){
    event.stopPropagation();
    event.preventDefault();
    Chat.States.ChestRatios.chest_ratio_submit.onclick = null;
    Chat.Recv.Message( 'Goodway', 
                        'Thanks!  I will write that down and see if that format will work with our system.',
                        2, 
                        function(){
                            Chat.Recv.Message(  'Goodway',
                                                'I think we have everything we need at the moment, if we can get the budget approved we will move forward and have' + 
                                                    ' you start constructing Beds, Chest and Planks for Tiny Town, I will keep you posted!', 
                                                2);
                        })
                    //showLatestMessage('.chat');
}
Chat.States.ChestRatios.Exit = function(){
    // Remove event listeners
    for(var i = 0; i < Chat.States.ChestRatios.chest_recipe_radio.length; i++) {
        Chat.States.ChestRatios.chest_recipe_radio[i].onclick = null;
    }
}

Chat.FSM.Transition("Intro");





/* DEMO */
// if (parent == top) {
//   $("a.article").show();
// }
