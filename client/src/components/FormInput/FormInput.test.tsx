import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import FormInput from "./FormInput";
import styles from "./FormInput.module.scss";

const createRegister = (
  overrides?: Partial<UseFormRegisterReturn>,
): UseFormRegisterReturn => ({
  name: "email",
  onBlur: vi.fn(),
  onChange: vi.fn(),
  ref: vi.fn(),
  ...overrides,
});

const renderFormInput = (
  props?: Partial<React.ComponentProps<typeof FormInput>>,
) => {
  const defaultProps: React.ComponentProps<typeof FormInput> = {
    label: "Email",
    placeholder: "Enter your email",
    hint: "Use your work email",
    errors: undefined,
    register: createRegister(),
  };

  return render(<FormInput {...defaultProps} {...props} />);
};

const getInputByLabel = (label: string) => screen.getByLabelText(label);

describe("FormInput", () => {
  it("renders input with label, placeholder, default type and hint", () => {
    renderFormInput();

    const input = getInputByLabel("Email");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Enter your email");
    expect(input).toHaveAttribute("type", "text");
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Use your work email")).toBeInTheDocument();
  });

  it("applies register props and triggers handlers", () => {
    const onChange = vi.fn();
    const onBlur = vi.fn();

    renderFormInput({
      label: "Phone number",
      placeholder: "+374...",
      hint: "Include country code",
      register: createRegister({
        name: "phoneNumber",
        onChange,
        onBlur,
      }),
    });

    const input = getInputByLabel("Phone number");

    expect(input).toHaveAttribute("name", "phoneNumber");

    fireEvent.change(input, { target: { value: "+37477443322" } });
    fireEvent.blur(input);

    expect(onChange).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalled();
  });

  it("renders error instead of hint and applies wrongError class", () => {
    const error = {
      type: "required",
      message: "Email is required",
    } as FieldError;

    renderFormInput({
      errors: error,
    });

    const input = getInputByLabel("Email");
    const wrapper = input.closest("div");

    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.queryByText("Use your work email")).not.toBeInTheDocument();
    expect(wrapper).toHaveClass(styles.wrongError);
  });

  it("supports custom type, disabled state and additional class", () => {
    renderFormInput({
      label: "Password",
      placeholder: "Enter password",
      hint: "At least 8 characters",
      type: "password",
      disabled: true,
      additionalClassName: "custom-field",
    });

    const input = getInputByLabel("Password");
    const wrapper = input.closest("div");

    expect(input).toHaveAttribute("type", "password");
    expect(input).toBeDisabled();
    expect(wrapper).toHaveClass("custom-field");
  });
});
