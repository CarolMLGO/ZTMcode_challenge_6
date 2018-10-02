const targetArray=[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]]

const sortedArray=(targetArray)=>{
	let newArray=[];
	let trackArray=[];
	targetArray.sort((a,b)=> a-b);
	targetArray.forEach ((value,index)=>{
		if (value === targetArray[index+1]){
			trackArray.push(value);
		}
		else if (value === targetArray[index-1]){
			trackArray.push(value);
			newArray.push(trackArray);
			trackArray=[];
		}
		else {
			newArray.push(value);
		}
	}
	)
	return newArray;
}
result=sortedArray(targetArray);
console.log(result);