import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className="col-span-11 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer
