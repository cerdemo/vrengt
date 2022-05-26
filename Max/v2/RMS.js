//RMS calculation 
// y[t] = sqrt(sum(x[t - n]^2) * n^-1)

var avgNum = 100;
var buffer = new Array();

function fillBuffer(input) {
	buffer.unshift(input);
	if (buffer.length > avgNum) {
		buffer.pop();
	}
}

function rms(input) {
	var out = 0;
	fillBuffer(input);
	for (var i = 0; i < buffer.length; i++) {
		out = out + Math.pow(buffer[i],2);
	}
	out = Math.sqrt(out * Math.pow(buffer.length, -1));
	outlet(0,out);
}

//debug
function bang() {
post(buffer);
post();
}
