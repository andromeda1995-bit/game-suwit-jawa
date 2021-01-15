// var ask = true;
// while (ask) {
//     var p = prompt('pilih:  elephant, ant, human');

//     var comp = Math.random();

//     if (comp < 0.34) {
//         comp = 'elephant';
//     } else if (comp >= 0.35 && comp < 0.67) {
//         comp = 'human';
//     } else {
//         comp = 'ant';
//     }

//     var hasil = '';
//     if (p == comp) {
//         hasil = 'SERI!';
//     } else if (p == 'elephant') {
//         hasil = (comp == 'human') ? 'MENANG!' : 'KALAH!';
//     } else if (p == 'human') {
//         hasil = (comp == 'elephant') ? 'KALAH!' : 'MENANG!'; 
//     } else if (p == 'ant') {
//         hasil = (comp == 'human') ? 'KALAH!' : 'MENANG!';
//     } else {
//         hasil = 'Anda memasukkan pilihan yang salah';
//     }

//     alert('Kamu memilih ' + p + ' dan komputer memilih ' + comp + '\nMaka hasilnya : ' + hasil);

//     ask = confirm('lagi?');
// };

// alert('terima kasih sudah bermain');

// pilihan computer

getPilihanComputer = () => {
    const comp = Math.random();

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.35 && comp < 0.67) return 'manusia';
    return 'semut';
};

// hasil

getHasil = (comp, player) => {
    
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'manusia') ? 'MENANG!' : 'KALAH!';
    if (player == 'manusia') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!'; 
    if (player == 'semut') return (comp == 'manusia') ? 'KALAH!' : 'MENANG!';
    
};

// computer random image
putar = () => {
    const imgComputer = document.querySelector('.img-komputer');
    const picture = ['gajah', 'semut', 'manusia'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if (new Date().getTime() - waktuMulai > 1000 ) {
            clearInterval;
            return
        }
        imgComputer.setAttribute('src', 'img/' + picture[i++] + '.png');
        if (i == picture.length) {
            i = 0;
        }
    }, 100);
};

// pilihan
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pComputer = getPilihanComputer();
        const pPlayer = pil.className;
        const hasil = getHasil(pComputer, pPlayer);

        putar();

        setTimeout(function() {
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + pComputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);

        
    });
});

