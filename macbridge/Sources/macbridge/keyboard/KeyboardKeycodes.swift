// -*- mode: swift; swift-mode:basic-offset: 2; -*-

import CoreGraphics

// https://eastmanreference.com/complete-list-of-applescript-key-codes
struct KeyboardKeycodes {
  static let physicalKeyboard: [String : CGKeyCode] = [
    "<RETURN>": 0x24,
    "<TAB>": 0x30,
    "<SPACE>": 0x31,
    "<DELETE>": 0x33,
    "<ESCAPE>": 0x35,
    "<COMMAND>": 0x37,
    "<SHIFT>": 0x38,
    "<CAPSLOCK>": 0x39,
    "<OPTION>": 0x3a,
    "<CONTROL>": 0x3b,
    "<RIGHTSHIFT>": 0x3c,
    "<RIGHTOPTION>": 0x3d,
    "<RIGHTCONTROL>": 0x3e,
    "<LEFTARROW>": 0x7b,
    "<RIGHTARROW>": 0x7C,
    "<DOWNARROW>": 0x7D,
    "<UPARROW>": 0x7E,
    "<VOLUMEUP>": 0x48,
    "<VOLUMEDOWN>": 0x49,
    "<MUTE>": 0x4A,
    "<HELP>": 0x72,
    "<HOME>": 0x73,
    "<PAGEUP>": 0x74,
    "<FORWARDDELETE>": 0x75,
    "<END>": 0x77,
    "<PAGEDOWN>": 0x79,
    "<FUNCTION>": 0x3F,
    "<F1>": 0x7A,
    "<F2>": 0x78,
    "<F4>": 0x76,
    "<F5>": 0x60,
    "<F6>": 0x61,
    "<F7>": 0x62,
    "<F3>": 0x63,
    "<F8>": 0x64,
    "<F9>": 0x65,
    "<F10>": 0x6D,
    "<F11>": 0x67,
    "<F12>": 0x6F,
    "<F13>": 0x69,
    "<F14>": 0x6B,
    "<F15>": 0x71,
    "<F16>": 0x6A,
    "<F17>": 0x40,
    "<F18>": 0x4F,
    "<F19>": 0x50,
    "<F20>": 0x5A,
    "a": 0x00,
    "b": 0x0B,
    "c": 0x08,
    "d": 0x02,
    "e": 0x0E,
    "f": 0x03,
    "g": 0x05,
    "h": 0x04,
    "i": 0x22,
    "j": 0x26,
    "k": 0x28,
    "l": 0x25,
    "m": 0x2E,
    "n": 0x2D,
    "o": 0x1F,
    "p": 0x23,
    "q": 0x0C,
    "r": 0x0F,
    "s": 0x01,
    "t": 0x11,
    "u": 0x20,
    "v": 0x09,
    "w": 0x0D,
    "x": 0x07,
    "y": 0x10,
    "z": 0x06,

    "0": 0x1D,
    "1": 0x12,
    "2": 0x13,
    "3": 0x14,
    "4": 0x15,
    "5": 0x17,
    "6": 0x16,
    "7": 0x1A,
    "8": 0x1C,
    "9": 0x19,

    "=": 0x18,
    "-": 0x1B,
    ";": 0x29,
    "'": 0x27,
    ",": 0x2b,
    ".": 0x2F,
    "/": 0x2C,
    "\\": 0x2A,
    "`": 0x32,
    "[": 0x21,
    "]": 0x1E
  ]

  // keyboard-layout agnostic. Cannot be used to send keystrokes like `⌘N'
  static let textKeyboard_: [String: CGKeyCode] = [
    "+": physicalKeyboard["="]!,
    "@": physicalKeyboard["2"]!,

    "A": physicalKeyboard["a"]!,
    "B": physicalKeyboard["b"]!,
    "C": physicalKeyboard["c"]!,
    "D": physicalKeyboard["d"]!,
    "E": physicalKeyboard["e"]!,
    "F": physicalKeyboard["f"]!,
    "G": physicalKeyboard["g"]!,
    "H": physicalKeyboard["h"]!,
    "I": physicalKeyboard["i"]!,
    "J": physicalKeyboard["j"]!,
    "K": physicalKeyboard["k"]!,
    "L": physicalKeyboard["l"]!,
    "M": physicalKeyboard["m"]!,
    "N": physicalKeyboard["n"]!,
    "O": physicalKeyboard["o"]!,
    "P": physicalKeyboard["p"]!,
    "Q": physicalKeyboard["q"]!,
    "R": physicalKeyboard["r"]!,
    "S": physicalKeyboard["s"]!,
    "T": physicalKeyboard["t"]!,
    "U": physicalKeyboard["u"]!,
    "V": physicalKeyboard["v"]!,
    "W": physicalKeyboard["w"]!,
    "X": physicalKeyboard["x"]!,
    "Y": physicalKeyboard["y"]!,
    "Z": physicalKeyboard["z"]!
  ]

  static let keysKeyboard_: [String: [(CGKeyCode, CGEventFlags)]] = [
    "A": [(physicalKeyboard["<SHIFT>"]!, []), (physicalKeyboard["a"]!, [.maskShift])]
  ]

  static func textKeyboard() -> [String : CGKeyCode] {
    var dict: [String: CGKeyCode] = [:]
    dict.merge(physicalKeyboard, uniquingKeysWith: {(_, x) in x})
    dict.merge(textKeyboard_, uniquingKeysWith: {(_, x) in x})
    return dict
  }

  static func keysKeyboard() -> [String: [(CGKeyCode, CGEventFlags)]] {
    let noFlags: CGEventFlags = []
    var dict: [String: [(CGKeyCode, CGEventFlags)]] = [:]
    dict.merge(physicalKeyboard.map({ ($0.0, [($0.1, noFlags)]) }), uniquingKeysWith: {(_, x) in x})
    dict.merge(keysKeyboard_, uniquingKeysWith: {(_, x) in x})
    return dict
  }

  static func textKeycode(_ key: String) -> CGKeyCode? {
    return textKeyboard()[key]
  }

  static func keycode(_ key: String) -> [(CGKeyCode, CGEventFlags)] {
    return keysKeyboard()[key] ?? []
  }
}
