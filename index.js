const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const userRouter = require("./routers/Usermanger");
const paperRouter = require("./routers/papermanager");
const answerRouter = require("./routers/answer_manager");
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/user', userRouter)
app.use('/paper', paperRouter)
app.use('/answer', answerRouter)

app.use(express.static('./uploads/'))

app.get('/home', (req, res) => {
    console.log('Received Request');
    res.send('Welcome ');

})
app.listen(port, () => {
    console.log("Server Started " + port)
});

