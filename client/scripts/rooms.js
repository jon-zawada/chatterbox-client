var roomTemplating = {

  // var allRooms = [];
  render: _.template(`
      <option>
        <%-roomname%>
      </option>
  `)



  // for (var i = 0; i < data.results.length; i++) {
  //   if (allRooms.indexOf(data.results[i].roomname) === -1) {
  //     allRooms.push(data.results[i].roomname);
  //   }
  // }

//rooms are defined by the .roomname property of messages
};