'use client';

import { Typewriter } from 'react-simple-typewriter';

type Props = {
    words: string[ ];
    className?: string;
    loop: number;
    cursorStyle: string;
    typeSpeed: number;
    deleteSpeed: number;
    delaySpeed: number;
  };

const TypeWriterText = ({ words, className, loop, cursorStyle, typeSpeed, deleteSpeed, delaySpeed }: Props) => {
  return (
    <span dir='rtl' className={`whitespace-nowrap ${className}`}>
      <Typewriter
        words={words}
        loop={loop}
        cursor
        cursorStyle={cursorStyle}
        typeSpeed={typeSpeed}
        deleteSpeed={deleteSpeed}
        delaySpeed={delaySpeed}
      />
    </span>
  );
};

export default TypeWriterText;
