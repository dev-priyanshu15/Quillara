'use client';

import { SignedOut, SignedIn, UserButton, SignInButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { user } = useUser(); // useUser hook

  return (
    <div className="flex items-center justify-between p-5">
      {user && (
        <h1 className="text-2xl">
          {user.firstName}
          {`'s`} Space
        </h1>
      )}
{/* breadcrums use kiye auth ke liye bas itne me dekho kya hua secured by clerk google auth se profile small round with name        */}
      {/* Breadcrumbs */}
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;
