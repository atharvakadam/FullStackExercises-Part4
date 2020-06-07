const dummy = (blogs) => {
    return 1;
}

const sum_likes = (blogs) => {

    let sum = 0
    for (let i = 0; i < blogs.length ; i++){
        sum += blogs[i].likes;
    }

    return sum;
}

const favorite_blog = (blogs) => {

    let most_likes = 0
    let favorite_blog = {
        title: null,
        author: null,
        likes: null
    }
    for (let i = 0; i < blogs.length ; i++){
        if (blogs[i].likes >= most_likes){
            most_likes = blogs[i].likes;
            favorite_blog.likes = most_likes;
            favorite_blog.author = blogs[i].author;
            favorite_blog.title = blogs[i].title;
        }
    }


    return favorite_blog.likes === null ? null : favorite_blog;
}

module.exports = {dummy, sum_likes, favorite_blog}