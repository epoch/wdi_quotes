App.Router = Backbone.Router.extend({
  routes: {
    'quotes/:id': 'showQuote'
  },

  initialize: function() {
    this.$quoteWrapper = $('#quote-wrapper');

    App.quotes = new App.Quotes();      
    App.quotes.fetch();
          
    App.appView = new App.AppView({ collection: App.quotes }); 
    App.appView.render(); 
  },

  showQuote: function(paramId) {
    var quoteModel = App.quotes.get(paramId);

    if (quoteModel === undefined) 
      return;

    this.$quoteWrapper.hide();

    var quoteBody = quoteModel.get('body');     
    this.$quoteWrapper.find('.quote').html(quoteBody);

    var quoteAuthor = quoteModel.get('author');     
    this.$quoteWrapper.find('.author').html(quoteAuthor);

    this.$quoteWrapper.fadeIn();    
  }
})