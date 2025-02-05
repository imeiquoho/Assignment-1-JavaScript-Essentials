/* markToGrade.js */
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('convertButton').addEventListener('click', MarkToGrade);
  });
  
  function MarkToGrade() {
    const inputBox = document.getElementById('mark-input-box');
    const validationMessage = document.getElementById('validation-message');
    const gradeOutput = document.getElementById('grade-output');
    
    // Clear previous messages
    validationMessage.textContent = "";
    gradeOutput.textContent = "";
    
    const markStr = inputBox.value;
    
    try {
      if (markStr.trim() === "") {
        throw "Input is empty. Please enter your mark.";
      }
      
      const mark = parseInt(markStr);
      if (isNaN(mark)) {
        throw "Invalid input. Please enter a numeric value.";
      }
      
      if (mark < 0) {
        throw "Mark cannot be negative. Please enter a nonnegative number.";
      }
      
      if (mark > 100) {
        throw "Mark cannot be greater than 100. Please enter a realistic mark.";
      }
      
      let grade = "";
      if (mark > 90) {
        grade = "A";
      } else if (mark > 80) {
        grade = "B";
      } else if (mark > 70) {
        grade = "C";
      } else if (mark > 50) {
        grade = "D";
      } else {
        grade = "F";
      }
      
      gradeOutput.textContent = "Grade: " + grade;
    } catch (error) {
      validationMessage.textContent = "Error: " + error;
    }
  }
  