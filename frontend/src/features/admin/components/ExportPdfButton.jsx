import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const ExportPdfButton = ({ invitations }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Liste des invités - Mariage Daniel & Léa", 14, 20);

    const tableData = invitations.map((invitation) => [
      invitation.fullName || "-",
      invitation.phone || "-",
      invitation.attendance ? "Présent" : "Absent",
      invitation.message || "-",
    ]);

    autoTable(doc, {
      head: [["Nom", "Téléphone", "Présence", "Message"]],
      body: tableData,
      startY: 30,

      styles: {
        fontSize: 10,
      },

      headStyles: {
        fillColor: [200, 107, 74], // Terracotta
      },
    });

    doc.save("liste-invites-mariage.pdf");
  };

  return (
    <button
      onClick={generatePDF}
      className="
        rounded-full
        bg-[#C86B4A]
        px-6
        py-3
        text-white
        shadow-lg
        transition
        hover:scale-105
      "
    >
      📄 Télécharger PDF
    </button>
  );
};

export default ExportPdfButton;
