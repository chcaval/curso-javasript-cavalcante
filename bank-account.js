function Checking(amount){
    this.balance = amount;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;

}

function Deposit(amount){
    this.balance += amount;
}
function Withdraw(amount){
    if(balance >= amount){
        this.balance -= amount;

    }
    if(balance <= amount){
        print('Insuficient balance.')
    }
}
function toString(amount){
    return "balance" + this.balance;
}

var arr = [1,2,3,4];

console.log(Array.isArray(arr));
