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
                    title:'Pineapple',
                    image:'/pineapple.png',
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
                    title:'Porridge',
                    image:'/porridge.png',
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
                    title:'Brocolli',
                    image:'/brocolli.png',
                    kcal:'294 kcal | 200G',
                    measurements:[
                        {
                            quantity:'27g',
                            type:"Proteins"
                        }
                    ],
                },
                {
                    id:4,
                    title:'Apple',
                    image:'/apple.png',
                    kcal:'294 kcal | 200G',
                    measurements:[
                        {
                            quantity:'27g',
                            type:"Proteins"
                        }
                    ],
                },
                {
                    id:5,
                    title:'Beans',
                    image:'/beans.png',
                    kcal:'294 kcal | 200G',
                    measurements:[
                        {
                            quantity:'27g',
                            type:"Proteins"
                        }
                    ],
                },
                {
                    id:6,
                    title:'Eggs',
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
                    id:7,
                    title:'Rice',
                    image:'/rice.png',
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