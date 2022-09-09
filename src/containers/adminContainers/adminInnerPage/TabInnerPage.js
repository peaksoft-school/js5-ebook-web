import * as React from 'react'
import { styled } from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import Tab from '@mui/material/Tab'
import { TabList } from '@mui/lab'

export function TabInnerPage({ about, bookFragment }) {
   const [selectedTab, setSelectedTab] = React.useState('1')

   const handleChange = (event, newValue) => {
      setSelectedTab(newValue)
   }
   return (
      <div>
         <div>
            <TabContext value={selectedTab}>
               <TabListStyle onChange={handleChange}>
                  <MuiTab label="О книге" value="1" />
                  <MuiTab label="Читать фрагмент" value="2" />
               </TabListStyle>
               <MuiTabs value="1">{1 && about}</MuiTabs>
               <MuiTabs value="2">{2 && bookFragment}</MuiTabs>
            </TabContext>
         </div>
      </div>
   )
}
const MuiTabs = styled(TabPanel)`
   padding: 0px;
`
const TabListStyle = styled(TabList)`
   .MuiTabs-indicator {
      height: 0px;
      padding: 0px;
      margin: 0%;
   }
`
const MuiTab = styled(Tab)`
   &.Mui-selected {
      color: #f34901;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      text-transform: none;
   }
   &.MuiTab-textColorPrimary {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      text-transform: none;
   }
`
