import mongoose from "mongoose";
import express from 'express';

const app = express();

app.use(express.urlencoded());

// Prisijungimas prie mongodb serverio
try {
    // Prisijungimo iniciavimas ir tikrinimas ar pavyko
    await mongoose.connect('mongodb://localhost:27017/express-mongoose-app');
    console.log('Prisijungimas pavyko');
} catch {
    // Grąžinama žinutė jei nepavyko prisijungti prie serverio
    console.log('Nepavyko prisijungti prie duomenų bazės');
}

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: String,
    thumbnail: String,
    price: Number,
    discount_percentage: Number,
    stock: Number,
    rating: Number
});

const Product = mongoose.model('Product', productSchema);

// ROUTES

// grazina visus produktus
app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

//grazina viena produkta pagal ID
app.get('/products/:id', async (req, res) =>{
    try {
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(404).json({ message: 'Produktas nerastas' });
        res.json(product);
    } catch (err) {
        res.status(400).json({ message: 'Neteisingas ID formatas' });
    }
});

// prideti naujo produkta
app.post('/products', async (req, res) => {
    try{
        const newProduct = new Product(req.body);
        const saved = await newProduct.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: 'Nepavyko pridėti produkto', error: err.message });
    }
});

//atnaujit produkta pagal ID
app.put('/products/:id', async (req, res) => {
    try {
        const  updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!updated) return res.status(404).json({ message: 'Produktas nerastas' });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: 'Nepavyko atnaujinti', error: err.message });
    }
});

app.delete('/products/:id', async (req, res) => {
    try{
        const deleted = await Product.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({ message: 'Produktas nerastas' });
        res.json({ message: 'Produktas sėkmingai ištrintas' });
    } catch (err) {
        res.status(400).json({ message: 'Klaida trinant', error: err.message });
    }
});

app.listen(3000, () => {
  console.log('Serveris veikia');
});
