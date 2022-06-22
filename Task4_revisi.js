let data ={
    id : 1,
    name : "Lianne Graham",
    username : "Bret",
    email : "Sincere@april.biz",
    address :
    {
        street : "Kulas Light",
        suite : "Apt, 556",
        city : "Gwenborought",
        zipcode : "92998-3874",
    },
    phone : "1-770-736-8031, x56442",
    website : "hildegard.org"
}

const tampilan = {...data,name:"Putu Raka",email:"jiwa@seraya.com",hoby:"Trevel"};
const {street: a, city: b} = data.address;

console.log(tampilan);
console.log("jalan : "+ a,"\nKota : "+ b);