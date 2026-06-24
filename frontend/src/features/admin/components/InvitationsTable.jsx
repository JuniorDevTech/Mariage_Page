const InvitationsTable = ({ invitations }) => {
  return (
    <div className="overflow-x-auto rounded-3xl bg-white shadow-sm">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">Nom</th>
            <th className="p-4 text-left">Téléphone</th>
            <th className="p-4 text-left">Présence</th>
          </tr>
        </thead>

        <tbody>
          {invitations.map((invitation) => (
            <tr key={invitation._id} className="border-b">
              <td className="p-4">{invitation.fullName}</td>
              <td className="p-4">{invitation.phone}</td>
              <td className="p-4">
                {invitation.attendance ? "Présent" : "Absent"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvitationsTable;
