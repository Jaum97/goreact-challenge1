const sum = (...params) => params.reduce((num, next) => num + next);

console.log(sum(1, 2, 3));
