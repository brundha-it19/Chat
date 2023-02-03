export default
{
    state:
    {
        User:{}
    },
    mutations:
    {
        SetUser(state,UserData)
        {
            state.User=UserData
        }
    },
    actions:
    {
        GetUser({commit},UserData)
        {
            commit('SetUser',UserData)
        }
    },
    getters:
    {
        RetrieveUserDetails(state)
        {
            console.log(state.User)
            return state.User
        }
    },
    namespaced: true
}