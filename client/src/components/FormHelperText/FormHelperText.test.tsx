import { render, screen } from "@testing-library/react";
import FormHelperText from "./FormHelperText";
import styles from "./FormHelperText.module.scss";

describe("FormHelperText", () => {
  it("renders hint text when error is not provided", () => {
    render(<FormHelperText hint="Use at least 8 characters" />);

    const text = screen.getByText("Use at least 8 characters");
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass(styles.registration_exampleAndErrors);
    expect(text).not.toHaveClass(styles.errorField);
  });

  it("renders error text instead of hint when both are provided", () => {
    render(
      <FormHelperText
        hint="Use at least 8 characters"
        error="Password is required"
      />,
    );
    expect(screen.getByText("Password is required")).toBeInTheDocument();
    expect(
      screen.queryByText("Use at least 8 characters"),
    ).not.toBeInTheDocument();
  });

  it("applies error class only when error exists", () => {
    const { rerender } = render(<FormHelperText hint="Helpful hint" />);
    const hintText = screen.getByText("Helpful hint");
    expect(hintText).toHaveClass(styles.registration_exampleAndErrors);
    expect(hintText).not.toHaveClass(styles.errorField);
    rerender(<FormHelperText error="Invalid value" />);
    const errorText = screen.getByText("Invalid value");
    expect(errorText).toHaveClass(styles.registration_exampleAndErrors);
    expect(errorText).toHaveClass(styles.errorField);
  });
});
