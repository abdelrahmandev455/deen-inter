import {audio} from "./func.js"

const search = window.location.search
const par = new URLSearchParams(search)
let title = document.getElementById("title")
let name = document.getElementById("name")
let con = document.querySelector(".con")

//check the paramter
if (par.has("chapternumber")) {
  const chapternumber = par.get("chapternumber")
  const chaptername = par.get("name")
  const ordername = par.get("order")
  
  name.innerHTML = `
  ${chaptername}
  <span>
  ${ordername}
  </span>
  `
  //fetchverse
  async function verse() {
    //fetchverse
    let res = await fetch("https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=" + chapternumber)

    let resu = await res.json()

    audio(chapternumber)

    for (var i = 0; i < resu.verses.length; i++) {
      con.innerHTML += `
    <div class="cardn">
      <div class="aya" dir="rtl">
      <p id="level" dir="rtl">
          <span>${resu.verses[i].text_uthmani}</span>
          <span class='dot'>${resu.verses[i].verse_key.split(":")[1]}</span>
        </p>
       </div>
    </div>`
    }
  }
  verse()
} else {
  //redirecting
  location.href = "../index.html"
}
