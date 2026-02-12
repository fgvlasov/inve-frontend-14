module.exports = {
  apps: [
    {
      name: "invert-frontend",
      cwd: "/var/www/test_fr_inve_usr/data/www/test-fr.invert.studio",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3001",
      //Change port to 3002 for Next project on Next.js, and change in manual nginx config
      env: {
        NODE_ENV: "production",
        PORT: 3001,
        STRAPI_URL: "https://inv-admin.ptzsite.ru",
        NEXT_PUBLIC_STRAPI_URL: "https://inv-admin.ptzsite.ru",
      },
      autorestart: true,
      max_restarts: 10,
      min_uptime: 5000,
      time: true,
    },
  ],
};
