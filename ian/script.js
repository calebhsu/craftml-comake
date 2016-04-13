var colToAppend = 0;

$(document).ready(function() {
  $('#sub-button').click(function() {
    $('#pic-col-' + String(colToAppend + 1)).append(
        '<div class="card blue-grey darken-1">'
        +  '<div class="card-content white-text">'
        +  '<span class="card-title">Model Title Here</span>'
        +  '<p>Model picture here</p>'
        +  '</div>'
        +  '<div class="card-action">'
        +    '<a href="#">Go to Model</a>'
        +  '</div>'
        + '</div>');
    colToAppend = (colToAppend + 1) % 4;
  });
  $('#subModalButton').click(function() {
    $('#subModal').openModal();
  });
  $('#closeModal').click(function() {
    $('#subModal').closeModal();
  });

});
