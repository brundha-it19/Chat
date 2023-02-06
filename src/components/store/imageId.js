export default
{
    state:
    {
        imageId:{}     
    },
    mutations:   
    {
        setImageId(state,data)                
        {
            state.imageId=data
            // console.log(state.chat)
        }
    },
    actions:
    {
        store_image_id:({commit},userdata)=>
         {
            // console.log(userdet)
             commit('setImageId',userdata) 
            
        }
    },
    getters:
    {
        RetrieveImageId(state)
        {
            return state.imageId
        }

    },
    namespaced: true
}