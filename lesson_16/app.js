class Student {
  constructor(firstName, lastName, birthYear, grades = [], attendance = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = attendance.length ? attendance : new Array(25).fill(null);
    this.attendanceIndex = this.attendance.filter(a => a !== null).length;
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) return 0;
    return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
  }

  present() {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex++] = true;
      saveStudents();
    }
  }

  absent() {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex++] = false;
      saveStudents();
    }
  }

  getAttendanceRate() {
    const attendedClasses = this.attendance.filter(day => day === true).length;
    return attendedClasses / this.attendanceIndex || 0;
  }

  summary() {
    const avgGrade = this.getAverageGrade();
    const attendanceRate = this.getAttendanceRate();

    if (avgGrade > 90 && attendanceRate > 0.9) {
      return "Молодець!";
    } else if (avgGrade > 90 || attendanceRate > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }

  addGrade(grade) {
    this.grades.push(grade);
    saveStudents();
  }
}

document.body.innerHTML = `
    <div class="container">
        <h2>Додати нового студента</h2>
        <input id="firstName" type="text" placeholder="Ім'я">
        <input id="lastName" type="text" placeholder="Прізвище">
        <input id="birthYear" type="number" placeholder="Рік народження">
        <button onclick="addStudent()">Додати студента</button>
    </div>
    <div class="container">
        <h2>Додати оцінку студенту</h2>
        <input id="studentIndex" type="number" placeholder="Індекс студента">
        <input id="grade" type="number" placeholder="Оцінка">
        <button onclick="addGrade()">Додати оцінку</button>
    </div>
    <div class="container">
        <h2>Список студентів</h2>
        <pre id="studentList"></pre>
    </div>
    <div class="container">
        <h2>Усі оцінки студентів</h2>
        <pre id="allGrades"></pre>
    </div>
    <div class="container">
        <h2>Середні оцінки студентів</h2>
        <pre id="averageGrades"></pre>
    </div>
    <div class="container">
        <button onclick="exportToJson()">Завантажити JSON</button>
    </div>
`;

const students = loadStudents();
updateStudentList();

function addStudent() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const birthYear = parseInt(document.getElementById('birthYear').value);

  if (firstName && lastName && birthYear) {
    students.push(new Student(firstName, lastName, birthYear));
    saveStudents();
    updateStudentList();
  }
}

function addGrade() {
  const studentIndex = parseInt(document.getElementById('studentIndex').value);
  const grade = parseInt(document.getElementById('grade').value);

  if (students[studentIndex] && !isNaN(grade)) {
    students[studentIndex].addGrade(grade);
    updateStudentList();
  }
}

function updateStudentList() {
  document.getElementById('studentList').innerText = students.map((s, i) =>
    `${i}: ${s.firstName} ${s.lastName}, Вік: ${s.getAge()}, Середня оцінка: ${s.getAverageGrade()}`
  ).join('\n');

  document.getElementById('allGrades').innerText = students.map((s, i) =>
    `${i}: ${s.grades.join(', ')}`
  ).join('\n');

  document.getElementById('averageGrades').innerText = students.map((s, i) =>
    `${i}: ${s.getAverageGrade()}`
  ).join('\n');
}

function saveStudents() {
  localStorage.setItem('students', JSON.stringify(students));
}

function loadStudents() {
  const data = localStorage.getItem('students');
  return data ? JSON.parse(data).map(s => new Student(s.firstName, s.lastName, s.birthYear, s.grades, s.attendance)) : [];
}

function exportToJson() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(students, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "students.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}