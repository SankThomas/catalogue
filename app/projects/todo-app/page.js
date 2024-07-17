"use client";

import Container from "@/components/container";
import React, { useState, useEffect, useRef } from "react";
import TodoForm from "./_components/todoform";
import { useToast } from "@/components/ui/use-toast";
import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";

const TodoList = dynamic(
  () => {
    return import("./_components/todolist");
  },
  { ssr: false },
);

function getLocalStorage() {
  if (typeof window !== "undefined") {
    let items = localStorage.getItem("items");

    if (items) {
      return JSON.parse(localStorage.getItem("items"));
    } else {
      return [];
    }
  }
}

export default function Todo() {
  const [items, setItems] = useState(getLocalStorage());
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [modal, showModal] = useState(false);
  const inputRef = useRef();

  const { toast } = useToast();

  function createTodo(e) {
    e.preventDefault();

    if (!text) {
      toast({
        title: "Input is empty",
        description: "Fill in the input before adding a new item",
      });
    } else {
      const newItem = {
        id: uuidv4(),
        title: text,
      };
      setItems([newItem, ...items]);
      setText("");
      setIsEditing(false);
      toast({
        title: "New Todo Added",
        description: "You have created a new Todo item",
      });
    }
  }

  function editTodo(id) {
    const editingItem = items.find((item) => item.id === id);
    setItems(items.filter((item) => item.id !== id));
    setIsEditing(true);
    inputRef.current.focus();
    setText(editingItem.title);
    toast({
      title: "Editing",
      description: "You are editing an item",
    });
  }

  function deleteTodo(id) {
    setItems(items.filter((item) => item.id !== id));
    toast({
      title: "Warning",
      description: "You have deleted an item",
    });
    showModal(false);
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <Container>
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h1 className="mb-8 text-4xl lg:text-5xl">Productivity App</h1>
        <p>This app saves your todo items to localStorage</p>
      </div>

      <div className="mx-auto grid max-w-2xl gap-4 lg:gap-8">
        <TodoForm
          isEditing={isEditing}
          createTodo={createTodo}
          text={text}
          setText={setText}
          inputRef={inputRef}
        />
        <TodoList
          items={items}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          modal={modal}
          showModal={showModal}
        />
      </div>
    </Container>
  );
}
