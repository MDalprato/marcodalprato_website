const headingPatterns = [
  /^cosa serve\??$/i,
  /^conclusioni$/i,
  /^recuperare un file$/i,
  /^backup locali.*$/i,
  /^utilizzare airplay con itunes$/i,
  /^utilizzare un dispositivo airplay per riprodurre l’audio con os x\.?$/i,
  /^utilizzare airplay con ios$/i,
  /^il tempo è prezioso\.?$/i,
  /^l’approccio$/i,
  /^matrixing$/i,
  /^risultati$/i
];

const leadingHeadingPatterns = [
  'Cosa Serve?',
  'Recuperare un file',
  'Conclusioni',
  'Utilizzare Airplay con iTunes',
  'Utilizzare Airplay con iOS',
  'Utilizzare un dispositivo Airplay per riprodurre l’audio con OS X'
];

const inlineLabelPatterns = [
  /^(streaming audio|streaming video|streaming foto|backup differenziale|backup incrementale|esempio|altro esempio)\s*:/i,
  /^(di default|ovviamente|conclusioni)\s*:/i
];

const sentenceBreakPattern = /([.!?]["”']?)(\s+)([A-ZÀ-ÖØ-Þ0-9])/g;

const cleanupSpacing = (value) =>
  value
    .replace(/\r/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

const splitDenseParagraph = (paragraph) => {
  if (paragraph.length < 420) {
    return [paragraph];
  }

  const chunks = [];
  let current = '';

  for (const sentence of paragraph.split(/(?<=[.!?]["”']?)\s+/)) {
    const next = current ? `${current} ${sentence}` : sentence;

    if (current && next.length > 360) {
      chunks.push(current.trim());
      current = sentence;
      continue;
    }

    current = next;
  }

  if (current.trim()) {
    chunks.push(current.trim());
  }

  return chunks.filter(Boolean);
};

const normalizeSentenceBreaks = (value) => value.replace(sentenceBreakPattern, '$1\n\n$3');

const splitLeadingHeading = (paragraph) => {
  for (const label of leadingHeadingPatterns) {
    if (paragraph === label) {
      return `## ${label.replace(/[?]$/, '')}`;
    }

    if (paragraph.startsWith(`${label} `)) {
      return `## ${label.replace(/[?]$/, '')}\n\n${paragraph.slice(label.length).trim()}`;
    }
  }

  return null;
};

const applyInlineEmphasis = (paragraph) => {
  let next = paragraph;

  for (const pattern of inlineLabelPatterns) {
    next = next.replace(pattern, (match) => `**${match.slice(0, -1).trim()}**:`);
  }

  next = next.replace(/(?<!\*)\b(Time Machine|AirPlay|Airplay|Apple TV|Airport Express|Airport Extreme|Time Capsule|Netflix|iTunes|OS X|Wi-Fi|Thunderbolt|Apple Watch|iPhone|iPad|MacBook Pro|Macintosh HD)\b(?!\*)/g, '**$1**');
  next = next.replace(/\b(terminale di os x|terminale di OSX)\b/gi, '**$&**');
  next = next.replace(/\b(spotlight|utility disco)\b/gi, '**$&**');

  return next;
};

const toHeading = (paragraph) => {
  const trimmed = paragraph.trim();
  const normalized = trimmed.replace(/[.:!?]+$/, '');

  if (headingPatterns.some((pattern) => pattern.test(normalized))) {
    return `## ${normalized}`;
  }

  if (/^[A-ZÀ-ÖØ-Þ][\wÀ-ÖØ-öø-ÿ’'()\-/& ]{3,48}$/.test(trimmed) && !trimmed.includes(',')) {
    return `## ${trimmed}`;
  }

  return null;
};

const explodeReasonList = (paragraph) => {
  const matches = paragraph.match(/Perché /g);
  if (!matches || matches.length < 6) {
    return null;
  }

  const normalized = paragraph
    .replace(/\. (?=Perché )/g, '.\n')
    .replace(/\?!(?=\s*Perché )/g, '?!')
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => `- ${item}`);

  return normalized.join('\n');
};

const explodeColonList = (paragraph) => {
  const colonIndex = paragraph.indexOf(':');
  if (colonIndex === -1) {
    return null;
  }

  const intro = paragraph.slice(0, colonIndex + 1).trim();
  const tail = paragraph.slice(colonIndex + 1).trim();

  if (!tail) {
    return null;
  }

  const candidates = tail
    .replace(/([.!?])\s+(?=[A-ZÀ-ÖØ-Þ])/g, '$1\n')
    .replace(/\s+(?=(Utilizzare|Streaming|Una\s|Un’|Un ))/g, '\n')
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean);

  if (candidates.length < 3) {
    return null;
  }

  if (!/(sono|serve|composta da|modi|funzionalità|lista|dispositivi|serve|potete)/i.test(intro)) {
    return null;
  }

  return `${intro}\n\n${candidates.map((item) => `- ${item.replace(/^[•-]\s*/, '')}`).join('\n')}`;
};

const explodeTechnicalDefinitions = (paragraph) => {
  if (!/due tipi di backup/i.test(paragraph) && !/backup differenziale|backup incrementale/i.test(paragraph)) {
    return null;
  }

  const normalized = paragraph.replace(/Backup d\s+ifferenziale/gi, 'Backup differenziale');
  const match = normalized.match(/^(.*?due tipi di backup:)\s*(Backup differenziale:.*?)(Backup Incrementale:.*)$/i);

  if (match) {
    const [, intro, differential, incremental] = match;
    return `${intro}\n\n- **Backup differenziale**: ${differential.replace(/^Backup differenziale:\s*/i, '')}\n- **Backup incrementale**: ${incremental.replace(/^Backup Incrementale:\s*/i, '')}`;
  }

  if (/Backup differenziale:|Backup Incrementale:/i.test(normalized)) {
    return normalized
      .replace(/Backup differenziale:/g, '\n- **Backup differenziale**:')
      .replace(/Backup Incrementale:/g, '\n- **Backup incrementale**:')
      .trim();
  }

  return null;
};

const specialCaseSeriesPost = (frontmatter, body) => {
  if (frontmatter.slug !== '2014-10-09-the-best-tv-series-that-you-should-watch-now') {
    return null;
  }

  return [
    'It’s fall, it’s foggy, and it’s cold outside.',
    '',
    'This is the perfect time of the year to watch some new **TV series** or to waste all your free time on **Netflix**, so I wrote a short list of the best shows that were on air at that moment.',
    '',
    '## Forever',
    '',
    '**ABC Channel** · Tuesdays 10|9c',
    '',
    '**Forever** is a TV series set in **New York** that follows **Henry Morgan**, a man who can live forever.',
    '',
    'It mixes procedural investigation, mystery, and a lighter tone in a way that feels fresh and accessible.',
    '',
    'Suggested if you like something in the orbit of **CSI**, but without all the darker and weirder edges of Grissom & Co.',
    '',
    '## Gotham',
    '',
    '**Fox TV** · Friday 9|8c',
    '',
    'This one almost needs no introduction: at the time, it felt like one of the strongest series on television.',
    '',
    'It tells the story of **Gotham** during **Bruce Wayne’s** childhood and explores the criminals growing in the city before Batman fully exists.',
    '',
    'It’s visually strong, atmospheric, and **Ben McKenzie** is a very convincing Detective Gordon.',
    '',
    '## Selfie',
    '',
    '**ABC Channel** · Tuesdays 8|7c',
    '',
    'Silly, light, but relaxing: **Selfie** tells the story of **Eliza**, a girl who spends her whole life in the cloud, bouncing from **Instagram** to **Facebook**, until one day she decides to become more human.',
    '',
    'Watch the pilot from the ABC website and you probably won’t be disappointed.',
    '',
    'If you have any suggestion or any favorite TV series of the moment, write a comment below.',
    '',
    'Stay Tuned.',
    '',
    'Marco'
  ].join('\n');
};

export const formatBlogMarkdownBody = (frontmatter, body) => {
  const specialCase = specialCaseSeriesPost(frontmatter, body);
  if (specialCase) {
    return specialCase;
  }

  const normalized = cleanupSpacing(normalizeSentenceBreaks(body));
  const rawParagraphs = normalized.split(/\n{2,}/).map((item) => item.trim()).filter(Boolean);
  const formatted = [];

  for (const paragraph of rawParagraphs) {
    const leadingHeading = splitLeadingHeading(paragraph);
    if (leadingHeading) {
      formatted.push(leadingHeading);
      continue;
    }

    const heading = toHeading(paragraph);
    if (heading) {
      formatted.push(heading);
      continue;
    }

    const reasonList = explodeReasonList(paragraph);
    if (reasonList) {
      formatted.push(reasonList);
      continue;
    }

    const definitionList = explodeTechnicalDefinitions(paragraph);
    if (definitionList) {
      formatted.push(definitionList);
      continue;
    }

    const colonList = explodeColonList(paragraph);
    if (colonList) {
      formatted.push(colonList);
      continue;
    }

    for (const chunk of splitDenseParagraph(paragraph)) {
      formatted.push(applyInlineEmphasis(chunk));
    }
  }

  return cleanupSpacing(formatted.join('\n\n'));
};
