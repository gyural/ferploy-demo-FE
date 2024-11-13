import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  bgColor?: string;
}

const pastelColors = [
  '#FFC1CC', // Pastel Pink
  '#FFDDC1', // Pastel Peach
  '#FFF3B0', // Pastel Yellow
  '#C1FFC1', // Pastel Green
  '#C1E1FF', // Pastel Blue
  '#E1C1FF', // Pastel Purple
  '#FFC1E1', // Pastel Magenta
  '#D1FFC1', // Pastel Lime
];

export default function Avatar({ src, alt = 'Avatar', size = 45, bgColor }: AvatarProps) {
  // Randomly select a pastel color
  const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
  console.log('bgcolor', bgColor)
  return (
    <div
      className="flex items-center justify-center rounded-full overflow-hidden"
      style={{
        width: size,
        height: size,
        backgroundColor: bgColor ? `${bgColor}` : randomColor,
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{ width: size, height: size, objectFit: 'cover' }}
        />
      ) : (
        <span
          style={{
            fontSize: size * 0.4,
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          {alt[0]?.toUpperCase()}
        </span>
      )}
    </div>
  );
}