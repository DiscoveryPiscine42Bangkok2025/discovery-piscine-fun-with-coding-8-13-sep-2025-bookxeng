$(document).ready(function() {
  function setCookie(name, value) {
      var date = new Date();
      date.setFullYear(date.getFullYear() + 1);
      document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + date.toUTCString();
    }

  function unsetCookie(name) {
      document.cookie = name + '=; expires=Fri, 31 Dec 1999 23:59:59 GMT;';
    }

  function addListItem(id, text) {
      $('#list').append(
          $('<li>').attr('id', id).html(text + ' <button class="delete">Delete</button>')
      );
    }

  function checkForObjectives() {
      var cookies = document.cookie.split('; ');
      cookies.sort();
        cookies.forEach(function(c) {
          var parts = c.split('=');
          if (parts[0].indexOf('obj') === 0) {
              try {
                  addListItem(parts[0], decodeURIComponent(decodeURIComponent(parts[1])));
              } catch (error) {
                  console.log(error.message + ' ' + parts[1]);
              }
            }
        });
    }

  function addItem() {
      var text = $('#objective').val();
      if (text.length > 0) {
          var list = new Date();
          var id = 'obj' + list.getTime();
          setCookie(id, text);
          addListItem(id, text);
          $('#objective').val('');
      }
  }

  checkForObjectives();
  $('.add').click(function() {
      addItem();
  });

  $('#objective').keypress(function(e) {
      if (e.which === 13) {
          addItem();
      }
  });

  $('#list').on('click', '.delete', function() {
      var li = $(this).closest('li');
      if (confirm("Do you want to delete this list?")) {
          unsetCookie(li.attr('id'));
          li.remove();
          alert("Deleted!");
      }
    });
});
