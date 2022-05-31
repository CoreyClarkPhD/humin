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
                        798.4924623115578,
                        146.62814070351757
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
                        798.4924623115578,
                        146.62814070351757
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

    BB.treePlanksNoOutpout = {
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
    // BB.FSM.Transition('Task1');
    // $('#botContent').toggle();
    // $('#menuTabs li:eq(3) a').tab('show')

    
}