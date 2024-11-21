
const calculateBtn = document.getElementById('calculateBtn');
const birthdateInput = document.getElementById('birthdate');
const resultDisplay = document.getElementById('result');

// gets the age
function calculateAge() {
  const birthdate = new Date(birthdateInput.value);
  const today = new Date();
  
  if (!birthdateInput.value) {
    resultDisplay.textContent = "Please enter a valid birthdate.";
    return;
  }

  // calculates the difference in yearsm months, and days
  let ageInYears = today.getFullYear() - birthdate.getFullYear();
  let ageInMonths = today.getMonth() - birthdate.getMonth();
  let ageInDays = today.getDate() - birthdate.getDate();

  // if the birthdate hasnt happened yet it will adjust, some cool ass math i learned on a video
  if (ageInMonths < 0 || (ageInMonths === 0 && ageInDays < 0)) {
    ageInYears--;
    ageInMonths = (ageInMonths + 12) % 12;
  }

  if (ageInDays < 0) {
    const daysInPreviousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    ageInDays += daysInPreviousMonth;
  }

  
  resultDisplay.textContent = `You are ${ageInYears} years, ${ageInMonths} months, and ${ageInDays} days old.`;
}


calculateBtn.addEventListener('click', calculateAge);
