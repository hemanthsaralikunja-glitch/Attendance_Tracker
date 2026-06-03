import { useState } from 'react'
import './App.css'

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Akhil', present: true },
    { id: 2, name: 'Bhavana', present: false },
    { id: 3, name: 'Chandra', present: true },
  ])

  const toggleAttendance = (id) => {
    setStudents((current) =>
      current.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    )
  }

  const presentCount = students.filter((student) => student.present).length

  return (
    <div className="app-container">
      <header>
        <h1>Attendance Counter</h1>
        <p>Track student presence with one click.</p>
      </header>

      <section className="summary">
        <p>
          Present: <strong>{presentCount}</strong> / {students.length}
        </p>
      </section>

      <section className="student-list">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            <div>
              <h2>{student.name}</h2>
              <p>Status: {student.present ? 'Present' : 'Absent'}</p>
            </div>
            <button onClick={() => toggleAttendance(student.id)}>
              Mark {student.present ? 'Absent' : 'Present'}
            </button>
          </div>
        ))}
      </section>
    </div>
  )
}

export default App
