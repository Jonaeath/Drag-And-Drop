const imageBox = document.querySelector('.imageBox')
const MainBoxes = document.getElementsByClassName('MainBox')
const divElement = document.getElementById("divElement")
const resetButton = document.getElementById("reset-btn");



imageBox.addEventListener('dragstart',(e)=>{
     console.log('Drag Start')
     e.target.className += ' DSBorder';
     setTimeout(()=>{
        e.target.className = 'hide';
     }, 0)
})
   
imageBox.addEventListener('dragend',(e)=>{
        console.log('Drag End')
        e.target.className = 'imageBox';
    });
    
function resetDrag() {
        divElement.append(imageBox);
      }
   

for (const MainBox of MainBoxes){
    MainBox.addEventListener('dragover',(e)=>{
        e.preventDefault();
    })
    MainBox.addEventListener('dragenter',(e)=>{
        e.preventDefault();
        e.target.className += ' DEexpression';     
    })
    MainBox.addEventListener('dragleave',(e)=>{
        e.preventDefault();
        e.target.className = 'MainBox';       
    })
   MainBox.addEventListener('drop',(e)=>{
        e.preventDefault();
        e.target.append(imageBox);
        alert('Item dropped successfully in Container-2!');     
    })
}


  
