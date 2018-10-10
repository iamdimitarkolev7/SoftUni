$(() => {
    
    (() => {
        $('.menu').find('a[data-target]').click(navigateTo);
        $("#btnRegister").click(registerUser);
        $("#btnLogout").click(logoutUser);
        $("#loginBtn").click(loginUser);
        $("#homeScreen").click(() => {
            showView('viewFeed');
            developHomeScreen();
        })
    })();

    if (sessionStorage.getItem('authtoken') === null) {
        userLoggedOut();
    } else {
        userLoggedIn();
    }

    //Home screen development
    function developHomeScreen() {
        console.log(sessionStorage.getItem('subscriptions'));
        /*chirperService.loadChirps()
            .then((chipers) => {
                console.log(chipers);
                listChirps(chipers);
            })
            .catch(handleError);
    }
    
    function listChirps(chipers) {
        /*$("#chirps").empty();
        let heading = $(`<h2 class="titlebars">Chirps</h2>`);
        $("#chirps").append(heading);

        for (let chiper of chipers) {
            let chripAuthor = chiper.author;
            let time = chiper._kmd.ect;
            let text = chiper.text;
        }*/

    }

    //LOGOUT USER
    function logoutUser() {
        auth.logout()
            .then(() => {
                sessionStorage.clear();
                userLoggedOut();
                showInfoMessage('Logout successful.');
            }).catch(() => {
            console.log('Error');
        });
    }

    //LOGIN USER
    function loginUser(ev) {
        ev.preventDefault();

        let username = $("#formRegister").find("input[name=username]").val();
        let password = $("#formRegister").find("input[name=password]").val();
        let repeatPassword = $("#formRegister").find("input[name=repeatPass]").val();

        let usernameIsValid = username.length >= 5;
        let passwordIsValid = (password.length > 0) && (password === repeatPassword);

        if (usernameIsValid && passwordIsValid) {
            auth.login(username, password)
                .then((userInfo) => {
                    saveSession(userInfo);
                    $("#formRegister").find("input[name=username]").val('');
                    $("#formRegister").find("input[name=password]").val('');
                    $("#formRegister").find("input[name=repeatPass]").val('');
                    //userLoggedIn();
                    showInfoMessage('Login successful');
                }).catch(handleError);
        } else {
            showErrorMessage('Try again.');
        }
    }

    //Registration
    function registerUser(ev) {
        ev.preventDefault();
        let registerUsername = $("#formRegister").find("input[name=username]").val();
        let registerPassword = $("#formRegister").find("input[name=password]").val();
        let registerRepeatPassword = $("#formRegister").find("input[name=repeatPass]").val();

        let usernameIsValid = registerUsername.length >= 5;
        let passwordIsValid = (registerPassword.length > 0) && (registerPassword === registerRepeatPassword);

        if (usernameIsValid && passwordIsValid) {
            auth.register(registerUsername, registerPassword)
                .then((userInfo) => {
                    saveSession(userInfo);
                    $("#formRegister").find("input[name=username]").val('');
                    $("#formRegister").find("input[name=password]").val('');
                    $("#formRegister").find("input[name=repeatPass]").val('');
                    userLoggedIn();
                    showInfoMessage('User registration successful.');
                })
                .catch(handleError);
        } else {
            showErrorMessage('Try again.');
        }
    }

    function showInfoMessage(messageBox) {
        let infoBox = $("#infoBox");
        infoBox.text(messageBox);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showErrorMessage(errMessage) {
        let errorBox = $("#errorBox");
        errorBox.text(errMessage);
        errorBox.show();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }

    function handleError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0) {
            errorMsg = 'Cannot connect due to netwrk error.';
        }
        if (response.responseJSON && response.responseJSON.description) {
            errorMsg = response.responseJSON.description;
        }
        showErrorMessage(errorMsg);
    }

    function saveSession(userInfo) {
        //console.log(userInfo);
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        let password = userInfo['password'];
        sessionStorage.setItem('password', password);
        let subs = userInfo['subscriptions'];
        sessionStorage.setItem('subscriptions', subs);
        userLoggedIn();
    }

    function userLoggedIn() {
        $('.menu').show();
        //let username = sessionStorage.getItem('username');
        //$("#viewFeed").find("h2[class=titlebar]").val(username);
        $('div[id=main] > section').hide();

    }

    function userLoggedOut() {
        $('.menu').hide();
        showView('viewRegister');
    }
    
    function showView(viewName) {
        $('div[id=main] > section').hide();
        $('#' + viewName).show();
    }

    function navigateTo() {
        let viewName = $(this).attr('data-target');
        showView(viewName);
    }

    //Auxiliary function
    function calcTime(dateIsoFormat) {
        let diff = new Date - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1) return 'less than a minute';
        if (diff < 60) return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);
        function pluralize(value) {
            if (value !== 1) return 's';
            else return '';
        }
    }

    $(document).on({
        ajaxStart: () => $("#loadingBox").show(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    });

});