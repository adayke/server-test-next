import React, { useState, useEffect } from "react";

type Server = {
  customer_id: string;
  server_name: string;
  server_type: string;
};

type ServerEditFormProps = {
  selectedServer: Server | null;
  onEdit: (server: Server) => void;
};

const ServerEditForm: React.FC<ServerEditFormProps> = ({
  selectedServer,
  onEdit,
}) => {
  const [server, setServer] = useState<Server | null>(null);

  useEffect(() => {
    setServer(selectedServer);
  }, [selectedServer]);

  const handleEditClick = () => {
    if (server) {
      onEdit(server);
    }
  };

  if (!server) return <div>Please select a server</div>;

  return (
    <div className="p-4">
      <input
        type="text"
        value={server.server_name}
        onChange={(e) => setServer({ ...server, server_name: e.target.value })}
        className="p-2 border border-gray-300 rounded"
      />
      <select
        value={server.server_type}
        onChange={(e) => setServer({ ...server, server_type: e.target.value })}
        className="p-2 mt-4 border border-gray-300 rounded"
      >
        <option value="vds">VDS</option>
        <option value="dedicated">Dedicated</option>
        <option value="hosting">Hosting</option>
      </select>

      <button
        onClick={handleEditClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Edit
      </button>
    </div>
  );
};

export default ServerEditForm;
