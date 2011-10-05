(function($){
  
  window.NeuronFormView = Backbone.View.extend({
    tagName: 'textarea',
    id: 'neuron_text_area',
    hook: '#neuron_form',
    neurons_list: $('#neurons'),
    neuron_text_area: $('#neuron_text_area'),
    template: _.template($('#neuron_form_template').html()),
    events: {
      'input':'showInput'
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
      if($(this.neurons_list).children(':first').attr('class')){
        $(this.neurons_list).prepend('<li id="temp-input">' + $('#neuron_text_area').val() + '</li>');
      } else {
        $(this.neurons_list).children('#temp-input').html($('#neuron_text_area').val());
      }
    }
  })
  
}(jQuery));