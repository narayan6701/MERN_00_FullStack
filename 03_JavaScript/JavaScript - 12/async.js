// async keyword is used to make a function asynchronous and async function will always return a promise whether we write return statement or not.

// When the function will get succesfully executed then the promise state will be fulfilled, but whenever there will be a error, the state of the promise will be rejected.

// We can use throw keyword inside an asynchronous function, to explicitly get an error and make the state of promise as rejected.

async function greet() {
  throw "function rejected";
  return "hello";
}

let say = async function (name = "narayan") {
  console.log(name);
};

say();

let hari = async () => {
  ab.ac;
  return 5;
};

// then and catch can also be used here as async keyword is making the function asynchronous.

hari()
  .then((result) => {
    console.log("promise was resolved:", result);
  })
  .catch((error) => {
    console.log("promise was rejected:", error);
  });
