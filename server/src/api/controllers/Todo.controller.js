import controller from "./index";

class TodoController extends controller {
  constructor(props) {
    super(props);

    this.byDate = this.byDate.bind(this);
  }

  // @TODO: Set date based on today or tomorrow
  async create(req, res) {
    const { query } = req;
    const { body } = req;

    const date = query.date ? query.date.toLowerCase() : "today";

    const todaysDate = new Date().addDays().toISOString();
    const tomorrowsDate = new Date().addDays(1).toISOString();

    if (
      (!body.title && body.title.length <= 0) ||
      (!body.description && body.description.length <= 0)
    ) {
      return this.response(res, 400, "Title or description is empty", false);
    }

    try {
      const data = await this.db.create({
        data: {
          ...body,
          createdAt: date === "today" ? todaysDate : tomorrowsDate,
          User: {
            connect: {
              id: 1, // Hard coded user!
            },
          },
        },
      });
      this.response(res, 200, data);
    } catch (err) {
      console.log(err);
      this.response(res, 400, err.message, false);
    }
  }

  async update(req, res) {
    const { id, completed, ...body } = req.query;

    try {
      const data = await this.db.update({
        where: { id: Number(id) },
        data: {
          completed: completed === "true",
          ...body,
        },
      });
      this.response(res, 200, data);
    } catch (err) {
      this.response(res, 404, err, false);
    }
  }

  // @TODO: Compare dates

  async byDate(req, res) {
    const { query } = req;
    const date = query.date ? query.date.toLowerCase() : "today";

    const yesterdaysDate = new Date().addDays(-1).toISOString();
    const todaysDate = new Date().addDays().toISOString();
    const tomorrowsDate = new Date().addDays(1).toISOString();
    const twoDaysFromNow = new Date().addDays(2).toISOString();

    // @TODO: See if I can refactor this with more brilliant code.
    try {
      const data = await this.db.findMany({
        where: {
          createdAt: {
            lt: date === "today" ? tomorrowsDate : twoDaysFromNow,
            gt: date === "today" ? yesterdaysDate : todaysDate,
          },
        },
      });

      this.response(res, 200, data);
    } catch (err) {
      console.log(err);
      this.response(res, 400, err, false);
    }
  }
}

export default TodoController;
