import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";
import { SiGooglegemini } from "react-icons/si";
import axios from "axios";
import rolling from "../../assets/images/rolling.gif";

const TagInput = ({ title, content, tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const [isFinding, setIsFinding] = useState(false);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const aiTag = async (title, content) => {
    setIsFinding(true)
    setInputValue("");

    const prompt = `The title of my note is "${title}" and the content reads "${content}" Please suggest a single word tag that best describes the essence of this note.`;
    const api = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

    try {
      const response = await axios.post(
        api,
        {
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response && response.data) {
        const generatedText = response.data.candidates[0].content.parts[0].text;
        const cleanText = generatedText.replace(/\*/g, "").trim();
        setInputValue(cleanText);
      }
    } catch (error) {
      console.log("Error in generating content: ", error);
    }
    setIsFinding(false)
  };

  return (
    <>
      {tags?.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mt-2">
          {tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="flex items-center gap-2 text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg"
              >
                # {tag}
                <button
                  onClick={() => {
                    handleRemoveTag(tag);
                  }}
                >
                  <MdClose />
                </button>
              </span>
            );
          })}
        </div>
      )}

      <div className="flex flex-row flex-wrap items-center gap-4 mt-3">
        <input
          className="text-sm bg-transparent border px-3 py-2 rounded outline-none"
          type="text"
          value={inputValue}
          placeholder="Add tags"
          onChange={handleInputValue}
          onKeyDown={handleKeyDown}
        />

        <button
          onClick={() => {
            addNewTag();
          }}
          className="w-8 h-8 flex justify-center items-center rounded-lg border border-solid border-accent-100 hover:bg-accent-200 transition-all ease-in-out duration-300 group"
        >
          <MdAdd className="text-2xl text-accent-100 group-hover:text-accent-100" />
        </button>

        <button
          onClick={() => aiTag(title, content)}
          className="w-8 h-8 flex justify-center items-center rounded-lg border border-solid border-accent-100 hover:bg-accent-200 transition-all ease-in-out duration-300 group"
        >
          {!isFinding && (
            <SiGooglegemini className="text-2xl text-accent-100 group-hover:text-accent-100" />
          )}
          {isFinding && (
            <img
              className="h-full w-full object-cover p-1"
              src={rolling}
              alt=""
            />
          )}
        </button>
      </div>
    </>
  );
};

export default TagInput;
