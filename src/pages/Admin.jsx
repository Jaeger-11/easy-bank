import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const Admin = () => {
    // const navigate = useNavigate();
    useEffect(() => {
        window.location.href = 'https://easy-bank.sanity.studio/'
    }, [])

  return (
    <div className="flex flex-col h-[100vh] gap-[10vh] items-center justify-center">
       <h1 className="text-darkBlue text-bold text-3xl"> EASY-BANK CONTENT MANAGEMENT SYSTEM </h1>
       <p className="text-limeGreen italic">LOADING...</p>
    </div>
  )
}

export default Admin;