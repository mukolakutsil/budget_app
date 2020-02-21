var btnStart = document.querySelector(".start"),
    resultTtable = document.querySelector('.result-table'),

    budgetValue = document.querySelector(".budget-value"),
    daybudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector(".income-value"),
    monthvisangsValue = document.querySelector(".monthsavings-value"),
    yearSavingsValue = document.querySelector(".yearsavings-value"),
    expensesItem  = document.getElementsByClassName("expenses-item"),
    btnr = document.getElementsByTagName("button"),
    btnr0 = btnr[0],
    btnr1 = btnr[1],
    btnr2 = btnr[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    expensesItemBtn = document.querySelector(".expenses-item-btn"),
    chooseIncome = document.querySelector(".choose-income"),
    savings = document.querySelector("#savings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value"),
    optExpensesBtn = document.querySelector(".optionalexpenses-btn"),
    countDudgetBtn = document.querySelector(".count-budget-btn");

    
    var money, time;

    btnStart.addEventListener('click', function start() {
        money = +prompt("Ваш б'юджет на місяць?"),
        time = prompt("Ведіть дату в форматі YYYY-MM-DD");
       
        while(isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш б'юджет на місяць?");
        }
        budgetValue.innerHTML = money;
        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(time)).getDate();

    
        expensesItemBtn.addEventListener("click", function() { 
            
            var sum = 0;
            for(var i = 0; i < expensesItem.length; i++) {     
               var a = expensesItem[i].value,
                   b = expensesItem[++i].value;
           
           
           if( (typeof(a) === "string" && typeof(a))!= null && (typeof(b))!= null && a!="" 
                && b!="" && a.length < 50){
               console.log("God");
               appData.expenses[a] = b;
               sum += +b;
           } else {
            i = i - 1;
           }
       }
           expensesValue.textContent = sum;
       });
       
       optExpensesBtn.addEventListener("click", function() {
           for(var a = 0; a < optionalExpensesItem.length; a++) {
           var text = optionalExpensesItem[a].value;
           appData.optionalExpenses[a] = text;
       
           optionalExpensesValue.innerHTML += appData.optionalExpenses[a] + " ";
         
           }
       
       });
       
       countDudgetBtn.addEventListener("click", function() {
            
            if(appData.budget != undefined){
               var manyDey =  ((money- +expensesValue.textContent)/30).toFixed();
               daybudgetValue.innerHTML = manyDey;
               
                   if(money < 3000) {
                       levelValue.textContent = "Мало грн";
                   } else if(money > 3000 && money < 6000 ) {
                       levelValue.textContent = "Достатньо грн";
                   } else if(money > 6000) {
                       levelValue.textContent = "Багато грн";
                   } else{
                       levelValue.textContent = "Щось пішло не так(";
                   } 
            } else {
               daybudgetValue.textContent = "Сталася помилка:("; 
            }
               
               
       });
       
       chooseIncome.addEventListener("input", function() {
           var dodQest = chooseIncome.value;
       
           appData.income = dodQest.split(" , ");
           incomeValue.textContent = appData.income;
       
       });
       
       savings.addEventListener("click", function() {
           if(appData.savings == true) {
               appData.savings = false;
           } else{
               appData.savings = true;
           }
       });
       
       chooseSum.addEventListener("input", function() {
           if(appData.savings == true) {
               let sum =  +chooseSum.value,
                   percent = +choosePercent.value;
       
                   appData.monthIncome = sum/100/12*percent;
                   appData.yearIncome = sum/100*percent;
       
                   monthvisangsValue.textContent = appData.monthIncome.toFixed(1);
                   yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
       
           }
       });
       
       choosePercent.addEventListener("input", function() {
           if(appData.savings == true) {
               let sum =  +chooseSum.value,
                   percent = +choosePercent.value;
       
                   appData.monthIncome = sum/100/12*percent;
                   appData.yearIncome = sum/100*percent;
       
                   monthvisangsValue.textContent = appData.monthIncome.toFixed(1);
                   yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
       
           }
       });

    });

    


    var appData = {
        badget : money,
        timeData : time,
        expenses : {},
        optionalExpenses : {},
        income : [],
        savings : false
    };
           





