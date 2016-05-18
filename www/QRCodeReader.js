/**
*
*/
var exec = require("cordova/exec");

/**
*
*/
function QRCodeReader() {
};

QRCodeReader.prototype.scan = function (successCallback, errorCallback) {
	exec(successCallback, errorCallback, 'QRCodeReader', 'scan', []);
};

var QRCodeReader = new QRCodeReader();
module.exports = QRCodeReader;


