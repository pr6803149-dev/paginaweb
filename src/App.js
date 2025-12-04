import React, { useState } from 'react';  

const App = () => {  
  const texts = [  
    'Aquí va tu primer texto inspirador. Edítalo directamente en el código para cambiarlo.',  
    'Segundo panel: describe algo genial sobre tun o lo que sea.',  
    'Tercer texto listo para personalizar solo en el código fuente.',  
    'Cuarto: espacio para palabras que solo cambias como un pro.',  
    
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
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">Mis Paneles Café</h1>  
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