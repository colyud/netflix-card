const play = document.querySelector(".play");
const add = document.querySelector(".add");
const like = document.querySelector(".like");
const dislike = document.querySelector(".dislike");
const down = document.querySelector(".down");
const movieDesc = document.querySelector(".movie-desc");

likeAni(like, dislike);
likeAni(dislike, like);
likeAni(add);
likeAni(down);

function likeAni(first, second) {
    first.addEventListener("click", () => {
        first.classList.toggle("active");
        if (second) {
            second.classList.remove("active");
        }

        //restart bouncy animation
        first.children[0].classList.add("bouncy");
        setTimeout(function () {
            first.children[0].classList.remove("bouncy");
        }, 500);

        if (first == add) {
            first.children[1].style.background = "#27ae60";
        } else if (first == like) {
            first.children[1].style.background = "#2980b9";
        } else if (first == down) {
            down.children[1].style.background = "#95a5a6";
            down.classList.toggle("rotate");
            movieDesc.classList.toggle("desc-visibility");
        }
    });
}
