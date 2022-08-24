// -*- mode: swift; swift-mode:basic-offset: 2; -*-

import AppKit

enum ElementFilter {
  case ByAttribute([String:ElementValue?])
  case ByIndex(Int)
}

enum ElementValue {
  case NoValue
  case StrValue(String)
  case BoolValue(Bool)
  case IntValue(Int64)
  case FloatValue(Double)
}

enum ElementCore {
  static func root(_ app: NSRunningApplication) -> AXUIElement {
    let pid = app.processIdentifier
    return AXUIElementCreateApplication(pid)
  }

  static func children(_ node: AXUIElement) -> [AXUIElement] {
    var answer: AnyObject?
    switch AXUIElementCopyAttributeValue(node, kAXChildrenAttribute as CFString, &answer) {
    case .success:
      return answer as! [AXUIElement]
    default:
      return []
    }
  }

  static func attr(_ node: AXUIElement, key: String) -> ElementValue? {
    var ptr: CFTypeRef?
    switch AXUIElementCopyAttributeValue(node, key as CFString, &ptr) {
    case .success:
      if key == kAXEnabledAttribute {
        if let value = ptr as? Bool {
          return ElementValue.BoolValue(value)
        } else {
          return nil
        }
      } else {
        if let value = ptr as? String {
          return ElementValue.StrValue(value)
        } else if let value = ptr as? Int {
          return ElementValue.IntValue(Int64(value))
        } else if let value = ptr as? Bool {
          return ElementValue.BoolValue(value)
        } else if let value = ptr as? Double {
          return ElementValue.FloatValue(value)
        } else {
          return nil
        }
      }
    default:
      return nil
    }
  }

  static func attr<T>(_ node: AXUIElement, key: String, value: T) -> Bool {
    let axError = AXUIElementSetAttributeValue(node, key as CFString, value as AnyObject)
    return axErrorToBool(axError)
  }

  static func listAction(_ node: AXUIElement) -> [String] {
    var answer: CFArray?
    switch AXUIElementCopyActionNames(node, &answer) {
    case .success:
      return answer as! [String]
    default:
      return []
    }
  }

  static func listAttr(_ node: AXUIElement) -> [String] {
    var answer: CFArray?
    switch AXUIElementCopyAttributeNames(node, &answer) {
    case .success:
      return answer as! [String]
    default:
      return []
    }
  }

  static func childrenR(_ node: AXUIElement) -> [AXUIElement] {
    var answer: [AXUIElement] = []
    var queue: [AXUIElement] = [node]
    while !queue.isEmpty {
      let children = children(queue.removeFirst())
      queue.append(contentsOf: children)
      answer.append(contentsOf: children)
    }
    return answer
  }

  static func find(_ node: AXUIElement, query: NSPredicate) -> [AXUIElement] {
    let tree = childrenR(node).map({ ElementWrapper($0) }) as NSArray
    let result = tree.filtered(using: query) as! [ElementWrapper]
    return result.map({ $0.element })
  }

  static func performAction(_ node: AXUIElement, query: NSPredicate, action: String) -> Bool {
    return find(node, query: query)
      .first
      .flatMap({ performAction($0, action: action) })
      ?? false
  }

  static func performAction(_ node: AXUIElement, action: String) -> Bool{
    let axError = AXUIElementPerformAction(node, action as CFString)
    return axErrorToBool(axError)
  }

  static func axErrorToBool(_ axError: AXError) -> Bool {
    switch axError {
    case .success:
      return true
      // case .apiDisabled:
      //     print("API-DISABLED")
      //     return false
      // case .actionUnsupported:
      //     print("ACTION-UNSUPPORTED")
      //     return false
      // case .attributeUnsupported:
      //     print("ATTRIBUTE-UNSUPPORTED")
      //     return false
      // case .cannotComplete:
      //     print("CANNOT-COMPLETE")
      //     return false
      // case .failure:
      //     print("FAILURE")
      //     return false
      // case .illegalArgument:
      //     print("ILLEGAL-ARGUMENT")
      //     return false
      // case .invalidUIElement:
      //     print("INVALID-UI-ELEMENT")
      //     return false
      // case .invalidUIElementObserver:
      //     print("INVALID-UI-ELEMENT-OBSERVER")
      //     return false
      // case .noValue:
      //     print("NO-VALUE")
      //     return false
      // case .notEnoughPrecision:
      //     print("NOT-ENOUGH-PRECISION")
      //     return false
      // case .notImplemented:
      //     print("NOT-IMPLEMENTED")
      //     return false
      // case .notificationAlreadyRegistered:
      //     print("NOTIFICATION-ALREADY-REGISTERED")
      //     return false
      // case .notificationNotRegistered:
      //     print("NOTIFICIATION-NOT-REGISTERED")
      //     return false
      // case .notificationUnsupported:
      //     print("NOTIFICATION-UNSUPPORTED")
      //     return false
      // case .parameterizedAttributeUnsupported:
      //     print("PARAMETERIZED-ATTRIBUTE-UNSUPPORTED")
      //     return false
      // @unknown default:
      //     print("UNKNOWN")
      //     return false
    default:
      return false
    }
  }
}

class ElementWrapper : NSObject {

  let element: AXUIElement

  init(_ element: AXUIElement) {
    self.element = element
  }

  override func value(forKey key: String) -> Any? {
    var ptr: AnyObject?
    switch AXUIElementCopyAttributeValue(self.element, key as CFString, &ptr) {
    case .success:
      return ptr as Any
    default:
      return nil
    }
  }
}
