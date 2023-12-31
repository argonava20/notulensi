const input = document.getElementById('test');
const code = [
    '11112003',
    '06032005',
    '16072005',
    '05022005',
    '04022005',
    '25092005',
    '20032005',
    '02062005',
    '01072005',
    '23032005',
    '03062003',
    '23092005',
    '03122003',
    '13042004',
    '15052005',
    '14102004',
    '02062005',
    '05012005',
    '11032004',
    '04122004',
    '13112003',
    '02032005',
    '22022005',
    '03032005',
    '24022005',
    '30032007',
    '30102004',
    '14032005',
    '14102004',
    '16072005',
    '04042004',
    '17302005',
    '30052004',
    '16062002',
    '24122005',
    '09022004',
    '23122004',
    '02032005',
    '19082005',
    '24092005',
    '27012006',
    '08122004',
    '05092004',
    '24092005',
    '27012006',
    '20052005',
    '23062006',
    '18022005',
    '02032005'
]
const access = {
    '20232024': 'https://www.youtube.com',
    'avanogra': 'https://forms.gle/Mex2diHEXe8tivz6A'
}

const muzz = {
    'theadams': 'kons.mp3'
}

function openNewTab(url) {
    setTimeout(() => {
        window.open(url, '_blank');
    }, 1000)
  }

const tot = [...Object.keys(access), ...Object.keys(muzz), ...code];
const text = document.getElementById('text');

function playAudio(file) {
    const audio = new Audio(file);
    audio.loop = true;
    audio.play();
  }
const checkCode = (a, b) => {
    if (a.indexOf(b) != -1) {
        return true;
    }
    return false;
}
const load = () => {
    if (checkCode(tot, text.value)) {
        document.getElementById('test').style.color = 'green'
    } else {
        document.getElementById('test').style.color = 'red'
    }
    setTimeout(() => {
        document.getElementById('test').innerHTML = ''
    }, 10000);
}
const redirect = () => {
    if (checkCode(code, text.value)) {
        document.getElementById('test').innerHTML = 'welcome, argonava 20!'
        openNewTab('https://docs.google.com/document/d/1CYOHavYNlW_39h1Ar52YqEwJsAhmAD8NcUwNaM1PscU/edit?usp=sharing')
    } if(checkCode(Object.keys(access), text.value)){
        openNewTab(access[text.value])
        document.getElementById('test').innerHTML = 'code detected, opening tab...'
    } if (checkCode(Object.keys(muzz), text.value)){
        playAudio(muzz[text.value])
        document.getElementById('test').innerHTML = 'enjoy!'
    } if(checkCode(tot, text.value) == false){
        document.getElementById('test').innerHTML = 'code not found'
    }
}

const process = () => {
    load()
    redirect()
}
    document.getElementById('text').addEventListener('keydown', () => {
        if (event.key == 'Enter') {
            process()
        }
    })
text.addEventListener('input', () => {
    if(text.value.length >= 8){
        process()
    }
})
setInterval(() => {
    document.getElementById('text').focus()
}, 4)
document.addEventListener('mousemove', (e) => {
    let pos = [e.pageX, e.pageY];
    document.getElementById('wiwi').style.display = 'block'
    document.getElementById('wiwi').style.left = 'calc('+ pos[0] + 'px - 0.3rem)' ;
    document.getElementById('wiwi').style.top = 'calc('+ pos[1] + 'px - 0.3rem)';
})
document.addEventListener('mouseout', (e) => {
    document.getElementById('wiwi').style.display = 'none'
})