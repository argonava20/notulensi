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
    '03122005',
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
    '23122004'
]
function goToFolder(folderName) {
    // Get the current URL.
    var currentUrl = window.location.href;
  
    // Replace the current URL with the URL of the new folder.
    var newUrl = currentUrl.replace('/index.html', "/" + folderName);
  
    // Redirect the user to the new URL.
    window.location.href = newUrl;
  }

const sasa = () => {
    const text = document.getElementById('text').value;
    if (code.indexOf(text) != -1){
        window.location.href = 'https://docs.google.com/document/d/1CYOHavYNlW_39h1Ar52YqEwJsAhmAD8NcUwNaM1PscU/edit?usp=sharing'
    } else {
        document.getElementById('test').innerHTML = 'awas ada penyusup 🤯'
        setTimeout(() => {
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs'
        }, 500)
    }
}
document.getElementById('text').addEventListener('keydown', () => {
    if (event.key == 'Enter') {
        sasa()
    }
})
