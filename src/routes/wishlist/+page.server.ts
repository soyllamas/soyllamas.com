import {redirect} from '@sveltejs/kit';

export const load = () => {
    throw redirect(303, 'https://www.amazon.com.mx/hz/wishlist/ls/3S8KIGGDCXTQ0?ref_=wl_share');
};