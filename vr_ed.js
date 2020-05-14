</li>
<li>
If there is no active VR display to render to, then we enumerate and set up VR content to be displayed and provide a button on the page for users to enter VR mode.

```javascript
// Detect a VR display is available and accessible (e.g., permissions) on the user’s system.
var vrButton = document.querySelector('button#vr-button');
vrButton.disabled = true;

navigator.vr.getAvailability().then(function (isAvailable) {
  vrButton.disabled = !isAvailable;
});

navigator.vr.addEventListener('availabilitychange', function (event) {
  vrButton.disabled = !e.value;
});

// Present content to the first available VR display.
navigator.vr.requestDisplays().then(function (displays) {
  if (!displays.length || !displays[0].isPresenting) {
    return;
  }
  return displays[0].requestPresent([
    {source: canvas}
  ]).then(
    enterVR(display)
  );
});