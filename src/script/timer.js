export { CountdownTimer };

const daysRef = document.querySelector('span[data-value="days"]');
const hoursRef = document.querySelector('span[data-value="hours"]');
const minutesRef = document.querySelector('span[data-value="mins"]');
const secondsRef = document.querySelector('span[data-value="secs"]');

class CountdownTimer {
  constructor({ targetDate }) {
    this.targetDate = targetDate;
    this.start();
    this.timerStart();
  }

  timerStart() {
    const currentDate = Date.now();
    const total = this.targetDate - currentDate;
    this.updateTimer(this.getTimerParts(total));
  }

  start(){
    setInterval(() => {
      this.timerStart();
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
  getTimerParts(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  updateTimer({ days, hours, mins, secs }) {
    daysRef.textContent = `${days}`;
    hoursRef.textContent = `${hours}`;
    minutesRef.textContent = `${mins}`;
    secondsRef.textContent = `${secs}`;
  }
}
