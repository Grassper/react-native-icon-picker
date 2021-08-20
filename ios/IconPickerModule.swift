//
//  IconPickerModule.swift
//  IconPickerModule
//
//  Copyright © 2021 grassper. All rights reserved.
//

import Foundation

@objc(IconPickerModule)
class IconPickerModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
