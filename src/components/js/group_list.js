import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default
    {
        name: "Group_list",
        data() {      
            return {
                flag: true,
                 groups:[]                              
            }                      
        },
        props:
        {
            data:
            {
                type: Object,
                default: {}      
            }
        },
        // created() {
        //     setInterval(() => {
        //         axios.get(`two/displaySpecific?groupid=${this.RetrieveChat.groupid}`).then((response1) => {
        //             console.log(response1)
        //             this.getGroup(response1)
        //         })

        //     }, 20000)


        // },
        computed:
        {
            ...mapGetters('ChatStore', ['RetrieveChat']),
            ...mapGetters('Message', ['RetrieveMessage']),
            ...mapGetters('GroupMember', ['RetrieveMember']),
            ...mapGetters('GroupStore',['RetrieveGroup']),
            ...mapGetters('User_Store',['RetrieveUserDetails'])
        },
        mounted()                 
        {
              this.groups=this.Retrieve_Group; 
              console.log(this.groups)
        },
        methods:
        {
            ...mapActions('ChatStore', ['getChat']),
            ...mapActions('Message', ['getMessage']),
            ...mapActions('GroupMember', ['getMember']),
            async display() {  
                // console.log(this.data); 
                // console.log(this.data.groupid)
                // window.localStorage.setItem('Chat', JSON.stringify(this.data))
                this.getChat(this.data);    
                console.log(this.data)
                    console.log(this.RetrieveGroup)       
                    // 1: groupid
                    // 2: gfh 
                    // console.log(this.RetrieveGroup.key())    
                    // console.log(Object.keys(this.RetrieveGroup))       
                    // console.log(this.RetrieveUserDetails)
                    // var id=parseInt(Object.keys(this.RetrieveGroup))

                    // console.log(id)
                    console.log(this.RetrieveGroup)     
                    console.log(this.RetrieveChat)                            
                    // console.log(parseInt(Object.keys(this.RetrieveChat)))  
                    console.log(parseInt(this.RetrieveChat.id)) 
                    console.log(this.RetrieveUserDetails)
                    console.log(this.RetrieveUserDetails.data)   
                    console.log(this.RetrieveUserDetails.data.mobilenum)  
                    axios.get(`two/displaySpecific?groupid=${parseInt(this.RetrieveChat.id)}&userid=${this.RetrieveUserDetails.data.mobilenum}`).then((response) => {
                // axios.get(`two/displaySpecific?groupid=${parseInt(this.RetrieveChat.id)}&userid=${this.RetrieveUserDetails.mobilenum}`).then((response) => {
                    console.log(response.data);                                                                                                  
                    this.getMessage(response.data);
                    window.localStorage.setItem('messsage', JSON.stringify(response.data))
                    // console.log(this.RetrieveMessage)    
                });   
                // console.log(this.RetrieveChat);

                // let groupid=this.RetrieveChat.groupid

                // console.log(list_of_messages)

                // console.log(response.data)
                let groupmember = await axios.get(`two/displayAgroupMembers?groupid=${parseInt(this.RetrieveChat.id)}`)
                // console.log()    
                this.getMember(groupmember.data)       
                console.log(this.RetrieveMember, "jkbhj");
                console.log(this.data)        
                this.$router.push({ name: "Group_chat_list", query: { dat: this.data.id } })
            }

        }
    }