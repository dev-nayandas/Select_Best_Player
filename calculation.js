const playerArray = [];

function selectPlayer(player){
//  console.log(player.parentNode.parentNode.children[1].innerText) ;   
 const playerName = player.parentNode.parentNode.children[1].innerText;
//  console.log(playerName) ;

 const playerObj ={
    playerName : playerName,
 }

 playerArray.push(playerObj);
 console.log(playerArray.length) ;
 document.getElementById('total-players').innerText = playerArray.length;
}



function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

document.getElementById('calculationButton').addEventListener('click', function(){
  
    const costString = getInputFieldValueById('perPlayerCost');
    const costAmount = parseFloat(costString) * playerArray.length;
    const costTotalElement = document.getElementById('playerTotalCost');
    const costTotalString = costTotalElement.innerText;
    const previousCostTotal = parseFloat(costTotalString);
    const currentCostTotal =  costAmount;
    costTotalElement.innerText = currentCostTotal;
});

document.getElementById('finalCost').addEventListener('click', function() {

    const playerCostString = document.getElementById('playerTotalCost').innerText;
    const playerCostAmount = parseFloat(playerCostString);
    const managerCost = getInputFieldValueById('managerCost');
    const coachCost = getInputFieldValueById('coachCost');
    const finalCostElement = document.getElementById('playerFinalCost');
    const costFinalString = finalCostElement.innerText;
    const previousCostFinal = parseFloat(costFinalString);
    const currentCostFinal =  managerCost + coachCost + playerCostAmount;
    finalCostElement.innerText = currentCostFinal;
    console.log(currentCostFinal)
   
})