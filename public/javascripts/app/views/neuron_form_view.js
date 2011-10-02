(function($){
  
  window.NeuronFormView = Backbone.View.extend({
    tagName: 'textarea',
    id: 'neuron_text_area',
    hook: '#neuron_form',
    template: _.template($('#neuron_form_template').html()),
    events: {
      'keypress':'showInput'
    },
    initialize: function(){
      _.bindAll(this,'render');
    },
    render: function(){
      var renderedContent = $(this.el).html(this.template);
      $(this.hook).html(renderedContent);
      return this;
    },
    showInput: function(){
      
    }
  })
  
}(jQuery));