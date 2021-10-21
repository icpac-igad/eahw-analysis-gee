const request = require("utils/request");

const GEOSTORE_API_URL =
  "https://eahazardswatch.icpac.net/eacw-api/v2/geostore";

class GeostoreService {
  static async get(geostoreId) {
    try {
      const geostore = await request
        .get(`${GEOSTORE_API_URL}/${geostoreId}`)
        .then((res) => res.data.data.attributes.geojson);
      return geostore;
    } catch (e) {
      return null;
    }
  }
}

module.exports = GeostoreService;
