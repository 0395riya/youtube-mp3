import './App.css';
import Form from './Form';
import { useState } from 'react'
import { useRef } from 'react'
import IframeResizer from 'iframe-resizer-react'

function App() {
  
  

  const iframeRef = useRef(null)
  const [messageData, setMessageData] = useState()

  const onResized = data => setMessageData(data)

  const onMessage = data => {
    setMessageData(data)
    iframeRef.current.sendMessage('Hello back from the parent page')
  }

  
  return (
    <div className="App">

     
      {/* <Form /> */}


      <form action="">
  <div class="inp-border a1">
      <input class="input" type="text" name="name1" placeholder="Your Name" />
  </div>
 
</form>


   
     <IframeResizer
        forwardRef={iframeRef}
        heightCalculationMethod="lowestElement"
        inPageLinks
        log
        onMessage={onMessage}
        onResized={onResized}
        src="https://convert2mp3s.com/api/widgetv2?url=https://www.youtube.com/watch?v=pRpeEdMmmQ0"
        style={{ width: '1px', minWidth: '100%'}}
      />
       
    </div>
  );
}

export default App;
