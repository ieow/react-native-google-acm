"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiply = multiply;
exports.signInWithGoogle = signInWithGoogle;
exports.signOut = signOut;
exports.testCrypto = testCrypto;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package 'react-native-google-acm' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const GoogleAcm = _reactNative.NativeModules.GoogleAcm ? _reactNative.NativeModules.GoogleAcm : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
function multiply(a, b) {
  return GoogleAcm.multiply(a, b);
}
function signInWithGoogle(params) {
  return GoogleAcm.signInWithGoogle(params);
}
function signOut() {
  return GoogleAcm.signOut();
}
function testCrypto(hashInput, Crypto) {
  let start = global.performance.now();
  let crypto = Crypto || global.crypto;
  crypto.getRandomValues(new Uint8Array(10));
  console.log('=============random values time==============', performance.now() - start);
  start = global.performance.now();
  crypto.createHash('sha256').update(hashInput).digest('hex');
  console.log('=============hash time==============', performance.now() - start);
}
//# sourceMappingURL=index.js.map