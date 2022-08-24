// -*- mode: swift; swift-mode:basic-offset: 2; -*-

import Foundation

enum ElementAdapter {
  static func elementValueOutput(_ value: ElementValue) -> Macbridge_ElementValue {
    switch value {
    case .NoValue:
      return elementValueOutput()
    case .StrValue(let value):
      return elementValueOutput(value)
    case .BoolValue(let value):
      return elementValueOutput(value)
    case .IntValue(let value):
      return elementValueOutput(value)
    case .FloatValue(let value):
      return elementValueOutput(value)
    }
  }

  static func elementValueOutput() -> Macbridge_ElementValue {
    return Macbridge_ElementValue()
  }

  static func elementValueOutput(_ value: String) -> Macbridge_ElementValue {
    var answer = Macbridge_ElementValue()
    answer.strValue = value
    return answer
  }

  static func elementValueOutput(_ value: Bool) -> Macbridge_ElementValue {
    var answer = Macbridge_ElementValue()
    answer.boolValue = value
    return answer
  }

  static func elementValueOutput(_ value: Int64) -> Macbridge_ElementValue {
    var answer = Macbridge_ElementValue()
    answer.intValue = value
    return answer
  }

  static func elementValueOutput(_ value: Double) -> Macbridge_ElementValue {
    var answer = Macbridge_ElementValue()
    answer.floatValue = value
    return answer
  }

  static func filterInput(_ filter: String) -> NSPredicate {
    return NSPredicate(format: filter)
  }

  static func valueInput(_ value: Macbridge_ElementValue) -> Any {
    switch value.value {
    case .strValue(let value):
      return value
    case .boolValue(let value):
      return NSNumber(value: value)
    case .intValue(let value):
      return Int(value)
    case .floatValue(let value):
      return value
    case .none:
      return Void()
    }
  }
}
