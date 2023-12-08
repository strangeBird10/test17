import {Worker} from "./worker.js";

const persons = [
    ['Алексей', 'Иванов', '12-03-1990', 'Developer'],
    ['Александр', 'Петров', '05-20-1985', 'Designer'],
    ['Иван', 'Воронин', '09-10-1995', 'Manager'],
    ['Алиса', 'Тайнова', '03-08-1988', 'Engineer'],
    ['Ирина', 'Мягкова', '12-03-1992', 'Analyst'],
];

const workers = persons.map (person => new Worker (...person));

const [worker1, worker2, worker3, worker4,worker5] = workers

worker1.rate = 1300;
worker2.rate = 1600;
worker4.rate = 1100;

worker1.addDays(5);
worker2.addDays(-2);
worker3.addDays(10);
worker4.addDays(20);
worker5.addDays(50);

workers.forEach(worker => {
    console.log(`${worker.getFullName()} - ${worker.getSalary()} рублей`);
});

Worker.whoWorkedMore(...workers);

Worker.whoIsYounger(...workers);