import type { LayoutLoad } from '../$types';
export const load: LayoutLoad = () => {	
    return {		
        sections: [			
            { slug: '', title: 'Home' },			
            { slug: 'logout', title: 'Log out' },		
        ],	
    };
};