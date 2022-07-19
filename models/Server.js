import express from "express";
import cors from "cors";
import { router } from "../routes/user.js";

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.user_path = '/api/user';
        this.middewares();
        this.routes();
    }

    routes() {
        this.app.use(this.user_path, router);
    }

    middewares() {
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`listening at http://localhost:${this.port}/`);
        })
    }
}

export { Server }