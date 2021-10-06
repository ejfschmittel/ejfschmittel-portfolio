

export const smoothScrollTo = (id) => {
    const element = document.getElementById(id)
    window.scroll({
        behavior: "smooth",
        left: 0,
        top: Element.offestTop
    })
}