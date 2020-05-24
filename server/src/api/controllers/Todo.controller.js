import controller from "./index";

class TodoController extends controller {
    constructor(props) {
        super(props);
    }

    async create(req, res) {
        const { body } = req;
        try {
            const data = await this.db.create({
                data: {
                    ...body,
                    User: {
                        connect: {
                            id: 2, // Hard coded user!
                        },
                    },
                },
            });
            this.response(res, 200, data);
        } catch (err) {
            console.log(err);
            this.response(res, 404, err, false);
        }
    }
}

export default TodoController;
