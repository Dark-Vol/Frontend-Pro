const buttons = document.querySelectorAll('button[data-type]');
const placeholder = document.getElementById('placeholder');
const dataList = document.getElementById('data-list');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageIndicator = document.getElementById('page-indicator');

let currentCategory = null;
let currentUrl = null;
let currentData = []; // Хранение данных для пагинации
let currentPage = 1;
let totalPages = 1;

const apiMap = {
  films: "https://swapi.info/api/films",
  people: "https://swapi.info/api/people",
  planets: "https://swapi.info/api/planets"
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.type;
    if (currentCategory === category) {
      placeholder.classList.add("hidden");
      currentCategory = null;
      return;
    }
    currentCategory = category;
    currentPage = 1;  // сбрасываем на первую страницу при смене категории
    currentUrl = apiMap[category];
    fetchCategory(currentUrl);
  });
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderPage();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderPage();
  }
});

function fetchCategory(url) {
  fetch(url)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      currentData = json.results || json; // Используем results, если есть
      totalPages = Math.ceil(currentData.length / 5); // Количество страниц
      renderPage();
      updatePagination();
      placeholder.classList.remove("hidden");
    })
    .catch(err => {
      console.error("API error:", err);
      dataList.innerHTML = "<li>Ошибка загрузки данных</li>";
    });
}

function renderPage() {
  // Получаем элементы для текущей страницы
  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;
  const currentPageData = currentData.slice(startIndex, endIndex);

  // Отображаем эти элементы
  renderFullCards(currentPageData);
  updatePagination();
}

function renderFullCards(items) {
  dataList.innerHTML = "";
  if (!Array.isArray(items) || items.length === 0) {
    dataList.innerHTML = "<li>Нет данных для отображения</li>";
    return;
  }

  items.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("card");

    const html = generateCardContent(item);
    li.innerHTML = html;
    dataList.appendChild(li);
  });
}

function generateCardContent(item) {
  let htmlContent = '';
  // Определение контента в зависимости от типа
  if (currentCategory === 'films') {
    htmlContent = `
      <div><strong>Title:</strong> ${item.title}</div>
      <div><strong>Episode ID:</strong> ${item.episode_id}</div>
      <div><strong>Release Date:</strong> ${item.release_date}</div>
      <div><strong>Director:</strong> ${item.director}</div>
      <div><strong>Producer:</strong> ${item.producer}</div>
    `;
  } else if (currentCategory === 'people') {
    htmlContent = `
      <div><strong>Name:</strong> ${item.name}</div>
      <div><strong>Birth Year:</strong> ${item.birth_year}</div>
      <div><strong>Gender:</strong> ${item.gender}</div>
      <div><strong>Height:</strong> ${item.height} cm</div>
      <div><strong>Mass:</strong> ${item.mass} kg</div>
    `;
  } else if (currentCategory === 'planets') {
    htmlContent = `
      <div><strong>Name:</strong> ${item.name}</div>
      <div><strong>Climate:</strong> ${item.climate}</div>
      <div><strong>Terrain:</strong> ${item.terrain}</div>
      <div><strong>Population:</strong> ${item.population}</div>
    `;
  }
  return htmlContent;
}

function updatePagination() {
  pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}
