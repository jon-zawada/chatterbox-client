var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);


      // for (var i = 0; i < data.results.length; i++) {
      //   Messages[data.results[i].objectId] = {user: data.results[i].username, text: data.results[i].text, roomname: data.results[i].roomname};
      // }

      //call MessagesView.render
      MessagesView.render(data);
      // var Messages = {};
      // for (var i = 0; i < data.results.length; i++) {
      //   Messages[data.results[i].objectId] = {username: data.results[i].username, text: data.results[i].text, roomname: data.results[i].roomname};
      // }

      // //going through each object in messages
      // for (var key in Messages) {
      //   var div = MessageView.render(Messages[key]);
      //   $('#chats').append(div);
      // }

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
