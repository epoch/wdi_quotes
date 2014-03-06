App.AppView = Backbone.View.extend({
  el: $('#container'),

  initialize: function() {
    this.quoteList = $('#quote-list');
    this.listenTo(App.quotes, 'sync', this.render);
  },

  render: function() {
    var $quoteList = this.quoteList;

    this.collection.each(function(quote) {
      var quoteListItemView = new App.QuoteListItemView({model: quote});
      var html = quoteListItemView.render().el
      $quoteList.append(html);
    });
  }
})