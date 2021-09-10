import React, { FC, useEffect, useRef, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'

export default function App() {
  return (
    <>
      <Router>
        <div>
          <div className="navigator">

            <div>
              <Link to="/calendar">
                <i className="fas fa-calendar"></i>
              </Link>
            </div>
            <div>
              <Link to="/charts">
                <i className="fas fa-chart-bar"></i>
              </Link>
            </div>
            <div>
              <Link to="/">

                <i className="fas fa-home"></i>
              </Link>
            </div>
            <div>
              <Link to="/themes">
                <i className="fas fa-pen"></i>
              </Link>
            </div>
            <div>
              <Link to="/settings">
                <i className="fas fa-sliders-h"></i>
              </Link>
            </div>


          </div >

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/charts">
              <Charts />
            </Route>
            <Route path="/themes">
              <Themes />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

    </>
  );
}


export interface Grade {
  name: string;
  value: number;
  day: Date;
  shortName: string;
}

const Home = () => {
  return (
    <>
      <h2>Home</h2>
      <Circles />
    </>
  )
}

const Calendar = () => {
  return (
    <>
      <h2>Calendar</h2>

    </>
  )
}

const Charts = () => {
  return (
    <>
      <h2>Users</h2>

    </>
  )
}

const Themes = () => {
  return (
    <>
      <h2>Themes</h2>

    </>
  )
}

const Settings = () => {
  return (
    <>
      <h2>Settings</h2>

    </>
  )
}





const Circle: FC<{ score: Grade }> = ({ score }) => {
  const radius = 4.5;


  const [grade, setGrade] = useState(score.value);
  const [circleDashArray, setCircleDashArray] = useState("85, 100")
  const [color, setColor] = useState("var(--stroke)")
  const clicked = () => {

    setGrade((grade + 1) % 3)
    const percentage = grade / 2
    setColor(`var(--stroke)`)
    if (percentage === 0) {
      setColor("transparent")
    }

    setCircleDashArray(`${percentage * (2 * radius * Math.PI)}, ${radius * 2 * Math.PI}`)
  }

  useEffect(() => {
    clicked()
  }, [])
  return (
    <div className={"themes_wrapper " + score.name} >
      <p>{score.name}</p>

      <div className={"ring_wrapper " + score.name} onClick={clicked}>
        <svg viewBox="0 0 10 10">
          <path className="outline" d="M5 0.5 a 4.5 4.5 0 0 1 0 9 a 4.5 4.5 0 0 1 0 -9" fill="none" strokeDasharray="100, 100" />
          <path className="ring home_ring" id={"1"} d="M5 0.5 a 4.5 4.5 0 0 1 0 9 a 4.5 4.5 0 0 1 0 -9" fill="none" strokeDasharray={circleDashArray} style={{ "stroke": `${color}` }} />
        </svg>

      </div>
    </div>
  )
}

const Circles: FC<{}> = ({ }) => {


  const themes: Grade[] = [
    {
      name: "Theme 1",
      value: 1,
      day: new Date(),
      shortName: "T1"
    },
    {
      name: "Theme 2",
      value: 2,
      day: new Date(),
      shortName: "T2"
    },
    {
      name: "Theme 3",
      value: 0,
      day: new Date(),
      shortName: "T3"
    },
  ]
  const circles_list = themes.map(theme => {
    return (
      <Circle score={theme} />
    )
  })
  return (
    <div className={"themes_container"}>
      {circles_list}
    </div>
  )

}