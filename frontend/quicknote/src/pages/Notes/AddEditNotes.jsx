import React, { useState } from "react";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";
import axiosInstance from "../../utils/axiosInstance";

const AddEditNotes = ({
  noteData,
  type,
  onClose,
  getAllNotes,
  showToastMessage,
}) => {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || "");
  const [tags, setTags] = useState(noteData?.tags || "");
  const [color, setcolor] = useState(noteData?.color || "#FFCFB3")

  const [error, setError] = useState(null);

  // Add New Note
  const addNewNote = async () => {
    try {
      const response = await axiosInstance.post("/addnote", {
        title,
        content,
        tags,
        color
      });

      if (response.data && response.data.note) {
        showToastMessage("Note Added Successfully");
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      }
    }
  };

  // Edit Note
  const editNote = async () => {
    const noteId = noteData._id;
    try {
      const response = await axiosInstance.put("/editnote/" + noteId, {
        title,
        content,
        tags,
        color
      });

      if (response.data && response.data.note) {
        showToastMessage("Note Updated Successfully");
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter the title");
      return;
    }

    if (!content) {
      setError("Please enter the content");
      return;
    }

    setError("");

    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <>
      <div className="relative">
        <button
          onClick={() => {
            onClose();
          }}
          className="w-8 h-8 flex justify-center items-center rounded-full hover:bg-primary-300 transition-all ease-in-out duration-300 group absolute -top-3 -right-3"
        >
          <MdClose className="text-xl text-primary-100 group-hover:text-primary-100" />
        </button>

        <div className="flex flex-col gap-2">
          <label className="text-xs text-slate-400">TITLE</label>
          <input
            type="text"
            className="text-2xl text-slate-950 outline-none"
            placeholder="Go To Gym At 5"
            value={title}
            onChange={({ target }) => {
              setTitle(target.value);
            }}
          />
        </div>
        <div className="flex flex-col flex-wrap gap-2 mt-4">
          <label className="text-xs text-slate-400">CONTENT</label>
          <textarea
            type="text"
            className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded-lg"
            placeholder="Content"
            rows={10}
            value={content}
            onChange={({ target }) => {
              setContent(target.value);
            }}
          />
        </div>

        <div className="mt-3">
          <label className="text-xs text-slate-400">TAGS</label>
          <TagInput
            title={title}
            content={content}
            tags={tags}
            setTags={setTags}
          />
        </div>

        <div className="flex flex-col flex-wrap gap-2 mt-4">
          <label className="text-xs text-slate-400">COLORS</label>
          <div className="flex gap-2 mb-4">
            <div
              className={`${color === "#FFCFB3" ? "border border-blue-500" : ""} w-6 h-6 rounded-full cursor-pointer bg-[#FFCFB3]`}
              onClick={() => setcolor("#FFCFB3")}
            ></div>
            <div
              className={`${color === "#FFF5CD" ? "border border-blue-500" : ""} w-6 h-6 rounded-full cursor-pointer bg-[#FFF5CD]`}
              onClick={() => setcolor("#FFF5CD")}
            ></div>
            <div
              className={`${color === "#B7E0FF" ? "border border-blue-500" : ""} w-6 h-6 rounded-full cursor-pointer bg-[#B7E0FF]`}
              onClick={() => setcolor("#B7E0FF")}
            ></div>
            <div
              className={`${color === "#FFE1FF" ? "border border-blue-500" : ""} w-6 h-6 rounded-full cursor-pointer bg-[#FFE1FF]`}
              onClick={() => setcolor("#FFE1FF")}
            ></div>
          </div>
        </div>

        {error && <p className="text-red-500 text-xs pt-2">{error}</p>}

        <button
          onClick={handleAddNote}
          className="w-full py-2 px-4 text-text-200 bg-primary-300 rounded-lg font-medium border border-solid border-primary-100/50 hover:bg-primary-200 hover:text-text-100 transition duration-300 ease-in-out mt-4"
        >
          {type === "edit" ? "UPDATE" : "ADD"}
        </button>
      </div>
    </>
  );
};

export default AddEditNotes;
