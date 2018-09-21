setInterval(() => {
    const date = new Date(),
        secondDegree = ((date.getSeconds() / 60) * 360) + 90,
        minDegree = ((date.getMinutes() / 60) * 360) + 90,
        hourDegree = ((date.getHours() / 12) * 360) + 90;
    document.querySelector('div.second-hand').style.transform = `rotate(${secondDegree}deg)`;
    document.querySelector('div.min-hand').style.transform = `rotate(${minDegree}deg)`;
    document.querySelector('div.hour-hand').style.transform = `rotate(${hourDegree}deg)`;
}, 1000);