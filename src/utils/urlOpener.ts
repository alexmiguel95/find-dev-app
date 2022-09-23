import { Linking, Platform } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default async function urlOpener(url: any, redirectURL: any) {
  const { type, url: newURL }: any = await WebBrowser.openAuthSessionAsync(
    url,
    redirectURL
  );

  if (type === 'success' && Platform.OS === 'ios') {
    WebBrowser.dismissBrowser();
    return Linking.openURL(newURL)
  }
}