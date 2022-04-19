import './Hello.css'

const Hello = () =>{
    const name = 'Hoang'
    
    const student = {
        studentId: 'PS11609',
        name: 'Hoang nguyen '
    }
    return (
      <div>
        <h2 className='hello-header'>Hello {name}</h2>
        <button style={{backgroundColor: 'black', color:'white'}}>Say Hello</button>
        <hr />
        <h3>Name: {student.name}</h3>
        <h5>Student Id: {student.studentId}</h5>
      </div>
    )
  }

export default Hello;