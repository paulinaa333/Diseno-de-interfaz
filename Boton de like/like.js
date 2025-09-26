const btn = document.getElementById('likeBtn');
const contador = document.getElementById('likesCounter');
let likes = 0;

btn.addEventListener('click', () => {
    console.log('Me han dado', likes, 'likes');
    likes = likes + 1;
    contador.textContent = 'Likes:'  + likes; // 2) a 
    });