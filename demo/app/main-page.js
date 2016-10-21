var Observable = require("data/observable").Observable;
var NAKeyboard = require("nativescript-na-keyboard");

var page, pageData = new Observable({
  
});

exports.navigatingTo = function(args) {
  page = args.object;
  page.bindingContext = pageData;
  
  var inputText = page.getViewById("inputText");
  NAKeyboard.setAvoidingView(inputText);
  
  NAKeyboard.on("open close", function(eventData) {
    console.log(eventData.eventName);
  });
};

exports.showKeyboardState = function(args) {
  var isVisible = NAKeyboard.keyboardVisible();
  
  if(isVisible) console.log("opened");
    else console.log("closed");
};