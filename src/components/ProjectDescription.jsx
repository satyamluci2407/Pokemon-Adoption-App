import classes from './ProjectDescription.module.css';

export default function ProjectDescription() {

  return (
    <div className={classes.descriptionCard}>
      <h4>About</h4>
      <p>
        This Project is based on Pokemon adoption from the cartoon pokemon by using PokeAPI with reactjs.
        The main purpose of the web application is to serve as an exercise to acquire skills in
        frontend web development, particularly in the use of the <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a> library. <br />
        Another goal of this project is to have it as a demo in my personal portfolio for potential employers.
      </p>
      <h4>Repository</h4>
      <p>You can find the code for this app in this public <a href="https://github.com/satyamluci2407" target="_blank" rel="noopener noreferrer">GitHub repo</a>.</p>
      <h4>Author</h4>
      <p>Satyam Shandilya</p>
      <h4>My portfolio</h4>
      <p>I showcase my latest projects on my <a href="https://github.com/satyamluci2407" target="_blank" rel="noopener noreferrer">github</a>.</p>
      <h4>LinkedIn</h4>
      <p>If you want, you can check out <a href="https://www.linkedin.com/in/satyam-shandilya-47694b1a1/" target="_blank" rel="noopener noreferrer">my LinkedIn</a>.</p>
    </div>
  );
}
