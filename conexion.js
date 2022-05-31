const { Pool } = require('pg')

const config = {
    user: "postgres",
    host: "localhost",
    password: "120313",
    database: "repertorio_db",
    port: 5430,
}

const pool = new Pool(config)

const conexion = () => {
    
    return new Promise((resolve, reject) => {
        pool.connect((errorConexion, client, release) => {
            if(errorConexion) {
                reject('¡HUBO UN ! Revise el siguiente código:' + errorConexion.code)
            } else {
                const con = {
                    client, release, pool
                }
                resolve(con)
            }
        })
    })
}

module.exports = conexion