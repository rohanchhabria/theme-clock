const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const timeline = document.querySelector('.time-line');
const dateline = document.querySelector('.date-line');
const toggle = document.querySelector('.toggle');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


toggle.addEventListener('click', (event) => {
    const html = document.querySelector('html');
    const secondsneedle = document.querySelector('.needle.second');
    const centerpoint = document.querySelector('.center-point');
    secondsneedle.style.backgroundColor = "";
    centerpoint.style.backgroundColor = "";
    if(html.classList.contains('dark-mode')) {
        html.classList.remove('dark-mode');
        event.target.innerHTML = 'Dark Mode';
        // secondsneedle.style.backgroundColor = "#e74c3c";
        // centerpoint.style.backgroundColor = "#e74c3c";
    }
    else {
        html.classList.add('dark-mode');
        event.target.innerHTML = 'Light Mode';
        secondsneedle.style.backgroundColor = "rgba(29,161,242,1.00)";
        centerpoint.style.backgroundColor = "rgba(29,161,242,1.00)";
    }
});

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function strokedatetime() {
    const time = new Date();
    // console.log(time);
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    // 24 hours clock format
    const hours = time.getHours();
    // 12 hours clock format
    // const hoursclock = hour % 12
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    // for 12 hour clock pass this as third argument in timeline $(ampm)
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hour.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0, 12, 0, 360)}deg)`;
    minute.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    second.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    timeline.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    dateline.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

strokedatetime();
// 1 second = 1000 mili-seconds
setInterval(strokedatetime, 1000)