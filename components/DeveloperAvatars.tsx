import React from 'react';
import Image from 'next/image';

const DeveloperAvatars = () => {
  // Generate some sample avatars (you can replace with actual user data)
  const avatars = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    src: `https://i.pravatar.cc/150?img=${i + 1}`, // Using Pravatar for demo
    alt: `User ${i + 1}`,
    zIndex: 15 - i // For the overlapping effect
  }));

  return (
    <div className="flex items-center">
      <div className="relative">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">We process transactions swiftly</h2>
        <h3 className="text-gray-600 mb-4 font-medium">
          Trusted by thousands of customers like you
        </h3>
        
        <div className="relative h-16 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex space-x-0 overflow-x-auto pb-4 hide-scrollbar">
            {avatars.map((avatar) => (
              <div 
                key={avatar.id}
                className="flex-shrink-0 relative transition-transform hover:scale-110"
                style={{ zIndex: avatar.zIndex, marginLeft: avatar.id > 1 ? '-12px' : '0' }}
              >
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white shadow-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperAvatars;
