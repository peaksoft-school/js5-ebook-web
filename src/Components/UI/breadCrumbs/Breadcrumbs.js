import React from 'react'
import {
   Breadcrumbs as MUIBreadcrumbs,
   Link,
   styled,
   Typography,
} from '@mui/material'
import { withRouter } from 'react-router-dom'

const Breadcrumbs = ({ history, location: { pathname }, translate }) => {
   const pathnames = pathname.split('/').filter((x) => x)
   const updatedPathnames = pathnames.map((path) => translate[path] || path)
   if (pathnames.length === 1) {
      return null
   }

   const renderPaths = () => {
      return updatedPathnames.map((name, index) => {
         const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
         const isLast = index === pathnames.length - 1
         const toUpperCase = name[0].toUpperCase() + name.slice(1)
         return isLast ? (
            <Typography key={toUpperCase}>{toUpperCase}</Typography>
         ) : (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <Link key={toUpperCase} onClick={() => history.push(routeTo)}>
               {toUpperCase}
            </Link>
         )
      })
   }

   // eslint-disable-next-line consistent-return
   return (
      <BreadCrumbsStyle aria-label="breadcrumb">
         {renderPaths()}
      </BreadCrumbsStyle>
   )
}

export default withRouter(Breadcrumbs)

const BreadCrumbsStyle = styled(MUIBreadcrumbs)`
   .MuiTypography-root {
      margin: 0;
      color: #1976d2;
      -webkit-text-decoration: none;
      text-decoration: none;
      color: black;
      font-family: 'Open Sans';
      font-weight: 400;
      font-size: 14px;
      line-height: 16.8px;
   }
   .MuiLink-root {
      margin: 0;
      font-family: 'Open Sans';
      font-weight: 400;
      font-size: 14px;
      line-height: 16.8px;
      color: gray;
   }
`
