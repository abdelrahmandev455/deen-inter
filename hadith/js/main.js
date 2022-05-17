let con = document.getElementById("con")
let input = document.getElementById("input")


async function hadith() {
  let hadith = await fetch('https://api.hadith.sutanlab.id/books')
  let resu = await hadith.json()
  
  console.log(resu);
  
  var i = 0
  while(i<114){
    con.innerHTML +=`
    <div class="cardn" id="${resu.data[i].id}" 
     onclick="getTheId(this.id)">
     
      <div class="number">
        <div class="nm">
          ${i + 1}
        </div>
      </div>
      <div class="name">
        ${resu.data[i].id}
        <small>
        ${resu.data[i].name}
        </small>
    </div>
    <div class="aya">
      ${resu.data[i].available}<span>Hadiths</span>
    </div>
  </div>
    `
    i++
  }
}

hadith()

function getTheId(arg) {
  location.href = "hadith/hadiths.html?bookname=" + arg
}
