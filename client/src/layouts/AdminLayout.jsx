import NavbarComponent from "../components/navbar"

/* eslint-disable react/prop-types */
const AdminLayout = ({children}) => {
  return (
    <div>
        <NavbarComponent />
       
        {children}
    </div>
  )
}

export default AdminLayout