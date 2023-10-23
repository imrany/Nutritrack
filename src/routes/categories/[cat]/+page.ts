import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async({ fetch, params }) => {
    try {
        if (params.cat) {
            const url=`/data/food.json`
            const response =await fetch(url);
            const data= await response.json();
            if(response.ok&&data){
                return {data,cat:params.cat}
            }else{
                return {
                    error:`Status ${response.status}, Could not fetch!`
                }
            }
        }else{
            return {
                error:`Not Found`
            }
        }
    } catch (error:any) {
        return {
            error:`No Internet!`
        }
    }
};