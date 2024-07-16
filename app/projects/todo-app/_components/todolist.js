import { Button } from "@/components/ui/button";
import { Edit2Icon, Trash2Icon } from "lucide-react";
import React from "react";

export default function TodoList({ editTodo, deleteTodo, items }) {
  return (
    <div>
      {items && (
        <h3 className="mb-6">{items.length} items in your todo list</h3>
      )}

      <div className="grid">
        {items.map((item) => (
          <article
            key={item.id}
            className="flex items-center justify-between rounded-lg p-3 odd:bg-neutral-950"
          >
            {item.title}{" "}
            <div className="space-x-4">
              <Button onClick={() => editTodo(item.id)}>
                <Edit2Icon />
              </Button>
              <Button variant="destructive" onClick={() => deleteTodo(item.id)}>
                <Trash2Icon />
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
