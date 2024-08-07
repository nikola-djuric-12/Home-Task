import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

// import * as matchers from '@testing-library/jest-dom/matchers';
// import { expect } from 'vitest';

// expect.extend(matchers);
