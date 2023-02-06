import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default
{
    name: "header_component",
    data()
    {
        return{
            searchgroup:"",
            filter_name: [],
            user_detail: [],
            grp_detail:{
                name: " ",
                contact:" "
            }
        }
    }, 
    props:
    {
        data:
        {
            type: String,
        }
    },
    mounted()
    {
        // this.user_detail = this.RetrieveGroup
        // this.$root.$on("setUser",(data)=>{
        //     this.name=data
        //     console.log(data)
        // })
    },
    computed:
    {
         ...mapGetters('ChatStore',['RetrieveChat']),
         ...mapGetters('GroupStore',['RetrieveGroup']),
         ...mapGetters('ContactStore',['RetrieveContact']),

        ...mapGetters('User_Store',['RetrieveUserDetails']),
         ...mapGetters('Search',['RetrieveSearch']),
         ...mapGetters('ContactStore',['RetrieveContact'])
         

    },
    methods:
    {
        ...mapActions('Search',['getSearch']),
        ...mapActions('ContactStore',['getContact']),
        ...mapActions('GroupStore',['getGroup']),

         async CreateGroup()
        {
            document.getElementById("Form").style.display = "block";
            await axios.get("http://10.30.1.3:8082/displayContacts").then((response)=>
            {
                this.getContact(response.data)      
                console.log(this.RetrieveContact,"jhje")
                console.log(response.data)
            })
            
        },
        Cancel()
        {
            document.getElementById("Form").style.display = "none";
        },
        logout()    
        {
            let s=axios.post(`one/logout`)
            this.$router.push({name:'Login_component'})
            console.log(s);
        },
        postgrpdata()
        {
            console.log(this.grp_detail.name)
            console.log(this.RetrieveUserDetails.mobilenum)
            console.log(this.grp_detail.contact)             
            var res = axios.post(`two/createGroup?groupname=${this.grp_detail.name}&createdby=${this.RetrieveUserDetails.mobilenum}&userid=${this.grp_detail.contact}`)
            console.log(res)  
            console.log(this.RetrieveUserDetails.mobilenum)
            // const response=  axios.get(`two/showGroup?mobilenum=${this.RetrieveUserDetails.mobilenum}`);
            // console.log(response.data)       
            // this.getGroup(response.data)    
            // console.log(this.RetrieveGroup)  
        }
    },
    watch:
    { 
        searchgroup:function()     
        {
            this.user_detail=Object.values(this.RetrieveGroup)           
            this.filter_name = this.user_detail.filter(i => 
                (this.searchgroup ? i.groupname === this.searchgroup : true) )
            console.log(this.filter_name) 
            // this.getSearch(this.filter_name)   
            // console.log(this.RetrieveSearch)
            this.$emit('getFilter',this.filter_name)        
        },
    } 
}   

