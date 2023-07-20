import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const TrackItem = props => {
  const {trackDetails, onDelete} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="item-container">
      <div className="track-container">
        <div className="image-name-container">
          <img src={imageUrl} alt="track" className="image" />
          <div>
            <p className="name">{name}</p>
            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="duration-container">
          <p className="duration">{duration}</p>
          <button
            type="button"
            className="delete-button"
            data-testid="delete"
            onClick={onClickDelete}
          >
            <AiOutlineDelete className="delete-icon" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TrackItem
