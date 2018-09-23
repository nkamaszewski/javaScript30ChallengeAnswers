let updateView = (e) => {
    const event = e.target;
    const prefix = event.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${event.name}`, event.value + prefix);
}

const controls = document.querySelectorAll('div.controls input');

controls.forEach(control => {
    control.addEventListener('change', updateView);
    control.addEventListener('mousemove', updateView);
})