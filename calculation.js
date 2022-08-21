function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

document.getElementById('calculationButton').addEventListener('click', function(){
  
    const costString = getInputFieldValueById('perPlayerCost');
    const costAmount = parseFloat(costString) * 5;
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