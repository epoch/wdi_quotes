App.Quotes = Backbone.Collection.extend({

  model: App.Quote,

  url: '/quotes'
});