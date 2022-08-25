

const btn_dots = document.querySelectorAll('.btn-dots');


// When  btn_dots were hover

btn_dots.forEach(el => {

    el.addEventListener('mouseover', (e) => {
    
        e.target.style.filter = ' brightness(0) invert(1)';

        const parent = e.target.closest('.card-info');
        const p_child = parent.children[1].children[1];

        parent.style.background = 'hsl(235, 46%, 20%)';
        p_child.style.color = 'hsl(235, 45%, 61%)';
    
    });

    el.addEventListener('mouseout', (e) => {

        e.target.style.filter = 'none';

        const parent = e.target.closest('.card-info');
        const p_child = parent.children[1].children[1];

        parent.style.background = null;
        p_child.style.color = null;
    
    });
    
});
