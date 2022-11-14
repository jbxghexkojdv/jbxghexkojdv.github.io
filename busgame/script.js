navigator.serviceWorker.register('sw.js');

function notify(challenge) {
  Notification.requestPermission((result) => {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification(challenge.name, {
          body: challenge.desc,
          icon: '../images/touch/chrome-touch-icon-192x192.png',
          vibrate: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584],
          tag: 'vibration-sample'
        });
      });
    }
  });
}

notify(generateChallenge());
