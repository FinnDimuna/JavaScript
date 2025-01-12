function sum(a) {
    function sumTwo(b) {
        return a + b;
    };


    return sumTwo;
};

x1 = +prompt("x1", );
x2 = +prompt("x2", );

alert(sum(x1)(x2));