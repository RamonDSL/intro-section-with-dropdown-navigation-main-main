const btn = document.querySelector(".btn-menu")
const navbar = document.querySelector(".navbar")
const tela = document.querySelector(".tela")
const features = document.querySelector(".features")
const company = document.querySelector(".company")

function handleButtonClick(event) {
    if (event.type === "touchstart") event.preventDefault()
    event.stopPropagation()

    function openMenu() {
        if (!navbar.classList.contains('active') && btn.contains(event.target)) {
            tela.classList.add('active')
            navbar.classList.add('active')
            btn.firstChild.src = "./images/icon-close-menu.svg"
        } else {
            tela.classList.remove('active')
            navbar.classList.remove('active')
            btn.firstChild.src = "./images/icon-menu.svg"
        }
    }
    openMenu()
    handleClickOutside(navbar, () => {
        openMenu()
        handleFeaturesClick(event)
        handleCompanyClick(event)
    })
}

function handleClickOutside(targetElement, callback) {
    const html = document.documentElement

    function handleHTMLClick(event) {
        if (!targetElement.contains(event.target)) {
            html.removeEventListener('click', handleHTMLClick)
            html.removeEventListener('touchstart', handleHTMLClick)
            targetElement.removeAttribute("data-target")
            callback()
        }
    }

    if (!targetElement.hasAttribute('data-target')) {
        html.addEventListener('click', handleHTMLClick)
        html.addEventListener('touchstart', handleHTMLClick)
        targetElement.setAttribute('data-target', "")
    }
}

function handleFeaturesClick(event) {
    const menu_features = features.parentNode.querySelector(".menu-features")
    if (!menu_features.classList.contains("active") && features.contains(event.target)) {
        menu_features.classList.add("active")
        features.lastChild.src = "./images/icon-arrow-up.svg"
    } else {
        menu_features.classList.remove("active")
        features.lastChild.src = "./images/icon-arrow-down.svg"
    }
    
}

function handleCompanyClick(event) {
    const menu_company = company.parentNode.querySelector(".menu-company")
    if (!menu_company.classList.contains("active") && company.contains(event.target)) {
        menu_company.classList.add("active")
        company.lastChild.src = "./images/icon-arrow-up.svg"
    } else {
        menu_company.classList.remove("active")
        company.lastChild.src = "./images/icon-arrow-down.svg"
    }
    
}

btn.addEventListener('click', handleButtonClick)
btn.addEventListener('touchstart', handleButtonClick)
features.addEventListener('click', handleFeaturesClick)
company.addEventListener('click', handleCompanyClick)