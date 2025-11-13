"use client"

import { Chat } from "@/components/Chat";
import { ChatProvider } from "@/contexts/ChatContext";
import { UserProvider } from "@/contexts/UserContext";

const Page = () => {
  return (
    <div className="container mx-auto max-w-lg px-2 sm:px-4">
      <UserProvider>
        <ChatProvider>
          <h1 className="text-2xl sm:text-3xl my-3 sm:my-4 text-center">Chat simples</h1>
          <Chat />
        </ChatProvider>
      </UserProvider>
    </div>
  )
}

export default Page;