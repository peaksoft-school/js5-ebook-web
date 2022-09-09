import React from 'react'
import { Outlet } from 'react-router'

export default function VendorHeader() {
   return (
      <div>
         <div main={<Outlet path="/me" />} />
         <h1>Sadyr</h1>
      </div>
   )
}
