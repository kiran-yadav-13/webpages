var collapsable = document.getElementsByClassName("collapsable_btn");
var i;

for (i = 0; i < collapsable.length; i++) {
  
  collapsable[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the collapsable_details */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active collapsable_details */
    var collapsable_details = this.nextElementSibling;
    if (collapsable_details.style.maxHeight) {
        collapsable_details.style.maxHeight = null;
        /*for changing the - sign on the collpsable btn back to + */
        this.childNodes[1].innerHTML="&#10750;"
        collapsable_details.style.display="none";
      } else {
        /*making collapsable details visible */
        collapsable_details.style.display="block";
        collapsable_details.style.maxHeight = collapsable_details.scrollHeight + "px";
           /*for changing the + sign on the collpsable btn back to - when th details are visible */
        this.childNodes[1].innerHTML="&#x29FF;"
      } 
  });
}