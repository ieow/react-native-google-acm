@objc(GoogleAcm)
class GoogleAcm: NSObject {

  @objc(multiply:withB:withResolver:withRejecter:)
  func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    resolve(a*b)
  }


  @objc(signInWithGoogle:withB:withResolver:withRejecter:)
  func signInWithGoogle(params: NSDictionary, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {

    guard let rootViewController = UIApplication.shared.windows.first?.rootViewController else {
      print("There is no root view controller!")
      return
    }
    let manualNonce = UUID().uuidString

    GIDSignIn.sharedInstance.signIn(
      withPresenting: rootViewController,
      hint: nil,
      additionalScopes: nil,
      nonce: manualNonce
    ) { signInResult, error in
      guard let signInResult = signInResult else {
        print("Error! \(String(describing: error))")
        return
      }

      // Per OpenID Connect Core section 3.1.3.7, rule #11, compare returned nonce to manual
      guard let idToken = signInResult.user.idToken?.tokenString,
            let returnedNonce = self.decodeNonce(fromJWT: idToken),
            returnedNonce == manualNonce else {
        // Assert a failure for convenience so that integration tests with this sample app fail upon
        // `nonce` mismatch
        assertionFailure("ERROR: Returned nonce doesn't match manual nonce!")
        return
      }
      resolve(idToken)
    }
  }

  @objc(signOut:withResolver:withRejecter:)
  func signOut(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    resolve(nil)
  }

}
