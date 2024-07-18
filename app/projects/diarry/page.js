"use client";

import Container from "@/components/container";
import { CardDescription } from "@/components/ui/card";
import React, { useEffect, useRef, useState } from "react";
import Form from "./_components/form";
import { v4 as uuidv4 } from "uuid";
import { useToast } from "@/components/ui/use-toast";
import Notes from "./_components/notes";

function getLocalStorage() {
  if (typeof window !== "undefined") {
    let notes = localStorage.getItem("notes");

    if (notes) {
      return JSON.parse(localStorage.getItem("notes"));
    } else {
      return [];
    }
  }
}

export default function Diarry() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const inputRef = useRef();
  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title) {
      toast({
        title: "Title is empty",
        description: "Add a title for your note",
      });
    } else if (!note) {
      toast({
        title: "Note is empty",
        description:
          "Type something in your note before trying to create a new note",
      });
    } else {
      const newNote = {
        id: uuidv4(),
        date: new Date().toLocaleString(),
        title,
        note,
      };
      setNotes([newNote, ...notes]);
      setIsEditing(false);
      setShowModal(false);
      setNote("");
      setTitle("");
    }
  }

  function handleEdit(id) {
    const editingItem = notes.find((note) => note.id === id);
    setNotes(notes.filter((note) => note.id !== id));
    setIsEditing(true);
    inputRef.current.focus();
    setTitle(editingItem.title);
    setNote(editingItem.note);
    toast({
      title: "Editing",
      description: "You are editing a note",
    });
  }

  function handleDelete(id) {
    setNotes(notes.filter((note) => note.id !== id));
    toast({
      title: "Warning",
      description: "You have deleted a note",
    });
    setShowModal(false);
  }

  return (
    <Container>
      <div className="mx-auto mb-8 max-w-2xl space-y-8 text-center">
        <h1 className="text-4xl font-bold">Diarry</h1>
        <CardDescription>
          ...is a note taking application that uses localStorage to store your
          notes
        </CardDescription>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
        <Form
          title={title}
          setTitle={setTitle}
          note={note}
          setNote={setNote}
          handleSubmit={handleSubmit}
          inputRef={inputRef}
          isEditing={isEditing}
        />

        <Notes
          notes={notes}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          showModal={showModal}
          setShowModal={setShowModal}
          showPreview={showPreview}
          setShowPreview={setShowPreview}
        />
      </div>
    </Container>
  );
}
