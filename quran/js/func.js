let stop = document.querySelector("#stop")
let play = document.getElementById("play")
let btn2= document.getElementById("btn+10")
let btn1 = document.getElementById("btn-10")
export async function audio(mp3) {
  let audio = await fetch(`https://api.quran.com/api/v4/chapter_recitations/1/${mp3}`)
  let au = await audio.json()

var audioplay = new Audio(au.audio_file.audio_url);
  play.onclick = () => {
    audioplay.play()
    
    play.style.display = 'none'
    stop.style.display = "block"
  }
  
  stop.onclick = ()=>{
    audioplay.pause()
    
    stop.style.display = 'none'
    play.style.display = "block"
  }
  
  btn2.onclick = ()=>{
    audioplay.currentTime += 10
  }
  
  btn1.onclick = ()=>{
    audioplay.currentTime -= 10
  }
}
