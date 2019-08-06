// original from: http://mashe.hawksey.info/2014/07/google-sheets-as-a-database-insert-with-apps-script-using-postget-methods-with-ajax-example/
// original gist: https://gist.github.com/willpatera/ee41ae374d3c9839c2d6 

function doGet(e){
  return handleResponse(e);
}

//  Enter sheet name where data is to be written below
        var SHEET_NAME = "Raw Data";

var SCRIPT_PROP = PropertiesService.getScriptProperties(); // new property service

function handleResponse(e) {
  // shortly after my original solution Google announced the LockService[1]
  // this prevents concurrent access overwritting data
  // [1] http://googleappsdeveloper.blogspot.co.uk/2011/10/concurrency-and-google-apps-script.html
  // we want a public lock, one that locks for all invocations
  var lock = LockService.getPublicLock();
  lock.waitLock(30000);  // wait 30 seconds before conceding defeat.
  
  try {
    // next set where we write the data - you could write to multiple/alternate destinations
    var doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));
    var sheet = doc.getSheetByName(SHEET_NAME);

    // we'll assume header is in row 1 but you can override with header_row in GET/POST data
    var headRow = e.parameter.header_row || 1;
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow()+1; // get next row
    var row = []; 
    // loop through the header columns
    //for (i in headers){
    //  if (headers[i] == "Timestamp"){ // special case if you include a 'Timestamp' column
    //    row.push(new Date());
    //  } else { // else use header name to get data
    //    row.push(e.parameter[headers[i]]);
    //  }
    
    row.push(decodeURIComponent(e.parameter.time));
    row.push(decodeURIComponent(e.parameter.channel));
    row.push(decodeURIComponent(e.parameter.username));
    row.push(decodeURIComponent(e.parameter.level));
    row.push(decodeURIComponent(e.parameter.sparks));
    row.push(decodeURIComponent(e.parameter.experience));
    row.push(decodeURIComponent(e.parameter.accountCreation));
    row.push(decodeURIComponent(e.parameter.suspended));
    row.push(decodeURIComponent(e.parameter.verified));
    row.push(decodeURIComponent(e.parameter.audience));
    row.push(decodeURIComponent(e.parameter.game));
    row.push(decodeURIComponent(e.parameter.message));
    //}
    // more efficient to set values as [][] array than individually
    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
    // return json success results
    return ContentService
          .createTextOutput(JSON.stringify({"result":"success", "row": nextRow}))
          .setMimeType(ContentService.MimeType.JSON);
  } catch(e){
    // if error return this
    return ContentService
          .createTextOutput(JSON.stringify({"result":"error", "error": e}))
          .setMimeType(ContentService.MimeType.JSON);
  } finally { //release lock
    lock.releaseLock();
  }
}

function setup() {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    SCRIPT_PROP.setProperty("key", doc.getId());
}