$(() => {

    showView('viewWelcome');

    (() => {
        $(document).find('a[data-target]').click(navigateTo);
        $('#btnRegister').click(registerUser);

    })();

    function showView(viewName) {
        $('.content > section').hide();
        $('#' + viewName).show();

        if (auth.isAuth()) {
            $('#profile').find('span').val(registerUsername);
            $('#profile').show();
            $('#menu').show();
        } else {
            $('#profile').hide();
            $('#menu').hide();
        }
    }

    function navigateTo() {
        let viewName = $(this).attr('data-target');
        showView(viewName);
    }

    function registerUser(ev) {
        ev.preventDefault();
        let registerUsername = $("#registerForm").find('input[name=username]').val();
        let registerPassword = $("#registerForm").find("input[name=password]").val();
        let repeatPassword = $("#registerForm").find("input[name=repeatPass]").val();
        //let regex1 = /[A-Za-z]+/;
        //let uTest = regex1.test(registerUsername);
        //let validUsername = (registerUsername.length > 3) && (uTest);
        //let regex2 = /[A-Za-z0-9]+/;
        //let pTest = regex2.test(registerPassword);
        //let validPassword = (registerPassword.length > 6) && (pTest) && (registerPassword === repeatPassword);

       // if (validUsername && validPassword) {
            auth.register(registerUsername, registerPassword, repeatPassword)
                .then((userInfo) => {
                    console.log(userInfo);
                    saveSession(userInfo);

                    $("#registerForm").find('input[name=username]').val('');
                    $("#registerForm").find("input[name=password]").val('');
                    $("#registerForm").find("input[name=repeatPass]").val('');
                    showInfoBox('Registration successful!');
                    showView('profile');
                    showView('menu');
                    $('#profile').find('span').val(registerUsername);
                })
                .catch();
       /* } else {
            $('#errorBox').text('Error!');
            $('#errorBox').show();
            setTimeout(() => $("#errorBox").fadeOut(), 3000);
        }*/


    }

    /*function logoutUser() {
        auth.logout()
            .then(() => {
                sessionStorage.clear();
                userLoggedOut();
                showInfo('Logout successful.');
            }).catch(() => {
            console.log('Error');
        })
    }*/

    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', userInfo['password']);
    }

    function showInfoBox(messageBox) {
        let infoBox = $("#infoBox");
        infoBox.text(messageBox);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showErrorBox(messageBox) {
        let errorBox = $('#errorBox');
        errorBox.text(messageBox);
        errorBox.show();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }
    
    $(document).on({
        ajaxStart: () => $("#loadingBox").show(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    });

});