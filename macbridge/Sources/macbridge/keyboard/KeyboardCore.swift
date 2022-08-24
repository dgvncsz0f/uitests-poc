// -*- mode: swift; swift-mode:basic-offset: 2; -*-

import CoreGraphics

enum KeyboardCore {
  static func sendtext (_ string: String) {
    for char in string {
      KeyboardKeycodes
        .textKeycode(String(char))
        .flatMap({ buildCgEvent(source: nil, input: $0, keyDown: true) })
        .map({ setUnicodeString($0, String(char)) })?
        .post(tap: .cgAnnotatedSessionEventTap)
    }

    for char in string.reversed() {
      KeyboardKeycodes
        .textKeycode(String(char))
        .flatMap({ buildCgEvent(source: nil, input: $0, keyDown: false) })?
        .post(tap: .cgAnnotatedSessionEventTap)
    }
  }

  // FIXME: not keyboard layout aware
  static func sendkeys (_ keys: [(String, CGEventFlags)]) {
    for (key, flags) in keys {
      for keycode in KeyboardKeycodes.keycode(key) {
        buildCgEvent(source: nil, input: keycode, keyDown: true)
          .map({ setFlags($0, flags) })?
          .post(tap: .cgAnnotatedSessionEventTap)
      }
    }

    for (key, _) in keys.reversed() {
      for (keycode, _) in KeyboardKeycodes.keycode(key).reversed() {
        buildCgEvent(source: nil, input: (keycode, []), keyDown: false)?
          .post(tap: .cgAnnotatedSessionEventTap)
      }
    }
  }

  static func buildCgEvent(source: CGEventSource?, input: CGKeyCode, keyDown: Bool) -> CGEvent? {
    return CGEvent.init(
      keyboardEventSource: source,
      virtualKey: input,
      keyDown: keyDown)
  }

  static func buildCgEvent(source: CGEventSource?, input: (CGKeyCode, CGEventFlags), keyDown: Bool) -> CGEvent? {
    return CGEvent.init(
      keyboardEventSource: source,
      virtualKey: input.0,
      keyDown: keyDown)
      .map({ setFlags($0, input.1) })
  }

  static func resetFlags(_ event: CGEvent) -> CGEvent {
    event.flags = []
    return event
  }

  static func setFlags(_ event: CGEvent, _ flags: CGEventFlags) -> CGEvent {
    event.flags.formUnion(flags)
    return event
  }

  static func setIntValue(_ event: CGEvent, field: CGEventField, value: Int64) -> CGEvent {
    event.setIntegerValueField(field, value: value)
    return event
  }

  static func setUnicodeString(_ event: CGEvent, _ text: String) -> CGEvent {
    let unistr = Array(text.utf16)
    event.keyboardSetUnicodeString(stringLength: unistr.count, unicodeString: unistr)
    return event
  }

  static func debug(_ x: CGEvent) -> CGEvent {
    return x
  }
}
