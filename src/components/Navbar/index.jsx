import {ReactComponent as Logo} from '../../assets/logo.svg';

const Navbar = () => {

    return (

        <header className="h-36 flex justify-between items-center">
            <div className="flex items-center">
                <Logo />
            </div>
            <ul className="flex items-center gap-12 text-white font-bold font-inter text-base">
                <li>Token</li>
                <li>Product</li>
                <li>Resources</li>
                <li className="py-3 px-5 rounded bg-purple-primary">Community round</li>
            </ul>
        </header>
    );
};

export default Navbar