let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]

const getParkingLotState = () => {
    let state = {totalSlots: 0, availableSlots: 0, occupiedSlots: 0}

    for(let i = 0; i < parking_state.length; i++){
        for(let j = 0; j < parking_state[i].length; j++){
            
            if(parking_state[i][j] === 1){
                state.occupiedSlots += 1
                state.totalSlots += 1
            }
            if(parking_state[i][j] === 2){
                state.availableSlots += 1
                state.totalSlots += 1
            }
        }
    }

    return state;
}

console.log(getParkingLotState(parking_state))