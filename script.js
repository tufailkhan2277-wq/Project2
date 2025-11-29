document.addEventListener('DOMContentLoaded', () => {
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email && password) {
                const btn = loginForm.querySelector('button');
                const originalText = btn.innerText;
                btn.innerText = 'Loading...';
                btn.disabled = true;

                setTimeout(() => {
                    window.location.href = 'chatbot.html';
                }, 1000);
            }
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
            window.location.href = 'index.html';
        });
    }

    const chatContainer = document.getElementById('chatContainer');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');

    if (chatContainer && userInput && sendBtn) {
        
        function addMessage(text, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            if (sender === 'ai') {
                messageDiv.classList.add('ai');
            }

            const avatarDiv = document.createElement('div');
            avatarDiv.classList.add('avatar');
            avatarDiv.classList.add(sender);
            avatarDiv.innerText = sender === 'user' ? 'U' : 'AI';

            const contentDiv = document.createElement('div');
            contentDiv.classList.add('message-content');
            contentDiv.innerText = text;

            messageDiv.appendChild(avatarDiv);
            messageDiv.appendChild(contentDiv);
            
            chatContainer.appendChild(messageDiv);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        function handleSend() {
            const text = userInput.value.trim();
            if (!text) return;

            addMessage(text, 'user');
            userInput.value = '';
            userInput.style.height = 'auto'; 

            setTimeout(() => {
                const responses = [
                    "That's an interesting question! Tell me more.",
                    "I can help you with that. Here is some information...",
                    "Could you clarify what you mean?",
                    "I'm just a simple demo bot, but I think you're doing great!",
                    "Hello! How can I assist you further?"
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                addMessage(randomResponse, 'ai');
            }, 1000);
        }

        sendBtn.addEventListener('click', handleSend);

        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
            }
        });

        userInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
            if(this.value === '') this.style.height = 'auto';
        });
    }
});
