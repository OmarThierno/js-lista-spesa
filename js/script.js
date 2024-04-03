const list = ['pasta', 'carota', 'pomodoro', 'cavolfiore'];

let listElem = document.querySelector(".list");

let i = 0;
while ( i < list.length) {

  const liElem = document.createElement("li"); 
  liElem.innerHTML = list[i];
  console.log(liElem);

  liElem.addEventListener("click", function() {
    liElem.classList.toggle("bg-green");
  });

  listElem.append(liElem);
  i++
}