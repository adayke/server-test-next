import React from "react";

type Server = {
  customer_id: string;
  server_name: string;
  server_type: string;
};

type ServerListProps = {
  servers: Server[];
  onSelect: (server: Server) => void;
};

const ServerList: React.FC<ServerListProps> = ({ servers, onSelect }) => {
  return (
    <div>
      {servers.map((server) => (
        <div
          key={server.customer_id}
          onClick={() => onSelect(server)}
          className="cursor-pointer p-2 hover:bg-gray-200"
        >
          {server.server_name}
        </div>
      ))}
    </div>
  );
};

export default ServerList;
