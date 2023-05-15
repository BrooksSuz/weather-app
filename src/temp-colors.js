const tempColors = [
  {
    color: 'hsl(232, 49%, 33%)',
    temp: [36, 37, 38, 39, 40],
  },
  {
    color: 'hsl(232, 56%, 44%)',
    temp: [41, 42, 43, 44, 45],
  },
  {
    color: 'hsl(60, 47%, 47%)',
    temp: [46, 47, 48, 49, 50],
  },
  {
    color: 'hsl(60, 68%, 63%)',
    temp: [51, 52, 53, 54, 55],
  },
  {
    color: 'hsl(42, 61%, 49%)',
    temp: [56, 57, 58, 59, 60],
  },
  {
    color: 'hsl(42, 67%, 60%)',
    temp: [61, 62, 63, 64, 65],
  },
  {
    color: 'hsl(28, 57%, 60%)',
    temp: [66, 67, 68, 69, 70],
  },
  {
    color: 'hsl(28, 79%, 71%)',
    temp: [71, 72, 73, 74, 75],
  },
  {
    color: 'hsl(15, 72%, 50%)',
    temp: [76, 77, 78, 79, 80],
  },
  {
    color: 'hsl(15, 82%, 53%)',
    temp: [81, 82, 83, 84, 85],
  },
  {
    color: 'hsl(8, 87%, 43%)',
    temp: [86, 87, 88, 89, 90],
  },
];

function changeBackgroundColor(temperature) {
  // If it's really cold
  if (temperature < 36) {
    document.body.style.backgroundColor = 'hsl(226, 41%, 21%)';
    return;
  }

  // If it's really hot
  if (temperature > 90) {
    document.body.style.backgroundColor = 'hsl(3, 96%, 36%)';
    return;
  }

  // Set the background color based on the provided temperature
  for (const current of tempColors) {
    for (let i = 0; i < current.temp.length; i++) {
      if (current.temp[i] === temperature) {
        document.body.style.backgroundColor = current.color;
        break;
      }
    }
  }
}

export default changeBackgroundColor;
