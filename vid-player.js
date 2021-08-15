//Icon
var vidPlayerStylePlayButton = 'data:image/svg+xml;utf-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-1.5 0 17.804 17.804" xml:space="preserve" fill="white"><path d="M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z"/></svg>';
var vidPlayerStylePauseButton = 'data:image/svg+xml;utf-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.607 47.607" xml:space="preserve" fill="white"><path d="M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"/><path d="M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"/></svg>';
var vidPlayerStyleMuteIcon = 'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="500" height="500" viewBox="0 0 75 75" fill="white" stroke="white" stroke-width="5"><path d="m39,14-17,15H6V48H22l17,15z" stroke-linejoin="round"/><path d="m49,26 20,24m0-24-20,24" fill="none" stroke-linecap="round"/></svg>';
var vidPlayerStyleSpeakerIcon = 'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.0"  width="500" height="500" viewBox="0 0 75 75" stroke-width="5" fill="white" stroke="white"><path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z" stroke-linejoin="round" /><path d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6" fill="none" stroke-linecap="round" /></svg>';
var vidPlayerStyleFullscreenIcon = 'data:image/svg+xml;utf-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="white" viewBox="0 0 384.97 384.97" xml:space="preserve"><path d="M384.97,12.03c0-6.713-5.317-12.03-12.03-12.03H264.847c-6.833,0-11.922,5.39-11.934,12.223c0,6.821,5.101,11.838,11.934,11.838h96.062l-0.193,96.519c0,6.833,5.197,12.03,12.03,12.03c6.833-0.012,12.03-5.197,12.03-12.03l0.193-108.369c0-0.036-0.012-0.06-0.012-0.084C384.958,12.09,384.97,12.066,384.97,12.03z"/><path d="M120.496,0H12.403c-0.036,0-0.06,0.012-0.096,0.012C12.283,0.012,12.247,0,12.223,0C5.51,0,0.192,5.317,0.192,12.03L0,120.399c0,6.833,5.39,11.934,12.223,11.934c6.821,0,11.838-5.101,11.838-11.934l0.192-96.339h96.242c6.833,0,12.03-5.197,12.03-12.03C132.514,5.197,127.317,0,120.496,0z"/><path d="M120.123,360.909H24.061v-96.242c0-6.833-5.197-12.03-12.03-12.03S0,257.833,0,264.667v108.092c0,0.036,0.012,0.06,0.012,0.084c0,0.036-0.012,0.06-0.012,0.096c0,6.713,5.317,12.03,12.03,12.03h108.092c6.833,0,11.922-5.39,11.934-12.223C132.057,365.926,126.956,360.909,120.123,360.909z"/><path d="M372.747,252.913c-6.833,0-11.85,5.101-11.838,11.934v96.062h-96.242c-6.833,0-12.03,5.197-12.03,12.03s5.197,12.03,12.03,12.03h108.092c0.036,0,0.06-0.012,0.084-0.012c0.036-0.012,0.06,0.012,0.096,0.012c6.713,0,12.03-5.317,12.03-12.03V264.847C384.97,258.014,379.58,252.913,372.747,252.913z" /></svg>';
var vidPlayerStyleExitFullscreenIcon = 'data:image/svg+xml;utf-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 385.331 385.331" xml:space="preserve" fill="white"><path d="M264.943,156.665h108.273c6.833,0,11.934-5.39,11.934-12.211c0-6.833-5.101-11.85-11.934-11.838h-96.242V36.181c0-6.833-5.197-12.03-12.03-12.03s-12.03,5.197-12.03,12.03v108.273c0,0.036,0.012,0.06,0.012,0.084c0,0.036-0.012,0.06-0.012,0.096C252.913,151.347,258.23,156.677,264.943,156.665z"/><path d="M120.291,24.247c-6.821,0-11.838,5.113-11.838,11.934v96.242H12.03c-6.833,0-12.03,5.197-12.03,12.03c0,6.833,5.197,12.03,12.03,12.03h108.273c0.036,0,0.06-0.012,0.084-0.012c0.036,0,0.06,0.012,0.096,0.012c6.713,0,12.03-5.317,12.03-12.03V36.181C132.514,29.36,127.124,24.259,120.291,24.247z"/><path d="M120.387,228.666H12.115c-6.833,0.012-11.934,5.39-11.934,12.223c0,6.833,5.101,11.85,11.934,11.838h96.242v96.423c0,6.833,5.197,12.03,12.03,12.03c6.833,0,12.03-5.197,12.03-12.03V240.877c0-0.036-0.012-0.06-0.012-0.084c0-0.036,0.012-0.06,0.012-0.096C132.418,233.983,127.1,228.666,120.387,228.666z"/><path d="M373.3,228.666H265.028c-0.036,0-0.06,0.012-0.084,0.012c-0.036,0-0.06-0.012-0.096-0.012c-6.713,0-12.03,5.317-12.03,12.03v108.273c0,6.833,5.39,11.922,12.223,11.934c6.821,0.012,11.838-5.101,11.838-11.922v-96.242H373.3c6.833,0,12.03-5.197,12.03-12.03S380.134,228.678,373.3,228.666z"/></svg>';
var vidPlayerStyleErrorIcon = 'data:image/svg+xml;utf-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 51.976 51.976" fill="white" xml:space="preserve"><path d="M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z"/></svg>';

//Style
var vidPlayerStyleUIChange = 0;
setInterval(function() {
if (!document.querySelector(".vid-player-style-ui")) {
if (!document.querySelector(".vid-player-style-ui") && vidPlayerStyleUIChange == 1) {
  console.warn("[vid-player](Style UI) Missing Style Element for VidPlayer UI. We add again :)");
}
vidPlayerStyleUIChange = 1;
var vidPlayerStyle = document.createElement("style");
document.head.insertBefore(vidPlayerStyle, document.head.firstChild);
vidPlayerStyle.classList.add("vid-player-style-ui");
vidPlayerStyle.textContent =
"vid-player{font-family:sans-serif;position:relative;display:block!important;overflow:hidden!important;background:black;user-select:none!important}" +
"vid-player:fullscreen{position:fixed!important;left:0px!important;top:0px!important;width:100%!important;height:100%!important;background:black!important;z-index:999999999999!important}" +
"vid-player>.vid-player-video{display:block!important;width:100%!important;height:100%!important}" +
"vid-player>.vid-player-progress{display:block!important;position:absolute!important;left:0px!important;bottom:0px!important;width:100%!important;height:4px!important;background-color:rgb(84,84,84);opacity:0.75!important;transition:height 250ms!important}" +
"vid-player>.vid-player-progress.active{height:15px!important}" +
"vid-player>.vid-player-progress>.vid-player-bar{width:0%;height:100%!important;display:block!important;position:absolute!important;left:0px!important;top:0px!important;background-color:#DDD;transition:width 250ms!important}" +
"vid-player>.vid-player-progress>.vid-player-bar.buffer{background-color:#999}" +
"vid-player>.vid-player-center-button{display:flex!important;position:absolute!important;left:50%!important;top:50%!important;width:60px;height:60px;transform:translate(-50%,-50%)!important;background-color:rgba(0,0,0,0.5);border-radius:100%;background-repeat:no-repeat!important;background-size:50%!important;background-position:50% 50%!important;transition:opacity 250ms!important}" +
"vid-player>.vid-player-center-button.play{background-image:url('" + vidPlayerStylePlayButton + "')}" +
"vid-player>.vid-player-center-button.pause{background-image:url('" + vidPlayerStylePauseButton + "')}" +
"vid-player>*.hide{opacity:0}" + 
"vid-player>.vid-player-speaker-button{position:absolute!important;right:50px!important;bottom:25px!important;width:30px!important;height:30px!important;background-position:50% 50%!important;background-repeat:no-repeat!important;background-size:50%!important;display:block!important;transition:opacity 250ms!important;background-image:url('" + vidPlayerStyleSpeakerIcon + "');border-radius:100%;background-color:rgba(0,0,0,0.25)}" +
"vid-player>.vid-player-speaker-button.mute{background-image:url('" + vidPlayerStyleMuteIcon + "')}" +
"vid-player>.vid-player-fullscreen-button{position:absolute!important;right:10px!important;bottom:25px!important;width:30px!important;height:30px!important;background-position:50% 50%!important;background-repeat:no-repeat!important;background-size:50%!important;display:block!important;transition:opacity 250ms!important;background-image:url('" + vidPlayerStyleFullscreenIcon + "');border-radius:100%;background-color:rgba(0,0,0,0.25)}" +
"vid-player>.vid-player-fullscreen-button.exit{background-image:url('" + vidPlayerStyleExitFullscreenIcon + "')}" +
"vid-player>.vid-player-video-error{opacity:0!important;visibility:hidden!important;display:flex!important;position:absolute!important;left:50%!important;top:50%!important;width:60px;height:60px;transform:translate(-50%,-50%)!important;background-color:rgba(0,0,0,0.5);border-radius:100%;background-repeat:no-repeat!important;background-size:50%!important;background-position:50% 50%!important;transition:opacity 250ms, visibility 250ms!important;background-image:url('" + vidPlayerStyleErrorIcon + "')}" +
"vid-player>.vid-player-video-error.show{opacity:1!important;visibility:visible!important}" +
"vid-player>.vid-player-progress>.vid-player-bar.no-transition{transition:0ms!important}" +
"vid-player>.vid-player-current-duration-text {position:absolute!important;left:10px!important;bottom:25px!important;width:auto!important;height:30px!important;display:flex!important;align-items:center!important;background-color:rgba(0,0,0,0.25);border-radius:25px;padding:0px 10px!important;color:white!important;transition:opacity 250ms!important;font-size:15px!important;min-width:10px!important}" +
"" +
"vid-player>.vid-player-center-button.desktop{background-color:rgba(0,0,0,0.25);transform:initial!important;left:10px!important;top:calc(100% - 30px - 25px)!important;width:30px!important;height:30px!important}" +
"vid-player>.vid-player-current-duration-text.desktop{left:50px!important}" +
"vid-player>.vid-player-video-error.desktop-y{background-color:rgba(0,0,0,0.25);transform:initial!important;left:10px!important;top:calc(100% - 30px - 25px)!important;width:30px!important;height:30px!important}" +
"vid-player>.vid-player-speaker-button.small-view{right:10px!important;bottom:50px!important}" +
"vid-player>.vid-player-speaker-button.small-view-y{bottom:10px!important;right:50px!important}" +
"vid-player>.vid-player-center-button.small-view{transform:initial!important;left:10px!important;top:calc(100% - 30px - 10px)!important;background-color:rgba(0,0,0,0.25);width:30px!important;height:30px!important}" +
"vid-player>.vid-player-progress.small-view{visibility:hidden!important}" +
"vid-player>.vid-player-current-duration-text.small-view{visibility:hidden!important}" +
"vid-player>.vid-player-fullscreen-button.small-view{bottom:10px!important}" +
"vid-player>.vid-player-video-error.small-view{transform:initial!important;left:10px!important;top:calc(100% - 30px - 10px)!important;background-color:rgba(0,0,0,0.25);width:30px!important;height:30px!important}" +
"vid-player>.vid-player-title-text{transition:opacity 250ms!important;position:absolute!important;left:15px!important;top:15px!important;overflow:hidden!important;text-overflow:ellipsis!important;color:white!important;text-shadow:0px 0px 5px rgba(0,0,0,0.75)!important;width:calc(100% - 30px - 30px)!important;height:auto!important;font-size:14px!important;white-space:nowrap!important}";
}
}, 100);

//Init
setInterval(function() {
  var vidPlayerElement = document.querySelectorAll("vid-player");
  vidPlayerElement.forEach(function(e) {
    if (!e.hasAttribute("main-vid-player")) {
      e.setAttribute("main-vid-player", "");
      
      vidPlayerTimeout(function() {
      if (e.querySelector("video[src]")) {
        var findVideo = e.querySelector("video[src]");
        e.setAttribute("src", findVideo.getAttribute("src"));
        if (findVideo.hasAttribute("poster")) {
          e.setAttribute("poster", findVideo.getAttribute("poster"));
        }
      }
      if (e.querySelector("audio[src]") && !e.querySelector("video[src]")) {
        var findAudio = e.querySelector("audio[src]");
        e.setAttribute("src", findAudio.getAttribute("src"));
      }
      if (e.querySelector("source[src]") && !e.querySelector("video[src]") && !e.querySelector("audio[src]")) {
        var sourceElem = e.querySelector("source");
        e.setAttribute("src", sourceElem.getAttribute("src"));
      }
      
      e.innerHTML = "";
      
      var hideButton = 0;
      var disButton = 1;
      var muteClicked = (e.hasAttribute("autoplay") && !e.hasAttribute("muted")) ? 0 : 1;
      var errored = 0;
      var progressPressed = 0;
      var loadedData = 0;
      var isSound = true;
      
      var video = document.createElement("video");
      e.appendChild(video);
      video.classList.add("vid-player-video");
      video.src = e.getAttribute("src") || "";
      video.autoplay = e.hasAttribute("autoplay");
      video.controls = false;
      video.muted = e.hasAttribute("autoplay") || e.hasAttribute("muted");
      video.loop = e.hasAttribute("loop");
      video.volume = e.getAttribute("volume") || 1;
      video.currentTime = e.getAttribute("current-time") || 0;
      video.playbackRate = e.getAttribute("speed") || 1;
      video.preservesPitch = !e.hasAttribute("pitched");
      video.poster = e.getAttribute("poster") || "";
      
      Object.defineProperty(video, 'playing', {
        get: function(){
          return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
        }
      })
      
      var progress = document.createElement("div");
      e.appendChild(progress);
      progress.classList.add("vid-player-progress");
      var buffer = document.createElement("div");
      progress.appendChild(buffer);
      buffer.classList.add("vid-player-bar");
      buffer.classList.add("buffer");
      
      var curr = document.createElement("div");
      progress.appendChild(curr);
      curr.classList.add("vid-player-bar");
      
      var pPB = document.createElement("div");
      e.appendChild(pPB);
      pPB.classList.add("vid-player-center-button");
      pPB.classList.add("play");
      
      var mB = document.createElement("div");
      e.appendChild(mB);
      mB.classList.add("vid-player-speaker-button");
      
      var fsB = document.createElement("div");
      e.appendChild(fsB);
      fsB.classList.add("vid-player-fullscreen-button");
      
      var error = document.createElement("div");
      e.appendChild(error);
      error.classList.add("vid-player-video-error");
      
      var currentText = document.createElement("div");
      e.appendChild(currentText);
      currentText.classList.add("vid-player-current-duration-text");
      currentText.textContent = "00:00 / 00:00";
        
      var titleText = document.createElement("div");
      e.appendChild(titleText);
      titleText.classList.add("vid-player-title-text");
      titleText.textContent = (e.getAttribute("title") || video.src).trim();
      
      video.addEventListener("error", function() {
        error.classList.add("show");
        errored = 1;
      });
      vidPlayerListeners(video, "play pause timeupdate", function() {
        loadedData = 1;
        isSound = ((video.webkitAudioDecodedByteCount > 0 && typeof video.webkitAudioDecodedByteCount != "undefined") || (video.mozHasAudio && typeof video.mozHasAudio != "undefined")) ? true : false;
      });
        
      video.addEventListener("dblclick", function(event) {
        var isRight = (event.clientX - video.getBoundingClientRect().left) > video.clientWidth / 2 ? true : false;
        
        if (isRight) {
          video.currentTime += e.getAttribute("jump-sec") || 5;
        }
        else {
          video.currentTime -= e.getAttribute("jump-sec") || 5;
        }
      });
      
      fsB.addEventListener("click", function() {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        }
        else {
          e.requestFullscreen();
        }
      });
      document.addEventListener("fullscreenchange", function() {
        if (document.fullscreenElement) {
          fsB.classList.add("exit");
        }
        else {
          fsB.classList.remove("exit");
        }
      });
      
      pPB.addEventListener("click", function() {
        if (!video.paused) {
          video.pause();
        }
        else {
          video.play();
        }
      });
      
      mB.addEventListener("click", function() {
        if (isSound) {
          if (video.muted) {
            video.muted = false;
          }
          else {
            video.muted = true;
          }
        }
      });
      
      vidPlayerInterval(function() {
        if (hideButton == 16 && !e.hasAttribute("always-show-controls")) {
          pPB.classList.add("hide");
          progress.classList.remove("active");
          mB.classList.add("hide");
          fsB.classList.add("hide");
          currentText.classList.add("hide");
          titleText.classList.add("hide");
        }
        else {
          pPB.classList.remove("hide");
          progress.classList.add("active");
          mB.classList.remove("hide");
          fsB.classList.remove("hide");
          currentText.classList.remove("hide");
          titleText.classList.remove("hide");
        }
        
        if (errored == 1) {
          pPB.classList.add("hide");
          error.classList.add("show");
          hideButton = 0;
          muteClicked = 1;
        }
        
        if (video.muted || video.volume == 0 || !isSound && loadedData == 1) {
          mB.classList.add("mute");
        }
        else {
          mB.classList.remove("mute");
        }
        
        if (muteClicked == 0 && video.autoplay) {
          hideButton = 16;
        }
        
        if (!(e.querySelector(".vid-player-video").getAttribute("class") == "vid-player-video")) {
          console.warn("[vid-player](Video Element) Detected changes attribute 'class': " + e.querySelector(".vid-player-video").getAttribute("class").replace("vid-player-video", "") + ". We restarting your vid-player.");
          new VidPlayer(e).restartInit();
        }
      }, 100);
      
      vidPlayerListeners(video, "canplay load error seeking timeupdate", function() {
        currentText.textContent = vidPlayerTimeText(video.currentTime) + " / " + vidPlayerTimeText(video.duration);
      })
      
      vidPlayerListeners(progress, "touchstart mousedown", function(event) {
        if (muteClicked == 1) {
          progressPressed = 1;
          curr.classList.add("no-transition");
          video.currentTime = (((event.targetTouches[0].clientX || event.clientY) - progress.getBoundingClientRect().left) / progress.clientWidth) * video.duration;
          curr.style.width = (video.currentTime / video.duration) * 100 + "%";
          event.preventDefault();
          }
      });
      vidPlayerListeners(progress, "touchmove mousemove", function(event) {
        if (progressPressed == 1) {
          video.currentTime = (((event.targetTouches[0].clientX || event.clientY) - progress.getBoundingClientRect().left) / progress.clientWidth) * video.duration;
          curr.style.width = (video.currentTime / video.duration) * 100 + "%";
        }
      });
      vidPlayerListeners(progress, "touchend mouseup mouseleave", function() {
        if (muteClicked == 1 && progressPressed == 1) {
          progressPressed = 0;
          curr.classList.remove("no-transition");
        }
      });
      
      vidPlayerInterval(function() {
        if (disButton == 1 && video.playing) {
          hideButton = Math.min(16, hideButton + 1);
        }
        if (errored != 1) {
          curr.style.width = (video.currentTime / video.duration) * 100 + "%";
          buffer.style.width = ((video.buffered.length > 0 ? video.buffered.end(video.buffered.length - 1) : 0) / video.duration) * 100 + "%";
        }
        else {
          curr.style.width = "";
          buffer.style.width = "";
        }
      }, 250);
      
      e.addEventListener("click", function() {
        if (video.muted && muteClicked == 0) {
          if (!e.hasAttribute("muted")) {
            video.muted = false;
            muteClicked = 1;
          }
        }
      });
      vidPlayerListeners(e, "touchstart mousedown", function() { if (!(muteClicked == 0 && video.autoplay) && errored == 0) { hideButton = 0; disButton = 0 } });
      vidPlayerListeners(e, "touchend mouseup mouseleave", function() { if (disButton == 0) {hideButton = 0; disButton = 1} });
      vidPlayerListeners(e, "touchmove mousemove", function() { if (disButton == 0) {hideButton = 0} });
      
      video.addEventListener("play", function() {
        pPB.classList.remove("play");
        pPB.classList.add("pause");
        if (muteClicked == 1) {
          hideButton = 0;
        }
        errored = 0;
        loadedData = 1;
        error.classList.remove("show");
      });
      video.addEventListener("pause", function() {
        pPB.classList.remove("pause");
        pPB.classList.add("play");
        if (muteClicked == 1) {
          hideButton = 0;
        }
      });
      
      e.style.width = e.getAttribute("width") || "";
      e.style.height = e.getAttribute("height") || "";
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.type == "attributes") {
            if (mutation.attributeName == "width") {
              e.style.width = e.getAttribute("width") || "";
            }
            if (mutation.attributeName == "height") {
              e.style.height = e.getAttribute("height") || "";
            }
            
            if (mutation.attributeName == "src") {
              video.src = e.getAttribute("src") || "";
              titleText.textContent = (e.getAttribute("title") || video.src).trim();
              error.classList.remove("show");
              errored = 0;
              loadedData = 0;
            }
            if (mutation.attributeName == "volume") {
              video.volume = e.getAttribute("volume") || 1;
            }
            if (mutation.attributeName == "current-time") {
              video.currentTime = e.getAttribute("current-time") || 0;
            }
            if (mutation.attributeName == "speed") {
              video.playbackRate = e.getAttribute("speed") || 1;
            }
            if (mutation.attributeName == "muted") {
              video.muted = e.getAttribute("muted") || false;
            }
            if (mutation.attributeName == "loop") {
              video.loop = e.getAttribute("loop") || false;
            }
            if (mutation.attributeName == "autoplay") {
              video.autoplay = e.getAttribute("autoplay") || false;
            }
            if (mutation.attributeName == "pitched") {
              video.preservesPitch = e.getAttribute("pitched") || true;
            }
            if (mutation.attributeName == "poster") {
              video.poster = e.getAttribute("poster") || "";
            }
            if (mutation.attributeName == "title") {
              titleText.textContent = (e.getAttribute("title") || video.src).trim();
            }
          }
        });
      });
      observer.observe(e, {attributes: true});
        
      var resize = new ResizeObserver(function(entries) {
        for (var entry of entries) {
          var widthContent = (entry.contentBoxSize.width || entry.contentRect.width);
          var heightContent = (entry.contentBoxSize.height || entry.contentRect.height);
          if (widthContent > 640 || (heightContent < 150 && widthContent >= 240)) {
            pPB.classList.add("desktop");
            currentText.classList.add("desktop");
            error.classList.add("desktop-y");
          }
          else {
            pPB.classList.remove("desktop");
            currentText.classList.remove("desktop");
            error.classList.remove("desktop-y");
          }
          
          if (widthContent < 240) {
            mB.classList.add("small-view");
            pPB.classList.add("small-view");
            progress.classList.add("small-view");
            fsB.classList.add("small-view");
            currentText.classList.add("small-view");
            error.classList.add("small-view");
            
            if (heightContent < 80) {
              mB.classList.add("small-view-y");
            }
            else {
              mB.classList.remove("small-view-y");
            }
          }
          else {
            mB.classList.remove("small-view");
            mB.classList.remove("small-view-y");
            pPB.classList.remove("small-view");
            progress.classList.remove("small-view");
            fsB.classList.remove("small-view");
            currentText.classList.remove("small-view");
            error.classList.remove("small-view");
          }
        }
      });
      resize.observe(e);
      
      vidPlayerFunction(e.getAttribute("oninit") || "");
        
      var eventAttributes = ["canplay", "canplaythrough", "complete", "durationchange", "emptied", "ended", "error", "load", "loadeddata", "loadedmetadata", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"];
      var attrLength;
      for (attrLength = 0; attrLength < eventAttributes.length; attrLength++) {
        vidPlayerAttrEvent(video, e, eventAttributes[attrLength]);
      }
      
      }, Math.max(0, Math.min(60000, e.getAttribute("delay"))) || 0);
    }
  });
}, 100);

//Function for init
function vidPlayerInterval(func, interval) {
  var val = setInterval(func, interval);
  return val;
}
function vidPlayerRemoveInterval(intervalTarget) {
  clearInterval(intervalTarget);
}
function vidPlayerTimeout(func, timeout) {
  setTimeout(func, timeout);
}
function vidPlayerRemoveTimeout(timeoutTarget) {
  clearTimeout(timeoutTarget);
}
function vidPlayerFunction(func) {
  newFunc = new Function(func);
  newFunc();
}
function vidPlayerAttrEvent(v, m, a) {
  v.addEventListener(a, function() {
    vidPlayerFunction(m.getAttribute("on" + a));
  });
}
function vidPlayerTimeText(time) {
  if (isNaN(time)) {time = 0}
  var s = Math.floor(time)%60;
  var m = Math.floor(time / 60)%60;
  var h = Math.floor(time / (60 * 60));
  var t = "";
  
  if (h != 0) {
    t = TwoDigit(h) + ":" + TwoDigit(m) + ":" + TwoDigit(s);
  }
  else {
    t = TwoDigit(m) + ":" + TwoDigit(s);
  }
  
  function TwoDigit(val) {
    if (val <= 9) {val = "0" + val}
    return val;
  }
  return t;
}
function vidPlayerListeners(elem, listener, func) {
  var i;
  for (i = 0; i <= listener.split(" ").length - 1; i++) {
    elem.addEventListener(listener.split(" ")[i], func);
  }
}

//Control a video
function VidPlayer(el) {
  var elem = typeof el == "string" ? document.querySelector(el) : el;
  var t = this;
  if (elem.tagName == "VID-PLAYER") {
    t.video = elem.querySelector(".vid-player-video");
    oDP(t, "src",
      function() {return t.video.src},
      function(val) {elem.setAttribute("src", val)}
    );
    oDP(t, "poster",
      function() {return t.video.poster},
      function(val) {elem.setAttribute("poster", val)}
    );
    oDP(t, "autoplay",
      function() {return t.video.autoplay},
      function(val) {}
    );
    oDP(t, "loop",
      function() {return t.video.loop},
      function(val) {}
    );
    oDP(t, "muted",
      function() {return t.video.muted},
      function(val) {}
    );
    oDP(t, "currentTime",
      function() {return t.video.currentTime},
      function(val) {elem.setAttribute("current-time", val)}
    );
    oDP(t, "speed",
      function() {return t.video.playbackRate},
      function(val) {elem.setAttribute("speed", val)}
    );
    oDP(t, "volume",
      function() {return t.video.volume},
      function(val) {elem.setAttribute("volume", val)}
    );
    oDP(t, "pitched",
      function() {return t.video.preservePitch},
      function(val) {}
    );
    oDP(t, "jumpSec",
      function() {return t.video.preservePitch},
      function(val) {elem.setAttribute("jump-sec", val)}
    );
    oDP(t, "duration",
      function() {return t.video.duration},
      function(val) {}
    );
    oDP(t, "title",
      function() {return elem.querySelector(".vid-player-title-text").textContent},
      function(val) {elem.setAttribute("title", val.trim())}
    );
    
    t.fullscreen = function() {
      elem.requestFullscreen();
    }
    t.exitFullscreen = function() {
      document.exitFullscreen();
    }
    t.play = function() {
      t.video.play();
    }
    t.pause = function() {
      t.video.pause();
    }
    t.pitched = function(boolean) {
      if (boolean == true) {
        elem.setAttribute("pitched", "");
      }
      else {
        elem.removeAttribute("pitched");
      }
    }
    t.autoplay = function(boolean) {
      if (boolean == true) {
        elem.setAttribute("autoplay", "");
      }
      else {
        elem.removeAttribute("autoplay");
      }
    }
    t.loop = function(boolean) {
      if (boolean == true) {
        elem.setAttribute("loop", "");
      }
      else {
        elem.removeAttribute("loop");
      }
    }
    t.muted = function(boolean) {
      if (boolean == true) {
        elem.setAttribute("muted", "");
      }
      else {
        elem.removeAttribute("muted");
      }
    }
    
    t.restartInit = function() {
      elem.innerHTML = "";
      elem.setAttribute("delay", "0");
      elem.removeAttribute("main-vid-player");
    }
    t.alwaysShowControls = function(boolean) {
      if (boolean == true) {
        elem.setAttribute("always-show-controls", "");
      }
      else {
        elem.removeAttribute("always-show-controls");
      }
    }
  }
  else {
    console.error("[vid-player] Element not supported: " + elem.tagName);
    throw Error("Element not supported: " + elem.tagName);
    return;
  }
  
  function oDP(e, n, g, s) {
    Object.defineProperty(e, n, {
      get: g,
      set: s,
      enumerable: true,
      configurable: true
    });
  }
}

function VidPlayerInitAll() {
  setInterval(function() {
  var vid = document.querySelectorAll("*:not(vid-player > .vid-player-video)");
  vid.forEach(function(e) {
    if (e.tagName == "VIDEO" || e.tagName == "AUDIO") {
    if (!e.hasAttribute("main-vid-player") && !e.querySelector(".vid-player-video")) {
      var k = {
        autoplay: !e.paused,
        src: e.getAttribute("src") || (e.querySelector("source[src]") ? e.querySelector("source").getAttribute("src") : ""),
        poster: e.getAttribute("poster") || "",
        width: e.getAttribute("width") || (e.clientWidth + "px"),
        height: e.getAttribute("height") || (e.clientHeight + "px"),
        loop: e.loop,
        muted: e.muted,
        speed: e.playbackRate || 1,
        volume: e.volume || 1,
        currentTime: e.currentTime || 0,
        delay: e.getAttribute("delay") || 0
      }
      var s = document.createElement("vid-player");
      e.parentNode.replaceChild(s, e);
      s.setAttribute("src", k.src);
      s.setAttribute("poster", k.poster);
      s.setAttribute("width", k.width);
      s.setAttribute("height", k.height);
      s.setAttribute("current-time", k.currentTime);
      s.setAttribute("speed", k.speed);
      s.setAttribute("volume", k.volume);
      s.setAttribute("delay", k.delay);
      if (k.autoplay) {
        s.setAttribute("autoplay", "");
      }
      if (k.loop) {
        s.setAttribute("loop", "");
      }
      if (k.muted) {
        s.setAttribute("muted", "");
      }
    }
    }
  });
  }, 250);
}