const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
// const userfeedack = {
//     feeling,
//     understanding,
//      support,
//      comments

// // };

// router.post('/', (req, res) => {
//     // const userfeedack = {
//     //     feeling,
//     //     understanding,
//     //     support,
//     //     comments

//     // } = req.body;
    
//     console.log(req.body);
//     const userFeedack = req.body;
    
//     // queryText = `INSERT INTO "prime_feedback"("feeling", 
//     //             "understanding", "support", "comments")
//     //             VALUES( $1, $2, $3, $4);`
//     // pool.query(queryText, (userFeedback.feeling, userFeedack.understanding, 
//     //                         userFeedack.support, userFeedack.comments)
//     //                         .then((databaseresponse) => {
//         userFeedack.id = nextId;
//         nextId += 1;
//         res.send(201);
//     }).catch((error)=>{
//         console.log('error in post',error);
//         res.send(500);
        
//     })
        
    


module.exports = router;