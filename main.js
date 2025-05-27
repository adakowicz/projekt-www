const filterInput = document.getElementById('filterInput');
const sortSelect = document.getElementById('sortSelect');
const dataContainer = document.getElementById('dataContainer');

async function fetchData() {
  const filter = filterInput.value;
  const sort = sortSelect.value;
  const params = new URLSearchParams({ filter, sort });
  const response = await fetch(`/api/data?${params.toString()}`);
  const data = await response.json();
  renderData(data);
}

function renderData(data) {
  dataContainer.innerHTML = data.map(item => `<div>${item.name}</div>`).join('');
}

filterInput.addEventListener('input', fetchData);
sortSelect.addEventListener('change', fetchData);

fetchData();