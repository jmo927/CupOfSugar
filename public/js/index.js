
console.log("Page loaded");

const submitPost = $("#submit");
const imageUrl = $("#image-url").val();
const validImg = false;

// if (imageUrl.endsWith(".jpg" || imageUrl.includes(".png"))) {
//     validImg === true;
//     submitPost.removeAttr("disabled");

// } else {
//     validImg === false;
//     $("image-url").css("border-color","red")
// };

const formSubmit = (event) => {
    event.preventDefault();
    console.log("button clicked");

    let newFavor = {
        title: $("#itemname").val().trim(),
        imageURL: $("#image-url").val().trim(),
        body: $("#msg").val()
    }

    $.ajax("/api/newFavor", {
        type: "POST",
        data: newFavor
    }).then(
        function (req, res) {
            // Reload the page to get the updated list
            // location.reload();
            location.assign("/get");
        }
    );

}


$(document).on("click", "#submit", formSubmit);