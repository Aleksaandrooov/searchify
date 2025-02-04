'use client';

import { Search } from '@/components/shared/Main/Search';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Option } from '@/components/shared/Main/Option';
import { Chat } from '@/components/shared/Main/Chat';

export default function Home() {
  const search = 'Что я могу найти?'.split('');
  const [value, setValue] = useState<string>('');
  const [message, setMessage] = useState<string[]>([]);

  return (
    <div className="flex-grow flex flex-col items-center justify-center my-8">
      <div className="flex flex-col flex-1 justify-center mb-4 items-center w-full">
        {message.length > 0 && <Chat message={message} />}
        {message.length === 0 && (
          <div className="flex mx-auto">
            {search.map((obj, i) => (
              <motion.h1
                key={i}
                initial={{ opacity: 0, y: -5, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
                transition={{ delay: i / 8 }}
                className={obj !== ' ' ? 'text-2xl font-medium' : 'w-[6px]'}>
                {obj}
              </motion.h1>
            ))}
          </div>
        )}
        <Search
          setMessage={() => {
            if (value) {
              setValue('');
              setMessage((prev) => {
                return [...prev, value];
              });
            }
          }}
          value={value}
          changeValue={(t) => setValue(t)}
        />
        {message.length === 0 && <Option />}
      </div>
      <div className="max-w-[600px] text-center text-sm">
        Отправляя сообщение Searchify, вы соглашаетесь с нашими <u>условиями</u> и ознакомились с
        нашей <u>политикой конфиденциальности</u>.
      </div>
    </div>
  );
}
