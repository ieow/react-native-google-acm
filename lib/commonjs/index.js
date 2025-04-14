"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signInWithGoogle = signInWithGoogle;
exports.signOut = signOut;
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
function signInWithGoogle(params) {
  return GoogleAcm.signInWithGoogle(params);
}
function signOut() {
  return GoogleAcm.signOut();
}
//# sourceMappingURL=index.js.map