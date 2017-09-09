

document.addEventListener("DOMContentLoaded", function() {
  var url = $('input[name=tmp_form_host]').val();
  console.log("url", url);

  var electorate = getParameterByName("electorate", url);
  console.log("electorate", electorate);
  $("#id123-control31500616").val(electorate).change();

  var letter = getParameterByName("letter", url);
  console.log("letter", letter);

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
});
