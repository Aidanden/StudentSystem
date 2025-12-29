// src/config/app.config.js centralizes configuration values for easy reuse.

// Pull values from process.env. They are set by dotenv in server.js.
import "dotenv/config";

const getAppConfig = () => ({
  appName: process.env.APP_NAME || 'StudentSystem',
  port: process.env.PORT || 7000
});

module.exports = {
  getAppConfig
};
