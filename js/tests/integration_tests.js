module('integration tests', {
    setup: function() {
        App.reset();
    }
});

test('add will append person to the html table', function() {
    expect(2);
    visit("/").then(function() {
      fillIn(".firstName", "foo");
      fillIn(".lastName", "bar");
      return click(".submit");
    }).then(function() {
      equal(find("table tr").length, 1, "the table of people was not complete");
      equal(find("table tr:eq(0) td:eq(0)").text(), "foo bar", "the person was not found with fullName")
  });
});
