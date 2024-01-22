
let logonav = document.querySelector("#c");
let mobile = document.querySelector("#m");

let cnt=true;
    logonav.addEventListener('click', function() {
        cnt=!cnt;
        if (cnt) {
            mobile.style.display = 'flex';
        } else {
            mobile.style.display = 'none';
        }
    });

// logonav.style.display='none'
mobile.style.display='none'



