(function($){

  window.BackboneSynesthesia = Backbone.Router.extend({
    routes:{
      '':'home',
      'blank':'blank'
    },
    initialize: function(){
      this.listView = new ListView({
        collection: new Neurons()
      });
      this.formView = new FormView({});
    },
    home: function(){
      var $container = $('#main');
      $container.empty();
      $container.append(this.listView.render().el);
      $container.append(this.formView.render().el);
    },
    blank: function(){
      $('#main').empty();
      $('#main').text('blank');
    }
  });
  
  $(function(){
    window.App = new BackboneSynesthesia();
    Backbone.history.start({pushState: true});
  });
  
}(jQuery));