const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const ques = document.querySelector(".ques");
const hearts = document.querySelector("#sectionHeart");
const b = document.querySelectorAll(".b");
const btn = document.querySelectorAll(".btn");

let amountOfHearts = 3;

// function to blink:

const blink = function () {
    // const prevInfo = getComputedStyle(element).display;

    b.forEach((element) => {
        element.style.display = "none";
    });

    setTimeout(() => {
        b.forEach((element) => {
            element.style.display = "block";
        });
    }, 100);
};

// function for hearts calculation

const heartsAmount = function () {
    switch (hearts.innerText) {
        case "❤️❤️❤️":
            hearts.innerText = "❤️❤️ ";
            amountOfHearts = 2;
            break;
        case "❤️❤️":
            hearts.innerText = "❤️  ";
            amountOfHearts = 1;
            break;
        case "❤️":
            hearts.innerText = "";
            ques.innerText = "You lost";
            amountOfHearts = 0;
            break;
    }
};

// function for setting back to normal color

const resetColor = () => {
    btn.forEach((element) => {
        element.style.backgroundColor = "#F0DC82";
        element.style.borderColor = "red";
        element.style.color = "red";
    });
};

// function for wrong opinion

const wrong = function (btn) {
    btn.style.backgroundColor = "red";
    btn.style.color = "darkred";
    btn.style.borderColor = "darkred";
    btn.innerText += " (Wrong)";
};

// function for right opinion

const right = function (quess, btn11, btn22, btn33, btn44) {
    ques.innerText = quess;
    btn1.innerText = btn11;
    btn2.innerText = btn22;
    btn3.innerText = btn33;
    btn4.innerText = btn44;
};

// function for wrong sound

const soundWrong = function () {
    const sound = new Audio("./sound/wrong.mp3");
    sound.currentTime = 1;
    sound.play();
}

// function for right sound

const soundRight = function () {
    const sound = new Audio("./sound/right.mp3");
    sound.currentTime = 0.1;
    sound.play();
}

// normal code

let x = 0;
const sound = new Audio("./sound/Untitled.mp3");

document.addEventListener("keydown", event => {

    if (event.ctrlKey && event.key === "q" && x === 0) {
        sound.play();
        ++x;
    } else if (event.ctrlKey && event.key === "q" && x !== 0) {
        sound.pause();
        x = 0;
    }
});

btn1.addEventListener("click", function () {
    blink();

    const wrongAnswers = ["Pizza", "Hindu, Muslim and Christian", "Cricket", "Around 7 billion", "Arya Bhatt", "8"];

    if (wrongAnswers.includes(this.innerText)) {
        wrong(this);

        soundWrong();

        heartsAmount();
    } else if (this.innerText === "India" && amountOfHearts > 0) {
        // ques.innerText =
        //     "";
        // btn1.innerText = "";
        // btn2.innerText = "";
        // btn3.innerText = "";
        // btn4.innerText = "";

        soundRight();

        right(
            "James Mill devided Indian history into three periods, what are those periods?",
            "Hindu, Muslim and Christian",
            "Hindu, Jains and Christian",
            "Hindu, Muslim and British",
            "None of the above"
        )

        resetColor();
    } else if (this.innerText === "Charles Babbage" && amountOfHearts > 0) {
        // ques.innerText =
        //     "";
        // btn1.innerText = "";
        // btn2.innerText = "";
        // btn3.innerText = "";
        // btn4.innerText = "";

        soundRight();

        right(
            "Who discovered Gravity",
            "Arya Bhatt",
            "Isaac Newton",
            "You",
            "Albert Einstein"
        )

        resetColor();
    } else if (this.innerText === "Yes" && amountOfHearts > 0) {
        window.location.href = "./end.html";
    }
});

btn2.addEventListener("click", function () {
    blink();

    const wrongAnswers = ["Burger", "America", "Hindu, Jains and Christian", "Around 10 billion", "Nikola Tesla", "4", "No"];

    if (wrongAnswers.includes(this.innerText)) {
        wrong(this);

        soundWrong();

        heartsAmount();
    } else if (this.innerText === "Soccer / Football" && amountOfHearts > 0) {
        soundRight();

        right(
            "What is the world population",
            "Around 7 billion",
            "Around 10 billion",
            "Around 8 billion",
            "Around 5 billion"
        )
    } else if (this.innerText === "Isaac Newton" && amountOfHearts > 0) {
        // ques.innerText =
        //     "";
        // btn1.innerText = "";
        // btn2.innerText = "";
        // btn3.innerText = "";
        // btn4.innerText = "";

        soundRight();

        right(
            "What is the value of x in this equation:- 2(11x) + 9 = 9",
            "8",
            "4",
            "10",
            "0"
        )

        resetColor();
    }
});

btn3.addEventListener("click", function () {
    blink();

    const wrongAnswers = ["Pasta", "China", "Baseball", "Graham Bell", "You", "10", "Existed before"];

    if (wrongAnswers.includes(this.innerText)) {
        wrong(this);

        soundWrong();

        heartsAmount();
    } else if (this.innerText === "Hindu, Muslim and British" && amountOfHearts > 0) {
        soundRight();

        right(
            "What is the largest / most famous sport in the world?",
            "Cricket",
            "Soccer / Football",
            "Baseball",
            "Running"
        )

        resetColor();
    } else if (this.innerText === "Around 8 billion" && amountOfHearts > 0) {
        window.location.href = "./end.html";
    }
});

btn4.addEventListener("click", function () {
    blink();

    const wrongAnswers = ["Russia", "None of the above", "Running", "Around 5 billion", "Arya Bhatt", "Albert Einstein", "None of the above"];

    if (this.innerText === "All of the above" && amountOfHearts > 0) {
        // ques.innerText = "Which country is famous for it's spices?";
        // btn1.innerText = "India";
        // btn2.innerText = "America";
        // btn3.innerText = "China";
        // btn4.innerText = "Russia";

        soundRight();

        right(
            "Which country is famous for it's spices?",
            "India",
            "America",
            "China",
            "Russia"
        )

        resetColor();
    } else if (wrongAnswers.includes(this.innerText)) {
        wrong(this);

        soundWrong();

        heartsAmount();
    } else if (this.innerText === "0" && amountOfHearts > 0) {
        soundRight();

        right(
            "Is 'The Bahamas' a country?",
            "Yes",
            "No",
            "Existed before",
            "None of the above"
        )

        resetColor();
    }
});
