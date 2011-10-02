(function($){

  window.Neurons = Backbone.Collection.extend({
    model: Neuron,
    url: '/neurons',
    done: function(){
      return this.filter(function(todo){
        return todo.get('done');
      });
    }
  });

}(jQuery));
