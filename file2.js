function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let heart1 = '🧡';
let heart2 = '💛';
let heart3 = '👍';
let temp;

let commentForm = document.querySelector('.form');
let commentList = document.querySelector('.users_comments');
let commentField = document.querySelector('.comment_field');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();
    let theFirstChild = commentList.firstChild;
    let newComment = document.createElement('div');
    let usercomment = document.querySelector(".user_com");
    let parentDiv = usercomment.parentNode;
    newComment.classList.add('user_com');
    if (commentField.value == '') {
        temp = getRandomInt(3);
        if (temp == 0) {
            commentField.value = heart1;
        }
        if (temp == 1) {
            commentField.value = heart2;
        }
        if (temp == 2) {
            commentField.value = heart3;
        }
    }
    newComment.textContent = commentField.value;
    commentField.value= '';
    commentList.append(newComment);
    parentDiv.insertBefore(newComment, usercomment);
    commentList.insertBefore(newComment, theFirstChild);
};