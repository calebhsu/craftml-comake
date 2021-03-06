var colToAppend = 0;
var urlRegex = /https:\/\/craftml.io\/[a-zA-Z0-9]{5}/

$(document).ready(function() {
  $('#sub-button').click(function() {
    if(urlRegex.test($('#sub_url').val()))
    {
        $('#gallery').append(
            '<div class="col s4">'
            +  '<div class="card subscribed-card" data-url="' + $('#sub_url').val() + '">'
            +     '<div class="modal-trigger card-image waves-effect waves-block waves-light" href="#codeModal">'
            +     '<img src="img/gallery.png">'
            +     '<span class="card-title red-text"><i class="material-icons small">error</i></span>'
            +     '<div class="title">'
            +       '<span class="modelName activator grey-text text-darken-4">Hull Example<i class="material-icons small right">more_vert</i></span>'
            +       '<p class="user">by calebhsu</p>'
            +     '</div>'
            +    '</div>'
            // +    '<div class="card-reveal">'
            // +       '<span class="card-title grey-text text-darken-4"><i class="material-icons right close">close</i></span>'
            // +       '<img class="code" src="img/code.png">'
            // +     '</div>'
            +   '</div>'
            +'</div>'

            );
        colToAppend = (colToAppend + 1) % 4;
    }
  });
  $('#subModalButton').click(function() {
    $('#subModal').openModal();
  });
  $('#close-sub').click(function() {
    $('#subModal').closeModal();
  });

  $('#gallery').on('click', '.subscribed-card', function() {
    $('#modelEmbed').attr('src',$(event.target).closest('.subscribed-card').attr("data-url"));
    $('#codeModal').openModal();
    // Input specific information into modal for given card click
  });

  $('#close-code').click(function() {
    $('#codeModal').closeModal();
  });

});
