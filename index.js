function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    return function ANamedFunction(){};
}

function returnsAnAnonymousFunction() {
    return function () {};
}