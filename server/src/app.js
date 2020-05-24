import "dotenv/config";
import express from "express";
import apiRoutes from "./api/routes/index";

const app = express();

(async () => {
    app.use(express.json());

    app.use("/api", apiRoutes);

    app.listen(process.env.PORT, () => {
        console.log(`App listening on http://localhost:${process.env.PORT}`);
    });
})();
