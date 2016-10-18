var NAKeyboard = {};
  
NAKeyboard.on = function(eventType, callback) {
  var _super = UIApplication.sharedApplication.keyWindow;
  
  return KWKeyboardListener.sharedInstance().addKeyboardEventsListenerWithHandler(_super, callback);
};

module.exports = NAKeyboard;