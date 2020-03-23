export const fetchPosts = () => {
    return(
        $.ajax(
            {
                method: 'GET',
                url: '/api/posts',
            }
        )
    )
};

export const fetchPost = (posts) => {
    return(
        $.ajax(
            {
                method: 'GET',
                data: {posts},
                url: `/api/posts/1`
            }
        )
    )
};



export const createPost = (formData) => {
    return(
        $.ajax(
            {
                method: 'POST',
                url: `/api/posts`,
                data: formData,
                contentType: false,
                processData: false
            }
        )
    )
};

export const updatePost = (post) => {
    return(
        $.ajax(
            {
                method: 'PATCH',
                url: `/api/posts/${post.id}`,
                data: {post}
            }
        )
    )
};

export const deletePost = (id) => {
    return(
        $.ajax(
            {
                method: 'DELETE',
                url: `/api/posts/${id}`
            }
        )
    )
};