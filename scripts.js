function loadContent(page) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', page, true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            document.getElementById('content').innerHTML = xhr.responseText;
        } else {
            console.error('Error loading content');
        }
    };
    xhr.send();
}

// Load default content on page load
document.addEventListener('DOMContentLoaded', function() {
    loadContent('nosotros.jsp'); // Default page  <!--Este no es el index-->
});