'use srtrict';
let money = +prompt("What\'s your monthly budget?", ''),
    time = prompt("Enter date YYYY-MM-DD", '');
let appData = {
    budget: money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    timeData: time,
    savings: false,
};

/*for(let i = 0; i < 2; i++){
    let a = prompt("Enter necessary expences for this month", ''),
        b = prompt("How much?", '');
    if(typeof(a)==='string' && typeof(a) !=null && typeof(b) !=null && a != '' && b != '' && a.length < 50){
        console.log("done");
        appData.expenses[a] = b;
    } else{

    }
};*/
let i=0;
/*while(i < 2){
    let a = prompt("Enter necessary expences for this month", ''),
        b = prompt("How much?", '');
    if(typeof(a)==='string' && typeof(a) !=null && typeof(b) !=null && a != '' && b != '' && a.length < 50){
        console.log("done");
        appData.expenses[a] = b;
    }
    i++;
}*/
do{
    let a = prompt("Enter necessary expences for this month", ''),
        b = prompt("How much?", '');
    if(typeof(a)==='string' && typeof(a) !=null && typeof(b) !=null && a != '' && b != '' && a.length < 50){
        console.log("done");
        appData.expenses[a] = b;
    }
    i++;
}while(i<2);

appData.moneyPerDay = appData.budget / 30;

alert("Daily budget - " + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
    console.log("Minimum income");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Mediocre income" );
} else if(appData.moneyPerDay > 2000){
    console.log("High income");
} else {
    console.log("Error ocured")
}