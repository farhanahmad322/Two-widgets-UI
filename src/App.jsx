import InfoWidget from './components/InfoWidget';
import GalleryWidget from './components/GalleryWidget';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl lg:max-w-6xl">
       
        <div className="hidden md:block"></div>

        <div className="w-full">
          <InfoWidget />

          <div className="shadow-2xl border-2 border-black mt-6"></div>

          <div className="mt-8">
            <GalleryWidget />
          </div>

          <div className="shadow-2xl border-2 border-black mt-8"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
