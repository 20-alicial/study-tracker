import './App.css';
import './components/Title.css';
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
import NewEventForm from './components/NewEventForm'

function App() {
  const [showModal, setShowModal] = useState(true)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(showModal)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const handleOpen = () => {
    setShowModal(true)
  }

  const subtitle = "Use this to track your homework and assignments!"

  return (
    <div className="App">
      <Title abc="Study Task Tracker" subtitle={subtitle}/> 
      {/* <Title abc="prop test 3" subtitle="prop test 4"/>  */}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide events</button>
        </div>
      )}

     {showEvents && <EventList events={events} handleClick={handleClick}>

      </EventList>}
    
      {showModal && <Modal handleClose={handleClose} isSalesModal={true}>
        <NewEventForm addEvent={addEvent} />
      </Modal>}

      {!showModal && <button onClick={handleOpen}>Add Task</button>}

      <div>

      </div>
        
    </div>
  );
}

export default App;
