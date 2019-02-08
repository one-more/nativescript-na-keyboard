# NativeScript NA Keyboard plugin

**The development of this repository has been canceled. Feel free to fork and continue yourself. Thanks!**

-------

**NOTE! Android is not supported.**

A NativeScript keyboard observer that utilizes [KWKeyboardListener](https://github.com/kwarter/KWKeyboardListener) for iOS.

## Installation

`$ tns plugin add nativescript-na-keyboard`

## Usage

Simply require the plugin and do as such:

```js
var NAKeyboard = require("nativescript-na-keyboard");

NAKeyboard.on("open close", function(eventData) {
  console.log(eventData.eventName); // Returns either "open" or "close".
  console.dump(eventData.keyboardFrame); // Returns position and size of the keyboard.
});
```

### Methods

#### on()

To observe keyboard activity.

`on(eventTypes, callback)`

- **eventTypes** - Can be either "open" or "close". If both, separate them with a blankspace (i.e. "open close").
- **callback** - The callback function. Available parameter is "eventData" which is an object that includes `eventName` and `keyboardFrame`.

---------

#### setAvoidingView()

Set a view that the keyboard should avoid.

`setAvoidingView(view)`

* **view** - The view that should be pulled when the keyboard opens.

```js
var view = page.getViewById("inputText"); // The TextField view
NAKeyboard.setAvoidingView(view);
```

------

#### Other methods

- `keyboardVisible()` - Returns true or false depending on keyboard's current state.

## Known issues

- No Android compatibility, yet.

## History

#### Version 1.1.0 (22 October 2016)

- Added two new methods: `keyboardVisible()` and `setAvoidingView()`.

#### Version 1.0.1 (18 October 2016)

- Added to **npm**.

#### Version 1.0.0 (18 October 2016)

- `on()` method for observing keyboard activity.

## Credits

- [NordlingArt](https://github.com/NordlingArt)
- [kwarter](https://github.com/kwarter/) (for providing **[KWKeyboardListener](https://github.com/kwarter/KWKeyboardListener)**)

## License

[MIT](/LICENSE) - for {N} version 2.0.0+
