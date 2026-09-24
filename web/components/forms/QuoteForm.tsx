"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { services } from "@/lib/mock-data/services";
import "./QuoteForm.css";

type FormState = {
  service: string;
  propertyType: string;
  suburb: string;
  name: string;
  phone: string;
  email: string;
  details: string;
  preferredTime: string;
};

const initialForm: FormState = {
  service: "",
  propertyType: "",
  suburb: "",
  name: "",
  phone: "",
  email: "",
  details: "",
  preferredTime: "",
};

const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.name })),
  { value: "multiple", label: "Multiple / not sure yet" },
];

const propertyOptions = [
  "Home",
  "Rental property",
  "Office / commercial",
  "Retail space",
  "Other",
];

const timeOptions = ["Anytime", "Mornings", "Afternoons", "Evenings", "Weekends"];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9 (+)\-]{8,}$/;

type Errors = Partial<Record<keyof FormState, string>>;

function stepFields(step: number): (keyof FormState)[] {
  switch (step) {
    case 0:
      return ["service"];
    case 1:
      return ["propertyType"];
    case 2:
      return ["name", "phone", "email"];
    case 3:
      return ["details"];
    default:
      return [];
  }
}

function validateStep(step: number, values: FormState): Errors {
  const errors: Errors = {};
  for (const field of stepFields(step)) {
    const value = values[field].trim();
    if (!value) {
      errors[field] = "This field is required.";
    } else if (field === "email" && !emailPattern.test(value)) {
      errors[field] = "Please enter a valid email address.";
    } else if (field === "phone" && !phonePattern.test(value)) {
      errors[field] = "Please enter a valid phone number.";
    }
  }
  return errors;
}

export default function QuoteForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [honey, setHoney] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [reference] = useState(() => `MPM-${Date.now().toString(36).toUpperCase()}`);
  const stepRef = useRef<HTMLFieldSetElement>(null);

  const maxSteps = 4;

  useEffect(() => {
    stepRef.current?.focus({ preventScroll: true });
  }, [step]);

  const set = useCallback((field: keyof FormState, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }, []);

  const onNext = (e: FormEvent) => {
    e.preventDefault();
    const stepErrors = validateStep(step, values);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    if (step < maxSteps - 1) {
      setStep((s) => s + 1);
    } else {
      submit();
    }
  };

  const submit = async () => {
    if (honey) return;
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
  };

  const renderError = (field: keyof FormState) =>
    errors[field] ? (
      <p className="field-error" id={`${field}-error`} role="alert">
        {errors[field]}
      </p>
    ) : null;

  /* ---------------- Success screen ---------------- */
  if (status === "success") {
    return (
      <div className="quote-success">
        <span className="quote-success__icon" aria-hidden="true">
          {"\u2713"}
        </span>
        <h2>Quote request received</h2>
        <p>
          Thanks, {values.name.split(" ")[0] || "there"}. Your request is ready for our
          team. Reference number <strong>{reference}</strong>.
        </p>
        <p className="quote-success__note">
          This website is a frontend-first build — the request is captured and ready to be
          connected to the live system. For the fastest response right now, call us on{" "}
          <a href="tel:+61451460307">0451 460 307</a>.
        </p>
        <button
          type="button"
          className="btn btn--secondary btn--md"
          onClick={() => {
            setValues(initialForm);
            setStep(0);
            setStatus("idle");
          }}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="quote-form">
      {/* Progress indicator */}
      <ol className="quote-steps" aria-label="Quote form progress">
        {["Service", "Property", "Contact", "Details"].map((label, i) => (
          <li key={label} className={i <= step ? "is-active" : ""} aria-current={i === step ? "step" : undefined}>
            <span className="quote-steps__dot">{i + 1}</span>
            <span className="quote-steps__label">{label}</span>
          </li>
        ))}
      </ol>

      <form onSubmit={onNext} noValidate>
        {/* Honeypot */}
        <input
          type="text"
          name="company"
          value={honey}
          onChange={(e) => setHoney(e.target.value)}
          className="quote-form__honeypot"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ display: "none" }}
        />

        {/* Step 1 — service */}
        {step === 0 && (
          <fieldset
            className="quote-fieldset"
            ref={stepRef}
            tabIndex={-1}
            aria-labelledby="q-step-0"
          >
            <legend id="q-step-0">Which service do you need?</legend>
            <div className="quote-options">
              {serviceOptions.map((option) => {
                const selected = values.service === option.value;
                const inputId = `service-${option.value}`;
                return (
                  <label
                    key={option.value}
                    className={`quote-option${selected ? " is-selected" : ""}`}
                    htmlFor={inputId}
                  >
                    <input
                      id={inputId}
                      type="radio"
                      name="service"
                      value={option.value}
                      checked={selected}
                      onChange={(e) => set("service", e.target.value)}
                    />
                    <span className="quote-option__text">{option.label}</span>
                    <span className="quote-option__radio" aria-hidden="true" />
                  </label>
                );
              })}
            </div>
            {renderError("service")}
          </fieldset>
        )}

        {/* Step 2 — property */}
        {step === 1 && (
          <fieldset className="quote-fieldset" ref={stepRef} tabIndex={-1} aria-labelledby="q-step-1">
            <legend id="q-step-1">Tell us about the property</legend>
            <div className="quote-field">
              <label htmlFor="property-type">Property type</label>
              <select
                id="property-type"
                value={values.propertyType}
                onChange={(e) => set("propertyType", e.target.value)}
              >
                <option value="">Select a property type</option>
                {propertyOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {renderError("propertyType")}
            </div>
            <div className="quote-field">
              <label htmlFor="suburb">Suburb / postcode</label>
              <input
                id="suburb"
                type="text"
                autoComplete="postal-code"
                placeholder="e.g. Carlton 3053"
                value={values.suburb}
                onChange={(e) => set("suburb", e.target.value)}
              />
              {renderError("suburb")}
            </div>
          </fieldset>
        )}

        {/* Step 3 — contact */}
        {step === 2 && (
          <fieldset className="quote-fieldset" ref={stepRef} tabIndex={-1} aria-labelledby="q-step-2">
            <legend id="q-step-2">How can we reach you?</legend>
            <div className="quote-field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(e) => set("name", e.target.value)}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {renderError("name")}
            </div>
            <div className="quote-field">
              <label htmlFor="phone">Phone number</label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="0451 460 307"
                value={values.phone}
                onChange={(e) => set("phone", e.target.value)}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {renderError("phone")}
            </div>
            <div className="quote-field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={values.email}
                onChange={(e) => set("email", e.target.value)}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {renderError("email")}
            </div>
          </fieldset>
        )}

        {/* Step 4 — details */}
        {step === 3 && (
          <fieldset className="quote-fieldset" ref={stepRef} tabIndex={-1} aria-labelledby="q-step-3">
            <legend id="q-step-3">Anything else we should know?</legend>
            <div className="quote-field">
              <label htmlFor="details">Job details</label>
              <textarea
                id="details"
                rows={5}
                placeholder="Describe the job — areas, items, rooms, current condition…"
                value={values.details}
                onChange={(e) => set("details", e.target.value)}
                aria-invalid={!!errors.details}
                aria-describedby={errors.details ? "details-error" : undefined}
              />
              {renderError("details")}
            </div>
            <div className="quote-field">
              <label htmlFor="preferred-time">Preferred time</label>
              <select
                id="preferred-time"
                value={values.preferredTime}
                onChange={(e) => set("preferredTime", e.target.value)}
              >
                <option value="">No preference</option>
                {timeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
        )}

        {/* Nav */}
        <div className="quote-nav">
          {step > 0 && (
            <button
              type="button"
              className="btn btn--ghost btn--md"
              onClick={() => {
                setErrors({});
                setStep((s) => s - 1);
              }}
            >
              Back
            </button>
          )}
          <button type="submit" className="btn btn--primary btn--lg" disabled={status === "submitting"}>
            {status === "submitting"
              ? "Sending…"
              : step === maxSteps - 1
                ? "Submit quote request"
                : "Continue"}
          </button>
        </div>

        <p className="quote-form__disclaimer">
          Your details are used only to prepare your quote. Submit and we&apos;ll follow up
          shortly — or skip the form and{" "}
          <Link href="tel:+61451460307">call 0451 460 307</Link>.
        </p>
      </form>
    </div>
  );
}