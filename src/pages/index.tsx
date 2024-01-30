import React, { useState } from "react";
import ServerList from "../components/ServerList";
import ServerEditForm from "../components/ServerEditForm";

type Server = {
  customer_id: string;
  server_name: string;
  server_type: string;
};

const Home: React.FC = () => {
  const [servers, setServers] = useState<Server[]>([
    {
      customer_id: "user1",
      server_name: "server7",
      server_type: "vds",
    },
    {
      customer_id: "user5",
      server_name: "server2",
      server_type: "dedicated",
    },
    {
      customer_id: "user3",
      server_name: "server4",
      server_type: "hosting",
    },
  ]);
  const [selectedServer, setSelectedServer] = useState<Server | null>(null);

  const handleSelectServer = (server: Server) => {
    setSelectedServer(server);
  };

  const handleEditServer = (updatedServer: Server) => {
    const updatedServers = servers.map((server) =>
      server.customer_id === updatedServer.customer_id ? updatedServer : server
    );
    setServers(updatedServers);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <div className="w-1/2 p-4">
          <ServerList servers={servers} onSelect={handleSelectServer} />
        </div>
        <div className="w-1/2 p-4">
          <ServerEditForm
            selectedServer={selectedServer}
            onEdit={handleEditServer}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
