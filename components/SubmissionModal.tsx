
import React, { useState } from 'react';

interface Props {
  type: 'estreno' | 'entrevista';
  onClose: () => void;
}

const SubmissionModal: React.FC<Props> = ({ type, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white text-black w-full max-w-2xl p-8 md:p-12 relative border-[10px] border-black shadow-[20px_20px_0px_#dc2626] rotate-[-1deg]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-black text-white px-3 py-1 font-black mono hover:bg-red-600 transition-colors"
        >
          X
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="border-b-4 border-black pb-4 mb-8">
              <h2 className="text-4xl md:text-5xl font-syne font-black tracking-tighter uppercase leading-none">
                {type === 'estreno' ? 'EXPEDIENTE: ESTRENO' : 'EXPEDIENTE: ENTREVISTA'}
              </h2>
              <p className="mono text-xs font-black uppercase mt-2 text-red-600">Confidencial - Solo para el Under</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="mono text-[10px] font-black uppercase">Nombre de la Banda / Alias</label>
                <input required type="text" className="w-full border-4 border-black p-3 mono text-sm focus:bg-zinc-100 outline-none" placeholder="EJ. LOS RUIDOSOS" />
              </div>
              <div className="space-y-2">
                <label className="mono text-[10px] font-black uppercase">Correo de Contacto</label>
                <input required type="email" className="w-full border-4 border-black p-3 mono text-sm focus:bg-zinc-100 outline-none" placeholder="BANDA@MAIL.COM" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="mono text-[10px] font-black uppercase">
                {type === 'estreno' ? 'Link al Track (Soundcloud/Spotify/Drive)' : '¿Por qué deberíamos entrevistarte?'}
              </label>
              <textarea required className="w-full border-4 border-black p-3 mono text-sm focus:bg-zinc-100 outline-none h-32" placeholder="..." />
            </div>

            <button type="submit" className="w-full bg-black text-white py-4 font-syne font-black text-xl hover:bg-red-600 transition-all uppercase tracking-widest shadow-[6px_6px_0px_#ccc]">
              Enviar al Radar
            </button>
          </form>
        ) : (
          <div className="py-20 text-center space-y-6">
            <div className="inline-block bg-red-600 text-white p-6 rotate-12 shadow-xl border-4 border-black">
              <h3 className="text-4xl font-syne font-black">RECIBIDO</h3>
            </div>
            <p className="mono font-bold text-xl uppercase">Hemos captado tu señal. Si el ruido es auténtico, nos pondremos en contacto.</p>
            <button 
              onClick={onClose}
              className="mt-8 underline font-black mono uppercase hover:text-red-600"
            >
              Volver al fanzine
            </button>
          </div>
        )}

        {/* Tape Effect */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-12 bg-zinc-200/50 rotate-2 pointer-events-none opacity-50 border border-black/10 shadow-sm"></div>
      </div>
    </div>
  );
};

export default SubmissionModal;
