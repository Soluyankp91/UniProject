const express = require('express');
const morgan = require('morgan');
const loadEnv = require('./miscellaneous/env');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth')

if (loadEnv()) {
    const app = express();

    //morgan middleware
    app.use(morgan("common"));
    app.use(express.json());

    app.use('/users', userRouter);
    app.use('/auth', authRouter);

    app.listen(process.env.PORT, () => {
        console.log("Server started");
    });
    app.use((err, req, res, next) => {
        res.status(err.status || 500).json({ message: err.message });
    });
}
else {
    console.error("Server did not start");
}

/*

USEFUL TIPS

When Prisma models are changed, run "npx prisma db push" to sync models with remote DB

If you want to update Prisma Client without syncing with remote DB, run "npx prisma generate"

If you want to connect to local DB instead, go to .env and change settings there

*/
