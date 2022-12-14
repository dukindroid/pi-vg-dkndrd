// Poner moñitos por acá o algo
import { Link } from 'react-router-dom'

const Splash = () => {
  return (<>
    <div className='center'>
      <div className="icon-list">
        <i className="nes-mario"></i>
      </div>
      <Link to='/home'>
        <button >GO!</button>
      </Link>
    </div>
  </>)
}

export default Splash
