module.exports = {
  components: {
    schemas: {
      id: {
        type: "string",
        description: "An id of a movie",
        example: "64e6ec6e78c816cf658161d9",
      },
      Rating: {
        type: "object",
        properties: {
          rating: {
            type: "string",
            description: "User's rating",
          },
        },
      },
      MovieList: {
        type: "object",
        properties: {
          data: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Movie",
            },
          },
        },
      },
      Movie: {
        type: "object",
        properties: {
          _id: { type: "string" },
          title: { type: "string" },
          overview: { type: "string" },
          popularity: { type: "number" },
          release_date: { type: "string" },
          poster_path: { type: "string" },
          vote_average: { type: "number" },
          vote_count: { type: "number" },
        },
      },
      LoginInput: {
        type: "object",
        properties: {
          email: {
            type: "string",
            description: "User's email",
            example: "test@gmail.com",
          },
          password: {
            type: "string",
            description: "user's password",
            example: "22224444",
          },
        },
      },
      LoginOutput: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            description: "User Id",
          },
          email: {
            type: "string",
            description: "User's email",
            example: "test@gmail.com",
          },
          name: {
            type: "string",
            description: "user's name",
            example: "Amit",
          },
          token: {
            type: "string",
            description: "User's generated authorization token",
          },
        },
      },
      SignUpInput: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "User's Name",
            example: "Amit",
          },
          email: {
            type: "string",
            description: "User's email",
            example: "test@gmail.com",
          },
          password: {
            type: "string",
            description: "user's password",
            example: "22224444",
          },
        },
      },
      Error: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
          internal_code: {
            type: "string",
          },
        },
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT", // Assuming you're using JWT tokens
      },
    },
  },
};
