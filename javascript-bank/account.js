/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];

}

Account.prototype.deposit = function (amount) {
  if (typeof amount === 'number' && amount > 0 && amount % 1 === 0) {
    var newTransaction = new Transaction('deposit', amount);
    this.transactions.push(newTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (typeof amount === 'number' && amount > 0 && amount % 1 === 0) {
    var newTransaction2 = new Transaction('withdrawal', amount);
    this.transactions.push(newTransaction2);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'withdrawal') {
      balance = balance - this.transactions[i].amount;
    } else if (this.transactions[i].type === 'deposit') {
      balance = balance + this.transactions[i].amount;
    }
  }
  return balance;
};
