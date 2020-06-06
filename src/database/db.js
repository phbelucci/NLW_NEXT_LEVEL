const sqlite3 = require('sqlite3').verbose()

//criar o objeto que irá fazer operações no bando de dados
const db = new sqlite3.Database("src/database/database.db")


/*QUERYS*/
const queryCreateTable = `
CREATE TABLE IF NOT EXISTS places (
    id integer primary key autoincrement,
    image text,
    name text,            
    address text,
    address2 text,
    estado text,
    city text,
    items text
);
`

const queryInsert = `INSERT INTO places (image,name,address,address2,estado,city,items) values (?,?,?,?,?,?,?);`
const queryDeleteRow = "delete from places where id = ?"
const queryDeleteAllRow = "delete from places"

const InsertValues1 = ["https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
"Colectoria",
"Guilherme Gemballa, Jardim America",
"nº 260",
"Santa Catarina",
"Rio do Sul",
"Papel e Papelão"]

const InsertValues2 = ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAlTc0DmKsCCSzdfccn3RMvty550sMRK0XITLJCjhigJaVGKc5&usqp=CAU",
"Pega Pilhas",
"Guilherme Gemballa, Jardim America",
"nº 260",
"Santa Catarina",
"Rio do Sul",
"Pilhas e Baterias"]

const InsertValues3 = ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQj4uI7oYvquGrloYGLMOrooZkr9fZ6aT8PzGH7qrXi83ot8Z_K&usqp=CAU",
"ReciclaTech",
"Guilherme Gemballa, Jardim America",
"nº 260",
"Santa Catarina",
"Rio do Sul",
"Resíduos Eletrônicos, Lâmpadas"]


function afterInsertData(err){
    if(err){
        return console.log(err)
    }
    console.log("Cadastrado com sucesso.")
    console.log(this)
}

//utiliza o objeto de banco de dados
//executa as aççoes no banco
db.serialize(() => {
    //criar tabela
    //db.run(queryCreateTable)

    //inserir dados
    //db.run(queryInsert, InsertValues3, afterInsertData)    

    //select dados
    // db.all('select * from places', function(err, rows){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Os dados na tabela são: ")
    //     console.log(rows)
    // })

    //deletar dados
    // db.run(queryDeleteAllRow, function(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso") 
    // })


    // db.all(`select * from places where lower(city) like "%lar%";`, function(err, rows){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Os dados na tabela são: ")
    //     console.log(rows)
    // })
})

module.exports = db

