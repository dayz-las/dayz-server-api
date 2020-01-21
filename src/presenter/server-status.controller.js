const dayzServerLib = require("dayz-server-lib");

exports.getServerStatusController = (req, res) => {
  dayzServerLib.status().then(serverStatus => {
    res.send({
      name: serverStatus.name,
      map: serverStatus.map,
      version: serverStatus.version,
      online: serverStatus.online,
      maxPlayers: serverStatus.maxPlayers,
      currentPlayers: serverStatus.currentPlayers
    });
  });
};
