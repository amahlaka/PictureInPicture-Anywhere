
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id,{action:"pip"});
});


chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    console.log("Received %o from %o, frame", msg, sender.tab, sender.frameId);
    sendResponse("%o !",);
    if(msg.message=="next"){
      console.log(chrome.tabs.getCurrent)
      console.log(chrome.tabs)
      chrome.tabs.sendMessage(sender.tab.id,{action:"next"});
    }
});

