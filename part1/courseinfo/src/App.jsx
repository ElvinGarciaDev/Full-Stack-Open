const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = ({arr}) => {

  return (
    <>
    <Part arr={arr[0]}/>
    <Part arr={arr[1]}/>

    <Part arr={arr[2]}/>

    </>
  )

}

const Total = ({arr}) => {

  return(
  <div>
    <p>Number of exercises {arr[0].exercises + arr[1].exercises + arr[2].exercises}</p>
    
  </div>
  )
}

const Part = ({arr}) => {
  return (
    <>
    <p>{arr.name} {arr.exercises}</p>
    </>
  )
}

const App = () => {


  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
    <Header course={course.name}/>

      <Content arr={course.parts}/>
      <Total arr={course.parts}/>

    
    </>
  )
}

export default App