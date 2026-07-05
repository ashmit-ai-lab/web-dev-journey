function fetchPostData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post data fetched")
        }, 2000);
    })
}

function fetchCommentData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment data fetched")
        }, 3000);
    })
}

async function getBlogData(){
    try {
        console.log("Fetching blog data...");
        //const bd = await fetchPostData();
        //const cd = await fetchCommentData();

        const [bdata, cdata] = await Promise.all([fetchPostData(), fetchCommentData(),
        ])

        console.log("Fetch complete");
        
    } catch (error) {
        console.error("Error fetching blog data");
    }
}
getBlogData();