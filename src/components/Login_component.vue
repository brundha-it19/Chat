<template>
    <div>
        <div class="Login_Container">   
            <!-- <img  class="Image" src="https://cdn.dribbble.com/users/6147920/screenshots/14325672/media/82dc88c61fe3d073711706256023e7c6.jpg" width="200px" height="140px">  -->
            &nbsp;
            <div  class="error" v-if="errors.length">
             <div v-for="(error,index) in errors" :key="index"> {{ error }}</div>
            </div>
            <i class="fa fa-user" aria-hidden="true" style="font-size:70px;color:black;margin-top:30px;" ></i>
            <form>
            <br>
            <label id="Login_Text" style="font-family: cursive;"><b>User login</b></label><br>
            <!-- <label id="Label1" ><b>USERNAME </b></label><br> -->
            <!-- <input  type="text" id="input" v-model="User.user_name"/><br> -->
            <label id="Label2"  ><b>PHONE NUMBER </b></label><br>
            <input  type="text" id="input" v-model="User.mobileNum"/><br>
            <label id="Label3"  ><b>PASSWORD</b> </label><br>
            <input  type="password" id="input" v-model="User.password"/><br><br>
            <button @click="Login_Authenticate()" id="b1" type="button" >Login</button>
            <div class="popup1" id="form" style="display:none">            
            <div class="member">
              <!-- <div v-if="RetrieveLogin.loginstatus">
                  <p> Successful..! </p>
                </div>
                <div  v-else> -->
                   <p> {{ RetrieveLogin.data }}</p>
              <!-- </div> -->
                <button type="button" class="cancel" @click="Close()">Close</button>
              </div>
              </div>
        </form>
        </div>
       
    </div>   
    </template>
    
    <script src="/Users/brundha/Documents/vue/chat/project1/src/components/js/Login_form.js">
    
    </script>
    <style scoped>
    .Image
  {
      margin-top: 5px;
  }
  .Login_Container
  {
      /* border: 3px solid pink; */
      position: relative;
      margin-top: 30px;
      height: 630px;
      border-radius: 20px;
      width: 500px;
      /* box-shadow: 30px; */
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
      
  }
  .member{
   
  padding: 10px;
  background-color:white;
  position:relative;
  margin-top:20px;
  /* top:5px; */
  left: -450px;
  border-radius:5px;
 width:200px;
 margin-left:600px;
 box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  .error{
    width:200px;
    height:80px;
    /* background-color:pink; */
    color:black;
    margin-top:20px;
    font-family: cursive;
    border-radius:5px;
    margin-left:150px;
    text-align: center;
    /* margin-top:50px; */
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  #Login_Text
  {
    font-family:monospace;
    font-size: 35px;
    top: -25px;
    position : relative;
  }
  #Label1{
    font-size: 20px;
    color:cadetblue;
    margin-right: 192px;
  }
  #Label2{
    font-size: 20px;
    color:cadetblue;
    margin-right: 138px;
  }
  #Label3{
    font-size: 20px;
    color:cadetblue;
    margin-right: 192px;
  }
  #input{
      border: 3px solid black;
      border-radius: 10px;
      margin-top: 30px;
      height: 40px;
      position: relative;
      top: -18px;
      width:300px;
  }
  #b1
  {
      display: inline-block;
      outline: 0;
      border: 0;
      font-size: 20px;
      font-weight: 500;
      color: #fff;
      cursor: pointer;
      background-image: linear-gradient(to right,#e052a0,#f15c41)!important;
      border-radius: 3px;
      padding: 14px 30px 14px;
      white-space: nowrap;
  }
  #b1:hover
  {
     background-color: #e6375a;
      background-image: none!important;
  }
    @media screen and (min-width: 800px) and (max-width: 1000px)
    {
        .Login_Container
        {
        margin-top: 30px;
        width: 500px; 
        margin-left: 235px;
        
        
        
    
      }
    
    }
    @media screen and (min-width: 500px) and (max-width: 800px)
    {
        .Login_Container
        {
        
        margin-top: 30px;
        width: 500px; 
        margin-left: 100px;
      }
    
    }
    @media screen and (min-width: 1000px) and (max-width: 1200px)
    {
        .Login_Container
        {
        
        margin-top: 30px;
        margin-left: 285px;
      }
    }
    @media screen and (min-width: 1200px) and (max-width: 1400px)
    {
        .Login_Container
        {
        
        margin-top: 30px;
        margin-left: 450px;
      }
    }
      @media screen and (min-width: 1400px) and (max-width: 1700px)
    {
        .Login_Container
        {
        margin-top: 30px;
        margin-left: 480px;
      }
    
    } 
    @media screen and (min-width: 1700px) and (max-width: 1900px)
    {
        .Login_Container
        {
        margin-top: 30px;
        margin-left: 680px;
      }
    
    } 
    
    </style>
    
    
    