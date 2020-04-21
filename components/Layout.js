import Navbar from './Navbar'
import Head from 'next/head'
import ComingSoon from "react-coming-soon";



const Layout = (props) => (
    <div >
        <Head>
            <title>Mysuru</title>
            <link rel="shortcut icon" href="../assets/images/favicon.ico"/>
        </Head>
        <ComingSoon
            image="https://images.unsplash.com/photo-1517825684369-d6c28f2f82c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1942&q=80"
            title="Mysuru.org : Coming soon"
            date="Thu Jul 30 2020 00:00:00 GMT-0400 (Eastern Daylight Time)"
            bgColor="#fff"
            textColor="#fff"
            illustration="development"/>        
        <Navbar />
        {props.children} 
    </div>
)

export default Layout