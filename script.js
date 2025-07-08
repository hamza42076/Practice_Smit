let userInut = prompt("Enter your name") ;
let length = userInut.length;
for (let i = 0; i < length; i++) {
    if(userInut.slice(i,i+2) === " "){
        alert("No double space allowed")
        break;
    }
}

var age = 25;