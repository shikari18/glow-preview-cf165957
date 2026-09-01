import { BookOpen, Check } from "lucide-react";

import { subjects, type Subject } from "@/lib/subjects";

export function SubjectPicker({
  selected,
  onSelect,
  title = "Choose a subject",
  description,
}: {
  selected: string | null;
  onSelect: (subject: Subject) => void;
  title?: string;
  description?: string;
}) {
  return (
    <section>
      <h2 className="text-2xl">{title}</h2>
      {description && <p className="mt-1.5 text-sm text-muted-foreground">{description}</p>}
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => {
          const active = selected === subject.id;
          return (
            <button
              key={subject.id}
              type="button"
              onClick={() => onSelect(subject)}
              aria-pressed={active}
              className={`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border p-4 text-left transition-colors ${
                active ? "border-lavender bg-lilac/40" : "border-border bg-card hover:bg-secondary"
              }`}
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-mint text-ink">
                <BookOpen className="size-4.5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-medium">{subject.name}</span>
                <span className="block truncate text-xs text-muted-foreground">{subject.meta}</span>
              </span>
              {active && <Check className="size-4 shrink-0 text-lavender" aria-hidden />}
            </button>
          );
        })}
      </div>
    </section>
  );
}
