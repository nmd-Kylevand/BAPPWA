import {
  NextResponse
} from "next/server";
import clientPromise from "../../../src/lib/index";
import Event from "@/models/Event";


export async function GET() {
  try {
    const events = await Event.find();
    return NextResponse.json({
      events
    }, {
      status: 200
    })

  } catch (error) {
    return NextResponse.json({
      message: "Error",
      error
    }, {
      status: 500
    })
  }
}
