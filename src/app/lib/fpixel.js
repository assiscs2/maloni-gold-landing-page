

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

export const pageview = () => {
  const crypto = require('crypto');
  const dateString = new Date().toISOString();
  const id = crypto.createHash('sha256').update(dateString).digest('hex');
  window.fbq('track', 'PageView', {eventID: id})
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
  window.fbq('track', name, options)
}

export const whatsappButtonEvent1 = () => {
  const crypto = require('crypto');
  const dateString = new Date().toISOString();
  const id = crypto.createHash('sha256').update(dateString).digest('hex');
  window.fbq('track', 'Contact', {eventID: id})
}
export const whatsappButtonEvent2 = () => {
  const crypto = require('crypto');
  const dateString = new Date().toISOString();
  const id = crypto.createHash('sha256').update(dateString).digest('hex');
  window.fbq('track', 'Contact', {eventID: id})
}

