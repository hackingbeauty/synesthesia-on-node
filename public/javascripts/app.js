(function($){

  window.Neuron = Backbone.Model.extend({ });
  
  window.Neurons = Backbone.Collection.extend({
    model: Neuron,
    url: '/neurons'
  });
  
  window.list = new Neurons();
  
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
      console.log('input');
    }
  })
  
  window.NeuronListView = NeuronView.extend({
      
  });
    
  window.ListView = Backbone.View.extend({
    tagName: 'li',
    className: 'neuron',
    events:{
      'click .neuron':'test'
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
  
  window.BackboneSynesthesia = Backbone.Router.extend({
    routes:{
      '':'home',
      'blank':'blank'
    },
    initialize: function(){
      this.listView = new ListView({
        collection: window.list
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