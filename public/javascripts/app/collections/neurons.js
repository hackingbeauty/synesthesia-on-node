(function($){

  window.Neurons = Backbone.Collection.extend({
    model: Neuron,
    url: '/neurons'
  });

}(jQuery));