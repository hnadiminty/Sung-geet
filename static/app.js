class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            Chatbox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }

        this.state = false;
        this.message = [];
    }

    display() {
        const { openButton, Chatbox, sendButton } = this.args;

        openButton.addEventListener('click', () => this.toggleState(Chatbox));
        sendButton.addEventListener('click', () => this.onSendButton(Chatbox));

        const node = Chatbox.querySelector('input');
        node.addEventListener("keyup", ({ key }) => {
            if (key === "Enter") {
                this.onSendButton(Chatbox);
            }
        });
    }

    toggleState(Chatbox) {
        this.state = !this.state;

        if (this.state) {
            Chatbox.classList.add('chatbox--active');
        } else {
            Chatbox.classList.remove('chatbox--active'); // Remove 'tokens:' label
        }
    }

    onSendButton(chatbox) {
        var textfield = chatbox.querySelector('input');
        let text1 = textfield.value
        if (text1 === '') {
            return;
        }

        let msg1 = { name: "User", message: text1 }
        this.message.push(msg1);

        //'http://127.0.0.1:5000/predict
        fetch($SCRIPT_ROOT + '/predict', {
                method: 'POST',
                body: JSON.stringify({ message: text1 }), // Replace with proper property name
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(r => r.json())
            .then(r => {
                let msg2 = { name: "Sam", message: r.answer };
                this.message.push(msg2);
                this.updateChatText(chatbox);
                textfield.value = '';
            })
            .catch((error) => {
                console.error('Error:', error);
                this.updateChatText(chatbox);
                textfield.value = '';
            });
    }

    updateChatText(chatbox) {
        var html = '';
        this.message.slice().reverse().forEach(function(item) {
            if (item.name === "Sam") {
                html += '<div class= " messages__item messages__item--visitor">' + item.message + '</div>'
            } else {
                html += '<div class= " messages__item messages__item--operator">' + item.message + '</div>'
            }
        });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }
}

const chatbox = new Chatbox();
chatbox.display();