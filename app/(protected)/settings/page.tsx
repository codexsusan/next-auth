import React from "react";
import { auth, signOut } from "@/auth";
import { authRoutes } from "@/routes";
interface SettingsProps {}

async function Settings({}: SettingsProps) {
  const session = await auth();
  return (
    <div>
      <div>{JSON.stringify(session)}</div>
      <form
        action={async () => {
          "use server";
          await signOut({
            redirectTo: authRoutes[0],
          });
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
}

export default Settings;
