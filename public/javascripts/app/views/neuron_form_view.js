(function($){
  
  window.NeuronFormView = Backbone.View.extend({
    tagName: 'input',
    id: 'neuron_input',
    hook: '#neuron_form',
    neurons_list: $('#neurons'),
    template: _.template($('#neuron_form_template').html()),
    events: {
      'input':'showInteractiveInput'
    },
    initialize: function(){
      _.bindAll(this,'render');
    },
    render: function(){
      var renderedContent = $(this.el).html(this.template);
      $(this.hook).append(renderedContent);
      return this;
    },
    showInteractiveInput: function(){
      if($(this.neurons_list).children(':first').attr('class') == 'neuron'){
        $(this.neurons_list).prepend('<li id="temp-input">' + $('#neuron_input').val() + '</li>');
      } else {
        $(this.neurons_list).children('#temp-input').html($('#neuron_input').val());
      }
    }
  })
  
}(jQuery));
