class HTMLRenderer {
  static renderCoaches(coaches) {
    const coachesList = document.getElementById('coaches-list');
    coachesList.innerHTML = ''; // Clear previous content

    coaches.forEach(coach => {
      const listItem = document.createElement('li');
      listItem.textContent = coach.displayInfo();
      coachesList.appendChild(listItem);
    });
  }
}

export default HTMLRenderer;