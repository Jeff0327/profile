import Profile from "@/app/components/Profile";
import {Suspense} from "react";

export default async function Home() {
  return (
      <Suspense fallback={null}>
          <Profile/>
      </Suspense>
  );
}
