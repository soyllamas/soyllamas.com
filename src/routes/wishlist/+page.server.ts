import {redirect} from '@sveltejs/kit';

export const load = () => {
    throw redirect(307, 'https://www.amazon.com.mx/hz/wishlist/ls/36YVD3AURXUPK?ref_=wl_share');
};