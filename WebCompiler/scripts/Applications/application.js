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
        compiler: 'clang-8.0.0',
        //compiler: "clang-head",
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
            beep();
            
        }
            

    }
    App.code = code;

    xhr.send(JSON.stringify(code));
    if(os.debugbar.ConsolePagePinned){
        os.debugbar.AnchorConsolePage();   
    }
    beep();
    App.CompileWindow.elements.content.html().innerHTML = "COMPILING CODE PLEASE WAIT";
    App.CompileWindow.UnDock();
    os.console.Comment("\n\nCompiling " + App.Files.CPP.total + " cpp files");
    os.console.Comment("clang++ -std=c++14 " + code['compiler-option-raw'].replace('error.cpp', '').replace(/\n\r/g, ' '))

    
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

    var help = "Compile Loaded Files\nExample >> compile";
    os.console.AddCommand("Compile", App.Compile, App.Compile, help);
    App.HTML.Main.window.innerHTML = '<div style="padding: 20px"><p><span style="font-size: 18pt;"><strong>Web Compiler</strong>:</span> <a href="https://humingamelab.com/WebCompiler/">https://humingamelab.com/WebCompiler/</a><br/></p> ' +
    '<p>To use this compiler the <i>main</i> function must be located in file called <i>main.cpp</i>.&nbsp; It will only accept .cpp and .h/.hpp files</p> ' +
    ' <p><br/>Instructions: ' +
    '<ol> ' +
    '<li>Drag and Drop (or use folder explorer dialogue) all of the .cpp and .h files</li> ' +
    '<li>Once all files loaded, type <i>compile</i> in the console</li> ' +
    '<li>Once compilation has completed the console will reappear and display any compile errors.</li> ' +
    '</ol></p></div>';
    //" = "\nDrop Files Here\nThen type 'compile' in command console to left";
    
}

function beep() {
    let snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
    snd.play();
}