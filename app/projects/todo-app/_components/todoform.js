"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export default function TodoForm({ createTodo, text, setText }) {
  return (
    <>
      <form onSubmit={createTodo}>
        <label
          htmlFor="todo"
          className="mb-2 block text-sm font-semibold uppercase"
        >
          Add Todo Item
        </label>
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="e.g record youtube video"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="input"
        />

        <Button onClick={createTodo} className="mt-2">
          + Add Item
        </Button>
      </form>
    </>
  );
}
