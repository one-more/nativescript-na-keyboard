var NAKeyboard = {};
  
NAKeyboard.on = function(eventTypes, callback) {
  var _super = UIApplication.sharedApplication.keyWindow;
  
  eventTypes = eventTypes.split(" ");
  eventTypes = eventTypes.filter(function(value) { return value ? true : false; });
  
  KWKeyboardListener.sharedInstance().addKeyboardEventsListenerWithHandler(_super, function(keyboardFrame, opening, closing) {
    var eventType;
    
    eventTypes.forEach(function(value) {
      if((opening && value === "focus") || (closing && value === "blur")) eventType = value;
    });
    
    if(eventType) {
      var eventData = {
        eventName: eventType,
        keyboardFrame: {
          origin: { x: keyboardFrame.origin.x, y: keyboardFrame.origin.y },
          size: { width: keyboardFrame.size.width, height: keyboardFrame.size.height }
        }
      };

      callback(eventData);
    }
  });
};

module.exports = NAKeyboard;