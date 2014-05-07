App.Category = DS.Model.extend({
  title:    DS.attr('string'),
  description: DS.attr('string'),
  questions:  DS.hasMany('question', { async: true })
});