function sortArr() {
    let sort = document.querySelectorAll(".hp-seo-list__link"),
        arr = []


    for (let i = 0; i < sort.length; i++) {
        if (sort[i].innerHTML !== 'lorem') {
            arr.push(sort[i].innerHTML)
        }
    }
    arr.sort()
    for (let i = 0; i < sort.length; i++) {
        if (sort[i].innerHTML !== 'lorem') {
            sort[i].innerHTML = arr[i]
        }
    }
}


