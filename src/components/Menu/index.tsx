
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon,} from 'lucide-react'
import styles from './style.module.css'
import { useEffect, useState } from 'react'

type AvaiableThemes = 'dark' | 'light'

export const Menu = () =>{
   
    const [theme, setTheme] = useState<AvaiableThemes>(() =>{
    
        const storageTheme = localStorage.getItem('theme') as AvaiableThemes || 'dark'

        return storageTheme
    })  
    
    function handleTheme(event : React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault()

        setTheme(prevTheme =>{
            const nextTheme =  prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme
        })
    }
    
    useEffect(() =>{
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    },[theme])
    
    return(
        <nav className={styles.menu}>
            <a className={styles.menuLink} href="#" aria-label='Home' title='Home'>
                <HouseIcon />   
            </a>
            <a className={styles.menuLink} href="#" aria-label='Historico' title='Historico'>
                <HistoryIcon />   
            </a>
            <a className={styles.menuLink} href="#" aria-label='Configurações' title='Configurações'>
                <SettingsIcon />   
            </a>
            <a className={styles.menuLink} href="#" aria-label='Mudar Tema' title='Mudar' onClick={handleTheme}>
                <SunIcon />   
            </a>
        </nav>
    )
}