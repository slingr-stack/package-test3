exports.t3 = function (a) {

    return "test3";
}

exports.something = function () {
    return "something3";
}

exports.doublenested = function () {
    var value = dependencies.packageTestt.otherTest2.nestedmethod();
    return value;
}
