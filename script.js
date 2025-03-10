window.addEventListener('load', () => {
        const sounds = document.querySelectorAll(".sound");
        const pads = document.querySelectorAll(".pads div");
        const visual = document.querySelector(".visual")
        const color = [
            "#60d394",
            "#d36860",
            "#c060d3",
            "#d3d160",
            "#778899",
            "#00ffff"
        ];
        //console.log(sounds);

        pads.forEach((pad, index) =>{
          pad.addEventListener("click",function(){
               sounds[index].currentTime = 0;
               sounds[index].play();
               createBubbles(index);
          });
        });

        //Create a function that makes bubbles

        const createBubbles = (index) => {
            const bubble = document.createElement("div");
            visual.appendChild(bubble);
            bubble.style.backgroundColor = color[index];
            bubble.style.animation = 'jump 1s ease';
            bubble.addEventListener('animationed', function(){
                visual.removeChild(this);
            });
        }
}); 


