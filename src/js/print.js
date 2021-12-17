const checkType = item => {
    switch(item.type) {
        case 'img':
            return `<img src=${item.src} alt="picture">`
        case 'sound':
            return `<audio src=${item.src} controls></audio>`
        case 'video':
            return `<video src=${item.src} class="video" controls></video>`
        default:
            break;
    }
}

const renderCards = item => {
    return `<div class="card">
                <div class="card__type">
                    ${checkType(item)}
                </div>
                <h3 class="card__title">${item.title}</h3>
            </div>`;
};

export const renderPage = list => {
    document.querySelector('.gallery__cards').innerHTML = list.map(item =>
        renderCards(item)).join('');
}