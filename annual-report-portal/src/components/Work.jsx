
import React from "react";

const Work = () => {
  const workInfoData = [
    {
      title: "Users",
      text: "Submit your academic records and achievements to InsightEDU. The platform reviews and organizes this data, analyzes it to highlight key performance metrics and trends, and creates a visual annual report. ",
    },
    {
      title: "Admin",
      text: "Admins have the ability to review and make changes to student data and reports. They can update, edit, and manage academic records to ensure accuracy and completeness",
    },
    {
      title: "Super Admin",
      text: "With full editing capabilities, super admins can make necessary changes and maintain high reporting standards across all institutions.",
    },
  ];
  
  return (
    <div className="mt-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold max-w-[700px] text-center">How It Works</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-8">
        {workInfoData.map((data) => (
          <div className="w-[290px] min-h-[350px] bg-blue-100 p-4 flex flex-col items-center justify-center text-center rounded-lg text-[#505050] mx-4 my-4" key={data.title}>
            <h2 className="my-4 text-xl font-semibold">{data.title}</h2>
            <p className="flex items-center font-semibold">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
