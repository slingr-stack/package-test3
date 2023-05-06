exports.packageName = function () {
    return "nested-dep1";
}

exports.nested1 = function () {
    var versionResponse = "Version response: " + dependencies.versionTest.versionLib.versionValue();
    var dependencyResponse = "Dependency response: " + dependencies.nesteddep2.foo.nested2()
    return "{{From package [nested-dep1] |\n " + dependencyResponse + " |\n " + versionResponse + "}}";
}
