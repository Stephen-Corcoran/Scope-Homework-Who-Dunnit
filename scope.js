var personName = "John"

var secretsFunction = function(){
    var pinCode =[0, 0, 0, 0]
    console.log("pinCode inside secretsFunction:", pinCode);
    console.log("name inside function:", personName)
}

secretsFunction();
// console.log("pinCode outside secretsFunction", pinCode)