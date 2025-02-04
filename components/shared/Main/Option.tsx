import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ClipboardList, Gem, Medal } from 'lucide-react';

interface Props {
  className?: string;
}

export const Option: React.FC<Props> = ({ className }) => {
  return (
    <div className="mt-4 flex gap-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.6 }}>
        <Button size="sm" variant="outline" className="rounded-xl gap-1">
          Низкие цены
          <Gem strokeWidth={1.5} />
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3 }}>
        <Button size="sm" variant="outline" className="rounded-xl gap-1">
          Высокие отзывы <Medal strokeWidth={1.5} />
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.4 }}>
        <Button size="sm" variant="outline" className="rounded-xl">
          Качественые <ClipboardList strokeWidth={1.5} />
        </Button>
      </motion.div>
    </div>
  );
};
