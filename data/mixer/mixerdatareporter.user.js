// ==UserScript==
// @name         Mixer Abuse Reporter
// @namespace    http://humingamelab.com/
// @version      0.4
// @description  Abuse reporting study
// @author       HuMIn Game Lab
// @downloadURL https://humingamelab.com/data/mixer/mixerdatareporter.user.js
// @updateURL https://humingamelab.com/data/mixer/mixerdatareporter.user.js

// @match        https://mixer.com/*
// ==/UserScript==

(function() {
    'use strict';
console.log("Mixer Abuse Trakcing Script injected");

//Google Sheets
//https://stackoverflow.com/questions/19887737/pushing-data-to-google-spreadsheet-through-javascript-running-in-browser
//https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175

//Development Sheet API
//https://script.google.com/macros/s/AKfycbyx_WnOGyI8xyDijaohOXwYMH0qhA7u_p06IGBVUuzbTY6cDwUZ/exec

//Production Sheet API
//https://script.google.com/macros/s/AKfycbw4hVv-b5U9-32GLgvlUZNOB3_SNst1MJ_TPN9L4TOXnWyaTs2W/exec

function beep() {
    let snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
    snd.play();
}
document.addEventListener('click', function (e) {
    if (e.target.nodeName == "SPAN" && e.target.innerText == "Report Abuse") {

        //1.  Get Chat message and user being reporeted
        let abuseElementWrapper = e.path[3];
        let abuseElementSubject = abuseElementWrapper.children[0]
        let abuseElementMessageWrapper = abuseElementSubject.children[0];
        let abuseElementUser = abuseElementMessageWrapper.children[1].childNodes[0].childNodes[0].data;
        let abuseElementMessage = abuseElementMessageWrapper.children[1].children[1].outerText;

        let gameName = (document.getElementsByClassName('game-name'))[0].children[0].childNodes[0].data;
        let audience = (document.getElementsByClassName('role-text'))[0].innerText;

        //2.  Grab user public profile information
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://mixer.com/api/v1/channels/' + abuseElementUser);
        xhr.send();
        xhr.onload = function() {
            if (xhr.status != 200) { // analyze HTTP status of the response
                alert(`Error Getting User Info From Mixer`); // e.g. 404: Not Found
            } else { // show the result
                let data = JSON.parse(xhr.response);
                let user = data.user;

                //3.  Build Report Object
                var reportObject ={
                    username: user.username,
                    accountCreation: user.createdAt,
                    experience: user.experience,
                    level: user.level,
                    sparks: user.sparks,
                    verified: user.verified,
                    message: abuseElementMessage,
                    suspended: data.suspended,
                    audience: audience,
                    game: gameName,
                    channel: window.location.pathname.substr(1),
                    time: (new Date(Date.now())).toISOString()
                }

                //console.log(reportObject);

                //4.  Submit Report to Study
                let googleXHR = new XMLHttpRequest();
                //Development Sheet url
                //let url = 'https://script.google.com/macros/s/AKfycbyx_WnOGyI8xyDijaohOXwYMH0qhA7u_p06IGBVUuzbTY6cDwUZ/exec?' +
                
                //Production Sheet url
                let url = 'https://script.google.com/macros/s/AKfycbw4hVv-b5U9-32GLgvlUZNOB3_SNst1MJ_TPN9L4TOXnWyaTs2W/exec?' +
                'username=' + encodeURI(reportObject.username) + '&' +
                'accountCreation=' + encodeURI(reportObject.accountCreation) + '&' +
                'experience=' + encodeURI(reportObject.experience) + '&' +
                'level=' + encodeURI(reportObject.level) + '&' +
                'sparks=' + encodeURI(reportObject.sparks) + '&' +
                'verified=' + encodeURI(reportObject.verified) + '&' +
                'message=' + encodeURI(reportObject.message) + '&' +
                'suspended=' + encodeURI(reportObject.suspended) + '&' +
                'channel=' + encodeURI(reportObject.channel) + '&' +
                'game=' + encodeURI(reportObject.game) + '&' +
                'audience=' + encodeURI(reportObject.audience) + '&' +
                'time=' + encodeURI(reportObject.time);

                googleXHR.open('GET', url);
                googleXHR.send();
                googleXHR.onload = function() {
                    if (googleXHR.status != 200) { // analyze HTTP status of the response
                        alert(`Error Getting User Info From Mixer`); // e.g. 404: Not Found
                    } else { // show the result
                        let data = JSON.parse(googleXHR.response);
                        console.log(googleXHR.response);
                        //5.  Acknowledge to User Report has been submitted
                        beep();
                        console.log('Recorded Following Abuse Report');
                        console.log(reportObject);
                    }
                };

                googleXHR.onerror = function() {
                    alert("Request failed");
                };

            }
        };

        xhr.onerror = function() {
            alert("Request failed");
        };
    }
}, false);

})();