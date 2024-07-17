import { Button } from "@/components/ui/button";
import { Edit2Icon, Trash2Icon } from "lucide-react";
import React from "react";
import DeleteModal from "./deletemodal";

export default function TodoList({
  editTodo,
  deleteTodo,
  items,
  modal,
  showModal,
}) {
  return (
    <div>
      {items && <h3 className="mb-6">{items.length} items left</h3>}

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
              <Button variant="destructive" onClick={() => showModal(true)}>
                <Trash2Icon />
              </Button>
            </div>
            {modal && (
              <div>
                <DeleteModal
                  showModal={showModal}
                  item={item}
                  deleteTodo={deleteTodo}
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
