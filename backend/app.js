const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended : false}))

app.use(bodyParser.json())

//mysql
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'nodejs_beers'
})

//get all beers

app.get('', (req, res) => {
    pool.getConnection((err, connection) => {
       if(err) throw errconsole.log(`connected id ${connection.threadId}`)
       
       connection.query('SELECT * from beers', (err, rows) => {
        if(!err){
            res.send(rows)
        } else {
            console.log(err)
        }
       })
    })
})

//get beers by id
app.get('/:id', (req, res) => {
    if(err) throw err
    console.log(`connected as id ${connection.threadId}`)

    connection.query('SELECT * from beers WHERE id = ?', [req.params.id], (err, rows))
    connection.release()

     if(!err){
            res.send(rows)
        } else {
            console.log(err)
        }
})

//delete

app.delete('/:id', (req, res) => {
    pool.getConnection((err, connection) => {
         if(!err) throw err
         console.log(`connected as id ${connection.threadId}`)

         connection.query('DELETE from beers WHERE id = ?', [req.params.id], (err, rows) =>{
            connection.release()

             if(!err){
            res.send(`Beer with the Record ID: ${[req.params.id]} has been removed.`)
            } else {
                console.log(err)
            }
         })
    })
})

//add
app.post('', (req, res) => {
    pool.getConnection((err, connection) => {
         if(!err) throw err
         console.log(`connected as id ${connection.threadId}`)
        
         const params = req.body

         connection.query('INSERT INTO beers SET ?', params, (err, rows) => {
            connection.release()

            if(!err){
                res.send(`Beer with the name: ${params.name} has been added.`)
            } else {
                console.log(err)
            }
         })
         console.log(req.body)
    })
})

//update

app.put('', (req, res) => {
    pool.getConnection((err, connection) => {
         if(!err) throw err
         console.log(`connected as id ${connection.threadId}`)
        
         const {id, name, tagline, description, image} = req.body

         connection.query('UPDATE beers SET name = ?, tagline = ?, description = ?, image = ?', (err, rows) =>{
            connection.release()

             if(!err){
            res.send(`Beer with the name: ${name} has been updated.`)
            } else {
                console.log(err)
            }
         })
         console.log(req.body)
    })
})

app.listen(port, () => console.log(`Listen on port ${port}`))