import { ChatForm } from "@/components/chat-form";
import { Badge } from "@/components/ui/badge";
import { highlight } from "sugar-high";

export default function Home() {
  return (
    <>
      <section className="pt-22 pb-10 space-y-3 max-w-lg mx-auto">
        {
          /* <p className="text-primary font-medium text-sm">
          React + TailwindCSS + shadcn/ui
        </p> */
        }
        <Badge>Coming Soon</Badge>
        <h1 className="text-2xl font-semibold text-balance tracking-tight">
          Open Source AI UI Kit for 100x Faster AI Design and Development.
        </h1>
        <p className="text-muted-foreground">
          Robin UI simplifies the creation of AI-powered chat applications with
          intuitive, customizable components designed to supercharge your design
          and development workflow.
        </p>
      </section>

      <section className="w-full mx-auto">
        <ChatForm />
      </section>

      <section className="max-w-lg mx-auto">
        <pre className="text-sm border rounded-lg p-4 bg-muted overflow-hidden">
          <code
            className="overflow-x-auto"
            dangerouslySetInnerHTML={{
              __html: highlight(`import {
  RobinChatContainer,
  RobinChatHeader,
  RobinChatTitle,
  RobinChatContent,
  RobinChatMessage,
  RobinChatMessageContent,
  RobinChatMessageText,
  RobinInput,
} from '@/components/ui/robin-chat';

export default function AIChat() {
  return (
    <RobinChatContainer>
      <RobinChatHeader>
        <RobinChatTitle>New Chat</RobinChatTitle>
      </RobinChatHeader>
      <RobinChatContent>
        <RobinChatMessage role="assistant">
          <RobinChatMessageContent>
            <RobinChatMessageText>Hello, how are you?</RobinChatMessageText>
          </RobinChatMessageContent>
        </RobinChatMessage>
        <RobinChatMessage role="user">
          <RobinChatMessageContent>
            <RobinChatMessageText>I'm good, thank you!</RobinChatMessageText>
          </RobinChatMessageContent>
        </RobinChatMessage>
      </RobinChatContent>
      <RobinInput placeholder="What's on your mind?">
        <AttachButton />
        <SendButton />
      </RobinInput>
    </RobinChatContainer>
  );
}`),
        }} />
        </pre>
      </section>
    </>
  );
}
