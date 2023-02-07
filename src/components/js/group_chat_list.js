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
            // bottom: false,
        },
        // el: '#SubSec',
        data() {
            return {
                user: this.$route.query.user_name,
                message: "",
                Group: {},
                images:{},
                files: [],
                lazy:[],
                selected_file:null,
                isclicked:null,
                isclick:null,
                // image_id:""
            preview: null,
            image: null,
            preview_list: [],
            image_list: []
            }
        },
         mounted() {
            console.log(this.RetrieveGroup);
            this.Group = this.RetrieveGroup;
            // console.log(this.RetrieveImage);
            // this.images = this.RetrieveImage;
            // console.log(this.images)
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
            ...mapGetters('image_store', ['RetrieveImage']),  
            ...mapGetters('imageId',['RetrieveImageId'])        
        },
        created() {

            
        },
        methods:
        {
            ...mapActions('Chat_List', ['getChatList']),
            ...mapActions('Message', ['getMessage']),
            ...mapActions('GroupStore', ['getGroup']),
            ...mapActions('image_store', ['getImage']),
            ...mapActions('imageId', ['store_image_id']),
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
            // disp(){
            //     this.isclick=true
            // },
            // disp(){   
            //     this.images = this.RetrieveImage;
            //     console.log(this.images)        
            // },
            async sendMessage() {
                // console.log(this.RetrieveUserDetails)
                document.getElementById('msg').value = '';
                console.log(this.RetrieveChat)      
                console.log(this.RetrieveUserDetails)                               
                console.log(this.RetrieveUserDetails.mobilenum)
                var object = { groupId: this.RetrieveChat.id,senderId: this.RetrieveUserDetails.data.mobilenum, messageText: this.message }
                console.log(object)      
                await axios.post(`two/sendMessage`, object).then((response) => {   
                    document.getElementById('msg').value = '';
                    console.log(response);      
                    console.log(this.RetrieveChat.id)    
                })  
                // axios.get(`two/displaySpecific?groupid=${parseInt(this.RetrieveChat.id)}&userid=${this.RetrieveUserDetails.data.mobilenum}`).then((response) => {
                //     document.getElementById('msg').value = '';      
                //     console.log(response)   
                //     this.getMessage(response)    
                // })
            },
            // previewMultiImage: function(event) 
            // {
            //     var input = event.target;
            //     var count = input.files.length;
            //     var index = 0;
            //     if (input.files) {
            //       while(count --) {
            //         var reader = new FileReader();
            //         reader.onload = (e) => {
            //           this.preview_list.push(e.target.result);
            //         }
            //         this.image_list.push(input.files[index]);
            //         reader.readAsDataURL(input.files[index]);
            //         index ++;
            //       }
            //     }
            //   },
              
            
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

             async submitFiles() {
                this.isclicked=true
                // var x = document.getElementById("img");
                // if (x.style.display === "none") {
                //   x.style.display = "block";
                // } else {
                //   x.style.display = "none";
                // }  
                const formData = new FormData();
                formData.append('file', this.selected_file);
                const headers = { 'Content-Type': 'multipart/form-data' };
                console.log(this.RetrieveUserDetails.mobilenum)
                console.log(this.RetrieveChat.id)
                axios.post( `two/sendFile?senderid=${this.RetrieveUserDetails.data.mobilenum}&groupid=${parseInt(this.RetrieveChat.id)}`, formData, { headers }).then((res) => {
                    // res.data.files; 
                    // res.status;
                    console.log(res)   
                    console.log(res.data)
                    this.store_image_id(res.data)
                    // image_id=res.data;
                    // axios.get(`two/download/${image_id}`).then((response) =>
                    // {
                    //         console.log(response)  
                    // }
                    // )
                    // console.log(res.data)
                    // this.image_id(resp)
                })             
                await axios.get(`two/download/${this.RetrieveImageId}`).then((res) => {        
                    console.log(res)                
                    console.log(res.data)                  
                    this.getImage(res)                          
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