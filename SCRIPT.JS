
const images = []

document.querySelectorAll('.bottom-img').forEach(item=>{
   images.push(item)
})

const image = document.getElementById('modal-img')


function prev(){
  if(image.src == images[0].src){
    image.src = images[3].src
  }

  else if(image.src == images[1].src){
    image.src = images[0].src
  }
  
  else if(image.src == images[2].src){
    image.src = images[1].src
  }

  else if(image.src == images[3].src){
    image.src = images[2].src
  }

}

function next(){

if(image.src == images[0].src){
    image.src = images[1].src
   }
   
else if(image.src == images[1].src){
    image.src = images[2].src
}

else if(image.src == images[2].src){
    image.src = images[3].src
}

else if(image.src == images[3].src){
    image.src = images[0].src
}
}



document.querySelectorAll('.bottom-img').forEach(item=>{
    item.addEventListener('click', function(){
        document.querySelector('.body').style.opacity = '0.5'
        document.querySelector('.desktop-modal').style.display = 'block'
        image.src = item.src
    })
})

document.querySelector('#product1').addEventListener('click', function(){
    document.querySelector('.body').style.opacity = '0.5'
        document.querySelector('.desktop-modal').style.display = 'block'
})


function closeModal(){
    document.querySelector('.desktop-modal').style.display = 'none'
    document.querySelector('.body').style.opacity = '1'
}

function openNav(){
    document.querySelector('.side-navs').style.width = '50%'
}

function closeNav(){
    document.querySelector('.side-navs').style.width = '0'
}