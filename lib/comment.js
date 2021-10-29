const usersComment = document.getElementById('users-comment');
const sendComment = document.getElementById('sendComment');
const commentTextarea = document.getElementById('comment-textarea');

  sendComment.addEventListener('click', () => {
    validateForm();
  })

function validateForm () {
  if (commentTextarea.value === null || commentTextarea.value.trim() == '') {
    return false;
  } else {
    addCommentInLocalStorage(commentTextarea.value);
    addUsersComment();
  }
}

function addUsersComment () {
  let comnt = document.createElement('div');
    comnt.className = 'component_info_inner';
    comnt.style.width = '100%';
    comnt.style.marginTop = '10px';
  
    usersComment.appendChild(comnt);
  
   
  
    let name = document.createElement('p');
    name.className = 'cmnt-p3'
  
    comnt.appendChild(name);
  
    let comment = document.createElement('p');
    comment.className = 'cmnt-p4';
    comment.style.color = 'black';
    
    if (localStorage.getItem('comment') !== String) {
      comment.innerHTML = localStorage.getItem('comment');
    } else {
      comment.innerHTML = commentTextarea.value;
    }
  
    comnt.appendChild(comment);
  
}

function addCommentInLocalStorage (value) {
  localStorage.setItem('comment', value);
}

function checkLocalStorage () {
  let cat = localStorage.getItem('comment');
  console.log(cat)
  if (cat !== null) {
    addUsersComment();
  } else {
    return false; 
  }
}

checkLocalStorage();