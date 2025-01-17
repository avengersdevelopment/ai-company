import { createClient } from "@/utils/supabase/server";
import Container from "./container";

export default async function Page() {
  const supabase = await createClient();
  const { data: consultations } = await supabase
    .from("consultations")
    .select("*")
    .filter("ended_at", "gte", new Date().toISOString());

  return <Container consultations={consultations ?? []} />;
}
