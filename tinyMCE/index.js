tinymce.init({
  selector: 'textarea#tinymce',
  height: 500,
  theme: 'modern',
  plugins: 'lists advlist image imagetools',
  toolbar: 'insertusername',
  setup: function (editor) {
    editor.addButton('insertusername', {
      text: 'Insert Username',
      icon: false,
      onclick: function () {
        editor.windowManager.open({
          title: 'Insert Username - Custom Dialog',
          body: [
            {
              type: 'textbox',
              name: 'firstName',
              label: 'First Name'
            },
            {
              type: 'textbox',
              name: 'lastName',
              label: 'Last Name'
            },
          ],
          onsubmit: function(e) {
            editor.insertContent(e.data.firstName + ' ' + e.data.lastName);
          }
        });
      }
    });
  }
});



// $(document).ready(function () {
//
// });
