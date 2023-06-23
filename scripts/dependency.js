exports.getDepMsg = function(){
    var response = dependencies.nesteddep2.foo2.getMessage();
    return response;
}

exports.setDepMsg = function(value){
    dependencies.nesteddep2.config.set('message', value);
    return "Message configured on dependency with value:" + value
}

exports.callDepService = function () {
    return dependencies.nesteddep2.foo2.serviceTest()
}
exports.function1 = function () {
    sys.logs.error('function 1');
    sys.ui.sendMessage({
        scope: 'uiService:nesteddep1.oAuth',
        name: 'function1',
        config: {
            tenantId: config.get("tenantId"),
            clientId: config.get("clientId"),
            clientSecret: config.get("clientSecret"),
            redirect_uri: config.get("oauthCallback"),
            scope: config.get("scope"),
        },
        callbacks: {
            userConnected: function (originalMessage, callbackData) {
                var config = callbackData;
                sys.logs.error('Code: ' + JSON.stringify(config));

            },
            fail: function (originalMessage, callbackData) {
                sys.logs.error('Fail callback')
            }
        }
    });
}