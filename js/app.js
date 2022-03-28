/**
 * 
 * target the DOM elements
 * 
 */
const btns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');
const about = document.querySelector('.about');

about.addEventListener('click', function(e) {

    const btndtId = e.target.dataset.id;
    
    if (btndtId) { // check 'btndtId' existence

        /**
         * 
         * remove active from other buttons
         * 
         */
        btns.forEach(function(btn) {

            btn.classList.remove('active');
            e.target.classList.add('active');

        });

        /**
         * 
         * hide other articles
         * 
         */
        contents.forEach(function(content) {

            content.classList.remove('active');
            //console.log(content.classList);

        });

        const obtainId = document.getElementById(btndtId);
        
        obtainId.classList.add('active');

    }

});