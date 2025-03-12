function generatePythagoreanTable(size) {
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.textAlign = "center";
    table.style.width = "300px";

    for (let i = 0; i <= size; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j <= size; j++) {
            const cell = document.createElement(i === 0 || j === 0 ? "th" : "td");
            cell.style.border = "1px solid black";
            cell.style.padding = "10px";
            
            if (i === 0 && j === 0) {
                cell.textContent = "×";
            } else if (i === 0) {
                cell.textContent = j;
            } else if (j === 0) {
                cell.textContent = i;
            } else {
                cell.textContent = i * j;
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    return table;
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement("div");
    container.style.overflowX = "auto";
    container.appendChild(generatePythagoreanTable(10));
    document.body.appendChild(container);
});
