function fn() {

  var config = {
    baseUrl: 'https://serverest.dev'
  };

  // obtener token automáticamente
  var auth = karate.call('classpath:helpers/token.feature', { baseUrl: config.baseUrl })

  config.token = auth.token;

  return config;
}
