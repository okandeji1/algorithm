// let startDate: any = obj.startDate
//   ? new Date(obj.startDate).setHours(0, 0, 0)
//   : new Date().setDate(new Date().getDate() - new Date().getDay()) -
//     7 * 24 * 60 * 60 * 1000;
// let endDate: any = obj.endDate
//   ? new Date(obj.endDate).setHours(23, 59, 59)
//   : new Date().setHours(23, 59, 59);

// startDate = new Date(startDate);
// endDate = new Date(endDate);
// console.log("start date", startDate);
// console.log("end date", endDate);

// const hash = obj.hash;

// const [hashValue, expires] = hash.split("-");
// // Check if expiry time has passed
// const now = Date.now();
// if (now > parseInt(expires)) {
//   return res.status(200).json({
//     status: false,
//     message: "OTP expired",
//   });
// }
// // Calculate new hash with the same key and the same algorithm
// const isValidOTP = await bcrypt.compare(obj.otp, hashValue);
// // Match the hashes
// if (!isValidOTP) {
//   return res.status(200).json({
//     status: false,
//     message: "OTP is not valid",
//   });
// }

// export const sendOTP = catchAsyncError(async (req, res) => {
//   // const tenantConnection = getConnection(req.query.tenant);
//   // const username = `${tenantConnection.name.toUpperCase()}_MOBIVATE_USERNAME`;
//   // const password = `${tenantConnection.name.toUpperCase()}_MOBIVATE_PASSWORD`;
//   // const MOBIVATE_USERNAME = config[username];
//   // const MOBIVATE_PASSWORD = config[password];

//   const obj = req.body;
//   /**
//    * Generate a token and send to user by using Mobivate integration
//    * We will first verify if the user number is valid on any network then send back a response
//    *
//    */

//   // const { data: verifyNumber } = await axios({
//   //   method: 'get',
//   //   url: `https://hlr.mobivatebulksms.com/?lookup=${obj}&username=${MOBIVATE_USERNAME}&password=${MOBIVATE_PASSWORD}`,
//   //   headers: {
//   //     'Content-Type': 'application/json',
//   //   },
//   // });

//   const time = 5 * 60 * 1000; //5 Minutes in miliseconds
//   const expires = Date.now() + time; //timestamp to 5 minutes in the future
//   const otp = otpGenerator.generate(6, {
//     alphabets: false,
//     upperCase: false,
//     specialChars: false,
//   });
//   const hash = await bcrypt.hash(otp, 10); // creating hash of the data
//   const fullHash = `${hash}-${expires}`; // Hash.expires, format to send to the user
//   // return fullHash;
//   const data = {
//     hash: fullHash,
//     mobileNumber: obj,
//     otp: otp,
//   };
//   return res.status(200).json({
//     status: true,
//     message: "operation executed successfully",
//     data: data,
//   });
// });