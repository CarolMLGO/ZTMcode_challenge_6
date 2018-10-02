
function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return "rgb"+ "("+ r + "," + g + "," + b + ")";
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

result=rgbToHex(255,255,255)

const autoColorSwith=(inputcolor)=>{
	let result=[];
	if (inputcolor.includes("#")) {
		inputcolor=inputcolor.replace("#","");
		console.log(inputcolor)
		result = hexToRgb(inputcolor);

	}
	else if (inputcolor.includes("rgb")){
		inputcolor=inputcolor.replace("rgb","").replace("(","").replace(")","").split(",");
		let r=parseInt(inputcolor[0])
		let g=parseInt(inputcolor[1])
		let b=parseInt(inputcolor[2])
		result=rgbToHex(r,g,b)
	}
	return result
}

result=autoColorSwith("rgb(255,255,255)")
console.log(result)

