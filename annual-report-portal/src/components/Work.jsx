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
    <div className="work-section-wrapper">
      <div className="work-section-top">
       
        <h1 className="primary-heading">How It Works</h1>
        
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;