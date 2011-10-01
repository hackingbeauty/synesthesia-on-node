(function($){
  
  window.FormView = Backbone.View.extend({
    tagName: 'textarea',
    id: 'neuron_form',
    events: {
      'input .neuron_input':'showInput'
    },
    initialize: function(){
      _.bindAll(this,'render');
      this.template = _.template($('#form_template').html());
    },
    render: function(){
      $(this.el).html(this.template);
      return this;
    },
    showInput: function(){
    }
  })
  
}(jQuery));