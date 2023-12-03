import {Worker} from "./worker.js";

const workers = [
    new Worker('Алексей', 'Иванов', '12-03-1990', 'Developer'),
    new Worker('Александр', 'Петров', '05-20-1985', 'Designer'),
    new Worker('Иван', 'Воронин', '09-10-1995', 'Manager'),
    new Worker('Алиса', 'Тайнова', '03-08-1988', 'Engineer'),
    new Worker('Ирина', 'Мягкова', '12-03-1992', 'Analyst'),
];

// workers.forEach((worker, index) => {
//     if (index % 2 === 0) worker.rate = 1300;
//     worker.addDays(20 + index);
// });
workers[0].rate = 1300;
workers[2].rate = 1600;
workers[4].rate = 1100;

workers[0].addDays(5);
workers[1].addDays(-2);
workers[2].addDays(10);
workers[3].addDays(20);
workers[4].addDays(50);

workers.forEach(worker => {
    console.log(`${worker.getFullName()} - ${worker.getSalary()} рублей`);
});

 Worker.whoWorkedMore(...workers);

 Worker.whoIsYounger(...workers);