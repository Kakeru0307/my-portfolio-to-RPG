import { Typewriter } from 'react-simple-typewriter';

interface ChatMessageProps {
  message: string;
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className="relative whitespace-pre-line">
      <div className="invisible">{message}</div>
      <div className="absolute top-0 left-0 w-full">
        <Typewriter
          key={message}
          words={[message]}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          delaySpeed={1000}
        />
      </div>
    </div>
  );
}

export default ChatMessage;
