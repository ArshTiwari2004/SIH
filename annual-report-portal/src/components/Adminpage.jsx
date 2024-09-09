import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { CloudUploadIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reportType, setReportType] = useState('');
  const navigate = useNavigate();

  const { getRootProps, getInputProps } = useDropzone({
    accept: [
      '.zip',
      '.xlsx',
      '.xls',
      '.csv',
      '.txt',
      '.docx',
      '.pdf',
      'application/vnd.google-apps.spreadsheet'
    ],
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
      await axios.post('/api/admin/upload', formData, {
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

  const handleGenerateReport = async () => {
    if (!reportType) {
      alert('Please select a report type.');
      return;
    }

    try {
      setLoading(true);
      
      await axios.post(`/api/admin/generate-report`, { reportType });
      alert('Report generated successfully!');
    } catch (error) {
      console.error('Error generating report:', error);
      alert('Error generating report. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleViewReports = () => {
    navigate('/admin/reports'); 
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">Admin Upload & Report Generation</h2>

        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-300 p-8 rounded-lg flex justify-center items-center flex-col cursor-pointer"
        >
          <input {...getInputProps()} />
          <CloudUploadIcon className="h-12 w-12 text-gray-400" />
          <p className="text-gray-500 mt-2">
            Drag & drop your files here or click to select files
          </p>
          <p className="text-gray-500 mt-2 text-sm">Accepted formats: ZIP, Excel, CSV, Text, Google Sheets, PDF</p>
        </div>

        <ul className="mt-4">
          {files.map((file, index) => (
            <li key={index} className="text-gray-600">
              {file.name}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <label className="block text-gray-700">Select Report Type:</label>
          <select
            className="mt-2 p-2 border rounded-md w-full"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
          >
            <option value="">-- Select Report Type --</option>
            <option value="academic">Academic Performance</option>
            <option value="financial">Financial Statement</option>
            <option value="research">Research Publications</option>
            <option value="infrastructure">Infrastructure Development</option>
            <option value="achievements">Student & Faculty Achievements</option>
            <option value="extracurricular">Extracurricular Activities</option>
          </select>
        </div>

        <div className="flex justify-center items-center ">
  <div className="mt-6 flex text-center space-x-4">
    <button
      className={`px-4 py-2 rounded-md text-center text-white ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
      onClick={handleUpload}
      disabled={loading}
    >
      {loading ? 'Uploading...' : 'Upload Files'}
    </button>
    <button
      className={`px-4 py-2 rounded-md text-center text-white ${!reportType || loading ? 'bg-gray-400' : 'bg-indigo-500 hover:bg-indigo-600'}`}
      onClick={handleGenerateReport}
      disabled={!reportType || loading}
    >
      {loading ? 'Generating...' : 'Generate Report'}
    </button>
    <button
      className="px-4 py-2 rounded-md text-center text-white bg-green-500 hover:bg-green-600"
      onClick={handleViewReports}
    >
      View Reports
    </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default AdminPage;
