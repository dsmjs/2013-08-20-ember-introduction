App = Ember.Application.create();

App.Router.map(function() {
    this.resource("people", { path: "/" });
});

App.PeopleRoute = Ember.Route.extend({
    model: function() {
        return App.Person.find();
    }
});

App.PeopleController = Ember.ArrayController.extend({
    addPerson: function() {
        var firstName = this.get('firstName');
        App.Person.add({firstName: firstName});
    }
});

App.Person = Ember.Object.extend({
    firstName: ''
});

App.Person.reopenClass({
    people: [],
    add: function(hash) {
        var person = App.Person.create(hash);
        this.people.pushObject(person);
    },
    find: function() {
        return this.people;
    }
});
