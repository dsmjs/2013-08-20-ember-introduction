App = Ember.Application.create();

App.Router.map(function() {
    this.resource("people", { path: "/" });
});

App.PeopleRoute = Ember.Route.extend({
    model: function() {
        return App.Person.find();
    }
});

App.Person = Ember.Object.extend({
    firstName: ''
});

App.Person.reopenClass({
    find: function() {
        var first = App.Person.create({firstName: 'toran'});
        var last = App.Person.create({firstName: 'matt'});
        return [first, last];
    }
});
