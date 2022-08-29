
function turn(move) {
    computerMove = computer();
    play(move, "user-choice");
    play(computerMove, "computer-choice");
    evaluate(move, computerMove);
}


function play(move, player) {
    let image = document.getElementById(player);
    if (move == "rock") {
        image.src = "rock.webp";
    } else if (move == "paper") {
        image.src = "paper.png";
    } else {
        image.src = "scissors.png";
    }
}


function computer() {
    // choose rock, paper, or scissors
    let choice = Math.floor(Math.random() * 3);
    if (choice) {
        choice = (choice == 1) ? "paper" : "scissors";
    } else {
        choice = "rock";
    }

    return choice;
}


function evaluate(user, computer) {
    if (user == "rock") {
        if (computer == "scissors") {
            updateScore("user");
        } else if (computer == "paper") {
            updateScore("computer");
        }
    } else if (user == "paper") {
        if (computer == "rock") {
            updateScore("user");
        } else if (computer == "scissors") {
            updateScore("computer");
        }
    } else {
        if (computer == "paper") {
            updateScore("user");
        } else if (computer == "rock") {
            updateScore("computer");
        }
    }
}


function updateScore(player) {
    let target = (player == "user") ? "user-score" : "computer-score";
    let score = Number(document.getElementById(target).textContent);
    document.getElementById(target).textContent = (++score).toString();
}
