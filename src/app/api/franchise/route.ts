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
    const { name, phone, email, city, interest } = body;

    if (!name || !phone || !email || !city) {
      return NextResponse.json(
        { error: "Name, phone, email, and city are required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("franchise_leads")
      .insert([{ name, phone, email, city, interest }])
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to submit franchise inquiry" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Franchise inquiry submitted successfully", data },
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