"use client";

import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  if (!session) {
    return null; // hoặc loading spinner
  }

  return <div>This is HomePage</div>;
};

export default HomePage;
