import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const validateConnection = async () => {
  try {
    await client.todo.findMany();
    console.log("Database connected..");
  } catch (err) {
    throw err;
  }
};

export const createUser = async () => {
  try {
    await client.user.create({
      data: {
        name: "Donny",
      },
    });
  } catch (err) {
    throw err;
  }
};

export default client;
