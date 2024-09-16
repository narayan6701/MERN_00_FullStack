let JSON_Data =
  '{"fact": "Cats have 30 teeth (12 incisors, 10 premolars, 4 canines, and 4 molars), while dogs have 42.","length": 183}';

let JS_Object = JSON.parse(JSON_Data);
console.log(JS_Object);
console.log(JS_Object.fact);

let student = {
  name: "Narayan",
  class: "mca",
  Admission: "2024M0141064",
};

let studentJSON = JSON.stringify(student);

console.log(studentJSON);
