const form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input"),
errorText = form.querySelector(".error-text");

form.onsubmit = (e)=>{
    e.preventDefault();
}

continueBtn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "success"){
                location.href="users.php";
              }else{
                errorText.style.display = "block";
                errorText.textContent = data;
              }
          }
      }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}

    let marke = document.querySelector('#marke');
    let list =  document.querySelector('#ul li');

    function  moveIndicator(e) {
      marker.style.left=e.offsetLeft+'px';
      
    }

    list.forEach(link => {
      link.addEventListener('mousemove',(e) =>{
        moveIndicator(e.target);
      })
    })