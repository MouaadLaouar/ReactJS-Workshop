import './NavBar.css'
import logo from '../../assets/images/logo.svg'

export default function NavBar() {
  return (
    <header>
        <img src={ logo } alt="img"/>

        <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
        </ul>
    </header>
  )
}
