import { useEffect } from 'react';
import LocalStorage from './client/src/hooks/LocalStorage';

const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = LocalStorage(key, initialValue);

    useEffect(() => {
        if(darkMode === true){
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [darkMode]);

    const toggleDarkMode = e => {
        e.preventDefault();

        return darkMode ? setDarkMode(false) : setDarkMode(true);
    };
    return [darkMode, setDarkMode, toggleDarkMode]
};

export default useDarkMode;