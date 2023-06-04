'use client'
import Avatar from '@mui/material/Avatar';

const AvatarIcon = ({ name }: { name: string }) => {
    return (
        <Avatar>{name[0]}</Avatar>
    )
}

export default AvatarIcon