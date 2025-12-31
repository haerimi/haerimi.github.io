import icon from '@/assets/image/icon.png'

const Navigation = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              <img src={icon} alt="포트폴리오 아이콘"/>
            </div>
            <span className="font-bold text-lg">HALEY</span>
          </div>
          <div className="flex gap-8">
            <a href="#projects" className="text-gray-700 hover:text-black transition-colors">
              Project
            </a>
            <a href="#skills" className="text-gray-700 hover:text-black transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-700 hover:text-black transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

  )
}

export default Navigation
