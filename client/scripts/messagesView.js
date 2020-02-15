var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //create large component/element to store
    //smaller individual message components/elements
    // MessagesView.refresh();

    // $('.refresh').on('click', function() {
    //   location.reload();
    // });
  },

  render: function(data) {
    var Messages = {};
    for (var i = 0; i < data.results.length; i++) {
      Messages[data.results[i].objectId] = {username: data.results[i].username, text: data.results[i].text};
    }

    //going through each object in messages
    for (var key in Messages) {
      var div = MessageView.render(Messages[key]);
      $('#chats').append(div);
    }
  },

  ///////////////////////
  // refresh: function() {

  // }
  ///////////////////////

};