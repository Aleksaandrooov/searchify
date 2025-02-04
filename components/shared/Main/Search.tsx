'use client';

import { Textarea } from '@/components/ui/textarea';
import { ArrowUp } from 'lucide-react';
import React from 'react';

interface Props {
  value: string;
  changeValue: (t: string) => void;
  setMessage: () => void;
}

export const Search: React.FC<Props> = ({ value, changeValue, setMessage }) => {
  return (
    <div className="mt-4 relative bg-accent rounded-2xl w-full max-w-[640px] px-2">
      <form>
        <Textarea
          value={value}
          onChange={(e) => changeValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              setMessage();
            }
          }}
          className="w-full bg-accent text-area px-1 mt-3 border-none shadow-none"
          placeholder="Поиск в Searchify..."
        />
        <input type="submit" className="hidden" />
      </form>
      <div className="flex justify-end p-3">
        <div
          onClick={() => setMessage()}
          className="bg-zinc-700 rounded-full cursor-pointer transition-all hover:bg-zinc-500 group">
          <ArrowUp color="white" size={26} className="p-1 transition-all group-hover:rotate-90" />
        </div>
      </div>
    </div>
  );
};
