import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-google-acm' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const GoogleAcm = NativeModules.GoogleAcm
  ? NativeModules.GoogleAcm
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export type GoogleSignInParams = {
  nonce: string;
  serverClientId: string;
  autoSelectEnabled: boolean;
};

export type GoogleCredential = {
  type: 'google-signin';
  id: string;
  idToken: string;
  displayName?: string;
  familyName?: string;
  givenName?: string;
  profilePicture?: string;
  phoneNumber?: string;
};

export function multiply(a: number, b: number): Promise<number> {
  return GoogleAcm.multiply(a, b);
}

export function signInWithGoogle(
  params: GoogleSignInParams
): Promise<GoogleCredential> {
  return GoogleAcm.signInWithGoogle(params);
}

export function signOut(): Promise<void> {
  return GoogleAcm.signOut();
}
