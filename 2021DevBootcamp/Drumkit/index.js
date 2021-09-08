let kit = [
  "sounds/tom-1.mp3",
  "sounds/tom-2.mp3",
  "sounds/tom-3.mp3",
  "sounds/tom-4.mp3",
  "sounds/snare.mp3",
  "sounds/kick-bass.mp3",
  "sounds/crash.mp3",
];
let audio = [];
/* for (let i=0;i<document.getElementsByTagName("button").length;i++) {document.getElementsByTagName("button")[i].addEventListener("click", () => {
    audio[i] = new Audio(kit[i]);
    audio[i].play();
    console.log(audio)
})} */

for (let i = 0; i < document.getElementsByTagName("button").length; i++) {
  audio[i] = new Audio(kit[i]);
}

for (let i = 0; i < document.getElementsByTagName("button").length; i++) {
  document.getElementsByTagName("button")[i].addEventListener("click", () => {
    document.getElementsByTagName("button")[i].classList.toggle("pressed");
    setTimeout(()=>{document.getElementsByTagName("button")[i].classList.toggle("pressed")},200);
    
    audio[i].play();
  });
}
console.log(audio)
document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "w":
      audio[0].play();
      document.getElementsByClassName("w")[0].classList.toggle("pressed");
      setTimeout(()=>{document.getElementsByClassName("w")[0].classList.toggle("pressed");},200);
      break;

    case "a":
        document.getElementsByClassName("a")[0].classList.toggle("pressed");
        setTimeout(()=>{document.getElementsByClassName("a")[0].classList.toggle("pressed");},200);
        
      audio[1].play();

      break;

    case "s":
        document.getElementsByClassName("s")[0].classList.toggle("pressed");
        setTimeout(()=>{document.getElementsByClassName("s")[0].classList.toggle("pressed");},200);
      audio[2].play();

      break;

    case "d":
        document.getElementsByClassName("d")[0].classList.toggle("pressed");
        setTimeout(()=>{document.getElementsByClassName("d")[0].classList.toggle("pressed");},200);
      audio[3].play();

      break;
    case "j":
      audio[4].play();
      document.getElementsByClassName("j")[0].classList.toggle("pressed");
      setTimeout(()=>{document.getElementsByClassName("j")[0].classList.toggle("pressed");},200);
      break;
    case "k":
      audio[5].play();
      document.getElementsByClassName("k")[0].classList.toggle("pressed");
      setTimeout(()=>{document.getElementsByClassName("k")[0].classList.toggle("pressed");},200);
      break;
    case "l":
      audio[6].play();
      document.getElementsByClassName("l")[0].classList.toggle("pressed");
      setTimeout(()=>{document.getElementsByClassName("l")[0].classList.toggle("pressed");},200);
      break;

    default:
      console.log(e.key);
      break;
  }
});
