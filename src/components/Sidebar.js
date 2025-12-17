import { useSelector } from "react-redux"

const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
  if(!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <h1 className="font-bold py-3">Home</h1>
      <h1 className="font-bold py-1">Shorts</h1>
      <h1 className="font-bold py-1">Videos</h1>
      <h1 className="font-bold py-1">Liked</h1>
       
      <h1 className="font-bold py-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Movies</li>
        <li>Gaming</li>
        <li>Sports</li>
      </ul>
    
      <h1 className="font-bold">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li> 
      </ul>
    </div>
  )
}

export default Sidebar