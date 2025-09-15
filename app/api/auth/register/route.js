import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password, image, number } = await request.json();

  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = {
    name,
    email,
    password: hashedPassword,
    image,
    number,
  };

  try {
    await userModel.create(newUser);
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    const message = err.message;
    return new NextResponse(message, { status: 500 });
  }
};

// 🟢 GET — Fetch all users
export const GET = async () => {
  try {
    await dbConnect();

    const users = await userModel.find().sort({ createdAt: -1 });

    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
};

// 🟢 PATCH — Make Admin
export const PATCH = async (request) => {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  try {
    await dbConnect();

    const updatedUser = await userModel.findOneAndUpdate(
      { email },
      { role: "admin" },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
};
