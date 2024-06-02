import './App.css'
import About from './components/about'
import Navbar from './components/navbar'
import Home from './components/home'
import Tech from './components/tech'
import Education from './components/education'
import Project from './components/project'
import Footer from './components/footer'


function App() {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="skills">
          <Tech />
        </div>

        <div id="education">
          <Education />
        </div>

        <div id="project">
          <Project />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
