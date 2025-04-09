class Account {
  constructor(login, password, pin) {
    this.login = login;
    this.password = password;
    this.pin = pin;
    this.cardNumber = this.generateCardNumber();
    this.balance = 0;
  }

  generateCardNumber() {
    let card = '';
    for (let i = 0; i < 16; i++) {
      card += Math.floor(Math.random() * 10);
    }
    return card;
  }

  validatePin(inputPin) {
    return this.pin === inputPin;
  }

  validatePassword(inputPassword) {
    return this.password === inputPassword;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log('Ошибка: сумма должна быть больше 0');
    } else {
      this.balance += amount;
      console.log('Баланс: ' + this.balance);
    }
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Недостаточно средств');
    } else {
      this.balance -= amount;
      console.log('Остаток на счете: ' + this.balance);
    }
  }

  displayBalance() {
    console.log('Баланс: ' + this.balance);
  }

  transfer(amount, targetAccount) {
    if (amount > this.balance) {
      console.log('Недостаточно средств для перевода');
    } else {
      this.balance -= amount;
      targetAccount.deposit(amount);
      console.log('Перевод выполнен. Новый баланс: ' + this.balance);
    }
  }
}

export default Account;
