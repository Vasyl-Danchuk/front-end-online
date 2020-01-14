function findX (a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    if (D > 0) {
        var x1 = (-b + Math.sqrt(D)) / (2 * a);
        var x2 = (-b - Math.sqrt(D)) / (2 * a);

        console.log('-- x1 = ', x1);
        console.log('-- x2 = ', x2);
    }
    else if (D === 0) {
        x1 = -b / (2 * a);
        console.log('-- x1 = ', x1);
    }
    else {
        console.log('-- рівняння дійсних коренів немає');
    }
}

var a = prompt('Введіть знчення а:');
var b = prompt('Введіть знчення b:');
var c = prompt('Введіть знчення c:');

findX (a, b, c);

