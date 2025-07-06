let marksIn = prompt("Enter your mark :");
let marks = Number(marksIn);
if (isNaN(marks) || marks < 0 || marks > 100) {
  alert("Invalid input. Please enter a number between 0 and 100");
} else {
  let grade = "";
  let message = "";
  if (marks >= 90) {
    grade = "A";
    message = "Excellent";
  } else if (marks >= 75) {
    grade = "B";
    message = "Great job";
  } else if (marks >= 60) {
    grade = "C";
    message = "Good effort";
  } else if (marks >= 40) {
    grade = "D";
    message = "You passed";
  } else {
    grade = "F";
    message = "Better luck next time";
  }
  alert(`Your grade is ${grade}.\n${message}`);
}
