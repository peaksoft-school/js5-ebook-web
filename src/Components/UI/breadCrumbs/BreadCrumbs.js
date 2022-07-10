import * as React from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { styled } from '@mui/material'

function handleClick(event) {
   event.preventDefault()
   console.info('You clicked a breadcrumb.')
}

export default function BreadCrumbs() {
   return (
      <div role="presentation" onClick={handleClick}>
         <Breadcrumbs>
            <MuiLink href="/">Главная</MuiLink>
            {/* <MuiLink href="/material-ui/getting-started/installation/">
               Core
            </MuiLink> */}
            <MuiLink href="/material-ui/getting-started/installation/">
               Core
            </MuiLink>
            <MuiTypography>Breadcrumbs</MuiTypography>
         </Breadcrumbs>
      </div>
   )
}

const MuiLink = styled(Link)`
   text-decoration: none;
   color: grey;
   :focus {
      color: black;
   }
`
const MuiTypography = styled(Typography)`
   color: black;
`
