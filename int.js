 /*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var count , score , roundSc , activePlayer , playGame;
init();
function init()
{
     playGame = true ;
	activePlayer = 0 ;
    count = 0;
    score = [0,0];
    roundSc = 0;
    
	document.getElementById('name-0').textContent = 'player 1';
	document.getElementById('name-1').textContent = 'player 2';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.dice').style.display = 'none';

}

function nextPlayer()
{
	if(playGame){
	document.getElementById('current-'+ activePlayer).textContent = '0';
	activePlayer===1?activePlayer=0:activePlayer=1;
	roundSc = 0;
	count = 0;
   document.querySelector('player-0-panel ').classList.toggle = active;
   document.querySelector('player-1-panel ').classList.toggle = active;

	}
}
document.querySelector('.btn-roll').addEventListener('click', function(){
        if(playGame){
         roundSc = Math.floor(Math.random() * 6) + 1;
        

        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + roundSc + '.png';

        if(roundSc!==1)
        {
        	count += roundSc ;
        document.getElementById('current-'+ activePlayer).textContent = count ;
        }
        else 
        {
        	nextPlayer();
        }

		}});
document.querySelector('.btn-hold').addEventListener('click' , function(){
	score[activePlayer] += count ; 
	count = 0;
	document.getElementById('score-'+ activePlayer).textContent = score[activePlayer];
	document.getElementById('current-' + activePlayer).textContent = '0';
	
	if(score[activePlayer] >= 20)
	{
		document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            playGame = false ;

	}
	else
		nextPlayer();
});
document.querySelector('.btn-new').addEventListener('click' , init );