"use client"
import { Button } from "@/components/ui/button";
import { SignInButton,SignedIn, SignedOut,SignOutButton, useSession } from '@clerk/nextjs'

export default function Home() {
  const session = useSession()
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <SignedIn>
          <SignOutButton mode="modal" >
            <Button className="bg-red-500 text-white px-4 py-2 rounded">Sign Out</Button>
          </SignOutButton>
        </SignedIn>
          <SignedOut>
          <SignInButton>
            <Button className="bg-blue-500 text-white px-4 py-2 rounded">Sign In</Button>
          </SignInButton>
          </SignedOut>
        <Button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => {}}>
          Upload File
        </Button>
      </main>
    </div>
  );
}
