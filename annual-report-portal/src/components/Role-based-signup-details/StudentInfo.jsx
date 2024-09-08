import React from 'react'

const StudentInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl text-center font-bold mb-4">Register as Student</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter name here"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter email here"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number here"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Institute Name</label>
            <input
              type="text"
              placeholder="Enter institute name here"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Student ID Number</label>
            <input
              type="text"
              placeholder="Enter student ID number"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Department</label>
            <input
              type="text"
              placeholder="Enter department here"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Year of Study</label>
            <input
              type="text"
              placeholder="Enter year of study (e.g., 1st year, 2nd year)"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Program of Study</label>
            <input
              type="text"
              placeholder="Enter program of study (e.g., B.Tech, M.Sc.)"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">CGPA/Academic Performance (optional)</label>
            <input
              type="text"
              placeholder="Enter CGPA or academic performance"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Clubs/Extracurricular Activities (optional)</label>
            <input
              type="text"
              placeholder="Enter clubs or extracurricular activities"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Profile Picture (optional)</label>
            <input
              type="file"
              className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:ring-2 focus:ring-green-500"
            >
              Complete Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default StudentInfo
