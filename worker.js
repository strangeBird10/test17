import {Person} from "./person.js";

export class Worker extends Person {
    #rate;
    #days;
    constructor(firstName, lastName, birthday, position) {
        super(firstName, lastName, birthday);
        this.position = position;
        this.#rate = 1000;
        this.#days = 0;
    }

    get rate() {
        return this.#rate;
    }
    set rate(newRate) {
        if (newRate < 1000) {
            console.error('Ошибка: Ставка за день работы не может быть менее 1000 рублей.');
        }
        this.#rate = newRate;
    }

    get days() {
        return this.#days;
    }
    set days(newDays) {
        this.#days = newDays;
    }

    work() {
        this.days++;
    }
    getLastDayOfMonth() {
        const today = new Date();
        return new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    }

    addDays(amount) {
        if (amount <= 0) {
            console.error('Ошибка: Количество отработанных дней должно быть больше 0.');
            return;
        }

        const lastDayOfMonth = this.getLastDayOfMonth();

        if (this.days + amount > lastDayOfMonth) {
            console.error('Ошибка: Превышено максимальное количество отработанных дней в текущем месяце.');
            return;
        }

        this.days += amount;
        console.log(`${this.getFullName()}. Отработано ${amount} дней.`);
    }

    isThisMonthBirthday() {
        const today = new Date();
        const birthdayMonth = new Date(this.birthday).getMonth();
        return birthdayMonth === today.getMonth();
    }

    getSalary() {
        const salary = this.rate * this.days;
        const bonus = salary * 1.1;

        if (this.isThisMonthBirthday()) {
            return this.prepareSalary(salary + bonus);
        }

        return this.prepareSalary(salary);
    }

    prepareSalary(salary) {
        return Math.floor(salary);
    }

    static whoWorkedMore(...workers) {
        let maxDays = Math.max(...workers.map(worker => worker.days));
        let bestWorkers = workers.filter(worker => worker.days === maxDays);

        const message = bestWorkers.length === 1
            ? `Больше всех отработал ${bestWorkers[0].getFullName()}. Количество рабочих дней - ${maxDays}.`
            : bestWorkers.length > 1
                ? `Несколько работников отработали одинаковое количество дней:\n${bestWorkers.map(worker => `${worker.getFullName()}. Количество рабочих дней - ${maxDays}.`).join('\n')}`
                : 'Нет данных о работниках.';

        console.log(message);
    }
        static whoIsYounger(...workers) {
            let minAge = Math.min(...workers.map(worker => {
                const age = parseInt(worker.getAge().split(' ')[0]);
                return age;
            }));

            let youngestWorkers = workers.filter(worker => {
                const age = parseInt(worker.getAge().split(' ')[0]);
                return age === minAge;
            });

            const message = youngestWorkers.length === 1
                ? `Самый младший работник: ${youngestWorkers[0].getFullName()} ${youngestWorkers[0].getAge()}.`
                : youngestWorkers.length > 1
                    ? `Несколько работников с одинаковым наименьшим возрастом:\n${youngestWorkers.map(worker => `${worker.getFullName()} ${worker.getAge()}.`).join('\n')}`
                    : 'Нет данных о работниках.';

            console.log(message);
        }

}










