import { mapGetters } from "vuex";

export default
{
    name: "chat_header",
    data()        
    {
        return{
            users:[]
        }
    },
    props:
    {
        
        detail:
        {
            type: String,
        }

    },
    mounted:{
            // users = this.RetrieveChat
            // console.log(users)
    },
    computed:
    {
         ...mapGetters('GroupMember',['RetrieveMember']),
         ...mapGetters('ChatStore',['RetrieveChat'])
    },
    methods:
    {
        ShowGroupMember()
        {
            document.getElementById("Form1").style.display = "block";
        },
        Cancel()    
        {
            document.getElementById("Form1").style.display = "none";
        }
    }
}