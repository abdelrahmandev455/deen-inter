let con = document.getElementById("con")
let input = document.getElementById("input")

 function search() {
  // body...
  location.href = "quran/search.html?input="+input.value
}
async function film() {
  let res = await fetch("https://api.quran.com/api/v4/chapters?language=en")
  let resu = await res.json()
  
  
  var i = 0;
  while(i<114){
    con.innerHTML +=`
     <div class="cardn ${resu.chapters[i].name_simple} ${resu.chapters[i].revelation_place}" id="${resu.chapters[i].id}" 
     onclick="getTheId(
     this.id,
     this.classList[1],
     this.classList[2])">
     
      <div class="number">
        <div class="nm">
          ${resu.chapters[i].id}
        </div>
      </div>
      <div class="name">
        ${resu.chapters[i].name_complex}
        <small>${resu.chapters[i].name_arabic}</small>
    </div>
    <div class="aya">
      ${resu.chapters[i].verses_count}<span>Ayas</span>
    </div>
  </div>
    `
    i++
  }
}

function getTheId(arg,name,order) {
  location.href = "quran/verses.html?chapternumber=" + arg +"&name=" + name +"&order=" +order
}

film()
