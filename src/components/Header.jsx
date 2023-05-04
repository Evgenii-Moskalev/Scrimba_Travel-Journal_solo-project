import logo from '../logo.svg';

export default function Header() {
    return (
        <header className='header'>
            <img src={logo} alt="Logo" className='header--logo' />
            <p className='header--text'>my travel journal</p>
        </header>
    )
}