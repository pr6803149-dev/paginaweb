import React, { useState } from 'react';  

const App = () => {  
  const texts = [  
    'La Unidad 1 estudia los modelos de arquitectura de computadoras y los componentes fundamentales del sistema. Entre los modelos de arquitectura se encuentran las arquitecturas clásicas como Von Neumann y Harvard, que organizan la memoria y los buses de distintas formas; las arquitecturas segmentadas o pipeline, que dividen la ejecución de instrucciones en etapas para aumentar el rendimiento; y las arquitecturas de multiprocesamiento, que utilizan varios procesadores trabajando en paralelo. En el análisis de componentes se aborda la CPU, formada por la ALU, que realiza operaciones aritméticas y lógicas; los registros, que almacenan datos temporales; y los buses, que permiten la comunicación entre los distintos elementos del sistema. También se estudia la memoria, diferenciando entre la memoria principal (RAM), que guarda instrucciones y datos en uso, y la memoria caché, que acelera el acceso a la información más utilizada.El sistema de entrada y salida incluye distintos métodos de transferencia: la E/S programada, donde la CPU controla directamente el dispositivo; la E/S mediante interrupciones, donde el dispositivo avisa a la CPU cuando está listo; y el acceso directo a memoria (DMA), que permite transferir datos sin intervención del procesador. Además, existen canales y procesadores de E/S que gestionan estas operaciones de forma autónoma. Finalmente, se revisan los buses del sistema, sus tipos (datos, direcciones y control), su estructura y su jerarquía, que organiza la comunicación interna según la velocidad y función de cada bus.',  
    ' La Unidad 2 estudia la estructura y funcionamiento de la CPU. Explica cómo se organiza el procesador y cómo sus componentes trabajan juntos para ejecutar instrucciones. Se analizan los registros, divididos en registros visibles para el usuario, registros de control y registros de estado, que permiten almacenar datos, gestionar operaciones internas y registrar condiciones del sistema. También se describe el ciclo de instrucción, compuesto por las etapas de búsqueda, decodificación y ejecución, que permiten procesar cada instrucción de manera ordenada. Finalmente, se revisan los modos de direccionamiento, que son las distintas formas en que la CPU accede a datos e instrucciones en memoria, los cuales varían según el procesador utilizado. ',  
    ' La Unidad 3 trata sobre la selección de componentes necesarios para el ensamble de equipos de cómputo. Inicia con el análisis del chipset, que integra los elementos fundamentales para el funcionamiento de la computadora: la CPU como procesador principal, el controlador de buses que gestiona la comunicación interna, los sistemas de entrada y salida, el manejo de interrupciones, el controlador de acceso directo a memoria (DMA), los circuitos de temporización que sincronizan las operaciones y los controladores de video encargados del procesamiento gráfico. También se aborda el almacenamiento, donde se consideran dispositivos como discos duros, unidades de estado sólido y otros medios utilizados para guardar información. Se revisan además las distintas fuentes de almacenamiento que pueden emplearse según las necesidades del equipo. Finalmente, se analizan los ambientes de servicio en los que se utilizarán los equipos —negocios, industria o comercio electrónico— ya que cada entorno requiere un tipo específico de hardware en cuanto a rendimiento, capacidad y confiabilidad.  ',  
    '  La uidad 4 El Procesamiento Paralelo (4.0) se enfoca en la ejecución simultánea de múltiples tareas o instrucciones para aumentar la velocidad y eficiencia de la computación. Los Aspectos básicos de la computación paralela (4.1) incluyen conceptos como la concurrencia, la sincronización y la comunicación entre los diferentes procesadores. El tema se desarrolla al estudiar los Tipos de computación paralela (4.2). Esto abarca su Clasificación, a menudo basada en la taxonomía de Flynn (SIMD, MIMD, etc.), y la distinción entre Computadoras Secuenciales (el modelo tradicional de un solo procesador) y las estructuras paralelas. También se analiza la Organización de direcciones de memoria para asegurar que los múltiples procesadores puedan acceder a los datos de manera correcta. Los sistemas paralelos se dividen en dos grandes categorías, dependiendo de cómo manejan la memoria: Sistemas de Memoria Compartida (4.3) En estos sistemas, todos los procesadores comparten un espacio de direcciones de memoria única. Multiprocesadores: Son el tipo más común, donde varias CPU acceden a la misma memoria. Redes de interconexión dinámica: Utilizan una topología de conmutación que puede cambiar activamente la ruta de comunicación entre procesadores y memoria, permitiendo flexibilidad. Medio compartido: Se refiere a un bus común que todos los procesadores usan para comunicarse y acceder a la memoria (similar a una arquitectura de Von Neumann extendida al paralelismo). Conmutadas: Se refiere a sistemas que utilizan switchs o conmutadores para establecer las conexiones de comunicación, permitiendo múltiples rutas concurrentes sin depender de un único bus. Sistemas de Memoria Distribuida (4.4) En estos sistemas, cada procesador tiene su propia memoria local y los procesadores se comunican mediante el envío de mensajes a través de una red. Multicomputadoras: Son sistemas compuestos por Múltiples computadoras interconectadas, donde cada una funciona independientemente. Redes de interconexión estáticas: Utilizan una topología fija (como mallas, anillos o hipercubos) para conectar los procesadores. Las rutas de comunicación no cambian dinámicamente. Finalmente, el estudio de Casos de estudio (4.5) permite aplicar estos conceptos a ejemplos reales y analizar cómo se implementan los principios de procesamiento paralelo en arquitecturas comerciales o de supercomputación.  ',  
    
  ];  

  const [images, setImages] = useState([  
    'Unidad 1',  
    'Unidad 2',  
    'Unidad 3',  
    'Unidad 4',  
  
  ]);  

  const handleImageChange = (index, url) => {  
    const newImages = [...images];  
    newImages[index] = url;  
    setImages(newImages);  
  };  

  return (  
    <div className="min-h-screen bg-gray-50 py-8">  
      <div className="max-w-6xl mx-auto px-4">  
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">ARQUITECTURA DE COMPUTADORAS 2025</h1>  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
          {images.map((img, index) => (  
            <div key={index} className="bg-amber-800 rounded-lg p-6 shadow-md min-h-[400px] flex flex-col items-center justify-center text-center text-white">  
              <div className="mb-4 flex flex-col items-center">  
                <img  
                  src={img}  
                  alt={`Imagen ${index + 1}`}  
                  className="w-full max-w-[250px] h-48 object-cover rounded-md mb-4"  
                />  
                <input  
                  type="url"  
                  placeholder="Pega aquí la URL de tu imagen"  
                  value={img}  
                  onChange={(e) => handleImageChange(index, e.target.value)}  
                  className="w-full max-w-[300px] p-2 rounded text-black text-sm"  
                />  
              </div>  
              <p className="w-full p-3 rounded bg-amber-700/50 text-white placeholder-gray-300 text-sm leading-relaxed">  
                {texts[index]}  
              </p>  
            </div>  
          ))}  
        </div>  
      </div>  
    </div>  
  );  
};  

export default App;