const targetArray=[1,2,3,6,7];
const targetS=8;
const answer=(targetArray,targetS) => {
	let newArray=[];
	for (let i=0; i < targetArray.length; i++) {
		console.log('i',i)
		for (j=i+1;j < targetArray.length; j++) {
			console.log('j',j)
			if (targetArray[i] + targetArray [j] === targetS)
				return newArray=[targetArray[i],targetArray[j]];
		}

	}
}
result=answer(targetArray,targetS);
console.log(result);