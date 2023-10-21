import type { LayoutLoad } from './$types';
import FaBell from 'svelte-icons/fa/FaBell.svelte'
export const load: LayoutLoad = () => {	
    return {		
        sections: [			
            { slug: 'Profile', title: 'Profile' },			
            { slug: 'notifications', title: 'Notifications' },		
        ],	
    };
};