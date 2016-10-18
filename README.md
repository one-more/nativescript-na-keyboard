# NativeScript NA Keyboard plugin

**NOTE! Android is currently not supported.**

A NativeScript keyboard observer that utilizes [KWKeyboardListener](https://github.com/kwarter/KWKeyboardListener) for iOS.

## Installation

`$ tns plugin add nativescript-na-keyboard`

## Usage

Simply require the plugin and do as such:

```js
var NAKeyboard = require("nativescript-na-keyboard");

NAKeyboard.on("focus blur", function(eventData) {
  console.log(eventData.eventName); // Returns either "focus" or "blur".
  console.dump(eventData.keyboardFrame); // Returns position and size of the keyboard.
});
```

### Methods

#### on()

To observe keyboard activity.

`on(eventTypes, callback)`

- **eventTypes** - Can be either "focus" or "blur". If both, separate them with a blankspace (i.e. "focus blur").
- **callback** - The callback function. Available parameter is "eventData" which is an object that includes `eventName` and `keyboardFrame`.

## Known issues

- No Android compatibility, yet.

## History

#### Version 1.0.0 (18 October 2016)

- `on()` method for observing keyboard activity.

## Credits

- [NordlingArt](https://github.com/NordlingArt)
- [kwarter](https://github.com/kwarter/) (for providing **[KWKeyboardListener](https://github.com/kwarter/KWKeyboardListener)**)

## License

[MIT](/LICENSE) - for {N} version 2.0.0+