
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("message", function(event) {
    // if (event.orgin.contains("https://accessalliance.nationbuilder.com") == -1)
    //   return;
    console.log("event", event);

    var data = event.data;
    console.log("data", data);

    var electorate = data.electorate;

    $("#id123-control31500616").val(electorate).change()
  });
});
