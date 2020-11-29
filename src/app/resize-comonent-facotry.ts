export function resizeComponent(topSectionclassName, bottomSectionclassName) {
    const height = window.innerHeight;
    let bottomSectionHeight = 0;
    if (topSectionclassName && bottomSectionclassName) {
        bottomSectionHeight = document.querySelector<HTMLElement>('.' + bottomSectionclassName).offsetHeight;
        document.querySelector<HTMLElement>('.' + topSectionclassName).style.height = (height - bottomSectionHeight) + 'px';
    }
}
