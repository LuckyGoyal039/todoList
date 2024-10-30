const express = require('express');

const app = express()

let List = {}


app.get('/create', (req, res) => {

    const { title, description } = req.body
    const newObj = {
        title: title,
        description: description
    }
    const id=Math.random(1,1000)
    List[id]= newObj
    return res.send("Item add successfully")
    
})
app.get('/delete', (req, res) => {
    const {id}=req.body
    
    delete List[id]
    return res.send("delete successfully")
})
app.get('/update', (req, res) => {
    const { title, description, id } = req.body
    const newObj = {
        title: title,
        description: description
    }
    List[id]= newObj
    return res.send("updated successfully")
    
})
app.get('/get', (req, res) => {
    return res.json(List)

})

app.listen(4000, () => {
    console.log("server running on port 4000")
})