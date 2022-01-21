import './index.css'

const EachFormContainers = props => {
  const {eachDetails} = props
  const {website, name, pass} = eachDetails
  const webIntial = website ? website[0].toUpperCase() : ''
  return (
    <li className="containerDiv">
      <p className="para">{webIntial}</p>
      <div className="container-initial-name-pass">
        <h2 className="rest-para">{website}</h2>
        <p className="rest-para">{name}</p>
        <p className="rest-para">{pass}</p>
      </div>
    </li>
  )
}
export default EachFormContainers
