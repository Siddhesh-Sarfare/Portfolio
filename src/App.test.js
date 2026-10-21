import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders the hero, main sections and contact email", () => {
  render(<App />);
  // Accessible name comes from DecodeText's sr-only copy, independent of the scramble animation
  expect(screen.getByRole("heading", { level: 1, name: /Siddhesh\s*Sarfare/ })).toBeInTheDocument();
  [/front-end focused/i, /latest work/i, /tools i build with/i, /get in\s*touch/i].forEach((name) =>
    expect(screen.getByRole("heading", { level: 2, name })).toBeInTheDocument()
  );
  const mailLinks = screen
    .getAllByRole("link")
    .filter((a) => a.getAttribute("href") === "mailto:siddhesh.sarfare2001@gmail.com");
  expect(mailLinks.length).toBeGreaterThan(0);
  expect(screen.getByText(/siddhesh\.sarfare2001/)).toBeInTheDocument();
});

test("mobile menu toggles its expanded state", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /open menu/i });
  expect(button).toHaveAttribute("aria-expanded", "false");
  fireEvent.click(button);
  expect(screen.getByRole("button", { name: /close menu/i })).toHaveAttribute("aria-expanded", "true");
  fireEvent.keyDown(document, { key: "Escape" });
  expect(screen.getByRole("button", { name: /open menu/i })).toHaveAttribute("aria-expanded", "false");
});
