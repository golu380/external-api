
const request = require('request');
const express = require('express');
const router = express.Router();

//Public Routes




router.get('/todos',(req,res)=>{
    
    request('https://jsonplaceholder.typicode.com/todos',(error,response,body)=>{
        if(error) console.log(error)
 

   res.send(body)
    })

})


router.get("/users/:id", function(req, res){
    var request = require('request-promise');
    var data1;
    var data2;
    var data3;
    var data4;
    
    function checkid(data){
        return (data.id == req.params.id);
    }
    function checkuserId(data){
        return (data.userId == req.params.id);
    }
  
    request("https://jsonplaceholder.typicode.com/users/").then(function(body){

    data1 = JSON.parse(body);
   data3 = data1.filter(checkid)
    
    
    return request("https://jsonplaceholder.typicode.com/todos");
    })
    .then(function(body) {
        data2 = JSON.parse(body);
        data4 = data2.filter(checkuserId)

      data3[0]["todos"] = data4;
        // var alldata = data3.concat(data4);
        // console.log(alldata);
        // res.send(alldata);
        res.send(data3);
    })
 
    });
// router.get('/users/:id',(req,res)=>{
// var request = require('request-promise');

// var data1;
// var data2;
// var data3;

// request('https://jsonplaceholder.typicode.com/users/',(error,response,body)=>{
//     if(error) console.log(error);
//     data1 = JSON.parse(body);

//     return  request1('https://jsonplaceholder.typicode.com/todos');
// }).then(function (body){
//     data2 = JSON.parse(body);

//     if(data1.id === data2.userId){
//         data3 = data1.concat(data2);
//         res.json(data3);
//     }
// })

// })
// router.get('/users/:id',(req,res)=>{
//     axios.get('https://jsonplaceholder.typicode.com/users/')
//     .then(function (response) {
//       console.log(response.data);
//       res.send(response.data.filter(user=>user.id==req.params.id));
//       console.log(response.status);
//       console.log(response.statusText);
//       console.log(response.headers);
//       console.log(response.config);
//     });
     
//   })
   
    
module.exports = router




