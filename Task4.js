let data ={
    id : 1,
    name : "Munir",
    username : "Bruh",
    email : "senja@santai.com",
    address :
    {
        street : "jl. bahagia",
        suite : "lal, 123",
        city : "JNT",
        zipcode : "012934",
    },
    phone : "088-102-120-991",
    website : "sejahtera.com"
}

const tampilan = {...data,name:"Putu Raka",email:"jiwa@seraya.com",hoby:"Trevel"};
const {street: a, city: b} = data.address;

console.log(tampilan);
console.log(a, b);