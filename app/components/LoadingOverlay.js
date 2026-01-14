import { useEffect, useState } from 'react';

const CODE_LINES = [
  'const boot = async () => {',
  '  await hydrate("portfolio");',
  '  const signal = await compile("ui");',
  '  return signal.ready;',
  '};',
  'init().then(render);',
  'fetch("/api/handshake")',
  '  .then(sync)',
  '  .catch(retry);',
  'render({ motion: true });',
  'export default ready;'
];

const LOADER_DURATION_MS = 3000;
const FADE_OUT_MS = 600;

export default function LoadingOverlay({ enabled }) {
  const [isVisible, setIsVisible] = useState(enabled);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
    setIsFading(false);

    const fadeTimer = window.setTimeout(() => {
      setIsFading(true);
    }, LOADER_DURATION_MS - FADE_OUT_MS);

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, LOADER_DURATION_MS);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, [enabled]);

  if (!isVisible) {
    return null;
  }

  const lines = CODE_LINES.concat(CODE_LINES);

  return (
    <div className={`site-loader${isFading ? ' is-fading' : ''}`} role="status" aria-live="polite">
      <div className="site-loader__frame">
        <div className="site-loader__title">
          <span className="site-loader__pulse" aria-hidden="true" />
          <span>Booting portfolio</span>
        </div>
        <div className="site-loader__code" aria-hidden="true">
          <div className="site-loader__code-inner">
            {lines.map((line, index) => (
              <span key={`${line}-${index}`}>{line}</span>
            ))}
          </div>
        </div>
        <div className="site-loader__status">
          <span>Loading modules</span>
          <span>ETA &lt; 3s</span>
        </div>
        <div className="site-loader__progress" aria-hidden="true">
          <span className="site-loader__bar" />
        </div>
      </div>
    </div>
  );
}
