//JaHOVA OS API
var CXHRObject = function(){
    var xhrObj = false;

    try {
        xhrObj = new XMLHttpRequest();
    }
    catch (e) {
        var progid = ['MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP'];
        for (var i = 0; i < progid.length; ++i) {
            try {
                xhrObj = new ActiveXObject(progid[i]);
            }
            catch (e) {
                continue;
            }
            break;
        }
    }

    finally {
        return xhrObj;
    }
};

var CCore = function(id){
    //Private Members
    var _id = id;
    var _state
    
    //Public Members
    
    //OS Pointers
    this.os = com.jahova.os.Instance();
    this.utilities = com.jahova.utilities.Instance();
    
    
    this.name = null;       //User Defined Name
    this.osName = null;     //OS Defined Name
    this.path = null;       //url path to core code
    this.threadSafe = null; //bool : can core be run as a thread
    
    //Method Pointers
    this.SendRequest = null;    // Pointer to Instruction Module
    this.Dispatcher = null;     // Pointer to Event->Dispatch
    this.OnRequest = null;      // Instruction Request Handler
    
    //Map Containg Pointers to Core Interface Methods
    this.Interface = this.os.resschmgr.Create.Map();
    
    //Accesors and Mutators
    this.SetID = function(id)
    {
        _id = id;
    }
    
    this.GetID = function()
    {
        return _id;
    }
    
    this.SetState = function(state)
    {
        _state = state;
    }
    
    this.GetState = function()
    {
        return _state;
    }
};


var CEvent = function(id, target, name, eventType, custom, can_bubble, cancelable){
    //OS Pointers
    this.os = com.jahova.os.Instance();
    this.utilities = com.jahova.utilities.Instance();
    this.scope = this;
    
    this.id = id;
    this.target = target;               // Event Object, this event belongs too
    this.name = name;                   //click, mouseover, com_jahova, etc
    this.eventType = eventType;         //HTMLEvent, MouseEvent, KeyboardEvent, etc
    this.custom = custom;               //true or false
    this.can_bubble = false;
    this.cancelable = false;
    this.event;                         //event DOM object
    this.nextID = 0;                    //ID supplied to Subscribers
    
    this.Subscribers =  this.os.resschmgr.Create.Map();      //Map containing Subscribers   
    this.Name2ID = this.os.resschmgr.Create.Map();           //Map containing Subscribers Name as Key and ID as value
    //Test for custom or default event
    if(this.custom)
    {
        //Custom Event Type - Use click event
        if(document.createEvent) //gecko, safari
        {   
            //Creating a message event for worker
            if(window.Worker && (this.target instanceof Worker))
            {
                this.event = document.createEvent("MessageEvent");
            }
            else //if(/Konqueror|Safari|KHTML/.test(navigator.userAgent))
            {
                this.event = document.createEvent("MouseEvents");
                this.event.initMouseEvent("click", false, true, window, 0,0,0,0,0,false, false, false, false, 0, null);
            }
        }
        else //msie
        {
            if(this.target.constructor != Worker)
            {
                this.event = document.createEventObject();    
            }
            else{
                //Error worker not supported in IE
            }    
        }
    }
    else  //Not a custom event, standard event 
    {
        if(document.createEvent) //gecko, safari
        {
            
            if(/Konqueror|Safari|KHTML/.test(navigator.userAgent))
            {
                this.event = document.createEvent(this.eventType);   
                this.event.initEvent(this.name, this.can_bubble, this.cancelable);
            }
            else //gecko MouseEvents
            {
                this.event = document.createEvent(this.eventType);
//
//Need to have a look up technique
//  to find the proper init Method
//  based on the event type.
//
                this.event.initMouseEvent(this.name, this.can_bubble, this.cancelable, window, 0,0,0,0,0,false, false, false, false, 0, null);
            }
        }
        else //msie
        {
            this.event = document.createEventObject();    
        }
    }

    
};
CEvent.prototype.Subscribe = function(name, eventName, callback, capture){
    //Create a subscriber and push to Q
    this.nextID++;  //Get next ID
    var id = this.nextID; 
    var sub = new this.os.resschmgr.Create.Subscriber(name, id, eventName, callback, capture);
    this.Subscribers.put(id,sub);
    this.Name2ID.put(name,id);
    
    //Attach event to target
    if(this.custom)
    {
        if(window.Worker && ( this.target instanceof Worker))
        {
            if(this.target.attachEvent != undefined)
            {
                this.target.attachEvent("onmessage", callback);
            }
            else
            {
                this.target.addEventListener("message", callback, capture);    
            }                
        }
        else
        {
            if(this.target.attachEvent != undefined)
            {
                this.target.attachEvent("onclick", callback);
            }
            else
            {
                this.target.addEventListener("click", callback, capture);    
            } 
        } 
    }
    else
    {
        if(this.target.attachEvent != undefined)
        {
            //IE
            this.target.attachEvent("on" + this.name, callback);
        }
        else
        {
            //Everyone else
            this.target.addEventListener(this.name, callback, capture);    
        }   
    }
     
     return sub;    
}

CEvent.prototype.Unsubscribe = function(subID){
    //Get subscriber
    var sub  = this.Subscribers.get(subID);
    
    if(this.custom)
    {
        //Remove Listener from target
        if(this.target.detachEvent != undefined)
        {
            //IE
            this.target.detachEvent("onclick", sub.callback);
        }
        else
        {
            //Everyone else
            this.target.removeEventListener("click", sub.callback, false);    
        }  
        
    }
    else
    {
        if(this.target.detachEvent != undefined)
        {
            //IE
            this.target.detachEvent("on" + this.name, sub.callback);
        }
        else
        {
            //Everyone else
            this.target.removeEventListener(this.name, sub.callback, sub.capture);    
        }   
        
    }
    
    //Remove Subscriber from Maps
    Name2ID.remove(sub.name);
    Subscribers.remove(subID);
     
}

CEvent.prototype.RemoveAllSubscribers = function(){
    
    for(var i = 0; i++ < this.Subscribers.size; this.Subscribers.next())
    {
        this.Unsubscribe(Subscribers.value().id);
    }

}

CEvent.prototype.Dispatch = function(data){
        if(this.custom)
        {
            //For custom event add data to event object
            this.event.jahovaos = data;
            
            if(document.createEvent)
            {
                if(window.Worker && (this.target instanceof Worker))
                {
                    return this.target.postMessage(data);
                }
                else
                {
                    return this.target.dispatchEvent(this.event);
                }
            }
            else
            {
                return this.target.fireEvent('onclick', this.event);    
            }   
        }
        else
        {
            if(document.createEvent)
            {
                return this.target.dispatchEvent(this.event);
            }
            else
            {
                return this.target.fireEvent('on'+this.name, this.event);    
            }   
            
        }
};

CEvent.prototype.GetSubscriberByID = function(id){
    return this.Subscribers.get(id);
}

CEvent.prototype.GetSubscribersByName = function(name){
    var output = false;

    for(var i = 0; i++ < this.Subscribers.size; this.Subscribers.next())
    {
        if(this.Subscribers.value().name == name)
        {
            if(!output)
            {
                output = [];
            }
            
            output.push(this.Subscribers.value());
        }
    }
    return output;
}

CEvent.prototype.GetSubscriberID = function(name){
    return this.Subscribers.get(this.Name2ID.get(name));
}

var CEventObject = function(id, name, custom, targetID){
    //OS Pointers
    this.os = com.jahova.os.Instance();
    this.utilities = com.jahova.utilities.Instance();
    
    this.id = id;
    this.name = name;
    this.target;
    this.targetID = targetID;
    this.custom = custom;
    this.nextID = 0;
     
    this.PublishedEvents = this.os.resschmgr.Create.Map();
    this.Name2ID = this.os.resschmgr.Create.Map();
    
    if(this.custom)
    {
        //Test to see if target ID is non numeric
        //  If so then creating a thread and ID is path
        if(isNaN(this.targetID))
        {
            this.target = new Worker(this.targetID);

        }
        else
        {
            this.target  = document.createElement("a");
            this.target.name = this.name;
            this.target.id = this.targetID;
            document.body.appendChild(this.target);
        }
        
    }
    else
    {
        this.target = document.getElementById(this.targetID);
    }
    
};

CEventObject.prototype.PublishEvent = function(name, eventType, can_bubble, cancelable){
    //Create an Event 
    this.nextID++;
    var id = this.nextID;
    var event = this.os.resschmgr.Create.Event(id, this.target, name, eventType, this.custom, can_bubble, cancelable);
    
    //Add Event to PublishedEvents and Name2ID Maps
    this.PublishedEvents.put(id,event);
    this.Name2ID.put(name,id);
    return event;
};

CEventObject.prototype.UnpublishEvent = function(id){
    //Get Event
    var event = this.PublishedEvents.get(id);
    
    //Remove all subscribers of event
    event.RemoveAllSubscribers();
    
    //Remove event from the PublishedEvent Name2ID Maps
    this.Name2ID.remove(event.name);
    this.PublishedEvents.remove(id);
    
}

CEventObject.prototype.UnpublishAllEvents = function(){
    
    for(var i = 0; i++ < this.PublishedEvents.size; this.PublishedEvents.next())
    {
        var event = this.PublishedEvents.value();
        
        event.RemoveAllSubscribers();
    }
    
}

CEventObject.prototype.GetEventByID = function(id){
    return this.PublishedEvents.get(id);
}

CEventObject.prototype.GetEventsByName = function(name){
    var output = false;

    for(var i = 0; i++ < this.PublishedEvents.size; this.PublishedEvents.next())
    {
        if(this.PublishedEvents.value().name == name)
        {
            if(!output)
            {
                output = [];
            }
            
            output.push(this.PublishedEvents.value());
        }
    }
    return output;
}

CEventObject.prototype.GetEventID = function(name){
    return this.PublishedEvents.get(this.Name2ID.get(name));
}

var CSubscriber = function(name, id, eventName, callback, capture){
    this.name = name;
    this.id = id;
    this.eventName = eventName;
    this.callback = callback;
    this.capture = capture;
};

var CInstruction = function(){
    this.SenderID = null;              //Resource ID requesting execution
    this.ReceiverID = null;            //Resource ID or resource to be executed
    this.Data = null;                  //Data, input parameters, arguments to be used by interface
    this.Priority = null;              //Priority level of request, only used if allowed
    this.InterfaceID = null;           //ID of interface method being requested
    this.InterfaceName = null;         //Name of interface method being requested
    this.SendTime = null;              //Time of request
    this.DeliveryTime = null;          //Time of Interpreter calling interface
    this.CallBackFunction = null;      //CallBack Function, only allowed for internal OS cores
    this.CallBackInterfaceID = null;   //Call Back Interface ID, allows external cores to associate a call back function
};

var CCommand = function(name, callback, scope, help){
    this.name = name;
    this.callback = callback;
    this.scope = scope;
    this.help = help;
}

CCommand.prototype.Execute = function(){
    this.callback.apply(this.scope, arguments)
}

var CMap = function(linkEntries){
    this.current = undefined;
    this.size = 0;
    this.isLinked = true;

    if(linkEntries === false)
    {
            this.disableLinking();
    }
            
    this.from = function(obj, foreignKeys, linkEntries)
    {
        var map = new Map(linkEntries);

        for(var prop in obj) {
                if(foreignKeys || obj.hasOwnProperty(prop))
                        map.put(prop, obj[prop]);
        }

        return map;
    }
    
    this.noop = function()
    {
            return this;
    }
    
    this.illegal = function()
    {
            throw new Error('can\'t do this with unlinked maps');
    }
    
    this.reverseIndexTableFrom = function(array, linkEntries)
    {
        var map = new Map(linkEntries);

        for(var i = 0, len = array.length; i < len; ++i) {
                var	entry = array[i],
                        list = map.get(entry);

                if(list) list.push(i);
                else map.put(entry, [i]);
        }

        return map;
    }

    this.cross = function(map1, map2, func, thisArg)
    {
        var linkedMap, otherMap;
    
        if(map1.isLinked) {
                linkedMap = map1;
                otherMap = map2;
        }
        else if(map2.isLinked) {
                linkedMap = map2;
                otherMap = map1;
        }
        else Map.illegal();
    
        for(var i = linkedMap.size; i--; linkedMap.next()) {
                var key = linkedMap.key();
                if(otherMap.contains(key))
                        func.call(thisArg, key, map1.get(key), map2.get(key));
        }
    
        return thisArg;
    }

    this.uniqueArray = function(array)
    {
            var map = new Map;
    
            for(var i = 0, len = array.length; i < len; ++i)
                    map.put(array[i]);
    
            return map.listKeys();
    }                                    
};

CMap.prototype.disableLinking = function(){
    this.isLinked = false;
    this.link = Map.noop;
    this.unlink = Map.noop;
    this.disableLinking = Map.noop;
    this.next = Map.illegal;
    this.key = Map.illegal;
    this.value = Map.illegal;
    this.removeAll = Map.illegal;
    this.each = Map.illegal;
    this.flip = Map.illegal;
    this.drop = Map.illegal;
    this.listKeys = Map.illegal;
    this.listValues = Map.illegal;

    return this;
};

CMap.prototype.hash = function(value){
    return value instanceof Object ? (value.__hash ||
            (value.__hash = 'object ' + ++arguments.callee.current)) :
            (typeof value) + ' ' + String(value);
};

CMap.prototype.hash.current = 0;            
CMap.prototype.link = function(entry){
        if(this.size === 0) {
                entry.prev = entry;
                entry.next = entry;
                this.current = entry;
        }
        else {
                entry.prev = this.current.prev;
                entry.prev.next = entry;
                entry.next = this.current;
                this.current.prev = entry;
        }
};

CMap.prototype.unlink = function(entry) {
        if(this.size === 0)
                this.current = undefined;
        else {
                entry.prev.next = entry.next;
                entry.next.prev = entry.prev;
                if(entry === this.current)
                        this.current = entry.next;
        }
};

CMap.prototype.get = function(key) {
        var entry = this[this.hash(key)];
        return typeof entry === 'undefined' ? undefined : entry.value;
};

CMap.prototype.put = function(key, value) {
        var hash = this.hash(key);

        if(this.hasOwnProperty(hash))
                this[hash].value = value;
        else {
                var entry = { key : key, value : value };
                this[hash] = entry;

                this.link(entry);
                ++this.size;
        }

        return this;
};

CMap.prototype.remove = function(key) {
        var hash = this.hash(key);

        if(this.hasOwnProperty(hash)) {
                --this.size;
                this.unlink(this[hash]);

                delete this[hash];
        }

        return this;
};

CMap.prototype.removeAll = function() {
        while(this.size)
                this.remove(this.key());

        return this;
};

CMap.prototype.contains = function(key) {
        return this.hasOwnProperty(this.hash(key));
};

CMap.prototype.isUndefined = function(key) {
        var hash = this.hash(key);
        return this.hasOwnProperty(hash) ?
                typeof this[hash] === 'undefined' : false;
};

CMap.prototype.next = function() {
        this.current = this.current.next;
};

CMap.prototype.key = function() {
        return this.current.key;
};

CMap.prototype.value = function() {
        return this.current.value;
};

CMap.prototype.each = function(func, thisArg) {
        if(typeof thisArg === 'undefined')
                thisArg = this;

        for(var i = this.size; i--; this.next()) {
                var n = func.call(thisArg, this.key(), this.value(), i > 0);
                if(typeof n === 'number')
                        i += n; // allows to add/remove entries in func
        }

        return this;
};

CMap.prototype.flip = function(linkEntries) {
        var map = new Map(linkEntries);

        for(var i = this.size; i--; this.next()) {
                var	value = this.value(),
                        list = map.get(value);

                if(list) list.push(this.key());
                else map.put(value, [this.key()]);
        }

        return map;
};

CMap.prototype.drop = function(func, thisArg) {
        if(typeof thisArg === 'undefined')
                thisArg = this;

        for(var i = this.size; i--; ) {
                if(func.call(thisArg, this.key(), this.value())) {
                        this.remove(this.key());
                        --i;
                }
                else this.next();
        }

        return this;
};

CMap.prototype.listValues = function() {
        var list = [];

        for(var i = this.size; i--; this.next())
                list.push(this.value());

        return list;
}

CMap.prototype.listKeys = function() {
        var list = [];

        for(var i = this.size; i--; this.next())
                list.push(this.key());

        return list;
}

CMap.prototype.toString = function() {
        var string = '[object Map';

        function addEntry(key, value, hasNext) {
                string += '    { ' + this.hash(key) + ' : ' + value + ' }' +
                        (hasNext ? ',' : '') + '\n';
        }

        if(this.isLinked && this.size) {
                string += '\n';
                this.each(addEntry);
        }

        string += ']';
        return string;
};

var CQueue = function(){
     this.q = [];
};

CQueue.prototype.push = function(obj){          //Adds obj to end of queue
    this.q.push(obj);   
}

CQueue.prototype.pop = function(){              //Returns the object from beginning of queue
     return this.q.splice(0,1);
    
}

CQueue.prototype.push_front = function(obj){    //Inserts item at beginning of queue (acts as stack)
    this.q.unshift(obj);
    
}

CQueue.prototype.push_back = function(obj){     //Inserts item at end of queue
    
    this.q.push(obj);
}

CQueue.prototype.pop_front = function(){        //Returns the item at beginning of queue
    return this.q.splice(0,1);
    
}

CQueue.prototype.pop_back = function(){         //Returns the item at end of queue (acts as stack)
    return this.q.pop();
}

CQueue.prototype.length = function(){           //Returns queue length
    return this.q.length;
}

CQueue.prototype.toString = function(){         //Returns q as a string
    
    return this.q.toString();
}

CQueue.prototype.at = function(index){          //Returns the value at respected index
    return this.q[index];
}

CQueue.prototype.set = function(index, obj){    //Set object at given index
    this.q[index] = obj;
}

CQueue.prototype.find = function(searchStr){    //Returns array of indexs of searchStr (or regex) found in array, or false if not found
    var returnArray = false;
    for (var i=0; i< this.q.length; i++)
    {
        if (typeof(searchStr) == 'function')
        {
            if (searchStr.test(this.q[i]))
            {
                if (!returnArray)
                {
                    returnArray = []
                }
            
                returnArray.push(i);
            }
        }
        else
        {
            if (this.q[i]===searchStr)
            {
                if (!returnArray)
                {
                    returnArray = []
                }
                returnArray.push(i);
            }
        }
    }
    
    return returnArray;
    
}

CQueue.prototype.remove = function(index){      //Removes value at index
    this.q.splice(index,1);
}                                    


var CWindow = function(uID,uName, uWidth, uHeight, uTop, uLeft){
    var ID = uID
    var NAME = uName;
    
    var _onclose = function(e){
        
        if(this.onclose != null){
            this.onclose.apply(this.onclosescope, [e]);
        }
        
        os.resschmgr.WindowManager.Windows.remove(ID);
        document.body.removeChild(this.Elements.Window);
    }.bind(this);
    
    var _onmin = function(e){
        
        if(this.onmin != null){
            this.onmin.apply(this.onminscope, [e]);
        }
        
        if(!this.isMinimized){
            this.Elements.Body.style.display = "none";
            this.Elements.Status.style.display = "none";
            this.Elements.Menu.style.display = "none";
            this.Elements.HeaderButtons.style.display = "none";
            //this.Elements.HeaderText.style.textAlign = "left";
            this.Elements.Header.style.overflow = "hidden";
            this.Elements.Header.style.resize = "none";
            this.Elements.Header.style.width = "100%";
            this.Elements.Header.style.height = "100%";
            this.Elements.Header.style.borderTopLeftRadius = "0px";
            this.Elements.Header.style.borderTopRightRadius = "0px";
            
            this.left = this.Elements.Window.style.left;
            this.top = this.Elements.Window.style.top;
            
            this.Elements.Window.className = "";
            this.Elements.Window.style.height = "25px";
            this.Elements.Window.style.width = "150px";
            this.Elements.Window.style.top = "";
            this.Elements.Window.style.left  ="";
            this.Elements.Window.style.borderRight = "1px solid black";
            this.Elements.Window.style.position = "relative";
            this.Elements.Window.style.float = "left";
            this.Elements.Window.style.cssFloat = "left";
            this.Elements.Window.style.display = "inline-block";
            //this.Elements.Window.style.borderRadius = "0px";
            
            //if(os.Elements.Dock){
            if(os.windows.Desktop.Get.state.desktop() == "VISIBLE"){
                os.windows.Desktop.Elements.dock.AppendChild(this.Elements.Window);
                //os.Elements.Dock.appendChild(this.Elements.Window);
                this.Elements.Header.onclick = _onmin;
            }
            this.isMinimized = true;
            e.stopPropagation();
        }
        else{
            
            this.Elements.Body.setAttribute("style","");
            this.Elements.Status.setAttribute("style","");
            this.Elements.Menu.setAttribute("style","");
            this.Elements.HeaderButtons.setAttribute("style","");
            this.Elements.Header.setAttribute("style","");
            
            this.Elements.Window.style.position = "absolute";
            this.Elements.Window.style.width = this.width + "px";
            this.Elements.Window.style.height = this.height + "px";
            this.Elements.Window.style.top = this.top;
            this.Elements.Window.style.left = this.left;
            this.Elements.Window.className = "outputWindow";
            
            document.body.appendChild(this.Elements.Window);
            this.Elements.Header.onclick = "";
            
            this.isMinimized = false;
            e.stopPropagation();
        }
        
        
    }.bind(this);
    
    var _onmax = function(e){
        
        if(this.onmax != null){
            this.onmax.apply(this.onmaxscope, [e]);
        }
        
        if(!this.isMaximized){
            this.isMaximized = true;
            this.left = this.Elements.Window.style.left;
            this.top = this.Elements.Window.style.top;
            this.Elements.Window.style.width =   "100%";
            this.Elements.Window.style.height =   (window.innerHeight - 46) + "px";
            this.Elements.Window.style.top = "20px";
            this.Elements.Window.style.left  = "0px";
            this.Elements.Window.style.border = "none";
            this.makeActive();
            e.stopPropagation();
        }
        else{
            this.isMaximized = false;
            this.Elements.Window.style.width = this.width + "px";
            this.Elements.Window.style.height = this.height + "px";
            this.Elements.Window.style.top = this.top;
            this.Elements.Window.style.left = this.left;
            this.Elements.Window.style.borderRight = "";
            this.Elements.Status.setAttribute("style","");
            e.stopPropagation();
        }
    }.bind(this);

    this.makeActive = function(e){
        if(os.resschmgr.WindowManager.ActiveWindow){
            os.resschmgr.WindowManager.ActiveWindow.Elements.Header.onmousedown = os.resschmgr.WindowManager.ActiveWindow.BeginDrag;
            os.resschmgr.WindowManager.ActiveWindow.Elements.Window.onclick = os.resschmgr.WindowManager.ActiveWindow.makeActive;
            os.resschmgr.WindowManager.ActiveWindow.Elements.Window.style.zIndex = 20;
            os.resschmgr.WindowManager.ActiveWindow.Elements.StatusText.innerHTML = "Status: Inactive";
            os.resschmgr.WindowManager.ActiveWindow.Elements.Menu.style.display = "none";
        }
        
        this.Elements.Header.onmousedown = this.BeginDrag;
        this.Elements.Window.onclick = "";
        this.Elements.Window.style.zIndex = 25;
        this.Elements.StatusText.innerHTML = "Status: Active";
        this.Elements.Menu.setAttribute("style","");
        os.resschmgr.WindowManager.ActiveWindow = this;
    }.bind(this);
    
    this.width = uWidth;
    this.height = uHeight;
    this.top = uTop;
    this.left = uLeft;
    
    this.startX = null;
    this.startY = null;
    this.startLeft = null;
    this.startTop = null;
    
    this.onclose = null;
    this.onmin = null;
    this.onmax = null;
    this.onfocus = null;
    
    this.onclosescope = null;
    this.onminscope = null;
    this.onmaxscope = null;
    this.onfocusscope = null;
    
    this.isMinimized = false;
    this.isMaximized = false;
    this.Elements = {
        Window: document.createElement("div"),
        Header: document.createElement("div"),
        HeaderText: document.createElement("div"),
        HeaderButtons: document.createElement("div"),
        Close: document.createElement("div"),
        Min: document.createElement("div"),
        Max: document.createElement("div"),
        Body: document.createElement("div"),
        Status: document.createElement("div"),
        StatusText: document.createElement("div"),
        Menu: document.createElement("div"),
        File: document.createElement("div"),
        Edit: document.createElement("div"),
        View: document.createElement("div")
    };
    
    this.Elements.Window.style.position = "absolute";
    this.Elements.Window.style.width = this.width + "px";
    this.Elements.Window.style.height = this.height + "px";
    this.Elements.Window.style.top = this.top + "px";
    this.Elements.Window.style.left = this.left + "px";
    this.Elements.Window.className = "outputWindow";
    this.Elements.Window.id = ID;
    this.Elements.Window.name = ID;
    this.Elements.Window.onclick = this.makeActive;
    this.Elements.Window.onfocus = function(){alert("On Focus")};
    this.Elements.Window.onblur = function(){alert("On Blur")};
    this.Elements.Window.onactivate = function(){alert("On Activate")};
    
    
    this.Elements.Header.className = "windowTitleBar";
    this.Elements.Header.id = ID;
    
    this.Elements.HeaderButtons.className = "macButtonsContainer";
    this.Elements.Close.className = "mac_os_x_close";                                    
    this.Elements.HeaderButtons.appendChild(this.Elements.Close);
    
    this.Elements.Min.className = "mac_os_x_minimize";                                    
    this.Elements.HeaderButtons.appendChild(this.Elements.Min);
    
    this.Elements.Max.className = "mac_os_x_maximize";                                    
    this.Elements.HeaderButtons.appendChild(this.Elements.Max);
    
    this.Elements.Header.appendChild(this.Elements.HeaderButtons);
    this.Elements.Header.name = ID;
    
    this.Elements.HeaderText.innerHTML = uName;
    this.Elements.HeaderText.className = "windowTitle";
    this.Elements.HeaderText.name = ID;
    this.Elements.Header.appendChild(this.Elements.HeaderText);
    
    this.Elements.Window.appendChild(this.Elements.Header);
    //this.Elements.Header.innerHTML = uName;
    
    this.Elements.Close.onclick = _onclose;
    this.Elements.Min.onclick = _onmin;
    this.Elements.Max.onclick = _onmax;
    
    this.Elements.File.className = "windowMenu";
    this.Elements.File.innerHTML = "File";
    
    this.Elements.Edit.className = "windowMenu";
    this.Elements.Edit.innerHTML = "Edit";
    
    this.Elements.View.className = "windowMenu";
    this.Elements.View.innerHTML = "View";
    this.Elements.Menu.className = "windowMenuBarMac";
    this.Elements.Menu.name = ID;
    
    this.Elements.Menu.appendChild(this.Elements.File);
    this.Elements.Menu.appendChild(this.Elements.Edit);
    this.Elements.Menu.appendChild(this.Elements.View);
    
    this.Elements.Window.appendChild(this.Elements.Menu);
    
    this.Elements.Window.appendChild(this.Elements.Body);
    
    this.Elements.Status.className = "windowStatusBar";
    this.Elements.Status.name = ID;
    this.Elements.StatusText.innerHTML = "Status: Active";
    this.Elements.StatusText.className = "windowStatus";
    this.Elements.StatusText.name = ID;
    this.Elements.Status.appendChild(this.Elements.StatusText);
    this.Elements.Window.appendChild(this.Elements.Status);
    
    
    
    document.body.appendChild(this.Elements.Window);
    os.resschmgr.WindowManager.Windows.put(uID, this);
    //os.resschmgr.WindowManager.ActiveWindow = this;
    this.makeActive();
    return this;
};

CWindow.prototype.BeginDrag = function(event){
    var obj = os.resschmgr.WindowManager.Windows.get(event.target.name);
    //var obj = os.resschmgr.WindowManager.Windows.value();
    
    //document.addEventListener("mouseup", this.DragStop.apply(this,arguments), false);
    //document.addEventListener("mousemove", this.DragStart.apply(this,arguments), false);
    //this.Elements.Header.onmouseup = this.DragStop.bind(this);
    //this.Elements.Header.mousemove = this.DragStart.bind(this);
   if(obj){
        obj.Elements.Window.style.zIndex = 21;
        if(os.resschmgr.WindowManager.ActiveWindow){
            os.resschmgr.WindowManager.ActiveWindow.Elements.Window.style.zIndex = 20;
        }
        
        //os.resschmgr.WindowManager.ActiveWindow = obj;
        obj.makeActive();
        document.addEventListener("mouseup", obj.DragStop, false);
        document.addEventListener("mousemove", obj.DragStart, false);
        obj.startX = event.clientX + window.scrollX;
        obj.startY = event.clientY + window.scrollY;
        obj.startLeft = parseInt(obj.Elements.Window.style.left, 10);
        obj.startTop = parseInt(obj.Elements.Window.style.top, 10);
        
        if (isNaN(obj.startLeft)) obj.startLeft = 0;
        if (isNaN(obj.startTop))  obj.startTop  = 0;
        
        //obj.Elements.Window.style.zIndex = 20;
   }
    event.preventDefault();
};

CWindow.prototype.DragStart = function(event, obj){
    var object = os.resschmgr.WindowManager.ActiveWindow;//os.resschmgr.WindowManager.Windows.get(event.target.name);//os.resschmgr.WindowManager.Windows.value();
    var x,y;
    
    x = event.clientX + window.scrollX;
    y = event.clientY + window.scrollY;
    
    if(object){
        object.Elements.Window.style.left = (object.startLeft + x - object.startX) + "px";
        object.Elements.Window.style.top  = (object.startTop  + y - object.startY) + "px";
    }
    //object.Elements.Body.innerHTML = "<br/>Top: " + (object.startLeft + x - object.startX) ;
    //object.Elements.Body.innerHTML += "<br/>Left: " + (object.startTop  + y - object.startY);
    //object.Elements.Body.innerHTML += "<br/>Cursor X: " + event.clientY;
    //object.Elements.Body.innerHTML += "<br/>Cursor Y: " + event.clientX;
    event.preventDefault();

};

CWindow.prototype.DragStop = function(event,obj){
    var object = os.resschmgr.WindowManager.ActiveWindow;//os.resschmgr.WindowManager.Windows.get(event.target.name);//os.resschmgr.WindowManager.Windows.value();
    if(object){
        document.removeEventListener("mousemove", object.DragStart,false);
        document.removeEventListener("mouseup", object.DragStop, false);
    }

};

CWindow.prototype.Close = function(){
    os.resschmgr.WindowManager.Windows.remove(ID);
    document.body.removeChild(this.Elements.Window);
};

CWindow.prototype.Move = function(top, left){
    this.Elements.Window.style.top = top + "px";
    this.Elements.Window.style.left = left + "px";
    this.top = top;
    this.left = left;
};

CWindow.prototype.Resize = function(width, height){
    this.Elements.Window.style.width = width + "px";
    this.Elements.Window.style.height = height + "px";
    this.width = width;
    this.height = height;
};
var CHTMLElement = function(tag){
    var _html = null;
    var _classes = "";
    
    //Adjust classes of HTML Element
    this.Class = {                                    
        //Adds a class to the current class list
        Add: function(sClass){
            _classes += sClass + " ";
            _html.className = _classes;
            return _classes;
        },
        
        //removes an individual class from the class list
        Remove: function(sClass){
            
            _classes = _classes.replace(sClass, "");
            
            return _classes;
        },
        
        //removes all classes from class list
        ClearAll: function(){
            _classes = "";
            _html.className = "";
        },
        
        Get: function(){return _classes;}   
    };
    
    this.AppendToID = function(parentID){
        
        document.getElementById(parentID).appendChild(_html);
    };
    this.AppendTo = function(parent){
        parent.appendChild(_html);
    };
    this.AppendChild = function(child){
        _html.appendChild(child);
    }
    this.GetHeight = function(){
        return _html.clientHeight;
    }
    this.SetHTML = function(tag){
        _html = document.createElement(tag);
    }
    this.RemoveAllChildren = function(){
        
        if ( _html.hasChildNodes() )
        {
            while ( _html.childNodes.length >= 1 )
            {
                _html.removeChild( _html.firstChild );       
            } 
        }
    }
    //Creates HTML element
    _html = document.createElement(tag);
    
    this.html = function(){return _html};
    return this;
}
var CEntity = function(id){
    var _id = id;
    
    this.ID = function(){ return _id;};
    
    this.Get = {
        id: function(){
            return _id;
        }.bind(this)
    }
    
    this.Set = {
        
    }
                                           
    this.Graphics = new CGraphicsEntity();
    this.AI = null;
    this.Physics = null;
    
    this.Move = {
        Forward: function(distance){

        }.bind(this),
        Backward: function(distance){

        }.bind(this),
        Left: function(distance){

        }.bind(this),
        Right: function(distance){

        }.bind(this),
        Up: function(distance){

        }.bind(this),
        Down: function(distance){

        }.bind(this)
    }
    this.AttachCamera = function(x, y, z){

    }
    
    this.CameraOffset = vec3.create();
    
    this.Position = vec3.create();
    this.yaw = 0;
    this.pitch = 0;
    this.roll = 0;
    
    this.Set.Position = function(x, y, z){
        
    }.bind(this);
    
    this.Set.Rotation = function(x,y,z){
        
    }.bind(this);
    this.Set.Scale = function(x,y,z){
          
    }.bind(this);
    
    this.Default = {
        Look:  vec3.create([0,0,1]),
        Right: vec3.create([1,0,0]),
        Up:    vec3.create([0,1,0]),
        Rotation: mat4.create(),
        Offset: vec3.create([0,0,0])
    }
    
    this.Axis = {
        Look:  vec3.create(this.Default.Look),
        Right: vec3.create(this.Default.Right),
        Up:    vec3.create(this.Default.Up)
        
    }
    
    
    this.Matrix = {
        Yaw:   mat4.create(),
        Pitch: mat4.create(),
        Roll:  mat4.create(),
        Rotation: mat4.create()
    };
    
}
var CWindowCore = function(windowID, windowTitle, themeName){
    
    var _state = {
        window:    "HIDDEN",
        titlebar:  "VISIBLE",
        menubar:   "VISIBLE",
        toolbar:   "VISIBLE",
        statusbar: "VISIBLE",
        content:   "VISIBLE",
        buttons:   "VISIBLE"
    };
    var _position = {
        top: 0,
        left: 0
    };
    var _title = windowTitle;
    var _id = windowID;
    var _width = null;
    var _height = null;
    
    this.type = null;
    this.theme = null;
    this.menu = null;
    this.isMin = false;
    this.isMax = false;

    this.Callbacks = {
        onOpen: null,
        onClose: null,
        onMax: null,
        onMin: null,
        onFocus: null,
        onBlur: null
    };
    
    this.Scope = {
        onOpen: null,
        onClose: null,
        onMax: null,
        onMin: null,
        onFocus: null,
        onBlur: null
    };
    
    this.Hide = {
            window: function(){
                this.elements.window.html().style.display = "none";
                _state.window = "HIDDEN";
            }.bind(this),
            titlebar: function(){
                this.elements.titlebar.html().style.display = "none";
                _state.titlebar = "HIDDEN";
                
                //Set Content Area height
                var windowHeight = this.elements.window.GetHeight();
                var titlebarHeight = this.elements.titlebar.GetHeight();
                var menubarHeight = this.elements.menubar.GetHeight();
                var statusbarHeight = this.elements.statusbar.GetHeight();
                var toolbarHeight = this.elements.toolbar.GetHeight();
                
                if(this.theme.menubarIntegrated){
                    this.elements.content.html().style.height = (windowHeight - titlebarHeight - menubarHeight - statusbarHeight -  toolbarHeight) + "px";
                }
                else{
                    this.elements.content.html().style.height = (windowHeight - titlebarHeight - statusbarHeight -  toolbarHeight) + "px";
                }
                
            }.bind(this),
            menubar:  function(){
                this.elements.menubar.html().style.display = "none";
                _state.menubar = "HIDDEN";
                
                if(this.theme.menubarIntegrated){
                    //Set Content Area height
                    var windowHeight = this.elements.window.GetHeight();
                    var titlebarHeight = this.elements.titlebar.GetHeight();
                    var menubarHeight = this.elements.menubar.GetHeight();
                    var statusbarHeight = this.elements.statusbar.GetHeight();
                    var toolbarHeight = this.elements.toolbar.GetHeight();
                    this.elements.content.html().style.height = (windowHeight - titlebarHeight - menubarHeight - statusbarHeight -  toolbarHeight) + "px";
                }
                
            }.bind(this),
            toolbar: function(){
                this.elements.toolbar.html().style.display = "none";
                _state.toolbar = "HIDDEN";
                
                //Set Content Area height
                var windowHeight = this.elements.window.GetHeight();
                var titlebarHeight = this.elements.titlebar.GetHeight();
                var menubarHeight = this.elements.menubar.GetHeight();
                var statusbarHeight = this.elements.statusbar.GetHeight();
                var toolbarHeight = this.elements.toolbar.GetHeight();
                
                if(this.theme.menubarIntegrated){
                    this.elements.content.html().style.height = (windowHeight - titlebarHeight - menubarHeight - statusbarHeight -  toolbarHeight) + "px";
                }
                else{
                    this.elements.content.html().style.height = (windowHeight - titlebarHeight - statusbarHeight -  toolbarHeight) + "px";
                }
                
            }.bind(this),
            statusbar: function(){
                this.elements.statusbar.html().style.display = "none";
                _state.statusbar = "HIDDEN";
                
                //Set Content Area height
                var windowHeight = this.elements.window.GetHeight();
                var titlebarHeight = this.elements.titlebar.GetHeight();
                var menubarHeight = this.elements.menubar.GetHeight();
                var statusbarHeight = this.elements.statusbar.GetHeight();
                var toolbarHeight = this.elements.toolbar.GetHeight();
                
                if(this.theme.menubarIntegrated){
                    this.elements.content.html().style.height = (windowHeight - titlebarHeight - menubarHeight - statusbarHeight -  toolbarHeight) + "px";
                }
                else{
                    this.elements.content.html().style.height = (windowHeight - titlebarHeight - statusbarHeight -  toolbarHeight) + "px";
                }
                
            }.bind(this),
            content: function(){
                this.elements.content.html().style.display = "none";
                _state.content = "HIDDEN";
            }.bind(this),
            buttons: function(){
                this.elements.titlebar.buttons.html().style.display = "none";
                _state.buttons = "HIDDEN";
            }.bind(this)
    };
    
    this.Display = {
        window: function(){
            this.elements.window.html().style.display = "block";
            _state.window = "VISIBLE";
            this.MakeActive();
            
            //Set Content Area height
            var windowHeight = this.elements.window.GetHeight();
            var titlebarHeight = this.elements.titlebar.GetHeight();
            var menubarHeight = this.elements.menubar.GetHeight();
            var statusbarHeight = this.elements.statusbar.GetHeight();
            var toolbarHeight = this.elements.toolbar.GetHeight();
            
            if(this.theme.menubarIntegrated){
                this.elements.content.html().style.height = (windowHeight - titlebarHeight - menubarHeight - statusbarHeight -  toolbarHeight) + "px";
            }
            else{
                this.elements.content.html().style.height = (windowHeight - titlebarHeight - statusbarHeight -  toolbarHeight ) + "px";
            }
        }.bind(this),
        
        titlebar: function(){
            this.elements.titlebar.html().style.display = "block";
            _state.titlebar = "VISIBLE";
            
            //Set Content Area height
            var windowHeight = this.elements.window.GetHeight();
            var titlebarHeight = this.elements.titlebar.GetHeight();
            var menubarHeight = this.elements.menubar.GetHeight();
            var statusbarHeight = this.elements.statusbar.GetHeight();
            var toolbarHeight = this.elements.toolbar.GetHeight();
            
            if(this.theme.menubarIntegrated){
                this.elements.content.html().style.height = (windowHeight - titlebarHeight - menubarHeight - statusbarHeight -  toolbarHeight) + "px";
            }
            else{
                this.elements.content.html().style.height = (windowHeight - titlebarHeight - statusbarHeight -  toolbarHeight) + "px";
            }
        }.bind(this),
        
        menubar:  function(){
            this.elements.menubar.html().style.display = "block";
            _state.menubar = "VISIBLE";
            
            //Set Content Area height
            
            
            if(this.theme.menubarIntegrated){
                var windowHeight = this.elements.window.GetHeight();
                var titlebarHeight = this.elements.titlebar.GetHeight();
                var menubarHeight = this.elements.menubar.GetHeight();
                var statusbarHeight = this.elements.statusbar.GetHeight();
                var toolbarHeight = this.elements.toolbar.GetHeight();
                this.elements.content.html().style.height = (windowHeight - titlebarHeight - menubarHeight - statusbarHeight -  toolbarHeight) + "px";
            }
            
        }.bind(this),
        
        toolbar: function(){
            this.elements.toolbar.html().style.display = "block";
            _state.toolbar = "VISIBLE";
            
            //Set Content Area height
            var windowHeight = this.elements.window.GetHeight();
            var titlebarHeight = this.elements.titlebar.GetHeight();
            var menubarHeight = this.elements.menubar.GetHeight();
            var statusbarHeight = this.elements.statusbar.GetHeight();
            var toolbarHeight = this.elements.toolbar.GetHeight();
            
            if(this.theme.menubarIntegrated){
                this.elements.content.html().style.height = (windowHeight - titlebarHeight - menubarHeight - statusbarHeight -  toolbarHeight) + "px";
            }
            else{
                this.elements.content.html().style.height = (windowHeight - titlebarHeight - statusbarHeight -  toolbarHeight) + "px";
            }
            
        }.bind(this),
        
        statusbar: function(){
            this.elements.statusbar.html().style.display = "block";
            _state.statusbar = "VISIBLE";
            
            //Set Content Area height
            var windowHeight = this.elements.window.GetHeight();
            var titlebarHeight = this.elements.titlebar.GetHeight();
            var menubarHeight = this.elements.menubar.GetHeight();
            var statusbarHeight = this.elements.statusbar.GetHeight();
            var toolbarHeight = this.elements.toolbar.GetHeight();
            
            if(this.theme.menubarIntegrated){
                this.elements.content.html().style.height = (windowHeight - titlebarHeight - menubarHeight - statusbarHeight -  toolbarHeight) + "px";
            }
            else{
                this.elements.content.html().style.height = (windowHeight - titlebarHeight - statusbarHeight -  toolbarHeight) + "px";
            }
            
        }.bind(this),
        
        content: function(){
            this.elements.content.html().style.display = "block";
            _state.content = "VISIBLE";
            
            
        }.bind(this),
        buttons: function(){
            this.elements.titlebar.buttons.html().style.display = "block";
            _state.buttons = "VISIBLE";
        }.bind(this)
    };
    
    this.Get = {
        State: {
            window: function(){
                return _state.window;
            },
            titlebar: function(){
                return _state.titlebar;
            },
            menubar: function(){
                return _state.menubar;
            },
            toolbar: function(){
                return _state.toolbar;
            },
            statusbar: function(){
                return _state.statusbar;
            },
            content: function(){
                return _state.content;
            }
            
        },
        theme: function(){
            return this.theme;
        }.bind(this),
        
        id: function(){
            return _id;
        },
        position: function(){
            return {top: _position.top,
                    left: _position.left};
        }
    };
    
    this.Set = {
        position: function(iTop, iLeft){
            _position.top = iTop;
            _position.left = iLeft;
            
            this.elements.window.html().style.top = iTop + "px";
            this.elements.window.html().style.left = iLeft + "px";
            
        }.bind(this),
        
        width: function(iWidth){
            
            _width = iWidth;
            this.elements.window.html().style.width = _width + "px";
            
        }.bind(this),
        
        height: function(iHeight){
            
            _height = iHeight;
            this.elements.window.html().style.height = _height + "px";
            
            //Set Content Area height
            var windowHeight = this.elements.window.GetHeight();
            var titlebarHeight = this.elements.titlebar.GetHeight();
            var menubarHeight = this.elements.menubar.GetHeight();
            var statusbarHeight = this.elements.statusbar.GetHeight();
            var toolbarHeight = this.elements.toolbar.GetHeight();
            
            if(this.theme.menubarIntegrated){
                this.elements.content.html().style.height = (windowHeight - titlebarHeight - menubarHeight - statusbarHeight -  toolbarHeight) + "px";
            }
            else{
                this.elements.content.html().style.height = (windowHeight - titlebarHeight - statusbarHeight -  toolbarHeight) + "px";
            }
            
        }.bind(this),
        
        title: function(sTitle){
            
            _title = sTitle;
            this.elements.titlebar.text.html().innerHTML = _title;
            
        }.bind(this),
        
        statusbarText: function(sStatus){
            this.elements.statusbar.text.html().innerHTML = sStatus;
            
        }.bind(this),
        
        theme:function(sThemeName){
            this.LoadTheme(sThemeName);
        }.bind(this),
        
        onOpen: function(fName, scope){
            
            this.Callbacks.onOpen = fName;
            this.Scope.onOpen = scope;
            
        }.bind(this),
        
        onClose: function(fName, scope){
            
            this.Callbacks.onClose = fName;
            this.Scope.onClose = scope;
            
        }.bind(this),
        
        onMin: function(fName, scope){
            
            this.Callbacks.onMin = fName;
            this.Scope.onMin = scope;
            
        }.bind(this),
        
        onMax: function(fName, scope){
            
            this.Callbacks.onMax = fName;
            this.Scope.onMax = scope;
            
        }.bind(this),
        
        onFocus: function(fName, scope){
            
            this.Callbacks.onFocus = fName;
            this.Scope.onFocus = scope;
            
        }.bind(this),
        
        onBlur: function(fName, scope){
            
            this.Callbacks.onBlur = fName;
            this.Scope.onBlur = scope;
            
        }.bind(this)
    }
    var _Events = {
        onOpen: function(e){
            
            //Call user defined function if exist
            if(this.Callbacks.onOpen){
                
                if(this.Scope.onOpen){
                    
                    this.Callbacks.onOpen.apply(this.Scope.onOpen, [e]);
                    
                }
                else{
                    
                    this.Callbacks.onOpen(e);
                    
                }
            }
            
            //Calling OS related code....
            
            
        }.bind(this),
        
        onClose: function(e){
                                
            //Calling OS related code....
            os.windows.WindowsManager.Windows.remove(ID);
            document.body.removeChild(this.elements.window.html());
            
            //Call user defined function if exist
            if(this.Callbacks.onClose){
                
                if(this.Scope.onClose){
                    
                    this.Callbacks.onClose.apply(this.Scope.onClose, [e]);
                    
                }
                else{
                    
                    this.Callbacks.onClose(e);
                    
                }
            }
                                
                                
        }.bind(this),
        
        onMin: function(e){
            
            
            
            //Calling OS related code....
            if(!this.isMin){
                
                this.Hide.content();
                this.Hide.statusbar();
                this.Hide.menubar();
                this.Hide.buttons();
                this.elements.titlebar.Class.ClearAll();
                this.elements.titlebar.Class.Add(this.theme.Class.titlebarMinimized);

                this.elements.window.Class.ClearAll();
                this.elements.window.Class.Add(this.theme.Class.windowMinimized);
                
                this.elements.window.html().style.width = "150px";
                this.elements.window.html().style.height = "25px";
                
                this.elements.titlebar.html().onclick = _Events.onMin;
                
                //Does Desktop Exist
                if(os.windows.Desktop.Get.state.desktop() == "VISIBLE"){
                    this.elements.window.html().style.top = "";
                    this.elements.window.html().style.left = "";
                    os.windows.Desktop.Elements.dock.AppendChild(this.elements.window.html());
                    
                }
                //No desktop, minimize at spot
                else{
                    this.elements.window.html().style.position = "absolute";
                }
                
                this.isMin = true;
                if(e){e.stopPropagation();}
                
                
            }
            else{
                
                this.Display.content();
                
                
                this.Display.statusbar();
                
                if(_state.menubar == "VISIBLE")
                    this.Display.menubar();
                
                this.Display.buttons();
                
                this.elements.titlebar.Class.ClearAll();
                this.elements.titlebar.Class.Add(this.theme.Class.titlebar);
                
                this.elements.window.Class.ClearAll();
                this.elements.window.Class.Add(this.theme.Class.window);
                this.Set.position(_position.top, _position.left);
                this.Set.width(_width);
                this.Set.height(_height);
                
                this.elements.titlebar.html().onclick = "";
                
                if(os.windows.Desktop.Get.state.desktop() == "VISIBLE"){
                    
                    document.body.appendChild(this.elements.window.html());
                }
                
                //Set Content Area height
                var windowHeight = this.elements.window.GetHeight();
                var titlebarHeight = this.elements.titlebar.GetHeight();
                var menubarHeight = this.elements.menubar.GetHeight();
                var statusbarHeight = this.elements.statusbar.GetHeight();
                var toolbarHeight = this.elements.toolbar.GetHeight();
                if(this.theme.menubarIntegrated){
                    this.elements.content.html().style.height = (windowHeight - titlebarHeight - menubarHeight - statusbarHeight -  toolbarHeight) + "px";
                }
                else{
                    this.elements.content.html().style.height = (windowHeight - titlebarHeight - statusbarHeight -  toolbarHeight) + "px";
                }
                this.isMin= false;
                if(e){e.stopPropagation();}
                
            }
            
            //Call user defined function if exist
            if(this.Callbacks.onMin){
                
                if(this.Scope.onMin){
                    
                    this.Callbacks.onMin.apply(this.Scope.onMin, [e]);
                    
                }
                else{
                    
                    this.Callbacks.onMin(e);
                    
                }
            }                    
            
        }.bind(this),
        
        onMax: function(e){
            
            
            
            //Calling OS related code....
            if(!this.isMax){
                this.isMax = true;
                
                
                this.elements.window.Class.ClearAll();
                this.elements.window.Class.Add(this.theme.Class.windowMaximized);
                
                this.elements.window.html().style.left = "0px";
                this.elements.window.html().style.width = "";
                
                
                
                var dockHeight = os.windows.Desktop.Elements.dock.html().clientHeight;
                var windowHeight = this.elements.window.GetHeight();
                var titlebarHeight = this.elements.titlebar.GetHeight();
                var menubarHeight = this.elements.menubar.GetHeight();
                var statusbarHeight = this.elements.statusbar.GetHeight();
                var toolbarHeight = this.elements.toolbar.GetHeight();
                
                if(this.theme.menubarIntegrated){
                    this.elements.content.html().style.height = (window.innerHeight - dockHeight - titlebarHeight - statusbarHeight - menubarHeight - toolbarHeight) + "px";
                    this.elements.window.html().style.height = (window.innerHeight - dockHeight) + "px";
                    this.elements.window.html().style.top = "0px";
                }
                else{
                    this.elements.content.html().style.height = (window.innerHeight - dockHeight - titlebarHeight - statusbarHeight - toolbarHeight) + "px";
                    this.elements.window.html().style.height = (window.innerHeight - dockHeight - menubarHeight) + "px";
                    this.elements.window.html().style.top = "20px";
                }
                
                if(e){e.stopPropagation();}
            }
            else{
                this.isMax = false;
                this.elements.window.Class.ClearAll();
                this.elements.window.Class.Add(this.theme.Class.window);
                this.elements.window.html().style.height = _height + "px";
                this.Set.position(_position.top, _position.left);
                this.Set.width(_width);
                this.Set.height(_height);
                
                var windowHeight = this.elements.window.GetHeight();
                var titlebarHeight = this.elements.titlebar.GetHeight();
                var menubarHeight = this.elements.menubar.GetHeight();
                var statusbarHeight = this.elements.statusbar.GetHeight();
                var toolbarHeight = this.elements.toolbar.GetHeight();
                if(this.theme.menubarIntegrated){
                    this.elements.content.html().style.height = (windowHeight - titlebarHeight - menubarHeight - statusbarHeight -  toolbarHeight) + "px";
                }
                else{
                    this.elements.content.html().style.height = (windowHeight - titlebarHeight - statusbarHeight -  toolbarHeight) + "px";
                }
                if(e){e.stopPropagation();}
            }
            
            //Call user defined function if exist
            if(this.Callbacks.onMax){
                
                if(this.Scope.onMax){
                    
                    this.Callbacks.onMax.apply(this.Scope.onMax, [e]);
                    
                }
                else{
                    
                    this.Callbacks.onMax(e);
                    
                }
            }
        }.bind(this),
        
        onFocus: function(e){
            
            //Call user defined function if exist
            if(this.Callbacks.onFocus){
                
                if(this.Scope.onFocus){
                    
                    this.Callbacks.onFocus.apply(this.Scope.onFocus, [e]);
                    
                }
                else{
                    
                    this.Callbacks.onFocus(e);
                    
                }
            }
            
            //Calling OS related code....
            
        }.bind(this),
        
        onBlur: function(e){

            //Calling OS related code....
            this.elements.window.html().onclick = this.MakeActive;
            this.elements.window.html().style.zIndex = 20;
            
            //Hide menubar if not integrated
            if(!this.theme.menubarIntegrated){
                this.Hide.menubar();
            }
            
            //Call user defined function if exist
            if(this.Callbacks.onBlur){
                
                if(this.Scope.onBlur){
                    
                    this.Callbacks.onBlur.apply(this.Scope.onBlur, [e]);
                    
                }
                else{
                    
                    this.Callbacks.onBlur(e);
                    
                }
            }
            
        }.bind(this)
    }
    this.MakeActive = function(e){
        
        _Events.onFocus();
        
        if(os.windows.WindowsManager.ActiveWindow && (os.windows.WindowsManager.ActiveWindow != this)){
           
            os.windows.WindowsManager.ActiveWindow.Blur();
           
        }
        os.windows.WindowsManager.ActiveWindow = this;
        this.elements.window.html().onclick = "";
        this.elements.window.html().style.zIndex = 25;
        
        //Hide menubar if not integrated
        if(!this.theme.menubarIntegrated){
            if(_state.menubar == "VISIBLE")
            this.Display.menubar();
        }
        
        
    }.bind(this);
    
    this.Blur = function(){
        _Events.onBlur();
    }.bind(this);
    
    this.Maximize = function(){
        _Events.onMax();
    };
    
    this.Minimize = function(){
        _Events.onMin();
    };
    this.LoadTheme = function(themeName){
        //Theme Name was supplied
        if(themeName){
            this.theme = os.windows.WindowsManager.Themes.get(themeName)
            
            //verify Theme was found
            if(!this.theme){
                alert(themeName + " Window Theme was not found");
            }
            
        }
        //default to Mac Theme
        else{
            
            this.theme = os.windows.WindowsManager.Themes.get("Mac");
        }
        
        
        //
        //  Set Theme classes to Window Elements
        //
        
        //Clear Existing classes
        ClearThemeClasses();
        
        //Set Classes
        this.elements.window.Class.Add(this.theme.Class.window);
        this.elements.titlebar.Class.Add(this.theme.Class.titlebar);
        this.elements.menubar.Class.Add(this.theme.Class.menubar);
        this.elements.toolbar.Class.Add(this.theme.Class.toolbar);
        this.elements.statusbar.Class.Add(this.theme.Class.statusbar);
        this.elements.content.Class.Add(this.theme.Class.content);
        this.elements.titlebar.text.Class.Add(this.theme.Class.titlebarText);
        this.elements.titlebar.buttons.Class.Add(this.theme.Class.titlebarButtonContainer);
        this.elements.titlebar.buttons.max.Class.Add(this.theme.Class.titlebarButtonMax);
        this.elements.titlebar.buttons.min.Class.Add(this.theme.Class.titlebarButtonMin);
        this.elements.titlebar.buttons.close.Class.Add(this.theme.Class.titlebarButtonClose);
        this.elements.statusbar.text.Class.Add(this.theme.Class.statusbarText);
        this.elements.window.html().id = _id;
        
        //Set Default Window Postion
        this.Set.position(this.theme.Position.top, this.theme.Position.left)
        
        //Set Default Width/Height
        this.Set.width(this.theme.width);
        this.Set.height(this.theme.height);
        
        
        
        
    };
    
    var ClearThemeClasses = function(){
        //Top Level
        this.elements.window.Class.ClearAll();
        this.elements.titlebar.Class.ClearAll();
        this.elements.menubar.Class.ClearAll();
        this.elements.toolbar.Class.ClearAll();
        this.elements.statusbar.Class.ClearAll();
        this.elements.content.Class.ClearAll();
        this.elements.titlebar.text.Class.ClearAll();
        this.elements.titlebar.buttons.Class.ClearAll();
        this.elements.titlebar.buttons.max.Class.ClearAll();
        this.elements.titlebar.buttons.min.Class.ClearAll();
        this.elements.titlebar.buttons.close.Class.ClearAll();
        this.elements.statusbar.text.Class.ClearAll();

    }.bind(this);

    //
    //HTML Elements
    //
    
    //Top Level
    this.elements = {
        window: os.resschmgr.Create.HTMLElement("div"),
        titlebar: os.resschmgr.Create.HTMLElement("div"),
        menubar: os.resschmgr.Create.HTMLElement("div"),
        toolbar: os.resschmgr.Create.HTMLElement("div"),
        statusbar: os.resschmgr.Create.HTMLElement("div"),
        content: os.resschmgr.Create.HTMLElement("div")
    }
    
    //Title Bar
    this.elements.titlebar.text = os.resschmgr.Create.HTMLElement("div");
    this.elements.titlebar.buttons = os.resschmgr.Create.HTMLElement("div");
    this.elements.titlebar.buttons.max = os.resschmgr.Create.HTMLElement("div");
    this.elements.titlebar.buttons.min = os.resschmgr.Create.HTMLElement("div");
    this.elements.titlebar.buttons.close = os.resschmgr.Create.HTMLElement("div");
    
    //Menu Bar
    this.elements.menubar.children = os.resschmgr.Create.Map();
    
    //Tool Bar
    this.elements.toolbar.children = os.resschmgr.Create.Map();
    
    //Status Bar
    this.elements.statusbar.text = os.resschmgr.Create.HTMLElement("div");
    
    //
    //  Begin Window Initialization
    //
    this.LoadTheme(themeName);
    
    
    
    //Set Title Bar Title
    if(_title)
        this.elements.titlebar.text.html().innerHTML = _title;
    
    //Set ID's
    this.elements.window.html().id =                    _id;
    this.elements.titlebar.html().id =                  _id;
    this.elements.menubar.html().id =                   _id;
    this.elements.toolbar.html().id =                   _id;
    this.elements.statusbar.html().id =                 _id;
    this.elements.content.html().id =                   _id;
    this.elements.titlebar.text.html().id =             _id;
    this.elements.titlebar.buttons.html().id =          _id;
    this.elements.titlebar.buttons.max.html().id =      _id;
    this.elements.titlebar.buttons.min.html().id =      _id;
    this.elements.titlebar.buttons.close.html().id =    _id;
    this.elements.statusbar.text.html().id =            _id;
    
    //Set Callbacks
    this.elements.titlebar.buttons.max.html().onclick =      _Events.onMax;
    this.elements.titlebar.buttons.min.html().onclick =      _Events.onMin;
    this.elements.titlebar.buttons.close.html().onclick =    _Events.onClose;
    this.elements.titlebar.html().onmousedown = os.windows.WindowsManager.BeginDrag;
        
    //***************************
    //      CONNECT ELEMENTS
    //***************************
        
    //Build Title Bar
    this.elements.titlebar.buttons.AppendChild(this.elements.titlebar.buttons.close.html());
    this.elements.titlebar.buttons.AppendChild(this.elements.titlebar.buttons.min.html());
    this.elements.titlebar.buttons.AppendChild(this.elements.titlebar.buttons.max.html());
    this.elements.titlebar.AppendChild(this.elements.titlebar.buttons.html());
    this.elements.titlebar.AppendChild(this.elements.titlebar.text.html());
    
    //Build Status Bar
    this.elements.statusbar.AppendChild(this.elements.statusbar.text.html());
    
    this.elements.window.AppendChild(this.elements.titlebar.html());
    this.elements.window.AppendChild(this.elements.menubar.html());
    this.elements.window.AppendChild(this.elements.toolbar.html());
    this.elements.window.AppendChild(this.elements.content.html());
    this.elements.window.AppendChild(this.elements.statusbar.html());
    
    //Attach to document
    document.body.appendChild(this.elements.window.html());
    
    
    //Set Content Area height
    var windowHeight = this.elements.window.GetHeight();
    var titlebarHeight = this.elements.titlebar.GetHeight();
    var menubarHeight = this.elements.menubar.GetHeight();
    var statusbarHeight = this.elements.statusbar.GetHeight();
    var toolbarHeight = this.elements.toolbar.GetHeight();
    
    if(this.theme.menubarIntegrated){
        this.elements.content.html().style.height = (windowHeight - titlebarHeight - menubarHeight - statusbarHeight -  toolbarHeight) + "px";
    }
    else{
        this.elements.content.html().style.height = (windowHeight - titlebarHeight - statusbarHeight -  toolbarHeight) + "px";
    }
    
    //Default Window to be hidden
    this.Hide.window();
    
    //Registar with Windows Manager
    os.windows.WindowsManager.Windows.put(windowID, this);
    
    
};

var CWindowTheme = function(sName){
    this.type = null;
    this.name = sName;
    this.url = null;
    this.menubarIntegrated = null;
    this.Class = {
        window: null,
        windowMinimized: null,
        windowMaximized: null,
        titlebar: null,
        titlebarText: null,
        titlebarButtonContainer: null,
        titlebarButtonMax: null,
        titlebarButtonMin:null,
        titlebarButtonClose: null,
        titlebarMinimized: null,
        menubar: null,
        menubarElement: null,
        toolbar: null,
        toolbarElement: null,
        content: null,
        statusbar: null,
        statusbarText: null
    };
    
    this.Position = {
        top: 0,
        left: 0
    };
    
    this.width = 400;
    this.height = 300;
    this.resizable = false;
    
};

        
var CMenuElement = function(){
    this.children = [];
    this.theme = null;
    this.onClickScope = null;
    this.onClick = null;
    
    this.AddChild = function(){
        
    };
    this.parent = new CHTMLElement();
    this.Class = {                                    
        //Adds a class to the current class list
        Add: function(sClass){
            _classes += sClass + " ";
            _html.className = _classes;
            return _classes;
        },
        
        //removes an individual class from the class list
        Remove: function(sClass){
            
            _classes = _classes.replace(sClass, "");
            
            return _classes;
        },
        
        //removes all classes from class list
        ClearAll: function(){
            _classes = "";
            _html.className = "";
        },
        
        Get: function(){return _classes;}   
    };
    
    this.AppendToID = function(parentID){
        
        document.getElementById(parentID).appendChild(_html);
    };
    this.AppendTo = function(parent){
        parent.appendChild(_html);
    };
    this.AppendChild = function(child){
        _html.appendChild(child);
    }
    this.GetHeight = function(){
        return _html.clientHeight;
    }
    this.SetHTML = function(tag){
        _html = document.createElement(tag);
    }
    this.RemoveAllChildren = function(){
        
        if ( _html.hasChildNodes() )
        {
            while ( _html.childNodes.length >= 1 )
            {
                _html.removeChild( _html.firstChild );       
            } 
        }
    }
    //Creates HTML element
    var _html = document.createElement("div");
    
    this.html = function(){return _html};
};

var CToolbarElement = function(){
    this.imageURL = null;
    this.theme = null;
    this.tooltipText = null;
    this.tooltipEnabled = false;
    this.onClickScope = null;
    this.onClick = null;
    this.parent = new CToolbarElement();
    this.Class = {                                    
        //Adds a class to the current class list
        Add: function(sClass){
            _classes += sClass + " ";
            _html.className = _classes;
            return _classes;
        },
        
        //removes an individual class from the class list
        Remove: function(sClass){
            
            _classes = _classes.replace(sClass, "");
            
            return _classes;
        },
        
        //removes all classes from class list
        ClearAll: function(){
            _classes = "";
            _html.className = "";
        },
        
        Get: function(){return _classes;}   
    };
    
    this.AppendToID = function(parentID){
        
        document.getElementById(parentID).appendChild(_html);
    };
    this.AppendTo = function(parent){
        parent.appendChild(_html);
    };
    this.AppendChild = function(child){
        _html.appendChild(child);
    }
    this.GetHeight = function(){
        return _html.clientHeight;
    }
    this.SetHTML = function(tag){
        _html = document.createElement(tag);
    }
    this.RemoveAllChildren = function(){
        
        if ( _html.hasChildNodes() )
        {
            while ( _html.childNodes.length >= 1 )
            {
                _html.removeChild( _html.firstChild );       
            } 
        }
    }
    //Creates HTML element
    var _html = document.createElement("div");
    
    this.html = function(){return _html};
};

var CDesktopTheme = function(sName){ 
    this.name = sName;
    this.url = null;
    this.Class = {
        desktop: null,
        dock: null,
        startButton: null,
        startButtonText: null,
        startMenu: null,
        application: null
    };
    
    
};

var CApplication = function(id){
    this.SetHTML("div");
    
    var _displayText = null;
    var _tooltipText = null;
    var _tooltipEnabled = false;
    var _imageURL = null;
    var _theme = null;
    var _id = id;
    var _onClick = function(e){
        //Call user defined function if exist
        if(this.onClick){
            
            if(this.onClickScope){
                
                this.onClick.apply(this.onClickScope, [e]);
                
            }
            else{
                
                this.onClick(e);
                
            }
        }
        
        //Calling OS related code....
        
        
    }.bind(this);
    
    this.onClickScope = null;
    this.onClick = null;
    
    this.Get ={
        ID: function(){
            return _id;
        }.bind(this),
        
        DisplayText: function(){
            
        }.bind(this),
        
        TooltipText: function(){
            
        }.bind(this),
        
        Callback: function(){
            
        }.bind(this),
        
        Image: function(){
            
        }.bind(this)
    }
    
    this.Set = {
        DisplayText: function(sDisplayText){
            
            this.html().innerHTML = sDisplayText;
            _displayText = sDisplayText;
            
        }.bind(this),
        
        TooltipText: function(){
            
        }.bind(this),
        
        Callback: function(func, scope){
            this.onClick = func;
            if(scope){
                this.onClickScope = scope;
            }
        }.bind(this),
        
        Image: function(){
            
        }.bind(this),
        
        Theme: function(theme){
            
            _theme = theme;
            this.Class.ClearAll();
            this.Class.Add(theme.Class.application);
            
        }.bind(this)
    };
    
    this.EnableTooltip = function(){
        
    };
    
    this.DisableTooltip = function(){
        
    };
    
    this.html().onclick = _onClick;
    this.parent = new CApplication();
    this.Class = {                                    
        //Adds a class to the current class list
        Add: function(sClass){
            _classes += sClass + " ";
            _html.className = _classes;
            return _classes;
        },
        
        //removes an individual class from the class list
        Remove: function(sClass){
            
            _classes = _classes.replace(sClass, "");
            
            return _classes;
        },
        
        //removes all classes from class list
        ClearAll: function(){
            _classes = "";
            _html.className = "";
        },
        
        Get: function(){return _classes;}   
    };
    
    this.AppendToID = function(parentID){
        
        document.getElementById(parentID).appendChild(_html);
    };
    this.AppendTo = function(parent){
        parent.appendChild(_html);
    };
    this.AppendChild = function(child){
        _html.appendChild(child);
    }
    this.GetHeight = function(){
        return _html.clientHeight;
    }
    this.SetHTML = function(tag){
        _html = document.createElement(tag);
    }
    this.RemoveAllChildren = function(){
        
        if ( _html.hasChildNodes() )
        {
            while ( _html.childNodes.length >= 1 )
            {
                _html.removeChild( _html.firstChild );       
            } 
        }
    }
    //Creates HTML element
    var _html = document.createElement("div");
    
    this.html = function(){return _html};
    
    
};

var CNetworkMessage = function(){
    this.SenderID;          // CUser ID
    this.ReceiverID;        // CSession Name
    this.Data  = {       
        Type: null,         // Message Type
        Args: null,         // Arguments for Interface Call
        ModuleID: null      // CModule Name
    }
    
    this.InterfaceID        // CFunction Name
}
var CJOSServerMessage = function(){
    this.UserID = "";
    this.SessionID = "";
    this.ModuleID = "";
    this.Data = {
        Type: "",
        Args: ""
    };
    this.FunctionID = "";
    
    this.Parse = function(msgJSON){
        var msg = "";
        try{
            msg = JSON.parse(msgJSON);
            this.UserID = msg.UserID;
            this.SessionID = msg.SessionID;
            this.Data = msg.Data;
            this.ModuleID = msg.ModuleID;
            this.FunctionID = msg.FunctionID;
        }
        catch(e){
            os.windows.Create.ErrorWindow("ERROR: JOS Server", "Unable to parse message: <br/>" + msgJSON);
        }
        
    };
    this.Serialize = function(){
        
        return JSON.stringify(this);
    };
}

var CJOSServer = function(){
    
    //**********************
    //   PRIVATE METHODS
    //**********************
    var _onOpen = function(){
        os.console.Comment("JaHOVA OS Server: Connection Opened");
        if(this.Events.onOpen){
            this.Events.onOpen();
        }
        
    }.bind(this);
    
    var _onClose = function(){
        os.console.Comment("JaHOVA OS Server: Connection Closed");
        if(this.Events.onClose){
            this.Events.onClose();
        }
    }.bind(this);
    
    var _onMessage = function(msgJSON){
        var msg = new CJOSServerMessage();
        msg.Parse(msgJSON);
        
        if(this.Events.onMessage){
            this.Events.onMessage(msg);
        }
        
        if(msg.Data.Type == "userID"){
            this.userID = msg.Data.Args[0];
            this.mainSessionID = msg.SessionID;
            os.console.Comment("JaHOVA OS Server ID Set: " + this.userID);
        }
        
    }.bind(this);
    
    var _onError = function(e){
        
        if(this.Events.onError){
            this.Events.onError(e);
        }
        
    }.bind(this);

    this.socket = new CWebSocket(domain, port, path, id);
    this.message = null;
    this.userID = null;
    this.mainSessionID = null;
    
    this.Events = {
        onOpen: null,
        onMessage: null,
        onClose: null,
        onError: null
    };
    this.Connect = function(){
        this.socket.Events.onOpen = _onOpen;
        this.socket.Events.onMessage = _onMessage;
        this.socket.Events.onClose = _onClose;
        this.socket.Events.onError = _onError;
        
        this.socket.Open();
    }
    this.Send = function(msg){
        this.socket.Send(msg.Serialize());
    };
    this.Disconnect = function(){
        
        //Send Disconnect Message to Server
        var msg = new CJOSServerMessage();
        msg.UserID = this.userID;
        msg.Data.Type = "disconnect";
        
        this.Send(msg);
    };
    this.Create ={
        Session: function(sessionType, password, params){
            var msg = new CJOSServerMessage();
            msg.SessionID = this.mainSessionID;
            msg.UserID = this.userID; 
            msg.Data.Type = "createSession";
            msg.Data.Args = [sessionType, password, params];
            msg.ModuleID = "";
        
            this.Send(msg);
            
        }.bind(this),
        RegisteredSession: function(sessionType, password){
            var msg = new CJOSServerMessage();
            msg.SessionID = this.mainSessionID;
            msg.UserID = this.userID; 
            msg.Data.Type = "createRegisteredSession";
            msg.Data.Args = [sessionType, password];
            msg.ModuleID = "";
        
            this.Send(msg);
        }.bind(this),
        Module: function(moudule, password){
            var msg = new CJOSServerMessage();
            msg.SessionID = "";
            msg.UserID = this.userID; 
            msg.Data.Type = "createModule";
            msg.Data.Args = [password];
            msg.ModuleID = module;
            this.Send(msg);
        }.bind(this),
        Function: function(module, funcName, funcBody, funcInput){
            var msg = new CJOSServerMessage();
            msg.SessionID = "";
            msg.UserID = this.userID; 
            msg.Data.Type = "createFunction";
            msg.Data.Args = [module, funcName, funcBody, funcInput];
            msg.ModuleID = module;
            this.Send(msg);
        }.bind(this),
        Message: function(){
            return new CJOSServerMessage();
        }.bind(this)
    }
    this.Get = {
        SessionList: function(sessionType){
            var msg = new CJOSServerMessage();
            msg.SessionID = this.mainSessionID;
            msg.UserID = this.userID; 
            msg.Data.Type = "getList";
            msg.Data.Args = [sessionType];
            msg.ModuleID = "";
        
            this.Send(msg);
        }.bind(this),
        SessionPropertyTypes: function(sessionID){
            var msg = new CJOSServerMessage();
            msg.SessionID = sessionID;
            msg.UserID = this.userID; 
            msg.Data.Type = "getSessionProperties";
            msg.Data.Args = [];
            msg.ModuleID = "";
        
            this.Send(msg);
        }.bind(this),
        SessionPropertyValues: function(sessionID){
            var msg = new CJOSServerMessage();
            msg.SessionID = sessionID;
            msg.UserID = this.userID; 
            msg.Data.Type = "getSessionValues";
            msg.Data.Args = [];
            msg.ModuleID = "";
        
            this.Send(msg);
        }.bind(this)
    }
    this.Set = {
        SessionProperty: function(session, key, value){
            var msg = new CJOSServerMessage();
            msg.SessionID = session;
            msg.UserID = this.userID; 
            msg.Data.Type = "setSessionProperty";
            msg.Data.Args = [key,value];
            msg.ModuleID = "";
        
            this.Send(msg);
        }.bind(this)
    }
    this.JoinSession = function(session, password){
        var msg = new CJOSServerMessage();
        msg.SessionID = session;
        msg.UserID = this.userID; 
        msg.Data.Type = "joinSession";
        msg.Data.Args = [password];
        msg.ModuleID = "";
        
        this.Send(msg);
    };
    this.Broadcast = function(session, data){
        var msg = new CJOSServerMessage();
        msg.SessionID = session;
        msg.UserID = this.userID; 
        msg.Data.Type = "sessionBroadcast";
        msg.Data.Args = [data];
        msg.ModuleID = "";
        
        this.Send(msg);
    }
    this.LeaveSession = function(session){
        var msg = new CJOSServerMessage();
        msg.SessionID = session;
        msg.UserID = this.userID; 
        msg.Data.Type = "leaveSession";
        msg.ModuleID = "";
        
        this.Send(msg);
    }
    this.AccessModule = function(session, module, password){
        var msg = new CJOSServerMessage();
        msg.SessionID = session;
        msg.UserID = this.userID; //"MainSession";
        msg.Data.Type = "accessModule";
        msg.Data.Args = [password]; //["godfather"];
        msg.ModuleID = module; //"AdminModule";
        
        this.Send(msg);
    };
    
    
    this.ExecuteFunction = function(params, module, func){
        var msg = new CJOSServerMessage();
        msg.SessionID = ""
        msg.UserID = this.userID; 
        msg.Data.Type = "executeFunction";
        msg.Data.Args = [param];
        msg.ModuleID = module;
        
        this.Send(msg);
    };
    
    
}

var CSocketIO = function(domain, port, path, id){
    //**********************
    //  PRIVATE ATTRIBUTES
    //**********************
    var PATH =  path;
    var DOMAIN = domain;
    var PORT = port;
    var ID = id;
    var socket = null;
    
    //**********************
    //   PRIVATE METHODS
    //**********************
    var _onOpen = function(){
        
        if(this.Events.onOpen){
            this.Events.onOpen();
        }
        
    }.bind(this);
    
    var _onClose = function(){
        
        if(this.Events.onClose){
            this.Events.onClose();
        }
    }.bind(this);
    
    var _onMessage = function(msg){
        if(this.Events.onMessage){
            this.Events.onMessage(msg);
        }
    }.bind(this);
    
    var _onError = function(e){
        
        if(this.Events.onError){
            this.Events.onError(e);
        }
        
        
    }.bind(this);
    
    //**********************
    //   PUBLIC ATTRIBUTES
    //**********************
    
    this.Events = {
        onOpen: null,
        onMessage: null,
        onClose: null,
        onError: null
    };
    
    //**********************
    //   PUBLIC METHODS
    //**********************
    
    this.GetID = function(){
        return ID;
    }
    
    this.Open = function(){
        
        if(socket == null){
            socket = io.connect( DOMAIN + ":" + PORT +"/" + PATH);                                            
            socket.on("connect", _onOpen);
            socket.on("disconnect" , _onClose);
            socket.on("message" , _onMessage);
            socket.on("error" , _onError);    
        }
         
    };
    
    this.Close = function(){
         
         
    };
    
    this.Send = function(msg){
         socket.send(msg);
    }
    
}
var CWebSocket = function(domain, port, path, id){
    
    //**********************
    //  PRIVATE ATTRIBUTES
    //**********************
    var PATH =  path;
    var DOMAIN = domain;
    var PORT = port;
    var ID = id;
    var socket = null;
    
    //**********************
    //   PRIVATE METHODS
    //**********************
    
    
    var _OnOpenFunc = function(msg){
         this.state = socket.readyState;
         if(this.Event.onConnect != null){
             this.Event.onConnect();
         }
    }.bind(this);
    
    var _OnCloseFunc = function(msg){
         this.state = socket.readyState;
         if(this.Events.onClose != null){
             this.Events.onClose();
         }
    }.bind(this);
    
    var _OnMessageFunc = function(msg){
         this.state = socket.readyState;
         if(this.Events.onMessage != null){
             this.Events.onMessage();
         }
    }.bind(this);
    
    var _OnErrorFunc = function(){
         this.state = socket.readyState;
         if(this.Events.onError != null){
             this.Events.onError();
         }
    }.bind(this);
    
    //**********************
    //   PUBLIC ATTRIBUTES
    //**********************
    this.Events = {
        onOpen: null,
        onMessage: null,
        onClose: null,
        onError: null
    };
    
    //**********************
    //   PUBLIC METHODS
    //**********************
    
    this.GetID = function(){
        return ID;
    }
    
    this.Open = function(){
         if(socket == null){
            socket = new WebSocket("ws://" + DOMAIN + ":" + PORT +"/" + PATH);
            this.state = socket.readyState;
            
            socket.onopen = _OnOpenFunc.bind(this);
            socket.onclose = _OnCloseFunc.bind(this);//function(){alert("Socket Closed");};
            socket.onmessage = _OnMessageFunc.bind(this);
            socket.onerror = _OnErrorFunc.bind(this);
            return this.state;
         }
         else{
             return "Already Initialized";
         }
    };
    
    this.Close = function(){
         socket.close();
    };
    
    this.Send = function(msg){
         socket.send(msg);
    }
    
 };
                                 

CVertexShader = function(key, url){
    this.filename = url;
    this.name = key;
    this.loaded = false;
    this.code = "";
    this.shader = null;
    this.compiled = false;
    
    this.Load = function(){

    };
    
    this.Initialize = function(){

    }.bind(this);
    
    this.Load();
};

CFragmentShader = function(key, url){
    this.filename = url;
    this.name = key;
    this.loaded = false;
    this.code = "";
    this.shader = null;
    
    this.Load = function(){

    };
    
    this.Initialize = function(){

    }.bind(this);
    
    this.Load();
};

CProgram = function(vs, fs, key){
    var gl = os.graphics.gl;
    
    this.name = key;
    this.compiled = false;
    this.attributes = new CMap();
    this.uniforms = new CMap();
    
    //Get fragment and vertex shader objects
    this.fragment = new CFragmentShader();
    this.vertex = new CVertexShader(vs);
    
    //Create program object
    this.program = gl.createProgram();
    

    
    this.CreateAttribute = function(aName){
        
    };
    
    this.CreateUniform = function(uName){
        
    }
    
};

CShader = function(cPrg){
    //Maps to hold shader varibles
    this.Uniforms = new CMap();
    this.Attributes = new CMap();
    
    //Shader Program Object
    this.Program = new CProgram();
    
    //Connect Variable to Attribute in Program
    this.AddAttribute = function(shdVarName, shdDataType, jsBufferPointer, attributeType, itemSize){

    }.bind(this);
    
    //Connect Variable to Uniform in Program
    this.AddUniform = function(shdVarName, shdVarType, jsVarPtr){

    }.bind(this);
    //Bind Attribute Buffers
    this.BindAttributes = function(cMesh){

    }.bind(this);
    
    //Set Uniform values before Draw Command
    this.SetUniforms = function(){
        
    }.bind(this);
    
    
};

CAttribute = function(shdVarName, shdDataType, attributeType){
    this.key = shdVarName;
    this.variableName = shdVarName;
    this.buffer = null;
    this.location = "";
    this.dataType = shdDataType;
    this.attributeType = attributeType;
    this.itemSize = null;
};

CUniform = function(shdVarName, shdVarType, jsVarPtr){
    this.key = shdVarName;
    this.variableName = shdVarName;
    this.value = jsVarPtr;              //JavaScript Variable Pointer/Value
    this.location = "";                 //Shader Uniform Location
    this.type = shdVarType;             //(bool, 4x4,3x3,vec3,vec4,float,etc)

};

CTexture = function(key, url){
    var gl = os.graphics.gl;
    
    this.key = key;
    this.initialized = false;
    this.type = gl.TEXTURE_2D;
    
    //Create gl Texture object
    this.texture = gl.createTexture();
    
    //Create HTML Image
    this.image = new Image();
    this.image.src = url;
    
    this.image.onload = function(){
        this.Initialize();
    }.bind(this);
    
    this.Initialize = function(){
        

    }.bind(this);
};
CRenderTexture = function(sKey, iWidth, iHeight){

    this.key = sKey;
    this.initialized = false;
    this.type = gl.TEXTURE_2D;
    this.width = iWidth;
    this.height = iHeight;
    
    //Create gl Texture object
    this.texture = os.graphics.gl.createTexture();
    this.initialized = true;
};
        
CCubeMap = function(key){
    var gl = os.graphics.gl;
    
    var _count = 0;
    this.type = gl.TEXTURE_CUBE_MAP;
    this.key = key;
    this.initialized = false;
    this.texture = gl.createTexture();
    
    var OnLoad = function(){
        _count++;
        if(_count == 6){
            Initialize();
        }
    }.bind(this);
    
    var Initialize = function(){

    }.bind(this);
    
    this.GetCount = function(){return _count;}
    this.Images = {
        positiveX: new Image(),
        negativeX: new Image(),
        positiveY: new Image(),
        negativeY: new Image(),
        positiveZ: new Image(),
        negativeZ: new Image()
    };
    
    this.Load = {
        positiveX: function(url){
            
        }.bind(this),
        negativeX: function(url){
        }.bind(this),
        positiveY: function(url){
        }.bind(this),
        negativeY: function(url){
        }.bind(this),
        positiveZ: function(url){
        }.bind(this),
        negativeZ: function(url){
        }.bind(this)
    };
    
    
};

CMesh = function(key, url){
    this.name = key;
    this.filename = url;
    this.loaded = false;
    this.numOfPolys = 0;
    this.numOfVerts = 0;
    this.instanced = false;
    this.onLoad = function(){};
    this.model = {
        vertexNormals: [],
        vertexTextureCoords: [],
        indices: [],
        instance: [],
        vertexPositions: []
    };
    
    this.Buffers = {
        Vertex: {
            itemSize: 0,
            numItems: 0
        },
        Normal: {
            itemSize: 0,
            numItems: 0
        },
        Texture: {
            itemSize: 0,
            numItems: 0
        },
        Index: {
            itemSize: 0,
            numItems: 0
        },
        Instance: {
            itemSize: 0,
            numItems: 0
        }
    }
    
    this.Load = function(){

        
    }.bind(this);
    
    this.Initialize = function(){

    }.bind(this);
    
    this.Draw = function(){

    }
    this.DrawArray = function(){
    }
    
};
CGraphicsEntity = function(ent){
    
    //Holds Parent CEntity object
    this.parent = new CEntity();
    
    //Holds textures used for the Entity
    this.Texture = new CMap();
    
    //Holds the Mesh (and/or Sub Meshes)
    this.Mesh = new CMap();
    
    //Holds the Shaders used for drawing
    this.Shaders = new CMap();
    
    //Instance Variables
    this.Instanced = {};
    this.Instanced.position = [];
    
    
    this.Vectors = {
        Position: vec3.create(),
        Scale: vec3.create([1,1,1]),
        Rotate: vec3.create(),
        Offset: vec3.create()
        
    };
    this.Matrix = {
        World: mat4.create(),
        Translate: mat4.create(),
        Scale: mat4.create(),
        Rotation: mat4.create(),
        RotateX: mat4.create(),
        RotateY: mat4.create(),
        RotateZ: mat4.create(),
        Normal: mat3.create()
    };
    this.Add = {
        Shader: function(shaderKey, prgKey){
            return new CShader(prg);
        }.bind(this),
        Mesh: function(mshID){
            return new CMesh();
        }.bind(this),
        Texture: function(textID){
            return new CTexture();
        }.bind(this)
    }
    this.Update = function(dt){
        
    }
    
    this.Draw = function(shdID, mshID){

    }
    //Private Method that will draw a specific Mesh with Specific shader
    var _Draw = function(msh, shd){

    }.bind(this);
    
    this.Set = {};
    this.Set.light = function(val){

        }.bind(ent);
    this.Set.specular = function(val){

        }.bind(ent);
    this.Set.texture = function(val){

        }.bind(ent);
    this.Set.fog = function(val){

        }.bind(ent);
    this.Set.fogColor = function(val){

        }.bind(ent);
    this.Set.fogBeginPosition = function(val){

        }.bind(ent);
    this.Set.fogEndPosition = function(val){

        }.bind(ent);
    this.Set.glow = function(val){

        }.bind(ent);
    this.Set.useBlendColor = function(val){

        }.bind(ent);
    this.Set.blendColor = function(val){

        }.bind(ent);
    
    this.CalculateRotationMatrix = function(){

        return ent.Matrix.Rotation;
    }.bind(ent);
    

                    
    
}

var CSound =  function(sKey){
    this.key = key;
    this.path = "";
    this.loop = false;
    this.autoplay = false;
    this.type = "";
    this.duration = "";
    this.volume = "";
    this.audio = new CHTMLElement("audio");
}
var CCallback = function(iID, fFunction, oScope){
    this.func = fFunction;
    this.scope =  oScope == undefined ? false : oScope;
    this.id = iID;
}

var _Touch = {
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    pressed: false
}
//Holds state of mouse for all registered states
var _Mouse = {
    lastX: 0,
    lastY: 0,
    pressed: false
}
var CGamepad = function(rawGamepad){
    //ADD ARRAY THAT HOLDS INDICIES OF RAW GAMEPAD ARRAY
    //  USE THIS ARRAY TO PULL PROPER INDEX, THEREBY ALLOWING THE
    //  ARRAY TO BE MODIFIED AND CUSTOMIZE BUTTON SCHEMES
    var raw = rawGamepad; /*{
        buttons: [],
        axes: [],
        timestamep: rawGamepad.timestamp
    };
    raw.buttons = rawGamepad.buttons.slice(0,rawGamepad.buttons.length);
    raw.axes = rawGamepad.axes.slice(0,rawGamepad.axes.length);
    */
    this.debugRaw = {buttons: [], axes: [], timestamp: 0};
    this.id = 0;
    this.indicies ={
        Dpad: {
            up: 12,
            down: 13,
            left: 14,
            right: 15
        },
        LeftShoulder: {
            top: 4,
            bottom: 6
        },
        RightShoulder: {
            top: 5,
            bottom: 7
        },
        Buttons: {
            top: 3,
            bottom: 0,
            left: 2,
            right: 1
        },
        LeftStick: {
            x: 0,
            y: 1,
            button: 10
        },
        RightStick: {
            x: 2,
            y: 3,
            button: 11
        },
        select: 8,
        start: 9
    }
    this.type = ((rawGamepad.id).toUpperCase()).indexOf("PLAYSTATION") < 0 ? "XBOX" : "PLAYSTATION";
    this.Dpad ={
        Up: function(){
            return 0;
        },
        Down: function(){
            return 0;
        },
        Left: function(){
            return 0;
        },
        Right: function(){
            return 0;
        }
    }
    this.LeftShoulder ={
        Top: function(){
            return 0;
        },
        Bottom: function(){
            return 0;
        }
    }           
    this.RightShoulder ={
        Top: function(){
            return 0;
        },
        Bottom: function(){
            return 0;
        }
    }
    
    this.Buttons = {
        Top: function(){
            return 0;
        },
        Bottom: function(){
            return 0;
        },
        Left: function(){
            return 0;
        },
        Right: function(){
            return 0;
        }
    }
    this.LeftStick = {
        X: function(){
            return 0;
        },
        Y: function(){
            return 0;
        },
        Button: function(){
            return 0;
        }
    }
    this.RightStick ={
        X: function(){
            return 0;
        },
        Y: function(){
            return 0;
        },
        Button: function(){
            return 0;
        }
    }
    
    this.Select = function(){ return 0;}
    this.Start =  function(){ return 0;}

    this.Delete = function(){
    }
    this.Update = function(rawGPad){

        
    }
}
var os = {
    kernel: {
        ResSchMgr: os.resschmgr,
        Command: os.command,
        Instruction: os.instruction,
        GetName: function(){},
        GetVersion: function(){},
        GetPath: function(){}
    },
    command: {
        GetName: function(){},
        GetVersion: function(){},
        GetPath: function(){}
    },
    resschmgr: {
        Create: {
            XHRObject: function(){
                return new CXHRObject();
            },
            Core: function(id){
                return new CCore(id);
            },
            Command: function(name, callback, scope, help){
                return new CCommand(name, callback, scope, help);
            },
            Event: function(id, target, name, eventType, custom, can_bubble, cancelable){
                return new CEvent(id, target, name, eventType, custom, can_bubble, cancelable);
            },
            EventObject:function(id, name, custom, targetID){
                return new CEventObject(id, name, custom, targetID);
            },
            Subscriber: function(name, id, eventName, callback, capture){
                return new CSubscriber(name, id, eventName, callback, capture);
            },
            Instruction: function(){
                return new CInstruction();
            },
            Map: function(linkEntries){
                return new CMap(linkEntries);
            },
            Queue: function(){
                return new CQueue();
            },
            Window: function(uID,uName, uWidth, uHeight, uTop, uLeft){
                return new CWindow(uID,uName, uWidth, uHeight, uTop, uLeft);
            },
            HTMLElement: function(tag){
                return new CHTMLElement(tag);
            },
            Entity: function(id){
                return new CEntity(id);   
            }
        },
        WindowManager: {
            
        },
        CoreManager: {
            
        },
        EventManager:{
            
        },
        ScheduleManager: {
            
        },
        GetName: function(){},
        GetVersion: function(){},
        GetPath: function(){}
    },
    instruction: null,
    
    //Internal Cores/APIs
    cores: {
        Network: os.network,
        Threads: os.threads,
        Windows: os.windows,
        Graphics: os.graphics,
        HTML: os.html,
        Database: os.datbase,
        Audio: os.audio
    },
    audio: {
        Add: function(sKey, sPath, bLoop, bAutoplay, sType){       
            return new CSound(key);  
        },
        Get: {
            Volume: function(sKey){
                return new CSound(key).volume;
            },
            Sound: function(sKey){
                return new CSound(key);
            },
            Duration: function(sKey){
                return new Number();
            }
            
        },
        Set: {
            Volume: function(sKey, vol){

            },
            CurrentTime: function(sKey, time){
                
            }
        },
        Play: function(sKey){
        },
        Pause: function(sKey){
        },
        GetName: function(){
            return NAME;
        },
        
        GetVersion: function(){
            return VERSION;
        },
        
        GetPath: function(){
            return PATH;
        },
       
        GetID: function(){
            return ID;
        },
        
        Initialize: function(){
            sounds = os.resschmgr.Create.Map();   
        }
    },
    network: {
        GetName: function(){
        },
        
        GetVersion: function(){
        },
        
        GetPath: function(){
        },
        
        GetID: function(){
        },
        
             
        SocketManager:{
            Sockets: new CMap(),
            CreateSocket: function(domain,port,path){
                //Create new socket
                return new CWebSocket(domain, port, path, id);
            }
            
            
        },
        Create: {
            Socket: function(domain,port,path){
                //Create new socket
                return new CWebSocket(domain, port, path, id);
            },
            SocketIO: function(domain, port, path){
                //Create new socket
                return new CSocketIO(domain, port, path, id);
            },
            JOSServer: function(domain,port,path){
                return new CJOSServer();
            }
        }
    },
    threads: null,
    html: null,
    input: {
        //PUBLIC ATTRIBUTES
        currentTime: 0,
        previousTime: 0,
        //PUBLIC PRIVILEDGE METHODS
        Update: function(dt){
            
            //Update current and check for new Gamepads
            
        },
        Get: {
            State: {
                Mouse: function(){
                    return {
                        lastX: 0,
                        lastY: 0,
                        pressed: false
                    };
                },
                Touch: function(){
                    return {
                        startX: 0,
                        startY: 0,
                        lastX: 0,
                        lastY: 0,
                        pressed: false
                    };
                },
                Keyboard: function(keyCode){
                    return true;
                },
                Gamepad: function(gamepadID){
                    return new CGamepad();
                }
            }
        },
        Register: {
            Mouse: {
                Event: {
                    Down: function(fFunction, oScope){
                        var e = new CCallback(_eventID++, fFunction, oScope);
                        return e;
                    },
                    Up: function(fFunction, oScope){
                        var e = new CCallback(_eventID++, fFunction, oScope);
                        return e;
                    },
                    Move: function(fFunction, oScope){
                        var e = new CCallback(_eventID++, fFunction, oScope);
                        return e;
                    }
                },
                State: {
                    
                }
            },
            Touch: {
                Event: {
                    Start: function(fFunction, oScope){
                        var e = new CCallback(_eventID++, fFunction, oScope);
                        return e;
                    },
                    End: function(fFunction, oScope){
                        var e = new CCallback(_eventID++, fFunction, oScope);
                        return e;
                    },
                    Move: function(fFunction, oScope){
                        var e = new CCallback(_eventID++, fFunction, oScope);
                        return e;
                    }
                },
                State: {
                    
                }
            },
            Keyboard: {
                Event: {
                    Keydown: function(Key, fFunction, oScope){
                        var e = new CCallback(_eventID++, fFunction, oScope);
                        
                        return e;
                    },
                    Keyup: function(Key, fFunction, oScope){
                        var e = new CCallback(_eventID++, fFunction, oScope);
                        
                        return e;
                        
                    }
                },
                State: {
                    
                }
            },
            Gamepad: {
                Event: {
                    Connected: function(fFunction, oScope){
                        var e = new CCallback(_eventID++, fFunction, oScope);
                        return e;
                    },
                    Disconnected: function(fFunction, oScope){
                        var e = new CCallback(_eventID++, fFunction, oScope);
                        return e;
                    }
                },
                State: {
                    
                }
            }
        },
        Gamepads: {
            Raw: {
                current:  [undefined, undefined,undefined, undefined],
                previous: [undefined, undefined,undefined, undefined]
            },
            current: null,
            previous: null,
            Poll: function(dt){
                
            },
            Update: function(dt){
            }
        },
        GetName: function(){
            return NAME;
        },
        
        GetVersion: function(){
            return VERSION;
        },
        
        GetPath: function(){
            return PATH;
        },
       
        GetID: function(){
            return ID;
        },
        
        Initialize: function(){
            
        }
    },
    windows: {
        Create: {
            Window: function(wndTitle, themeName){
                return new CWindowCore(0, wndTitle, themeName);
            },
            ErrorWindow: function(wndTitle, message){
                    
            },
            Theme: function(name){
                return new CWindowTheme(name);
            },
            MenuElement: function(){
                return new CMenuElement();
            },
            ToolbarElement: function(){
                return new CToolbarElement();
            }
        },
        WindowsManager: {
            nextID: 0,
            Windows: new CMap(),
            Themes: new CMap(),
            BuildDefaultThemes: function(){

            },
            ActiveWindow: new CWindowCore(),
            Create: {
                Window: function(wndTitle, themeName){
                    return new CWindowCore(0, wndTitle, themeName);
                },
                Theme: function(name){
                    return new CWindowTheme(name);
                },
                MenuElement: function(){
                    return new CMenuElement();
                },
                ToolbarElement: function(){
                    return new CToolbarElement();
                }
                
            }
        },   
        Desktop: {
            Themes: new CMap(),
            Applications: new CMap(),
            nextID: 0,
            theme: new CWindowTheme(),
            Get: {
                state: {
                    desktop: function(){
                    },
                    dock: function(){
                    },
                    startButton: function(){
                    },
                    startButtonText: function(){
                    },
                    startMenu: function(){
                    }
                }
            },
            Create: {
                Theme: function(name){
                    return CDesktopTheme(name);
                },
                Application: function(){
                    return new CApplication(os.windows.Desktop.nextID++);
                }
            },
            Display: {
                desktop: function(){
                },
                dock: function(){
                },
                startButton: function(){
                },
                startButtonText: function(){
                },
                startMenu: function(){
                }
            },
            Hide: {
                desktop: function(){
                },
                dock: function(){
                },
                startButton: function(){
                },
                startButtonText: function(){
                },
                startMenu: function(){
                }
            },
            Set: {
    
            },
            
            AddApplication: function(cApplication){

            },
            RemoveApplication: function(){
                
            },
            LoadTheme: function(cTheme){

                
            },
            ClearTheme: function(){
            },
            Elements: {
                desktop: new CHTMLElement("div"),
                dock: new CHTMLElement("div"),
                startButton: new CHTMLElement("div"),
                startButtonText:new CHTMLElement("div"),
                startMenu: new CHTMLElement("div")
            },
            Load: function(sTheme){

            }
            
        },
        GetName: function(){
            return NAME;
        },
        
        GetVersion: function(){
            return VERSION;
        },
        
        GetPath: function(){
            return PATH;
        },
       
        GetID: function(){
            return ID;
        }
        
    },
    datbase: null,
    graphics: {
        gl: null,
        Managers: {
            Shader:{
                Maps: {
                    VertexShaders: new CMap(),
                    FragmentShaders: new CMap(),
                    Programs: new CMap()
                },
                Create: {
                    VertexShader: function(key, url){
                        return new CVertexShader(key, url);
                    },
                    FragmentShader: function(key, url){
                        return new CFragmentShader(key, url);
                    },
                    Program: function(sVS, sFS, key){
                        //Create Program
                        return new CProgram(sVS, sFS, key);  
                    },
                    Shader: function(cProg){
                        return  new CShader(cProg);
                    },
                    Uniform: function(shdVarName, shdVarType, jsVarPtr){
                        return new CUniform(shdVarName, shdVarType, jsVarPtr);
                    },
                    Attribute: function(shdVarName, shdDataType, attributeType){
                        return new CAttribute(shdVarName, shdDataType, attributeType);
                    }
                },
                SetActiveProgram: function(cPrg){
                },
                ActiveProgram: new CProgram()
            },
            Mesh:{
                meshes: new CMap(),
                totalPolys: 0,
                totalVerts: 0,
                Create: {
                    Mesh: function(key, url){
                        return new CMesh(key, url);
                    },
                    Primitive: {
                        Cube:   function(key){
                            return new CMesh(key);
                        },
                        Quad: function(key){
                            return new CMesh(key);
                        }
                    },
                    Instanced: function(sMesh, sKey, number){
                        return new CMesh(sKey);
                    }
                },
                
                GetMesh: function(key){
                    return new CMesh(key);
                }
                
            },
            Sprite:{
            },
            Texture:{
                textures: new CMap(),
                Create: {
                    Texture:   function(key, url){
                        return new CTexture(key, url);
                    },
                    CubeMap: function(key){
                        return new CCubeMap(key);
                    },
                    RenderTexture: function(sKey, iWidth, iHeight){
                        return new CRenderTexture(sKey, iWidth, iHeight);
                    }
                },
                GetTexture: function(key){
                   return new CTexture();
                }
            },
            Entity:{
                Entities: new CMap(),
                _count: 0,
                Create : function(sProgram, id){
                    return new CEntity();
                    
                },
                EnableGraphics: function(cEntity, program){
                    
                    return new CEntity();
                }
            },
            Camera:{
                Position: vec3.create([0,0,0]),
                Offset: vec3.create([0,0,0]),
                Attach: function(cEntity){

                },
                attached: false,
                attachedEntity: new CGraphicsEntity(),
                Rotation: {
                    yaw:   0,
                    pitch: 0,
                    roll:  0
                },
                LookAtPoint: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                Axis: {
                    Look:  vec3.create([0,0,-1]),
                    Right: vec3.create([1,0,0]),
                    Up:    vec3.create([0,1,0])
                },
                Matrix: {
                    Yaw:   mat4.create(),
                    Pitch: mat4.create(),
                    Roll:  mat4.create(),
                    Rotation: mat4.create(),
                    Translate: mat4.create()
                },
                MoveForward: function(distance){

                },
                MoveBackward: function(distance){

                },
                MoveLeft: function(distance){

                },
                MoveRight: function(distance){

                },
                MoveUp: function(distance){

                },
                MoveDown: function(distance){
       
                },
                CalculateViewMatrix: function(){
                    
                }
            }
        },
        Matrix: {
            Projection: mat4.create(),
            View: mat4.create()
        },
        Time: {
            current:    0,
            previous:   0,
            elapsed:    0,
            dt:         0
        },
        
        Get: {
            Canvas: function(){return _canvas;},
            Pause: function(){return _pause;},
            Fullscreen: function(){return _fullscreen;},
            Width: function(){return _width;},
            Height: function(){return _height;}
        },
        Set: {
            Callback:{
                Update: function(updateFunction, updateScope){
                    _update = updateFunction;
                    _updateScope = updateScope;
                },
                Draw: function(drawFunction, drawScope){
                    _draw = drawFunction;
                    _drawScope = drawScope;
                },
                Reset: function(resetFunction, resetScope){
                    _reset = resetFunction;
                    _resetScope = resetScope;
                }
                
            }
        },
        Maps: {
            update: new CMap(),
            draw: new CMap(),
            name2id: new CMap()
        },
        
        //PUBLIC PRIVILEDGE METHODS
        Initialize: function(){

        },
        Load: function(isDebug, isFullscreen, canvas){
            return document.createElement("canvas");
            
        },
        Start: function(){
        },
        Pause: function(){
        },
        Resume: function(){
        },            
        Update: function(){

        },
        Draw: function(){

        },
        AddToWorld: function(cEntity){
        },
        AddToDraw: function(cEntity){
        },
        AddToUpdate: function(cEntity){
        },
        RemoveFromWorld: function(cEntity){
        },
        RemoveFromDraw: function(cEntity){
        },
        RemoveFromUpdate: function(cEntity){
        },
        OnReset: function(){
            
        },
        
        GetName: function(){
            return NAME;
        },
        
        GetVersion: function(){
            return VERSION;
        },
        
        GetPath: function(){
            return PATH;
        },
       
        GetID: function(){
            return ID;
        } 
        
    
    },
    
    //UTILITIES MODULE
    utilities: {
        console: os.console,
        deubugbar: os.debugbar,
        timeer: os.timer,
        GetName: function(){},
        GetVersion: function(){},
        GetPath: function(){}
    },
    console: {
        cmdWindow: document.createElement("textarea"),
        length: 0,
        Pinned: false,
        ConsoleHover: false,
        APIPinned: false,
        APIHover: false,
        Commands: new CMap(),
        AddCommand: function(name, callback, scope, help){
        },
        
        RemoveCommand: function(name){
        },
        
        GetCommand: function(name){
        },
        
        DisplayCommands: function(){
            
        },
        AppendComment: function(comment){
                                        
        },
       
        Comment: function(comment){
                                      
        },
        
        Warning: function(comment){
                                       
        },
        
        Error: function(comment){
                                       
        },
        
        Clear: function(){
                                     
        },
        GetName: function(){},
        GetVersion: function(){},
        GetPath: function(){},
        GetStatus: function(){
        },
        GetPrompt: function(){
        },
        Enable: function(){
        },
        
        Disable: function(){
        }
                                    
                                    
    },
    debugbar: {
        //PUBLIC ATTRIBUTES
        ConsolePagePinned: false,
        LogsPagePinned: false,
        SettingsPagePinned: false,
        GetName: function(){
            return NAME;
        },
        
        GetVersion: function(){
            return VERSION;
        },
        
        GetPath: function(){
            return PATH;
        },
        
        GetStatus: function(){
            return ENABLED;
        },
        
        Enable: function(){
             
        },
        
        Disable: function(){ 
        },        
        Build: function(){

        },
        
        //******************************************
        //
        //  SIDEBAR PIN FUNCTIONS
        //
        //******************************************
        AnchorPage: function(e){

        },
        AnchorConsolePage: function(e){

        },
        AnchorLogsPage: function(e){

        },
        AnchorSettingsPage: function(e){

        },
        
        EvaluateShortCuts:function(e){

        }

    },
    timer: {
        GetName: function(){},
        GetVersion: function(){},
        GetPath: function(){}
    },
    GetName: function(){},
    GetVersion: function(){},
    GetPath: function(){},
    GetDomain: function(){},
    Load: function(sAppName){
    },
    GetQueryString: function(){
        
    },
    ExecuteQuery: function(){

    },
    queryString: "",
    
    //PUBLIC OBJECTS/CLASSES
    Kernel: os.kernel,
    Cores: os.cores

}

var jos = {
    kernel: {
        ResSchMgr: jos.resschmgr,
        Command: jos.command,
        Instruction: jos.instruction,
        GetName: function(){},
        GetVersion: function(){},
        GetPath: function(){}
    },
    command: {
        GetName: function(){},
        GetVersion: function(){},
        GetPath: function(){}
    },
    resschmgr: {
        Create: {
            XHRObject: function(){
                return new CXHRObject();
            },
            Core: function(id){
                return new CCore(id);
            },
            Command: function(name, callback, scope, help){
                return new CCommand(name, callback, scope, help);
            },
            Event: function(id, target, name, eventType, custom, can_bubble, cancelable){
                return new CEvent(id, target, name, eventType, custom, can_bubble, cancelable);
            },
            EventObject:function(id, name, custom, targetID){
                return new CEventObject(id, name, custom, targetID);
            },
            Subscriber: function(name, id, eventName, callback, capture){
                return new CSubscriber(name, id, eventName, callback, capture);
            },
            Instruction: function(){
                return new CInstruction();
            },
            Map: function(linkEntries){
                return new CMap(linkEntries);
            },
            Queue: function(){
                return new CQueue();
            },
            Window: function(uID,uName, uWidth, uHeight, uTop, uLeft){
                return new CWindow(uID,uName, uWidth, uHeight, uTop, uLeft);
            },
            HTMLElement: function(tag){
                return new CHTMLElement(tag);
            },
            Entity: function(id){
                return new CEntity(id);   
            }
        },
        WindowManager: {
            
        },
        CoreManager: {
            
        },
        EventManager:{
            
        },
        ScheduleManager: {
            
        },
        GetName: function(){},
        GetVersion: function(){},
        GetPath: function(){}
    },
    instruction: null,
    
    //Internal Cores/APIs
    cores: {
        Network: jos.network,
        Threads: jos.threads,
        Windows: jos.windows,
        Graphics: jos.graphics,
        HTML: jos.html,
        Database: jos.datbase,
        Audio: jos.audio
    },
    audio: {
        Add: function(sKey, sPath, bLoop, bAutoplay, sType){       
            return new CSound(key);  
        },
        Get: {
            Volume: function(sKey){
                return new CSound(key).volume;
            },
            Sound: function(sKey){
                return new CSound(key);
            },
            Duration: function(sKey){
                return new Number();
            }
            
        },
        Set: {
            Volume: function(sKey, vol){

            },
            CurrentTime: function(sKey, time){
                
            }
        },
        Play: function(sKey){
        },
        Pause: function(sKey){
        },
        GetName: function(){
            return NAME;
        },
        
        GetVersion: function(){
            return VERSION;
        },
        
        GetPath: function(){
            return PATH;
        },
       
        GetID: function(){
            return ID;
        },
        
        Initialize: function(){
            sounds = jos.resschmgr.Create.Map();   
        }
    },
    network: {
        GetName: function(){
        },
        
        GetVersion: function(){
        },
        
        GetPath: function(){
        },
        
        GetID: function(){
        },
        
             
        SocketManager:{
            Sockets: new CMap(),
            CreateSocket: function(domain,port,path){
                //Create new socket
                return new CWebSocket(domain, port, path, id);
            }
            
            
        },
        Create: {
            Socket: function(domain,port,path){
                //Create new socket
                return new CWebSocket(domain, port, path, id);
            },
            SocketIO: function(domain, port, path){
                //Create new socket
                return new CSocketIO(domain, port, path, id);
            },
            JOSServer: function(domain,port,path){
                return new CJOSServer();
            }
        }
    },
    threads: null,
    html: null,
    input: {
        //PUBLIC ATTRIBUTES
        currentTime: 0,
        previousTime: 0,
        //PUBLIC PRIVILEDGE METHODS
        Update: function(dt){
            
            //Update current and check for new Gamepads
            
        },
        Get: {
            State: {
                Mouse: function(){
                    return {
                        lastX: 0,
                        lastY: 0,
                        pressed: false
                    };
                },
                Touch: function(){
                    return {
                        startX: 0,
                        startY: 0,
                        lastX: 0,
                        lastY: 0,
                        pressed: false
                    };
                },
                Keyboard: function(keyCode){
                    return true;
                },
                Gamepad: function(gamepadID){
                    return new CGamepad();
                }
            }
        },
        Register: {
            Mouse: {
                Event: {
                    Down: function(fFunction, oScope){
                        var e = new CCallback(_eventID++, fFunction, oScope);
                        return e;
                    },
                    Up: function(fFunction, oScope){
                        var e = new CCallback(_eventID++, fFunction, oScope);
                        return e;
                    },
                    Move: function(fFunction, oScope){
                        var e = new CCallback(_eventID++, fFunction, oScope);
                        return e;
                    }
                },
                State: {
                    
                }
            },
            Touch: {
                Event: {
                    Start: function(fFunction, oScope){
                        var e = new CCallback(_eventID++, fFunction, oScope);
                        return e;
                    },
                    End: function(fFunction, oScope){
                        var e = new CCallback(_eventID++, fFunction, oScope);
                        return e;
                    },
                    Move: function(fFunction, oScope){
                        var e = new CCallback(_eventID++, fFunction, oScope);
                        return e;
                    }
                },
                State: {
                    
                }
            },
            Keyboard: {
                Event: {
                    Keydown: function(Key, fFunction, oScope){
                        var e = new CCallback(_eventID++, fFunction, oScope);
                        
                        return e;
                    },
                    Keyup: function(Key, fFunction, oScope){
                        var e = new CCallback(_eventID++, fFunction, oScope);
                        
                        return e;
                        
                    }
                },
                State: {
                    
                }
            },
            Gamepad: {
                Event: {
                    Connected: function(fFunction, oScope){
                        var e = new CCallback(_eventID++, fFunction, oScope);
                        return e;
                    },
                    Disconnected: function(fFunction, oScope){
                        var e = new CCallback(_eventID++, fFunction, oScope);
                        return e;
                    }
                },
                State: {
                    
                }
            }
        },
        Gamepads: {
            Raw: {
                current:  [undefined, undefined,undefined, undefined],
                previous: [undefined, undefined,undefined, undefined]
            },
            current: null,
            previous: null,
            Poll: function(dt){
                
            },
            Update: function(dt){
            }
        },
        GetName: function(){
            return NAME;
        },
        
        GetVersion: function(){
            return VERSION;
        },
        
        GetPath: function(){
            return PATH;
        },
       
        GetID: function(){
            return ID;
        },
        
        Initialize: function(){
            
        }
    },
    windows: {
        Create: {
            Window: function(wndTitle, themeName){
                return new CWindowCore(0, wndTitle, themeName);
            },
            ErrorWindow: function(wndTitle, message){
                    
            },
            Theme: function(name){
                return new CWindowTheme(name);
            },
            MenuElement: function(){
                return new CMenuElement();
            },
            ToolbarElement: function(){
                return new CToolbarElement();
            }
        },
        WindowsManager: {
            nextID: 0,
            Windows: new CMap(),
            Themes: new CMap(),
            BuildDefaultThemes: function(){

            },
            ActiveWindow: new CWindowCore(),
            Create: {
                Window: function(wndTitle, themeName){
                    return new CWindowCore(0, wndTitle, themeName);
                },
                Theme: function(name){
                    return new CWindowTheme(name);
                },
                MenuElement: function(){
                    return new CMenuElement();
                },
                ToolbarElement: function(){
                    return new CToolbarElement();
                }
                
            }
        },   
        Desktop: {
            Themes: new CMap(),
            Applications: new CMap(),
            nextID: 0,
            theme: new CWindowTheme(),
            Get: {
                state: {
                    desktop: function(){
                    },
                    dock: function(){
                    },
                    startButton: function(){
                    },
                    startButtonText: function(){
                    },
                    startMenu: function(){
                    }
                }
            },
            Create: {
                Theme: function(name){
                    return CDesktopTheme(name);
                },
                Application: function(){
                    return new CApplication(jos.windows.Desktop.nextID++);
                }
            },
            Display: {
                desktop: function(){
                },
                dock: function(){
                },
                startButton: function(){
                },
                startButtonText: function(){
                },
                startMenu: function(){
                }
            },
            Hide: {
                desktop: function(){
                },
                dock: function(){
                },
                startButton: function(){
                },
                startButtonText: function(){
                },
                startMenu: function(){
                }
            },
            Set: {
    
            },
            
            AddApplication: function(cApplication){

            },
            RemoveApplication: function(){
                
            },
            LoadTheme: function(cTheme){

                
            },
            ClearTheme: function(){
            },
            Elements: {
                desktop: new CHTMLElement("div"),
                dock: new CHTMLElement("div"),
                startButton: new CHTMLElement("div"),
                startButtonText:new CHTMLElement("div"),
                startMenu: new CHTMLElement("div")
            },
            Load: function(sTheme){

            }
            
        },
        GetName: function(){
            return NAME;
        },
        
        GetVersion: function(){
            return VERSION;
        },
        
        GetPath: function(){
            return PATH;
        },
       
        GetID: function(){
            return ID;
        }
        
    },
    datbase: null,
    graphics: {
        gl: null,
        Managers: {
            Shader:{
                Maps: {
                    VertexShaders: new CMap(),
                    FragmentShaders: new CMap(),
                    Programs: new CMap()
                },
                Create: {
                    VertexShader: function(key, url){
                        return new CVertexShader(key, url);
                    },
                    FragmentShader: function(key, url){
                        return new CFragmentShader(key, url);
                    },
                    Program: function(sVS, sFS, key){
                        //Create Program
                        return new CProgram(sVS, sFS, key);  
                    },
                    Shader: function(cProg){
                        return  new CShader(cProg);
                    },
                    Uniform: function(shdVarName, shdVarType, jsVarPtr){
                        return new CUniform(shdVarName, shdVarType, jsVarPtr);
                    },
                    Attribute: function(shdVarName, shdDataType, attributeType){
                        return new CAttribute(shdVarName, shdDataType, attributeType);
                    }
                },
                SetActiveProgram: function(cPrg){
                },
                ActiveProgram: new CProgram()
            },
            Mesh:{
                meshes: new CMap(),
                totalPolys: 0,
                totalVerts: 0,
                Create: {
                    Mesh: function(key, url){
                        return new CMesh(key, url);
                    },
                    Primitive: {
                        Cube:   function(key){
                            return new CMesh(key);
                        },
                        Quad: function(key){
                            return new CMesh(key);
                        }
                    },
                    Instanced: function(sMesh, sKey, number){
                        return new CMesh(sKey);
                    }
                },
                
                GetMesh: function(key){
                    return new CMesh(key);
                }
                
            },
            Sprite:{
            },
            Texture:{
                textures: new CMap(),
                Create: {
                    Texture:   function(key, url){
                        return new CTexture(key, url);
                    },
                    CubeMap: function(key){
                        return new CCubeMap(key);
                    },
                    RenderTexture: function(sKey, iWidth, iHeight){
                        return new CRenderTexture(sKey, iWidth, iHeight);
                    }
                },
                GetTexture: function(key){
                   return new CTexture();
                }
            },
            Entity:{
                Entities: new CMap(),
                _count: 0,
                Create : function(sProgram, id){
                    return new CEntity();
                    
                },
                EnableGraphics: function(cEntity, program){
                    
                    return new CEntity();
                }
            },
            Camera:{
                Position: vec3.create([0,0,0]),
                Offset: vec3.create([0,0,0]),
                Attach: function(cEntity){

                },
                attached: false,
                attachedEntity: new CGraphicsEntity(),
                Rotation: {
                    yaw:   0,
                    pitch: 0,
                    roll:  0
                },
                LookAtPoint: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                Axis: {
                    Look:  vec3.create([0,0,-1]),
                    Right: vec3.create([1,0,0]),
                    Up:    vec3.create([0,1,0])
                },
                Matrix: {
                    Yaw:   mat4.create(),
                    Pitch: mat4.create(),
                    Roll:  mat4.create(),
                    Rotation: mat4.create(),
                    Translate: mat4.create()
                },
                MoveForward: function(distance){

                },
                MoveBackward: function(distance){

                },
                MoveLeft: function(distance){

                },
                MoveRight: function(distance){

                },
                MoveUp: function(distance){

                },
                MoveDown: function(distance){
       
                },
                CalculateViewMatrix: function(){
                    
                }
            }
        },
        Matrix: {
            Projection: mat4.create(),
            View: mat4.create()
        },
        Time: {
            current:    0,
            previous:   0,
            elapsed:    0,
            dt:         0
        },
        
        Get: {
            Canvas: function(){return _canvas;},
            Pause: function(){return _pause;},
            Fullscreen: function(){return _fullscreen;},
            Width: function(){return _width;},
            Height: function(){return _height;}
        },
        Set: {
            Callback:{
                Update: function(updateFunction, updateScope){
                    _update = updateFunction;
                    _updateScope = updateScope;
                },
                Draw: function(drawFunction, drawScope){
                    _draw = drawFunction;
                    _drawScope = drawScope;
                },
                Reset: function(resetFunction, resetScope){
                    _reset = resetFunction;
                    _resetScope = resetScope;
                }
                
            }
        },
        Maps: {
            update: new CMap(),
            draw: new CMap(),
            name2id: new CMap()
        },
        
        //PUBLIC PRIVILEDGE METHODS
        Initialize: function(){

        },
        Load: function(isDebug, isFullscreen, canvas){
            return document.createElement("canvas");
            
        },
        Start: function(){
        },
        Pause: function(){
        },
        Resume: function(){
        },            
        Update: function(){

        },
        Draw: function(){

        },
        AddToWorld: function(cEntity){
        },
        AddToDraw: function(cEntity){
        },
        AddToUpdate: function(cEntity){
        },
        RemoveFromWorld: function(cEntity){
        },
        RemoveFromDraw: function(cEntity){
        },
        RemoveFromUpdate: function(cEntity){
        },
        OnReset: function(){
            
        },
        
        GetName: function(){
            return NAME;
        },
        
        GetVersion: function(){
            return VERSION;
        },
        
        GetPath: function(){
            return PATH;
        },
       
        GetID: function(){
            return ID;
        } 
        
    
    },
    
    //UTILITIES MODULE
    utilities: {
        console: jos.console,
        deubugbar: jos.debugbar,
        timeer: jos.timer,
        GetName: function(){},
        GetVersion: function(){},
        GetPath: function(){}
    },
    console: {
        cmdWindow: document.createElement("textarea"),
        length: 0,
        Pinned: false,
        ConsoleHover: false,
        APIPinned: false,
        APIHover: false,
        Commands: new CMap(),
        AddCommand: function(name, callback, scope, help){
        },
        
        RemoveCommand: function(name){
        },
        
        GetCommand: function(name){
        },
        
        DisplayCommands: function(){
            
        },
        AppendComment: function(comment){
                                        
        },
       
        Comment: function(comment){
                                      
        },
        
        Warning: function(comment){
                                       
        },
        
        Error: function(comment){
                                       
        },
        
        Clear: function(){
                                     
        },
        GetName: function(){},
        GetVersion: function(){},
        GetPath: function(){},
        GetStatus: function(){
        },
        GetPrompt: function(){
        },
        Enable: function(){
        },
        
        Disable: function(){
        }
                                    
                                    
    },
    debugbar: {
        //PUBLIC ATTRIBUTES
        ConsolePagePinned: false,
        LogsPagePinned: false,
        SettingsPagePinned: false,
        GetName: function(){
            return NAME;
        },
        
        GetVersion: function(){
            return VERSION;
        },
        
        GetPath: function(){
            return PATH;
        },
        
        GetStatus: function(){
            return ENABLED;
        },
        
        Enable: function(){
             
        },
        
        Disable: function(){ 
        },        
        Build: function(){

        },
        
        //******************************************
        //
        //  SIDEBAR PIN FUNCTIONS
        //
        //******************************************
        AnchorPage: function(e){

        },
        AnchorConsolePage: function(e){

        },
        AnchorLogsPage: function(e){

        },
        AnchorSettingsPage: function(e){

        },
        
        EvaluateShortCuts:function(e){

        }

    },
    timer: {
        GetName: function(){},
        GetVersion: function(){},
        GetPath: function(){}
    },
    GetName: function(){},
    GetVersion: function(){},
    GetPath: function(){},
    GetDomain: function(){},
    Load: function(sAppName){
    },
    GetQueryString: function(){
        
    },
    ExecuteQuery: function(){

    },
    queryString: "",
    
    //PUBLIC OBJECTS/CLASSES
    Kernel: jos.kernel,
    Cores: jos.cores

}

com = {
    jahova: {
        os: {
            Instance: function(){
                return jos;
            }
        }
    }
}