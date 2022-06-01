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
    $('#'+ id ).removeClass('bg-danger')
    $('#'+ id ).addClass('bg-success')
}
var setPanelItemRed = function(id){
    $('#'+ id ).removeClass('bg-success')
    $('#'+ id ).addClass('bg-danger')
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
    ClearDebugger();

    $('#task1Submit').hide();
    $('#task2Submit').hide();
    $('#task3Submit').hide();
    $('#task4Submit').hide();

    BB.treePlanksCorrect = {
        "Nodes": [
            null,
            {
                "node": {
                    "id": 1,
                    "data": {
                        "resource": {
                            "id": 23,
                            "name": "Logs",
                            "index": [
                                6,
                                1
                            ],
                            "craftable": false,
                            "primaryColor": {
                                "r": 58,
                                "g": 46,
                                "b": 28
                            },
                            "secondaryColor": {
                                "r": 140,
                                "g": 112,
                                "b": 69
                            }
                        },
                        "name": "Resource",
                        "amount": 1,
                        "perHour": 2
                    },
                    "inputs": {},
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 2,
                                    "input": "23",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        123,
                        271
                    ],
                    "name": "Resource"
                },
                "id": 1,
                "name": "Logs",
                "capacity": 2,
                "type": "Resource",
                "inputs": [],
                "outputs": [
                    2
                ]
            },
            {
                "node": {
                    "id": 2,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Crafter",
                        "amount": 4,
                        "perHour": 8,
                        "inputTree": [
                            {
                                "nodeId": 1,
                                "itemId": 23,
                                "amount": 1,
                                "perHour": 2,
                                "transitionCost": [],
                                "tree": []
                            }
                        ]
                    },
                    "inputs": {
                        "23": {
                            "connections": [
                                {
                                    "node": 1,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 3,
                                    "input": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        400,
                        193
                    ],
                    "name": "Crafter"
                },
                "id": 2,
                "name": "Planks",
                "capacity": 8,
                "type": "Crafter",
                "inputs": [
                    1
                ],
                "outputs": [
                    3
                ]
            },
            {
                "node": {
                    "id": 3,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Output",
                        "amount": 1,
                        "perHour": 8,
                        "inputTree": [
                            {
                                "nodeId": 2,
                                "itemId": 5,
                                "amount": 4,
                                "perHour": 2,
                                "transitionCost": [
                                    1
                                ],
                                "tree": [
                                    {
                                        "nodeId": 1,
                                        "itemId": 23,
                                        "amount": 1,
                                        "perHour": 2,
                                        "transitionCost": [],
                                        "tree": []
                                    }
                                ]
                            }
                        ]
                    },
                    "inputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 2,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {},
                    "position": [
                        706,
                        111
                    ],
                    "name": "Output"
                },
                "id": 3,
                "name": "Planks",
                "capacity": 8,
                "type": "Output",
                "inputs": [
                    2
                ],
                "outputs": []
            }
        ],
        "Crafter": [
            {
                "node": {
                    "id": 2,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Crafter",
                        "amount": 4,
                        "perHour": 8,
                        "inputTree": [
                            {
                                "nodeId": 1,
                                "itemId": 23,
                                "amount": 1,
                                "perHour": 2,
                                "transitionCost": [],
                                "tree": []
                            }
                        ]
                    },
                    "inputs": {
                        "23": {
                            "connections": [
                                {
                                    "node": 1,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 3,
                                    "input": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        400,
                        193
                    ],
                    "name": "Crafter"
                },
                "id": 2,
                "name": "Planks",
                "capacity": 8,
                "type": "Crafter",
                "inputs": [
                    1
                ],
                "outputs": [
                    3
                ]
            }
        ],
        "Resource": [
            {
                "node": {
                    "id": 1,
                    "data": {
                        "resource": {
                            "id": 23,
                            "name": "Logs",
                            "index": [
                                6,
                                1
                            ],
                            "craftable": false,
                            "primaryColor": {
                                "r": 58,
                                "g": 46,
                                "b": 28
                            },
                            "secondaryColor": {
                                "r": 140,
                                "g": 112,
                                "b": 69
                            }
                        },
                        "name": "Resource",
                        "amount": 1,
                        "perHour": 2
                    },
                    "inputs": {},
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 2,
                                    "input": "23",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        123,
                        271
                    ],
                    "name": "Resource"
                },
                "id": 1,
                "name": "Logs",
                "capacity": 2,
                "type": "Resource",
                "inputs": [],
                "outputs": [
                    2
                ]
            }
        ],
        "Output": [
            {
                "node": {
                    "id": 3,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Output",
                        "amount": 1,
                        "perHour": 8,
                        "inputTree": [
                            {
                                "nodeId": 2,
                                "itemId": 5,
                                "amount": 4,
                                "perHour": 2,
                                "transitionCost": [
                                    1
                                ],
                                "tree": [
                                    {
                                        "nodeId": 1,
                                        "itemId": 23,
                                        "amount": 1,
                                        "perHour": 2,
                                        "transitionCost": [],
                                        "tree": []
                                    }
                                ]
                            }
                        ]
                    },
                    "inputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 2,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {},
                    "position": [
                        706,
                        111
                    ],
                    "name": "Output"
                },
                "id": 3,
                "name": "Planks",
                "capacity": 8,
                "type": "Output",
                "inputs": [
                    2
                ],
                "outputs": []
            }
        ]
    }

    BB.treePlanksNoOutput = {
        "Nodes": [
            null,
            {
                "node": {
                    "id": 1,
                    "data": {
                        "resource": {
                            "id": 23,
                            "name": "Logs",
                            "index": [
                                6,
                                1
                            ],
                            "craftable": false,
                            "primaryColor": {
                                "r": 58,
                                "g": 46,
                                "b": 28
                            },
                            "secondaryColor": {
                                "r": 140,
                                "g": 112,
                                "b": 69
                            }
                        },
                        "name": "Resource",
                        "amount": 1,
                        "perHour": 2
                    },
                    "inputs": {},
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 2,
                                    "input": "23",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        240,
                        111
                    ],
                    "name": "Resource"
                },
                "id": 1,
                "name": "Logs",
                "capacity": 2,
                "type": "Resource",
                "inputs": [],
                "outputs": [
                    1
                ]
            },
            {
                "node": {
                    "id": 2,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Crafter",
                        "amount": 4,
                        "perHour": 8,
                        "inputTree": [
                            {
                                "nodeId": 1,
                                "itemId": 23,
                                "amount": 1,
                                "perHour": 2,
                                "transitionCost": [],
                                "tree": []
                            }
                        ]
                    },
                    "inputs": {
                        "23": {
                            "connections": [
                                {
                                    "node": 1,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": []
                        }
                    },
                    "position": [
                        514.9929361814783,
                        182.89147929434807
                    ],
                    "name": "Crafter"
                },
                "id": 2,
                "name": "Planks",
                "capacity": 8,
                "type": "Crafter",
                "inputs": [
                    1
                ],
                "outputs": [
                    2
                ]
            }
        ],
        "Crafter": [
            {
                "node": {
                    "id": 2,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Crafter",
                        "amount": 4,
                        "perHour": 8,
                        "inputTree": [
                            {
                                "nodeId": 1,
                                "itemId": 23,
                                "amount": 1,
                                "perHour": 2,
                                "transitionCost": [],
                                "tree": []
                            }
                        ]
                    },
                    "inputs": {
                        "23": {
                            "connections": [
                                {
                                    "node": 1,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": []
                        }
                    },
                    "position": [
                        514.9929361814783,
                        182.89147929434807
                    ],
                    "name": "Crafter"
                },
                "id": 2,
                "name": "Planks",
                "capacity": 8,
                "type": "Crafter",
                "inputs": [
                    1
                ],
                "outputs": [
                    2
                ]
            }
        ],
        "Resource": [
            {
                "node": {
                    "id": 1,
                    "data": {
                        "resource": {
                            "id": 23,
                            "name": "Logs",
                            "index": [
                                6,
                                1
                            ],
                            "craftable": false,
                            "primaryColor": {
                                "r": 58,
                                "g": 46,
                                "b": 28
                            },
                            "secondaryColor": {
                                "r": 140,
                                "g": 112,
                                "b": 69
                            }
                        },
                        "name": "Resource",
                        "amount": 1,
                        "perHour": 2
                    },
                    "inputs": {},
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 2,
                                    "input": "23",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        240,
                        111
                    ],
                    "name": "Resource"
                },
                "id": 1,
                "name": "Logs",
                "capacity": 2,
                "type": "Resource",
                "inputs": [],
                "outputs": [
                    1
                ]
            }
        ],
        "Output": []
    }
    
    BB.treePlanksWrongOutput = {
        "Nodes": [
            null,
            {
                "node": {
                    "id": 1,
                    "data": {
                        "resource": {
                            "id": 23,
                            "name": "Logs",
                            "index": [
                                6,
                                1
                            ],
                            "craftable": false,
                            "primaryColor": {
                                "r": 58,
                                "g": 46,
                                "b": 28
                            },
                            "secondaryColor": {
                                "r": 140,
                                "g": 112,
                                "b": 69
                            }
                        },
                        "name": "Resource",
                        "amount": 1,
                        "perHour": 2
                    },
                    "inputs": {},
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 2,
                                    "input": "23",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        240,
                        111
                    ],
                    "name": "Resource"
                },
                "id": 1,
                "name": "Logs",
                "capacity": 2,
                "type": "Resource",
                "inputs": [],
                "outputs": [
                    1
                ]
            },
            {
                "node": {
                    "id": 2,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Crafter",
                        "amount": 4,
                        "perHour": 8,
                        "inputTree": [
                            {
                                "nodeId": 1,
                                "itemId": 23,
                                "amount": 1,
                                "perHour": 2,
                                "transitionCost": [],
                                "tree": []
                            }
                        ]
                    },
                    "inputs": {
                        "23": {
                            "connections": [
                                {
                                    "node": 1,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": []
                        }
                    },
                    "position": [
                        514.9929361814783,
                        182.89147929434807
                    ],
                    "name": "Crafter"
                },
                "id": 2,
                "name": "Planks",
                "capacity": 8,
                "type": "Crafter",
                "inputs": [
                    1
                ],
                "outputs": [
                    2
                ]
            },
            null,
            {
                "node": {
                    "id": 4,
                    "data": {
                        "resource": {
                            "id": 54,
                            "name": "Chest",
                            "index": [
                                2,
                                6
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 1,
                                "ingredients": [
                                    {
                                        "id": 5,
                                        "amount": 8
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 157,
                                "g": 108,
                                "b": 38
                            },
                            "secondaryColor": {
                                "r": 122,
                                "g": 122,
                                "b": 122
                            }
                        },
                        "name": "Output",
                        "amount": 1,
                        "perHour": null,
                        "inputTree": null
                    },
                    "inputs": {
                        "resource": {
                            "connections": []
                        }
                    },
                    "outputs": {},
                    "position": [
                        856.8217183434557,
                        143.40094177742694
                    ],
                    "name": "Output"
                },
                "id": 4,
                "name": "Chest",
                "capacity": null,
                "type": "Output",
                "inputs": [],
                "outputs": []
            }
        ],
        "Crafter": [
            {
                "node": {
                    "id": 2,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Crafter",
                        "amount": 4,
                        "perHour": 8,
                        "inputTree": [
                            {
                                "nodeId": 1,
                                "itemId": 23,
                                "amount": 1,
                                "perHour": 2,
                                "transitionCost": [],
                                "tree": []
                            }
                        ]
                    },
                    "inputs": {
                        "23": {
                            "connections": [
                                {
                                    "node": 1,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": []
                        }
                    },
                    "position": [
                        514.9929361814783,
                        182.89147929434807
                    ],
                    "name": "Crafter"
                },
                "id": 2,
                "name": "Planks",
                "capacity": 8,
                "type": "Crafter",
                "inputs": [
                    1
                ],
                "outputs": [
                    2
                ]
            }
        ],
        "Resource": [
            {
                "node": {
                    "id": 1,
                    "data": {
                        "resource": {
                            "id": 23,
                            "name": "Logs",
                            "index": [
                                6,
                                1
                            ],
                            "craftable": false,
                            "primaryColor": {
                                "r": 58,
                                "g": 46,
                                "b": 28
                            },
                            "secondaryColor": {
                                "r": 140,
                                "g": 112,
                                "b": 69
                            }
                        },
                        "name": "Resource",
                        "amount": 1,
                        "perHour": 2
                    },
                    "inputs": {},
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 2,
                                    "input": "23",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        240,
                        111
                    ],
                    "name": "Resource"
                },
                "id": 1,
                "name": "Logs",
                "capacity": 2,
                "type": "Resource",
                "inputs": [],
                "outputs": [
                    1
                ]
            }
        ],
        "Output": [
            {
                "node": {
                    "id": 4,
                    "data": {
                        "resource": {
                            "id": 54,
                            "name": "Chest",
                            "index": [
                                2,
                                6
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 1,
                                "ingredients": [
                                    {
                                        "id": 5,
                                        "amount": 8
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 157,
                                "g": 108,
                                "b": 38
                            },
                            "secondaryColor": {
                                "r": 122,
                                "g": 122,
                                "b": 122
                            }
                        },
                        "name": "Output",
                        "amount": 1,
                        "perHour": null,
                        "inputTree": null
                    },
                    "inputs": {
                        "resource": {
                            "connections": []
                        }
                    },
                    "outputs": {},
                    "position": [
                        856.8217183434557,
                        143.40094177742694
                    ],
                    "name": "Output"
                },
                "id": 4,
                "name": "Chest",
                "capacity": null,
                "type": "Output",
                "inputs": [],
                "outputs": []
            }
        ]
    }

    BB.treePlanksWrongCapacity = {
        "Nodes": [
            null,
            {
                "node": {
                    "id": 1,
                    "data": {
                        "resource": {
                            "id": 23,
                            "name": "Logs",
                            "index": [
                                6,
                                1
                            ],
                            "craftable": false,
                            "primaryColor": {
                                "r": 58,
                                "g": 46,
                                "b": 28
                            },
                            "secondaryColor": {
                                "r": 140,
                                "g": 112,
                                "b": 69
                            }
                        },
                        "name": "Resource",
                        "amount": 1,
                        "perHour": 1
                    },
                    "inputs": {},
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 2,
                                    "input": "23",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        240,
                        111
                    ],
                    "name": "Resource"
                },
                "id": 1,
                "name": "Logs",
                "capacity": 1,
                "type": "Resource",
                "inputs": [],
                "outputs": [
                    1
                ]
            },
            {
                "node": {
                    "id": 2,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Crafter",
                        "amount": 4,
                        "perHour": 4,
                        "inputTree": [
                            {
                                "nodeId": 1,
                                "itemId": 23,
                                "amount": 1,
                                "perHour": 1,
                                "transitionCost": [],
                                "tree": []
                            }
                        ]
                    },
                    "inputs": {
                        "23": {
                            "connections": [
                                {
                                    "node": 1,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 5,
                                    "input": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        514.9929361814783,
                        182.89147929434807
                    ],
                    "name": "Crafter"
                },
                "id": 2,
                "name": "Planks",
                "capacity": 4,
                "type": "Crafter",
                "inputs": [
                    1
                ],
                "outputs": [
                    2
                ]
            },
            null,
            null,
            {
                "node": {
                    "id": 5,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Output",
                        "amount": 1,
                        "perHour": 4,
                        "inputTree": [
                            {
                                "nodeId": 2,
                                "itemId": 5,
                                "amount": 4,
                                "perHour": 1,
                                "transitionCost": [
                                    1
                                ],
                                "tree": [
                                    {
                                        "nodeId": 1,
                                        "itemId": 23,
                                        "amount": 1,
                                        "perHour": 1,
                                        "transitionCost": [],
                                        "tree": []
                                    }
                                ]
                            }
                        ]
                    },
                    "inputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 2,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {},
                    "position": [
                        827.9060625384044,
                        154.85581256010605
                    ],
                    "name": "Output"
                },
                "id": 5,
                "name": "Planks",
                "capacity": 4,
                "type": "Output",
                "inputs": [
                    2
                ],
                "outputs": []
            }
        ],
        "Crafter": [
            {
                "node": {
                    "id": 2,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Crafter",
                        "amount": 4,
                        "perHour": 4,
                        "inputTree": [
                            {
                                "nodeId": 1,
                                "itemId": 23,
                                "amount": 1,
                                "perHour": 1,
                                "transitionCost": [],
                                "tree": []
                            }
                        ]
                    },
                    "inputs": {
                        "23": {
                            "connections": [
                                {
                                    "node": 1,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 5,
                                    "input": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        514.9929361814783,
                        182.89147929434807
                    ],
                    "name": "Crafter"
                },
                "id": 2,
                "name": "Planks",
                "capacity": 4,
                "type": "Crafter",
                "inputs": [
                    1
                ],
                "outputs": [
                    2
                ]
            }
        ],
        "Resource": [
            {
                "node": {
                    "id": 1,
                    "data": {
                        "resource": {
                            "id": 23,
                            "name": "Logs",
                            "index": [
                                6,
                                1
                            ],
                            "craftable": false,
                            "primaryColor": {
                                "r": 58,
                                "g": 46,
                                "b": 28
                            },
                            "secondaryColor": {
                                "r": 140,
                                "g": 112,
                                "b": 69
                            }
                        },
                        "name": "Resource",
                        "amount": 1,
                        "perHour": 1
                    },
                    "inputs": {},
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 2,
                                    "input": "23",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        240,
                        111
                    ],
                    "name": "Resource"
                },
                "id": 1,
                "name": "Logs",
                "capacity": 1,
                "type": "Resource",
                "inputs": [],
                "outputs": [
                    1
                ]
            }
        ],
        "Output": [
            {
                "node": {
                    "id": 5,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Output",
                        "amount": 1,
                        "perHour": 4,
                        "inputTree": [
                            {
                                "nodeId": 2,
                                "itemId": 5,
                                "amount": 4,
                                "perHour": 1,
                                "transitionCost": [
                                    1
                                ],
                                "tree": [
                                    {
                                        "nodeId": 1,
                                        "itemId": 23,
                                        "amount": 1,
                                        "perHour": 1,
                                        "transitionCost": [],
                                        "tree": []
                                    }
                                ]
                            }
                        ]
                    },
                    "inputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 2,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {},
                    "position": [
                        827.9060625384044,
                        154.85581256010605
                    ],
                    "name": "Output"
                },
                "id": 5,
                "name": "Planks",
                "capacity": 4,
                "type": "Output",
                "inputs": [
                    2
                ],
                "outputs": []
            }
        ]
    }

    BB.treePlanksInfiniteCapacity = {
        "Nodes": [
            null,
            {
                "node": {
                    "id": 1,
                    "data": {
                        "resource": {
                            "id": 23,
                            "name": "Logs",
                            "index": [
                                6,
                                1
                            ],
                            "craftable": false,
                            "primaryColor": {
                                "r": 58,
                                "g": 46,
                                "b": 28
                            },
                            "secondaryColor": {
                                "r": 140,
                                "g": 112,
                                "b": 69
                            }
                        },
                        "name": "Resource",
                        "amount": 1,
                        "perHour": null
                    },
                    "inputs": {},
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 2,
                                    "input": "23",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        240,
                        111
                    ],
                    "name": "Resource"
                },
                "id": 1,
                "name": "Logs",
                "capacity": null,
                "type": "Resource",
                "inputs": [],
                "outputs": [
                    1
                ]
            },
            {
                "node": {
                    "id": 2,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Crafter",
                        "amount": 4,
                        "perHour": null,
                        "inputTree": [
                            {
                                "nodeId": 1,
                                "itemId": 23,
                                "amount": 1,
                                "perHour": null,
                                "transitionCost": [],
                                "tree": []
                            }
                        ]
                    },
                    "inputs": {
                        "23": {
                            "connections": [
                                {
                                    "node": 1,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 5,
                                    "input": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        514.9929361814783,
                        182.89147929434807
                    ],
                    "name": "Crafter"
                },
                "id": 2,
                "name": "Planks",
                "capacity": null,
                "type": "Crafter",
                "inputs": [
                    1
                ],
                "outputs": [
                    2
                ]
            },
            null,
            null,
            {
                "node": {
                    "id": 5,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Output",
                        "amount": 1,
                        "perHour": null,
                        "inputTree": [
                            {
                                "nodeId": 2,
                                "itemId": 5,
                                "amount": 4,
                                "perHour": null,
                                "transitionCost": [
                                    1
                                ],
                                "tree": [
                                    {
                                        "nodeId": 1,
                                        "itemId": 23,
                                        "amount": 1,
                                        "perHour": null,
                                        "transitionCost": [],
                                        "tree": []
                                    }
                                ]
                            }
                        ]
                    },
                    "inputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 2,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {},
                    "position": [
                        827.9060625384044,
                        154.85581256010605
                    ],
                    "name": "Output"
                },
                "id": 5,
                "name": "Planks",
                "capacity": null,
                "type": "Output",
                "inputs": [
                    2
                ],
                "outputs": []
            }
        ],
        "Crafter": [
            {
                "node": {
                    "id": 2,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Crafter",
                        "amount": 4,
                        "perHour": null,
                        "inputTree": [
                            {
                                "nodeId": 1,
                                "itemId": 23,
                                "amount": 1,
                                "perHour": null,
                                "transitionCost": [],
                                "tree": []
                            }
                        ]
                    },
                    "inputs": {
                        "23": {
                            "connections": [
                                {
                                    "node": 1,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 5,
                                    "input": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        514.9929361814783,
                        182.89147929434807
                    ],
                    "name": "Crafter"
                },
                "id": 2,
                "name": "Planks",
                "capacity": null,
                "type": "Crafter",
                "inputs": [
                    1
                ],
                "outputs": [
                    2
                ]
            }
        ],
        "Resource": [
            {
                "node": {
                    "id": 1,
                    "data": {
                        "resource": {
                            "id": 23,
                            "name": "Logs",
                            "index": [
                                6,
                                1
                            ],
                            "craftable": false,
                            "primaryColor": {
                                "r": 58,
                                "g": 46,
                                "b": 28
                            },
                            "secondaryColor": {
                                "r": 140,
                                "g": 112,
                                "b": 69
                            }
                        },
                        "name": "Resource",
                        "amount": 1,
                        "perHour": null
                    },
                    "inputs": {},
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 2,
                                    "input": "23",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        240,
                        111
                    ],
                    "name": "Resource"
                },
                "id": 1,
                "name": "Logs",
                "capacity": null,
                "type": "Resource",
                "inputs": [],
                "outputs": [
                    1
                ]
            }
        ],
        "Output": [
            {
                "node": {
                    "id": 5,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Output",
                        "amount": 1,
                        "perHour": null,
                        "inputTree": [
                            {
                                "nodeId": 2,
                                "itemId": 5,
                                "amount": 4,
                                "perHour": null,
                                "transitionCost": [
                                    1
                                ],
                                "tree": [
                                    {
                                        "nodeId": 1,
                                        "itemId": 23,
                                        "amount": 1,
                                        "perHour": null,
                                        "transitionCost": [],
                                        "tree": []
                                    }
                                ]
                            }
                        ]
                    },
                    "inputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 2,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {},
                    "position": [
                        827.9060625384044,
                        154.85581256010605
                    ],
                    "name": "Output"
                },
                "id": 5,
                "name": "Planks",
                "capacity": null,
                "type": "Output",
                "inputs": [
                    2
                ],
                "outputs": []
            }
        ]
    }

    BB.treeMissingConnection = {
        "Nodes": [
            null,
            {
                "node": {
                    "id": 1,
                    "data": {
                        "resource": {
                            "id": 23,
                            "name": "Logs",
                            "index": [
                                6,
                                1
                            ],
                            "craftable": false,
                            "primaryColor": {
                                "r": 58,
                                "g": 46,
                                "b": 28
                            },
                            "secondaryColor": {
                                "r": 140,
                                "g": 112,
                                "b": 69
                            }
                        },
                        "name": "Resource",
                        "amount": 1,
                        "perHour": 2
                    },
                    "inputs": {},
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 2,
                                    "input": "23",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        123,
                        271
                    ],
                    "name": "Resource"
                },
                "id": 1,
                "name": "Logs",
                "capacity": 2,
                "type": "Resource",
                "inputs": [],
                "outputs": []
            },
            {
                "node": {
                    "id": 2,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Crafter",
                        "amount": 4,
                        "perHour": 8,
                        "inputTree": [
                            {
                                "nodeId": 1,
                                "itemId": 23,
                                "amount": 1,
                                "perHour": 2,
                                "transitionCost": [],
                                "tree": []
                            }
                        ]
                    },
                    "inputs": {
                        "23": {
                            "connections": [
                                {
                                    "node": 1,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": []
                        }
                    },
                    "position": [
                        400,
                        193
                    ],
                    "name": "Crafter"
                },
                "id": 2,
                "name": "Planks",
                "capacity": 8,
                "type": "Crafter",
                "inputs": [],
                "outputs": []
            },
            {
                "node": {
                    "id": 3,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Output",
                        "amount": 1,
                        "perHour": null,
                        "inputTree": null
                    },
                    "inputs": {
                        "resource": {
                            "connections": []
                        }
                    },
                    "outputs": {},
                    "position": [
                        706,
                        111
                    ],
                    "name": "Output"
                },
                "id": 3,
                "name": "Planks",
                "capacity": null,
                "type": "Output",
                "inputs": [],
                "outputs": []
            }
        ],
        "Crafter": [
            {
                "node": {
                    "id": 2,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Crafter",
                        "amount": 4,
                        "perHour": 8,
                        "inputTree": [
                            {
                                "nodeId": 1,
                                "itemId": 23,
                                "amount": 1,
                                "perHour": 2,
                                "transitionCost": [],
                                "tree": []
                            }
                        ]
                    },
                    "inputs": {
                        "23": {
                            "connections": [
                                {
                                    "node": 1,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": []
                        }
                    },
                    "position": [
                        400,
                        193
                    ],
                    "name": "Crafter"
                },
                "id": 2,
                "name": "Planks",
                "capacity": 8,
                "type": "Crafter",
                "inputs": [],
                "outputs": []
            }
        ],
        "Resource": [
            {
                "node": {
                    "id": 1,
                    "data": {
                        "resource": {
                            "id": 23,
                            "name": "Logs",
                            "index": [
                                6,
                                1
                            ],
                            "craftable": false,
                            "primaryColor": {
                                "r": 58,
                                "g": 46,
                                "b": 28
                            },
                            "secondaryColor": {
                                "r": 140,
                                "g": 112,
                                "b": 69
                            }
                        },
                        "name": "Resource",
                        "amount": 1,
                        "perHour": 2
                    },
                    "inputs": {},
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 2,
                                    "input": "23",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        123,
                        271
                    ],
                    "name": "Resource"
                },
                "id": 1,
                "name": "Logs",
                "capacity": 2,
                "type": "Resource",
                "inputs": [],
                "outputs": []
            }
        ],
        "Output": [
            {
                "node": {
                    "id": 3,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Output",
                        "amount": 1,
                        "perHour": null,
                        "inputTree": null
                    },
                    "inputs": {
                        "resource": {
                            "connections": []
                        }
                    },
                    "outputs": {},
                    "position": [
                        706,
                        111
                    ],
                    "name": "Output"
                },
                "id": 3,
                "name": "Planks",
                "capacity": null,
                "type": "Output",
                "inputs": [],
                "outputs": []
            }
        ]
    }
    BB.treeDiamondPixAxeCorrect = {
        "Nodes": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            {
                "node": {
                    "id": 8,
                    "data": {
                        "resource": {
                            "id": 279,
                            "name": "Diamond Axe",
                            "index": [
                                7,
                                15
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 1,
                                "ingredients": [
                                    {
                                        "id": 264,
                                        "amount": 3
                                    },
                                    {
                                        "id": 280,
                                        "amount": 2
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 39,
                                "g": 178,
                                "b": 154
                            },
                            "secondaryColor": {
                                "r": 104,
                                "g": 78,
                                "b": 30
                            }
                        },
                        "name": "Output",
                        "amount": 1,
                        "perHour": 2,
                        "inputTree": [
                            {
                                "nodeId": 9,
                                "itemId": 279,
                                "amount": 1,
                                "perHour": 2,
                                "transitionCost": [
                                    0.3333333333333333,
                                    0.5
                                ],
                                "tree": [
                                    {
                                        "nodeId": 12,
                                        "itemId": 264,
                                        "amount": 1,
                                        "perHour": 6,
                                        "transitionCost": [],
                                        "tree": []
                                    },
                                    {
                                        "nodeId": 10,
                                        "itemId": 280,
                                        "amount": 4,
                                        "perHour": 4,
                                        "transitionCost": [
                                            0.5
                                        ],
                                        "tree": [
                                            {
                                                "nodeId": 11,
                                                "itemId": 5,
                                                "amount": 4,
                                                "perHour": 2,
                                                "transitionCost": [
                                                    1
                                                ],
                                                "tree": [
                                                    {
                                                        "nodeId": 13,
                                                        "itemId": 23,
                                                        "amount": 1,
                                                        "perHour": 2,
                                                        "transitionCost": [],
                                                        "tree": []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    "inputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 9,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {},
                    "position": [
                        892.3671875,
                        224.74609375
                    ],
                    "name": "Output"
                },
                "id": 8,
                "name": "Diamond Axe",
                "capacity": 2,
                "type": "Output",
                "inputs": [
                    9
                ],
                "outputs": []
            },
            {
                "node": {
                    "id": 9,
                    "data": {
                        "resource": {
                            "id": 279,
                            "name": "Diamond Axe",
                            "index": [
                                7,
                                15
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 1,
                                "ingredients": [
                                    {
                                        "id": 264,
                                        "amount": 3
                                    },
                                    {
                                        "id": 280,
                                        "amount": 2
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 39,
                                "g": 178,
                                "b": 154
                            },
                            "secondaryColor": {
                                "r": 104,
                                "g": 78,
                                "b": 30
                            }
                        },
                        "name": "Crafter",
                        "amount": 1,
                        "perHour": 2,
                        "inputTree": [
                            {
                                "nodeId": 12,
                                "itemId": 264,
                                "amount": 1,
                                "perHour": 6,
                                "transitionCost": [],
                                "tree": []
                            },
                            {
                                "nodeId": 10,
                                "itemId": 280,
                                "amount": 4,
                                "perHour": 4,
                                "transitionCost": [
                                    0.5
                                ],
                                "tree": [
                                    {
                                        "nodeId": 11,
                                        "itemId": 5,
                                        "amount": 4,
                                        "perHour": 2,
                                        "transitionCost": [
                                            1
                                        ],
                                        "tree": [
                                            {
                                                "nodeId": 13,
                                                "itemId": 23,
                                                "amount": 1,
                                                "perHour": 2,
                                                "transitionCost": [],
                                                "tree": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    "inputs": {
                        "264": {
                            "connections": [
                                {
                                    "node": 12,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        },
                        "280": {
                            "connections": [
                                {
                                    "node": 10,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 8,
                                    "input": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        634.75,
                        185.16015625
                    ],
                    "name": "Crafter"
                },
                "id": 9,
                "name": "Diamond Axe",
                "capacity": 2,
                "type": "Crafter",
                "inputs": [
                    12,
                    10
                ],
                "outputs": [
                    8
                ]
            },
            {
                "node": {
                    "id": 10,
                    "data": {
                        "resource": {
                            "id": 280,
                            "name": "Stick",
                            "index": [
                                8,
                                15
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 5,
                                        "amount": 2
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 20,
                                "g": 20,
                                "b": 20
                            },
                            "secondaryColor": {
                                "r": 46,
                                "g": 46,
                                "b": 46
                            }
                        },
                        "name": "Crafter",
                        "amount": 4,
                        "perHour": 16,
                        "inputTree": [
                            {
                                "nodeId": 11,
                                "itemId": 5,
                                "amount": 4,
                                "perHour": 2,
                                "transitionCost": [
                                    1
                                ],
                                "tree": [
                                    {
                                        "nodeId": 13,
                                        "itemId": 23,
                                        "amount": 1,
                                        "perHour": 2,
                                        "transitionCost": [],
                                        "tree": []
                                    }
                                ]
                            }
                        ]
                    },
                    "inputs": {
                        "5": {
                            "connections": [
                                {
                                    "node": 11,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 9,
                                    "input": "280",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        290.0752213554107,
                        333.3719809112643
                    ],
                    "name": "Crafter"
                },
                "id": 10,
                "name": "Stick",
                "capacity": 16,
                "type": "Crafter",
                "inputs": [
                    11
                ],
                "outputs": [
                    9
                ]
            },
            {
                "node": {
                    "id": 11,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Crafter",
                        "amount": 4,
                        "perHour": 8,
                        "inputTree": [
                            {
                                "nodeId": 13,
                                "itemId": 23,
                                "amount": 1,
                                "perHour": 2,
                                "transitionCost": [],
                                "tree": []
                            }
                        ]
                    },
                    "inputs": {
                        "23": {
                            "connections": [
                                {
                                    "node": 13,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 10,
                                    "input": "5",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        5.686537567878396,
                        349.20249550487245
                    ],
                    "name": "Crafter"
                },
                "id": 11,
                "name": "Planks",
                "capacity": 8,
                "type": "Crafter",
                "inputs": [
                    13
                ],
                "outputs": [
                    10
                ]
            },
            {
                "node": {
                    "id": 12,
                    "data": {
                        "resource": {
                            "id": 264,
                            "name": "Diamond",
                            "index": [
                                8,
                                14
                            ],
                            "craftable": false,
                            "primaryColor": {
                                "r": 140,
                                "g": 244,
                                "b": 226
                            },
                            "secondaryColor": {
                                "r": 44,
                                "g": 205,
                                "b": 177
                            }
                        },
                        "name": "Resource",
                        "amount": 1,
                        "perHour": 6
                    },
                    "inputs": {},
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 9,
                                    "input": "264",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        119.50369174839669,
                        -4.801556465113696
                    ],
                    "name": "Resource"
                },
                "id": 12,
                "name": "Diamond",
                "capacity": 6,
                "type": "Resource",
                "inputs": [],
                "outputs": [
                    9
                ]
            },
            {
                "node": {
                    "id": 13,
                    "data": {
                        "resource": {
                            "id": 23,
                            "name": "Logs",
                            "index": [
                                6,
                                1
                            ],
                            "craftable": false,
                            "primaryColor": {
                                "r": 58,
                                "g": 46,
                                "b": 28
                            },
                            "secondaryColor": {
                                "r": 140,
                                "g": 112,
                                "b": 69
                            }
                        },
                        "name": "Resource",
                        "amount": 1,
                        "perHour": 2
                    },
                    "inputs": {},
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 11,
                                    "input": "23",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        -272.1581391532924,
                        368.46901709259714
                    ],
                    "name": "Resource"
                },
                "id": 13,
                "name": "Logs",
                "capacity": 2,
                "type": "Resource",
                "inputs": [],
                "outputs": [
                    11
                ]
            }
        ],
        "Crafter": [
            {
                "node": {
                    "id": 9,
                    "data": {
                        "resource": {
                            "id": 279,
                            "name": "Diamond Axe",
                            "index": [
                                7,
                                15
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 1,
                                "ingredients": [
                                    {
                                        "id": 264,
                                        "amount": 3
                                    },
                                    {
                                        "id": 280,
                                        "amount": 2
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 39,
                                "g": 178,
                                "b": 154
                            },
                            "secondaryColor": {
                                "r": 104,
                                "g": 78,
                                "b": 30
                            }
                        },
                        "name": "Crafter",
                        "amount": 1,
                        "perHour": 2,
                        "inputTree": [
                            {
                                "nodeId": 12,
                                "itemId": 264,
                                "amount": 1,
                                "perHour": 6,
                                "transitionCost": [],
                                "tree": []
                            },
                            {
                                "nodeId": 10,
                                "itemId": 280,
                                "amount": 4,
                                "perHour": 4,
                                "transitionCost": [
                                    0.5
                                ],
                                "tree": [
                                    {
                                        "nodeId": 11,
                                        "itemId": 5,
                                        "amount": 4,
                                        "perHour": 2,
                                        "transitionCost": [
                                            1
                                        ],
                                        "tree": [
                                            {
                                                "nodeId": 13,
                                                "itemId": 23,
                                                "amount": 1,
                                                "perHour": 2,
                                                "transitionCost": [],
                                                "tree": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    "inputs": {
                        "264": {
                            "connections": [
                                {
                                    "node": 12,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        },
                        "280": {
                            "connections": [
                                {
                                    "node": 10,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 8,
                                    "input": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        634.75,
                        185.16015625
                    ],
                    "name": "Crafter"
                },
                "id": 9,
                "name": "Diamond Axe",
                "capacity": 2,
                "type": "Crafter",
                "inputs": [
                    12,
                    10
                ],
                "outputs": [
                    8
                ]
            },
            {
                "node": {
                    "id": 10,
                    "data": {
                        "resource": {
                            "id": 280,
                            "name": "Stick",
                            "index": [
                                8,
                                15
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 5,
                                        "amount": 2
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 20,
                                "g": 20,
                                "b": 20
                            },
                            "secondaryColor": {
                                "r": 46,
                                "g": 46,
                                "b": 46
                            }
                        },
                        "name": "Crafter",
                        "amount": 4,
                        "perHour": 16,
                        "inputTree": [
                            {
                                "nodeId": 11,
                                "itemId": 5,
                                "amount": 4,
                                "perHour": 2,
                                "transitionCost": [
                                    1
                                ],
                                "tree": [
                                    {
                                        "nodeId": 13,
                                        "itemId": 23,
                                        "amount": 1,
                                        "perHour": 2,
                                        "transitionCost": [],
                                        "tree": []
                                    }
                                ]
                            }
                        ]
                    },
                    "inputs": {
                        "5": {
                            "connections": [
                                {
                                    "node": 11,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 9,
                                    "input": "280",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        290.0752213554107,
                        333.3719809112643
                    ],
                    "name": "Crafter"
                },
                "id": 10,
                "name": "Stick",
                "capacity": 16,
                "type": "Crafter",
                "inputs": [
                    11
                ],
                "outputs": [
                    9
                ]
            },
            {
                "node": {
                    "id": 11,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Crafter",
                        "amount": 4,
                        "perHour": 8,
                        "inputTree": [
                            {
                                "nodeId": 13,
                                "itemId": 23,
                                "amount": 1,
                                "perHour": 2,
                                "transitionCost": [],
                                "tree": []
                            }
                        ]
                    },
                    "inputs": {
                        "23": {
                            "connections": [
                                {
                                    "node": 13,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 10,
                                    "input": "5",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        5.686537567878396,
                        349.20249550487245
                    ],
                    "name": "Crafter"
                },
                "id": 11,
                "name": "Planks",
                "capacity": 8,
                "type": "Crafter",
                "inputs": [
                    13
                ],
                "outputs": [
                    10
                ]
            }
        ],
        "Resource": [
            {
                "node": {
                    "id": 12,
                    "data": {
                        "resource": {
                            "id": 264,
                            "name": "Diamond",
                            "index": [
                                8,
                                14
                            ],
                            "craftable": false,
                            "primaryColor": {
                                "r": 140,
                                "g": 244,
                                "b": 226
                            },
                            "secondaryColor": {
                                "r": 44,
                                "g": 205,
                                "b": 177
                            }
                        },
                        "name": "Resource",
                        "amount": 1,
                        "perHour": 6
                    },
                    "inputs": {},
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 9,
                                    "input": "264",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        119.50369174839669,
                        -4.801556465113696
                    ],
                    "name": "Resource"
                },
                "id": 12,
                "name": "Diamond",
                "capacity": 6,
                "type": "Resource",
                "inputs": [],
                "outputs": [
                    9
                ]
            },
            {
                "node": {
                    "id": 13,
                    "data": {
                        "resource": {
                            "id": 23,
                            "name": "Logs",
                            "index": [
                                6,
                                1
                            ],
                            "craftable": false,
                            "primaryColor": {
                                "r": 58,
                                "g": 46,
                                "b": 28
                            },
                            "secondaryColor": {
                                "r": 140,
                                "g": 112,
                                "b": 69
                            }
                        },
                        "name": "Resource",
                        "amount": 1,
                        "perHour": 2
                    },
                    "inputs": {},
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 11,
                                    "input": "23",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        -272.1581391532924,
                        368.46901709259714
                    ],
                    "name": "Resource"
                },
                "id": 13,
                "name": "Logs",
                "capacity": 2,
                "type": "Resource",
                "inputs": [],
                "outputs": [
                    11
                ]
            }
        ],
        "Output": [
            {
                "node": {
                    "id": 8,
                    "data": {
                        "resource": {
                            "id": 279,
                            "name": "Diamond Axe",
                            "index": [
                                7,
                                15
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 1,
                                "ingredients": [
                                    {
                                        "id": 264,
                                        "amount": 3
                                    },
                                    {
                                        "id": 280,
                                        "amount": 2
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 39,
                                "g": 178,
                                "b": 154
                            },
                            "secondaryColor": {
                                "r": 104,
                                "g": 78,
                                "b": 30
                            }
                        },
                        "name": "Output",
                        "amount": 1,
                        "perHour": 2,
                        "inputTree": [
                            {
                                "nodeId": 9,
                                "itemId": 279,
                                "amount": 1,
                                "perHour": 2,
                                "transitionCost": [
                                    0.3333333333333333,
                                    0.5
                                ],
                                "tree": [
                                    {
                                        "nodeId": 12,
                                        "itemId": 264,
                                        "amount": 1,
                                        "perHour": 6,
                                        "transitionCost": [],
                                        "tree": []
                                    },
                                    {
                                        "nodeId": 10,
                                        "itemId": 280,
                                        "amount": 4,
                                        "perHour": 4,
                                        "transitionCost": [
                                            0.5
                                        ],
                                        "tree": [
                                            {
                                                "nodeId": 11,
                                                "itemId": 5,
                                                "amount": 4,
                                                "perHour": 2,
                                                "transitionCost": [
                                                    1
                                                ],
                                                "tree": [
                                                    {
                                                        "nodeId": 13,
                                                        "itemId": 23,
                                                        "amount": 1,
                                                        "perHour": 2,
                                                        "transitionCost": [],
                                                        "tree": []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    "inputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 9,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {},
                    "position": [
                        892.3671875,
                        224.74609375
                    ],
                    "name": "Output"
                },
                "id": 8,
                "name": "Diamond Axe",
                "capacity": 2,
                "type": "Output",
                "inputs": [
                    9
                ],
                "outputs": []
            }
        ]
    }
    BB.treeChestCorrect = {
        "Nodes": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            {
                "node": {
                    "id": 14,
                    "data": {
                        "resource": {
                            "id": 54,
                            "name": "Chest",
                            "index": [
                                2,
                                6
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 1,
                                "ingredients": [
                                    {
                                        "id": 5,
                                        "amount": 8
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 157,
                                "g": 108,
                                "b": 38
                            },
                            "secondaryColor": {
                                "r": 122,
                                "g": 122,
                                "b": 122
                            }
                        },
                        "name": "Output",
                        "amount": 1,
                        "perHour": 10,
                        "inputTree": [
                            {
                                "nodeId": 15,
                                "itemId": 54,
                                "amount": 1,
                                "perHour": 10,
                                "transitionCost": [
                                    0.125
                                ],
                                "tree": [
                                    {
                                        "nodeId": 16,
                                        "itemId": 5,
                                        "amount": 4,
                                        "perHour": 20,
                                        "transitionCost": [
                                            1
                                        ],
                                        "tree": [
                                            {
                                                "nodeId": 17,
                                                "itemId": 23,
                                                "amount": 1,
                                                "perHour": 20,
                                                "transitionCost": [],
                                                "tree": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    "inputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 15,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {},
                    "position": [
                        637.9325207594314,
                        105.26248400715016
                    ],
                    "name": "Output"
                },
                "id": 14,
                "name": "Chest",
                "capacity": 10,
                "type": "Output",
                "inputs": [
                    15
                ],
                "outputs": []
            },
            {
                "node": {
                    "id": 15,
                    "data": {
                        "resource": {
                            "id": 54,
                            "name": "Chest",
                            "index": [
                                2,
                                6
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 1,
                                "ingredients": [
                                    {
                                        "id": 5,
                                        "amount": 8
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 157,
                                "g": 108,
                                "b": 38
                            },
                            "secondaryColor": {
                                "r": 122,
                                "g": 122,
                                "b": 122
                            }
                        },
                        "name": "Crafter",
                        "amount": 1,
                        "perHour": 10,
                        "inputTree": [
                            {
                                "nodeId": 16,
                                "itemId": 5,
                                "amount": 4,
                                "perHour": 20,
                                "transitionCost": [
                                    1
                                ],
                                "tree": [
                                    {
                                        "nodeId": 17,
                                        "itemId": 23,
                                        "amount": 1,
                                        "perHour": 20,
                                        "transitionCost": [],
                                        "tree": []
                                    }
                                ]
                            }
                        ]
                    },
                    "inputs": {
                        "5": {
                            "connections": [
                                {
                                    "node": 16,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 14,
                                    "input": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        337.9011798452045,
                        96.98029323194719
                    ],
                    "name": "Crafter"
                },
                "id": 15,
                "name": "Chest",
                "capacity": 10,
                "type": "Crafter",
                "inputs": [
                    16
                ],
                "outputs": [
                    14
                ]
            },
            {
                "node": {
                    "id": 16,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Crafter",
                        "amount": 4,
                        "perHour": 80,
                        "inputTree": [
                            {
                                "nodeId": 17,
                                "itemId": 23,
                                "amount": 1,
                                "perHour": 20,
                                "transitionCost": [],
                                "tree": []
                            }
                        ]
                    },
                    "inputs": {
                        "23": {
                            "connections": [
                                {
                                    "node": 17,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 15,
                                    "input": "5",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        60.38971573997103,
                        120.76698883988736
                    ],
                    "name": "Crafter"
                },
                "id": 16,
                "name": "Planks",
                "capacity": 80,
                "type": "Crafter",
                "inputs": [
                    17
                ],
                "outputs": [
                    15
                ]
            },
            {
                "node": {
                    "id": 17,
                    "data": {
                        "resource": {
                            "id": 23,
                            "name": "Logs",
                            "index": [
                                6,
                                1
                            ],
                            "craftable": false,
                            "primaryColor": {
                                "r": 58,
                                "g": 46,
                                "b": 28
                            },
                            "secondaryColor": {
                                "r": 140,
                                "g": 112,
                                "b": 69
                            }
                        },
                        "name": "Resource",
                        "amount": 1,
                        "perHour": 20
                    },
                    "inputs": {},
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 16,
                                    "input": "23",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        -204.27703075084622,
                        126.00077703839268
                    ],
                    "name": "Resource"
                },
                "id": 17,
                "name": "Logs",
                "capacity": 20,
                "type": "Resource",
                "inputs": [],
                "outputs": [
                    16
                ]
            }
        ],
        "Crafter": [
            {
                "node": {
                    "id": 15,
                    "data": {
                        "resource": {
                            "id": 54,
                            "name": "Chest",
                            "index": [
                                2,
                                6
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 1,
                                "ingredients": [
                                    {
                                        "id": 5,
                                        "amount": 8
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 157,
                                "g": 108,
                                "b": 38
                            },
                            "secondaryColor": {
                                "r": 122,
                                "g": 122,
                                "b": 122
                            }
                        },
                        "name": "Crafter",
                        "amount": 1,
                        "perHour": 10,
                        "inputTree": [
                            {
                                "nodeId": 16,
                                "itemId": 5,
                                "amount": 4,
                                "perHour": 20,
                                "transitionCost": [
                                    1
                                ],
                                "tree": [
                                    {
                                        "nodeId": 17,
                                        "itemId": 23,
                                        "amount": 1,
                                        "perHour": 20,
                                        "transitionCost": [],
                                        "tree": []
                                    }
                                ]
                            }
                        ]
                    },
                    "inputs": {
                        "5": {
                            "connections": [
                                {
                                    "node": 16,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 14,
                                    "input": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        337.9011798452045,
                        96.98029323194719
                    ],
                    "name": "Crafter"
                },
                "id": 15,
                "name": "Chest",
                "capacity": 10,
                "type": "Crafter",
                "inputs": [
                    16
                ],
                "outputs": [
                    14
                ]
            },
            {
                "node": {
                    "id": 16,
                    "data": {
                        "resource": {
                            "id": 5,
                            "name": "Planks",
                            "index": [
                                4,
                                0
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 4,
                                "ingredients": [
                                    {
                                        "id": 23,
                                        "amount": 1
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 152,
                                "g": 124,
                                "b": 74
                            },
                            "secondaryColor": {
                                "r": 81,
                                "g": 65,
                                "b": 41
                            }
                        },
                        "name": "Crafter",
                        "amount": 4,
                        "perHour": 80,
                        "inputTree": [
                            {
                                "nodeId": 17,
                                "itemId": 23,
                                "amount": 1,
                                "perHour": 20,
                                "transitionCost": [],
                                "tree": []
                            }
                        ]
                    },
                    "inputs": {
                        "23": {
                            "connections": [
                                {
                                    "node": 17,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 15,
                                    "input": "5",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        60.38971573997103,
                        120.76698883988736
                    ],
                    "name": "Crafter"
                },
                "id": 16,
                "name": "Planks",
                "capacity": 80,
                "type": "Crafter",
                "inputs": [
                    17
                ],
                "outputs": [
                    15
                ]
            }
        ],
        "Resource": [
            {
                "node": {
                    "id": 17,
                    "data": {
                        "resource": {
                            "id": 23,
                            "name": "Logs",
                            "index": [
                                6,
                                1
                            ],
                            "craftable": false,
                            "primaryColor": {
                                "r": 58,
                                "g": 46,
                                "b": 28
                            },
                            "secondaryColor": {
                                "r": 140,
                                "g": 112,
                                "b": 69
                            }
                        },
                        "name": "Resource",
                        "amount": 1,
                        "perHour": 20
                    },
                    "inputs": {},
                    "outputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 16,
                                    "input": "23",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "position": [
                        -204.27703075084622,
                        126.00077703839268
                    ],
                    "name": "Resource"
                },
                "id": 17,
                "name": "Logs",
                "capacity": 20,
                "type": "Resource",
                "inputs": [],
                "outputs": [
                    16
                ]
            }
        ],
        "Output": [
            {
                "node": {
                    "id": 14,
                    "data": {
                        "resource": {
                            "id": 54,
                            "name": "Chest",
                            "index": [
                                2,
                                6
                            ],
                            "craftable": true,
                            "recipe": {
                                "createdAmount": 1,
                                "ingredients": [
                                    {
                                        "id": 5,
                                        "amount": 8
                                    }
                                ]
                            },
                            "primaryColor": {
                                "r": 157,
                                "g": 108,
                                "b": 38
                            },
                            "secondaryColor": {
                                "r": 122,
                                "g": 122,
                                "b": 122
                            }
                        },
                        "name": "Output",
                        "amount": 1,
                        "perHour": 10,
                        "inputTree": [
                            {
                                "nodeId": 15,
                                "itemId": 54,
                                "amount": 1,
                                "perHour": 10,
                                "transitionCost": [
                                    0.125
                                ],
                                "tree": [
                                    {
                                        "nodeId": 16,
                                        "itemId": 5,
                                        "amount": 4,
                                        "perHour": 20,
                                        "transitionCost": [
                                            1
                                        ],
                                        "tree": [
                                            {
                                                "nodeId": 17,
                                                "itemId": 23,
                                                "amount": 1,
                                                "perHour": 20,
                                                "transitionCost": [],
                                                "tree": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    "inputs": {
                        "resource": {
                            "connections": [
                                {
                                    "node": 15,
                                    "output": "resource",
                                    "data": {}
                                }
                            ]
                        }
                    },
                    "outputs": {},
                    "position": [
                        637.9325207594314,
                        105.26248400715016
                    ],
                    "name": "Output"
                },
                "id": 14,
                "name": "Chest",
                "capacity": 10,
                "type": "Output",
                "inputs": [
                    15
                ],
                "outputs": []
            }
        ]
    }
    // BB.FSM.Transition('Task1');
    // $('#botContent').toggle();
    // $('#menuTabs li:eq(3) a').tab('show')

    
}