(function($){

  window.NeuronView = Backbone.View.extend({
    tagName: 'li',
    className: 'neuron',
    template: _.template($('#neuron_template').html()),
    events: {
      'dblclick .neuron_text':'edit',
      'click .neuron_destroy':'destroy',
      'keypress .neuron_input':'updateOnEnter'
    },
    initialize: function(){
      _.bindAll(this,'render');
      this.model.bind('change', this.render);
      //this.model.bind('destroy', this.destroy);
    },
    render: function(){
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    },
    edit: function(){
      $(this.el).addClass('editing');
      this.input.focus();
    },
    updateOnEnter: function(e){
      if(e.keyCode == 13){
       this.model.save({text: this.input.val()});
       $(this.el).removeClass('editing');
      }
    },
    destroy: function(){
      this.model.destroy();
      $(this.el).remove();
    }
  });
  
}(jQuery));
