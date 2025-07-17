import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../../lib/localStorage";
import "./commentSection.css";

const CommentSection = () => {
  const [value, setValue] = useState("");
  const [comments, setComments] = useState<string[] | null>(null);

  useEffect(() => {
    const storedComments = getLocalStorage<string[]>("comments", []);
    setComments(storedComments);
  }, []);

  useEffect(() => {
    setLocalStorage<string[]>("comments", comments || []);
  }, [comments]);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.currentTarget.value)} />

      {comments === null ? (
        <div>Loading...</div>
      ) : (
        <div className="comment-list">
          <button
            onClick={() => {
              setComments([...comments, value]);
              setValue("");
            }}
          >
            Add comment
          </button>
          {comments.map((comment, index) => (
            <div key={index} className="comment-block">
              <p>{comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { CommentSection };
