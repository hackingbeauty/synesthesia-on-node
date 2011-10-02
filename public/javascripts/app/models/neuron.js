(function($){
  
  window.Neuron = Backbone.Model.extend({ 
    defaults: function(){
      done:false
    },
    toggle: function(){
      this.save({done: !this.get('done')});
    }

  });
  
}(jQuery));
