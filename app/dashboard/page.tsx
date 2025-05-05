import React from 'react'
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import ZennArticlesPage from '../articles/page';

const Dashboard = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }
  return (
    <div>
      <ZennArticlesPage/>
    </div>

  )
}

export default Dashboard;