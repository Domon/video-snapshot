var snapshot = function(e) {
  if (!(e.metaKey && e.altKey && e.code == 'KeyS')) return;

  var video = document.querySelector('video.html5-main-video');

  var canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

  var overlay = document.createElement('div');
  overlay.style.cssText = 'display: flex; justify-content: center; align-item: center; position: fixed; width: 100%; height: 100%; top:0; left: 0; right: 0, bottom: 0; background-color: rgba(0, 0, 0, 0.75);';
  overlay.onclick = function() {
    overlay.remove();
  };

  var img = document.createElement('img');
  img.style.cssText = 'margin: auto; width: 75%;';
  img.src = canvas.toDataURL('image/webp');
  img.alt = document.title + ' - ' + video.currentTime;

  overlay.appendChild(img);
  document.body.appendChild(overlay);
};

document.addEventListener('keydown', snapshot);
