import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pencil, Trash } from "lucide-react";
import React from "react";
import { Remarkable } from "remarkable";
import DeleteModal from "./deletemodal";
// import NotePreview from "./notepreview";

const md = new Remarkable();

export default function Notes({
  notes,
  handleDelete,
  handleEdit,
  showModal,
  setShowModal,
  // showPreview,
  // setShowPreview,
}) {
  return (
    <>
      <div>
        {notes && (
          <h3 className="mb-4">
            You have{" "}
            {`${notes.length === 1 ? "1 note" : `${notes.length} notes`}`}
          </h3>
        )}

        <div className="grid gap-4">
          {notes &&
            notes.map((note) => (
              <React.Fragment key={note.id}>
                <Card
                  className="cursor-pointer bg-neutral-950 hover:bg-neutral-900"
                  // onClick={() => setShowPreview(true)}
                >
                  <CardHeader>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <CardDescription className="mb-1">
                          {note.date}
                        </CardDescription>
                        <CardTitle>{note.title}</CardTitle>
                      </div>

                      <ul className="mt-8 flex flex-wrap items-center justify-start gap-4">
                        <li>
                          <Button
                            variant="secondary"
                            onClick={() => handleEdit(note.id)}
                          >
                            <Pencil />
                          </Button>
                        </li>
                        <li>
                          <Button
                            variant="destructive"
                            onClick={() => setShowModal(true)}
                          >
                            <Trash />
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: md.render(note.note),
                        }}
                        className="markdown"
                      ></div>
                    </CardDescription>
                  </CardContent>
                </Card>

                {/* {showPreview && (
                  <div>
                    <NotePreview note={note} setShowPreview={setShowPreview} />
                  </div>
                )} */}

                {showModal && (
                  <div>
                    <DeleteModal
                      note={note}
                      setShowModal={setShowModal}
                      handleDelete={handleDelete}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
        </div>
      </div>
    </>
  );
}
