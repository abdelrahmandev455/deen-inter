const search = window.location.search
const par = new URLSearchParams(search)
let name = document.getElementById("name")
let con = document.querySelector(".con")
let btn = document.getElementById("btn")

//check the paramter
if (par.has("input") && par.get("input") != "") {
  const input = par.get("input")
  name.innerHTML = `
  You searched for: 
  ${input}
  `
  var page = 1
  //check search
  async function search(pagenum) {
    //fetchverse
    let search = await fetch("https://api.quran.com/api/v4/search?q=" + input + "&size=300&page="+pagenum+"&language=en")
    let searchedfor = await search.json()
    console.log(searchedfor);
    for (var i = 0; i < searchedfor.search.results.length; i++) {
      con.innerHTML += `
    <div class="cardn">
      <div class="aya" dir="rtl">
      <p id="level" dir="rtl">
          <span>${searchedfor.search.results[i].text}</span>
          <span class='dot'>${searchedfor.search.results[i].verse_key.split(":")[1]}</span>
        </p>
       </div>
    </div>`
    }
  }
  
  btn.onclick = ()=>{
    page += 1 
    search(page)
  }
  search(page)
} else {
  //redirecting
  location.href = "../index.html"
}
