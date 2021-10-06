

export const smoothScrollTo = (id) => {
    const element = document.getElementById(id)
    console.log(id)
    console.log(element)
    window.scroll({
        behavior: "smooth",
        left: 0,
        top: element.getBoundingClientRect().top +  window.scrollY
    })
}