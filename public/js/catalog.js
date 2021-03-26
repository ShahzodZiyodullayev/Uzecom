let filterName = document.querySelectorAll(".filterName")
let filterBefore = document.querySelectorAll(".filterBefore")

filterName.forEach(item => item.addEventListener("click", () => {
    filterBefore.forEach(e => e.classList.toggle("autoWidth"))
}))

console.log(filterBefore)