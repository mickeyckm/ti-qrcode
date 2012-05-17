/*
Copyright (c) Mickey Cheong (http://mickeyckm.com). All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
list of conditions and the following disclaimer.
    
2. Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation and/or
other materials provided with the distribution.

3. Neither the name of ti-qrcode (https://github.com/mickeyckm/ti-qrcode) nor the
names of its contributors may be used to endorse or promote products derived from
this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.
*/

var QRCODE_HTML_PATH = '/libs/qrcode/qrcode.html';

var QRCodeView = function(text, ecclevel, options) {
	
	if (ecclevel === undefined) {
		ecclevel = 1;
	}

	if (options === undefined) {
		options = {
			height: 200,
			width: 200,
			url: QRCODE_HTML_PATH
		};
	}
	else {
		if (options.height === undefined)  options.height = 200;
		if (options.width === undefined) options.width = 200;
		if (options.url === undefined) options.url = QRCODE_HTML_PATH;
	}
	
	var self = Ti.UI.createWebView(options);
	Ti.App.addEventListener('generateQRcode', function(){
		self.evalJS("doqr(unescape('" + text + "'), " + ecclevel + ");");
	});
	
	return self;
};

module.exports = QRCodeView;
