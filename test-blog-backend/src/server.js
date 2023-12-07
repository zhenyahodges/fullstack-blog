import express from 'express';

let articlesInfo = [
    {
        name: 'learn-react',
        upvotes: 0,
comments: [],
    },
    {
        name: 'mongodb',
        upvotes: 0,
        comments: [],
    },
];

const app = express();
app.use(express.json());

app.put('/api/articles/:name/upvote', (req, res) => {
    const { name } = req.params;
    const article = articlesInfo.find((a) => a.name === name);

    if (article) {
        article.upvotes += 1;
        res.send(`The ${name} article has ${article.upvotes} upvotes!`);
    }else{
        res.send('That article doesn\'t exist');
    }
});

app.listen(8000, () => {
    console.log('Server listening on port 8000');
});
