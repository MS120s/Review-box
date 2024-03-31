const reviewValues = [
    {
        id: 1,
        img: "images/user-imgs/image-one.jpg",
        name: "DARKWIZARD583",
        rank: "MASTER",
        review: "Absolutely thrilling! This game is a rollercoaster of excitement. From the jaw-dropping graphics to the seamless gameplay, every moment is a testament to the developers' dedication. The world feels alive with vibrant landscapes and dynamic NPCs, while the combat system offers depth and satisfaction. And the storyline? It's a captivating journey filled with twists and turns that kept me hooked until the very end. A must-play for any gamer seeking an unforgettable experience!"
    },
    {
        id: 2,
        img: "images/user-imgs/image-two.jpg",
        name: "SHADOWBLADE92",
        rank: "GRANDMASTER",
        review: "Disappointing. Despite high expectations, this game falls short. The controls feel clunky, hindering immersion, and the graphics, while occasionally impressive, lack consistency. The storyline lacks innovation, failing to engage on a deeper level. While it may have its moments, overall, it's a letdown compared to its potential."
    },
    {
        id: 3,
        img: "images/user-imgs/image-three.jpg",
        name: "PIXELPROWLER",
        rank: "PRO",
        review: "A masterpiece! This game is a marvel of craftsmanship. The attention to detail is astounding, evident in every pixel of the gorgeous landscapes and every move in the fluid combat system. Exploring the open world is a joy, filled with meaningful discoveries and engaging encounters. Combined with a rich storyline that keeps you invested from start to finish, this game sets a new standard for excellence in gaming."
    },
    {
        id: 4,
        img: "images/user-imgs/image-four.jpg",
        name: "MAVERICKGAMERX",
        rank: "LEGENDARY",
        review: "Mixed feelings. This game has its highs and lows. While the gameplay mechanics are solid and the world is beautifully crafted, technical glitches detract from the experience. The storyline shows promise but falls short in execution, leaving characters feeling underdeveloped. Despite its flaws, there's still enjoyment to be found, especially for those willing to overlook its imperfections."
    },
]

const img = document.getElementById("user-img")
const author = document.getElementById("author")
const rank = document.getElementById("rank")
const review = document.getElementById("review")

const btns = document.querySelectorAll(".btn")

let currentItem = 0

window.addEventListener("DOMContentLoaded", function(){
    displayItems(currentItem)
})

function displayItems(e){
    item = reviewValues[e]
    img.src = item.img
    author.textContent = item.name
    rank.textContent = item.rank
    review.textContent = item.review
}

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        currentButton = e.currentTarget.classList
        if (currentButton.contains('next')){
            currentItem++
            if(currentItem > reviewValues.length - 1){
                currentItem = 0
            }  
            displayItems(currentItem)              
        }

        if (currentButton.contains('prev')){
            currentItem--
            if(currentItem < 0){
                currentItem = reviewValues.length -1
            }  
            displayItems(currentItem)              
        }

        if(currentButton.contains("random")){
            currentItem = randomNumber()
            displayItems(currentItem)
        }
    })
})

function randomNumber() {
    return Math.floor(Math.random() * reviewValues.length)
}