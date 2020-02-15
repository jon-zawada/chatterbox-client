var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //create large component/element to store
    //smaller individual message components/elements
  },

  render: function(data) {
    var Messages = {};
    for (var i = 0; i < data.results.length; i++) {
      Messages[data.results[i].objectId] = {username: data.results[i].username, text: data.results[i].text, roomname: data.results[i].roomname};
    }

    //going through each object in messages
    for (var key in Messages) {
      var div = MessageView.render(Messages[key]);
      $('#chats').append(div);
    }
    //call messageView.render on each object
    //append to chats the result

    //create template function and pass every object(user/text)
    //through it to get our html
    //append html to the DOM
    //
  }

};