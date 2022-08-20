document.getElementById('btn-calculate').addEventListener('click', function () {

    const income = getInputFieldValueById('income-input');

    const food = getInputFieldValueById('food-input');

    const rent = getInputFieldValueById('rent-input');

    const clothes = getInputFieldValueById('clothes-input');



    const totalExpenses = food + rent + clothes;
    setTextValueById('total-expenses-input', totalExpenses);

    const balance = income - totalExpenses;
    setTextValueById('new-balance', balance);



})