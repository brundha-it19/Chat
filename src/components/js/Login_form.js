import { mapActions, mapGetters } from "vuex";
import axios from 'axios';

export default
{
    name:"Login_component",
    data()
    {
        return{

            User:
            {
                // user_name:"",
                phone_number:"",
                password:""
            },
            User_Details:
            [
                {
                    // user_name:"Nagadeepan",
                    phone_number:"9361569944",
                    password:"12345"
                }    
            ]
            


        }
    }, 

    computed:
    {
        ...mapGetters('User_Store',['RetrieveUserDetails']),
        ...mapGetters('GroupStore',['RetrieveGroup'])

    },
    methods:
    {
        ...mapActions('User_Store',['GetUser']),
        ...mapActions('GroupStore',['getGroup']),

        async Login_Authenticate()     
        {
            console.log("jvaj")
            let log_in= await axios.post(`one/loginUser?mobilenum=${this.User.phone_number}&password=${this.User.password}`)
            {  
                console.log(log_in)
                // console.log(log_in.data);
                if(log_in.data.loginstatus)
                {
                    // console.log(log_in.data.username)
                    localStorage.setItem("Login_Details",JSON.stringify(log_in.data));
                    this.GetUser(log_in.data);
                    // console.log(log_in.data)

                    //  console.log(this.RetrieveUserDetails.mobilenum)
                    // this.$router.push({name:"GroupChatList",})
                    // this.$root.$emit("setUser",this.RetrieveUserDetails.username)
                    const response= await axios.get(`two/showGroup?mobilenum=${this.User.phone_number}`);
                    console.log(response.data)       
                    this.getGroup(response.data)
                    await this.$router.push({name:"Group_chat_list",query:{user_name:this.RetrieveUserDetails.username}})
                }                               
                else{   
                    // alert("Invalid Details")
                    console.log("Invalid details..")     
                }
            }
            // window.localStorage.setItem('ShowGroup',JSON.stringify(response.data))
            // console.log(this.RetrieveGroup)
        }
        }

        
    
    }       