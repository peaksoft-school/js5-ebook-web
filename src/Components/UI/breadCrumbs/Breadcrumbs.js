import React from 'react'
import {
   Breadcrumbs as MUIBreadcrumbs,
   Link,
   styled,
   Typography,
} from '@mui/material'
import { withRouter } from 'react-router-dom'

const Breadcrumbs = ({ history, location: { pathname } }) => {
   const pathnames = pathname.split('/').filter((x) => x)

   if (pathnames.length === 1) {
      // eslint-disable-next-line react/destructuring-assignment
      return
   }
   // eslint-disable-next-line consistent-return
   return (
      <BreadCrumbsStyle aria-label="breadcrumb">
         {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
            const isLast = index === pathnames.length - 1
            const toUpperCase = name[0].toUpperCase() + name.slice(1)
            return isLast ? (
               <Typography key={toUpperCase}>{toUpperCase}</Typography>
            ) : (
               // eslint-disable-next-line jsx-a11y/anchor-is-valid
               <LinkStyle
                  key={toUpperCase}
                  onClick={() => history.push(routeTo)}
               >
                  {toUpperCase}
               </LinkStyle>
            )
         })}
      </BreadCrumbsStyle>
   )
}

export default withRouter(Breadcrumbs)

const BreadCrumbsStyle = styled(MUIBreadcrumbs)`
   .css-xhjb1c-MuiTypography-root-MuiLink-root {
      margin: 0;
      color: #1976d2;
      -webkit-text-decoration: none;
      text-decoration: none;

      color: gray;
   }
   .css-ahj2mt-MuiTypography-root {
      margin: 0;
      font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5;
      letter-spacing: 0.00938em;
      color: black;
   }
`
const LinkStyle = styled(Link)`
   color: black;
   :focus {
      color: black;
      text-decoration: none;
   }
`
