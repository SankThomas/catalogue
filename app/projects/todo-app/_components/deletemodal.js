import React from "react";
import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { XIcon } from "lucide-react";
import React from "react";

export default function DeleteModal({ item, deleteTodo, showModal }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-black/90">
      <div className="flex items-center justify-center px-6 py-20 lg:h-screen lg:px-0 lg:py-0">
        <div className="w-full max-w-2xl space-y-6 rounded-lg bg-neutral-900 p-6">
          <CardTitle className="flex flex-wrap items-center justify-between gap-4">
            Are you sure you want to delete this item?{" "}
            <Button variant="secondary" onClick={() => showModal(false)}>
              <XIcon />
            </Button>
          </CardTitle>
          <CardDescription>
            NOTE: Once you delete it, there's no going back
          </CardDescription>

          <ul className="flex items-center justify-between">
            <li>
              <Button
                onClick={() => showModal(false)}
                className="border border-neutral-800 hover:bg-neutral-800"
              >
                Go Back
              </Button>
            </li>
            <li>
              <Button variant="destructive" onClick={() => deleteTodo(item.id)}>
                Confirm Delete
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
