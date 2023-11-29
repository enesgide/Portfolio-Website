import './index.css'

const NavBar = () => {
    const navLinks = [
        {text: "Home", url: "https://www.roblox.com"},
        {text: "Games", url: "https://www.roblox.com"},
        {text: "Projects", url: "https://www.roblox.com"},
        {text: "Contact", url: "https://www.roblox.com"},
    ]

    return (
        <div className="nav-bar" style={{display: 'flex', justifyContent: 'space-between'}}>
            <a id="logo" style={{marginLeft: '3.5%'}}>LogoText</a>
            <ul style={{marginRight: '3.5%', justifyContent: 'flex-end'}}>
                {navLinks.map((navlink) => (
                    <NavButton text={ navlink.text } url={ navlink.url }/>
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