import { DateTime } from '../node_modules/luxon/src/luxon.js';

const $date = document.querySelector('.datepage');

function getNumberSuffix(day) {
  switch (day) {
    case 1:
    case 21:
    case 31:
      return 'st';
    case 2:
    case 22:
      return 'nd';
    case 3:
    case 23:
      return 'rd';
    default:
      return 'th';
  }
}

export default function updateDate() {
  const now = DateTime.now().setLocale('en-US');
  const month = now.monthLong;
  const { day } = now;
  const { year } = now;
  const hour = now.toFormat('h');
  const { minute } = now;
  const { second } = now;
  const meridiem = now.toFormat('a');
  const suffix = getNumberSuffix(day);

  const dateString = `${month} ${day}${suffix} ${year}, ${hour}:${minute
    .toString()
    .padStart(2, '0')}:${second.toString().padStart(2, '0')} ${meridiem}`;

  $date.innerHTML = dateString;

  setTimeout(updateDate, 1000);
}