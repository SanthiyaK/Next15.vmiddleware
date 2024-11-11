import Link from 'next/link'


export default function page() {
  return (
    <>
    <div className='m-20'>NEXT JS-15: Authentication</div>
    <Link href="/signup"><button className='bg-blue-600 p-3 ml-20'>Sign UP</button></Link>
    <Link href="/login"><button className='bg-blue-600 p-3 ml-20'>Login</button></Link>
    </>
  )
}
