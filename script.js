// PART 1: Live Search Filter
var searchBox = document.getElementById("searchBox");
var cards = document.getElementsByClassName("resource-card");

if (searchBox) {
    searchBox.onkeyup = function() {
        var searchText = searchBox.value.toLowerCase();

        for (var i = 0; i < cards.length; i++) {
            var cardText = cards[i].innerText.toLowerCase();

            if (cardText.includes(searchText)) {
                cards[i].style.display = "block";
            } else {
                cards[i].style.display = "none";
            }
        }
    };
}

// PART 2: Simple Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-theme");
}