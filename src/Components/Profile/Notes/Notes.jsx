import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

function Notes() {
  const [text, setText] = useState("");
  const [notesList, setNotesList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleSave = () => {
    if (text.trim() !== "") {
      setNotesList([...notesList, text]);
      setText("");
    }
  };

  const onClickClear = () => {
    setNotesList([]);
  };

  const handleClear = () => {
    setText("");
  };

  const filteredNotes = notesList.filter((note) =>
    note.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <div className="bg-white p-3 border shadow-lg rounded-lg">
        {/* <img
          src="https://s3-alpha-sig.figma.com/img/b578/d598/bf7db1ac2066e31feacce4204c190918?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUG4Fem8rh-lNxYyz6DB3gEf7OfNpBDWvWLs4LiQMCEJecVOhiVadO37orRC5E1PGu6B4xGG0ZHQq2hR0BAdhBsqR8yZ35IANYat5iEkPjU95asG-rZ7XsPNAevFXQWs2g8mXW1tUW1qP3uHPtT7sgnOmn6QxFn17Uqp3WvR8-d7QxGWe33sTVfug0Z7WYDCeGFEQcDc~n3y8El8ybjnrOJNaV2YgceOTEC5s98TGEmADePbpER3wE6O~bBkqTG1ON5fQRxhddoxuzg0uKridHfjuNYK0DIak1ZhlsqOqVS1WDHWRV7763EQwbRpHknDTeGBzHB2MN3slJ-jthePug__"
          alt="image-notes"
          className="md:h-40 md:w-40 lg:w-60 lg:h-60"
        /> */}
        <div className="md:flex md:gap-3 max-md:space-y-5">
          <div className="bg-pink-50 md:w-56 p-2">
            <div className="border bg-white flex items-center px-1 ">
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
                <li className="text-sm text-gray-500 italic text-center">Add a note...</li>
              ) : (
                filteredNotes.map((each, i) => (
                  <li key={i} className="text-sm my-1">
                    <span className="mr-1 text-gray-800">•</span>
                    {each}
                  </li>
                ))
              )}
            </ul>
            <div className="flex justify-end">
              <button
                className=" border border-black bg-[#FBF4B1] px-2"
                onClick={onClickClear}
              >
                Clear
              </button>
            </div>
          </div>

          <div className="bg-[#FBF4B1] w-full space-y-2 py-2 shadow-lg">
            <div className="flex justify-end items-center gap-2 px-2">
              <button onClick={handleSave}>Save</button>
              <div className="w-px h-4 bg-gray-800"></div>
              <button onClick={handleClear}>Clear</button>
            </div>
            <textarea
              placeholder="Start typing here..."
              onChange={(e) => setText(e.target.value)}
              value={text}
              className="w-full h-32 bg-[#FDF7E5] outline-none text-sm text-gray-800"
            ></textarea>
            <div className="flex items-center gap-3 text-gray-600 pl-3">
              <button className="hover:text-black">
                <b>B</b>
              </button>
              <button className="hover:text-black italic">
                <i>I</i>
              </button>
              <button className="hover:text-black underline">
                <u>U</u>
              </button>
              <button className="hover:text-black">Aa</button>
              <button className="hover:text-black">
                T<sub>T</sub>
              </button>
              <button className="hover:text-black">
                <span>&#61;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
