let con = document.getElementById("con")

let value = "islam"

async function book(arg) {
  let hadith = await fetch('https://www.googleapis.com/books/v1/volumes?q='+arg)
  let resu = await hadith.json()
  
  console.log(resu);
  
  const checkimg = ()=>{
    if(resu.items[i].volumeInfo.imageLinks){
      return resu.items[i].volumeInfo.imageLinks.smallThumbnail
    }else{
      return 'Image Not Available'
    }
  }
  
  const checkdesc = ()=>{
    if(resu.items[i].volumeInfo.description){
      return resu.items[i].volumeInfo.description
    }else{
      return "Description not available"
    }
  }
  var i = 0
  for(i;i<resu.items.length;i++){
    con.innerHTML +=`
<div class="card"> <img src="${checkimg()}" class="card-img-top" alt="${checkimg()}"> <div class="card-body"> <h5 class="card-title">${resu.items[i].volumeInfo.title}</h5> <p class="card-text">${checkdesc()}</p> <p class="card-text"><small class="text-muted">
<a href="${resu.items[i].volumeInfo.canonicalVolumeLink}">See link</a>
</small></p> </div> </div> 
    `
  }
}

book(value)

function search(value){
  con.innerHTML = ""
  book(value)
}
