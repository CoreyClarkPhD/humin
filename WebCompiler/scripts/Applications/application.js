//JaHOVA OS Instance
var os = null; 

//
//  Entry Method Called from OS
//
Application = function(){
    //Get pionter to JaHOVA OS
    os = com.jahova.os.Instance();
    
    //Connect HTML Objects to JavaScript
    App.Load();
    
    //App Initializtion
    App.Init();
    
}

//
//  Application Object Definition
//
var App = {
    Load: function(){
        App.HTML.container = document.getElementById('app');
    
        App.HTML.Main.container = document.getElementById('main');
        App.HTML.Main.window = document.getElementById('main-window');
        App.HTML.Main.footer = document.getElementById('main-footer');
        
        App.HTML.Thumnails.container = document.getElementById('thumbnail');
        App.HTML.Thumnails.window = document.getElementById('thumbnail-window');
        App.HTML.Thumnails.footer = document.getElementById('thumbnail-footer');
        
        App.HTML.Properties.container = document.getElementById('properties');
        App.HTML.Properties.header = document.getElementById('properties-header');
        App.HTML.Properties.window = document.getElementById('properties-window');
        App.HTML.Properties.dropDown = document.getElementById("dropdown");
        App.HTML.Properties.dropDown.onchange = function(e){
            var win = os.windows.WindowsManager.Windows.get("jahova.window.id." + e.currentTarget.value);
            win.MakeActive();
            if(App.Events.onDropdown){App.Events.onDropdown(win);};
        }
    },
    Display: {
        State: 'windowed',
        Toggle: function(){
            App.Display.State == "windowed" ? App.Display.Fullscreen() : App.Display.Windowed();
        },
        Fullscreen: function(){
            App.Display.State = "fullscreen";
            
            //Scroll Screen to top left, to hide any overflow
            scrollTo(0,0);
            
            App.HTML.Thumnails.container.style.display = "none";
            
            App.HTML.Properties.container.style.display = "none";
            
            //var win = document.getElementById("main-window");
            App.HTML.Main.window.setAttribute("class", "fullscreen");
            App.HTML.Main.window.style.height = window.innerHeight + "px";
            
            document.body.style.overflow = "hidden";
            
            //Hide Debug Bar, to make sure its not causing any problems
            os.debugbar.Disable();
            
            if(App.Events.onFullscreen){App.Events.onFullscreen()}
        },
        Windowed: function(){
            App.Display.State = "windowed";
            
            App.HTML.Thumnails.container.style.display = "";
            
            App.HTML.Properties.container.style.display = "";
            
            App.HTML.Main.window.setAttribute("class", "main-window border-radius-top-10px");
            App.HTML.Main.window.style.height = "";
            
            document.body.style.overflow = "";
            
            //Hide Debug Bar, to make sure its not causing any problems
            os.debugbar.Enable();
            
            if(App.Events.onWindowed){App.Events.onWindowed()}
        },
        EnableButton: function(){
            App.HTML.Main.window.innerHTML =  '<div id="expand-button" class="expand-button-min" onclick="App.Display.Toggle()"></div>'
        }
    },
    HTML: {
        container: null,
        Main: {
            container: null,
            window: null,
            footer: null
        },
        Properties: {
            container: null,
            header: null,
            window: null,
            dropDown: null
        },
        Thumnails: {
            container: null,
            window: null,
            footer: null
        }
    },
    FileIO: {
        Add: {
            FileSelector:{
                Main: function(label){
                    var bHaveFileAPI = (window.File && window.FileReader);
    
                    if(!bHaveFileAPI){
                        os.windows.Create.ErrorWindow("File IO Not Supported", "The current browser does not support HTML5 File IO");
                        return;
                    }
                    
                    App.HTML.Main.footer.innerHTML = '\t\t\t\t<form action="" class="border-radius-btm-10px">'+
                        '\n\t\t\t\t\t<div class="choose-file">'+
                            '\n\t\t\t\t\t\t<label>'+ label +'</label>'+
                            '\n\t\t\t\t\t\t<input type="file" name="mainFile" id="mainFile" multiple="multiple"/>'+
                        '\n\t\t\t\t\t</div>'+
                    '\n\t\t\t\t</form>';
                    document.getElementById("mainFile").addEventListener("change", App.FileIO._Events.onFileLoaded);
                },
                Thumbnails: function(label){
                    var bHaveFileAPI = (window.File && window.FileReader);
    
                    if(!bHaveFileAPI){
                        os.windows.Create.ErrorWindow("File IO Not Supported", "The current browser does not support HTML5 File IO");
                        return;
                    }
                    
                    App.HTML.Thumnails.footer.innerHTML = '\t\t\t\t<form action="" class="border-radius-btm-10px">'+
                        '\n\t\t\t\t\t<div class="choose-file">'+
                            '\n\t\t\t\t\t<label>'+ label +'</label>'+
                            '\n\t\t\t\t\t<input type="file" name="ThumbnailFile" id="thumbnailsFile" multiple="multiple"/>'+
                        '\n\t\t\t\t\t</div>'+
                    '\n\t\t\t\t\t</form>';
                    document.getElementById("thumbnailsFile").addEventListener("change", App.FileIO._Events.onFileLoaded);
                },
                Div: function(div, label, name){
                    var bHaveFileAPI = (window.File && window.FileReader);
    
                    if(!bHaveFileAPI){
                        os.windows.Create.ErrorWindow("File IO Not Supported", "The current browser does not support HTML5 File IO");
                        return;
                    }
                    
                    div.innerHTML = '\t\t\t\t<form action="" class="border-radius-btm-10px">'+
                        '\n\t\t\t\t\t<div class="choose-file">'+
                            '\n\t\t\t\t\t<label>'+ label +'</label>'+
                            '\n\t\t\t\t\t<input type="file" name="'+ name +'" id="'+ name +'" multiple="multiple"/>'+
                        '\n\t\t\t\t\t</div>'+
                    '\n\t\t\t\t\t</form>';
                    
                    document.getElementById(name).addEventListener("change", App.FileIO._Events.onFileLoaded);
                }
            },
            Dropzone: {
                App: function(){
                    var bHaveFileAPI = (window.File && window.FileReader);
    
                    if(!bHaveFileAPI){
                        os.windows.Create.ErrorWindow("File IO Not Supported", "The current browser does not support HTML5 File IO");
                        return;
                    }
                
                    document.body.addEventListener("drop", App.FileIO._Events.onFileLoaded);
                    document.body.addEventListener("dragover", App.FileIO._Events.onFileDragOver);
                },
                Div: function(div){
                    var bHaveFileAPI = (window.File && window.FileReader);
    
                    if(!bHaveFileAPI){
                        os.windows.Create.ErrorWindow("File IO Not Supported", "The current browser does not support HTML5 File IO");
                        return;
                    }
                    
                    div.addEventListener("drop", App.FileIO._Events.onFileLoaded);
                    div.addEventListener("dragover", App.FileIO._Events.onFileDragOver);
                }
            }
        },
        Get: {
            Extension: function(file){
                return file.name.substr(file.name.lastIndexOf(".") + 1).toUpperCase();
            }
        },
        Read: {
            Text: function(file, callback, scope){
                var reader = new FileReader();
    
                reader.onload = function(e){
                    scope ? callback.apply(scope, [file, e.target.results]) : callback(file, e.target.result) ;
                }
                
                reader.readAsText(file);
            },
            Image: function(file, callback, scope){
                var reader = new FileReader();
                
                reader.onload = function(e){
                    img = new Image();
                    img.src = e.target.result;
                    scope ? callback.apply(scope, [img]) : callback(img) ;
                }
                
                reader.readAsDataURL(file);
            },
            DataURL: function(file, callback, scope){
                var reader = new FileReader();
                
                reader.onload = function(e){
                    scope ? callback.apply(scope, [e.target.result]) : callback(e.target.result) ;
                }
                
                reader.readAsDataURL(file);
            },
            ObjectURL: function(file){
                if ( window.webkitURL ) {
                    return window.webkitURL.createObjectURL( file );
                }
                else if ( window.URL && window.URL.createObjectURL ) {
                    return window.URL.createObjectURL( file );
                }
                else {
                    return null;
                }
            }
            
        },
        _Events: {
            onFileLoaded: function(e){
                e.stopPropagation();
                e.preventDefault();
                
                var files = e.target.files ? e.target.files : e.dataTransfer.files;
                var totalBytes = 0;
                
                for(var i = 0; i < files.length; i++){
                    var fileInfo = "File Name: " + files[i].name + "; Size: " + files[i].size + "; Type: " + files[i].type ;
                    totalBytes += files[i].size;
                    os.console.AppendComment(fileInfo);
                }
                
                os.console.Comment( "\nTotal of " + files.length + " files, " + totalBytes + " bytes.");
                
                App.Events.onFileLoaded(files);
            },
            onFileDragOver: function(e){
                e.stopPropagation();
                e.preventDefault();
            }
        }
    },
    Window: {
        Create: function(sTitle, sType, bDocked){
            var win = os.windows.WindowsManager.Create.Window(sTitle, sType);
            
            win.Hide.toolbar();
            win.Hide.menubar();
            win.elements.content.html().style.overflow = "hidden";
            win.Set.statusbarText("");
            win.Display.window();
            win.elements.titlebar.buttons.close.html().onclick = function(e){
                App.Window.Dock(os.windows.WindowsManager.Windows.get(e.target.id));    
            }
            win.onDock = function(){};
            win.onUndock = function(){};
            
            if(bDocked){App.Window.Dock(win);}
            
            return win;
        },
        Dock: function(win){

            win.Set.position(0,0);
            win.Set.width(358);
            win.Set.height(228);
            win.Hide.menubar();
            win.Hide.titlebar();
            win.Hide.statusbar();
            if(win.theme.name == "PC"){
                win.elements.window.Class.Remove("pcWindow ");
                win.elements.window.Class.Add("pcWindow-NoShadow");
            }
            else{
                win.elements.window.Class.Remove("macWindow ");
                win.elements.window.Class.Add("macWindow-NoShadow");
            }
            
            document.body.removeChild(win.elements.window.html());
            App.HTML.Properties.window.appendChild(win.elements.window.html());
            
            var idString = win.Get.id();
            idString = idString.split(".");
            
            var opt = document.createElement("option");
            opt.value = idString[idString.length - 1];
            opt.innerHTML = win.Get.title();
            
            App.HTML.Properties.dropDown.add(opt);
            
            App.HTML.Properties.dropDown.selectedIndex = opt.index;
            if(win.onDock){win.onDock();}
            
        },
        UnDock: function(e){
            if(App.HTML.Properties.dropDown.length > 0){
                var win = win = os.windows.WindowsManager.Windows.get("jahova.window.id." + App.HTML.Properties.dropDown[App.HTML.Properties.dropDown.selectedIndex].value);
        
                win.Set.position(100,100);
                win.Set.width(358);
                win.Set.height(228);
                win.Display.titlebar();
                win.Display.statusbar();
                win.elements.window.html().style.position = "absolute";
                if(win.theme.name == "PC"){
                    win.elements.window.Class.Remove("pcWindow-NoShadow ");
                    win.elements.window.Class.Add("pcWindow");
                }
                else{
                    win.elements.window.Class.Remove("macWindow-NoShadow ");
                    win.elements.window.Class.Add("macWindow");
                }
                win.MakeActive();
                if(win.onUndock){win.onUndock();}
                
                App.HTML.Properties.window.removeChild(win.elements.window.html());
                document.body.appendChild(win.elements.window.html());
            
                App.HTML.Properties.dropDown.remove(App.HTML.Properties.dropDown[App.HTML.Properties.dropDown.selectedIndex]);
                
                if(App.HTML.Properties.dropDown.length > 0){
                    win = os.windows.WindowsManager.Windows.get("jahova.window.id." + App.HTML.Properties.dropDown[App.HTML.Properties.dropDown.selectedIndex].value);
                    win.MakeActive();
                }
                
                
            }
        }
    },
    Events: {
        onDropdown: function(win){
            
        },
        onFullscreen: function(){
            
        },
        onWindowed: function(){
            
        },
        onFileLoaded: function(files){
            
        }
    },
    Init: function(){
    
    },
    
}
//
//  Application Specific Code
//
//  Overload the following methods
//      App.Events.onDropdown: called when dropdown in properties window changes
//      App.Events.onFullScreen: called when app goes fullscreen
//      App.Events.onWindowed:   called when app goes windowed
//      App.Events.onFileLoaded: used when files have been loaded (via fileselector or dropzone)
//
//      App.Init: called upon application loading, place initialization and start up code here
//
//
App.Files = {
    CPP:{
        main: '',
        total: 0,
        paths: [],
        content: [],
        files: []
    },
    H: {
        total: 0,
        paths: [],
        content: [],
        files: []
    }
}
App.Compile = function(){
    var xhr = os.resschmgr.Create.XHRObject();
    var url =  "https://wandbox.org/api/compile.json"
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'text/event-stream');
    xhr.setRequestHeader('Cache-Control', 'no-cache');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    var code = {
        code: App.Files.CPP.main,
        compiler: "clang-head",
        options: "c++14",
        stdin: ""
    }
    code['runtime-option-raw'] = '';
    code['compiler-option-raw'] = '';

    
    code.codes = [];
    for(var i= 0 ; i < App.Files.CPP.content.length; i++){
        code.codes.push({
            file: App.Files.CPP.paths[i],
            code: App.Files.CPP.content[i]
        });
        code['compiler-option-raw'] += (App.Files.CPP.paths[i] + "\n\r"); //"myclass.cpp↵class2.cpp";
    }
    //Add file with error, to prevent execution
    code.codes.push({
        file: 'error.cpp',
        code: "int ignore_error"
    });
    code['compiler-option-raw'] += "error.cpp\n\r";
    
    for(var i= 0 ; i < App.Files.H.content.length; i++){
        code.codes.push({
            file: App.Files.H.paths[i],
            code: App.Files.H.content[i]
        })
    }


    xhr.onreadystatechange = function(){
        if ( (this.readyState == 4 && this.status == 200)) { //this.readyState == 3 ||
            
            responseText = '';
            try {
              responseText = this.responseText || '';
            } catch (e) {}
            
            

            var res = JSON.parse(responseText);
            var out = res.compiler_error.replace(/\[0;1;31m/g, "").replace(/\[0m/g, "").replace(/\[1m/g,"").replace(/\[0;1;32m/g,"").replace(/\[0;32m/g, "").replace(/\[0;1;30m/,"");
            App.error_output = out.substring(0, out.indexOf("error.cpp"));

            if(!os.debugbar.ConsolePagePinned){
                os.debugbar.AnchorConsolePage();
            }
            App.Window.Dock(App.CompileWindow);
            App.CompileWindow.elements.content.html().innerHTML = "COMPILE COMPLETE";
            os.console.Comment("\n" + App.error_output);
            os.console.Comment("COMPILE COMPLETE");
            
        }
            

    }
    App.code = code;

    xhr.send(JSON.stringify(code));
    if(os.debugbar.ConsolePagePinned){
        os.debugbar.AnchorConsolePage();   
    }
    App.CompileWindow.elements.content.html().innerHTML = "COMPILING CODE PLEASE WAIT";
    App.CompileWindow.UnDock();
    os.console.Comment("\n\nCompiling " + App.Files.CPP.total + " cpp files");

    
}
App.Init = function(){
    
    os.debugbar.Disable();
    os.console.Clear();
    //Display Demos
    App.Display.EnableButton();
    App.Events.onFullscreen = function(){os.console.Comment("Going Fullscreen")};
    App.Events.onWindowed = function(){os.console.Comment("Going Windowed")};
    
    //Window Demos
    App.CompileWindow = App.Window.Create("Compile Status", "Mac", true);
    App.CompileWindow.UnDock = function(){
        var win = App.CompileWindow;

        win.Set.position(196,548);
        win.Set.width(358);
        win.Set.height(228);
        win.Display.titlebar();
        win.Display.statusbar();
        win.elements.window.html().style.position = "absolute";
        if(win.theme.name == "PC"){
            win.elements.window.Class.Remove("pcWindow-NoShadow ");
            win.elements.window.Class.Add("pcWindow");
        }
        else{
            win.elements.window.Class.Remove("macWindow-NoShadow ");
            win.elements.window.Class.Add("macWindow");
        }
        win.MakeActive();
        if(win.onUndock){win.onUndock();}
        
        App.HTML.Properties.window.removeChild(win.elements.window.html());
        document.body.appendChild(win.elements.window.html());
    
        App.HTML.Properties.dropDown.remove(App.HTML.Properties.dropDown[App.HTML.Properties.dropDown.selectedIndex]);
        
        if(App.HTML.Properties.dropDown.length > 0){
            win = os.windows.WindowsManager.Windows.get("jahova.window.id." + App.HTML.Properties.dropDown[App.HTML.Properties.dropDown.selectedIndex].value);
            win.MakeActive();
        }
                
    }
    
    //File IO Demos
    App.FileIO.Add.Dropzone.App();
    App.FileIO.Add.FileSelector.Thumbnails("Select Files: ");
    
    App.Events.onFileLoaded = function(files){
        var extension;
        
        for(var i = 0; i < files.length; i++){
            extension = App.FileIO.Get.Extension(files[i]);
            if(extension == "CPP"){
                App.FileIO.Read.Text(files[i], function(file, data){
                    if(file.name != "main"){
                        App.Files.CPP.paths.push(file.name);
                        App.Files.CPP.content.push(data);
                    }
                    else{
                        App.Files.CPP.main = data;
                    }});
                    
                App.Files.CPP.total++;
            }
            else if(extension == "H" || extension == "HPP"){
                App.FileIO.Read.Text(files[i], function(file, data){
                    App.Files.H.paths.push(file.name);
                    App.Files.H.content.push(data);});
                App.Files.H.total++;
            }
        }

        console.log("Files Loaded");
        if(!os.debugbar.ConsolePagePinned){
            os.debugbar.Enable();
            os.debugbar.AnchorConsolePage();
        }
        
    }

    var help = "\nCompile Code\n  ";
    os.console.AddCommand("Compile", App.Compile, App.Compile, help);
    App.HTML.Main.window.innerText = "\nDrop Files Here\nThen type 'compile' in command console to left";
    
}
