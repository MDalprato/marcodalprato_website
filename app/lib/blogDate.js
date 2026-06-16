const MONTH_LABELS = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  it: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic']
};

export const formatBlogDateLabel = (dateString, locale = 'en') => {
  if (typeof dateString !== 'string' || !dateString.trim()) {
    return '';
  }

  const [year, month, day] = dateString.split('-').map((value) => Number.parseInt(value, 10));

  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day) ||
    month < 1 ||
    month > 12
  ) {
    return dateString;
  }

  const labels = MONTH_LABELS[locale] || MONTH_LABELS.en;
  return locale === 'it' ? `${day} ${labels[month - 1]} ${year}` : `${day} ${labels[month - 1]}, ${year}`;
};
