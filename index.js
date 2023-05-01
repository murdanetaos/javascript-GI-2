// VERYEASYVERYEASYVERYEASY
function min(num1, num2) {
    if (num1 < num2) {
      return num1;
    } else {
      return num2;
    }
  }
  console.log(min(3,4))
// EASYEASYEASYEASYEASY
const students = [
    ['Doe', 'John', 19],
    ['Smith', 'Jane', 21],
    ['Brown', 'Mike', 18]
  ];
  
  const student = students[1];
console.log(`Hello, my name is ${student[1]} ${student[0]} and I'm ${student[2]} years old.`);
// MEDIUMEDIUMMEDIUM
const monthNumber = parseInt(prompt("Enter a number between 1 and 12:"));

if (monthNumber >= 1 && monthNumber <= 12) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const monthName = months[monthNumber - 1];
  console.log(`${monthNumber} corresponds to ${monthName}.`);
} else {
  alert("Invalid number. Please enter a number between 1 and 12.");
}
// HARDHARDHARDHARD
// Define Tom's and Jerry's height and mass in inches and grams, respectively
const tomHeightInches = 9;
const tomMassGrams = 8;
const jerryHeightInches = 10;
const jerryMassGrams = 45;

// Convert height from inches to meters
const tomHeightMeters = tomHeightInches * 0.0254;
const jerryHeightMeters = jerryHeightInches * 0.0254;

// Convert mass from grams to kilograms
const tomMassKilograms = tomMassGrams / 1000;
const jerryMassKilograms = jerryMassGrams / 1000;

// Calculate BMI for Tom and Jerry
const tomBMI = tomMassKilograms / (tomHeightMeters ** 2);
const jerryBMI = jerryMassKilograms / (jerryHeightMeters ** 2);

// Compare BMI for Tom and Jerry
const isTomsBMIHigher = tomBMI > jerryBMI;

// Print result to console
console.log(`Is Tom's BMI higher than Jerry's? ${isTomsBMIHigher}`);
