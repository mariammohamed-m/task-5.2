import DOMPurify from 'dompurify'

const SANITIZE_OPTIONS = {
  USE_PROFILES: { html: true },
  ALLOWED_TAGS: ['b', 'strong', 'i', 'em', 'u', 'p', 'br', 'ul', 'ol', 'li', 'a', 'code', 'pre'],
  ALLOWED_ATTR: ['href', 'title', 'target', 'rel']
}

// Reviews are rendered as HTML so people can use light formatting (bold, links).
// This helper is the single place review HTML passes through before it is handed
// to React's dangerouslySetInnerHTML.
export const sanitizeHtml = (dirty) => DOMPurify.sanitize(typeof dirty === 'string' ? dirty : '', SANITIZE_OPTIONS)
