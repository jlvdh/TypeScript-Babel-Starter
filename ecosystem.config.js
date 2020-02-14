module.exports = {
  apps: [{
    name: 'API',
    script: 'lib/bin/www.js',
    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    interpreter_args: '-r source-map-support/register',
    instances: 1,
    autorestart: true,
    watch: ['lib'],
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
}
