App.CategoryController = Ember.ArrayController.extend({
  siteTitle: 'Welcome to Ember',

  currentTime: function() {
    return(new Date);
  }.property()
});