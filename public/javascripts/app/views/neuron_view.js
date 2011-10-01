(function($){

  window.NeuronView = Backbone.View.extend({
    tagName: 'li',
    className: 'neuron',
    initialize: function(){
      _.bindAll(this,'render');
      this.model.bind('change', this.render);
      this.template = _.template($('#neuron_template').html());
    },
    render: function(){
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }
  });
  
}(jQuery));