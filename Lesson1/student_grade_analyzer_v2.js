class Student {
    constructor(name, scores = []) {
        this.name = name;
        this.scores = scores;
    }

    getAverage() {
        if (this.scores.length === 0) return 0;
        const sum = this.scores.reduce((total, score) => total + score, 0);
        return sum / this.scores.length;
    }

    getLetterGrade() {
        const avg = this.getAverage();
        if (avg >= 90) return "A";
        if (avg >= 80) return "B";
        if (avg >= 70) return "C";
        if (avg >= 60) return "D";
        return "F";
    }
}

function analyzeClass(students) {
    if (!students || students.length === 0) {
        console.log("No student data provided.");
        return;
    }

    let totalClassSum = 0;
    let topStudent = null;

    console.log("-------- STUDENT REPORT --------");

    for (const student of students) {
        const avg = student.getAverage();
        const letter = student.getLetterGrade();

        totalClassSum += avg;

        if (!topStudent || avg > topStudent.getAverage()) {
            topStudent = student;
        }

        console.log(`${student.name} - Average: ${avg.toFixed(1)} | Grade: ${letter}`);
    }

    const classAverage = totalClassSum / students.length;

    console.log("--------------------------------");
    console.log(`Class Average: ${classAverage.toFixed(1)}`);
    console.log(`Top Student: ${topStudent.name} with ${topStudent.getAverage().toFixed(1)}`);
}

const studentData = [
    { name: "Lany", scores: [85, 90, 92] },
    { name: "Bongbung", scores: [70, 75, 68] },
    { name: "Dutherthe", scores: [95, 98, 92] },
    { name: "Pico", scores: [55, 60, 58] }
];

const studentObjects = studentData.map(data => new Student(data.name, data.scores));

analyzeClass(studentObjects);