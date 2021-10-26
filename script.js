const btn = document.getElementById('button')
const toasts = document.getElementById('toasts')

btn.addEventListener('click', ()=> createNotification())

function createNotification(){
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.innerHTML='This is a message'
    const button = document.createElement('button')
    button.innerHTML='x'
    notif.appendChild(button)
    toasts.appendChild(notif)
    button.addEventListener('click', ()=> notif.remove())
}
