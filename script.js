function addPost() {
    const postInput = document.getElementById('newPost');
    const postsList = document.getElementById('postsList');

    if (postInput.value) {
        const newPost = document.createElement('li');
        newPost.innerHTML = `${postInput.value} <button onclick="deletePost(this)">Delete</button>`;
        postsList.appendChild(newPost);
        postInput.value = ''; // Clear input field
    } else {
        alert('Please enter a post.');
    }
}

function deletePost(button) {
    const post = button.parentElement;
    post.remove();
}
