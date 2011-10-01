(function($){

  window.ListView = Backbone.View.extend({
    tagName: 'li',
    className: 'neuron',
    events:{
    },
    initialize: function(){
      _.bindAll(this, 'render');
      this.template = _.template($('#list_template').html());
      //when you call, say neurons.fetch(), this line
      // will allow the ListView to automatically update itself with updated data
      this.collection.bind('reset', this.render);
    },
    render: function(){
      var $albums,
          collection = this.collection;
      $(this.el).html(this.template({}))
      $neurons = this.$('#neurons');
      collection.each(function(neuron){
        var view = new NeuronListView({
          model: neuron,
          collection: collection
        });
        $neurons.append(view.render().el);
      });
      return this;
    }
  });

}(jQuery));