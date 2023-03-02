
let result = document.getElementById("result")
// console.log("helloo")

// console.log(age)

// console.log(typeof(age))


function checkAge(){
    let age = document.getElementById("age").value;
        console.log(age)
    if(age <= 18){
        // document.getElementById("result").innerHTML  = "Not eligible to vote" ;

        alert("You are note eligible");
        // console.log("you kiddo")
     }
     else{
        // document.getElementById("result").innerHTML  = "Eligible to vote" ;
        alert("You are eligible");

        // result = "Eligible to vote" ;
        // console.log("you grandpa")
        // console.log(typeof(age))

     }
}

