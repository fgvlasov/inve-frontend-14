module.exports = {
  apps: [
    {
      name: "invert-frontend",
      cwd: "/var/www/test_fr_inve_usr/data/www/test-fr.invert.studio",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3001",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      autorestart: true,
      max_restarts: 10,
      min_uptime: 5000,
      time: true,
    },
  ],
};
