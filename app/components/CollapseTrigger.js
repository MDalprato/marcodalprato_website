'use client';

import { useState } from 'react';

export default function CollapseTrigger() {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      className={`nerd-trigger${active ? ' active' : ''}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      aria-label="Nerd easter egg"
    >
      {active ? '> npm run ship -- --prod' : 'console.log()'}
    </button>
  );
}
