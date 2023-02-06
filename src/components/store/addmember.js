export default
{
    state:
    {
        addMem:{}

    },
    mutations:
    {
        setMember(state,data)
        {
            state.addMem=data
            // console.log(state.chat)
        }
    },
    actions:
    {
        add_member:({commit},payload)=>
         {
            // console.log(userdet)
             commit('setMember',payload) 
            
        }
    },
    getters:
    {
        Retrieve_AddMember(state)
        {
            return state.addMem
        }

    },
    namespaced: true
}