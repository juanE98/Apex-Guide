/*
    read more / read less for content paragraphs

    adapted from https://www.youtube.com/watch?v=4Pf6l0axYGg
*/
const readMore = document.querySelector('.content');

readMore.addEventListener('click', event => {
    const current = event.target;
    const isReadMoreBtn = current.className.includes('read-more-btn');

    if (isReadMoreBtn) {
        const currentText = event.target.parentNode.querySelector('.read-more-text');
        currentText.classList.toggle('read-more-text--show');
        current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";
    }
    return;
});