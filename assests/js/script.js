let users = [
  { username: "negar", password: "123", role: 1 },
  { username: "negin", password: "100", role: 1 },
  { username: "yasi", password: "200", role: 0 },
  { username: "zahra", password: "300", role: 0 }
];

function find() {
  let usernameInput = document.getElementById("username").value.trim();
  let passwordInput = document.getElementById("password").value.trim();

  if (!usernameInput || !passwordInput) {
      alert("لطفا نام کاربری و رمز عبور را وارد کنید!");
      return;
  }

  let user = users.find(u => u.username === usernameInput && u.password === passwordInput);

  if (user) {
    if (user.role === 0) {
        window.location.href = "../assests/paneladmin/index.html"; 
    } else if (user.role === 1) {
        window.location.href = "./index.html"; 
    } else {
        window.location.href = "./signup.html"; 
    }
} else {
    window.location.href = "./signup.html"; 
}
}


function succeed(){

    let name = document.getElementById("name").value.trim();
    let family = document.getElementById("family").value.trim();
    let signupuse = document.getElementById("signup-username").value;
    let signuppass = document.getElementById("signup-password").value;

    if (!name || !family){
        alert("نام و نام خانوادگی خود را صحیح وارد کنید");
        return;
    }
    if (!signupuse){
        alert("نام کاربری خود را صحیح و به صورت حروف وارد کنید");
        return;
    }
    if(!signuppass || isNaN(signuppass)){
        alert("رمز عبور خود را صحیح و به صورت عددی وارد کنید");
        return;
    }
    else{
        alert("شما با موفقیت ثبت نام شدید")
    }

    document.getElementById("name").value="";
    document.getElementById("family").value="";
    document.getElementById("signup-username").value="";
    document.getElementById("signup-password").value="";
}
