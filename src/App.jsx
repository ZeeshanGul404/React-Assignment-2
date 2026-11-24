import './App.css'

const students = [
  {
    id: 1,
    name: 'Ali Khan',
    course: 'Web Development',
    age: 18,
    city: 'Karachi',
  },
  {
    id: 2,
    name: 'Sara Ahmed',
    course: 'Graphic Design',
    age: 20,
    city: 'Lahore',
  },
  {
    id: 3,
    name: 'Ahmed Raza',
    course: 'React JS',
    age: 19,
    city: 'Islamabad',
  },
  {
    id: 4,
    name: 'Ayesha Malik',
    course: 'Web Development',
    age: 21,
    city: 'Karachi',
  },
]

function App() {
  return (
    <main className="directory">
      <h1 className="directory-title">Student Directory</h1>

      <section className="student-grid" aria-label="Students">
        {students.map((student) => (
          <article className="student-card" key={student.id}>
            <h2>{student.name}</h2>
            <dl className="student-details">
              <div>
                <dt>Course:</dt>
                <dd>{student.course}</dd>
              </div>
              <div>
                <dt>Age:</dt>
                <dd>{student.age}</dd>
              </div>
              <div>
                <dt>City:</dt>
                <dd>{student.city}</dd>
              </div>
            </dl>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
