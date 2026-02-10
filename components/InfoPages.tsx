
import React from 'react';

interface Props {
  type: 'about' | 'contact' | 'terms';
  onClose: () => void;
}

const InfoPages: React.FC<Props> = ({ type, onClose }) => {
  const content = {
    about: {
      title: '¿QUIÉNES SOMOS?',
      subtitle: 'EL MANIFIESTO DELROCK',
      body: `El Rock de todos los Días, no es solo una página de noticias. Es un acto de rebelión contra el algoritmo. Nacimos en el ruido del under, entre cables pelados y amplificadores que zumban. Creemos en la música que tiene cicatrices, en el arte que incomoda y en el cine que te deja pensando en la oscuridad. Somos un equipo de melómanos, artistas y desadaptados digitales que buscan devolverle el alma a la prensa musical.`,
    },
    contact: {
      title: 'CONTACTO',
      subtitle: 'SINTONIZA NUESTRA FRECUENCIA',
      body: `¿Tienes una queja? ¿Una propuesta indecente? ¿Quieres colaborar? No nos busques en oficinas de cristal. Escríbenos a nuestra terminal central. Respondemos cuando el ruido nos lo permite.`,
      extra: (
        <div className="mt-8 space-y-4 mono font-bold uppercase text-red-600">
          <p>PRENSA@ELROCKDETODOSLOSDIAS.COM.MX</p>
          <p>MÉXICO // LATAM // TOKYO</p>
        </div>
      )
    },
    terms: {
      title: 'TÉRMINOS',
      subtitle: 'LAS REGLAS DEL JUEGO',
      body: `1. El ruido es obligatorio. 2. Respetamos la autoría, respeta tú la nuestra. 3. Todo el contenido generado por IA es supervisado por humanos con mal gusto. 4. No somos responsables de los daños auditivos causados por las bandas que recomendamos. 5. Disfruta bajo tu propio riesgo.`,
    }
  };

  const page = content[type];

  return (
    <div className="fixed inset-0 z-[200] bg-black p-6 md:p-20 overflow-y-auto animate-in slide-in-from-bottom duration-500">
      <button 
        onClick={onClose}
        className="fixed top-8 right-8 bg-red-600 text-white p-4 font-black mono hover:bg-white hover:text-black transition-colors z-50 shadow-[6px_6px_0px_#fff]"
      >
        VOLVER [X]
      </button>

      <div className="max-w-4xl mx-auto py-20">
        <div className="border-[15px] border-white p-12 md:p-20 rotate-[-1deg] bg-zinc-900 shadow-[30px_30px_0px_#dc2626]">
          <h1 className="text-7xl md:text-9xl font-syne font-black tracking-tighter leading-none mb-4 uppercase italic text-white">
            {page.title}
          </h1>
          <p className="mono text-red-600 font-black tracking-widest mb-12 uppercase">{page.subtitle}</p>
          
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl font-bold mono text-zinc-300 leading-tight">
              {page.body}
            </p>
            {'extra' in page && page.extra}
          </div>

          <div className="mt-20 flex justify-between items-center opacity-20 mono text-[10px] uppercase font-black">
            <span>El Rock de Todos los Días v2.5 // 2026</span>
            <span>PROPIEDAD DEL UNDERGROUND</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPages;
