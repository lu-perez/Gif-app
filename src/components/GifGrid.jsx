import PropTypes from 'prop-types'
import GifItem from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <div>Loading...</div>
      }
      <div className="card-grid">
        {
          gifs.map((gif) => (
            <GifItem key={gif.id} {...gif} />
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid
