function Header() {
    return (
        <nav className='blue lighten-2'>
            <div className='nav-wrapper'>
                <a href='#' className='brand-logo center'>
                    Fortnite Shop project
                </a>
                <ul id='nav-mobile' className='left hide-on-med-and-down'>
                    <li>
                        <a href='#'>Repo</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
