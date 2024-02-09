const answers = [
    "Pullaiya neeee NO solra eruma maadu!",
    "Avlo kolupagirucha",
    
    "Enaya maari nalla paiyan kedika maataan!",
    "I am not wrong scientifically!",
    "Nalla yosichiko?",
    "kal nenjakkaari...!!",
    "Meendum meendum wrong button ah press panra",
    
    "Ipdi panrathu konjam kuda nalla ila paathuko!",
    "NO sonna mudi kottum!",
    "En thanga petharu la YES solunga",
    "Pacha button laam kanukke theriyatha unaku!",
    "I am begging you to stop!",
    "Aprm vanthu love panren",
    "Tataaa.."
]

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 0;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "./sad 4.gif";
        refreshBanner();

    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers.length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers[i];
        i++;
    } else if (i === total - 1) {
        alert(answers[i]);
        i = 0;
        no_button.innerHTML = "No";
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    document.querySelector(".heading").style.display = "none";
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "./peach-and-goma-love-lift-up.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}
