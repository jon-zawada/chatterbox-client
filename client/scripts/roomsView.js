var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function(data) {
    //roomname: data.results[i].roomname
    //object store unique names
    //maybe array
    var rooms = {};
    for (var i = 0; i < data.results.length; i++) {
      if (!rooms[data.results[i].roomname]) {
        rooms[data.results[i].roomname] = {roomname: data.results[i].roomname};
      }
    }

    for (var item in rooms) {
      var room = roomTemplating.render(rooms[item]);
      $('#roomList').append(room);
    }
  }

};
