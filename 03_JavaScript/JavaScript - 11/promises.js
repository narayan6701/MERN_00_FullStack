// This is a callback hell for example in this code we will be avoiding this callback hell by using promises.

// function save2DB(data, success, failure) {
//   let netSpeed = Math.floor(Math.random() * 10) + 1;

//   if (netSpeed > 4) {
//     success(data);
//   } else {
//     failure();
//   }
// }

// save2DB(
//   "narayan",
//   (data) => {
//     console.log("Your Data has been saved successfully: ", data);
//     save2DB(
//       "bhardwaj",
//       () => {
//         console.log("Data2 saved");
//         save2DB(
//           "bapuji",
//           () => {
//             console.log("data 3 saved");
//           },
//           () => {
//             console.log("failed to save data 3");
//           }
//         );
//       },
//       () => {
//         console.log("failed to save data2");
//       }
//     );
//   },
//   () => {
//     console.log(`Weak Connection`);
//   }
// );

// declaration of a promise

function save2DB(data) {
  return new Promise((resolve, reject) => {
    let netSpeed = Math.floor(Math.random() * 10) + 1;
    if (netSpeed > 4) {
      resolve("success: data saved");
    } else {
      reject("failure: weak connection");
    }
  });
}

// request is a promise object, because save2DB function is returning a promise.

// let request = save2DB("narayan");
// console.log(request);

// request
//   .then(() => {
//     console.log("promise was resolved");
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

// more compact way of using then and catch

// save2DB("narayan")
//   .then(() => {
//     console.log("data 1 saved: promise was resolved");
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

//promise chaining - the compact way

// save2DB("narayan")
//   .then(() => {
//     console.log("data1 saved");
//     return save2DB("bhardwaj");
//   })
//   .then(() => {
//     console.log("data2 saved");
//     return save2DB("bapuji");
//   })
//   .then(() => {
//     console.log("data3 saved");
//   })
//   .catch(() => {
//     console.log("weak connection");
//   });

//promise chaining - the nested way

// save2DB("narayan").then(() => {
//   console.log("data1 saved");
//   save2DB("bhardwaj").then(() => {
//     console.log("data2 saved");
//     save2DB("bapuji").then(() => {
//       console.log("data3 saved");
//     });
//   });
// });

// result & error

save2DB("narayan")
  .then((result) => {
    console.log("data1 saved");
    console.log("result of promise", result);
    return save2DB("bhardwaj");
  })
  .then((result) => {
    console.log("data2 saved");
    console.log("result of promise", result);
    return save2DB("bapuji");
  })
  .then((result) => {
    console.log("data3 saved");
    console.log("result of promise", result);
  })
  .catch((error) => {
    console.log("weak connection");
    console.log("erro of promise", error);
  });
