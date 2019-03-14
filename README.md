# Raptoreum Message Verification and Signing for rtmcore




rtmcore-message adds support for verifying and signing raptoreum messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main rtmcore repo](https://github.com/Raptor3um/rtmcore) for more information.

## Getting Started

```sh
npm install rtmcore-message
```

```sh
bower install rtmcore-message
```

To sign a message:

```javascript
var rtmcore = require('rtmcore-lib');
var Message = require('rtmcore-message');

var privateKey = rtmcore.PrivateKey.fromWIF('5K2DxqJ9kLFL3hF3KEWDftAig3TyAXenDxpr27PaLBieuSFo5PQ');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'RGRsG7UQc3AmvdrhPDngpPjvTNhJQFeHYj';
var signature = 'G5cFMHRysjcxkBJ7mol8l3cjPbFQFQ68fNqTGehTO9/cLNUaflt3gQT//yAUp5fqWF0snDlZYkXJoooazBicRTg=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/Raptor3um/rtmcore/blob/master/CONTRIBUTING.md) on the main rtmcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/Raptor3um/rtmcore/blob/master/LICENSE).
