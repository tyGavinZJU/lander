const Remarkable = require('remarkable');
const sanitizeHtml = require('sanitize-html');

const md = new Remarkable({html: true, breaks: true, linkify: true});

export default (input) => {
  const rendered = md.render(input);

  const sanitized = sanitizeHtml(rendered, {
    allowedTags: ['b', 'strong', 'i', 'em', 'a', 'p', 'br'],
    allowedAttributes: {
      'a': ['href']
    },
    allowedSchemes: ['https']
  });

  return sanitized.trim();
}


/*
Keeping this one for future

const sanitized = sanitizeHtml(rendered, {
    allowedTags: ['b', 'strong', 'i', 'em', 'a', 'p', 'iframe', 'br'],
    allowedAttributes: {
      'a': ['href'],
      'iframe': ['src', 'frameborder', 'allowfullscreen', 'width', 'height'],
    },
    allowedIframeHostnames: ['www.youtube.com'],
    allowedSchemes: ['https'],
    transformTags: {
      'iframe': function (tagName, attribs) {

        const a = Object.assign({}, attribs, {width: '400px', height: '300px'});

        return {
          tagName: 'iframe',
          attribs: a
        };
      }
    }
  });
 */