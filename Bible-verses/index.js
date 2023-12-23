function mainButton () {
    postAuthour();
    removeTitle();
}
function postAuthour () {
    document.getElementById('main-text').textContent = 'This page is designed by Issac.';
}
function removeTitle () {
    const removeItem = document.getElementById('remove');

    if (removeItem) {
        removeItem.remove();
    }
}
function backToHome () {
    window.location.href = 'index.html';
}