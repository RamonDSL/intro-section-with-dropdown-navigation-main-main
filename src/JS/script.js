const btnMenu = document.querySelector(".btn-menu")
const subMenus = document.querySelectorAll(".sub-menu>a")

let menuOn = false

const handleMenuClick = event => {
    if (event.type === "touchstart") return
    
    !menuOn ? verifyScreenWidth() : forceToCloseAllElements()

    alternateElementImage(btnMenu.firstElementChild, "./images/icon-menu.svg", "./images/icon-close-menu.svg")
    menuOn = !menuOn
}

const alternateElementImage = (element, imageDefault, imageAlternative) => {
    const comparativeParameter = imageDefault.substring(1, )
    const newImageSRC = element.src.includes(comparativeParameter) ? imageAlternative : imageDefault
    element.src = newImageSRC
}

const verifyScreenWidth = () => {
    const screenWidth = screen.width

    screenWidth < 600 ?
        switchElementsStates(document.querySelector(".sect-navbar")) :
        switchElementsStates(document.querySelector(".into-sistem"))
}

const switchElementsStates = field => field.classList.toggle("active")

const forceToCloseAllElements = () => {
    const activeElements = document.querySelectorAll(".active")

    activeElements.forEach(element => element.parentNode.classList.contains("sub-menu") ?
        handleSubMenuClick(element.previousElementSibling) :
        switchElementsStates(element))
}

const handleSubMenuClick = subMenu => {
    const arrowImage = subMenu.children[0]
    const sectSubNavbar = subMenu.parentNode.querySelector(".sect-sub-navbar")

    switchElementsStates(sectSubNavbar)
    raiseLowerArrowImage(arrowImage)
    changeNavigationWithTabToSubMenu(subMenu)
}

const raiseLowerArrowImage = arrow => {
    alternateElementImage(arrow, "./images/icon-arrow-down.svg", "./images/icon-arrow-up.svg")
}

const changeNavigationWithTabToSubMenu = subMenu => {
    const elementsWithTabIndex = subMenu.parentNode.querySelectorAll("[tabindex]")
    const newTabIndexValue = elementsWithTabIndex[0].getAttribute("tabIndex") == -1 ? 0 : -1

    elementsWithTabIndex.forEach(element => element.setAttribute("tabindex", newTabIndexValue))
}

btnMenu.addEventListener("click", handleMenuClick)
btnMenu.addEventListener("touchstart", handleMenuClick)
subMenus.forEach(subMenu => subMenu.addEventListener("click", e => handleSubMenuClick(e.currentTarget)))