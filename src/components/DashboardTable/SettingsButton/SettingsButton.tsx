import styles from "./SettingsButton.module.css"

import settingsSvg from "../../../assets/settings.svg";

export default function SettingsButton() {
    return (
        <button className={styles.container}>
            Configurar vista 
            
            <img src={settingsSvg} className={styles.icon}/>
        </button>
    )
}