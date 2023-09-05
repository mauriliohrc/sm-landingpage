function openTab(event, tabId) {
    var tabcontents = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("show");
    }

    var tablinks = document.getElementsByClassName("tablinks");

    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabId).classList.add("show");
    event.currentTarget.classList.add("active");
}