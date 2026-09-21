export default function Navbar(){
    return(
        <nav className="flex items-center bg-orange-500 justify-between px-50 py-6">
            <h2 className="text-xl font bold">
                Kore HR
            </h2>
            <div className="flex flex-wrap gap-2">
                <a href="#personal" className="px-4 py-1.5 text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">Personal</a>
                <a href="#nomina" className="px-4 py-1.5 text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">Nómina</a>
                <a href="#incidencias" className="px-4 py-1.5 text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">Incidencias</a>
                <a href="#reports" className="px-4 py-1.5 text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">Reportes</a>
                <a href="#subs" className="px-4 py-1.5 text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">Subscripciones</a>
                <a href="#about" className="px-4 py-1.5 text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">Nosotros</a>
                <a href="#contact" className="px-4 py-1.5 text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">Contacto</a>
            </div>
        </nav>
    )
}