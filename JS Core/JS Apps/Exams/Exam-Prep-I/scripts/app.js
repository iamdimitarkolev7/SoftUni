$(() => {

    showView('AppHome');

    (() => {
        $('header').find('a[data-target]').click(navigateTo);
        $('#formRegister').submit(registerUser);
        $('#formLogin').submit(loginUser);
        $('#linkMenuLogout').click(logoutUser);
        $('#formSendMessage').submit(send);
        $('#linkUserHomeMyMessages').click(() => {
            showView('MyMessages');
            loadRecievedMessages();
        });
        $('#linkUserHomeSendMessage').click(() => {
            showView('SendMessage');
            loadAllUsers()
        });
        $('#linkUserHomeArchiveSent').click(() => {
            showView('ArchiveSent');
            loadSentMessages()
        });
        $("#linkMenuMyMessages").click(loadRecievedMessages);
        $("#linkMenuArchiveSent").click(loadSentMessages);
        $('#linkMenuSendMessage').click(loadAllUsers)
    })();

    if (sessionStorage.getItem('authtoken') === null) {
        userLoggedOut();
    } else {
        userLoggedIn();
    }

    //Load ALL USERS
    function loadAllUsers() {
        messageService.loadAllUsers()
            .then((allUsers) => {
                displayUsersInList(allUsers);
            });
    }

    function displayUsersInList(allUsers) {
        let usersContainer = $('#msgRecipientUsername');
        usersContainer.empty();
        for(let user of allUsers) {
            let username = user['username'];
            let fullName = formatSender(user['name'], username);
            if(username !== sessionStorage.getItem('username')){
                usersContainer.append($(`<option value="${username}">${fullName}</option>`))
            }
        }
    }

    function sendMessage(ev) {
        ev.preventDefault();
        let rUsernameInput = $('#msgRecipientUsername');
        let mTextInput = $('#msgText');
        let senderName = sessionStorage.getItem('name');
        let senderUsername = sessionStorage.getItem('username');
        let recipientUsername = rUsernameInput.val();
        let msgText = mTextInput.val();

        messageService.sendMessage(senderUsername, senderName, recipientUsername, msgText)
            .then(() => {
                mTextInput.val('');
                showInfo('Messaged sent.');
                showView('ArchiveSent');
                loadSentMessages();
            }).catch(handleError);
    }

    //Load SENT MESSAGES
    function loadSentMessages() {
        let username = sessionStorage.getItem('username');
        messageService.loadArchiveMessages(username)
            .then((myMessages) => {
                displayArchivedMessages(myMessages);
            }).catch(handleError);
    }

    function displayArchivedMessages(myMessages) {
        let messagesContainer = $('#sentMessages');
        messagesContainer.empty();
        let messagesTable = $('<table>');
        messagesTable.append($('<thead>')
            .append($('<tr>')
                .append('<th>To</th>')
                .append('<th>Message</th>')
                .append('<th>Date Sent</th>')
                .append('<th>Actions</th>')));
        let tableBody = $('<tbody>');

        for(let msg of myMessages) {
            let tableRow = $('<tr>');
            let recipient = msg['recipient_username'];
            let msgText = msg['text'];
            let msgDate = formatDate(msg['_kmd']['lmt']);
            let deleteBtn = $(`<button value="${msg._id}">Delete</button>`)
                .click(deleteMsg);
            tableRow.append($('<td>').text(recipient));
            tableRow.append($('<td>').text(msgText));
            tableRow.append($('<td>').text(msgDate));
            tableRow.append($('<td>').append(deleteBtn));
            tableBody.append(tableRow);
        }

        messagesTable.append(tableBody);
        messagesContainer.append(messagesTable);
    }
    
    function deleteMsg() {
        let messageId = $(this).val();

        messageService.deleteMessage(messageId)
            .then(() => {
                showInfo('Message deleted.');
                loadSentMessages();
            }).catch(handleError);
    }

    //LOAD RECIEVED MESSAGES
    function loadRecievedMessages() {
        let username = sessionStorage.getItem('username');
        messageService.loadMyMessages(username)
            .then((myMessages) => {
                displayAllMesages(myMessages)
            }).catch(handleError);
    }

    function displayAllMesages(myMessages) {
        let messagesContainer = $("#myMessages");
        messagesContainer.empty();
        let messagesTable = $('<table>');
        messagesTable.append($('<thead>')
            .append($('<tr>'))
                .append($('<th>From</th>'))
                .append($('<th>Message</th>'))
                .append($('<th>Date Recieved</th>'))
        );

        let tableBody= $('<tbody>');
        for (let msg of myMessages) {
            let tableRow = $('<tr>');
            let sender = formatSender(msg['sender_name'], msg['sender_username']);
            let msgText = msg['text'];
            let msgDate = formatDate(msg['_kmd']['lmt']);
            tableRow.append($('<td>').text(sender));
            tableRow.append($('<td>').text(msgText));
            tableRow.append($('<td>').text(msgDate));
        }

        messagesTable.append(tableBody);
        messagesContainer.append(messagesTable);
    }

    //

   function showView(viewName) {
       $('main > section').hide();
       $('#view' + viewName).show();
   }

   function navigateTo() {
        let viewName = $(this).attr('data-target');
        showView(viewName);
    }

    function userLoggedIn() {
        $('.anonymous').hide();
        $('.useronly').show();
        let username = sessionStorage.getItem('username');
        $('#spanMenuLoggedInUser').text('Welcome, ' + username);
        $('#viewUserHomeHeading').text('Welcome, ' + username);
        showView('UserHome');
    }

    function userLoggedOut() {
        $('.anonymous').show();
        $('.useronly').hide();
        $('#spanMenuLoggedInUser').text();
        showView('AppHome');
    }

    //LOGOUT USER
    function logoutUser() {
        auth.logout()
            .then(() => {
                sessionStorage.clear();
                userLoggedOut();
                showInfo('Logout successful.');
            }).catch(() => {
            console.log('Error');
        });
    }

    //LOGIN USER
    function loginUser(ev) {
        ev.preventDefault();
        let inputName = $('#loginUsername').val();
        let password = $('#loginPasswd').val();

        auth.login(inputName, password)
            .then((userInfo) => {
                console.log(userInfo);
                saveSession(userInfo);
                $('#loginUsername').val('');
                $('#loginPasswd').val('');
                showInfo('Login successful');
            });
    }


    //REGISTRATE USER
    function registerUser(ev) {
        ev.preventDefault();
        let registerUsername = $("#registerUsername").val();
        let registerName = $("#registerName").val();
        let registerPassword = $("#registerPasswd").val();

        auth.register(registerUsername, registerPassword, registerName)
            .then((userInfo) => {
                saveSession(userInfo);
                $("#registerUsername").val('');
                $("#registerName").val('');
                $("#registerPasswd").val('');

                showInfo('User registration successful');
            })
            .catch(handleError);
    }

    function showInfo(messageBox) {
        let infoBox = $("#infoBox");
        infoBox.text(messageBox);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function handleError(reason) {
        //showError(reason.responseJSON.description)
        console.log(reason);
    }

    function saveSession(userInfo) {
       let userAuth = userInfo._kmd.authtoken;
       sessionStorage.setItem('authtoken', userAuth);
       let userId = userInfo._id;
       sessionStorage.setItem('userId', userId);
       let username = userInfo.username;
       sessionStorage.setItem('username', username);
       sessionStorage.setItem('name', userInfo['name']);
       userLoggedIn();
    }

    function formatDate(dateISO8601) {
        let date = new Date(dateISO8601);
        if (Number.isNaN(date.getDate()))
            return '';
        return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
            "." + date.getFullYear() + ' ' + date.getHours() + ':' +
            padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

        function padZeros(num) {
            return ('0' + num).slice(-2);
        }
    }

    function formatSender(name, username) {
        if (!name)
            return username;
        else
            return username + ' (' + name + ')';
    }

    $(document).on({
        ajaxStart: () => $("#loadingBox").show(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    });

});