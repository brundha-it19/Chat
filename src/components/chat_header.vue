<template>
    <div class="Header1">
        <div>
            <div>
               <!-- <h1 id="whatsapp">WhatsApp</h1> -->
               <!-- <div class="user1"><img src="https://png.pngtree.com/png-vector/20190330/ourlarge/pngtree-vector-leader-of-group-icon-png-image_894885.jpg"></div> -->
                <div class="user1"><img src="https://png.pngtree.com/png-vector/20190330/ourlarge/pngtree-vector-leader-of-group-icon-png-image_894885.jpg" width="50px" height="50px"/></div>
               <div class="group_name" style="font-family:cursive;color:black;font-size:20px;margin-top:20px;">{{ RetrieveChat.groupName }}</div>
                <i @click="ShowGroupMember()" id="group1" class="fa fa-users" aria-hidden="true"></i>
                <i id="dotline1" class="fa fa-ellipsis-v" aria-hidden="true" @click="addmember()"></i>
            </div>
        </div>
        <div class="popup1" id="Form1">            
            <div class="member">
                  <h5  v-for="(i,index) in RetrieveMember" :key="index">{{ i.userid }}   <i class="fa fa-times" aria-hidden="true"  @click="removemember()"></i></h5>
                  <button type="button" class="cancel" @click="Cancel()">Close</button>
            </div>
        </div>
        <div class="popup1" id="Form2">            
            <div class="member">
                 <p style="font-family:cursive"> Add member </p>
                 <select  placeholder="Contacts" name="contact" v-model="grp_detail.contact"  required>
                    <option  v-for="(i,index) in RetrieveContact" :key="index" >
                        <input v-for="(i,index) in RetrieveContact" :key="index" type="checkbox" value="jhdjhde"/>
                        {{i.mobilenum}} 
                    </option>
                    </select>  <br/><br/>
                    <button @click="addmember1()"> Add </button><br/><br/>
                 <button type="button" class="cancel" @click="Cancel2()">Close</button>
            </div>
        </div>
        <div class="popup1" id="addmem">            
            <div class="member">
                    {{ Retrieve_AddMember }}<br/>
                    <button type="button" class="cancel" @click="Cancel3()">Close</button>
                </div>
                </div>
        <div class="popup1" id="remove">            
            <div class="member">
                  <p> Member removed..! </p>
                  <button type="button" class="cancel" @click="Cancel1()">Close</button>
            </div>
        </div>
    <!-- <div class="popup1" id="Form2">
        <div class="member">
        <p>sdfghj</p>
        <select  placeholder="Contacts" name="contact" v-model="grp_detail.contact"  required>
                    <option  v-for="(i,index) in RetrieveContact" :key="index" >
                        <input v-for="(i,index) in RetrieveContact" :key="index" type="checkbox" value="jhdjhde"/>{{i.mobilenum}}
                    </option>
                    </select>
    </div> 
    </div> -->

    </div>
</template>
<script src="/Users/brundha/Documents/vue/chat/project1/src/components/js/chat_header.js">
</script>
<style scoped>
.Header1
{
    height: 60px;
    font-size: medium;
    /* background:#333; */
    background-color: pink;
    z-index: 2;
    margin-top: -10px;
    width: 100%;
}
.group_name
{
    position:relative;
    top: -55px;
    left:-330px;
    color:white;
}
.user1
{
    position: relative;
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 15px;
    margin-top: 10px;
    border: 2px solid white;
    /* top: 5px; */
}

.removed{
    width:100px;
    height:40px;
    border-radius:5px;
    background-color: white;
    top: -270px;
    right: -450px;
    margin-right:100px;
}
.member
{
    /* margin-top:200px; */
    max-width: 300px;
  padding: 10px;
  background-color: white;
  position:relative;
  top: -150px;
  /* top:5px; */
  right: -450px;
  border-radius:5px;
  
}
#group1
{
    position: relative;
    left: 400px;
    top: -30px;
    color: white;
}
#dotline1
{
    position: relative;
    left: 440px;
    top: -30px;
    height: 50px;
    color: white;
}
.popup1 {
  display: none;
  position: fixed;
  bottom: 170px;
  right: 600px;
  /* border: 3px solid #f1f1f1; */
  z-index: 9;
  
}
@media  screen and (min-width: 1900px) and (max-width: 2100px) 
    {
        
        #group1
        {
            position: absolute;
            left: 1800px;
            top: 40px;
        }
        #dotline1
        {
            position: absolute;
            left: 1900px;
            top: 40px;
            height: 50px;
        }
    
                
    }
@media  screen and (min-width: 1700px) and (max-width: 1800px) 
    {
        
        #group1
        {
            position: absolute;
            left: 1550px;
            top: 40px;
        }
        #dotline1
        {
            position: absolute;
            left: 1650px;
            top: 40px;
            height: 50px;
        }                
    }
@media  screen and (min-width: 1600px) and (max-width: 1700px) 
    {
        #group1
        {
            position: absolute;
            left: 1450px;
            top: 40px;
        }
        #dotline1
        {
            position: absolute;
            left: 1520px;
            top: 40px;
            height: 50px;
        }
        
    }
    @media  screen and (min-width: 1300px) and (max-width: 1400px) 
    {
        #group1
        {
            position: absolute;
            left: 1180px;
            top: 40px;
        }
        #dotline1
        {
            position: absolute;
            left: 1250px;
            top: 40px;
            height: 50px;
        }
        
    }
@media  screen and (min-width: 1400px) and (max-width: 1600px) 
    {
        #group1
        {
            position: absolute;
            left: 1230px;
            top: 30px;
        }
        #dotline1
        {
            position: absolute;
            left: 1300px;
            top: 30px;
            height: 50px;
        }  
    }
    @media  screen and (min-width: 800px) and (max-width: 1200px) 
    {
        
        #group1
        {
            position: absolute;
            left: 700px;
            top: 40px;
        }
        #dotline1
        {
            position: absolute;
            left: 760px;
            top: 40px;
            height: 50px;
        }
                
    }
    @media  screen and (min-width:750px) and (max-width: 800px) 
    {
        #group1
        {
            position: absolute;
            left: 350px;
            top: 50px;
        }
        #dotline1
        {
            position: absolute;
            left: 400px;
            top: 50px;
            height: 50px;
        }
                
    }
    @media  screen and (min-width:500px) and (max-width: 700px) 
    {
        #group1
        {
            position: absolute;
            left: 550px;
            top: 730px;
        }
        #dotline1
        {
            position: absolute;
            left: 600px;
            top: 730px;
            height: 50px;
        }
                
    }
    @media  screen and (min-width:300px) and (max-width: 500px) 
    {
        #group1
        {
            position: absolute;
            left: 550px;
            top: 730px;
        }
        .group_name
{
    position:relative;
    top: -55px;
    left:-95px;
    color:white;
}
        #dotline1
        {
            position: absolute;
            left: 600px;
            top: 730px;
            height: 50px;
        }
        
                
    }
</style>
