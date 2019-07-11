const main = document.getElementById('main');
const search = new URLSearchParams(window.location.search);
const name = search.get('name');

fetch(`/api/v1/colors/${color}`)
  .then(res => res.json())
  .then(color => {
    const list = document.createElement('list');
    list.textContent = `${color.name} ${color.hex} ${color.r} ${color.g} ${color.b}`;
    main.style.color = color.hex;

    main.appendChild(list);
  });



