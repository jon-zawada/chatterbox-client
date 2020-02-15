var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {

    // Stop the browser from submitting the form
    event.preventDefault();

    // <form action="#" id="send" method="post">
    // <input type="text" name="message" id="message"/>
    // <input type="submit" name="submit" class="submit"/>
    // </form>

    var message = {
      username: App.username,
      text: document.getElementById('message').value,
      roomname: document.getElementById('rooms').value
    };

    console.log(message);
    Parse.create(message);

    console.log('pre reload!');
    // location.reload();    ///////////// DOES NOT REFRESH
    console.log('post reload!');

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};