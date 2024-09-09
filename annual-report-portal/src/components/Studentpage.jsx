import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { CloudUploadIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';

const StudentPage = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { getRootProps, getInputProps } = useDropzone({
    accept: ['.pdf', '.docx', '.xlsx', '.jpg', '.png'],
    onDrop: (acceptedFiles) => {
      setFiles([...files, ...acceptedFiles]);
    }
  });

  const handleUpload = async () => {
    setLoading(true);

    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file);
    });

    try {
      await axios.post('/api/student/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Files uploaded successfully!');
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Error uploading files. Please try again.');
    } finally {
      setLoading(false);
      setFiles([]);
    }
  };

  const handleViewAssignments = () => {
    navigate('/studentpage');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-500 to-indigo-600">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Student Portal</h2>

        <div
          {...getRootProps()}
          className="border-4 border-dashed border-gray-300 p-10 rounded-lg flex justify-center items-center flex-col cursor-pointer hover:bg-gray-50 transition duration-300"
        >
          <input {...getInputProps()} />
          <CloudUploadIcon className="h-12 w-12 text-gray-400" />
          <p className="text-gray-500 mt-2">
            Drag & drop your files here or click to select files
          </p>
          <p className="text-gray-500 mt-2 text-sm">Accepted formats: PDF, Word, Excel, Images</p>
        </div>

        <ul className="mt-4">
          {files.map((file, index) => (
            <li key={index} className="text-gray-600">
              {file.name}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-center space-y-4">
          <button
            className={`px-6 py-2 w-full rounded-md text-center text-white shadow-md transform transition-transform duration-300 ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600 hover:scale-105'}`}
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Upload Files'}
          </button>
          <button
            className="px-6 py-2 w-full rounded-md text-center text-white shadow-md bg-green-500 hover:bg-green-600 hover:scale-105 transition-transform duration-300"
            onClick={handleViewAssignments}
          >
            View Reports 
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
