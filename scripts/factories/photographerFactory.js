function photographerFactory(data) {
    const { name, portrait } = data;

    const picture = `/assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const a = document.createElement( 'a' );
        a.setAttribute("href", `/photographer.html?${name}`);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        a.style.textDecoration = 'none';
        return (article);
    }
    return { name, picture, getUserCardDOM };
}