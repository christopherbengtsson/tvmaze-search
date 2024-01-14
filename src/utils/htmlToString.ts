import he from 'he';

const REGEX_HTML = /(<([^>]+)>)/gi;

export const htmlToString = (html?: string | null) => {
  if (!html) return html;

  const str = he.decode(html);

  return str.replace(REGEX_HTML, '');
};
