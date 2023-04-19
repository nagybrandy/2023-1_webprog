import { exampleTracks } from "../../domain/track";
import { TrackForm } from "./TrackForm";
import { Track } from "./Track";
import { useState, useEffect } from "react";

const defaultState = {
  artist: "",
  title: "",
  length: "",
  thumbnailURL: "",
  spotifyURL: "",
  chordsURL: "",
  lyricsURL: "",
};

export function Tracks() {
  const [open, setOpen] = useState(false)
  const [tracks, setTracks] = useState(exampleTracks);
  const [formState, setFormState] = useState(defaultState)
  
  useEffect(()=>{
    console.log(tracks)
  }, [tracks])
  
  // event handlers
  const handleOpen = ()=> {
    setOpen(true)
    setFormState(defaultState)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    handleClose()
    const newtrack = formState
    newtrack.id = Math.random().toString()
    setTracks([...tracks, newtrack])

  }
  const handleClose = ()=> {
    setOpen(false)
  }
  return (
    <>
      <div className="ui container">
        <button href="#" className="ui right floated green button" id="newModal" onClick={handleOpen} >
          <i className="plus icon"></i>
          New track
        </button>
        <h1>Tracks</h1>
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th>Artist</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => (
              <Track key={track.id} track={track} />
            ))}
          </tbody>
        </table>
      </div>

      <TrackForm open={open} handleClose={handleClose} formState={formState} setFormState={setFormState} handleSubmit={handleSubmit}/>
    </>
  );
}
