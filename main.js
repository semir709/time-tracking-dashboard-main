

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

const role = document.querySelectorAll('.role p');
const hours = document.querySelectorAll('.role-info h2');
const last_week = document.querySelectorAll('.role-info p');

selected = 'weekly';

function getData() {

    fetch("./data.json")
    .then(response => {
    return response.json();
    })
    .then(jsondata => {

        for(let i = 0; i < jsondata.length; i++) {
            role[i].innerHTML = jsondata[i].title;

            if(selected == 'weekly') {

                hours[i].innerHTML = jsondata[i].timeframes.weekly.current + 'hrs';
                last_week[i].innerHTML = 'Last Week - ' + jsondata[i].timeframes.weekly.previous + 'hrs';

            } else if(selected == 'daily') {

                hours[i].innerHTML = jsondata[i].timeframes.daily.current + 'hrs';
                last_week[i].innerHTML = 'Last Week - ' + jsondata[i].timeframes.daily.previous + 'hrs';

            } else if (selected == 'monthly') {

                hours[i].innerHTML = jsondata[i].timeframes.monthly.current + 'hrs';
                last_week[i].innerHTML = 'Last Week - ' + jsondata[i].timeframes.monthly.previous + 'hrs';

            } else {

                role[i].innerHTML = 'nodata';
                hours[i].innerHTML = 'nodata';
                last_week[i].innerHTML = 'nodata';

            }
            
        }
        
    
    });

}


const list = document.querySelectorAll('.options ul li');

list.forEach(el => {

    el.addEventListener('click', (e) => {

        list.forEach(el => {el.classList.remove('active')});

        e.target.classList.add('active');

        selected = e.target.innerHTML.toLowerCase();

        getData();

    });

});

