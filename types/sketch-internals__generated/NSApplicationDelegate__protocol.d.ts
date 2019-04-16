interface INSApplicationDelegate {
  applicationShouldTerminate(sender: NSApplication): NSApplicationTerminateReply;
  application_openURLs(application: NSApplication, urls: NSArray<any> | any[]): void;
  application_openFile(sender: NSApplication, filename: NSString | string): boolean;
  application_openFiles(sender: NSApplication, filenames: NSArray<any> | any[]): void;
  application_openTempFile(sender: NSApplication, filename: NSString | string): boolean;
  applicationShouldOpenUntitledFile(sender: NSApplication): boolean;
  applicationOpenUntitledFile(sender: NSApplication): boolean;
  application_openFileWithoutUI(sender: any, filename: NSString | string): boolean;
  application_printFile(sender: NSApplication, filename: NSString | string): boolean;
  application_printFiles_withSettings_showPrintPanels(application: NSApplication, fileNames: NSArray<any> | any[], printSettings: NSDictionary<any, any> | {[key: string]: any}, showPrintPanels: boolean): NSApplicationPrintReply;
  applicationShouldTerminateAfterLastWindowClosed(sender: NSApplication): boolean;
  applicationShouldHandleReopen_hasVisibleWindows(sender: NSApplication, flag: boolean): boolean;
  applicationDockMenu(sender: NSApplication): NSMenu;
  application_willPresentError(application: NSApplication, error: NSError): NSError;
  application_didRegisterForRemoteNotificationsWithDeviceToken(application: NSApplication, deviceToken: NSData): void;
  application_didFailToRegisterForRemoteNotificationsWithError(application: NSApplication, error: NSError): void;
  application_didReceiveRemoteNotification(application: NSApplication, userInfo: NSDictionary<any, any> | {[key: string]: any}): void;
  application_willEncodeRestorableState(app: NSApplication, coder: NSCoder): void;
  application_didDecodeRestorableState(app: NSApplication, coder: NSCoder): void;
  application_willContinueUserActivityWithType(application: NSApplication, userActivityType: NSString | string): boolean;
  application_continueUserActivity_restorationHandler(application: NSApplication, userActivity: NSUserActivity, restorationHandler: Block): boolean;
  application_didFailToContinueUserActivityWithType_error(application: NSApplication, userActivityType: NSString | string, error: NSError): void;
  application_didUpdateUserActivity(application: NSApplication, userActivity: NSUserActivity): void;
  application_userDidAcceptCloudKitShareWithMetadata(application: NSApplication, metadata: CKShareMetadata): void;
  application_delegateHandlesKey(sender: NSApplication, key: NSString | string): boolean;
  applicationWillFinishLaunching(notification: NSNotification): void;
  applicationDidFinishLaunching(notification: NSNotification): void;
  applicationWillHide(notification: NSNotification): void;
  applicationDidHide(notification: NSNotification): void;
  applicationWillUnhide(notification: NSNotification): void;
  applicationDidUnhide(notification: NSNotification): void;
  applicationWillBecomeActive(notification: NSNotification): void;
  applicationDidBecomeActive(notification: NSNotification): void;
  applicationWillResignActive(notification: NSNotification): void;
  applicationDidResignActive(notification: NSNotification): void;
  applicationWillUpdate(notification: NSNotification): void;
  applicationDidUpdate(notification: NSNotification): void;
  applicationWillTerminate(notification: NSNotification): void;
  applicationDidChangeScreenParameters(notification: NSNotification): void;
  applicationDidChangeOcclusionState(notification: NSNotification): void;
}
