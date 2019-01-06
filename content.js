chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request.action)
    if (request.action =="pip"){
        var vplayer = document.getElementsByTagName("video")
        vplayer[0].requestPictureInPicture();
}

});
window.onload = getPlayer();
function getPlayer(){
    var vplayer = document.getElementsByTagName("video")
    vplayer[0].autoplay = true;
    vplayer[0].addEventListener('ended',myHandler,false);
    function myHandler(e) {
        chrome.runtime.sendMessage({message: "next",action:"next"}, function(response) {
            console.log(response)
        });
    }

}
