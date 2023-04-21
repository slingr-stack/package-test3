exports.aPlusB = function (a, b) {
    return a+b;
}

exports.otherTest = function () {
    return "other test";
}

exports.configTest = function () {
    return config.get("webhooksSharedKey");
}
