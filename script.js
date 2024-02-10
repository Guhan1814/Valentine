const answers = [
    "Pullaiya neeee NO solra eruma maadu!(14)",
    "Avlo kolupagirucha(13)",
    "Enaya maari nalla paiyan kedika maataan(12)!",
    "I am not wrong scientifically!(11)",
    "Nalla yosichiko?(10)",
    "kal nenjakkaari...!!(9)",
    "Meendum meendum wrong button ah press panra(8)",
    "Ipdi panrathu konjam kuda nalla ila paathuko!(7)",
    "NO sonna mudi kottum!(6)",
    "En thanga petharu la YES solunga(5)",
    "Pacha button laam kanukke theriyatha unaku!(4)",
    "I am begging you to stop!(3)",
    "Aprm vanthu love panren(2)",
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
