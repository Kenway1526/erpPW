'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cerrar el desplegable si se hace clic fuera de él
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#f8f9ff]/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        
        {/* LOGO DE LA MARCA */}
        <div className="flex items-center gap-3 shrink-0">
          <Link className="flex items-center gap-2 group" href="/">
            <img
              alt="Kore HR Logo"
              className="h-9 w-9 object-contain rounded border border-slate-200/60 shadow-2xs"
              src="https://lh3.googleusercontent.com/aida/AEtjO1V-yB5nRnhbMHu4KeYbCRL_cioco1StOBj8VD8da-JYJBjWn2gY6oB4thzlUSLdjAlGWLREe15FF8F6u-f7cVRtQ-ebREQ5w9tQ9mPjDPq96QtqSqavWS_pHYyrBoIQYm14IYF4gUGziAweUFXbNPjlYDTV-eis-CMH0E3-PYvtCBY0toyTgX3wpzTj_x5aksOD1Q-QsR42N2jRCXlVLd9-qOcDJ1FIdZuoYueTLeFv0Iml1TJ_nXWDOq8"
            />
            <div className="leading-tight">
              <span className="text-lg font-extrabold tracking-tight text-[#0b1c30] flex items-center">
                Kore<span className="text-[#964900] ml-0.5">HR</span>
                <span className="ml-1.5 px-1.5 py-0.5 bg-[#ffdcc7]/60 text-[#964900] text-[9px] font-bold uppercase rounded border border-[#964900]/20">
                  ERP
                </span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium block">
                Portal Operativo Interno
              </span>
            </div>
          </Link>
        </div>

        {/* BARRA DE NAVEGACIÓN Y MENÚ DESPLEGABLE */}
        <nav className="flex items-center gap-1 text-xs md:text-sm font-semibold text-slate-600">
          
          {/* Módulos completos en Pantalla Grande (Desktop XL) */}
          <Link className="hidden xl:inline-block px-3 py-2 rounded-lg hover:text-[#964900] hover:bg-slate-100 transition-colors whitespace-nowrap" href="#modulos">
            Módulos Operativos
          </Link>
          <Link className="hidden xl:inline-block px-3 py-2 rounded-lg hover:text-[#964900] hover:bg-slate-100 transition-colors whitespace-nowrap" href="#tablero">
            Tablero en Vivo
          </Link>
          <Link className="hidden xl:inline-block px-3 py-2 rounded-lg hover:text-[#964900] hover:bg-slate-100 transition-colors whitespace-nowrap" href="#centros">
            Centros de Trabajo
          </Link>
          <Link className="hidden xl:flex px-3 py-2 rounded-lg text-[#964900] font-bold items-center gap-1 hover:bg-[#ffdcc7]/30 transition-colors whitespace-nowrap" href="#chatbot">
            <span className="material-symbols-outlined text-base">smart_toy</span>
            <span>Consola IA</span>
          </Link>
          <Link className="hidden xl:inline-block px-3 py-2 rounded-lg hover:text-[#964900] hover:bg-slate-100 transition-colors whitespace-nowrap" href="#auditoria">
            Auditoría &amp; NOM-151
          </Link>

          {/* BOTÓN DESPLEGABLE "NAVEGACIÓN" (Visible en pantallas medianas y chicas) */}
          <div className="relative xl:hidden" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-3 py-1.5 rounded-xl text-[#0b1c30] bg-slate-100 hover:bg-slate-200 border border-slate-200 font-bold flex items-center gap-1.5 text-xs transition-all shadow-2xs"
            >
              <span className="material-symbols-outlined text-base text-[#964900]">menu</span>
              <span>Navegación</span>
              <span className="material-symbols-outlined text-base text-slate-500">
                {dropdownOpen ? 'expand_less' : 'expand_more'}
              </span>
            </button>

            {/* MENÚ FLOTANTE */}
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 flex flex-col gap-0.5">
                <Link
                  onClick={() => setDropdownOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-[#964900] hover:bg-slate-50 transition-colors flex items-center gap-2"
                  href="#modulos"
                >
                  <span className="material-symbols-outlined text-base text-slate-400">widgets</span>
                  Módulos Operativos
                </Link>
                <Link
                  onClick={() => setDropdownOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-[#964900] hover:bg-slate-50 transition-colors flex items-center gap-2"
                  href="#tablero"
                >
                  <span className="material-symbols-outlined text-base text-slate-400">dashboard</span>
                  Tablero en Vivo
                </Link>
                <Link
                  onClick={() => setDropdownOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-[#964900] hover:bg-slate-50 transition-colors flex items-center gap-2"
                  href="#centros"
                >
                  <span className="material-symbols-outlined text-base text-slate-400">domain</span>
                  Centros de Trabajo
                </Link>
                <Link
                  onClick={() => setDropdownOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-[#964900] hover:bg-[#ffdcc7]/20 transition-colors flex items-center gap-2"
                  href="#chatbot"
                >
                  <span className="material-symbols-outlined text-base">smart_toy</span>
                  Consola IA
                </Link>
                <div className="h-px bg-slate-100 my-1"></div>
                <Link
                  onClick={() => setDropdownOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-[#964900] hover:bg-slate-50 transition-colors flex items-center gap-2"
                  href="#auditoria"
                >
                  <span className="material-symbols-outlined text-base text-slate-400">verified</span>
                  Auditoría &amp; NOM-151
                </Link>
              </div>
            )}
          </div>

        </nav>

        {/* BOTÓN DE ACCIÓN / INICIAR SESIÓN */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-xl bg-white border border-[#964900]/30 text-[#964900] hover:bg-[#ffdcc7]/20 shadow-2xs transition-all whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-base text-[#964900]">
              login
            </span>
            <span>Iniciar Sesión</span>
          </Link>
        </div>

      </div>
    </header>
  );
}