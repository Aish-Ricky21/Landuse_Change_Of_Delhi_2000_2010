const data = [
  { "CLASS NAME": "AGRICULTURE", "LOSS": 42073.50863, "GAIN": 23843.26414, "CHANGE INDEX": -0.952281226, "UNCHANGED": 19143.76131 },
  { "CLASS NAME": "FALLOW LAND", "LOSS": 1178.725266, "GAIN": 10926.70779, "CHANGE INDEX": 24.10508928, "UNCHANGED": 404.3952051 },
  { "CLASS NAME": "LOW DENSITY URBAN", "LOSS": 33366.23356, "GAIN": 34965.33943, "CHANGE INDEX": 0.108973216, "UNCHANGED": 14674.30193 },
  { "CLASS NAME": "HIGHLY DENCE URBAN", "LOSS": 29765.75461, "GAIN": 29811.30657, "CHANGE INDEX": 0.002166359, "UNCHANGED": 21026.9691 },
  { "CLASS NAME": "WATER BODY", "LOSS": 1065.109784, "GAIN": 1051.468167, "CHANGE INDEX": -0.023297738, "UNCHANGED": 585.5339458 },
  { "CLASS NAME": "SHRAB", "LOSS": 10877.14305, "GAIN": 6793.22621, "CHANGE INDEX": -0.949172418, "UNCHANGED": 4302.607994 },
  { "CLASS NAME": "FOREST", "LOSS": 7661.894852, "GAIN": 10747.88371, "CHANGE INDEX": 1.144640858, "UNCHANGED": 2696.032417 },
  { "CLASS NAME": "VEGITATION", "LOSS": 10048.09663, "GAIN": 17897.27035, "CHANGE INDEX": 2.52282635, "UNCHANGED": 3111.261987 }
];

// Populate Table
const tableHead = document.getElementById("table-head");
const tableBody = document.getElementById("data-table");

tableHead.innerHTML = `<tr>
  <th>Class Name</th>
  <th>Loss</th>
  <th>Gain</th>
  <th>Change Index</th>
  <th>Unchanged</th>
</tr>`;

tableBody.innerHTML = data.map(row => `
  <tr>
    <td>${row["CLASS NAME"]}</td>
    <td>${row.LOSS.toFixed(2)}</td>
    <td>${row.GAIN.toFixed(2)}</td>
    <td>${row["CHANGE INDEX"].toFixed(2)}</td>
    <td>${row.UNCHANGED.toFixed(2)}</td>
  </tr>
`).join("");

// Bar Chart
Plotly.newPlot('barChart', [
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.GAIN),
    name: 'Gain',
    type: 'bar',
    marker: { color: 'green' }
  },
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.LOSS),
    name: 'Loss',
    type: 'bar',
    marker: { color: 'red' }
  }
],);

// Pie Chart
function updatePieChart(valueType) {
  const values = data.map(d => valueType === "Changed"
    ? Math.abs(d.GAIN - d.LOSS)
    : d.UNCHANGED);
  const labels = data.map(d => d["CLASS NAME"]);

  Plotly.newPlot('pieChart', [{
    values: values,
    labels: labels,
    type: 'pie',
    hole: 0.4
  }],);
}

document.getElementById("valueTypeSelect").addEventListener("change", (e) => {
  updatePieChart(e.target.value);
});

// Initial render
updatePieChart("Changed");

// Dark mode toggle
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});












  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  