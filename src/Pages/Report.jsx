import { FaFilePdf } from "react-icons/fa6";
import { useQuery } from "react-query";
import { getUserData } from "../services/apiUser";
import { useUser } from "@clerk/clerk-react";

import jsPDF from "jspdf";
import "jspdf-autotable";

function Report() {
  const { user } = useUser();
  const { isLoading, data, error } = useQuery({
    queryFn: getUserData,
    queryKey: ["users"],
  });

  const userData = data?.find((item) => item.userId === user?.id);
  console.log(userData);
  console.log(data);

  function generatePdf() {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(20);
    doc.text("Patient Medical Report", 14, 22);

    // Add patient info
    doc.setFontSize(12);
    doc.text(`Name: ${userData.userName}`, 14, 35);
    doc.text(`Age: ${userData.age}`, 14, 43);
    doc.text(`Gender: ${userData.gender}`, 14, 51);
    doc.text(`Blood Group: ${userData.bloodGroup}`, 14, 59);
    doc.text(`Phone: ${userData.phoneNumber}`, 14, 67);

    // Add appointment info
    doc.text(`Hospital: ${userData.hospitalName}`, 14, 80);
    doc.text(`Doctor: ${userData.doctorAppointed}`, 14, 88);
    doc.text(`Disease: ${userData.disease}`, 14, 96);
    doc.text(
      `Appointment Date: ${new Date(userData.created_at).toLocaleDateString()}`,
      14,
      104
    );

    // Add medicines table
    doc.autoTable({
      startY: 115,
      head: [["Prescribed Medicines"]],
      body: userData.medicine?.map((med) => [med]),
    });

    // Add footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(10);
      doc.text(
        `Page ${i} of ${pageCount}`,
        14,
        doc.internal.pageSize.height - 10
      );
      doc.text(
        `Patient ID: ${userData.userId}`,
        doc.internal.pageSize.width - 45,
        doc.internal.pageSize.height - 10
      );
    }

    // Save the PDF
    doc.save(`${userData.userName}_medical_report.pdf`);
  }

  return (
    <div className="flex border rounded-lg p-4 justify-between">
      <div className="flex gap-2 items-center">
        <FaFilePdf className="text-4xl text-gray-500" />
        <p className="text-gray-700">
          Your report of {data && data[0] ? data[0].hospitalName : ""} is here |
          Date: {new Date().toLocaleDateString()}
        </p>
      </div>
      <button
        className="font-semibold rounded-md text-blue-600 bg-white p-2 border border-blue-600 hover:border-blue-800 hover:text-blue-800 transition-all ease-linear"
        onClick={generatePdf}
      >
        Download
      </button>
    </div>
  );
}

export default Report;
