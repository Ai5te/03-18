import express from 'express'

const app = express()

const users = [];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex = /^(?=.*\d).{8,16}$/;

app.use(express.urlencoded({ extended: true }));

// REGISTER

app.post('/register', (req, res) => {
    const { name, last_name, email, password } = req.body;

    if(!name || !last_name || !email || !password) {
        return res.status(400).json({message: "Negauti registracijos duomenys"});
    }

    if(name.length < 3 || name.length > 200) {
        return res.status(400).json({ message: "Vardas privalo būti nuo 3 iki 200 simbolių ilgio"});
    }

    if(last_name.length < 3 || last_name.length > 200) {
        return res.status(400).json({ message: "Pavardė privalo būti nuo 3 iki 200 simbolių ilgio"});
    }

    if(email.length < 5 || email.length > 50 || !emailRegex.test(email)){
        return res.status(400).json({ message: "Neteisingas el.pašto adresas" });
    }

    if(!passwordRegex.test(password)){
        return res.status(400).json({ message: "Slaptažodis privalo turėti bent vieną skaičių ir būti nuo 8 iki 16 simbolių" });
    }

    users.push({ name, last_name, email, password });

    return res.json({ message: "Sveikiname sėkmingai prisiregistravus" });

});

// LOGIN

app.post('/login', (req, res) =>{
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).json({ message: "Negavome jokių duomenų, bandykite dar kartą" });
    }

    const user = users.find(u => u.email === email && u.password === password)

    if(!user){
        return res.status(401).json({ message: "Neteisingi prisijungimo duomenys" });
    }

    res.json({ message: "Sveikiname sėkminga prisijungus" });

});

app.listen(3000, () => {
    console.log('Serveris veikia');
});