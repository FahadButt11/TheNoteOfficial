export const getPosts = async()=>{

    let data=await fetch("https://jsonplaceholder.typicode.com/posts",{ method: "GET"});

    return await data.json();


}

