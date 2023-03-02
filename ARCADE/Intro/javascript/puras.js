

var balance = 10;

const calCredits = (balance) => {
    var credits = 0;
    if (balance) {
        credits = balance * 0.05;
    }
    return credits;
}

var newBalance = calCredits(balance);
console.log("newBalance: ", newBalance);
console.log("balance: ", balance);


var calCreditsSimple = () => balance ? balance * 0.05 : 0;

// const newBalance2 = calCreditsSimple(balance);
console.log("newBalance2: ", calCreditsSimple(balance));
console.log("balance: ", balance);