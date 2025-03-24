let bank = 100;
let highScore = 100;
let wonCount = 0;
let lossCount = 0;
let wonMoney = 0;
let lossMoney = 0;

const players = [
  { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
  { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
  { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]


// function drawTeam1() {
//   const team1Container = document.getElementById('teamOne');
//   let team1Content = ''; // Create empty  container first

//   const team1Players = players.filter(player => player.teamNumber == 1);
//   // team1Players.forEach(player => {
//   //     team1Content += `<div class="player">${player.emoji} ${player.name}</div>`;
//   // });
//   // team1Container.innerHTML = team1Content;
//   team1Players.forEach(player => team1Content += player.emoji);
//   team1Container.innerText = team1Content;
//   //.. loop through players adding only those on team1
// }

// function drawTeam2() {
//   const team2Container = document.getElementById('teamTwo');
//   let team2Content = ''; // Create empty  container first

//   const team2Players = players.filter(player => player.teamNumber == 2);
//   // team1Players.forEach(player => {
//   //     team1Content += `<div class="player">${player.emoji} ${player.name}</div>`;
//   // });
//   // team1Container.innerHTML = team1Content;
//   team2Players.forEach(player => team2Content += player.emoji);
//   team2Container.innerText = team2Content;
//   //.. loop through players adding only those on team1
// }



function drawTeams() {
  // drawTeam1();
  // drawTeam2();

  /* NOTE set up for Team 1 */
  const team1Container = document.getElementById('teamOne');
  let team1Content = ''; // Create empty  container first

  const team1Players = players.filter(player => player.teamNumber == 1);
  team1Players.forEach(player => team1Content += player.emoji);
  team1Container.innerText = team1Content;

  /* NOTE set up for Team 2 */
  const team2Container = document.getElementById('teamTwo');
  let team2Content = ''; // Create empty  container first

  const team2Players = players.filter(player => player.teamNumber == 2);
  team2Players.forEach(player => team2Content += player.emoji);
  team2Container.innerText = team2Content;

}

// function betTeam1() {
//   // const team1Skill = 0
//   // const team2Skill = 0

//   // players.forEach((player) => {
//   //   if (player.teamNumber == 1) {
//   //     team1Skill += player.skill;
//   //   }
//   //   else {
//   //     team2Skill += player.skill;
//   //   }
//   //   // add each players skill to the appropriate variable
//   // })

//   // console.log('⚽ team 1', team1Skill)
//   // console.log('🏈 team 2', team2Skill)
//   /* REVIEW:  Initial set up I had above but gave me error due to const. Did I not follow the instructions correctly?*/

//   let team1Skill = 0
//   let team2Skill = 0

//   // players.forEach((player) => {
//   //   if (player.teamNumber == 1) {
//   //     team1Skill += player.skill;
//   //   }
//   //   else {
//   //     team2Skill += player.skill;
//   //   }
//   //   // add each players skill to the appropriate variable
//   // })

//   /* REVIEW to avoid nesting above (using below) */

//   const team1Players = players.filter(player => player.teamNumber == 1)
//   const team2Players = players.filter(player => player.teamNumber == 1)

//   team1Players.forEach(player => team1Skill += player.skill);

//   team2Players.forEach(player => team2Skill += player.skill);

//   if (team1Skill > team1Skill) {
//     bank += 25;
//   }
//   else (team1Skill < team1Skill)
//   {
//     bank -= 25;
//   }

//   console.log('⚽ team 1', team1Skill);
//   console.log('🏈 team 2', team2Skill);

//   checkFunds();

//   // createTeams();
//   drawTeams();

// }

// function betTeam2() {
//   const team1Players = players.filter(player => player.teamNumber == 1)
//   const team2Players = players.filter(player => player.teamNumber == 2)

//   let team1Skill = 0
//   let team2Skill = 0

//   players.forEach((player) => {
//     if (player.teamNumber == 1) {
//       team1Skill += player.skill;
//     }
//     else {
//       team2Skill += player.skill;
//     }
//     // add each players skill to the appropriate variable
//   })

//   if (team1Skill > team1Skill) {
//     bank += 25;
//   }
//   else (team1Skill < team1Skill)
//   {
//     bank -= 25;
//   }

//   console.log('⚽ team 1', team1Skill);
//   console.log('🏈 team 2', team2Skill);

//   // createTeams();
//   drawTeams();
// }

function teamBet(teamNumber, bet) {
  //If they are poor, let them know that they are bad and should feel bad.
  if (bet > bank) {
    window.alert(`You can't cover a bet with ${bet} when you only got ${bank}. Have you thought about not being poor?`);
    return;
  }

  let yourBettingTeamScore = 0;
  let opposingTeamScore = 0;

  const yourBettingTeam = players.filter(player => player.teamNumber == teamNumber);
  const opposingTeam = players.filter(player => player.teamNumber != teamNumber);

  //Setting up the scores after filtering out the teams
  yourBettingTeam.forEach(player => yourBettingTeamScore += player.skill);
  opposingTeam.forEach(player => opposingTeamScore += player.skill);


  if (yourBettingTeamScore > opposingTeamScore) {
    bank += bet;
    betCount('won', bet);
  }
  else if (yourBettingTeamScore < opposingTeamScore) {
    bank -= bet;
    betCount('loss', bet);
  }

  checkFunds();
  drawFunds();
  createAndDrawTeams();
}

//method for counting wins and losses
function betCount(outcome, bet) {
  const trackScoreElement = document.getElementById("trackScore");
  const trackMoneyElement = document.getElementById("trackMoney");
  if (outcome == "won") {
    wonCount++;
    wonMoney += bet;
  }
  else {
    lossCount++;
    lossMoney += bet;
  }

  trackScoreElement.innerText = `Wins: ${wonCount} / Losses: ${lossCount}`;
  trackMoneyElement.innerText = `Won total: $${wonMoney} and Lost total: $${lossMoney}`;
}


//method for drawing funds AND Highest Score so far.
function drawFunds() {
  const bankElement = document.getElementById("bank");
  bankElement.innerText = `$${bank}`;

  // NOTE: Checking for highest score here. Setting to equal or higher since value set to 100
  if (bank >= highScore) {
    highScore = bank;

    const scoreElement = document.getElementById("highScore");
    scoreElement.innerText = `$${highScore}`;
  }
}


function checkFunds() {
  if (bank <= 0) {
    window.alert("You are out of money and the load sharks are coming. You better lay low for a while.");
  }
}


//Much like in PE, teams were 'random' wink wink nod nod
function createAndDrawTeams() {
  players.forEach(player => {
    const randomTeamNumber = Math.ceil(Math.random() * 2) //using ceil (round up) will make the choices from 1 to 2
    player.teamNumber = randomTeamNumber
  })

  drawTeams();
}


//Setting up the initial game
createAndDrawTeams();
drawFunds();