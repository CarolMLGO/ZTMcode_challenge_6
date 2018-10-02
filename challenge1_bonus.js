let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];
const numArray=[];
const stringArray=[];
let newArray=[];

mixedNumericArray.sort().forEach((num)=>{
	if (typeof num === "number"){
		numArray.push(num);
	}
	else{
		stringArray.push(num);
	}
})

console.log("numArray",numArray.sort((a,b) => a-b));
console.log("stringArray",stringArray.sort((a,b) => a-b));
newArray=[numArray,stringArray];
console.log("newArray",newArray);