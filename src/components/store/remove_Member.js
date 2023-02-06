export default
{
    state:
    {
        rem:{}     
    },
    mutations:
    {
        remMem(state,data)                
        {
            state.rem=data
            // console.log(state.chat)
        }
    },
    actions:
    {
        remove_Member:({commit},userdet)=>
         {
            // console.log(userdet)
             commit('remMem',userdet) 
            
        }
    },
    getters:
    {
        Retrieve_remMem(state)
        {
            return state.rem
        }
    },
    namespaced: true
}