import './App.css'
import {Component} from 'react'

class App extends Component {
  render() {
    return (
      <div className="background-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="img-pass"
        />
        <div className="background-2">
          <form className="background-form">
            <p className="user-info-para">add user info</p>
            <div className="user-info-background">
              <div className="username-img-background">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="username"
                  className="user-info-img"
                />
              </div>
              <input
                type="text"
                className="text-web"
                placeholder="enter the website"
              />
            </div>
            <div className="user-info-background">
              <div className="username-img-background">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="password"
                  className="user-info-img"
                />
              </div>
              <input
                type="text"
                className="text-web"
                placeholder="enter your name"
              />
            </div>
            <div className="user-info-background">
              <div className="username-img-background">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="user-info-img"
                />
              </div>
              <input
                type="text"
                className="text-web"
                placeholder="enter your password"
              />
            </div>
            <div className="button-add-background">
              <button className="button-add" type="submit">
                add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-top"
          />
        </div>
        <div className="background-3">
          <p className="user-info-para">your passwords</p>
          <hr />
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox"> show password</label>
        </div>
      </div>
    )
  }
}

export default App
