"use server";

import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";

export async function logPageView(data: { page: string; referrer: string }) {
  const headersList = await headers();
  
  // Extract geo information from Vercel headers
  const country = headersList.get("x-vercel-ip-country") || null;
  const region = headersList.get("x-vercel-ip-country-region") || null;
  const city = headersList.get("x-vercel-ip-city") || null;

  const supabase = await createClient();

  try {
    const { error } = await supabase.from("analytics_page_views").insert({
      event_type: "pageview",
      page: data.page,
      referrer: data.referrer,
      country,
      region,
      city,
    });

    if (error) {
      console.error("Failed to log page view:", error);
    }
  } catch (err) {
    console.error("Unexpected error logging page view:", err);
  }
}
