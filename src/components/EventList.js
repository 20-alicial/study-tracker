import React from 'react'
import styles from './EventList.module.css'

export default function EventList({ events, handleClick }) {
  return (
    <div>
      {events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>{event.title}</h2>
          <p>Assigned: {event.date_a} Due: {event.date}, {event.prio}</p>
          <p>Estimated time: {event.time}</p>
          <p>{event.notes}</p>
          <button onClick={() => handleClick(event.id)}>Done</button>
        </div>
      ))}
    </div>
  )
}