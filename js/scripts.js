
    const nextBtn = document.querySelector('.move__section #next'),
          backBtn = document.querySelector('.move__section #back');
    const slider = document.querySelector('.hotels__section');

    nextBtn.addEventListener('click', function(){
    slider.style.marginLeft="-97%";
    nextBtn.style.opacity=".2";
    nextBtn.style.pointerEvents="none"
    backBtn.style.pointerEvents="all";
    backBtn.style.opacity="1";
    })

    backBtn.addEventListener('click', function(){
        slider.style.marginLeft="0%";
        backBtn.style.opacity=".2";        
        backBtn.style.pointerEvents="none"
        nextBtn.style.pointerEvents="all"
        nextBtn.style.opacity="1";
        })