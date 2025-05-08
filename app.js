const slides = document.querySelector(".shoplist");
let slidiki = {
    slide1: {
        count: 1, 
        photo: "items/item1.png", 
        name: "Маска спамера" 
        },
        slide2: 
        { count: 2, 
        photo: "items/item2.png", 
        name: "Красная шапочка" 
        },
        slide3: 
        { count: 3, 
        photo: "items/item3.png", 
        name: "Волнительная гитара" 
        },
        slide4: 
        { count: 4, 
        photo: "items/item4.png", 
        name: "Сделано людьми" 
        },
        slide5: 
        { count: 5, 
        photo: "items/item5.png", 
        name: "Дайте танк!"
        },
        slide6: 
        { count: 6, 
        photo: "items/item6.png", 
        name: "Сбежавший Волк" 
        },
        slide7: 
        { count: 7, 
        photo: "items/item7.png", 
        name: "пщугхп" 
        }
};

let scrollcount = 3;
const scrollers = 7;
slides.scrollLeft = slides.clientWidth / 3.5;

document.querySelector("#shopprevious").onclick = function () {
    shop(-1);
    console.log("previous clicked");
};

document.querySelector("#shopnext").onclick = function () {
    shop(1);
    console.log("next clicked");
};

function shop(direction) {
    scrollcount = scrollcount + direction;

    if (scrollcount >= scrollers) {
        scrollcount = scrollcount % scrollers;
    } else if (scrollcount < 0) {
        scrollcount = scrollcount + scrollers;
    }

    let supaminus = Math.abs((scrollcount + 4) % scrollers) + 1
    let supaplus = (scrollcount + 1) % scrollers + 1;
    const parent = document.querySelector(".shoplist");
    if (direction === -1) {
        parent.insertAdjacentHTML("afterbegin", `<div class="shopcard" data-count="${supaminus}"></div>`);
        parent.querySelector(".shoplist :nth-child(6)").remove();
    } else if (direction === 1) {
        parent.insertAdjacentHTML("beforeend", `<div class="shopcard" data-count="${supaplus}"></div>`);
        parent.querySelector(".shoplist :nth-child(1)").remove();
    }

    slides.scrollBy(direction * 100, 0);

    updateShopCards();
}

function updateShopCards() {
    const cards = document.querySelectorAll(".shopcard");
    cards.forEach(card => {
        const count = parseInt(card.getAttribute("data-count"));
        for (let key in slidiki) {
            if (slidiki[key].count === count) {
                card.style.backgroundImage = `url(${slidiki[key].photo})`;
                break;
            }
        }
    });
}

const tickets = document.querySelectorAll(".buy");

tickets.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = "https://live.mts.ru/moscow/announcements/motherland-2025?utm_source=advcake&utm_medium=cpa&utm_campaign=affiliate&utm_content=7e9fe989&advcake_params=fc300133d6975278e7424c837f4545f5&utm_term=fc300133d6975278e7424c837f4545f5&erid=LdtCKA1JE&advcake_method=2&m=2";
    });
});