import { act, renderHook } from "@testing-library/react";
import useCount from "./useCount";

describe("useCount Hook", () => {
  it("should initialize with a count of 0", () => {
    const { result } = renderHook((startNumber) => useCount(startNumber), {
      initialProps: { startNumber: 0 },
    });
    expect(result.current.count).toBe(0);
  });

  describe("actions", () => {
    it("should increment the count", () => {
      const { result } = renderHook((startNumber) => useCount(startNumber), {
        initialProps: { startNumber: 0 },
      });

      act(() => {
        result.current.increment();
      });

      expect(result.current.count).toBe(1);
    });

    it("should decrement the count", () => {
      const { result } = renderHook((startNumber) => useCount(startNumber), {
        initialProps: { startNumber: 0 },
      });

      act(() => {
        result.current.decrement();
      });

      expect(result.current.count).toBe(-1);
    });
  });
});
