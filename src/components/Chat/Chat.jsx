import  './chat.scss'

const Chat = () => {
  return (
    <div className='chat'>
        <div className="messages">
            <h1>Messages</h1>
            <div className="message">
                <img src="../../../src/assets/favicon.png" alt=''/>
                <span>John Doe</span>
                <p>
                    Lorem ipsum dolor sit amet...
                </p>
            </div>
            <div className="message">
                <img src="../../../src/assets/favicon.png" alt=''/>
                <span>John Doe</span>
                <p>
                    Lorem ipsum dolor sit amet...
                </p>
            </div>
            <div className="message">
                <img src="../../../src/assets/favicon.png" alt=''/>
                <span>John Doe</span>
                <p>
                    Lorem ipsum dolor sit amet...
                </p>
            </div>
        </div>
        <div className="chatBox">
            
        </div>
    </div>
  )
}

export default Chat