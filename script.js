let countEl = document.getElementById("count-el")
let savedEl = document.getElementById("saved-el")

count = 0
saved = 0



function plus() {
    count += 1
countEl.innerText = count



}
function save(){
   let countSave = count + " - "
   savedEl.innerText += " " + countSave
   count = 0
   countEl.innerText = count 
  

}
function minus(){
    count = count - "1"
    countEl.innerText = count
    
}

