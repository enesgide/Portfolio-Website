import './index.css'

const NavBar = () => {
    const logo = "/Images/Logo2.png";
    
    const navLinks = [
        {id: 1, text: "Home", url: "https://www.roblox.com"},
        {id: 2, text: "Games", url: "https://www.roblox.com"},
        {id: 3, text: "Projects", url: "https://www.roblox.com"},
        {id: 4, text: "Contact", url: "https://www.roblox.com"},
    ]

    return (
        <div className="nav-bar" style={{display: 'flex', justifyContent: 'space-between'}}>
            <a href="/" style={{marginLeft: '2%', height: '50px'}}>
                <img id="logo" src={ logo } alt="Enes Gide" height={'100%'}/>
            </a>

            <ul style={{marginRight: '3.5%', justifyContent: 'flex-end'}}>
                {navLinks.map((navlink) => (
                    <NavButton key={ navlink.id } text={ navlink.text } url={ navlink.url }/>
                ))}
            </ul>
        </div>
    );
}

const NavButton = (props) => {
    return (
        <li style={{
            display: 'inline-block',
            margin: '10px',
            padding: '10px',
        }}>
            <a href={ props.url }>
                { props.text.toUpperCase() }
            </a>
        </li>
    );
}

export default NavBar; 