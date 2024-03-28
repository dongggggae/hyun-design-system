'use client';
import React, { useRef, useEffect } from 'react';

import classNames from '@utils/classNames';

interface ProgressBarProps {
  now: number;
  label?: boolean;
  state?: 'success' | 'warnning' | 'error' | 'information';
  className?: string | string[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ now, label, state = 'success', className }) => {
  const PREFIX = 'progress';
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${now}%`;
    }
  });

  return (
    <div className={classNames(PREFIX, Array.isArray(className) ? className.join(' ') : className)}>
      <div ref={progressBarRef} data-persent={now} className={classNames(`${PREFIX}-bar`, state)}>
        {label && `${now}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
