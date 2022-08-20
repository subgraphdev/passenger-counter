let countEl = document.getElementById("count-el");;
let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("total-el")
let count = 0;
let passengerArr = [];
let totalPassenger = 0;

function increment() {
    count = count + 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - ";
    passengerArr.push(count)
    totalPassenger = passengerArr.reduce((a,b)=> a + b)
    saveEl.textContent += countStr
    countEl.textContent = 0
    totalEl.textContent ="Total Passenger arrived today: " + totalPassenger
    count = 0
}

