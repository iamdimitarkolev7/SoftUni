function attachEvents() {
    const URL = "https://baas.kinvey.com/appdata/kid_H1_biIt9M";
    const USERNAME = "Peter";
    const PASSWORD = "p";
    const BASE_64 = btoa(USERNAME + ":" + PASSWORD);
    const AUTH = {
        Authorization: "Basic" + BASE_64
    };
    let posts = {};

    $("#btnLoadPosts").on("click", loadPosts);
    $("#btnViewPost").on("click", loadComments);

    function loadPosts() {
        $.ajax({
            method: "GET",
            url: URL + "/posts",
            headers: AUTH
        }).then(function (res) {
            $("#posts").empty();
            for (let post of res) {
                let option = `<option value="${post._id}" >${post.title}</option>`;
                $("#posts").append(option);
                posts[post._id] = post.body;
            }
        }).catch(function (err) {
            console.log(err);
        });
    }

    function loadComments() {
        let postId = $("#posts").val();
        let postTitle = $("#posts").find("option:selected").text();
        $("#post-title").text(postTitle);
        $("#post-body").text(posts[postId]);
        $.ajax({
            method: "GET",
            url: URL + `/comments/?query={"post_id":"${postId}"}`,
            headers: AUTH
        }).then(function (res) {
            $("#post-comments").empty();
            for (let com of res) {
                let li = $(`<li>${com.text}</li>`);
                $("#post-comments").append(li);
            }
        }).catch(function (err) {
            console.log(err);
        });
    }
}