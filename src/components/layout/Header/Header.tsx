import './header.css';
import NavMenu from './NavMenu';
import NavTop from './NavTop';
export default function Header() {
  return (
    <div className='nav'>
      <NavTop />
      <NavMenu />
    </div>
  );
}
