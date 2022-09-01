// import * as React from 'react'
// import { styled } from '@mui/material'
// import TabContext from '@mui/lab/TabContext'
// import Tab from '@mui/material/Tab'
// import TabPanel from '@mui/lab/TabPanel'
// import { TabList } from '@mui/lab'

// export function TabInnerPage({ about, bookFragment }) {
//    const [selectedTab, setSelectedTab] = React.useState(1)

//    const handleChange = (event, newValue) => {
//       setSelectedTab(newValue)
//    }
//    return (
//       <div>
//          <div>
//             <MuiTabs value={selectedTab}>
//                <TabListStyle onChange={handleChange}>
//                   <MuiTab label="О книге" value="1" />
//                   <MuiTab label="Читать фрагмент" value="2" />
//                </TabListStyle>
//                <TabPanel value="1">{1 && about}</TabPanel>
//                <TabPanel value="2">{2 && bookFragment}</TabPanel>
//             </MuiTabs>
//          </div>
//       </div>
//    )
// }
// const MuiTabs = styled(TabContext)`
//    .css-1aquho2-MuiTabs-indicator {
//       background: red;
//       bottom: 0;
//    }
// `
// const TabListStyle = styled(TabList)`
//    &.MuiTabs-indicator {
//       background: red;
//    }
// `
// const MuiTab = styled(Tab)`
//    &.Mui-selected {
//       color: #f34901;
//       font-family: 'Open Sans';
//       font-style: normal;
//       font-weight: 600;
//       font-size: 18px;
//       text-transform: none;
//    }
//    &.MuiTab-textColorPrimary {
//       font-family: 'Open Sans';
//       font-style: normal;
//       font-weight: 600;
//       font-size: 18px;
//       text-transform: none;
//    }
//    &.MuiTabs-indicator {
//       background: none;
//       bottom: 0;
//    }
// `
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
