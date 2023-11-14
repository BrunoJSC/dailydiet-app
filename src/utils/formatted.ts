type Date = "date" | "hors";
interface Choice {
  time: Date;
}

export function formattedDateOrHors(date: number, type: "date" | "hours") {
  if (type === "date") {
    return new Date(date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  if (type === "hours") {
    return new Date(date).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }
}

export function formattedPercent(percent: number) {
  return `${percent}%`;
}
