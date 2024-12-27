import React,{useEffect} from "react";

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
      <div className="bg-white p-10  md:-mt-5 border   rounded-lg shadow relative mx-auto w-full ">
        <h2 className="text-lg font-bold text-gray-800">Notes & Highlights</h2>
        <div className="py-10 flex">
          <h1 className="text-sm font-bold">Notes & Highlights</h1>
          <div className="flex space-x-2  md:ml-52">
            <p>Do not allow</p>

            <label class="relative mb-5 cursor-pointer ">
              <input type="checkbox" value="" class="peer sr-only" />
              <div class="peer h-5 w-9 rounded-full bg-gray-400 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200"></div>
            </label>

            <p>Allow</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
