import { userSwipeTmpl } from "./templates.js";



let users = [
    {
        "source" : "./assets/img/img1.jpeg",
        "alt" : "Bruger 1",
        "description" : "Bruger 1", 
        "id" : 0
    },
    {
        "source" : "./assets/img/img2.jpg",
        "alt" : "Bruger 2",
        "description" : "Bruger 2",
        "id" : 1 
    },
    {
        "source" : "./assets/img/img3.jpg",
        "alt" : "Bruger 3",
        "description" : "Bruger 3",
        "id" : 2 
    }
];




export const swipe = () => {

    const slideContainer = document.querySelector('.slides');

    users.forEach(slide =>
        slideContainer.insertAdjacentHTML('beforeend', userSwipeTmpl(slide)),
    )
    

    const slides = document.querySelectorAll('.single-slide');
    let slidesLength = slides.length - 1; 
    let currentImageIndex = 0;





    const setActiveSlide = (index) => { 
        slides.forEach( (slide) => {
            slide.classList.remove('active');
        });

        slides[index].classList.add('active'); 
        
    };



    const next = () => {    

        if(currentImageIndex >= slidesLength){
            currentImageIndex = 0;
        } else {
            currentImageIndex += 1;
        }

        setActiveSlide(currentImageIndex);


    };

    const like = () => {
        
        let likedList = JSON.parse(localStorage.getItem('likedList')) || [];
        const userToAdd = users.find((user) => user.id == currentImageIndex)
        const exist = likedList.find(user => user.id === userToAdd.id)
              
        if(!exist){
            likedList.push(userToAdd)        
            localStorage.setItem('likedList', JSON.stringify(likedList))                
        }
        
        next()

    };



  
        const likeBtn = document.querySelector('[data-direction=like]');
        const dislikeBtn = document.querySelector('[data-direction=dislike]');

        likeBtn.addEventListener('click', like);
        dislikeBtn.addEventListener('click', next);


    setActiveSlide(currentImageIndex); 


}


