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
        var lastName = this.get('lastName');
        App.Person.add({firstName: firstName, lastName: lastName});
    },
    removePerson: function(person) {
        App.Person.remove(person);
    }
});

App.Person = Ember.Object.extend({
    firstName: '',
    lastName: '',
    fullName: function() {
        return this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName', 'lastName')
});

App.Person.reopenClass({
    people: [],
    add: function(hash) {
        var person = App.Person.create(hash);
        this.people.pushObject(person);
    },
    remove: function(person) {
        this.people.removeObject(person);
    },
    find: function() {
        return this.people;
    }
});
