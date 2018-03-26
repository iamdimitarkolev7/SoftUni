function attachEvents() {
    let URL = "https://messenger-kolev.firebaseio.com/messenger";

    $('#submit').click(createMessage);
    $('#refresh').click(loadMessages);

    function createMessage() {
        let data = {
            author:$('#author').val(),
            content: $('#content').val(),
            timestamp: Date.now()
        };

        $('#author').val("");
        $('#content').val("");

        $.ajax({
            method: "POST",
            url: URL + ".json",
            data: JSON.stringify(data),
            success: loadMessages
        });
    }

    function displayMessages(messages) {
        $('#messages').empty();
        let orderedMessages = {};
        messages = Object.keys(messages).sort((a,b) => a.timestamp - b.timestamp).forEach(k => orderedMessages[k] = messages[k]);
        for(let message of Object.keys(orderedMessages)){
            $('#messages').append(`${orderedMessages[message]['author']}: ${orderedMessages[message]['content']}\n`);
        }
    }

    function loadMessages() {
        $.ajax({
            method: "GET",
            url: URL + ".json",
            success: displayMessages
        });
    }

    loadMessages();
}