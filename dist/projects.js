var cards = document.getElementsByClassName("expand");
var i;

for(i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.previousElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            this.innerHTML = "Read More";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            this.innerHTML = "Read Less";
        }
    });
}

