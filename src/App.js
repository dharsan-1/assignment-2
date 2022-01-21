import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import EachFormContainers from './FormContainersComponent/index'

class App extends Component {
  state = {websiteInput: '', nameInput: '', passInput: '', formContainer: []}

  onChangeWeb = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeName = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangepass = event => {
    this.setState({passInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {websiteInput, nameInput, passInput} = this.state
    const newContainer = {
      website: websiteInput,
      name: nameInput,
      pass: passInput,
      id: uuidv4(),
    }

    this.setState(prevState => ({
      formContainer: [...prevState.formContainer, newContainer],
      websiteInput: '',
      nameInput: '',
      passInput: '',
    }))
  }

  onBuildingFormContainer = () => {
    const {formContainer} = this.state
    return formContainer.map(eachFormDetails => (
      <EachFormContainers
        eachDetails={eachFormDetails}
        key={eachFormDetails.id}
      />
    ))
  }

  render() {
    return (
      <div className="background-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="img-pass"
        />
        <div className="background-2">
          <form className="background-form" onSubmit={this.onSubmitForm}>
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
                onChange={this.onChangeWeb}
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
                onChange={this.onChangeName}
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
                type="password"
                className="text-web"
                placeholder="enter your password"
                onChange={this.onChangepass}
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
          <ul className="form-containers">{this.onBuildingFormContainer()}</ul>
        </div>
      </div>
    )
  }
}

export default App
