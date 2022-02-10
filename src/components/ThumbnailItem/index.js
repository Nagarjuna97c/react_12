import './index.css'

const ThumbnailItem = props => {
  const {imgdetails, changeImage, imgId} = props

  const changedImage = () => {
    changeImage(imgdetails)
  }

  const checkThumbnailDisplayed = () => {
    if (imgdetails.id === imgId) {
      return 'fullDisplay'
    }
    return ''
  }

  return (
    <li>
      <button type="button">
        <img
          src={imgdetails.thumbnailUrl}
          alt={imgdetails.thumbnailAltText}
          className={`image1 ${checkThumbnailDisplayed()}`}
          onClick={changedImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
