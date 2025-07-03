import React, { useState } from 'react';
import { X, Play, Image as ImageIcon } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video'; src: string; title: string } | null>(null);

  const images = [
    {
      src: "https://images.pexels.com/photos/7659567/pexels-photo-7659567.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Modern Treatment Room",
      category: "Facilities"
    },
    {
      src: "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Patient Care Session",
      category: "Treatment"
    },
    {
      src: "https://images.pexels.com/photos/6749739/pexels-photo-6749739.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Exercise Therapy",
      category: "Rehabilitation"
    },
    {
      src: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Manual Therapy",
      category: "Treatment"
    },
    {
      src: "https://images.pexels.com/photos/7659562/pexels-photo-7659562.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Consultation Room",
      category: "Facilities"
    },
    {
      src: "https://images.pexels.com/photos/6111593/pexels-photo-6111593.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Gym Equipment",
      category: "Equipment"
    }
  ];

  const videos = [
     {
      src: "/videos/v1.mp4",
      title: "Physiotherapy Techniques",
      thumbnail: "/images/v1.png" 
    },
   {
      src: "/videos/v2.mp4",
      title: "Physiotherapy Techniques",
      thumbnail: "/images/v2.png" 
    },
     {
      src: "/videos/v3.mp4",
      title: "Physiotherapy Techniques",
      thumbnail: "/images/v3.png" 
    }
  ];

  const openMedia = (type: 'image' | 'video', src: string, title: string) => {
    setSelectedMedia({ type, src, title });
  };

  const closeMedia = () => {
    setSelectedMedia(null);
  };

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Gallery</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Take a look at our state-of-the-art facilities and see our team in action providing exceptional care.
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                onClick={() => openMedia('image', image.src, image.title)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ImageIcon className="h-8 w-8 text-white mb-2" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h4 className="text-white font-semibold">{image.title}</h4>
                  <p className="text-gray-300 text-sm">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Gallery */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Treatment Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                onClick={() => openMedia('video', video.src, video.title)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 p-4 rounded-full group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-teal-600" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h4 className="text-white font-semibold">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeMedia}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              
              {selectedMedia.type === 'image' ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              ) : (
                <div className="w-full aspect-video">
  <video
    src={selectedMedia.src}
    title={selectedMedia.title}
    className="w-full h-full rounded-lg"
    controls
    autoPlay
  />
</div>

              )}
              
              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-semibold">{selectedMedia.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;