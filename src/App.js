import React, { useState } from 'react';

const App = () => {  
  const texts = [ /* (los textos que ya tienes) */ ];

  const [images, setImages] = useState([
    "https://www.digitecnia.com/wp-content/uploads/2017/08/partes-de-computadora-600x600.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/3e/CPU_architecture.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/Computer_components.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Parallel_computing.jpg"
  ]);

  const handleImageChange = (index, url) => {  
    const newImages = [...images];  
    newImages[index] = url;  
    setImages(newImages);  
  };  

  return (  
    <div className="min-h-screen bg-gray-50 py-8">  
      <div className="max-w-6xl mx-auto px-4">  
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
          ARQUITECTURA DE COMPUTADORAS 2025
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
          {images.map((img, index) => (  
            <div key={index} className="bg-amber-800 rounded-lg p-6 shadow-md min-h-[400px] flex flex-col items-center text-center text-white">  
              
              {/* Imagen */}
              <img  
                src={img}  
                alt={`Imagen ${index + 1}`}  
                className="w-full max-w-[250px] h-48 object-cover rounded-md mb-4"  
              />  

              {/* Input para cambiarla */}
              <input  
                type="url"  
                placeholder="URL de imagen"  
                value={img}  
                onChange={(e) => handleImageChange(index, e.target.value)}  
                className="w-full max-w-[300px] p-2 rounded text-black text-sm mb-4"  
              />  

              {/* Texto */}
              <p className="w-full p-3 rounded bg-amber-700/50 text-white text-sm leading-relaxed">  
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
