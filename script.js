const image = document.querySelector("#image");
    const textLyrics = document.querySelector("#textLyrics");
    const repeat = document.querySelector("#repeat");
    const container = document.querySelector("#container");
    const text = document.querySelector("p");
    const generate = document.querySelector("#generate");
    const body = document.querySelector("body");
    const label = document.querySelector("#label");
    const backBTN = document.getElementById("backBTN");
    const Title = document.getElementById("MyTitle");
    let newImage;
    document;

    $(".custom-file-input").on("change", function () {
      var fileName = $(this).val().split("\\").pop();
      $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });

    body.onload = function () {
      Swal.fire({
        title: 'Tips !',
        text: 'You can use any lyrics of a song as your text.',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/528/528098.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }



    image.addEventListener("change", () => {
      image.files[0];
      var reader = new FileReader();
      reader.onloadend = function () {
        newImage = reader.result;
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {

      }
    });

    generate.addEventListener("click", () => {

      let url = URL.createObjectURL(image.files[0]);
      container.style.display = "none";
      backBTN.classList.remove('invisible');
      backBTN.classList.add('visible');
      Title.remove();


      body.style.background = "rgb(0, 3, 17)";
      body.style.overflow = "hidden";
      body.style.fontFamily = "Segoe UI, sans-serif";
      text.style.lineHeight = "10px";
      text.style.background = `url(${url})`;
      text.style.webkitBackgroundClip = "text";
      text.style.webkitTextFillColor = "rgba(255, 255, 255, 0)";

      text.style.backgroundAttachment = "fixed";
      text.style.backgroundRepeat = "no-repeat";
      text.style.backgroundSize = "contain";
      text.style.backgroundPosition = "center";
      text.innerHTML = textLyrics.value.repeat(repeat.value);

    });