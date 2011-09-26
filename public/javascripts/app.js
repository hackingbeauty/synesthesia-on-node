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
    tagName: 'form',
    id: 'neuron-form',
    
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
    test: function(){
      alert('test');
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


// (function($){
//   
//   window.Neuron = Backbone.Model.extend({
//     url: function() {
//       return this.id ? '/neurons/' + this.id : '/neurons'; //Ternary, look it up if you aren't sure
//     },
//     defaults:{
//       neuron: {
//         body: "No information entered",
//         url: "none"
//       }
//     },
//     initialize: function(){
//       //Can be used to initialize Model attributes
//     }
//   });
// 
//   window.NeuronCollection = Backbone.Collection.extend({
//     model: Neuron,
//     url: '/neurons'
//   });
// 
//   window.Neurons = new NeuronCollection;
// 
//   window.NeuronView = Backbone.View.extend({
//     tagName: "li",
//     events: {
//         //Can be used for handling events on template 
//     },
//     initialize: function(){
//       //this.render();
//     },
//     render: function(){
//       var neuron = this.model.toJSON();
//       //Template stuff goes here
//       $(this.el).html(ich.neuron_template(neuron));
//       return this;
//     }
//   });
// 
//   window.AppView = Backbone.View.extend({
//     el: $('#neurons_app'),
//     events:{
//       'input #neuron_body': 'startTypingNeuron',
//       'submit form#new_neuron':'createNeuron'
//     },
//     initialize: function(){
//       $('#neuron_input').hide();
//       _.bindAll(this, 'addOne', 'addAll');
//       Neurons.bind('add', this.addOne);
//       Neurons.bind('refresh', this.addAll);
//       Neurons.bind('all', this.render);
//       Neurons.fetch(); //This gets the model from the server
//     },
//     addOne: function(neuron) {
//       var view = new NeuronView({model: neuron});
//       this.$("#neurons_list").prepend(view.render().el);
//     },
//     addAll: function(){
//       Neurons.each(this.addOne);
//     },
//     newAttributes: function(event){
//       var new_neuron_form = $(event.currentTarget).serializeObject();
//       return {
//         neuron: {
//           body: new_neuron_form['neuron[body]'],
//           url: new_neuron_form['neuron[url]']
//         }
//       }
//     },
//     startTypingNeuron: function(e){
//       $('#neuron_input').show();
//       $('#neuron_input').html($('#neuron_body').val());
//     },
//     createNeuron: function(e){
//       //if (!text || e.keyCode != 13) return;
//       e.preventDefault();
//       var params = this.newAttributes(e);
//       console.log(params);
//       var neuron = Neurons.create(params);
//       $('#neurons_list li:first-child').after("<li>"+params.neuron.body+"</li>");
//       $('#neuron_input').hide();
//       $('#neuron_body').val('');
//     }
//   });
// 
//   window.App = new AppView;
// 
// }(jQuery));
