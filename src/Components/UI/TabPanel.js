import * as React from 'react'
import styled from '@emotion/styled'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import MuiTabPanel from '@mui/lab/TabPanel'
import Tab from '@mui/material/Tab'

export default function TabPanel({ tabsArray, variant }) {
   const [value, setValue] = React.useState('1')
   const handleChange = (event, newValue) => {
      setValue(newValue)
   }
   return (
      <TabContext value={value}>
         <StyledTabListBlock>
            <StyledTabList
               onChange={handleChange}
               aria-label="lab API tabs example"
            >
               {tabsArray.map((el) => (
                  <StyledTab
                     variant={variant}
                     key={el.id}
                     label={el.label}
                     value={el.value}
                  />
               ))}
            </StyledTabList>
         </StyledTabListBlock>
         {tabsArray.map((el) => {
            return (
               <StyledTabPanel key={el.id} value={el.value}>
                  {el.Component}
               </StyledTabPanel>
            )
         })}
      </TabContext>
   )
}

const StyledTabPanel = styled(MuiTabPanel)`
   padding: 0px;
`
const StyledTabList = styled(TabList)`
   .MuiTabs-indicator {
      background: #f34901;
   }
`
const StyledTabListBlock = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`
const StyledTab = styled(Tab)`
   width: 192px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 15px;
   line-height: 130%;
   color: #222222;
   text-transform: none;
   &.Mui-selected {
      color: #f34901;
   }
`
