export function convertToMinSec(totalMilliseconds, type) {
  let minutes = Math.floor(totalMilliseconds / 60000); // Divide the total milliseconds by 60000 (the number of milliseconds in a minute) to get the number of minutes
  let seconds = ((totalMilliseconds % 60000) / 1000).toFixed(0); // Use the modulus operator to get the remaining milliseconds, then divide by 1000 (the number of milliseconds in a second) and use .toFixed(0) to round to a whole number.

  if (minutes < 59) {
    if (type !== ":") {
      return `${minutes} min ${seconds} secs`;
    } else {
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

// export function getColourFromImage(imageData) {
//   let dominantColor="";
//   console.log(imageData);
//   const pixels = imageData.data;

//   let r = 0;
//   let g = 0;
//   let b = 0;
//   let count = 0;
//   for (let i = 0; i < pixels.length; i += 4) {
//     r += pixels[i];
//     g += pixels[i + 1];
//     b += pixels[i + 2];
//     count++;
//   }
//   r = Math.floor(r / count);
//   g = Math.floor(g / count);
//   b = Math.floor(b / count);
//   dominantColor = `rgb(${r}, ${g}, ${b})`;
//   console.log(dominantColor);

//   return dominantColor;
// }

// async function createBlobFromImage(imageUrl) {
//   const response = await fetch(imageUrl);
//   const arrayBuffer = await response.arrayBuffer();
//   return new Blob([arrayBuffer]);
// }
