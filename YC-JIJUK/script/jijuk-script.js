function loadImages()
{
    const urlParams = new URLSearchParams(window.location.search);
    let code = decodeURIComponent(urlParams.get('code') || '');

    if (!code)
    {
        document.getElementById("Table2").innerHTML = "<h3>잘못된 접근입니다.</h3>";
        return;
    }

    // URL 디코딩 적용
    code = decodeURIComponent(code);

    const imageContainer = document.getElementById("Table2").querySelector(".td2");
    imageContainer.innerHTML = `
        <div class="div-left"><span class="bold blue">⊙ 지상경계점등록부</span></div>
        <hr class="hr-left"><br>
    `;

    let foundImages = false; // 이미지가 하나라도 있으면 true
    let totalImages = 10;   // 최대 이미지 개수
    let imageLoadCount = 0;  // 정상적으로 로드된 이미지 개수

    for (let i = 1; i <= totalImages; i++)
    {
        let img = document.createElement("img");
        let encodedCode = encodeURIComponent(code); // URL 인코딩
        // let imgUrl = `http://www.dggis.kr/Youngcheon/QR/BuganYusang06310001/IMG_Land/${encodedCode}_${i.toString().padStart(2, '0')}.jpg`;
        let imgUrl = `https://smbahk.github.io/dggis/YC-JIJUK/jijuk-img/${encodedCode}_${i.toString().padStart(2, '0')}.jpg`;
        img.src = imgUrl;
        img.className = "img-responsive";
        img.alt = `지상경계점등록부 이미지 ${i}`;
        
        let imgLink = document.createElement("a");
        imgLink.href = imgUrl;
        imgLink.target = "_blank";
        imgLink.rel = "noopener";
        imgLink.appendChild(img);

        let divContainer = document.createElement("div");
        divContainer.className = "div-center";

        img.onload = function ()
        {
            img.style.display = "block"; // 이미지가 정상적으로 로딩되면 표시
            divContainer.appendChild(imgLink);
            imageContainer.appendChild(divContainer);
            imageContainer.appendChild(document.createElement("br"));

            // 마지막 이미지가 아닐 경우에만 <hr> 추가
            imageLoadCount++;
            if (imageLoadCount < totalImages)
            {
                imageContainer.appendChild(document.createElement("hr"));
            }
            
            foundImages = true;
            
        };

        img.onerror = function ()
        {
            // 이미지가 없으면 div 추가 안함.
            imgLink.remove();
            divContainer.remove();
        };

        foundImages = true;
    }

    if (!foundImages)
    {
        imageContainer.innerHTML += "<p style='text-align:center; color:red;'>이미지를 찾을 수 없습니다.</p>";
    }
}

window.onload = loadImages;