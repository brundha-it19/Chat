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
                mobileNum:"",
                password:""
            },
            User_Details:
            [
                {
                    phone_number:"9998877766",
                    password:"suthir"
                },
                {
                    phone_number:"9998887776",
                    password:"brundha"
                }   

            ],
            login:"",
            isMatched:false,
            errors:[]
            


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
        login_failed(){
            
        },
        async Login_Authenticate()     
        {     
            if(this.User.mobileNum && this.User.password)
            {    
                console.log(this.User.mobileNum)
                console.log(this.User_Details[0].phone_number)
                console.log(this.User.password)    
                console.log(this.User_Details.password)
                if(this.User.mobileNum==this.User_Details[0].phone_number && this.User.password==this.User_Details[0].password || this.User.mobileNum==this.User_Details[1].phone_number && this.User.password==this.User_Details[1].password)
                {
            console.log("jvaj")                 
            // let log_in= await axios.post(`one/loginUser?mobilenum=${this.User.phone_number}&password=${this.User.password}`)
            let log_in= await axios.post(`one/loginUser`,this.User)
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
                    const response= await axios.get(`two/showGroup?mobilenum=${this.User.mobileNum}`);
                    console.log(response.data)       
                    this.getGroup(response.data)
                    await this.$router.push({name:"Group_chat_list",query:{user_name:this.RetrieveUserDetails.username}})
                }  
            } 
        } 
        else{
            this.errors.push('Invalid login');  
        }
      
        }                          
                else{   
                    this.errors = [];
                    console.log(this.User_Details)
                    // if(this.User.mobileNum!=this.User_Details.phone_number)
                    // {
                    //     this.errors.push('Invalid Mobile number');
                    // }

                    // if(this.User.password!=this.User_Details.password)
                    // {
                    //     this.errors.push('Invalid password');
                    // }
                    this.errors.push('Invalid login..!');
                    if (!this.User.mobileNum) {
                        this.errors.push('Mobile number required.');     
                      }
                      if (!this.User.password) {
                        this.errors.push('Password required.');
                      }
                    
                    //   e.preventDefault();
                    var login="Invalid login";  
                    console.log(login)
                    // alert("Invalid Details")
                    console.log("Invalid details..")     
                }
            }
            // window.localStorage.setItem('ShowGroup',JSON.stringify(response.data))
            // console.log(this.RetrieveGroup)
        }
        }

        
    
         