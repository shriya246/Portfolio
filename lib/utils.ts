import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export interface TextSegment {
  text: string;
  metric: boolean;
}

const METRIC_PATTERN =
  /(95-100%|99%|\d+(?:\.\d+)?%|\d+\+|\$?\d+(?:\.\d+)?\s?(?:M|K|ARR)?|\d+(?:\.\d+)?\/5|4\.0)/g;

export function splitMetricText(text: string): TextSegment[] {
  const segments: TextSegment[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(METRIC_PATTERN)) {
    const value = match[0];
    const index = match.index ?? 0;

    if (index > lastIndex) {
      segments.push({ text: text.slice(lastIndex, index), metric: false });
    }

    segments.push({ text: value, metric: true });
    lastIndex = index + value.length;
  }

  if (lastIndex < text.length) {
    segments.push({ text: text.slice(lastIndex), metric: false });
  }

  return segments;
}
