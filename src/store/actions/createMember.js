import { useFirebase } from 'react-redux-firebase'

export const createMember = (member) =>{
    return (dispatch, getState, getFirebase)=>{
        //make async call to firebase

        const firebase = useFirebase()
        firebase.push('members', member)
        .then(()=>{
            dispatch({type: "CREATE_MEMBER", member: member})
        })
        .catch((err) => {
            dispatch({type: "CREATE_MEMBER_ERR", member: member})
        })
    }
}