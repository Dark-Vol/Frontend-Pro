class Bank {
  constructor() {
    this.accounts = [];
  }

  addAccount(account) {
    this.accounts.push(account);
  }

  findAccountByCardNumber(cardNumber) {
    return this.accounts.find(account => account.cardNumber === cardNumber);
  }

  findAccountByCredentials(cardNumber, pin) {
    const account = this.findAccountByCardNumber(cardNumber);
    return account && account.validatePin(pin) ? account : null;
  }

  showBalance(cardNumber, pin) {
    const account = this.findAccountByCredentials(cardNumber, pin);
    if (account) {
      account.displayBalance();
    } else {
      console.log('Ошибка авторизации');
    }
  }

  showMoneyTransferMenu() {
    console.log('5 - Перевести с одной карты на другую');
  }

  handleTransfer() {
    const cardFrom = prompt('Введите номер карты для перевода');
    const pinFrom = prompt('Введите пин-код для перевода');
    const amount = Number(prompt('Введите сумму перевода'));
    const cardTo = prompt('Введите номер карты для получения перевода');

    const accountFrom = this.findAccountByCredentials(cardFrom, pinFrom);
    const accountTo = this.findAccountByCardNumber(cardTo);

    if (accountFrom && accountTo) {
      accountFrom.transfer(amount, accountTo);
    } else {
      console.log('Ошибка при выполнении перевода');
    }
  }
}

export default Bank;
