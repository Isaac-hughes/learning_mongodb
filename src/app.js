require('./db/connection');
const { Person } = require("./models/Person")

const app = async () => {
    const person = new Person({name: "Isaac", email: "testerEmail@test", age: 18, likesPizza: true})
    await person.save()
}

app()