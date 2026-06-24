import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ExportExcelButton = ({ invitations }) => {
  const exportExcel = () => {
    const data = invitations.map((invitation) => ({
      Nom: invitation.fullName || "",

      Téléphone: invitation.phone || "",

      Présence: invitation.attendance ? "Présent" : "Absent",

      Message: invitation.message || "",
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Invités");

    worksheet["!cols"] = [
      { wch: 30 }, // Nom
      { wch: 18 }, // Téléphone
      { wch: 12 }, // Présence
      { wch: 50 }, // Message
    ];

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const fileData = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(fileData, "liste-invites-mariage.xlsx");
  };

  return (
    <button
      onClick={exportExcel}
      className="
        rounded-full
        bg-green-600
        px-6
        py-3
        text-white
        shadow-lg
        transition
        hover:scale-105
      "
    >
      📊 Télécharger Excel
    </button>
  );
};

export default ExportExcelButton;
