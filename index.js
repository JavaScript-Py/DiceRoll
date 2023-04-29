let maxValue = '';

const buttons = document.querySelectorAll("[data-dado]");

listeningToEvent();

function diceRoll() {
    //Generates randomly a number depending on the variable maxValue.

    const max = Math.floor(maxValue);

    const result = Math.floor(Math.random() * (max - 1) + 1);

    window.alert(result);

}

function listeningToEvent() {
    //Gets all HTML button and puts a EventListener that triggers the function diceRoll.
    buttons.forEach(dice => {

        dice.addEventListener('click', e => {

            clickedButton = dice.getAttribute("data-dice");

            maxValue = parseInt(clickedButton);

            diceRoll();

        });

    });

}