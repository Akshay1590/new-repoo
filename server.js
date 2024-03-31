import express from 'express';

const app = express();

app.get('/akshay', (req, res) => {
    res.send("server is ready");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`erve at http://localhost:${port}`);
}
);





