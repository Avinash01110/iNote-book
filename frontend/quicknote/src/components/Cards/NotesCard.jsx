import React from "react";
import { MdCreate, MdDelete, MdOutlinePushPin } from "react-icons/md";
import moment from "moment";

const NotesCard = ({
  title,
  date,
  tags,
  content,
  isPinned,
  color,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <>
      <div
        className={`cursor-pointer border border-solid border-bg-300 rounded-lg p-4 bg-[${color}] hover:shadow-xl transition-all ease-in-out`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h6 className="text-sm font-medium">{title}</h6>
            <span className="text-xs text-slate-500">{date}</span>
          </div>

          <MdOutlinePushPin
            className={`mb-5 cursor-pointer transition-all ease-in-out duration-300 ${
              isPinned ? "text-accent-100 rotate-45" : "text-black"
            }`}
            onClick={onPinNote}
          />
        </div>

        <p className="text-xs text-slate-500 mt-2">{content?.slice(0, 60)}</p>

        <div className="flex items-center justify-between mt-2">
          <div className="text-xs text-slate-500">
            {tags.map((item) => `#${item} `)}
          </div>

          <div className="flex items-center gap-2">
            <MdCreate
              className="cursor-pointer hover:text-green-600 transition ease-in-out duration-300"
              onClick={onEdit}
            />
            <MdDelete
              className="cursor-pointer hover:text-red-500 transition ease-in-out duration-300"
              onClick={onDelete}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesCard;
