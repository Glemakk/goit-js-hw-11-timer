import { refs } from './constants'

console.log(refs.days)

class CountdownTimer{
    constructor({ selector, targetDate }) {
        this.targetDate = targetDate;
        this.selector = selector;
        this.refsContainer = document.querySelector(selector);
        // this.start();
    }
  start() {
        const startTime = this.targetDate;
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime -currentTime;
            const time = this.getTimeComponents(deltaTime);
            
            this.updateTimerFace(time);
            // console.log(time);
        }, 1000);
    }

    getTimeComponents(time) {
const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
    return { days, hours, mins, secs };
    }
    
    pad(value) {
   return String(value).padStart(2, 0)
    }
    
    updateTimerFace({days, hours, mins, secs}) {
    this.refsContainer.querySelector('[data-value=days]').textContent = days;
    this.refsContainer.querySelector('[data-value=hours]').textContent = hours;
    this.refsContainer.querySelector('[data-value=mins]').textContent = mins;
    this.refsContainer.querySelector('[data-value=secs]').textContent = secs;
    }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(2021, 4, 25, 5, 40, 0, 0),
});

const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date(2021, 5, 21, 6, 30, 5, 0),
});

timer.start();
timer2.start();


// //-----------------without class
// const timer = {
//     start() {
//         const startTime = date.getTime();
//         setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = startTime -currentTime;
//             const time = getTimeComponents(deltaTime);
//             updateTimerFace(time);
//             console.log(time);
//         }, 1000);
//     },
// };

// timer.start();

// // ?????????? padStart() ?????????????????? ?????????????? ???????????? ???????????? ?????????????? (?????????????????? ??????, ???????? ??????????)
// // ??????, ?????? ???????????????? ???????????? ?????????????????? ???????????????? ??????????.???????????????????? ???????????????????????????? ?? ????????????(??????????) ?????????????? ????????????.
// function pad(value) {
//    return String(value).padStart(2, 0)
// };

// function getTimeComponents(time) {
// const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
// const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
// const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
// const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    
//     return { days, hours, mins, secs };
// };

// function updateTimerFace({days, hours, mins, secs}) {
//     refs.days.textContent = `${days}`;
//     refs.hours.textContent = `: ${hours}`;
//     refs.mins.textContent = `: ${mins}`;
//     refs.secs.textContent = `: ${secs}`;
// }




//---------------???????????? ????????

// const date = new Date(2021, 4, 25, 5, 40, 0, 0);

// // ????????????????
// //console.log(`2021, 5, 25, 5, 40 ?????????????????????????? ${date.getTime()}`);
// // "2017, 6, 14, 5, 40 ?????????????????????????? 1500000000000"

// /* ?? ?????????????? ?????????????? set */
// // ???????????????? ?????????? ???????????? ?? ?????????????? ??????????
// const secondDate = new Date();

// // ?????????????? ?????? ?? ?? ?????? ???? ?????????? ?? ???????? ????????????
// secondDate.setFullYear(2021, 5, 25);
// // ?????????????? ?????? ?? ?? ?????? ???? ????????????, ?????????????? ?? ??????????????????????
// secondDate.setHours(5, 40, 0, 0);

// ????????????????
//console.log(`2017, 6, 14, 5, 40 ?????????????????????????? ${secondDate.getTime()}`);


// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date(2021, 4, 25, 5, 40, 0, 0);,
// });

