import styles from "./Header.module.css"
import logo from "../../assets/logo.png"
import { Link, useLocation } from "react-router-dom"
import { ROUTES } from "../../constants/routes"

export default function Header (){

    const location = useLocation()

    return (
        <header className={styles.header}>
            <Link to={ROUTES.HOME} className={styles.logo}>
                <img src={logo} alt="TalentHub"/>
            </Link>

            <nav className={styles.nav}>
                <ul>

                    <li className={location.pathname === ROUTES.POSTULARSE? styles.active:""}>
                        <Link to={ROUTES.POSTULARSE}>Postularse</Link>
                    </li>

                    <li className={location.pathname === ROUTES.DASHBOARD? styles.active:""}>
                        <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
                    </li>

                </ul>
            </nav>

        </header>
    )
}