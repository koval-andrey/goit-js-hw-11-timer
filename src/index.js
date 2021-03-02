import './styles.css';
import { CountdownTimer } from './script/timer.js';


const timerCount = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('may 01, 2021'),
  
});

timerCount.CountdownTimer();
