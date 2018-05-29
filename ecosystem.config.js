module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'API',
      script    : 'app.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'root',
      host : '198.199.89.33',
      ref  : 'origin/master',
      repo : 'git@github.com:frankie95667/10g.git',
      path : '/root/10g/',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    // dev : {
    //   user : 'anthonyk2020@gmail.com',
    //   host : '127.0.0.1',
    //   ref  : 'origin/master',
    //   repo : 'git@github.com:frankie95667/10g.git',
    //   path : '/d/Documents/working/10g',
    //   'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
    //   env  : {
    //     NODE_ENV: 'dev'
    //   }
    // }
  }
};
