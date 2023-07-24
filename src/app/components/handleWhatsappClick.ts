import { fbEvent } from '@rivercode/facebook-conversion-api-nextjs';

export function handleWhatsappClick() {
    fbEvent({
        eventName: 'Contact', // ViewContent, AddToCart, InitiateCheckout, Purchase etc.
        emails: ['email1', 'email2'], // optional
        phones: ['phone1', 'phone2'], // optional
        firstName: 'firstName', // optional
        lastName: 'lastName', // optional
        enableStandardPixel: true, // default false (Require Facebook Pixel to be loaded, see step 2)
    },
    );
}