# Documentation

---

## 1. Design Decisions

### Architectural Choices:

- **React with TypeScript:** This project uses React with TypeScript to ensure static typing, which increases code reliability and reduces errors. TypeScript allows for clearer interface definitions and better collaboration within development teams. By leveraging TypeScript, developers benefit from enhanced code navigation, auto-completion, and early detection of potential issues, which helps in maintaining a scalable codebase.

- **Vite:** Vite was chosen as the build tool for its speed and ease of configuration. It offers instant reloads, which significantly enhances productivity during development. Vite's modern architecture provides a fast development experience with efficient build times, and its support for features like hot module replacement (HMR) and ES modules aligns well with the needs of a modern React application

- **Tailwind CSS:** Tailwind CSS was used for styling, providing a "utility-first" approach that allows for rapid development and maintaining a consistent design. Its integration with PurgeCSS functionality ensures minimized CSS in production. The utility-first approach promotes a more predictable and reusable style system, reducing the need for custom CSS and allowing for more granular control over design elements.

- **Zustand:** Zustand was used for global state management due to its simple API structure and small footprint. It allows easy state management without the need for complex configurations. Zustand's design promotes minimal boilerplate code and easy integration with React's context, making state management straightforward and efficient without sacrificing performance.

- **TanStack Query:** TanStack Query was used for asynchronous data management and caching. This library facilitates seamless synchronization with the backend, data caching, and retry logic for failed requests. By abstracting away data-fetching logic, TanStack Query simplifies the management of server-state and reduces the complexity of handling data synchronization and error handling.

- **Axios:** Axios was chosen for HTTP requests due to its flexibility and the ability to intercept requests and responses. This makes it easier to integrate with authentication and authorization processes. Axios’s robust feature set includes request and response interceptors, which enhances the ability to manage and transform requests and responses, and ensures more secure and reliable communication with the backend.

- **Vitest:** Vitest was used for testing because of its compatibility with Vite, fast configuration, and easy integration with TypeScript. This ensures the reliability of the application through unit tests. Vitest provides a streamlined testing environment with fast test execution and support for TypeScript, contributing to a more efficient development workflow and higher code quality.

- **ESLint and Prettier:** ESLint and Prettier were integrated into the project to enforce code quality and consistency. ESLint helps maintain code quality by identifying and fixing potential errors and stylistic issues, while Prettier ensures consistent code formatting across the project. Together, they streamline the development process, making the codebase cleaner and more maintainable.

---

## 2. Trade-offs

### Tailwind CSS vs UI Libraries:

- **Flexibility vs Development Speed:** The decision not to use a pre-built UI library like Material UI and instead create custom components styled with Tailwind CSS allowed for complete control over the design but increased the time required to develop components and maintain design consistency.

---

## 3. Challenges

### Building Custom Components:

- The decision to avoid using a ready-made UI library and instead build custom components presented challenges in design and implementation. These components had to be built from scratch with careful attention to consistency in design and functionality. This challenge was overcome by carefully planning the component structure and using Tailwind CSS for rapid prototyping and iteration.

---

## 4. Project Structure

- **`src/assets`:** Contains static assets such as images, icons, and fonts used in the application.

- **`src/components`:** Contains reusable components that are carefully designed and styled using Tailwind CSS. These components are built from scratch, tailored to the specific needs of the project, and serve as the building blocks of the application.

- **`src/hooks`:** Custom React hooks.

- **`src/layout`:** Contains components that define the basic layout of the application.

- **`src/lib`:** Common functions and helpers used across different parts of the application.

- **`src/pages`:** The main pages of the application, each represented as a separate React component that leverages reusable components from the `components` directory.

- **`src/services`:** Contains service functions for backend communication via Axios and TanStack Query. These functions encapsulate the logic for API calls and data handling.

- **`src/store`:** Manages the global state of the application using Zustand, with a clear separation of state logic from presentational components.

- **`src/tests`:** Tests written using Vitest.

- **`src/types`:** Defines TypeScript types used throughout the project for better type safety and data control.

---

## 5. Testing

### Testing and Coverage:

- **Vitest:** Vitest was used for writing unit tests. It allows for fast test execution and integrates well with TypeScript and Vite, enabling rapid iterations during development.

- **Component Testing:** Tests were written for some components of the application, ensuring they render correctly and function as expected. These tests also cover user interactions (clicks).

---

## 6. Proposed Enhancements for the /investigations Endpoint

### Filtering by Date Range

- Add the ability to filter investigations based on a date range. This allows users to query investigations that occurred within a specific timeframe.

### Sorting Investigations

- Introduce sorting functionality to allow users to order the results based on fields like `alertFiredTimestamp`, `lastUpdatedTimestamp`, or `severity`.

### Search Functionality

- Implement search functionality to allow users to perform full-text search on investigation titles or other relevant fields.

### Enhanced Error Handling

- Improve error handling to provide more meaningful error messages and possibly log errors for further analysis.

### Provide Metadata in Responses

- Include metadata in responses to give additional information such as total count and pagination details.

### Create New Investigation

- Add a new endpoint to allow the creation of new investigations. This endpoint will accept investigation details and add them to the dataset.

### Update Investigation

- Add an endpoint to update an existing investigation by its ID.

### Delete Investigation

- Add an endpoint to delete an existing investigation by its ID.

### API Documentation

- Provide detailed API documentation using tools like Swagger or Postman for easier integration and testing by developers.

### Rate Limiting

- Implement rate limiting to prevent abuse of the API and ensure fair usage among users. This can help protect the server from being overwhelmed by too many requests.

### Authentication and Authorization

- Add authentication and authorization to restrict access to certain endpoints or data based on user roles.

### Data Validation and Sanitization

- Ensure that incoming data is validated and sanitized to prevent security issues such as SQL injection or cross-site scripting (XSS).
