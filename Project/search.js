function filterItems() {
    var input, filter, items, h4, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    items = document.getElementsByClassName("item");
    for (i = 0; i < items.length; i++) {
      h4 = items[i].getElementsByTagName("h4")[0];
      txtValue = h4.textContent || h4.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        items[i].style.display = "";
      } else {
        items[i].style.display = "none";
      }
    }
  }
  