const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
// add router in express app
app.use("/",router);
app.use('/', (req, res) => {
    req.header('User-id','ifabula')
    })
router.get('/',(req, res) => {
   
      if(req.headers['user-id']== 'ifabula' && req.headers['scope']== 'user' ){
        res.send({
                responseCode: 200,
                responseMessage: {
                    "nama" : "ridwan",
                    "Jenis Kelamin" : "LAKI-LAKI"
        }
    })
    }else{
        res.send({
            responseCode: 401,
            responseMessage: "UNAUTHORIZED"
        })
    
    }    
});

router.post('/',(req, res) => {
    if(req.headers['user-id']== 'ifabula' && req.headers['scope']== 'user' ){
            res.send({
                responseCode: 200,
                responseMessage: "Success post data"

            })
    }else{
        res.send({
            responseCode: 401,
            responseMessage: "UNAUTHORIZED"
        })
    
    } 
});

app.listen(3000,() => {
console.log("Started on PORT 3000");
})