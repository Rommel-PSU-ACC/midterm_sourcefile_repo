'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

const originalNames = Array.from(studentNames);

console.log('\nPART A: ORIGINAL RECORDS');
for (let i = 0; i < studentNames.length; i++) {
  console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`);
}

console.log('\nPART B: ADD NEW STUDENTS');
studentNames.push('Faith');
studentScores.push(88);
studentNames.unshift('Aaron');
studentScores.unshift(76);

console.log('Updated Names:', studentNames);
console.log('Updated Scores:', studentScores);
console.log('Number of Students:', studentNames.length);

console.log('\nPART C: REMOVE AND REPLACE RECORDS');
studentNames.shift();
studentScores.shift();
studentNames.pop();
studentScores.pop();

const danielIndex = studentNames.indexOf('Daniel');
studentNames.splice(danielIndex, 1);
studentScores.splice(danielIndex, 1);

studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

console.log('Names:', studentNames);
console.log('Scores:', studentScores);

console.log('\nPART D: CLASS STATISTICS');
const totalScore = studentScores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / studentScores.length;
const highestScore = Math.max(...studentScores);
const lowestScore = Math.min(...studentScores);

console.log('Total Score:', totalScore);
console.log('Average Score:', averageScore.toFixed(2));
console.log('Highest Score:', highestScore);
console.log('Lowest Score:', lowestScore);

console.log('\nPART E: PASSING-SCORE ANALYSIS');
const passingScores = studentScores.filter(score => score >= 75);
const statuses = studentScores.map(score => (score >= 75 ? 'Passed' : 'Failed'));
const atLeastOneFailed = studentScores.some(score => score < 75);
const allPassed = studentScores.every(score => score >= 75);

console.log('Passing Scores:', passingScores);
console.log('Statuses:', statuses);
console.log('At Least One Failed:', atLeastOneFailed);
console.log('All Students Passed:', allPassed);

console.log('\nPART F: SORT AND SEARCH');
const sortedScores = Array.from(studentScores).sort((a, b) => b - a);

console.log('Scores from Highest to Lowest:', sortedScores);
console.log('Contains 91:', studentScores.includes(91));
console.log('Index of 91:', studentScores.indexOf(91));

console.log('\nPART G: TWO-DIMENSIONAL ARRAY');
const activityAverages = [];

for (let i = 0; i < activityScores.length; i++) {
  let sum = 0;
  for (let j = 0; j < activityScores[i].length; j++) {
    sum += activityScores[i][j];
  }
  const avg = sum / activityScores[i].length;
  activityAverages.push(Number(avg.toFixed(2)));
  console.log(`${originalNames[i]}'s activity average: ${avg.toFixed(2)}`);
}

console.log('Activity Averages:', activityAverages);

console.log('\nPART H: TEXT SUMMARY');
console.log('Students:', studentNames.join(' | '));
