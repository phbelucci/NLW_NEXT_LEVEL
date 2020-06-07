const express = require('express')
const server = express()

//importanto banco de dados
const db = require('./database/db')

//configurar pasta publica para acessar css, scrits, etc
server.use(express.static("public"))

//habilitar o uso do req.body na aplicação
server.use(express.urlencoded({extended: true}))

//utilizando tamplate engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})

try {
    //ligar servidor
    server.listen(3000)
    console.log("running server...")

    //configurar caminhos da aplicação
    server.get("/", (req, res) => {
        return res.render("index.html", {title: "Titulo"})
    })

    server.get("/create-point", (req, res) => {

        //req recebe os dados da requisição
        console.log(req.query)
        return res.render("create-point.html")
    })

    server.post("/savepoint", (req, res) => {

        //inserir dados no banco de dados

        const queryInsert = `INSERT INTO places (image,name,address,address2,estado,city,items) values (?,?,?,?,?,?,?);`
        const values = [
            req.body.image,
            req.body.name,
            req.body.address,
            req.body.address2,
            req.body.estado,
            req.body.city,
            req.body.items            
        ]

        function afterInsertData(err){
            if(err){
                console.log(err)
                return res.send("Erro no cadastro.")
            }
            console.log("Cadastrado com sucesso.")
            console.log(this)

            return res.render("/create-point.html", {saved : true})
        }

        db.run(queryInsert,values, afterInsertData)
        
        

    })

    server.get("/search-results", (req, res) => {
        const search = req.query.search

        if(search === ""){
            return res.render("search-results.html",{countElements : 0 })
        }

        //pegar dados do banco
        db.all(`select * from places where lower(city) like "%${search}%";`, function(err, rows){
            if(err){
                return console.log(err)
            }
            console.log(search)
            console.log(rows)
            const countElements = rows.length
            return res.render("search-results.html",{places : rows, countElements : countElements})
        })
        
    })

} catch {
    console.log("erro ao conectar")
}