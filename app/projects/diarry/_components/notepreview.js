import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { XIcon } from "lucide-react";
import React from "react";

export default function NotePreview({ note, setShowPreview }) {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 top-0 bg-black/90">
        <div className="h-full overflow-auto py-20">
          <div className="mx-auto max-w-2xl space-y-6 rounded-lg bg-neutral-900 p-6">
            <CardTitle className="flex flex-wrap items-center justify-between gap-4">
              {note.title}
              <Button variant="secondary" onClick={() => setShowPreview(false)}>
                <XIcon />
              </Button>
            </CardTitle>
            <CardDescription>{note.note}</CardDescription>

            <ul className="flex items-center justify-between">
              <li>
                <Button
                  onClick={() => setShowPreview(false)}
                  className="border border-neutral-800 hover:bg-neutral-800"
                >
                  Close preview
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
