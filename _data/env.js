require("dotenv").config();

let todaysDate = new Date();
let _YEAR = todaysDate.getFullYear();

module.exports = {
  YEAR: _YEAR,
  APIURL: process.env.APIURL,
  ADMINURL: process.env.ADMINURL,
  FRONTENDCODEURL: "https://github.com/OrbitLabsDAO/buildingblock_frontend/",
  ADMINCODEURL: "https://github.com/OrbitLabsDAO/buildingblock_admin",
  CROWDFUNDCODEURL: "https://github.com/OrbitLabsDAO/buildingblock-crowdfund",
  PAYMENTCODEURL: "https://github.com/OrbitLabsDAO/paymev2",
  CROWDFUNDDEMOURL: "https://crowdfund.buildblock.app",
  ADMINDEMOURL: "https://admin.buildblock.app",
  PAYMENTDEMOURL: "",
};
