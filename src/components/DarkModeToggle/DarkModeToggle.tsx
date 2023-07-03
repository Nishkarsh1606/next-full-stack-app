'use client'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '@/src/context/ThemeContext'
import Switch from '@mui/material/Switch';

const DarkModeToggle = () => {
    const { toggle } = useContext(ThemeContext)
    const [checked, setChecked] = useState<boolean>(true);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        toggle()
        setChecked(event.target.checked);
    };
    return (
        <div className='flex items-start'>
            <div>🔆</div>
            <div className='-mt-2'>
                <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>
            <div>🌙</div>
        </div>
    )
}

export default DarkModeToggle