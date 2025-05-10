import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import Left from '../components/LayoutComponent/Left';
import Right from '../components/LayoutComponent/Right';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div className='font-poppins w-11/12 mx-auto'>
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav> <Navbar></Navbar></nav>
            <main className='grid grid-cols-12 mt-5'>
                <aside className='col-span-3'><Left></Left></aside>
                <section className='col-span-6'><Outlet></Outlet> </section>
                <aside className='col-span-3'><Right></Right></aside>
            </main>
        </div>
    );
};

export default HomeLayout;