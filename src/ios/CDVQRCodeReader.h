//
//  CDVQRCodeReader.h
//  MyApp
//
//  Created by bjquan on 16/5/18.
//
//

#import <Cordova/CDVPlugin.h>

@interface CDVQRCodeReader : CDVPlugin


- (void)scan:(CDVInvokedUrlCommand *)command;

@end
