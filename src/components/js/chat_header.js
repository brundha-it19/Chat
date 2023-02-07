import axios from "axios";
import { mapActions, mapGetters } from "vuex";                                          

export default
{
    name: "chat_header",
    data()        
    {
        return{
            users:[],
            grp_detail:{
                contact:" "
            }
        }
    },
    props:
    {
        
        detail:
        {
            type: String,
        },
        data:
        {
            type: Object,
            default: {}      
        }
    },
    mounted:{
            // users = this.RetrieveChat
            // console.log(users)
    },
    computed:
    {
         ...mapGetters('GroupMember',['RetrieveMember']),
         ...mapGetters('ChatStore',['RetrieveChat']),
         ...mapGetters('remove_Member',['Retrieve_remMem']),
         ...mapGetters('ContactStore',['RetrieveContact']),
         ...mapGetters('addmember',['Retrieve_AddMember'])
    },
    methods:
    {
        ...mapActions('remove_Member',['remove_Member']),
        ...mapActions('addmember',['add_member']),
       
        ShowGroupMember()
        {
            document.getElementById("Form1").style.display = "block";
        },
        Cancel()    
        {
            document.getElementById("Form1").style.display = "none";
        },
        Cancel1()    
        {
            document.getElementById("remove").style.display = "none";
        },
        Cancel2()    
        {
            document.getElementById("Form2").style.display = "none";
        },
        Cancel3()    
        {
            document.getElementById("addmem").style.display = "none";
        },
        removemember()
        {                     
            document.getElementById("remove").style.display = "block";                                                
            this.remove_Member(this.data)               
            console.log(this.RetrieveChat.groupName)
            console.log(this.RetrieveMember[0].userid)
                axios.delete(`two/removeMember?groupid=${parseInt(this.RetrieveChat.id)}&userid=${this.RetrieveMember.userid}`).then((res) =>
                {                                           
                        console.log(res)                    
                })
        },
        addmember()
        {
        document.getElementById("Form2").style.display = "block";  
        },
         async addmember1()
        {
            document.getElementById("addmem").style.display = "block";  
        var res = await axios.post(`http://10.30.1.3:8085/addMember?groupid=${parseInt(this.RetrieveChat.id)}&userid=${this.grp_detail.contact}`)
        {
            console.log(res)
            console.log(res.data)       
            this.add_member(res.data)                                               
        }
        }   
           
    }
}