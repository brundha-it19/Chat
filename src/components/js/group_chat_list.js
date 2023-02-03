import header_component from '/Users/brundha/Documents/vue/chat/project1/src/components/header_component.vue'
import Group_list from '/Users/brundha/Documents/vue/chat/project1/src/components/Group_list.vue'
import chat_header from '/Users/brundha/Documents/vue/chat/project1/src/components/chat_header.vue'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import axios from 'axios'
// import image_id from '../store/image_id'

export default
    {
        name: "Group_chat_list",
        components:
        {
            header_component,
            Group_list,
            chat_header,
            bottom: false,
        },
        // el: '#SubSec',
        data() {
            return {
                user: this.$route.query.user_name,
                message: "",
                Group: {},
                files: [],
                lazy:[],
                selected_file:null,
                // image_id:""
            }
        },
        mounted() {
            console.log(this.RetrieveGroup);
            this.Group = this.RetrieveGroup;
        },
        computed:
        {
            data_value() {
                console.log(this.$route.query.dat)
                return this.$route.query.dat;
            },
            ...mapGetters('User_Store', ['RetrieveUserDetails']),
            ...mapGetters('Chat_List', ['RetrieveChatList']),
            ...mapGetters('ChatStore', ['RetrieveChat']),
            ...mapGetters('Message', ['RetrieveMessage']),
            ...mapGetters('GroupStore', ['RetrieveGroup']),

        },
        created() {

            
        },
        methods:
        {
            ...mapActions('Chat_List', ['getChatList']),
            ...mapActions('Message', ['getMessage']),
            ...mapActions('GroupStore', ['getGroup']),
            getfiltername(value)
            {    
                this.Group=value;
            },
            getDetails(data) {
                console.log(data)
                this.User_Details.add(data)
                console.log(this.User_Details)
            },
           
            getSearch(data) {   
                this.User_Details = data;     
            },
            async sendMessage() {
                // console.log(this.RetrieveUserDetails)
                document.getElementById('msg').value = '';
                console.log(this.RetrieveChat)
                console.log(this.RetrieveUserDetails)
                console.log(this.RetrieveUserDetails.mobilenum)
                var object = { groupId: this.RetrieveChat.id,senderId: this.RetrieveUserDetails.mobilenum, messageText: this.message }
                console.log(object)      
                await axios.post(`two/sendMessage`, object).then((response) => {   
                    document.getElementById('msg').value = '';
                    console.log(response);      
                    console.log(this.RetrieveChat.id) 
                axios.get(`two/displaySpecific?groupid=${parseInt(this.RetrieveChat.id)}`).then((response) => {
                    document.getElementById('msg').value = '';      
                    console.log(response)   
                    this.getMessage(response)    
                        })      
                })   
            },

            handleFilesUpload() {    
                // console.log(event)
                this.selected_file=this.$refs.file.files[0]     
                // let uploadedFiles = this.$refs.files.files;
                // for( var i = 0; i < uploadedFiles.length; i++ ){
                // console.log(uploadedFiles)
                // this.files.push(uploadedFiles);
                // }
            },
            // addFiles() {
            //     this.$refs.files.click();
            // },

            submitFiles() {
                const formData = new FormData();
                formData.append('file', this.selected_file);
                const headers = { 'Content-Type': 'multipart/form-data' };
                console.log(this.RetrieveUserDetails.mobilenum)
                console.log(this.RetrieveChat.id)
                axios.post( `two/sendFile?senderid=${this.RetrieveUserDetails.mobilenum}&groupid=${parseInt(this.RetrieveChat.id)}`, formData, { headers }).then((res) => {
                    // res.data.files; 
                    // res.status;
                    console.log(res)
                    console.log(res.data)
                    // image_id=res.data;
                    // axios.get(`two/download/${image_id}`).then((response) =>
                    // {
                    //         console.log(response)  
                    // }
                    // )
                    // console.log(res.data)
                    // this.image_id(resp)
                })   
                // let formData = new FormData();
                // // for( var i = 0; i < this.files.length; i++ ){
                // let file = this.files[0];
                // console.log(file.item(0))
                // var x=file.item(0)
                // formData.append('file',x,x.name);
                // console.log(formData)
                // const fd = new FormData()
                // fd.append('image',this.selected_file,this.selected_file.name)
                //  axios.post( `/two/upload`,fd)
                //  .then((res) =>
                //  {
                //     console.log(res)          
                //  })
                    //   formData,
                    //   {
                    //     headers: {
                    //         'Content-Type': 'multipart/form-data'
                    //     }
                    //   }
                    //   )
                  },

            },
            watch:
            {      
                RetrieveChatList(newValue) {
                    console.log(newValue)
                    // console.log(this.User_Details.groupid)
                    // this.fil_detail= newValue;
                },
                
            }

        }