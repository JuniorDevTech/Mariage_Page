import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { fetchStats, fetchInvitations } from "../adminThunk";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";

import StatsCard from "../components/StatsCard";
import InvitationsTable from "../components/InvitationsTable";
import ExportPdfButton from "../components/ExportPdfButton";
import ExportExcelButton from "../components/ExportExcelButton";

import { logout } from "../adminSlice";

const DashboardPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const adminState = useAppSelector((state) => state.admin);

  const stats = adminState?.stats || {};
  const invitations = adminState?.invitations || [];

  const handleLogout = () => {
    dispatch(logout());
    navigate("/admin/login");
  };

  useEffect(() => {
    dispatch(fetchStats());
    dispatch(fetchInvitations());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-[#FAF7F4] p-10">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-5xl font-light">Dashboard Mariage</h1>

        <button
          onClick={handleLogout}
          className="
            rounded-full
            bg-red-500
            px-5
            py-3
            text-white
            transition
            hover:bg-red-600
          "
        >
          Déconnexion
        </button>
      </div>

      <div className="mb-8 flex justify-end gap-4">
        <ExportPdfButton invitations={invitations} />

        <ExportExcelButton invitations={invitations} />
      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-4">
        <StatsCard title="Invités" value={stats.total || 0} />

        <StatsCard title="Présents" value={stats.present || 0} />

        <StatsCard title="Absents" value={stats.absent || 0} />

        <StatsCard title="Accompagnants" value={stats.guests || 0} />
      </div>

      <InvitationsTable invitations={invitations} />
    </div>
  );
};

export default DashboardPage;
