var space = document.getElementById('space');

function insert(num) {
    "use strict";
    space.value = space.value + num;
}

function equal() {
    "use strict";
    var exp = space.value;
    if (exp) {
        space.value = eval(exp);
    }
}

function clean() {
    "use strict";
    space.value = "";
}

function back() {
    "use strict";
    var exp = space.value;
    space.value = exp.substr(0, exp.length - 1);
}
