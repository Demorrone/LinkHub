document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#btn-theme')
    if (!btn) return
    btn.addEventListener('click', () => {
        // don't include the dot when toggling a class
        btn.classList.toggle('dark-theme')
    })
})