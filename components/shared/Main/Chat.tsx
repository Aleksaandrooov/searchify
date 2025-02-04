import { Container } from '@/lib/container';
import { Search } from 'lucide-react';
import React from 'react';

interface Props {
  message: string[];
}

export const Chat: React.FC<Props> = ({ message }) => {
  return (
    <Container className="h-full flex flex-col gap-5 max-w-[900px]">
      {message.map((obj, i) => (
        <div
          key={i}
          className={
            i % 2 === 0
              ? 'ml-auto bg-accent px-4 rounded-2xl py-1 max-w-[500px]'
              : 'mr-auto flex gap-2 py-1'
          }>
          {i % 2 !== 0 ? <Search className="shrink-0 mt-[2px]" size={18} color="gray" /> : ''}
          <h1 className="">{obj}</h1>
        </div>
      ))}
    </Container>
  );
};
