import React, { useEffect, useState } from "react";
import NotesCard from "../../components/Cards/NotesCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import moment from "moment";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import Toast from "../../components/ToastMessage/Toast";
import AddNoteImg from "../../assets/images/addNote.svg";
import noData from "../../assets/images/noData.svg";
import EmptyCard from "../../components/EmptyCard/EmptyCard";

const Notes = ({ searchedResult, isSearch }) => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const [showToastMsg, setShowToastMsg] = useState({
    isShown: false,
    message: "",
    type: "add",
  });

  const [allNotes, setAllNotes] = useState([]);

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const showToastMessage = (message, type) => {
    setShowToastMsg({ isShown: true, message, type });
  };

  const handleCloseToast = () => {
    setShowToastMsg({ isShown: false, message: "" });
  };

  const handleEdit = (noteDetails) => {
    setOpenAddEditModal({ isShown: true, data: noteDetails, type: "edit" });
  };

  const getAllNotes = async () => {
    try {
      const response = await axiosInstance("/getallnote");

      if (response.data && response.data.notes) {
        setAllNotes(response.data.notes);
      }
    } catch (error) {
      setError("An unexpected error occured, Please try again.");
      navigate("/");
    }
  };

  const deleteNote = async (data) => {
    const noteId = data._id;
    try {
      const response = await axiosInstance.delete("/deletenote/" + noteId);

      if (response.data && !response.data.error) {
        showToastMessage("Note Deleted Successfully", "delete");
        getAllNotes();
      }
    } catch (error) {
      setError("An unexpected error occured, Please try again.");
    }
  };

  const updateIsPinned = async (noteData) => {
    const noteId = noteData._id;
    try {
      const response = await axiosInstance.put("/updateispinned/" + noteId, {
        isPinned: !noteData.isPinned,
      });

      if (response.data && response.data.note) {
        if (!noteData.isPinned) {
          showToastMessage("Note Pinned Successfully");
        } else {
          showToastMessage("Note UnPinned Successfully");
        }
        getAllNotes();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNotes();
    return () => {};
  }, []);

  const notesToDisplay = searchedResult.length > 0 ? searchedResult : allNotes;

  return (
    <>
      <div className="mx-auto py-20 px-8 xs:px-10 sm:px-16 bg-black min-h-screen bg-[url('https://img.freepik.com/premium-vector/school-vector-seamless-pattern-blue-line-art-stationery-doodle-education-background-study_193606-578.jpg')] relative z-0">
        <div className="h-full w-full bg-white/70 bg-opacity-30  absolute top-0 left-0 z-10"></div>
        {notesToDisplay.length > 0 ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-8 relative z-10">
            {notesToDisplay.map((item) => (
              <NotesCard
                key={item._id}
                title={item.title}
                date={moment(item.createdAt).format("Do MMM YYYY")}
                content={item.content}
                tags={item.tags}
                isPinned={item.isPinned}
                color={item.color}
                onEdit={() => handleEdit(item)}
                onDelete={() => deleteNote(item)}
                onPinNote={() => updateIsPinned(item)}
              />
            ))}
          </div>
        ) : (
          <EmptyCard
            imgSrc={isSearch ? noData : AddNoteImg}
            message={
              isSearch
                ? `Oops! No notes found matching your search.`
                : `Start creating your first note! Click the 'Add' button to drop down your thoughts, ideas, reminders, Let's get started!`
            }
          />
        )}
      </div>

      <div>
        <button
          onClick={() => {
            setOpenAddEditModal({ isShown: true, type: "add", date: null });
          }}
          className="w-16 h-16 flex justify-center items-center rounded-2xl bg-primary-100 hover:bg-primary-200 fixed bottom-10 right-10 transition-all ease-in-out duration-300"
        >
          <MdAdd className="text-4xl text-white" />
        </button>
      </div>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[95%] xs:w-[90%] sm:w-[75%] md:w-[65%] lg:w-[50%] xl:w-[40%] h-[31rem] bg-white rounded-md mx-auto mt-20 p-5 overflow-y-auto"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({ isShown: false, type: "add", date: null });
          }}
          getAllNotes={getAllNotes}
          showToastMessage={showToastMessage}
        />
      </Modal>

      <Toast
        isShown={showToastMsg.isShown}
        message={showToastMsg.message}
        type={showToastMsg.type}
        onClose={handleCloseToast}
      />
    </>
  );
};

export default Notes;
