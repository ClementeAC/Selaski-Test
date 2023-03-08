import { calculateTypingTime, calculateTotalTypingTime } from './randomKeyboard';

const KEYBOARD: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

describe("calculateTypingTime", () => {
    it("should return 0 if the current cursor position is the same as the digit to be typed", () => {
      expect(calculateTypingTime(1, KEYBOARD, 6)).toBe(0);
    });
  
    it("should return the correct time if the cursor is to the left of the digit to be typed", () => {
      expect(calculateTypingTime(2, KEYBOARD, 0)).toBe(8);
    });
  
    it("should return the correct time if the cursor is to the right of the digit to be typed", () => {
      expect(calculateTypingTime(3, KEYBOARD, 9)).toBe(3);
    });
  });
  
  describe("calculateTotalTypingTime", () => {
    it("should return 0 if given an empty array of numbers", () => {
      expect(calculateTotalTypingTime([], KEYBOARD)).toBe(0);
    });
  
    it("should return the correct time for a simple sequence of numbers", () => {
      expect(calculateTotalTypingTime([1, 2, 3], KEYBOARD)).toBe(9);
    });
  
    it("should return the correct time for a sequence of numbers that requires moving the cursor back and forth", () => {
      expect(calculateTotalTypingTime([2, 1, 4, 3, 0], KEYBOARD)).toBe(24);
    });
  });
  