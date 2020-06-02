const game = ()=>{

let pruns = 0;
let pwickets = 0;
let cruns = 0;
let cwickets = 0;
let battingfirst = "";
let battingsecond = "";
let playerdidBatting = false;
let computerdidBatting = false;


    const open = ()=>{



        const playbutton = document.querySelector('.firstframe button');
        const firstframe = document.querySelector('.firstframe');
        const secondframe = document.querySelector('.secondframe');
        const thirdframe = document.querySelector('.thirdframe');
        const final = document.querySelector('.final')
        
        const coins = document.querySelectorAll('.coins button');
        const tossresult = document.querySelector('.toss-result');
        const tosses = document.querySelector('.toss');
        const coin = document.querySelector('.coins');
        const but = document.querySelector('.buttons');
        const buttons = document.querySelectorAll('.buttons button');
        const letplay = document.querySelector('.letplay');
        const finalTit = document.querySelector('.finalTit');

        const modal = document.getElementById("myModal");
        const span = document.getElementsByClassName("close")[0];

        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.images img');


span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
        console.log(coins);
        playbutton.addEventListener('click',()=>{

            firstframe.classList.add('fadeOut');
            secondframe.classList.remove('fadeOut');
            secondframe.classList.add('fadeIn');

        });


        coins.forEach(option=>{


         option.addEventListener('click', ()=>{

        const img = document.querySelector('.img-container');
        img.classList.add('flip');
        img.addEventListener('animationend', function() { toss() })
        
        });
         

        const toss = ()=>{

            let tossWinner = "";
            tosses.classList.add('fadeOut');
            coin.classList.add('fadeOut');
            tossresult.classList.remove('fadeOut');
            tossresult.classList.add('fadeIn');

            const num = Math.floor(Math.random() * 2) + 1;
            let res = "";
            if(num === 1){
                res = "Heads"
            }
            else{
                res="Tails"
            }

            const tit = document.querySelector('.tit');
            const dis = document.querySelector('.dis');
            const choiceq = document.querySelector('.choice-q');
            let cho = "";
            if(option.textContent === res){

                tit.innerHTML = `IT'S A ${res}!!`;
                dis.innerHTML = `PLAYER HAS WON THE TOSS!!`
                choiceq.innerHTML = `WHAT WOULD YOU LIKE TO DO?`
                tossWinner = "player";

            }
            else{
                tit.innerHTML = `IT'S A ${res}!!`;
                dis.innerHTML = `COMPUTER HAS WON THE TOSS!!`
                tossWinner = "computer";
            const dec = Math.floor(Math.random() * 2) + 1;
            
            if(dec === 1){
                cho = "BATTING"
            }
            else{
                cho="BOWLING"
            }

            choiceq.innerHTML = `COMPUTER DECIDES TO TAKE ${cho}`
            but.classList.add('fadeOut');
            letplay.classList.add('fadeIn');

            }
            

            buttons.forEach(but =>{

let playerchoice = '';

                but.addEventListener('click', ()=>{
                    tossresult.classList.remove('fadeIn');
            tossresult.classList.add('fadeOut');
            secondframe.classList.add('fadeOut');
            thirdframe.classList.remove('fadeOut');
            thirdframe.classList.add('fadeIn');
            playerchoice = but.textContent;
            startMatch(tossWinner.toLowerCase(), playerchoice.toLowerCase());



                });
            });

            letplay.addEventListener('click', ()=>{
                tossresult.classList.remove('fadeIn');
            tossresult.classList.add('fadeOut');
            secondframe.classList.add('fadeOut');
            thirdframe.classList.remove('fadeOut');
            thirdframe.classList.add('fadeIn');
            startMatch(tossWinner.toLowerCase(), cho.toLowerCase());

            });

            
        }



        



        });

        //main code
        const startMatch = (tossWinner, choice)=>{
            const com2 = document.querySelector('.com2');



const switchInnings = ()=>{

const com1 = document.querySelector('.com1');
const modalText = document.querySelector('.modaltext');

setTimeout(()=>{


if(playerdidBatting == true && computerdidBatting == false){
        modal.style.display = "block";
        modalText.innerHTML = `Player's innings Ended for a score of ${pruns} / ${pwickets}. Computer will Bat now`;
        com1.innerHTML = `Computer will Bat now`;
        computerBatting();
    }
    else if(playerdidBatting == false && computerdidBatting == true){
        modal.style.display = "block";
        modalText.innerHTML = `Computer's innings Ended for a score of ${cruns} / ${cwickets}. Player will Bat now`;
        com1.innerHTML = `Player will Bat now`;
        playerBatting();
    }
    else{
        
        console.log("Game finished swicth");
    }

},2500);
    

}

            const playerBatting = () =>{

                hands.forEach(hand =>{

            hand.addEventListener('animationend', function(){

                this.style.animation ="";

            });

        });

                
playerdidBatting = true;

            let j = 12;
            const com1 = document.querySelector('.com1');
                    com1.innerHTML="Player is Batting Now";
            com2.innerHTML = `12 Balls are left`;

            const runs = document.querySelectorAll('.run-but');
            const one = document.querySelector('.one');
            const two = document.querySelector('.two');
            const three = document.querySelector('.three');
            const four = document.querySelector('.four');
            const five = document.querySelector('.five');
            const six = document.querySelector('.six');

            const playerHand = document.querySelector('.player-hand');
            const computerHand = document.querySelector('.computer-hand');

            one.addEventListener('click', ()=>{
                if(j>=1){
            updateImage(1);
            --j;
            }
            if(j<1){
                console.log('else');
                switchInnings();
            }
            });

            two.addEventListener('click', ()=>{
                if(j>=1){
            updateImage(2);
            --j;
            }
            if(j<1){
            
                switchInnings();
            }
            });

            three.addEventListener('click', ()=>{
                if(j>=1){
            updateImage(3);
            --j;
            }

            if(j<1){
                
                switchInnings();
            }
            });

            four.addEventListener('click', ()=>{
                if(j>=1){
            updateImage(4);
            --j;
            }
            if(j<1){
                
                switchInnings();
            }
            });

            five.addEventListener('click', ()=>{

                if(j>=1){
            updateImage(5);
            --j;
            }

            if(j<1){
               
                switchInnings();
            }
            });

            six.addEventListener('click', ()=>{

                if(j>=1){
            updateImage(6);
            --j;
            }

            if(j<1){
                
                switchInnings();
            }
            });
            
            const updateImage = (value)=>{
                const compHand = Math.floor(Math.random() * 6) + 1;

                setTimeout(()=> {
                    
                    playerHand.src=`./images/${value}.svg`;
                computerHand.src = `./images/${compHand}.svg`;
                checkWicket(value,compHand);


                },2000);

                playerHand.style.animation = "shakePlayer 2s ease"
                computerHand.style.animation = "shakeComputer 2s ease"

                
            }

            const prunsH1 = document.querySelector('.PrunsH1');
            const pwicketsH1 = document.querySelector('.PwicketsH1');
            const crunsH1 = document.querySelector('.CrunsH1');
            const cwicketsH1 = document.querySelector('.CwicketsH1'); 

            const checkWicket = (playerHand, compHand)=>{

                console.log(`${playerHand} and ${compHand}`);

                    com2.innerHTML = `${j} Balls are left`;
                     

                if(playerHand == compHand){
                    pwickets = pwickets +1;
                    pwicketsH1.innerHTML = pwickets;

                    if(pwickets == 5){
                        console.log(" player all out");
                        switchInnings();
                        pwicketsH1.innerHTML = 5;
                    }
                    
            
                }
                else{
                    updatePlayerScore(playerHand,compHand);
                    
            
                }
                checkWinning(j);
            }

            
            const updatePlayerScore = (playerHand,compHand)=>{

                pruns = pruns + playerHand;
                prunsH1.innerHTML = pruns;     
            };

            if(j==1){
                switchInnings();
            }
            
            }
            
        

//player battting ends


    const computerBatting = ()=>{

        hands.forEach(hand =>{

            hand.addEventListener('animationend', function(){

                this.style.animation ="";

            });

        });

        
computerdidBatting = true;

let i = 12;
const com1 = document.querySelector('.com1');
                    com1.innerHTML="Computer is Batting Now";
com2.innerHTML = `12 Balls are left`;



        const runs = document.querySelectorAll('.run-but');
            const one = document.querySelector('.one');
            const two = document.querySelector('.two');
            const three = document.querySelector('.three');
            const four = document.querySelector('.four');
            const five = document.querySelector('.five');
            const six = document.querySelector('.six');

            const playerHand = document.querySelector('.player-hand');
            const computerHand = document.querySelector('.computer-hand');


            one.addEventListener('click', ()=>{
            if(i>=1){
            updateImage(1);
            --i;
            }
            if(i<1){
                console.log('else');
                switchInnings();
            }
            });

            two.addEventListener('click', ()=>{
                if(i>=1){
            updateImage(2);
            --i;
            }
            if(i<1){
                
                switchInnings();
            }
            });

            three.addEventListener('click', ()=>{
                if(i>=1){
            updateImage(3);
            --i;
            }
            if(i<1){
                
                switchInnings();
            }
            });

            four.addEventListener('click', ()=>{
                if(i>=1){
            updateImage(4);
            --i;
            }
            if(i<1){
                
                switchInnings();
            }
            });

            five.addEventListener('click', ()=>{
                if(i>=1){
            updateImage(5);
            --i;
            }
            if(i<1){
            
                switchInnings();
            }
            });

            six.addEventListener('click', ()=>{
                if(i>=1){
            updateImage(6);
            --i;
            }
            if(i<1){
                switchInnings();
            }
            });
            
            const updateImage = (value)=>{
                
                const compHand = Math.floor(Math.random() * 6) + 1;

                setTimeout(()=> {
                    
                    playerHand.src=`./images/${value}.svg`;
                computerHand.src = `./images/${compHand}.svg`;
                checkWicket(value,compHand);


                },2000);

                playerHand.style.animation = "shakePlayer 2s ease"
                computerHand.style.animation = "shakeComputer 2s ease"

            }

            const prunsH1 = document.querySelector('.PrunsH1');
            const pwicketsH1 = document.querySelector('.PwicketsH1');
            const crunsH1 = document.querySelector('.CrunsH1');
            const cwicketsH1 = document.querySelector('.CwicketsH1'); 

            const checkWicket = (playerHand, compHand)=>{

                console.log(`${playerHand} and ${compHand}`);
                com2.innerHTML = `${i} Balls are left`;
                

                if(playerHand == compHand){
                    console.log(cwickets);
                    cwickets = cwickets +1;
                    cwicketsH1.innerHTML = cwickets;

                    if(cwickets == 5){
                        console.log(" computer all out");
                        switchInnings();
                    }
                }
                else{
                    updateComputerScore(playerHand,compHand);
                }
checkWinning(i);
               
            }

            
            const updateComputerScore = (playerHand,compHand)=>{
                  console.log(cruns);
                cruns = cruns + compHand;
                crunsH1.innerHTML = cruns;  
            };

if(i==2){
                switchInnings();
            }
            
            


        }
        
    
    //computer batting ends

    const checkWinning = (ballLeft)=>{

        const com1 = document.querySelector('.com1');

        if(battingsecond == "computer"){

            if(pruns!= 0 && cruns>pruns){

                com1.innerHTML = `Computer wins`;
                thirdframe.classList.add('fadeOut');
            final.classList.remove('fadeOut');
            final.classList.add('fadeIn');
            finalTit.innerHTML = `COMPUTER WINS THE MATCH`;
            }
            else if(cwickets == 5 && cruns<pruns && pruns != 0){

                com1.innerHTML = `Player wins`;
                thirdframe.classList.add('fadeOut');
            final.classList.remove('fadeOut');
            final.classList.add('fadeIn');
            finalTit.innerHTML = `PLAYER WINS THE MATCH`;
                console.log('1');
            }

            else if(ballLeft == 0 && cruns<pruns && cruns !=0){

                com1.innerHTML = `Player Wins`;
                thirdframe.classList.add('fadeOut');
            final.classList.remove('fadeOut');
            final.classList.add('fadeIn');
            finalTit.innerHTML = `PLAYER WINS THE MATCH`;
                console.log('2');


            }


        }
        if(battingsecond == "player"){

            if(cruns!= 0 && pruns>cruns){

                com1.innerHTML = `Player wins`;
            thirdframe.classList.add('fadeOut');
            final.classList.remove('fadeOut');
            final.classList.add('fadeIn');
            finalTit.innerHTML = `PLAYER WINS THE MATCH`;
            }
            else if(pwickets == 5 && pruns<cruns && cruns != 0){

                com1.innerHTML = `Computer wins`;
                thirdframe.classList.add('fadeOut');
            final.classList.remove('fadeOut');
            final.classList.add('fadeIn');
            finalTit.innerHTML = `COMPUTER WINS THE MATCH`;
            }

            else if(ballLeft == 0 && pruns<cruns && pruns !=0 ){

                com1.innerHTML = `Computer Wins`;
                thirdframe.classList.add('fadeOut');
            final.classList.remove('fadeOut');
            final.classList.add('fadeIn');
            finalTit.innerHTML = `COMPUTER WINS THE MATCH`;

            }

        }


    }

//check result is left, updating comm box is left, 



            if(tossWinner == "player" && choice == "batting"){

                playerBatting();
                battingfirst = "player";
                battingsecond = "computer";
            }
            else if(tossWinner == "computer" && choice == "bowling"){
                playerBatting();
                battingfirst = "player";
                battingsecond = "computer";
            }
            else{
                computerBatting();
                battingfirst = "computer";
                battingsecond = "player";

            }

            const tosswin = document.querySelector('.tosswinner');
            console.log("from start match function");
            tosswin.innerHTML = `${tossWinner} has won the toss and chose ${choice}`;




        }

        const finalBut = document.querySelector('.home');

        finalBut.addEventListener('click', ()=>{
            
            location.reload();


        });
    }

open();

}

game();