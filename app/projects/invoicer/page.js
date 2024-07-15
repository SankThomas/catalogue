"use client";

import Container from "@/components/container";
import React, { useEffect, useState } from "react";
import collect from "collect.js";

import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";

import PreviewInvoice from "./_components/previewinvoice";
import Invoice from "./_components/invoice";
import { Button } from "@/components/ui/button";
import { Pencil, TrashIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Invoicer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  // State values for step 2
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  // State values for step 3
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  // Preview invoice
  const [previewInvoice, setPreviewInvoice] = useState(false);

  const { toast } = useToast();

  // Formik form validation
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Please enter your name or your company name";
    }

    if (values.email) {
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email);
    } else {
      errors.email = "Please enter a valid email address";
    }

    if (!values.address) {
      errors.address = "Your address is required";
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = "Your phone number is required";
    }

    if (!values.bankName) {
      errors.bankName = "Your bank name is required";
    }

    if (!values.accountNumber) {
      errors.accountNumber = "Your account number is required";
    }

    if (!values.clientName) {
      errors.clientName = "Client name is required";
    }

    if (values.clientEmail) {
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.clientEmail);
    } else {
      errors.clientEmail = "Please enter a valid email address";
    }

    if (!values.clientAddress) {
      errors.clientAddress = "Client address is required";
    }

    if (!values.invoiceNumber) {
      errors.invoiceNumber = "Invoice number is required";
    }

    if (!values.invoiceDate) {
      errors.invoiceDate = "Invoice is required";
    }

    if (!values.dueDate) {
      errors.dueDate = "Due date is required";
    }

    if (!values.notes) {
      errors.notes = "(Optional) Enter any additional notes to the client";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
      bankName: "",
      accountNumber: "",
      clientName: "",
      clientEmail: "",
      clientAddress: "",
      invoiceNumber: "",
      invoiceDate: "",
      dueDate: "",
      notes: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // Calculate the total amount
  function calculateTotal() {
    const allItems = items.map((i) => i.total);

    setTotalAmount(collect(allItems).sum());
  }

  useEffect(() => {
    calculateTotal();
  });

  // Invoice form submit function
  function handleSubmit(e) {
    e.preventDefault();

    if (!item || !quantity || !price) {
      toast({
        title: "Input is empty",
      });
    } else {
      const newItem = {
        id: uuidv4(),
        item,
        quantity,
        price,
        total: quantity * price,
      };
      setItems([newItem, ...items]);
      setItem("");
      setQuantity("");
      setPrice("");
      toast({ title: "New item added" });
    }
  }

  // Add items form functions
  function handleAddItem(e) {
    e.preventDefault();

    if (!item || !quantity || !price) {
      toast.error("Please fill in all the inputs");
    } else {
      const newItem = {
        id: uuidv4(),
        item,
        quantity,
        price,
        total,
      };
      setItem("");
      setQuantity("");
      setPrice("");
      setTotal("");
      setItems([newItem, ...items]);
      setIsEditing(false);
      toast({ title: "New item added" });
    }
  }

  // Calculate items amount
  useEffect(() => {
    function calculateAmount(amount) {
      setTotal(quantity * price);
    }

    calculateAmount(total);
  }, [total, price, quantity, setTotal]);

  // Edit function
  const handleEdit = (id) => {
    const editingRow = items.find((row) => row.id === id);
    setItems(items.filter((row) => row.id !== id));
    setIsEditing(true);
    setItem(editingRow.item);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
  };

  // Delete function
  const handleDelete = (id) => {
    setItems(items.filter((row) => row.id !== id));
    toast.error("You have deleted an item");
  };

  if (items.length === 0 && previewInvoice === true) {
    setPreviewInvoice(false);
    toast({
      title:
        "Please add at least one item to your invoice before you can preview",
    });
  }

  const values = {
    name,
    setName,
    email,
    setEmail,
    address,
    setAddress,
    phoneNumber,
    setPhoneNumber,
    bankName,
    setBankName,
    accountNumber,
    setAccountNumber,
    clientName,
    setClientName,
    clientEmail,
    setClientEmail,
    clientAddress,
    setClientAddress,
    invoiceNumber,
    setInvoiceNumber,
    invoiceDate,
    setInvoiceDate,
    dueDate,
    setDueDate,
    notes,
    setNotes,
    item,
    setItem,
    price,
    setPrice,
    quantity,
    setQuantity,
    items,
    setItems,
    total,
    setTotal,
    totalAmount,
    setTotalAmount,
    isEditing,
    setIsEditing,
    handleAddItem,
    handleEdit,
    handleDelete,
    previewInvoice,
    setPreviewInvoice,
  };

  return (
    <Container>
      <section>
        {previewInvoice && <PreviewInvoice values={values} formik={formik} />}

        <div>
          <h1 className="mb-12 text-4xl">Create Invoice</h1>

          <div className="grid gap-4 lg:grid-cols-2 lg:items-start lg:gap-8">
            <div className="rounded-lg border border-neutral-900 p-6">
              <form onSubmit={handleSubmit}>
                <h2 className="mb-8 text-xl">Your details</h2>

                <div className="grid gap-8">
                  <div className="grid gap-4 md:grid-cols-2">
                    <article className="article">
                      <label className="label" htmlFor="name">
                        Your name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input"
                      />
                      <small>Your official name, or company name.</small>
                    </article>

                    <article className="article">
                      <label className="label" htmlFor="email">
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                      />
                      <small>Your email is optional.</small>
                    </article>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <article className="article">
                      <label className="label" htmlFor="address">
                        Physical / Company address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Your address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="input"
                      />
                      <small>
                        Your physical address, company address, street name, or
                        City.
                      </small>
                    </article>

                    <article className="article">
                      <label className="label" htmlFor="phone-number">
                        Phone number
                      </label>
                      <input
                        type="text"
                        name="phone-number"
                        id="phone-number"
                        placeholder="Your phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="input"
                      />
                      <small>Your phone number or company phone number.</small>
                    </article>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <article className="article">
                      <label className="label" htmlFor="bankName">
                        Bank name
                      </label>
                      <input
                        type="text"
                        name="bankName"
                        id="bankName"
                        placeholder="Your bank name"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        className="input"
                      />
                    </article>

                    <article className="article">
                      <label className="label" htmlFor="accountNumber">
                        Bank account number
                      </label>
                      <input
                        type="text"
                        name="accountNumber"
                        id="accountNumber"
                        placeholder="Your bank account number"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        className="input"
                      />
                    </article>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <article className="article">
                      <label className="label" htmlFor="invoice-number">
                        Invoice Number
                      </label>
                      <input
                        type="number"
                        name="invoice-number"
                        id="invoice-number"
                        placeholder="Invoice number"
                        value={invoiceNumber}
                        onChange={(e) => setInvoiceNumber(e.target.value)}
                        className="input"
                      />
                    </article>

                    <article className="article">
                      <label className="label" htmlFor="invoice-date">
                        Invoice Date
                      </label>
                      <input
                        type="date"
                        name="invoice-date"
                        id="invoice-date"
                        placeholder="Invoice date"
                        value={invoiceDate}
                        onChange={(e) => setInvoiceDate(e.target.value)}
                        className="input"
                      />
                    </article>

                    <article className="article">
                      <label className="label" htmlFor="due-date">
                        Due Date
                      </label>
                      <input
                        type="date"
                        name="due-date"
                        id="due-date"
                        placeholder="Invoie due date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="input"
                      />
                    </article>
                  </div>
                </div>

                {/* Client details */}
                <h2 className="my-8 text-xl">Client details</h2>

                <div className="grid gap-8">
                  <div className="grid gap-4 md:grid-cols-2">
                    <article className="article">
                      <label className="label" htmlFor="client-name">
                        Client&apos;s name
                      </label>
                      <input
                        type="text"
                        name="client-name"
                        id="client-name"
                        placeholder="Client's name"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="input"
                      />
                    </article>

                    <article className="article">
                      <label className="label" htmlFor="client-email">
                        Client email
                      </label>
                      <input
                        type="email"
                        name="client-email"
                        id="client-email"
                        placeholder="Client email"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="input"
                      />
                    </article>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <article className="article">
                      <label className="label" htmlFor="client-address">
                        Client&apos;s address
                      </label>
                      <input
                        type="text"
                        name="client-address"
                        id="client-address"
                        placeholder="Client's address"
                        value={clientAddress}
                        onChange={(e) => setClientAddress(e.target.value)}
                        className="input"
                      />
                    </article>
                  </div>
                </div>

                {/* Item descriptions */}
                <h2 className="my-8 text-xl">Item descriptions</h2>

                <div className="grid gap-8">
                  <div className="grid gap-4 md:grid-cols-2">
                    <article className="article">
                      <label className="label" htmlFor="item-name">
                        Item name
                      </label>
                      <input
                        type="text"
                        name="item-name"
                        id="item-name"
                        placeholder="Item name"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                        className="input"
                      />
                    </article>

                    <article className="article">
                      <label className="label" htmlFor="quantity">
                        Quantity
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        placeholder="0"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="input"
                      />
                    </article>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <article className="article">
                      <label className="label" htmlFor="price">
                        Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="input"
                      />
                    </article>

                    <article className="article">
                      <label className="label" htmlFor="total">
                        Total
                      </label>
                      <div>{total}</div>
                    </article>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Button variant="default">Add Item</Button>
                  </div>

                  <div className="space-y-4">
                    {items.map((item) => (
                      <article
                        key={item.id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex gap-4">
                          <p>{item.item}</p>
                          <p>{item.quantity}</p>
                          <p>{item.price}</p>
                        </div>

                        <div>
                          <ul className="flex gap-4">
                            <li>
                              <Button
                                variant="default"
                                onClick={() => handleEdit(item.id)}
                              >
                                <Pencil />
                              </Button>
                            </li>
                            <li>
                              <Button
                                variant="destructive"
                                onClick={() => handleDelete(item.id)}
                              >
                                <TrashIcon />
                              </Button>
                            </li>
                          </ul>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className="grid gap-4">
                    <article className="article">
                      <label className="label" htmlFor="additional-notes">
                        Additional notes
                      </label>
                      <textarea
                        name="additional-notes"
                        id="additional-notes"
                        cols="30"
                        rows="5"
                        placeholder="Important information the client should know about"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="input"
                      ></textarea>
                    </article>
                  </div>
                </div>

                <div className="mt-8 pb-12">
                  <Button onClick={() => setPreviewInvoice(true)}>
                    Preview Invoice
                  </Button>
                </div>
              </form>
            </div>

            <div id="pdf">
              <Invoice values={values} formik={formik} />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
