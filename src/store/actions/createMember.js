export const createMember = (member) =>{
    return (dispatch, getState, getFirebase)=>{
        //make async call to firebase

        dispatch({type: "CREATE_MEMBER", member: member})
    }
}