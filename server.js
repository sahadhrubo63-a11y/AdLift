const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// পুরো মূল প্রজেক্ট ফোল্ডারটি স্ট্যাটিক হিসেবে সেট করা হলো
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// হোমপেজ রাউট
app.get('/', (req, res) => {
    res.send(`
        <h2>Server is Running Successfully!</h2>
        <p>আপনার পোর্টফোলিও পেজে যেতে নিচের লিংকে ক্লিক করুন:</p>
        <a href="/Project/portfolio/index.html">Go to Portfolio Page</a>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
