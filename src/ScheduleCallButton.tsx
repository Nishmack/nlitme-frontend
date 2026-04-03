import { useId, useMemo, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { Calendar, Phone, X, Clock } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD ? "https://nlitme-backend.vercel.app" : "http://localhost:5000");

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const isValidPhone = (value: string) => {
  const digits = value.replace(/\D/g, "");
  return digits.length === 10;
};
const isValidPersonName = (value: string, minLen = 2) => {
  const t = value.trim();
  if (t.length < minLen || t.length > 100) return false;
  return /^[\p{L}\s'.-]+$/u.test(t);
};

export type ScheduleCallButtonProps = {
  buttonClassName?: string;
  buttonLabel?: string;
  modalTitle?: string;
  modalSubtitle?: string;
  messageSourceLine?: string;
  triggerIcon?: "calendar" | "phone";
  successIcon?: "calendar" | "phone";
};

export default function ScheduleCallButton({
  buttonClassName = "bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:translate-y-[-2px] transition-all shadow-lg",
  buttonLabel = "Schedule a call",
  modalTitle = "Schedule a call",
  modalSubtitle = "We'll email you to confirm a time.",
  messageSourceLine = "Schedule a call request (Contact page)",
  triggerIcon = "calendar",
  successIcon = "calendar",
}: ScheduleCallButtonProps = {}) {
  const formId = useId();
  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const phoneId = `${formId}-phone`;
  const notesId = `${formId}-notes`;

  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "confirmed">("idle");
  const [error, setError] = useState<string | null>(null);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setPreferredDate("");
    setPreferredTime("");
    setNotes("");
    setError(null);
    setStatus("idle");
  };

  const closeModal = () => {
    setModalOpen(false);
    resetForm();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setError(null);

    if (!name.trim() || !email.trim() || !phone.trim() || !preferredDate || !preferredTime) {
      setError("Please fill in your name, email, phone, preferred date, and time.");
      return;
    }
    if (!isValidPersonName(name)) {
      setError("Please enter a valid name (letters and spaces, at least 2 characters).");
      return;
    }
    if (!isValidEmail(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!isValidPhone(phone.trim())) {
      setError("Please enter a valid phone number (10 digits).");
      return;
    }

    const digits = phone.replace(/\D/g, "").slice(0, 10);
    const messageLines = [
      messageSourceLine,
      "",
      `Preferred date: ${preferredDate}`,
      `Preferred time: ${preferredTime}`,
      "",
      "Notes:",
      notes.trim() || "(none)",
    ].join("\n");

    setStatus("loading");
    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: digits,
          message: messageLines,
        }),
      });
      const errBody = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error(errBody?.message || "Unable to send your request. Please try again.");
      }
      setStatus("confirmed");
    } catch (err: unknown) {
      setStatus("idle");
      setError(err instanceof Error ? err.message : "Unable to send your request. Please try again.");
    }
  };

  const TriggerIcon = triggerIcon === "phone" ? Phone : Calendar;
  const SuccessIcon = successIcon === "phone" ? Phone : Calendar;

  const phoneDigits = phone.replace(/\D/g, "").slice(0, 10);
  const allRequiredFilled = useMemo(
    () =>
      Boolean(
        name.trim() &&
          email.trim() &&
          phoneDigits.length === 10 &&
          preferredDate &&
          preferredTime &&
          isValidPersonName(name) &&
          isValidEmail(email.trim()) &&
          isValidPhone(phoneDigits),
      ),
    [name, email, phoneDigits, preferredDate, preferredTime],
  );

  return (
    <>
      <button type="button" onClick={() => setModalOpen(true)} className={buttonClassName}>
        <TriggerIcon className="size-5" />
        {buttonLabel}
      </button>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {modalOpen && (
              <motion.div
                key="schedule-call-backdrop"
                className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={(e) => e.target === e.currentTarget && status !== "loading" && closeModal()}
              >
                <motion.div
                  className="relative z-[201] w-full max-w-lg max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-2xl bg-white shadow-2xl border border-slate-200 pointer-events-auto"
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 12 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-start justify-between gap-4 p-6 border-b border-slate-100">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">{modalTitle}</h2>
                      <p className="text-sm text-slate-500 mt-1">{modalSubtitle}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => status !== "loading" && closeModal()}
                      className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                      aria-label="Close"
                    >
                      <X className="size-5" />
                    </button>
                  </div>

                  {status === "confirmed" ? (
                    <div className="p-8 text-center space-y-4">
                      <div className="mx-auto size-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <SuccessIcon className="size-7" />
                      </div>
                      <p className="text-lg font-bold text-slate-900">Request sent</p>
                      <p className="text-slate-600 text-sm">We&apos;ll contact you shortly at the email you provided.</p>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:opacity-95 transition-opacity"
                      >
                        Done
                      </button>
                    </div>
                  ) : (
                    <form className="relative z-[2] p-6 space-y-4" onSubmit={handleSubmit}>
                      {error && <p className="text-sm font-medium text-red-600">{error}</p>}
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700" htmlFor={nameId}>
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id={nameId}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                          placeholder="Enter your name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          autoComplete="name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700" htmlFor={emailId}>
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id={emailId}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                          placeholder="Enter your email address"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          autoComplete="email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700" htmlFor={phoneId}>
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          id={phoneId}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                          placeholder="Enter your phone number"
                          type="tel"
                          inputMode="numeric"
                          autoComplete="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">
                            Preferred date <span className="text-red-500">*</span>
                          </label>
                          <input
                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            type="date"
                            value={preferredDate}
                            onChange={(e) => setPreferredDate(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700 flex items-center gap-1">
                            <Clock className="size-3.5 text-slate-400" />
                            Preferred time <span className="text-red-500">*</span>
                          </label>
                          <select
                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-normal text-slate-600 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
                            value={preferredTime}
                            onChange={(e) => setPreferredTime(e.target.value)}
                          >
                            <option value="">Select a time</option>
                            <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                            <option value="Afternoon (12 PM - 5 PM)">Afternoon (12 PM - 5 PM)</option>
                            <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700" htmlFor={notesId}>
                          Notes (optional)
                        </label>
                        <textarea
                          id={notesId}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all min-h-[80px] resize-y"
                          placeholder="Enter your message"
                          rows={3}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          autoComplete="off"
                        />
                      </div>
                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => status !== "loading" && closeModal()}
                          className="flex-1 border-2 border-slate-200 text-slate-800 font-bold py-3 rounded-xl hover:bg-slate-50 transition-colors disabled:opacity-50"
                          disabled={status === "loading"}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={status === "loading" || !allRequiredFilled}
                          className="flex-1 bg-primary text-white font-bold py-3 rounded-xl hover:opacity-95 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {status === "loading" ? "Sending…" : "Send request"}
                        </button>
                      </div>
                    </form>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
