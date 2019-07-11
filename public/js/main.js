const root = document.getElementById('root');
const colorList = document.createElement('ul');

fetch('/api/v1/colors')
  .then(res => res.json())
  .then(colors => {
    colors.forEach(color => {
      const link = document.createElement('a');
      const li = document.createElement('li');
      link.href = `./list.html?color=${color.name}`;
      li.textContent = `${color.name} ${color.hex} ${color.r} ${color.g} ${color.b}`;
      // li.style.color = color.hex;
      link.appendChild(li);
      colorList.appendChild(link);
    });
  });

root.appendChild(colorList);

