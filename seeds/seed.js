const db =require("../models")

const sequelize = require("../config/connection")

const seedMe= async ()=>{
    await sequelize.sync({force:true});
    await db.User.bulkCreate([
        {
            username:"Keith",
            email:"keith@keith.com",
            password:"password"
        },
        {
            username:"notKeith",
            eamil:"email@email.com",
            password:"password"
        }
     
    ],{
        individualHooks:true
    })
    await db.Post.bulkCreate([
        {
          
            title: "Steam Deck",
            body: "PC2 is finally here and it's portable! Imagine your Nintendo Switch with a Library of games you already own, mod support and it's 8K capable",
            releaseDate: "Holiday 2021",
          
           
            UserId:1
        },
        {
          
            title: "The Telephone",
            body: "The future is here! A newfangled instument to trasmit speech of long distances is known as the telephone is here but not to stay.",
            "Elon Musk's newest pipe dream: Donations needed": 10000000,

            UserId:1
          },
          {
            title: "LimeScoots",
            body: "What's better than a world of scooters? A new generation thriled with the rideshare scooter service LimeScoots has left drunken college students bruised and cooler than ever",
            certification:"cool",
            UserId:1
            
          }
      
       
    ])


   
}

seedMe()
