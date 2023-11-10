import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";

export async function GET(request: NextRequest) {
  const client = await clientPromise;
  const db = client.db("ginsboard");

  const allUsers = await db.collection("users").find({}).toArray();

  return NextResponse.json(allUsers);
}

export async function POST(request: NextRequest) {
  const client = await clientPromise;
  const db = client.db("ginsboard");
  const body = await request.json();

  let users = await db.collection("users").insertOne(body);
  return NextResponse.json(users.insertedId);
}
