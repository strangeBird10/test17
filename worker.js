import {Person} from "./person.js";

export class Worker extends Person {
    constructor(firstName, lastName, birthday, position) {
        super(firstName, lastName, birthday);
        this.position = position;
        this._rate = 1000;
        this._days = 0;
    }

    get rate() {
        return this._rate;
    }

    set rate(newRate) {
        if (newRate >= 1000) {
            this._rate = newRate;
        } else {
            console.error('Ошибка: Ставка за день работы не может быть менее 1000 рублей.');
        }
    }
    get days() {
        return this._days;
    }

    work() {
        this._days++;
    }
    addDays(amount) {
        if (amount > 0) {
            const today = new Date();
            const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

            if (this._days + amount <= lastDayOfMonth) {
                this._days += amount;
                console.log(`${this.getFullName()}.Отработано ${amount} дней.`);
            } else {
                console.error('Ошибка: Превышено максимальное количество отработанных дней в текущем месяце.');
            }
        } else {
            console.error('Ошибка: Количество отработанных дней должно быть больше 0.');
        }
    }
    getSalary() {
        const today = new Date();
        const birthdayMonth = new Date(this._birthday).getMonth();

        let salary = 0;

        if (today.getMonth() === birthdayMonth) {
            salary = this._rate * this._days * 1.1;
        } else {
            salary = this._rate * this._days;
        }
        return Math.floor(salary);
    }
    static whoWorkedMore(...workers) {
        let maxDays = 0;
        let bestWorkers = [];

        workers.forEach(worker => {
            if (worker.days > maxDays) {
                maxDays = worker.days;
                bestWorkers = [worker];
            } else if (worker.days === maxDays) {
                bestWorkers.push(worker);
            }
        });

        if (bestWorkers.length === 1) {
            console.log(`Больше всех отработал ${bestWorkers[0].getFullName()}. Количество рабочих дней - ${maxDays}.`);
        } else if (bestWorkers.length > 1) {
            console.log('Несколько работников отработали одинаковое количество дней:');
            bestWorkers.forEach(worker => {
                console.log(`${worker.getFullName()}. Количество рабочих дней - ${maxDays}.`);
            });
        } else {
            console.log('Нет данных о работниках.');
        }
    }
    static whoIsYounger(...workers) {
        let minAge = Infinity;
        let youngestWorkers = [];

        workers.forEach(worker => {
            const age = parseInt(worker.getAge().split(' ')[0]);

            if (age < minAge) {
                minAge = age;
                youngestWorkers = [worker];
            } else if (age === minAge) {
                youngestWorkers.push(worker);
            }
        });

        if (youngestWorkers.length === 1) {
            console.log(`Самый младший работник: ${youngestWorkers[0].getFullName()} ${youngestWorkers[0].getAge()}.`);
        } else if (youngestWorkers.length > 1) {
            console.log('Несколько работников с одинаковым наименьшим возрастом:');
            youngestWorkers.forEach(worker => {
                console.log(`${worker.getFullName()} ${worker.getAge()}.`);
            });
        } else {
            console.log('Нет данных о работниках.');
        }
    }

}