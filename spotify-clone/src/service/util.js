export function convertToMinSec(totalMilliseconds, type) {
  let minutes = Math.floor(totalMilliseconds / 60000); // Divide the total milliseconds by 60000 (the number of milliseconds in a minute) to get the number of minutes
  let seconds = ((totalMilliseconds % 60000) / 1000).toFixed(0); // Use the modulus operator to get the remaining milliseconds, then divide by 1000 (the number of milliseconds in a second) and use .toFixed(0) to round to a whole number.

  if (minutes < 59) {
    if (type !== ":") {
      return `${minutes} min ${seconds} secs`;
    }else {
        return `${minutes}:${seconds}`;
      }
  } else {
    let hours = Math.floor(minutes / 60);
    let mins = Math.floor(minutes % 60);
    //let sec=minutes%3600;
    if (type !== ":") {
      return `${hours} hr ${mins} min`;
    } else {
      return `${hours}:${mins}`;
    }
  }
}

export function sumConvertToMinSec(a) {
  return convertToMinSec(
    a.map((x) => parseFloat(x.duration)).reduce((a, x) => (a += x), 0)
  );
}
