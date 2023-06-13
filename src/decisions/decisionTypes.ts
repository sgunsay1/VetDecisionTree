export interface Decision<T> {
  prompt: string;
  options: DecisionOptions<T>[];
  isEnd?: boolean;
}

export type ButtonColor = "red" | "yellow" | "green" | "blue";
export interface DecisionOptions<T> {
  text: string;
  color: ButtonColor;
  path: keyof T;
  actionItem?: string;
}
