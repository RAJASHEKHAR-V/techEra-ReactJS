import {FailureImage, FailureHeading, Button} from './componentStyle'

const FailureView = props => {
  const {retry} = props
  return (
    <>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureHeading as="p" addFont>
        We cannot seem to find the page you are looking for.
      </FailureHeading>
      <Button type="button" onClick={retry}>
        Retry
      </Button>
    </>
  )
}

export default FailureView
