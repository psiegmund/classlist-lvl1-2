let headline = document.getElementById('headline');
let list = document.getElementById('list');

function changeHeadline() {
    console.log('works')
    headline.classList.add('dark')
}

function resetHeadline() {
    console.log('reset');
    headline.classList.remove('dark')
}