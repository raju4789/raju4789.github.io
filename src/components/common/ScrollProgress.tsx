import React from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export const ScrollProgress: React.FC = () => {
  const { scrollProgress } = useScrollPosition();

  return (
    <div
      className="scroll-progress"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

