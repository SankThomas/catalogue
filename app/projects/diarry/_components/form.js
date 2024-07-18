"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export default function Form({
  title,
  setTitle,
  handleSubmit,
  note,
  setNote,
  inputRef,
  isEditing,
}) {
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="label">
            Add note title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            ref={inputRef}
            placeholder="Note title"
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="note" className="label">
            Write note
          </label>
          <textarea
            name="note"
            id="note"
            placeholder="Start typing"
            rows="10"
            cols="30"
            className="input"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
          <Button variant="secondary" className="mt-2" onClick={handleSubmit}>
            {isEditing ? "Editing Note" : "+ Create note"}
          </Button>
        </div>
      </form>
    </>
  );
}
