import Logo from "../logo/Logo.jsx";

export default () => {
    return (
        <div className="header">
            <div className="logo">
            <Logo />
            <p>Vite</p>
            <input type="text" placeholder="Search"/>
            </div>
            <div className="navigation">
                <a href="">Guide</a>
                <a href="">Config</a>
                <a href="">Plugins</a>
                <a href="">Resources</a>
                <a href="">Version</a>
                {/* <Select placeholder="Resources"></Select> */}
            </div>
        </div>
    );
}