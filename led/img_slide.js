var slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
    var thumbnails = document.getElementsByClassName("thumbnails")[0].getElementsByTagName("img");

    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0"; /* 이미지를 숨김 */
        slides[i].style.display = "none"; /* 이미지를 감춤 */
    }

    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].className = "";
    }

    slides[slideIndex - 1].style.display = "block"; /* 선택된 이미지를 표시 */
    setTimeout(function() {
        slides[slideIndex - 1].style.opacity = "1"; /* 이미지 페이드 효과를 위해 opacity를 1로 설정하여 부드럽게 나타나도록 함 */
    }, 100);
    thumbnails[slideIndex - 1].className = "active";
}