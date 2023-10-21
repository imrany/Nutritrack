/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    try{
        // const url=`https://jsonplaceholder.typicode.com/users`
        // const response =await fetch(url);
        // const data= await response.json();

        // if(response.ok){
        //         return {data}
        // }else{
        //     return {
        //     error:`Status ${response.status}, Could not fetch!`
        //     }
        // }
        return {
            data:[
                {
                    id:1,
                    title:'Salad with eggs',
                    image:'/eggs.png',
                    kcal:'294 kcal | 200G',
                    measurements:[
                        {
                            quantity:'27g',
                            type:"Proteins"
                        }
                    ],
                },
                {
                    id:2,
                    title:'Salad with eggs',
                    image:'/eggs.png',
                    kcal:'294 kcal | 200G',
                    measurements:[
                        {
                            quantity:'27g',
                            type:"Proteins"
                        }
                    ],
                },
                {
                    id:3,
                    title:'Salad with eggs',
                    image:'/eggs.png',
                    kcal:'294 kcal | 200G',
                    measurements:[
                        {
                            quantity:'27g',
                            type:"Proteins"
                        }
                    ],
                },
            ]
        }
    }catch(error){
        return {
            error:`No Internet!`
        }
    }
}