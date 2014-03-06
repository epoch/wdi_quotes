App.QuoteListItemView = Backbone.View.extend({
  template: _.template('<div class="quote"><a href="#quotes/<%= id %>"><%= body %></a></div>'),

  // events: {
  //   'click a': 'showQuote'
  // },

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);

    // good practise to return this so we can do chaining
    return this;  
  },

  showQuote: function(event) {
    event.preventDefault();
    $('#quote-wrapper').hide();

    var quoteBody = this.model.get('body');     
    $('#quote-wrapper .quote').html(quoteBody);

    var quoteAuthor = this.model.get('author');     
    $('#quote-wrapper .author').html(quoteAuthor);

    $('#quote-wrapper').fadeIn();
  }
})