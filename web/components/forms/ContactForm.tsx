"use client";

import { useState, type FormEvent } from "react";
import "./ContactForm.css";

type Status = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = () => {
    const next: typeof errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Please enter a valid email address.";
    if (!values.message.trim()) next.message = "Please enter a message.";
    return next;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="contact-success" role="status">
        <span className="contact-success__icon" aria-hidden="true">
          {"\u2713"}
        </span>
        <h3>Message ready to send</h3>
        <p>
          Thanks, {values.name.split(" ")[0] || "there"}. Your message has been captured and
          is ready to connect to the live system. For the quickest reply right now, call us
          on <a href="tel:+61451460307">0451 460 307</a>.
        </p>
        <button
          type="button"
          className="btn btn--secondary btn--md"
          onClick={() => {
            setValues({ name: "", email: "", message: "" });
            setStatus("idle");
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="contact-field">
        <label htmlFor="contact-name">Your name</label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          aria-invalid={!!errors.name}
        />
        {errors.name ? <p className="field-error">{errors.name}</p> : null}
      </div>
      <div className="contact-field">
        <label htmlFor="contact-email">Email address</label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          aria-invalid={!!errors.email}
        />
        {errors.email ? <p className="field-error">{errors.email}</p> : null}
      </div>
      <div className="contact-field">
        <label htmlFor="contact-message">Your message</label>
        <textarea
          id="contact-message"
          rows={6}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          aria-invalid={!!errors.message}
        />
        {errors.message ? <p className="field-error">{errors.message}</p> : null}
      </div>
      <button
        type="submit"
        className="btn btn--primary btn--lg"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
      <p className="contact-form__note">
        Email, call or message us — whichever is easiest. We keep your details private.
      </p>
    </form>
  );
}