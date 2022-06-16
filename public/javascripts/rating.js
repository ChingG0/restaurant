ratings = 
    {
    Sababa : 4.1,
    Umeko: 4.3,
    Ziga: 4.2,
    Apoint: 4.2,
    Gusto: 4.7,
    WXYZ: 4.3,
    Fika: 4.3,
    Bravo: 4.7,
    }

const starTotal = 5

document.addEventListener('DOMContentLoaded',getRatings)

function getRatings(){
    for(let rating in ratings){

        const starPercentage = (ratings[rating]/ starTotal) * 100

        const starPercentageRounded = `${Math.round(starPercentage / 10)*10}%`

        //Set width of stars-inner to percentage
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded
    }
} 