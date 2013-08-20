function compile(template) {
  var templateName = template.split('/templates/').reverse()[0].replace('.handlebars', '');
  $.ajax({
    url: template,
    cache: false,
    async: false,
    success: function (source) {
      var input = Ember.Handlebars.precompile(source.toString());
      Ember.TEMPLATES[templateName] = Ember.Handlebars.template(input);
    }
  });
}
