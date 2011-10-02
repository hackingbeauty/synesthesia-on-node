(function($){

  window.BackboneSynesthesia = Backbone.Router.extend({
    routes:{
      '':'home'
    },
    initialize: function(){
      this.neuron_list_view = new NeuronListView({
        collection: new Neurons()
      });
      this.neuron_form_view = new NeuronFormView({});
    },
    home: function(){
      this.neuron_list_view.render().el;
      this.neuron_form_view.render().el;
    }
  });
  
  $(function(){
    window.App = new BackboneSynesthesia();
    Backbone.history.start({pushState: true});
  });
  
}(jQuery));