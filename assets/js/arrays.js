const cities = ["ankara", "izmir", "istanbul", "sinop"];

document.querySelector("#btnSort").addEventListener("click", () => {
  cities.sort();
  loadlist();
});

document.querySelector("#btnReverse").addEventListener("click", () => {
  cities.reverse();
  loadlist();
});

document
  .querySelector("#btnRemoveFirst")
  .addEventListener("click", () => {
    cities.shift();
    loadlist();
  });

document.querySelector("#btnRemoveLast").addEventListener("click", () => {
  cities.pop();
  loadlist();
});

document.querySelector("#btnRemoveAll").addEventListener("click", () => {
  cities.splice(0, cities.length);
  loadlist();
});

document.querySelector("#btnAddCity").addEventListener("click", () => {
  const city = document.querySelector("#txtCity").value;

  if (!city || cities.includes(city)) return;
  cities.push(city);
  loadlist();
});

document.querySelector("#btnMix").addEventListener("click", () => {
  getRandom();
  loadlist();
});

const loadlist = () => {
  let html = "";
  for (let i = 0; i < cities.length; i++) {
    html += `<li>${cities[i]}</li>`;
  }
  document.querySelector("#cityList").innerHTML = html;
};

const getRandom = () => {
  const arr = [];

  while (cities.length > 0) {
    const rndIndex = Math.floor(Math.random() * cities.length);
    const city = cities[rndIndex];
    arr.push(city);
    cities.splice(rndIndex, 1);
  }

  cities.splice(0, 0, ...arr);
};

loadlist();