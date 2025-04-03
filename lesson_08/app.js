let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () {
        console.log(this.step);
        return this;
    }
};

// Если закоментировать какую небудь вывод то можно получить разный ответ
ladder.up().down().showStep() // 0
ladder.down().showStep() // -1
ladder.showStep() // 0 or -1
ladder.up().up().down().showStep(); // 1 or 0