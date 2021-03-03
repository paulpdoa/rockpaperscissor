const playerHand = document.querySelectorAll('.player-options button')

playerHand.forEach(playerWeapon => {
    playerWeapon.addEventListener('click',function(){
            console.log(this);
        })
})

const gameWinner = () => {
    const computerChoice = ["rock","paper","scissor"]
    //selects the option of player 
    playerHand.forEach(option => {
        option.addEventListener('click',function(){
            //select the choice of computer in the array
            const randomChoice = Math.floor(Math.random() * 3)
            const computerWeapon = computerChoice[randomChoice]
            //compare the player choice to the computer choice
            compareHand(this.textContent, computerWeapon)
        })
    })   
}
//compare hands
const compareHand = (playerWeapon,computerWeapon) => {
    const result = document.querySelector('.score')
    const computerOption = document.querySelector('.computer')
    if(playerWeapon === computerWeapon){
            result.textContent = "Draw!"
            computerOption.textContent = "Computer choice is " + computerWeapon
            return;
        }
        if(playerWeapon === "rock"){
            if(computerWeapon === "paper"){
                result.textContent = "Computer Wins!"
                computerOption.textContent = "Computer choice is " + computerWeapon
                return;
            } else {
                result.textContent = "Player Wins!"
                computerOption.textContent = "Computer choice is " + computerWeapon
                return;
            }
        }
        if(playerWeapon === "scissor"){
            if(computerWeapon === "paper"){
                result.textContent = "Player Wins!"
                computerOption.textContent = "Computer choice is " + computerWeapon
                return;
            } else {
                result.textContent = "Computer Wins!"
                computerOption.textContent = "Computer choice is " + computerWeapon
                return;
            }
        }
        if(playerWeapon === "paper"){
            if(computerWeapon === "rock"){
                result.textContent = "Player Wins!"
                computerOption.textContent = "Computer choice is " + computerWeapon
                return;
            } else {
                result.textContent = "Computer Wins!"
                computerOption.textContent = "Computer choice is " + computerWeapon
                return;
            }
        }
    }
 

gameWinner()
