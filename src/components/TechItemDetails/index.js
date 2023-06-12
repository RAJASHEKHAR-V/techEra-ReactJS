import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Header from '../Header'
import FailureView from '../FailureView'

import {Card, CourseImage, DetailsCard, Heading} from './componentStyle'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failed: 'FAILURE',
}

class TechItemDetails extends Component {
  state = {techDetailObject: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getDetailObject()
  }

  getDetails = details => {
    const newDetails = {
      id: details.id,
      name: details.name,
      imageUrl: details.image_url,
      description: details.description,
    }
    this.setState({
      techDetailObject: newDetails,
      apiStatus: apiStatusConstants.success,
    })
  }

  getDetailObject = async () => {
    this.setState({apiStatus: apiStatusConstants.progress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/te/courses/${id}`
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      this.getDetails(data.course_details)
    } else {
      this.setState({apiStatus: apiStatusConstants.failed})
    }
  }

  retryDetails = () => {
    this.getDetailObject()
  }

  getTechDetails = () => {
    const {techDetailObject} = this.state
    const {name, imageUrl, description} = techDetailObject

    return (
      <Card>
        <CourseImage src={imageUrl} alt={name} />
        <DetailsCard>
          <Heading>{name}</Heading>
          <Heading as="p" para>
            {description}
          </Heading>
        </DetailsCard>
      </Card>
    )
  }

  getFailure = () => (
    <Card failed>
      <FailureView retry={this.retryDetails} />
    </Card>
  )

  loadLoader = () => (
    <div data-testid="loader" className="expand-loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  getItemDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.getTechDetails()
      case apiStatusConstants.failed:
        return this.getFailure()
      case apiStatusConstants.progress:
        return this.loadLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.getItemDetails()}
      </>
    )
  }
}

export default TechItemDetails
