function one() {
  return 1;
}

function two() {
  return one() + one();
}

function three() {
  let Ans = two() + one();
  console.log(Ans);
}

three();
