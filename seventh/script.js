const nextBtn = document.getElementById("nextBtn");
const subjectSection = document.getElementById("subjectSection");
const marksSection = document.getElementById("marksSection");

let studentCount, subjectCount;
let subjects = [];

// Step 1 → Subject input
nextBtn.addEventListener("click", () => {
  studentCount = document.getElementById("studentCount").value;
  subjectCount = document.getElementById("subjectCount").value;

  subjectSection.innerHTML = "<h3>Enter Subject Names</h3>";

  for (let i = 0; i < subjectCount; i++) {
    subjectSection.innerHTML += `
      Subject ${i + 1}: <input type="text" id="sub${i}"><br><br>
    `;
  }

  subjectSection.innerHTML += `<button onclick="generateTable()">Next</button>`;
});

// Step 2 → Marks table
function generateTable() {
  subjects = [];

  for (let i = 0; i < subjectCount; i++) {
    subjects.push(document.getElementById(`sub${i}`).value);
  }

  let tableHTML = "<h3>Enter Marks</h3>";
  tableHTML += "<table><tr><th>Roll No</th>";

  subjects.forEach(sub => {
    tableHTML += `<th>${sub}</th>`;
  });

  tableHTML += "</tr>";

  for (let i = 0; i < studentCount; i++) {
    tableHTML += `<tr><td>${i + 1}</td>`;

    for (let j = 0; j < subjectCount; j++) {
      tableHTML += `<td><input type="number" id="m${i}_${j}"></td>`;
    }

    tableHTML += "</tr>";
  }

  tableHTML += "</table>";
  tableHTML += `<button onclick="showResult()">Submit</button>`;

  marksSection.innerHTML = tableHTML;
}

// Step 3 → Show result on SAME PAGE
function showResult() {
  let results = [];

  for (let i = 0; i < studentCount; i++) {
    let total = 0;
    let marks = [];

    for (let j = 0; j < subjectCount; j++) {
      let mark = Number(document.getElementById(`m${i}_${j}`).value);
      marks.push(mark);
      total += mark;
    }

    let avg = (total / subjectCount).toFixed(2);

    results.push({ roll: i + 1, marks, total, avg });
  }

  // Find topper
  let maxTotal = Math.max(...results.map(s => s.total));

  let resultHTML = "<h3> Final Results</h3>";
  resultHTML += "<table><tr><th>Roll No</th>";

  subjects.forEach(sub => {
    resultHTML += `<th>${sub}</th>`;
  });

  resultHTML += "<th>Total</th><th>Average</th></tr>";

  results.forEach(student => {
    let topperClass = student.total === maxTotal ? "style='background: #ffeaa7; font-weight:bold;'" : "";

    resultHTML += `<tr ${topperClass}><td>${student.roll}</td>`;

    student.marks.forEach(m => {
      resultHTML += `<td>${m}</td>`;
    });

    resultHTML += `<td>${student.total}</td>`;
    resultHTML += `<td>${student.avg}</td></tr>`;
  });

  resultHTML += "</table>";
  marksSection.innerHTML += resultHTML;
}