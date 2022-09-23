#import <Foundation/Foundation.h>
#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import <GoogleMaps/GoogleMaps.h>

#import <Expo/Expo.h>

- (BOOL)application:(UIApplication *)application
didFinishLaunchingWithOptions:(NSDictionary
*)launchOptions
{
    [GMSServices provideAPIKey:@"AIzaSyBgQgoRF8aSwgLhhlPup8J1HWN9J95TO-A"];
}

@interface AppDelegate : EXAppDelegateWrapper <RCTBridgeDelegate>

@end
