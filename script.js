const hold = document.getElementById('spacing'); // spacing slider
const hold1 = document.getElementById('blur');   // blur slider
const hold2 = document.getElementById('color');  // color picker

hold.addEventListener('input', function () {
    document.documentElement.style.setProperty('--spacing', `${hold.value}px`);
});

hold1.addEventListener('input', function () {
    document.documentElement.style.setProperty('--blur', `${hold1.value}px`);
});

hold2.addEventListener('input', function () {
    document.documentElement.style.setProperty('--color', `${hold2.value}`);
});
