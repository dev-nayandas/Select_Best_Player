const playerArray = [];
function display(cartPlayer) {
    // console.log(cartPlayer)
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = "";
    for(let i = 0; i < cartPlayer.length; i++) {
        console.log(playerArray[i].playerName);
        const name = playerArray[i].playerName;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th scope="row">${i+1}</th>
         <td>${name}</td>
        `;
        tableBody.appendChild(tr);
    }
    if(playerArray.length >=5 ) {
        alert('Please select five player only');
    }
}

function selectPlayer(player){
//  console.log(player.parentNode.parentNode.children[1].innerText) ;   
 const playerName = player.parentNode.parentNode.children[1].innerText;
//  console.log(playerName) ;

 const playerObj ={
    playerName : playerName,
 }

 playerArray.push(playerObj);
//  console.log(playerArray.length) ;
 document.getElementById('total-players').innerText = playerArray.length;
 display(playerArray)
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