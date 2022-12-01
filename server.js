const {Client} =require('pg')

const client=new Client(
    {
        user:'postgres',
        password:'admin',
        database:'events_app',
        port:5432

    }
)


client.connect().then(()=>console.log('connected to DB'))