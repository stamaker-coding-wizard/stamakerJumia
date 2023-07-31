const my_btn = document.querySelector(".my-btn");
my_btn.addEventListener('click', ()=>{
    document.getElementById("mySidenav").style.display="block";
})

const close_btn = document.querySelector(".closebtn");
close_btn.addEventListener('click', () =>{
    document.getElementById("mySidenav").style.display="none";
})