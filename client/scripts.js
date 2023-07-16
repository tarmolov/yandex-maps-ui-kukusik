const MAX_PINS_COUNT = 7;
let pinsCount = 1;

appendPinIcon();
const timeoutId = setInterval(() => {
    if (++pinsCount >= MAX_PINS_COUNT) {
        clearInterval(timeoutId);
    }
    appendPinIcon();
}, 1000);

function appendPinIcon() {
    const pinIconDiv = document.createElement('div');
    pinIconDiv.className = 'pin';
    document.getElementById('app').appendChild(pinIconDiv);

    return pinIconDiv;
}
