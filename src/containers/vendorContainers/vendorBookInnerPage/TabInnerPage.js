import * as React from 'react'
import { styled } from '@mui/material'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

export function TabInnerPage({ about, bookFragment }) {
   const [selectedTab, setSelectedTab] = React.useState(0)

   const handleChange = (event, newValue) => {
      setSelectedTab(newValue)
   }
   return (
      <div>
         <div>
            <MuiTabs value={selectedTab} onChange={handleChange}>
               <MuiTab label="О книге" />
               <MuiTab label="Читать фрагмент" />
            </MuiTabs>
         </div>
         {selectedTab === 0 && about}
         {selectedTab === 1 && bookFragment}
      </div>
   )
}
const MuiTabs = styled(Tabs)`
   .MuiTabs-indicator {
      background: none;
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
