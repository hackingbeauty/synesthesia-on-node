(function($){
  
  window.Neuron = Backbone.Model.extend({ 
    defaults: function(){
      done:false,
      order:Neurons.nextOrder()
    }
  });
  
}(jQuery));