exports.t3 = function (a) {

    return "test3";
}

exports.something = function () {
    return "something3";
}

exports.doublenested = function () {
    var value = "Dependency X\n" + dependencies.packagetestt.othertest2.nestedmethod();
    return value;
}
