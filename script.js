function classSearch() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue, type;
    input = document.getElementById("classSearch");
    filter = input.value.toUpperCase();
    type = document.getElementById("classSearchType");
    type = type.value;
    table = document.getElementById("classTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        if (type == "courseNumber") {
            td = tr[i].getElementsByTagName("td")[0];
        } else if (type == "className") {
            td = tr[i].getElementsByTagName("td")[1];
        } else {
            td = tr[i].getElementsByTagName("td")[2];
        }
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}