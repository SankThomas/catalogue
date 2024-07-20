"use client";

import Container from "@/components/container";
import React, { useState } from "react";
import {
  numbers,
  uppercaseLetters,
  lowercaseLetters,
  specialSymbols,
} from "./_data";
import { Button } from "@/components/ui/button";
import { ClipboardIcon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast";

export default function PasswordGenerator() {
  const [lowercase, setLowercase] = useState(true); // True by default
  const [uppercase, setUppercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(20);

  const { toast } = useToast();

  // Prevent the page refreshing when submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Password generating function
  const handleGeneratePassword = () => {
    let generatedPassword = "";

    if (lowercase) {
      generatedPassword += lowercaseLetters;
    }

    if (uppercase) {
      generatedPassword += uppercaseLetters;
    }

    if (number) {
      generatedPassword += numbers;
    }

    if (symbols) {
      generatedPassword += specialSymbols;
    }

    setPassword(createPassword(generatedPassword));

    toast({
      title: "Password generated",
      description: "Click the clipboard icon to copy your password",
    });
  };

  const createPassword = (generatedPassword) => {
    let password = "";
    const generatedPasswordLength = generatedPassword.length;

    for (let i = 0; i < passwordLength; i++) {
      const passwordIndex = Math.floor(Math.random() * generatedPasswordLength);
      password += generatedPassword.charAt(passwordIndex);
    }
    return password;
  };

  // Copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    toast({
      description: "Password copied to clipboard",
    });
  };

  return (
    <Container>
      <section>
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h1 className="mb-8 text-4xl lg:text-5xl">Password Generator</h1>
          <p>
            Generate random passwords using the checkboxes below. <br />
            This is not a password manager.
          </p>
        </div>

        <div className="mx-auto max-w-xl space-y-4 rounded-lg border border-neutral-900 p-6">
          {password && (
            <div className="flex items-center justify-between rounded-lg border border-neutral-900 bg-neutral-950 px-2 py-3">
              <h3 className="rounded-lg font-semibold text-neutral-200">
                {password}
              </h3>
              {password && (
                <Button onClick={handleCopy}>
                  <ClipboardIcon />
                </Button>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password-length"
                className="cursor-pointer text-sm font-bold uppercase tracking-wide text-neutral-400"
              >
                Password Length
              </label>
              <input
                type="number"
                name="password-length"
                id="password-length"
                min="10"
                max="20"
                defaultValue={passwordLength}
                onChange={(e) => setPasswordLength(e.target.value)}
                className="rounded border border-neutral-900 bg-transparent p-2 outline-none transition focus:ring-2 focus:ring-neutral-400"
              />
            </div>

            <div className="flex items-center justify-between">
              <label
                htmlFor="lowercase"
                className="cursor-pointer text-sm font-bold uppercase tracking-wide text-neutral-400"
              >
                Lowercase letters
              </label>
              <input
                type="checkbox"
                name="lowercase"
                id="lowercase"
                checked={lowercase}
                onChange={(e) => setLowercase(e.target.checked)}
                className="h-6 w-6 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between">
              <label
                htmlFor="uppercase"
                className="cursor-pointer text-sm font-bold uppercase tracking-wide text-neutral-400"
              >
                Uppercase letters
              </label>
              <input
                type="checkbox"
                name="uppercase"
                id="uppercase"
                checked={uppercase}
                onChange={(e) => setUppercase(e.target.checked)}
                className="h-6 w-6 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between">
              <label
                htmlFor="numbers"
                className="cursor-pointer text-sm font-bold uppercase tracking-wide text-neutral-400"
              >
                Numbers
              </label>
              <input
                type="checkbox"
                name="numbers"
                id="numbers"
                checked={number}
                onChange={(e) => setNumber(e.target.checked)}
                className="h-6 w-6 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between">
              <label
                htmlFor="symbols"
                className="cursor-pointer text-sm font-bold uppercase tracking-wide text-neutral-400"
              >
                Symbols
              </label>
              <input
                type="checkbox"
                name="symbols"
                id="symbols"
                checked={symbols}
                onChange={(e) => setSymbols(e.target.checked)}
                className="h-6 w-6 cursor-pointer"
              />
            </div>

            <Button type="submit" onClick={handleGeneratePassword}>
              Suggest Strong password
            </Button>
          </form>
        </div>
      </section>
    </Container>
  );
}
