import { Link } from '@tanstack/react-router';
import classes from './header.module.css'

export default function Header() {
  return (
    <header className={classes.header}>
        <h1>
          <Link to='/'>Marisa Cantor</Link>
        </h1>
        <nav className={classes.navigation}>
          <div className={classes.multi_item}>
            <Link to='/projects'>
              projects
            </Link>
            <Link to='/projects/second-project'>test</Link>
          </div>
          
          <Link to='/illustration'>illustration</Link>
          <Link to='/life-drawing'>life drawing</Link>
          <Link to='/about'>about</Link>
        </nav>
    </header>
  );
}