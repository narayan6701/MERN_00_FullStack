let data = {
    name:"narayan",
    email:"narayan.6701@gmail.com",
    pword:"abcd"
};

let data_copy = {...data, id:101};

console.log(data_copy);

let arr = [1,2,3,4];

let new_data = {...arr,...data_copy};

console.log(new_data);