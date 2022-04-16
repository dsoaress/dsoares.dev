if application "Music" is running then
	tell application "Music"
		if player state is playing then
      set theTrack to name of current track
      set theArtist to artist of current track
      set theAlbum to album of current track
      set theDuration to duration of current track

      return theTrack & ";;" & theArtist & ";;" & theAlbum & ";;" & theDuration
    end if
	end tell
end if
