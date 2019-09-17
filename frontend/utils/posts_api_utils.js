export const fetchPosts = () => (
    $.ajax({
        method: 'GET',
        url: '/api/posts',
    })
);

export const fetchPost = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/posts/${id}`,
    })
);

export const createPost = (formData) => (
    $.ajax({
        method: 'POST',
        url: `/api/posts`,
        data: formData,
        contentType: false,
        processData: false
    })
);

export const updatePost = (post) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/posts`,
        data: {post}
    })
);

export const deletePost = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/posts/${id}`
    })
);