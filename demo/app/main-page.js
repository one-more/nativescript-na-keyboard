var Observable = require("data/observable").Observable;
var NAKeyboard = require("nativescript-na-keyboard");

var page, pageData = new Observable({
  
});

exports.navigatingTo = function(args) {
  page = args.object;
  page.bindingContext = pageData;
  
  NAKeyboard.on("focus blur", function(eventData) {
    console.log(eventData.eventName);
  });
};