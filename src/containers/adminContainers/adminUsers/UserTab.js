import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
// import Typography from '@mui/material/Typography'
import TabPanel from '@mui/lab/TabPanel'
import Box from '@mui/material/Box'
import styled from '@emotion/styled'

// function TabPanel(props) {
//    const { children, value, index, ...other } = props

//    return (
//       <div
//          role="tabpanel"
//          hidden={value !== index}
//          id={`vertical-tabpanel-${index}`}
//          aria-labelledby={`vertical-tab-${index}`}
//          {...other}
//       >
//          {value === index && (
//             <Box sx={{ p: 3 }}>
//                <Typography>{children}</Typography>
//             </Box>
//          )}
//       </div>
//    )
// }

export default function UserTab({ tabsArray }) {
   const [value, setValue] = React.useState('1')

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <Box
         sx={{
            flexGrow: 1,
            display: 'flex',
            height: 224,
         }}
      >
         <StyledTabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
         >
            {tabsArray.map((el) => (
               <StyledTab key={el.id} label={el.label} value={el.value} />
            ))}
         </StyledTabs>
         {tabsArray.map((el) => {
            return (
               <TabPanel key={el.id} value={el.value}>
                  {el.Component}
               </TabPanel>
            )
         })}
      </Box>
   )
}

const StyledTab = styled(Tab)`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #222222;
   text-transform: none;
   &.Mui-selected {
      color: #f34901;
   }
`
const StyledTabs = styled(Tabs)`
   .MuiTabs-indicator {
      background: none;
   }
`
