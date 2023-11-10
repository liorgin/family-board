import clientPromise from "../lib/mongodb";


export interface User {
    username: string,
    refreshToken: string,
    _id: string
    }

export const getUsers = async () => {
  const client = await clientPromise;
  const db = client.db("ginsboard");

  return await db.collection("users").find({}).toArray();
};

export const getUserByUsername = async (username: string) => {
    const client = await clientPromise;
    const db = client.db("ginsboard");

    return await db.collection<User>("users").findOne({username: username})
 }