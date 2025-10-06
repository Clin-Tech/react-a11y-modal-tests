import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../Modal.jsx";

test("renders when open and announces title", () => {
  render(<Modal open onClose={() => {}} title="X" />);
  expect(screen.getByRole("dialog", { name: "X" })).toBeInTheDocument();
});

test("closes on backdrop click", async () => {
  const onClose = vi.fn();
  render(<Modal open onClose={onClose} />);
  await userEvent.click(screen.getByTestId("backdrop"));
  expect(onClose).toHaveBeenCalled();
});

test("closes on Escape", async () => {
  const onClose = vi.fn();
  render(<Modal open onClose={onClose} />);
  await userEvent.keyboard("{Escape}");
  expect(onClose).toHaveBeenCalled();
});
