export default
{
    state:
    {
        image:{}     
    },
    mutations:   
    {
        setImage(state,data)                
        {
            state.image=data
            // console.log(state.chat)
        }
    },
    actions:
    {
        getImage:({commit},userdata)=>
         {
            // console.log(userdet)
             commit('setImage',userdata) 
        }
    },
    getters:
    {
        RetrieveImage(state)
        {
            console.log(state.image)
            return state.image
        }

    },
    namespaced: true
}