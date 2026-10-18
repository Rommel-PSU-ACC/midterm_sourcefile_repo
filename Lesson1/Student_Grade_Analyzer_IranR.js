let scores = [85, 72, 91, 64, 78]
console.log("Students Scores")
for(let score of scores){
    console.log(score);
}
console.log("")

let total =0;
let highest =scores[0];
let lowest =scores[0];
let passedCount=0;
let failedCount=0;

for(let i = 0;i < scores.length; i++){
    let score = scores[i];
    total += score;

    if(score > highest) highest = score;
    if(score < lowest) lowest = score;

    let remark=("");
    let status=("");

    if(score >= 90){
        remark = "Excellent";
        status = "passed";
    } else if(score >= 80){
        remark = "Very Good";
        status = "passed";
    } else if(score >= 75){
        remark = "Good";
        status = "passed";
    } else {
        remark = "failed";
        status = "failed";
    }

    if(status === "passed"){
        passedCount++;
        console.log("Student "+(i + 1)+ ": "+ score +" - "+ remark + " - " +status);
    } else {
        failedCount++;
        console.log("Student "+(i + 1)+ ": "+ score +" - "+ remark + " - " +status);
    }
}


let average = total / scores.length;

console.log("");
console.log("Total Score: " + total);
console.log("Average Score: " + average);
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Passed: " + passedCount);
console.log("Failed: " + failedCount);