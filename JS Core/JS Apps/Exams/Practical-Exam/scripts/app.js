$(() => {
    showView('welcome-section');

    (() => {
        $('#container').find('a[data-target]').click(navigateTo);
        $("#registerBtn").click(registerUser);
        $("#loginBtn").click(loginUser);
        $('.logout').click(logoutUser);
        $("#editor").click(() => {
            showView("create-receipt-view");
            makeEmptyRequest();
        });
        $("#addItemBtn").click(addItem);
        $("#checkoutBtn").click(checkOut);
    })();

    function checkOut(ev) {
        ev.preventDefault();
    }

    //Display current active receipt
    function makeEmptyRequest() {
        let data = {
            active: true
        };

        requester.post("appdata", "receipts", "kinvey", data)
            .then(displayCurrentReceipt)
            .catch(handleError);
    }

    function displayCurrentReceipt() {
        $("#active-entries").empty();
        $('#create-receipt-form').children('div').eq(3).text('0.00');

        let endpoint = `receipts?query={"_acl.creator":"${sessionStorage.getItem('userId')}","active":"true"}`;

        requester.get('appdata', endpoint, 'kinvey')
            .then(getFirstReceipt)
            .catch(handleError);
    }
    
    function getFirstReceipt(receipt) {
        //console.log(receipt[0]);
        let endpoint = `entries?query={"receiptId":"${receipt[0]._id}"}`;
        requester.get('appdata', endpoint, 'kinvey')
            .then((entries) => {
                listProducts(entries, receipt[0]);
            })
            .catch(handleError);
    }

    function listProducts(entries, receipt) {
        for (let entry of entries) {
            let row = $(`<div class="row"></div>`);
            let delBtn = $(`<a href="#" data-atr="${entry._id}">&#10006;</a>`).click(delEntry);
            row.append($(`<div class="col wide">${entry.type}</div>`))
                .append($(`<div class="col wide">${entry.qty}</div>`))
                .append($(`<div class="col wide">${entry.price}</div>`))
                .append($(`<div class="col">${(Number(entry.qty) * Number(entry.price)).toFixed(2)}</div>`))
                .append($(`<div class="col right"></div>`).append(delBtn));

            $(`#active-entries`).append(row);
        }
    }

    function addItem(ev) {
        ev.preventDefault();
        let productName = $("input[name=type]").val();
        let quantity = $("input[name=qty]").val();
        let pricePerUnit = $("input[name=price]").val();

        receiptService.addEntry(productName, quantity, pricePerUnit)
            .catch(() => {
                let row = $(`<div class="row"></div>`);
                let delBtn = $(`<a href="#" data-atr="">&#10006;</a>`).click(delEntry);
                row.append($(`<div class="col wide">${productName}</div>`))
                    .append($(`<div class="col wide">${quantity}</div>`))
                    .append($(`<div class="col wide">${pricePerUnit}</div>`))
                    .append($(`<div class="col">${(Number(quantity) * Number(pricePerUnit)).toFixed(2)}</div>`))
                    .append($(`<div class="col right"></div>`).append(delBtn));

                $(`#active-entries`).append(row);

                $("input[name=type]").val('');
                $("input[name=qty]").val('');
                $("input[name=price]").val('');
            })
            .catch(handleError);
    }

    function delEntry() {
        receiptService.deleteEntry(this._id);
    }

    //Logout User
    function logoutUser() {
        auth.logout()
            .then(() => {
                sessionStorage.clear();
                showNav();
                showInfoMessage('Logout successful.');
                showView('welcome-section');
            }).catch(handleError);
    }

    //Login User
    function loginUser(ev) {
        ev.preventDefault();

        let username = $("#username-login").val();
        let password = $("#password-login").val();
        console.log(username);
        console.log(password);

        let usernameIsValid = username.length >= 5;
        let passwordIsValid = (password.length > 0);

        if (passwordIsValid && usernameIsValid) {
            auth.login(username, password)
                .then((userInfo) => {
                    saveSession(userInfo);
                    $("#username-login").val('');
                    $("#password-login").val('');
                    showNav();
                    $("#cashier a").text(sessionStorage.getItem('username'));
                    showInfoMessage('Login successful');
                }).catch(handleError);
        } else {
            showErrorMessage('Error!');
        }
    }

    //Registration
    function registerUser(ev) {
        ev.preventDefault();
        let registerUsername = $("#username-register").val();
        let registerPassword = $("#password-register").val();
        let registerRepeatPassword = $("#password-register-check").val();

        /*console.log(registerUsername);
        console.log(registerPassword);
        console.log(registerRepeatPassword);*/

        let usernameIsValid = registerUsername.length >= 5;
        let passwordIsValid = (registerPassword.length > 0) && (registerPassword === registerRepeatPassword);

        if (usernameIsValid && passwordIsValid) {
            auth.register(registerUsername, registerPassword)
                .then((userInfo) => {
                    saveSession(userInfo);
                    $("#username-register").val("");
                    $("#password-register").val("");
                    $("#password-register-check").val("");
                    showNav();
                    $('#welcome-section').hide();
                    $("#cashier a").text(sessionStorage.getItem('username'));
                    showInfoMessage('User registration successful.');
                })
                .catch(handleError);
        } else {
            showErrorMessage('Try again.');
        }
    }

    function showView(viewName) {
        $('section').hide();
        console.log(viewName);
        $('#' + viewName).show();

        showNav();
    }

    //Navigation
    function navigateTo() {
        let viewName = $(this).attr('data-target');
        showView(viewName);
    }

    function showNav() {
        if (sessionStorage.getItem('authtoken') === null) {
            $('#welcome-section').show();
            $('header').hide();
        } else {
            $('#welcome-section').hide();
            $('header').show();
        }
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
    }

    function showInfoMessage(messageBox) {
        let infoBox = $("#infoBox span");
        infoBox.text(messageBox);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showErrorMessage(errMessage) {
        let errorBox = $("#errorBox span");
        errorBox.text(errMessage);
        errorBox.show();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }

    function handleError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0) {
            errorMsg = 'Cannot connect due to network error.';
        }
        if (response.responseJSON && response.responseJSON.description) {
            errorMsg = response.responseJSON.description;
        }
        showErrorMessage(errorMsg);
    }

    $(document).on({
        ajaxStart: () => $("#loadingBox").show(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    });

});