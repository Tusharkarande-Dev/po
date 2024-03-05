import React from "react";

interface EmailTemplateProps {
  clientName: string;
  clientEmail: string;
  message: string;
}

const EmailTemplate = ({clientName, clientEmail, message}: EmailTemplateProps) => {
  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <p className="text-lg font-bold mb-2">
          hey I&apos;m {clientName} and We&apos;re looking for a skilled developer to join our team!
        </p>
        <p className="mb-2">
           {message}
        </p>
        <p>Here you can reached out us {clientEmail}</p>
      </div>
    </div>
  );
};

export default EmailTemplate;
