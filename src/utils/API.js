import axios from "axios";

const BASEURL = "https://randomuser.me/api/";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
