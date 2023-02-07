export default
{
    state:
    {
        login:{}     
    },
    mutations:   
    {
        setLogin(state,data)                
        {
            state.login=data
            // console.log(state.chat)
        }
    },
    actions:
    {
        login_response:({commit},userdata)=>
         {
            // console.log(userdet)
             commit('setLogin',userdata) 
        }
    },
    getters:
    {
        RetrieveLogin(state)
        {
            console.log(state.login)
            return state.login
        }
    },
    namespaced: true
}