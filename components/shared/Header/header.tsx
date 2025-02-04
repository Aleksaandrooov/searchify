import { Button } from '@/components/ui/button';
import { Container } from '@/lib/container';
import { Moon, UserRound } from 'lucide-react';
import React from 'react';

export const Header = () => {
  return (
    <div className="flex h-12 mx-4 px-2 gap-2 border-b items-center">
      <h1 className="text-xl">Serachify</h1>
      <div className="ml-auto flex items-center gap-2">
        <Button variant="outline">
          Войти <UserRound />
        </Button>
        <Button variant="ghost" className="px-3">
          <Moon />
        </Button>
      </div>
    </div>
  );
};
