import './App.css'
import { StickyScrollRevealDemo } from './components/BottomSection.tsx';
import MiddleSection from './components/MiddleSection.tsx';
import { OrbitView } from './components/OrbitView.tsx';
import { FloatingNav } from "./components/ui/floating-navbar.tsx"

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Pricing",
    link: "/pricing",
  }
];

function App() {
  return (
    <div>
      <div className='w-full'>
        <FloatingNav navItems={navItems} className={`flex-row items-center justify-between`} />
        <MiddleSection />
        <OrbitView />
        <StickyScrollRevealDemo />
      </div>
    </div >
  )
}

export default App
