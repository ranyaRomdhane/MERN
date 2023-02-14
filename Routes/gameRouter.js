const express = require("express");
const Game = require("../Models/gameModels");

const gameRouter = express.Router();


//Add Game
gameRouter.post('/add',async (req, res) => {
try{
    const newGame = new Game(req.body);
    const result= await newGame.save();
    res.status(200).send({game: result, msg: "game added succsesfully"})
}catch(error){
    console.log(error);
}
});


//Get Game
gameRouter.get('/',async (req, res) => {
    try{
        
        let result= await Game.find();
        res.send({games: result, msg:"all Games"})
     } catch (error) {
        console.log(error);
     }
    
    });

// Get Game by ID

gameRouter.get("/:id",async (req, res) => {
    try{
        
        let result= await Game.findById(req.params.id);
        res.send({game: result, msg:"one Game"})
     } catch (error) {
        console.log(error);
     }
    });



    //Delete Game
 gameRouter.delete("/:id",async (req, res) => {
        try{
            
            let  result= await Game.findByIdAndDelete(req.params.id);
            res.send({ msg:" game dead "})
         } catch (error) {
            console.log(error);
         }
        });



//Update Games

gameRouter.put("/:id", async (req, res) => {
    try{
        
        let result= await Game.findByIdAndUpdate(
      { _id: req.params.id },  
      { $set:{ ...req.body } }
             );
        res.send({ msg:" game updated "})
     } catch (error) {
        console.log(error);
     }
    });

module.exports = gameRouter;