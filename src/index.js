function Comment(message) {
  this.id = 'randomeid';
  this.parent = null;
  this.likes = 0;
  const msg = [];
  this.message = message;

}

Comment.prototype.increment = () => {
  this.likes++;
};

Comment.prototype.decrement = function() {
  this.likes--;
};

Comment.prototype.getLikes = function() {
  return this.likes;
};

Comment.prototype.getId = function() {
  return this.id;
};

Comment.prototype.setParent = function (parentId) {
  this.parent = parentId;
};




const newMessage = new Comment('hello');
// user likes
newMessage.increment();
//dislike
newMessage.decrement();
// to print 
newMessage.getLikes();


// reply to message
const replyMessage = new Comment('hello reply');

newMessage.setParent(replyMessage.getId());

// newMessage
// {
//   id: 'some',
//   parent: null,
//   message: 'hello'
// }

// replyMessage
// {
//   id: 'ssome',
//   message: 'hello reply',
//   parent: 'some'
// }

const chatWidget = (function() {
  const msgMap = {};
  let id = 0;
  function addNewMessage(userId, message) {
    msgMap[id++] = {
      message,
      userId,
      reply: [id1, id2],
      likes: 0
    };
    return messageId;
  }

  function handleLike(messageId, isIncrement) {
      if (msgMap[messageId]) {
        msgMap[messageId] = isIncrement ?
        msgMap[messageId]++ : msgMap[messageId]--;
      }
  }

  function del(messagid) {
    [message1, messag2]
  }

  function handleReply(messageRepliedId, userId, message) {
    const newId = addNewMessage(userId, message);
    msgMap[messageRepliedId].reply.push([userId, newId])
  }

  function renderMessage(domEle) {
    let JSX = '<div class="message-wrapper">';
    
    for (const [messageId, currentMessage] of Object.entries(msgMap)) {
      JSX += `
        <div>
          <div>${messageId}</div>
          <div>${currentMessage.message}</div>
          <div id="actionHandler">
            <span>${currentMessage.likes}</span>
            <button id="${messageId}_like" data-id="${messageId}}">
              like
            </button>
            <button id="${messageId}_dislike>
              dislike
            </button>
            <button id="${messageId}_reply">
              reply
            </button>
          </div>
        </div>
      `;
    }

    JSX += "</div>";

    const app = document.getElementById('app');
    if (app) {
      app.addEventListener('click', function(event) {
        const target = event.target;
        const id = target.id;
        const messageId = target.datset.id;
        if (id.includes('like')) {
          handleLike(Number(messageId), true);
        } else if (id.includes('dislike')) {
          handleLike(Number(messageId), false);
        } else if (id.includes('reply')) {
          handleReply();
        }
        renderMessage(messageBox);
      });
    }
  
    domEle.innerHTML = JSX;
  }

  return {
    add: addNewMessage,
    renderMessage,
  };
})();

const app = document.getElementById('app');
const chatBox = document.getElementById('chat');
const addBtn = document.getElementById('addBtn');
const errorBox = document.getElementById('error');
const messageBox = document.getElementById('messages');


addBtn.addEventListener('click', function(event) {
  const value = chatBox.value  || '';
  if (value.length > 10) {
    errorBox.innerHTML = `Message should less than 200 characters`;
  } else {
    chatWidget.add('random_1', value);
    chatWidget.renderMessage(messageBox);
    chatBox.value = '';
  }
});