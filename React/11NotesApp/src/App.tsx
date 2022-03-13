import React from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
//import { data } from "./data"; // template
import Split from "react-split";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = React.useState<{ id: string; body: string }[]>();
  const [currentNoteId, setCurrentNoteId] = React.useState<string>(
    (notes && notes[0] && notes[0].id) || ""
  );

  React.useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    const notesObject =
      savedNotes !== null &&
      savedNotes !== "undefined" &&
      JSON.parse(savedNotes);
    notesObject && setNotes(notesObject);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    if (notes) {
      const newNotes = [...notes];
      newNotes.push(newNote);
      setNotes(newNotes);
    } else {
      setNotes([newNote]);
    }
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text: string) {
    if (notes) {
      // Try to rearrange the most recently-modified
      // not to be at the top
      setNotes(() => {
        const newArray:{ id: string; body: string }[] = [];
        notes.forEach((_,i) => {
          const oldNote = notes[i]
          if(oldNote.id === currentNoteId) {
            newArray.unshift({ ...oldNote, body: text })
          } else {
            newArray.push(oldNote)
          }
        });
        return newArray
      });

      /* const newNote = notes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote;
      });
      newNote && setNotes(newNote);*/
    }
  }

  function deleteNote(event: React.SyntheticEvent<HTMLFormElement>, noteId: string) {
    event.stopPropagation()
    setNotes(oldNotes => {
      return oldNotes?.filter((note => note.id !== noteId))
    })
  }

  function findCurrentNote() {
    const current = notes?.find((note) => {
      return note.id === currentNoteId;
    });

    return current ? current : notes ? notes[0] : null;
  }

  return (
    <main>
      {notes && notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
};

export default App;
