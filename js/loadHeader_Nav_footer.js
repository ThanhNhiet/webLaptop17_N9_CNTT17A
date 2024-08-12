document.addEventListener("DOMContentLoaded", function() {
    loadHTML('header-placeholder', '/component/header.html');
    loadHTML('nav-placeholder', '/component/nav.html');
    loadHTML('showcart', '/component/cart.html');
    loadHTML('footer-placeholder', '/component/footer.html');
    loadHTML('banner-placeholder', '/component/banner.html');
});

function loadHTML(placeholderId, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const content = doc.body;
            if (content) {
                document.getElementById(placeholderId).innerHTML = content.innerHTML;
            } else {
                console.error(`No content found in ${url}`);
            }
        })
        .catch(error => console.error('Error loading HTML:', error));
}



