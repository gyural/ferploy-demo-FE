// components/ImageUploadModal.tsx
import React from 'react';
import { FiUpload } from 'react-icons/fi';

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (files: FileList | File[]) => void;
}

const ImageUploadModal: React.FC<ImageUploadModalProps> = ({ isOpen, onClose, onUpload }) => {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      onUpload(files);
      onClose(); // Close modal after file upload
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex justify-center">
          <input
              ref={fileInputRef}
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              multiple
              onChange={handleFileChange}
              className="block w-1/3 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
                         file:rounded-md file:border-0 file:text-sm file:font-semibold 
                         file:bg-blue-500 file:text-white hover:file:bg-blue-600 cursor-pointer 
                         mb-4" // Style the input
            />
           
           
            
          </div>
        </div>
      )}
    </>
  );
};

export default ImageUploadModal;