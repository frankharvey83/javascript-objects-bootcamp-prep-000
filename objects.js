var playlist = { name: "title"};

function updatePlaylist(playlist, artistName, songTitle)  {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  var playlist = {artistName: "Kanye"};
delete playlist.artistName
}
