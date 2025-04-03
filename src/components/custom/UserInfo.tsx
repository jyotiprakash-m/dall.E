"use client";
import { useAuth, useUser } from "@clerk/nextjs";

export default function UserInfo() {
  const { isLoaded, isSignedIn, userId, sessionId, getToken } = useAuth();
  const { user } = useUser();
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    // You could also add a redirect to the sign-in page here
    return <div>Sign in to view this page</div>;
  }

  return (
    <div>
      Hello, {userId}! Your current active session is {sessionId}.
      <p>{JSON.stringify(user, null, 2)}</p>
    </div>
  );
}
