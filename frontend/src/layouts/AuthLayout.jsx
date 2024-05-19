import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <main
        className='max-w-4xl m-auto mt-10 md:mt-28 flex flex-col'
    >
        <img src="../img/logo.svg" alt="logo" className='max-w-xs' />

        <div>
            <Outlet />
        </div>
    </main>
  )
}
