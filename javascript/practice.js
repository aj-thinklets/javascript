//Revising arrays


var cars = ["audi", "mercides", "vw", "ferrari", "chervolet"];
console.log("Cars: ", cars);


//Properties

//1 Length
console.log("Brands: ", cars.length);
//2 Reverse the array
console.log("Reverse: ", cars.reverse());
//3 Add new items to front
cars.unshift("tata");
console.log("After pop: ", cars);

//4 Add new item to end of the array
cars.push("maruti");
console.log("Push: ", cars);

//5 Remove first item
cars.shift();
console.log("Shift: ", cars);

//Remove last item
cars.pop();
console.log("Pop: ", cars);

//Remove specified elements using splice
cars.splice(1, 2); //Start from poistion 1 and remove 2 elements
console.log("Splice 1 2: ", cars);

//Copy enter array to new
const newCars =  cars.slice();
console.log("New array: ", newCars);

//Join
cars.join("&& ");
console.log("Join method: ", cars);













