$(window).click(function(e){
  var modal = document.getElementById("modal");
  var linkbox = document.getElementById('linkbox');
  var btn = document.getElementById("open");
  if (event.target == btn){
    console.log("Open");
    $("#linkbox").addClass("animated");
    $("#linkbox").addClass("zoomIn");
    modal.style.display = "block";
  }else if (event.target == linkbox){
    console.log("Clicked in");
  }else{
    console.log("Clicked Out");
    modal.style.display="none";
    $("#linkbox").removeClass("animated");
    $("#linkbox").removeClass("zoomIn");
  }
});
