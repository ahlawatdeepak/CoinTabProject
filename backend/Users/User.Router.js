const { default: axios } = require("axios")
const express=require("express")
const { UserModal } = require("./User.Schema")

const user=express.Router()

user.get("/",async(req,res)=>{
    
      const {firstname,gender,country,sort="asc",page=1}=req.query
      
     let filter={}
     if(firstname){
          filter={...filter,"name.first":firstname}
     }
     if(gender){
          filter={...filter,gender}
     }
     if(country){
         
          filter={...filter,"location.country":country}
     }
      
     console.log(filter)
     try {

          
          let allUsers=await UserModal.find(filter).sort({["dob.age"]: sort==="asc" ? 1 : -1}).skip((page-1)*15).limit(15)
         
          const totalUser=await UserModal.find(filter).count()
          const totalPages=Math.ceil(totalUser/15)
         
          res.send({data:allUsers,totalPages:totalPages})
          
     } catch (error) {
          res.status(500).send(error.message)
     }

})


// Fetch data and return data ---------------------------
    async function FetchData(){
         try {
          let res=await axios.get("https://randomuser.me/api/?results=50")
          return (res.data.results)
         } catch (error) {
           return (error)
         } 
    }
    

    
user.post("/",async(req,res)=>{
        
     
     try {
        
           
          FetchData().then( async r=>{
               let data=await UserModal.insertMany(r)
               res.send("Data Fetch Successfully")
          })
          .catch(err=>
               res.status(500).send(err)
           )
            
          
     } catch (error) {
          res.status(500).send(error.message)
     }

})



user.delete("/",async(req,res)=>{
     try {
          
           let result=await UserModal.remove()
           res.send({message:"Users Remove Successfully"})

     } catch (error) {
          res.status(500).send(error.message)
     }
})




module.exports=user