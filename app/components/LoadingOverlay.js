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

export default function LoadingOverlay({ enabled, onComplete }) {
  const [isVisible, setIsVisible] = useState(enabled);
  const [isReady, setIsReady] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
    setIsReady(false);
    setIsFading(false);

    const readyTimer = window.setTimeout(() => {
      setIsReady(true);
    }, LOADER_DURATION_MS);

    return () => {
      window.clearTimeout(readyTimer);
    };
  }, [enabled]);

  if (!isVisible) {
    return null;
  }

  const lines = CODE_LINES.concat(CODE_LINES);
  const loaderClassName = `site-loader${isFading ? ' is-fading' : ''}${isReady ? ' is-ready' : ''}`;

  const handleLoad = () => {
    if (!isReady || isFading) {
      return;
    }

    setIsFading(true);

    window.setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
    }, FADE_OUT_MS);
  };

  return (
    <div className={loaderClassName} role="status" aria-live="polite">
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
          <span>{isReady ? 'Drive ready' : 'Loading modules'}</span>
          <span>{isReady ? 'Insert disk' : 'ETA < 3s'}</span>
        </div>
        <div className="site-loader__progress" aria-hidden="true">
          <span className="site-loader__bar" />
        </div>
        <div className="site-loader__actions">
          <div className="site-loader__drive" aria-hidden="true">
            <span className="site-loader__slot" />
            <span className={`site-loader__disk${isReady ? ' is-inserted' : ''}`}>
              <span className="site-loader__disk-label" />
            </span>
          </div>
          <button
            type="button"
            className="site-loader__button"
            disabled={!isReady || isFading}
            onClick={handleLoad}
          >
            LOAD
          </button>
        </div>
      </div>
    </div>
  );
}
