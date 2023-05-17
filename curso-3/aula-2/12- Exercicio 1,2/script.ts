interface UserData {
    nome?: string;
    email?: string;
    cpf?: string;
}

interface Window {
    UserData: any
}

window.UserData = {}



function handleInput({ target }: KeyboardEvent) {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value
        localStorage.setItem('UserData', JSON.stringify(window.UserData))
    }
}

const form = document.querySelector<HTMLElement>('#form')

form?.addEventListener('keyup', handleInput)