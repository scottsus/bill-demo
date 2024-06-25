'use client';

import { useChat } from 'ai/react';
import { SendHorizonalIcon } from 'lucide-react';
import { FormEvent } from 'react';

export default function Home() {
  const { messages, input, setInput, handleInputChange, handleSubmit } =
    useChat({
      api: '/api/billybot/completion',
    });
  const messagesList = messages.map((message) => (
    <div
      key={message.id}
      className={`my-2 text-md py-4 px-8 rounded-lg w-fit ${
        message.role === 'user'
          ? 'ml-auto bg-blue-100 text-blue-900'
          : 'mr-auto bg-gray-100 text-gray-900'
      }`}
    >
      {message.content}
    </div>
  ));
  const customHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
    setInput('');
  };

  return (
    <div className="flex flex-col mt-14 items-center w-[100%] h-[80vh]">
      <h1 className="text-center text-4xl">Hey there, I&apos;m Bill 👋</h1>
      <p className="text-left mt-6 text-gray-500 text-xl">
        This is Billybot, my AI assistant who knows everything about me. Feel
        free to ask it anything you like, I&apos;m sure it&apos;s up to the task
        🔥
      </p>
      <div className="mt-4 w-[60%] text-md">{messagesList}</div>
      <form
        className="flex py-4 px-8 w-[60%] border-2 border-black rounded-xl mb-0 mt-auto"
        onSubmit={customHandleSubmit}
      >
        <input
          name="prompt"
          className="h-8 w-[100%] text-black border-black focus:outline-none"
          value={input}
          onChange={handleInputChange}
          id="prompt"
        />
        <button type="submit">
          <SendHorizonalIcon />
        </button>
      </form>
    </div>
  );
}
