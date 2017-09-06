
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("message", function(event) {
    console.log("event BEFORE", event);
    if (event.origin.indexOf("http://www.accessalliance.org.nz") == -1)
      return;
    console.log("event AFTER", event);

    var data = event.data;
    console.log("data", data);

    var electorate = data.electorate;
    console.log("electorate", electorate);

    $("#id123-control31500616").val(electorate).change();
  });
});
