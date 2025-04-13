@objc(GoogleAcm)
class GoogleAcm: NSObject {

  @objc(signInWithGoogle:withResolver:withRejecter:)
  func signInWithGoogle(params: NSDictionary, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    reject("ERROR", "Not Supported", nil)
  }

  @objc(signOut:withResolver:withRejecter:)
  func signOut( a: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    reject("ERROR", "Not Supported", nil)
  }
}
