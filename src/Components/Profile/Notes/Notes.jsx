import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";

function Notes() {
  const [text, setText] = useState("");
  const [notesList, setNotesList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notesList"));
    if (storedNotes) {
      setNotesList(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notesList", JSON.stringify(notesList));
  }, [notesList]);

  const stripHtmlTags = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const handleSave = () => {
    if (text.trim() !== "") {
      const plainText = stripHtmlTags(text);
      if (editIndex !== null) {
        const updatedNotes = [...notesList];
        updatedNotes[editIndex] = plainText;
        setNotesList(updatedNotes);
        setEditIndex(null);
      } else {
        setNotesList([...notesList, plainText]);
      }
      setText("");
      document.getElementById("note-textarea").innerHTML = "";
    }
  };

  const handleClear = () => {
    setText("");
    setEditIndex(null);
    document.getElementById("note-textarea").innerHTML = "";
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setText(notesList[index]);
    document.getElementById("note-textarea").innerHTML = notesList[index];
  };

  const handleDelete = (index) => {
    const updatedNotes = notesList.filter((_, i) => i !== index);
    setNotesList(updatedNotes);
    if (editIndex === index) {
      handleClear();
    }
  };

  const filteredNotes = notesList.filter((note) =>
    note.toLowerCase().includes(searchText.toLowerCase())
  );

  const applyFormatting = (tag) => {
    const selection = window.getSelection();
    const selectedText = selection.toString();

    if (selectedText) {
      const range = selection.getRangeAt(0);
      const newNode = document.createElement(tag);
      newNode.textContent = selectedText;

      range.deleteContents();
      range.insertNode(newNode);

      setText(document.getElementById("note-textarea").innerHTML);
    }
  };

  const handleInputChange = (e) => {
    setText(e.target.innerHTML);
  };

  return (
    <div>
      <div className="bg-white p-3 border shadow-lg rounded-lg">
        <div className="md:flex md:gap-3 max-md:space-y-5">
          <div className="bg-pink-50 md:w-56 p-2">
            <div className="border bg-white flex items-center px-1">
              <span>
                <IoSearchOutline />
              </span>
              <input
                type="search"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                className="w-full text-xs border-none outline-none focus:outline-none"
                placeholder="Search Notes"
              />
            </div>
            <ul className="my-1 h-40 overflow-y-auto">
              {notesList.length === 0 ? (
                <li className="text-sm text-gray-500 italic text-center">
                  Add a note...
                </li>
              ) : (
                filteredNotes.map((each, i) => (
                  <li key={i} className="text-sm my-1 flex justify-between items-center">
                    <span className="mr-1 text-gray-800">• {each}</span>
                    <div className="flex gap-2">
                      <button
                        className="text-blue-500 underline text-xs"
                        onClick={() => handleEdit(i)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-500 underline text-xs"
                        onClick={() => handleDelete(i)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>

          <div className="bg-[#FBF4B1] w-full space-y-2 py-2 shadow-lg">
            <div className="flex justify-end items-center gap-2 px-2">
              <button onClick={handleSave}>
                {editIndex !== null ? "Update" : "Save"}
              </button>
              <div className="w-px h-4 bg-gray-800"></div>
              <button onClick={handleClear}>Clear</button>
            </div>

            {/* ContentEditable div for rich-text editing */}
            <div
              id="note-textarea"
              contentEditable
              placeholder="Start typing here..."
              onInput={handleInputChange}
              className="w-full h-32 bg-[#FDF7E5] outline-none text-sm text-gray-800 border-2 border-blue-600 p-2"
            ></div>

            {/* Formatting buttons */}
            <div className="flex items-center gap-3 text-gray-600 pl-3">
              <button
                className="hover:text-black"
                onClick={() => applyFormatting("b")}
              >
                <b>B</b>
              </button>
              <button
                className="hover:text-black italic"
                onClick={() => applyFormatting("i")}
              >
                <i>I</i>
              </button>
              <button
                className="hover:text-black underline"
                onClick={() => applyFormatting("u")}
              >
                <u>U</u>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
