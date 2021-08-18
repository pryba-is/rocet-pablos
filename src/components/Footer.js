import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'

function Footer() {
    return (
        <BottomNavigation>
            <BottomNavigationAction label="Facebook" icon={<FacebookIcon style={{fill: "#3b5998"}} />} />
        </BottomNavigation>
    )
}

export default Footer
