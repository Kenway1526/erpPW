'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'employee' | 'admin'>('employee');
  const [corporateId, setCorporateId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

const router = useRouter();

const handleAuthSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  setTimeout(() => {
    setIsSubmitting(false);
    setSubmitSuccess(true);

    setTimeout(() => {
      router.push('/');
    }, 1000);
  }, 1200);
};

  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] min-h-screen flex flex-col justify-between font-sans">
      {/* Header Superior */}
      <header className="fixed top-0 w-full z-50 bg-[#f8f9ff]/80 backdrop-blur-xl shadow-xs border-b border-slate-200/60">
        <div className="h-16 max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              alt="Kore HR Logo"
              className="h-8 w-8 object-contain rounded"
              src="https://lh3.googleusercontent.com/aida/AEtjO1V-yB5nRnhbMHu4KeYbCRL_cioco1StOBj8VD8da-JYJBjWn2gY6oB4thzlUSLdjAlGWLREe15FF8F6u-f7cVRtQ-ebREQ5w9tQ9mPjDPq96QtqSqavWS_pHYyrBoIQYm14IYF4gUGziAweUFXbNPjlYDTV-eis-CMH0E3-PYvtCBY0toyTgX3wpzTj_x5aksOD1Q-QsR42N2jRCXlVLd9-qOcDJ1FIdZuoYueTLeFv0Iml1TJ_nXWDOq8"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-lg tracking-tight text-[#0b1c30]">
                Kore HR
              </span>
              <span className="text-[10px] text-[#964900] uppercase tracking-wider font-bold">
                ENTERPRISE ERP
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              href="/"
            >
              Volver al Portal
            </Link>
            <div className="w-8 h-8 rounded-full bg-[#964900] flex items-center justify-center text-white shadow-sm">
              <span className="material-symbols-outlined text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Tarjeta Central de Login */}
      <main className="w-full pt-20 pb-8 flex-1 flex flex-col justify-center items-center px-4 sm:px-6">
        <div className="max-w-[460px] w-full bg-white rounded-2xl p-8 sm:p-10 shadow-xl shadow-slate-200/50 flex flex-col gap-6 border border-slate-100">
          
          {/* Header de Tarjeta */}
          <div className="flex flex-col items-center text-center gap-1.5">
            <div className="w-12 h-12 rounded-xl bg-[#ffdcc7]/50 flex items-center justify-center text-[#964900] mb-1">
              <span className="material-symbols-outlined text-[26px]">badge</span>
            </div>
            <h1 className="text-2xl font-bold text-[#0b1c30] tracking-tight">
              Iniciar Sesión
            </h1>
            <p className="text-sm text-slate-500">
              Acceso al Portal Operativo de Nómina y RRHH
            </p>
          </div>

          {/* Formulario */}
          <form className="flex flex-col gap-4" onSubmit={handleAuthSubmit}>
            {/* Campo ID/Email */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-xs font-semibold">
                <label className="text-[#0b1c30]" htmlFor="corporate-id">
                  {selectedRole === 'employee'
                    ? 'Correo o ID de empleado'
                    : 'ID de Administrador Global / Token Maestro'}
                </label>
              </div>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-[18px] pointer-events-none">
                  alternate_email
                </span>
                <input
                  className="w-full h-11 pl-10 pr-4 bg-[#f8f9ff]/60 focus:bg-white rounded-lg text-slate-800 text-sm outline-none transition-all border border-slate-200 focus:border-[#964900] focus:ring-1 focus:ring-[#964900]"
                  id="corporate-id"
                  placeholder={
                    selectedRole === 'employee'
                      ? 'usuario@empresa.com'
                      : 'admin@empresa.com'
                  }
                  required
                  type="text"
                  value={corporateId}
                  onChange={(e) => setCorporateId(e.target.value)}
                />
              </div>
            </div>

            {/* Campo Contraseña */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#0b1c30]" htmlFor="password">
                Contraseña de acceso
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-[18px] pointer-events-none">
                  lock
                </span>
                <input
                  className="w-full h-11 pl-10 pr-10 bg-[#f8f9ff]/60 focus:bg-white rounded-lg text-slate-800 text-sm outline-none transition-all border border-slate-200 focus:border-[#964900] focus:ring-1 focus:ring-[#964900]"
                  id="password"
                  placeholder="••••••••••••"
                  required
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  aria-label="Alternar visibilidad"
                  className="absolute right-3 text-slate-400 hover:text-slate-600 transition-colors"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Recordar & Olvidé contraseña */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none text-slate-600">
                <input
                  checked={rememberMe}
                  className="w-4 h-4 rounded text-[#964900] focus:ring-0 accent-[#964900] cursor-pointer"
                  type="checkbox"
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Mantener sesión iniciada</span>
              </label>
              <Link
                className="text-[#964900] hover:text-[#592900] font-bold transition-colors"
                href="#"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {/* Botón Principal (Café / Ámbar Corporativo) */}
            <button
              className="w-full h-11 bg-[#964900] hover:bg-[#723600] text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all mt-2 disabled:opacity-70"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">
                    sync
                  </span>
                  <span>Validando Credenciales...</span>
                </>
              ) : submitSuccess ? (
                <>
                  <span className="material-symbols-outlined text-[18px]">
                    check_circle
                  </span>
                  <span>Sesión Autorizada</span>
                </>
              ) : (
                <>
                  <span>Entrar al Sistema</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </>
              )}
            </button>
          </form>

          {/* Botones SSO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              className="h-10 px-3 bg-[#eff4ff] hover:bg-[#e5eeff] text-slate-700 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold transition-colors border border-slate-200/50"
              type="button"
            >
              <svg className="w-4 h-4" viewBox="0 0 23 23">
                <path d="M1 1h10v10H1z" fill="#f35325" />
                <path d="M12 1h10v10H12z" fill="#81bc06" />
                <path d="M1 12h10v10H1z" fill="#05a6f0" />
                <path d="M12 12h10v10H12z" fill="#ffba08" />
              </svg>
              <span>Microsoft Azure</span>
            </button>
            <button
              className="h-10 px-3 bg-[#eff4ff] hover:bg-[#e5eeff] text-slate-700 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold transition-colors border border-slate-200/50"
              type="button"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  fill="#EA4335"
                />
              </svg>
              <span>Google Workspace</span>
            </button>
          </div>
                    <p className="text-center text-xs text-slate-500">
            ¿No tienes una cuenta aún?
            <Link
              className="ml-1 font-bold text-[#964900] hover:text-[#592900] transition-colors"
              href="/registro"
            >
              Registrarse
            </Link>
          </p>
        </div>
      </main>

      {/* Footer Inferior de la Página */}
      <footer className="w-full bg-[#eff4ff]/60 py-4 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 bg-[#dce9ff] text-slate-800 rounded-full font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#964900]">verified_user</span>
              CFDI 4.0 Certificado
            </span>
            <span className="px-3 py-1 bg-[#dce9ff] text-slate-800 rounded-full font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#626200]">gavel</span>
              NOM-151
            </span>
            <span className="px-3 py-1 bg-[#dce9ff] text-slate-800 rounded-full font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#964900]">lock</span>
              SSL 256-Bit
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            <span>Entorno Seguro Transaccional © 2026 Kore HR Technologies. Todos los derechos reservados.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}