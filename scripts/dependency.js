exports.getDepMsg = function(){
    var response = dependencies.nesteddep1.foo2.getMessage();
    return response;
}

exports.setDepMsg = function(value){
    dependencies.nesteddep1.config.set('message', value);
    return "Message configured on dependency with value:" + value
}

exports.callDepService = function () {
    dependencies.nesteddep1.foo2.serviceTest()
}