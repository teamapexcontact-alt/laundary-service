import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    if (!supabase) {
      return NextResponse.json(
        { error: "Database not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, phone, address, service_type, preferred_time } = body;

    if (!name || !phone || !address) {
      return NextResponse.json(
        { error: "Name, phone, and address are required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("pickup_requests")
      .insert([
        {
          name,
          phone,
          address,
          service_type: service_type || null,
          preferred_time: preferred_time || null,
          status: "pending",
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to submit pickup request" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Pickup request submitted successfully", data },
      { status: 201 }
    );
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}