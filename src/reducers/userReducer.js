const initState = {
  name: "",
  isLogged: false,
}

const userReducer= (state=initState,action) => {
  switch(action.type){
    case "FETCH_GAMES":
      return {...state}
    default:
      return {...state}
  }
}
export default userReducer;