import "dotenv/config";
import express from "express";
import cors from "cors";
import apiRoutes from "./api/routes/index";
import "./utils/datePrototypes";

const app = express();

(async () => {
    app.use(cors());
    app.use(express.json());

    app.use("/api", apiRoutes);

    app.listen(process.env.PORT, () => {
        console.log(`App listening on http://localhost:${process.env.PORT}`);
    });
})();
