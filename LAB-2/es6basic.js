var name = " "; //global varriabel
sname = "sap";  //same declare by var

rname = "yuth";
console.log(rname);

{
    let rname = "pom";
    console.log(rname);
}

console.log(rname);

{
    const number = 10;
   // number = number+number;
}

//traditional function
function add(a,b) {
    let c= a+b;
    return c;
}

const addES5 = function (a,b) {
    return a+b;
};

const addES6 = (a,b) => a + b;

const result = addES6 (5,8)
console.log(result);

