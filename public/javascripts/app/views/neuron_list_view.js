(function($){

  window.NeuronListView = Backbone.View.extend({
    tagName: 'li',
    className: 'neuron',
    template: _.template($('#neuron_list_template').html()),
    hook: '#neurons',
    events:{
    },
    initialize: function(){
      _.bindAll(this, 'render');
      //when you call, say neurons.fetch(), this line
      // will allow the ListView to automatically update itself with updated data
      this.collection.bind('reset', this.render);
    },
    render: function(){
      
      return this;
    }
  });

}(jQuery));