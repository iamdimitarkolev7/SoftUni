let messageService = (() => {
    function loadMyMessages(username) {
        let endpoint = `messages?query={"recipient_username":"${username}"}`;

        return requester.get('appdata', endpoint, 'kinvey');
    }

    function loadArchiveMessages(username) {
        let endpoint = `messages?query={"sender_username":"${username}"}`;

        return requester.get('appdata', endpoint, 'kinvey');
    }

    function deleteMessage(messageId) {
        let endpoint = `messages/${messageId}`;

        return requester.remove('appdata', endpoint, 'kinvey');
    }

    function loadAllUsers() {
        return requester.get('user', '', 'kinvey');
    }

    function sendMessage(sender_username, sender_name, recipient_name, text) {
        let msgData = {
            sender_username,
            sender_name,
            recipient_name,
            text
        };

        return requester.post('appdata', 'messages', 'kinvey', msgData);
    }

    return {
        loadMyMessages,
        loadArchiveMessages,
        deleteMessage,
        loadAllUsers,
        sendMessage
    }
})();