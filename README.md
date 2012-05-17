ti-qrcode
=========

**ti-qrcode** is a QR code generator for Titanium Appcelerator. This is a WebView wrapper for the [Javascript QR code generator](http://code.google.com/p/jsqrencode/). 

Why another module?
-------------------

At the time of writing, there aren't any free implementation and works offline. Read more about it on my [blog](http://mickeyckm.com/free-qr-code-generator-on-titanium-appcelerator). 

Setup
-----

1. Copy the folder ``ti-qrcode`` to ``/Resources/path/to/library/``.
2. Edit ``/Resources/path/to/library/qrcode.html``.
3. Change '/libs/qrcode/qrcode.html' in ``var QRCODE_HTML_PATH = '/libs/qrcode/qrcode.html';`` to '/path/to/library/qrcode/qrcode.html'.
4. Done.

Getting started
---------------

Initial environment

    var window = Ti.UI.createWindow({
        title: 'QRCode sample'
    });

Simple implementation with default options

    var QRCodeView = require('libs/qrcode/qrcode');
    var qrCodeView = new QRCodeView('Hello World!');
    window.add(qrCodeView);

Implementation with different ecclevel

    var QRCodeView = require('libs/qrcode/qrcode');
    var qrCodeView = new QRCodeView('Hello World!', 2);
    window.add(qrCodeView);

Implementation with options

    var QRCodeView = require('libs/qrcode/qrcode');
    var qrCodeView = new QRCodeView('Hello World!', 1, {
        top: 20,
        height: 300,
        width: 300
    });
    window.add(qrCodeView);

License
-------

Copyright (c) [Mickey Cheong](http://mickeyckm.com). All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of [ti-qrcode](https://github.com/mickeyckm/ti-qrcode) nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

