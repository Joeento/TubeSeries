document.addEventListener('DOMContentLoaded', function (data) {
  chrome.tabs.query({currentWindow:true, url: 'http://www.youtube.com/watch?v=*'}, function(tabs) {
    console.log(tabs);
    for (var i=0;i<tabs.length;i++) {
        chrome.tabs.executeScript(tabs[i].id,{
          file: 'scripts/playback.js'
        },function(data) {console.log(data)});
    }
  });

});
