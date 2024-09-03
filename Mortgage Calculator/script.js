document.addEventListener('DOMContentLoaded', () => {
  const calculateButton = document.querySelector('.calculate');
  const emptyResult = document.querySelector('.empty-result');
  const filledResult = document.querySelector('.filled-result');
  const mortgageAmountInput = document.querySelector('.MortgageAmount');
  const mortgageTermInput = document.querySelector('.MortgageTerm');
  const interestRateInput = document.querySelector('.Interest');
  const repaymentOption = document.querySelector('#Repayment');
  const interestOnlyOption = document.querySelector('#InterestOnly');
  const monthlyRepaymentElement = filledResult.querySelector('h1');
  const totalRepaymentElement = filledResult.querySelector('h4');
  const clearAllButton = document.getElementById('clear-all');

  calculateButton.addEventListener('click', () => {
    const principal = parseFloat(mortgageAmountInput.value);
    const years = parseFloat(mortgageTermInput.value);
    const annualInterestRate = parseFloat(interestRateInput.value) / 100;
    const months = years * 12;
    let monthlyRepayment;
    let totalRepayment;

    if (repaymentOption.checked) {
      const monthlyInterestRate = annualInterestRate / 12;
      monthlyRepayment = (principal * monthlyInterestRate) / 
        (1 - Math.pow(1 + monthlyInterestRate, -months));
      totalRepayment = monthlyRepayment * months;
    } else if (interestOnlyOption.checked) {
      monthlyRepayment = (principal * annualInterestRate) / 12;
      totalRepayment = principal + (monthlyRepayment * months);
    }

    if (!isNaN(monthlyRepayment) && !isNaN(totalRepayment)) {
      monthlyRepaymentElement.textContent = `£${monthlyRepayment.toFixed(2)}`;
      totalRepaymentElement.textContent = `£${totalRepayment.toFixed(2)}`;
      emptyResult.style.display = 'none';
      filledResult.style.display = 'block';
    } else {
      alert('Please enter valid numbers for all fields.');
    }
  });

  clearAllButton.addEventListener('click', () => {
    mortgageAmountInput.value = '';
    mortgageTermInput.value = '';
    interestRateInput.value = '';
    repaymentOption.checked = false;
    interestOnlyOption.checked = false;
    emptyResult.style.display = 'block';
    filledResult.style.display = 'none';
  });
});
