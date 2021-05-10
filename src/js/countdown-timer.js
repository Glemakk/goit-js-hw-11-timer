import { refs } from './constants'

const date = new Date(2021, 4, 25, 5, 40, 0, 0);

// Проверим
//console.log(`2021, 5, 25, 5, 40 соответствует ${date.getTime()}`);
// "2017, 6, 14, 5, 40 соответствует 1500000000000"

/* С помощью методов set */
// Создадим новый объект с текущей датой
const secondDate = new Date();

// Изменим год и в нем же месяц и день месяца
secondDate.setFullYear(2021, 5, 25);
// Изменим час и в нем же минуты, секунды и милисекунды
secondDate.setHours(5, 40, 0, 0);

// Проверим
//console.log(`2017, 6, 14, 5, 40 соответствует ${secondDate.getTime()}`);


// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });


// class CountdownTimer{
//     constructor() {
//         this.selector = '#timer-1';
//         this.targetDate = new Date(2021, 4, 25, 5, 40, 0, 0);
//     }
// }

//-----------------without class
const timer = {
    start() {
        const startTime = date.getTime();
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime -currentTime;
            const time = getTimeComponents(deltaTime);
            updateTimerFace(time);
            console.log(time);
        }, 1000);
    },
};

timer.start();

//Метод padStart() заполняет текущую строку другой строкой (несколько раз, если нужно)
//так, что итоговая строка достигает заданной длины.Заполнение осуществляется в начале(слева) текущей строки.
function pad(value) {
   return String(value).padStart(2, 0)
};


function getTimeComponents(time) {

const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    
    return { days, hours, mins, secs };
};

function updateTimerFace({days, hours, mins, secs}) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `: ${hours}`;
    refs.mins.textContent = `: ${mins}`;
    refs.secs.textContent = `: ${secs}`;
}

