import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer y36b1uBSdh87io2EFkAaPGL94Y0bG7Y7M59TCHF8xha4zWYuGoR_ZPP73uxppAcZZCDSZ1m1hUrnoD1I6bi3Fz3BFMRZ0szIkroy0Bm_8a2zoJJ71-SXpzS2bfu_XnYx",
  }
});
