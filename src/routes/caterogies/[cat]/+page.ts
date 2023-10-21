import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ fetch, params }) => {
    try {
         // @ts-ignore
        // const url=`https://jsonplaceholder.typicode.com/users/${params.id}`
        // const response =await fetch(url);
        // const data= await response.json();

        // if(response.ok){
        //         return {data}
        // }else{
        //     return {
        //     error:`Status ${response.status}, Could not fetch!`
        //     }
        // }

        // if (params.cat === 'hello-world') {
        //     return {
        //         title: 'Hello world!',
        //         content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
        //     };
        // }
        return {
            data:{
                    id:1,
                    title:'Rongo University on Fire',
                    image:'/img6.jpg',
                    author:"Imran Matano",
                    authorImage:'/img2.jpg',
                    body:`
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities. 
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities.
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities.
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities.
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities.
                    Early this morning, Rongo University was face a tragedy events, a wild fire enter the school and destroy 88% on the school facilities.
                    `,
                }
        }
    } catch (error:any) {
        error(404, 'Not found');
        // return {
        //     error:`No Internet!`
        // }
    }
};