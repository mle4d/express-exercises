const root = document.getElementById('root');
const dogList = document.createElement('ul');

fetch('/api/v1/dogs')
  .then(res => res.json())
  .then(dogs => {
    dogs.forEach(dog => {
      const li = document.createElement('li');
      li.textContent = `${dog.dog}`;
      dogList.appendChild(li);
    });
  });

root.appendChild(dogList);

