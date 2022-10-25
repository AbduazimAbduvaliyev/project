const express = require("express")
const router = express.Router()
const movieDb = require("./model/movie")

router.get("/api/movies" ,(req , res )=>{
     movieDb.find({}, (error, data )=>{
        res.send
     })
})

router.post("/api/movies" , (req, res )=>{
   const {title, category, country,director, imdb_score, year}=req.body
   const db = new movieDb({
      title: title,
      category: category,
      country: country,
      director:director,
      imdb_score:imdb_score,
      year : year
   })
   db.save()
})

router.get("/api/movies/:id" , (req, res )=>{
   movieDb.findById(req.params.id, (err, data)=>{
      res.send(data)
   })
})
router.put("/api/movies/:id" , (req , res)=>{
const {title, category, country, director, imdb_score,   year}=req.body

const db = {
   title : title,
   category: category,
   country: country,
   director: director,
   imdb_score:imdb_score,
   year: year
}

   movieDb.findByIdAndUpdate(req.params.id, db , (err, data)=>{
      res.send(data)
   })

})


module.exports = router