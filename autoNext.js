chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("YAAY");
    if (request.action =="next"){
        console.log("YAAYx2")
        elements = Array.from(document.getElementsByClassName('actions')[0].children);
        next_button = elements.filter(a => a.innerText == 'NEXT')[0]
        next_button.click();
    }
});