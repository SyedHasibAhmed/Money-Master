document.getElementById('btn-saving').addEventListener('click', function () {
    // console.log('click');

    const income = getInputFieldValueById('income-input');

    const food = getInputFieldValueById('food-input');

    const rent = getInputFieldValueById('rent-input');

    const clothes = getInputFieldValueById('clothes-input');



    const totalExpenses = food + rent + clothes;
    setTextValueById('total-expenses-input', totalExpenses);

    const savingAmount = income * 0.2;
    setTextValueById('saving-amount', savingAmount);

    const newBalance = totalExpenses + savingAmount;

    const remainingBalance = income - newBalance;
    setTextValueById('remaining-balance', remainingBalance);
})