import React from "react";
import { format } from "date-fns";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function PreviewInvoice({ values, formik }) {
  // Create PDF
  function createPDF() {
    console.log("Creating PDF...");
    const invoice = document.getElementById("pdf");
    html2canvas(invoice).then((canvas) => {
      const imgData = canvas.toDataURL("img/jpeg");
      const pdf = new jsPDF({
        orientation: "p",
        unit: "in",
        format: "a4",
      });
      pdf.addImage(imgData, "JPEG", 30, -150, 150, 400, "FAST");
      pdf.save(`${values.clientName} - invoice.pdf`);
    });
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 top-0 z-[200] h-screen bg-black/80">
        <div className="mx-auto max-w-3xl pt-10">
          <h2 className="flex items-center justify-between text-2xl font-bold text-white">
            <span>
              <Button variant="secondary" onClick={createPDF}>
                Download Invoice
              </Button>
            </span>
            <span>
              <Button
                variant="custom"
                onClick={() => values.setPreviewInvoice(false)}
              >
                <XIcon />
              </Button>
            </span>
          </h2>
        </div>

        <section className="mx-8 my-10 max-h-[700px] max-w-3xl space-y-8 overflow-auto rounded border border-neutral-900 bg-neutral-950 p-4 px-10 pb-10 pt-5 md:mx-auto">
          <div className="text-right">
            <h2 className="text-lg font-bold lg:text-xl">{values.name}</h2>
            <p>{values.address}</p>
            <p>
              <strong>Bank Name:</strong> {values.bankName}
            </p>
            <p>
              <strong>Bank Account number:</strong> {values.accountNumber}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold">{values.clientName}</h2>
            <p>{values.clientEmail}</p>
            <p>{values.clientAddress}</p>
          </div>

          <div className="text-right">
            <h2 className="text-lg font-bold">Invoice Details</h2>
            <p>Invoice number: {values.invoiceNumber}</p>
            {values.invoiceDate && (
              <p>
                Invoice date:{" "}
                {format(new Date(values.invoiceDate), "do MMMM yyyy")}
              </p>
            )}
            {values.dueDate && (
              <p>
                Due date: {format(new Date(values.dueDate), "do MMMM yyyy")}
              </p>
            )}
          </div>

          <div>
            <table width="100%" className="mb-10">
              <thead>
                <tr className="bg-neutral-900 p-1">
                  <td className="font-bold">Item Name</td>
                  <td className="font-bold">Quantity</td>
                  <td className="font-bold">Price</td>
                  <td className="font-bold">Total</td>
                </tr>
              </thead>
              {values.items.map((item) => (
                <React.Fragment key={item.id}>
                  <tbody>
                    <tr className="h-10">
                      <td>{item.item}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price.toLocaleString()}</td>
                      <td>{item.total.toLocaleString()}</td>
                    </tr>
                  </tbody>
                </React.Fragment>
              ))}
            </table>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              Kshs. {values.totalAmount.toLocaleString()}
            </h2>
          </div>

          <div>
            <p className="mb-2 text-neutral-400">
              <strong>Additional notes to the client</strong>
            </p>

            <p className="w-1/2">{values.notes}</p>
          </div>

          <div className="border-t pt-8">
            <ul className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <li>
                <strong>Name: </strong>
                {values.name}
              </li>
              <li>
                <strong>Email: </strong>
                {values.email}
              </li>
              <li>
                <strong>Bank Account Holder: </strong>
                {values.name}
              </li>
              <li>
                <strong>Bank Account Number: </strong>
                {values.accountNumber}
              </li>
              <li>
                <strong>Phone: </strong>
                {values.phoneNumber}
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
