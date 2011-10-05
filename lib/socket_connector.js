function SocketConnector(){  
  if(!(this instanceof arguments.callee)){
    return new arguments.callee(arguments);
  }

  console.log('inside SocketConnector!');

  var self = this;
  
  self.init(); 
}

SocketConnector.prototype.init = function(){

};

module.exports = SocketConnector;

