import Account from './components/Account.js';
import Bank from './components/Bank.js';

const bank = new Bank();

console.log('1 - Открыть счет в банке');
console.log('2 - Посмотреть баланс');
console.log('3 - Снять деньги с карты');
console.log('4 - Пополнить баланс карты');
console.log('5 - Перевести с одной карты на другую');
console.log('6 - Выйти');

do {
  const menu = prompt('Введите номер меню');
  switch (menu) {
    case '1':
      const login = prompt('Введите логин');
      const password = prompt('Введите пароль');
      const pin = prompt('Введите пин-код');
      if (pin.length !== 4) {
        console.log('Ошибка регистрации: пин-код должен быть 4 символа');
      } else {
        const account = new Account(login, password, pin);
        bank.addAccount(account);
        console.log('Аккаунт создан. Номер карты: ' + account.cardNumber);
      }
      break;
    case '2':
      const cardNumberForBalance = prompt('Введите номер карты');
      const pinForBalance = prompt('Введите пин-код');
      bank.showBalance(cardNumberForBalance, pinForBalance);
      break;
    case '3':
      const cardNumberForWithdraw = prompt('Введите номер карты');
      const pinForWithdraw = prompt('Введите пин-код');
      const withdrawAmount = Number(prompt('Введите сумму для снятия'));
      const accountForWithdraw = bank.findAccountByCredentials(cardNumberForWithdraw, pinForWithdraw);
      if (accountForWithdraw) {
        accountForWithdraw.withdraw(withdrawAmount);
      } else {
        console.log('Ошибка авторизации');
      }
      break;
    case '4':
      const cardNumberForDeposit = prompt('Введите номер карты');
      const pinForDeposit = prompt('Введите пин-код');
      const depositAmount = Number(prompt('Введите сумму для пополнения'));
      const accountForDeposit = bank.findAccountByCredentials(cardNumberForDeposit, pinForDeposit);
      if (accountForDeposit) {
        accountForDeposit.deposit(depositAmount);
      } else {
        console.log('Ошибка авторизации');
      }
      break;
    case '5':
      bank.showMoneyTransferMenu();
      bank.handleTransfer();
      break;
    case '6':
      console.log('Выход');
      break;
    default:
      console.log('Неверный выбор');
      break;
  }
} while (menu !== '6');
console.log('Спасибо за использование нашего банка!');