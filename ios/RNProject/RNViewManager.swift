import Foundation
import React

class RNViewManager: NSObject {
    var bridge: RCTBridge?
    
    static let sharedInstance = RNViewManager()
    
    func createBridgeIfNeeded() -> RCTBridge {
        if bridge == nil {
            bridge = RCTBridge.init(delegate: self, launchOptions: nil)
        }
        return bridge!
    }
    func viewForModule(_ moduleName: String, initialProperties: [String : Any]?) -> RCTRootView {
        NSLog("viewForModule")
        let viewBridge = createBridgeIfNeeded()
        let rootView: RCTRootView = RCTRootView(
            bridge: viewBridge,
            moduleName: moduleName,
            initialProperties: initialProperties)
        return rootView
    }
}

 extension RNViewManager: RCTBridgeDelegate {
     func sourceURL(for bridge: RCTBridge!) -> URL! {
        #if DEBUG
         return URL(string: "http://192.168.6.238:8081/index.bundle?platform=ios")
        #else
         return Bundle.main.url(forResource: "main", withExtension: "jsbundle")
        #endif
     }
 }
