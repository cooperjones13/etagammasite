const initState = {
    members:[
        {id:254, name: "Cooper Jones", status: "active"},
        {id:257, name: "Madi Heath", status: "active"},
        {id:245, name: "Cassandra Goodby", status: "active"}
    ]
};
const memberReducer = (state = initState, action) =>{
    switch(action.type){
        case "CREATE_MEMBER":
            console.log("created member");
            console.log(action.member);
            break;
        default:
            console.log("Something went wrong?")
            return state;
    }
    return state;
}

export default memberReducer;