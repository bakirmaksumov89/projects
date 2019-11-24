var money;
var time;
var expens;
var amount;

function create()
{
    money=document.getElementById('budgetID').value;
    time=document.getElementById('dateID').value;
    expens=document.getElementById('expensesID').value;
    amount=document.getElementById('priceID').value;

    var expenses={
        currentExpens:expens,
        currntAmount:amount
    };

    var appData={
        budget: money, 
        currtime: time, 
        currExp: expenses,
        optionalExpenses:"",
        income: "",
        savings: false
    }
}