import Event from "@/models/Event";
import {
  NextResponse
} from "next/server";

export async function GET(request, {
  params
}) {
  const {
    slug
  } = params;

  const event = await Event.findOne({
    slug: slug
  });

  return NextResponse.json({
    event
  }, {
    status: 200
  });
}
