
let initialState = {
    gname: "Admin",
    user:{id:100,name:"Ravi",age:21},
    products:[],
    counter:100
}

function reducer(state=initialState,action){

    //console.log("event fired")
    console.log(action)
    if(action.type=="INCREMENT"){
        return {...state,"counter":state.counter+1}
    }

    if(action.type=="INCREMENT_DY"){
        return {...state,"counter":state.counter+eval(action.payload)}
    }

    return state;
}


export default reducer;