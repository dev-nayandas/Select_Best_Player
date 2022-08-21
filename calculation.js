// function getInputFieldValueById(inputFieldId) {
//     const inputField = document.getElementById(inputFieldId);
//     const inputFieldValueString = inputField.value;
//     const inputFieldValue = parseFloat(inputFieldValueString);
//     inputField.value = '';
//     return inputFieldValue;
// }




document.getElementById('calculationButton').addEventListener('click', function(){

   
    const perPlayerCost = document.getElementById('perPlayerCost').value;
    const perPlayerCostValue = parseFloat(perPlayerCost);
    const totalPlayerCost = perPlayerCostValue * 5;
    let playerInitialCostString = document.getElementById('playerTotalCost').innerText;
    const playerInitialCost = parseFloat(playerInitialCostString);
    const finalCost = totalPlayerCost + playerInitialCost;
    playerInitialCostString.innerText = finalCost;
    console.log(finalCost);
})