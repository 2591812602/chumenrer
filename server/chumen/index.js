const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")
const mysql=require('mysql')
const app=express()
app.use(bodyParser.json())
app.use(cors())
// 跨域设置
var connection;
env={
  host:"localhost",
  user:"root",
  password:"123456",
  database:"chumener"
};
function handleError(err){
  if(err){
    if(err.code=='PROTOCOL_CONNECTION_LOST'){
      connect()
    }else{
      console.error(err.stack||err)
    }
  
}
}
function connect(){
  connection=mysql.createConnection(env)
  connection.connect(handleError)
  connection.on('error',handleError)
}
connect()

app.post('/message',(req,res)=>{
  var id= req.body.type
  var sql="select * from post where post_class_id=" +id
  connection.query(sql,(err,result)=>{
    if(err){
      console.log("111",err.message)
    }
    console.log(result)
    res.json(result)
  })
})
app.post('/search',(req,res)=>{
  var title=req.body.title
  var sql ="select * from  post where title='"+title+"'"
  console.log(sql)
  connection.query(sql,(err,result)=>{
    if(err){
      console.log("111",err.message)
    }
    console.log(result)
    res.json(result)
  })
})
app.post('/comment',(req,res)=>{
  var id=req.body.type
  var sql="select * from comment where user_id="+id
  connection.query(sql,(err,result)=>{
    if(err){
      console.log("111",err.message)
    }
    console.log(result)
    res.json(result)
  })
})
app.post('/tianjia',(req,res)=>{
  var id=req.body.id
  var user_id=req.body.contentid
  var fid=req.body.fid
  var fnum=req.body.fnum
  var data=req.body.data
  var create_time=req.body.create_time
  var post_id=req.body.post_id
  var sql="insert into comment(id,user_id,fid,fnum,data,create_time,post_id)values("+id+','+user_id+','+fid+','+fnum+",'"+data+"',"+create_time+','+post_id+')'
  connection.query(sql,(err,result)=>{
    if(err){
      console.log("111",err.message)
    }
    console.log(result)
    res.json(result)
  })
})
app.post('/content',(req,res)=>{
  var id=req.body.type
  var sql="select * from post where  id=" +id
  connection.query(sql,(err,result)=>{
    if(err){
      console.log("111",err.message)
    }
    console.log(result)
    res.json(result)
  })
})
app.get('/list',(req,res)=>{
  var sql="select * from feedback"
  connection.query(sql,(err,result)=>{
    if(err){
      console.log("111",err.message)
    }
    console.log(result)
    res.json(result)
  })
})
app.post('/liaotian',(req,res)=>{
  var id=req.body.id
  var sql="select * from feedback where from_id="+id
  connection.query(sql,(err,result)=>{
    if(err){
      console.log("111",err.message)
    }
    console.log(result)
    res.json(result)
  })
})
app.post('/haoyoulist',(req,res)=>{
  var type=req.body.type
  var sql="select * from support where type="+type
  connection.query(sql,(err,result)=>{
    if(err){
      console.log("111",err.message)
    }
    console.log(result)
    res.json(result)
  })
})
app.post('/dianzang',(req,res)=>{
  var id=req.body.id
  var sharenum=req.body.num
  var sql="update post set sharenum="+sharenum+" where id="+id
  console.log(sql)
  connection.query(sql,(err,result)=>{
    if(err){
      console.log("111",err.message)
    }
    console.log(result)
    res.json(result)
  })
})
app.post('/dongtai',(req,res)=>{
  var type =req.body.type
  var sql="select * from topic where type="+type
  console.log(sql)
  connection.query(sql,(err,result)=>{
    if(err){
      console.log("111",err.message)
    }
    console.log(result)
    res.json(result)
  })
})
app.post('/sousuohaoyou',(req,res)=>{
  var name=req.body.name
  var sql="select * from user_bind where nickname='"+name+"'"
  console.log(sql)
  connection.query(sql,(err,result)=>{
    if(err){
      console.log("111",err.message)
    }
    console.log(result)
    res.json(result)
  })
})
app.listen(3001,()=>{
  console.log("启动成功")
})