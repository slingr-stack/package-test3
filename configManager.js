let configurationManager = function (config) {
  let c = dependencies.nesteddep2.config.get();
  c.message =  config.message
  dependencies.nesteddep2.config.set(c);
}
