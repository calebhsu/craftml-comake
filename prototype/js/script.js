var colToAppend = 0;

$(document).ready(function() {
  $('#sub-button').click(function() {
    $('#gallery').append(
        '<div class="col s4">'
        +  '<div class="card">'
        +     '<div class="card-image waves-effect waves-block waves-light">'
        +     '<img class="activator" src="img/gallery.png">'
        +     '<span class="card-title red-text"><i class="material-icons small">error</i></span>'
        +     '<div class="title">'
        +       '<span class="modelName activator grey-text text-darken-4">Hull Example<i class="material-icons small right">more_vert</i></span>'
        +       '<p class="user">by calebhsu</p>'
        +     '</div>'
        +    '</div>'
        +    '<div class="card-reveal">'
        +       '<span class="card-title grey-text text-darken-4"><i class="material-icons right close">close</i></span>'
        +       '<img class="code" src="img/code.png">'
        +     '</div>'
        +   '</div>'
        +'</div>'

        );
    colToAppend = (colToAppend + 1) % 4;
  });
  $('#subModalButton').click(function() {
    $('#subModal').openModal();
  });
  $('#closeModal').click(function() {
    $('#subModal').closeModal();
  });

});
