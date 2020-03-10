$(".button").click(function() {
  console.log($("animals"));
  if ( $("#animals")[0].innerHTML === "RIP") {
      $("#animals").html("");
      $("body").removeClass("killed");
  }
});


$("#meow").click(function() {
  $("#animals").append("CAT");
});

$("#meep").click(function() {
  $("#animals").append("MOUSE");
});

$("#kill").click(function() {
  if ( $("#animals")[0].innerHTML === "") {
    return;
  } else {
    $("#animals").html("RIP");
    $("body").addClass("killed");
  }
});
