const search = window.location.search
const par = new URLSearchParams(search)
let title = document.getElementById("title")
let name = document.getElementById("name")
let con = document.querySelector(".con")

if (par.has("bookname")) {
  const bookname = par.get("bookname")
  
  name.innerHTML = `
  <span>
  ${bookname}
  </span>
  `
  //fetchverse
  async function hadiths() {
    //fetchverse
    let res = await fetch("https://api.hadith.sutanlab.id/books/"+bookname+"?range=1-300")

    let resu = await res.json()
    
    console.log(resu);

    for (var i = 0; i < resu.data.hadiths.length; i++) {
      con.innerHTML += `
    <div class="cardn">
      <div class="aya" dir="rtl">
      <p id="level" dir="rtl">
          <span>${resu.data.hadiths[i].arab}</span>
        </p>
       </div>
    </div>`
    }
  }
  
  hadiths()
} else {
  //redirecting
  location.href = "../index2.html"
}
