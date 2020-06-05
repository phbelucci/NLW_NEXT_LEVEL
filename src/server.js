const express = require('express')
const server = express()

//configurar pasta publica para acessar css, scrits, etc
server.use(express.static("public"))


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
        return res.render("create-point.html")
    })

    server.get("/search-results", (req, res) => {
        return res.render("search-results.html")
    })

    //pagina inicial

} catch {
    console.log("erro ao conectar")
}