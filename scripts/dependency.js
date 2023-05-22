exports.getDepMsg = function(){
    var response = dependencies.nesteddep2.foo2.getMessage();
    return response;
}

exports.setDepMsg = function(value){
    dependencies.nesteddep2.config.set('message', value);
    return "Message configured on dependency with value:" + value
}

exports.callDepService = function () {
    dependencies.nesteddep2.foo2.serviceTest()
}