const CourseInfo = ({ course }) => {
  return (
    <>
      <ul>
        {course.map((part) => (
          <li key={part.id}>
            {part.name} - {part.exercises} exercises
          </li>
        ))}
      </ul>

      <Total course={course} />
    </>
  );
};

const Total = ({ course }) => {
  const total = course.reduce((acc, current) => (acc += current.exercises), 0);

  return <p>total of {total} exercises</p>;
};

const Course = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
      <CourseInfo course={course.parts} />
    </>
  );
};

export default Course;
