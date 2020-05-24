import response from "../../utils/sendResponse";

class Controller {
    constructor(db) {
        this.response = response;
        this.db = db;
        this.all = this.all.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.findById = this.findById.bind(this);
        this.delete = this.delete.bind(this);
    }

    async all(req, res) {
        try {
            const data = await this.db.findMany();
            this.response(res, 200, data);
        } catch (err) {
            this.response(res, 404, err, false);
        }
    }

    async create(req, res) {
        const { body } = req;
        try {
            const data = await this.db.create({
                data: {
                    ...body,
                },
            });
            this.response(res, 200, data);
        } catch (err) {
            this.response(res, 404, err, false);
        }
    }

    async update(req, res) {
        const { query } = req;
        const { id, ...body } = query;

        try {
            const data = await this.db.update({
                where: { id: Number(id) },
                data: { ...body },
            });
            this.response(res, 200, data);
        } catch (err) {
            this.response(res, 404, err, false);
        }
    }

    async delete(req, res) {
        const { query } = req;
        try {
            const data = await this.db.delete({
                where: { id: Number(query.id) },
            });
            this.response(res, 200, data);
        } catch (err) {
            this.response(res, 404, err, false);
        }
    }

    async findById(req, res) {
        const { params } = req;
        try {
            const data = await this.db.findOne({
                where: { id: Number(params.id) },
            });
            this.response(res, 200, data);
        } catch (err) {
            this.response(res, 404, err, false);
        }
    }
}

export default Controller;
