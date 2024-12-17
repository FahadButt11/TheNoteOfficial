import React from 'react'
// import TopBar from './components/TopBar';
// import Header from './components/Header';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import Banner from '../components/Banner';
import Services from '../components/Services';
// import Footer from './components/Footer';
import BreatheLuxury from '../components/BreatheLuxury';
import './styles.css';

const Home = () => {
  const products = [
    { image: 'dusk-02-02.webp', name: 'Dusk', price: 'Rs 3899' },
    { image: 'intenso-02 (1).webp', name: 'Intenso', price: 'Rs 4199' },
  ];
  return (
    <div>
      <HeroSection title="INTENSO" description="A bold symphony..." buttonLabel="SHOP NOW" />
      <ProductGrid products={products} />
      <Banner title="FOR HIM" description="Unleash his charisma..." buttonLabel="SHOP NOW" />
      <BreatheLuxury />
      <Services />
    </div>
  )
}

export default Home
