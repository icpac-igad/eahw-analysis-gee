module.exports = {
  logger: {
    name: "eahw-analysis-gee",
    level: "debug",
    toFile: false,
    dirLogFile: null,
  },
  gee: {
    service_account: process.env.GEE_ACCOUNT,
  },
};
