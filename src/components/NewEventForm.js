import './NewEventForm.css'
import { useState, iseRef } from 'react'

export default function NewEventForm({ addEvent }) {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [date_a, setDate_a] = useState('')
    const [time, setTime] = useState('')
    const [prio, setPrio] = useState('Low Importance')
    const [notes, setNotes] = useState('')

    const resetForm = () => {
        setTitle('')
        setDate('')
        setPrio('')
        setNotes('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const event = {
          title: title,
          date_a: date_a,
          date: date,
          prio: prio,
          notes: notes,
          time: time,
          id: Math.floor(Math.random() * 10000)
        }
        addEvent(event)
        resetForm()
      }

    return(
        <form className = "new-event-form" onSubmit={handleSubmit}> 
          <label>
            <span>Task Name:</span>
            <input 
              type="text" 
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </label>

          <label>
            <span>Assigned Date:</span>
            <input 
              type="date" 
              onChange={(e) => setDate_a(e.target.value)}
              value={date_a}
              required
            />
          </label>

          <label>
            <span>Due Date:</span>
            <input 
              type="date" 
              onChange={(e) => setDate(e.target.value)}
              value={date}
              required
            />
          </label>

          <label>
            <span>Importance:</span>
            <select onChange={(e)=> setPrio(e.target.value)}>
                <option value="Low Importance">Low</option>
                <option value="Medium Importance">Medium</option>
                <option value="High Importance">High</option>
                <option value="Highest Importance">Highest</option>
            </select>
          </label>

          <label>
            <span>Estimated time required (hours):</span>
            <input 
              type="numbers" 
              onChange={(e) => setTime(e.target.value)}
              value={time}
              required
            />
          </label>

          <label>
            <span>Notes:</span>
            <input 
              type="text" 
              onChange={(e) => setNotes(e.target.value)}
              value={notes}
            />
          </label>
          <button>Submit</button> 
        </form>
        
    )

}

