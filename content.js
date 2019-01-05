chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var vplayer = document.getElementsByTagName("video")
    if (vplayer.length == 0 ){
        return false;
    }

    vplayer[0].requestPictureInPicture();
    return true;
});

var vplayer = document.getElementsByTagName("video")[0]