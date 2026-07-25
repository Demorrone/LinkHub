document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#btn-theme')
    if (!btn) return

    btn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme')
    })
})