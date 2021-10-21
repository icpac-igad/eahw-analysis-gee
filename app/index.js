const config = require("config");
const ee = require("@google/earthengine");

var GEE_PRIVATE_KEY = require("./privatekey.json");

require("dotenv").config({ silent: true }); // NOTE: make sure dot env is loaded first

const logger = require("logger");

// authenticate google earth engine
ee.data.authenticateViaPrivateKey(
  GEE_PRIVATE_KEY,
  function () {
    // initialize ee
    ee.initialize();

    // run app
    require("app")().then(
      () => {
        logger.info("Server running");
      },
      (err) => {
        logger.error("Error running server", err);
      }
    );
  },
  function (e) {
    console.log(e);
  }
);
