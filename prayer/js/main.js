let con = document.getElementById("con")
let yearc = document.querySelector(".normal")
let input = document.getElementById("inpu")
yearc.innerText = " Hint : Write a  invaild City"
async function fetchsalah() {
  let res = await fetch("https://dailyprayer.abdulrcs.repl.co/api/"+input.value)
  
  let resu = await res.json()
  
  console.log(resu);
  
  con.innerHTML = `
    <div class="cardn">
      <div class="name">
        Fajr 
    </div>
    <div class="salah">
      ${resu.today.Fajr}
    </div>
  </div>`
  
  con.innerHTML += `
    <div class="cardn">
      <div class="name">
        Dhuhr
    </div>
    <div class="salah">
      ${resu.today.Dhuhr}
    </div>
  </div>`
  
  con.innerHTML += `
    <div class="cardn">
      <div class="name">
        Asr
    </div>
    <div class="salah">
      ${resu.today.Asr}
    </div>
  </div>`
  
  con.innerHTML += `
    <div class="cardn">
      <div class="name">
        Maghrib
    </div>
    <div class="salah">
      ${resu.today.Maghrib}
    </div>
  </div>`
  
  con.innerHTML += `
    <div class="cardn">
      <div class="name">
        Isha
    </div>
    <div class="salah">
    ${Object.values(resu.today)[5]}
    </div>
  </div>`
  
}

input.onchange = ()=>{
  fetchsalah()
}
