async function loadComponent(id, file) {

    const response = await fetch(file);

    const html = await response.text();

    document.getElementById(id).innerHTML = html;
}

loadComponent("header-component", "/components/header.html");
loadComponent("nav-component", "/components/nav.html");
loadComponent("footer-component", "/components/footer.html");